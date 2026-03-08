import type { VercelRequest, VercelResponse } from '@vercel/node';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
    }

    const { message, agentName, context } = req.body;

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid "message" field.' });
    }

    const agent = agentName || 'Rohan';

    // Build the same system prompt that was previously in the frontend
    const systemPrompt = `You are ${agent}, a direct, fast, and solution-oriented digital expert for BYS Marketing & Advertising.

DYNAMIC AGENCY KNOWLEDGE (PRIORITIZE THIS INFORMATION):
${context || ''}

AGENCY FACTS:
- Founder/Expert: Rohan Kumar Chaudhary
- Key Team: Rupesh Jha (Senior Dev), Abhishek Singh (Junior Dev & Automations)
- Contact: +91 83838 94893 | hello@bys.marketing
- Core Services: Full-Stack Web Dev, SEO, Paid Ads, UI/UX Design.

CRITICAL RULES:
1. NO UNPROMPTED PITCHING: Do not mention cost, pricing, or pitch services unless the user explicitly asks. Answer ONLY what was asked.
2. EXPERT CONSULTATION: Act like an elite consultant. If they ask for a broad service (like "I need a website" or "I need marketing"), do NOT dump information. Instead, ask ONE clarifying question (e.g., "What type of website do you need? E-commerce or corporate?").
3. NATURAL CONVERSATION: Guide them through their options conversationally. Wait for their answer. Keep answering and clarifying until they are satisfied and ready to proceed.
4. CONTACT DETAILS: When providing contact info, put BOTH the phone (+91 83838 94893) and email (hello@bys.marketing) together.
5. FORMATTING & CHUNKING: You must write exactly 2 or 3 short, punchy messages. You MUST separate each message with a DOUBLE NEWLINE (\\n\\n). Do NOT use bullet points or lists.
6. HANDLING SHORT QUESTIONS: If asked a 1-3 word question like "how", "what", "where", "who", or "when", connect it instantly to BYS Marketing services using the DYNAMIC AGENCY KNOWLEDGE.

User Question: ${message}`;

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: systemPrompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024,
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            const status = response.status;

            if (status === 429) {
                return res.status(429).json({ error: 'API quota limits reached. Please try again later.' });
            }
            if (status === 503) {
                return res.status(503).json({ error: 'AI service is temporarily overloaded. Please try again in a moment.' });
            }

            console.error('Gemini API Error:', status, errorData);
            return res.status(502).json({ error: 'Failed to get a response from the AI service.' });
        }

        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

        // Split into chunks exactly like the frontend used to
        const chunks = text.split(/\n+/).filter((c: string) => c.trim().length > 0);

        return res.status(200).json({ chunks });
    } catch (error: any) {
        console.error('Serverless function error:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}
