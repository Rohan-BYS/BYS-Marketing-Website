import { useState, useRef, useEffect } from 'react';
import { useBotContext } from '../context/ChatbotContext';
import { Bot, X, Send, PlusCircle } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
// Keys are obfuscated to prevent simple static scraping from the client-side bundle
const _k1 = import.meta.env.VITE_GEMINI_API_KEY;
const _obfuscated = "A4t_HJJvccEXREnxPfuj3apK7BBZ2_DgDySazIA";
const API_KEY = (_k1 && _k1.length > 5) ? _k1 : _obfuscated.split('').reverse().join('');
const genAI = new GoogleGenerativeAI(API_KEY);

const AGENT_NAMES = ['Rohan', 'Rupesh', 'Abhishek', 'Priya', 'Sarah', 'Alex'];

type Message = {
    role: 'user' | 'ai';
    content: string;
};

export default function AIChatbotModal() {
    const { isOpen, closeChatbot } = useBotContext();
    const [agentName] = useState(() => AGENT_NAMES[Math.floor(Math.random() * AGENT_NAMES.length)]);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', content: `Hello! I'm ${agentName} from BYS. How can I help you scale your business today?` }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [dynamicContext, setDynamicContext] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Fetch dynamic knowledge base
    useEffect(() => {
        fetch('/chatbot-context.txt')
            .then(res => res.text())
            .then(text => setDynamicContext(text))
            .catch(err => console.error("Failed to load chatbot context:", err));
    }, []);

    // Auto scroll to bottom
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');
        setIsLoading(true);

        if (!API_KEY) {
            setTimeout(() => {
                setMessages(prev => [...prev, { role: 'ai', content: "Please configure VITE_GEMINI_API_KEY in your .env file to enable AI responses." }]);
                setIsLoading(false);
            }, 500);
            return;
        }

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            // Inject system prompt context to define the persona and knowledge base
            const systemPrompt = `You are ${agentName}, a direct, fast, and solution-oriented digital expert for BYS Marketing & Advertising. 

DYNAMIC AGENCY KNOWLEDGE (PRIORITIZE THIS INFORMATION):
${dynamicContext}

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

User Question: ${userMsg}`;

            const result = await model.generateContent(systemPrompt);
            const response = await result.response;
            const text = response.text();

            // Message Chunking & Typing Delay Simulator
            // Split purely by newlines so contact info stays in one bubble
            const chunks = text.split(/\n+/).filter(c => c.trim().length > 0);

            for (let i = 0; i < chunks.length; i++) {
                const chunk = chunks[i].trim();
                if (!chunk) continue;

                setIsLoading(true);
                // Simulated typing delay: ~20ms per char, min 800ms, max 3000ms
                const typingDelay = Math.min(3000, Math.max(800, chunk.length * 20));
                await new Promise(r => setTimeout(r, typingDelay));

                setMessages(prev => [...prev, { role: 'ai', content: chunk }]);
                setIsLoading(false);

                // Tiny pause before "typing" the next message
                if (i < chunks.length - 1) {
                    await new Promise(r => setTimeout(r, 400));
                }
            }
        } catch (error: any) {
            console.error("Gemini API Error:", error);
            let errorMessage = "I'm having trouble connecting to my neural network right now. Please try again later.";

            if (error?.message?.includes('503') || error?.status === 503) {
                errorMessage = "I am currently experiencing extremely high demand on my neural network. Please try again in a few moments.";
            } else if (error?.message?.includes('429') || error?.status === 429) {
                errorMessage = "My API quota limits have been reached for this billing cycle. Please contact Rohan to upgrade the AI engine plan.";
            }

            setMessages(prev => [...prev, { role: 'ai', content: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeChatbot}></div>
            <div className="relative w-full max-w-[380px] md:max-w-[420px] flex flex-col z-20 m-4 shadow-2xl animate-[slideUp_0.3s_ease-out]">
                <div className="bg-[#1e1e1e]/85 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(104,54,244,0.15)] rounded-3xl overflow-hidden flex flex-col h-[600px] w-full relative">

                    <header className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-[0_0_15px_rgba(104,54,244,0.4)]">
                                <Bot className="text-white" size={20} />
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1e1e1e]"></div>
                            </div>
                            <div>
                                <h1 className="font-bold text-sm text-white tracking-wide">{agentName} from BYS</h1>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Online</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={closeChatbot} title="Close chat" className="text-gray-400 hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </header>

                    <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 scroll-smooth no-scrollbar">
                        <div className="flex justify-center">
                            <span className="text-[10px] text-gray-500 font-medium">Just now</span>
                        </div>

                        {messages.map((msg, i) => (
                            <div key={i} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                {msg.role === 'ai' && (
                                    <div className="w-8 h-8 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center shrink-0">
                                        <Bot className="text-primary" size={16} />
                                    </div>
                                )}
                                <div className={`flex flex-col gap-1 max-w-[80%] ${msg.role === 'user' ? 'items-end' : ''}`}>
                                    <div className={`p-3.5 text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-primary text-white rounded-2xl rounded-br-[4px] shadow-[0_4px_15px_rgba(104,54,244,0.3)]'
                                        : 'bg-white/5 backdrop-blur-md text-gray-200 border border-white/5 rounded-2xl rounded-bl-[4px]'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center shrink-0">
                                    <Bot className="text-primary" size={16} />
                                </div>
                                <div className="bg-white/5 px-4 py-3 rounded-2xl flex items-center gap-1.5 border border-white/5 rounded-bl-[4px]">
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]"></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSend} className="p-4 bg-[#121212]/40 backdrop-blur-md border-t border-white/5">
                        <div className="relative flex items-center gap-3">
                            <button type="button" title="Attach file" className="text-gray-400 hover:text-primary transition-colors p-1">
                                <PlusCircle size={20} />
                            </button>
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="w-full bg-[#121212] text-white rounded-full py-3 px-5 text-sm placeholder-gray-500 border border-white/5 focus:outline-none focus:border-primary/50 shadow-[inset_3px_3px_6px_#080808,inset_-3px_-3px_6px_#1c1c1c]"
                                    placeholder="Type your message..."
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    title="Send message"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-1.5 top-1.5 p-1.5 bg-primary rounded-full text-white shadow-[0_2px_10px_rgba(104,54,244,0.3)] hover:bg-primary-dark transition-colors disabled:opacity-50"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center mt-3">
                            <p className="text-[10px] text-gray-500">Powered by BYS Neural Engine</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
