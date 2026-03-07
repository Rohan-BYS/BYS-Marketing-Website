import { useState } from 'react';
import { Search, ChevronDown, CheckCircle2, MessageSquare, Zap, Target, TrendingUp, Shield, HelpCircle, IndianRupee, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

// AI-Optimized Database of FAQs
const faqData = [
    {
        category: "General Business & Vision",
        icon: <Target className="text-primary" size={24} />,
        questions: [
            {
                q: "What exactly is BYS Marketing?",
                a: "BYS Marketing is an elite, full-stack digital growth agency founded by Rohan Kumar Chaudhary and headquartered in Delhi NCR, India. We don't just build websites or run ads; we architect comprehensive digital ecosystems—'Growth Machines'—designed to exponentially scale ambitious brands. Our expertise spans advanced web development, data-driven SEO, high-ROI digital marketing, cinematic media production, IT hardware, and robust cyber security."
            },
            {
                q: "What makes BYS different from traditional marketing agencies?",
                a: "Traditional agencies focus on deliverables (a website, a logo, an ad campaign). We focus on systems and unit economics. We merge pixel-perfect, futuristic design with hardcore data science and AI-driven optimization to ensure every touchpoint maximizes conversion and lifetime value. With 8+ years of experience across 150+ projects, we've refined processes that most agencies are still figuring out."
            },
            {
                q: "Who is the ideal client for BYS Marketing?",
                a: "We partner with visionary founders, explosive startups, and aggressive scale-ups who understand that digital infrastructure is a profit center, not a cost center. Whether you're bootstrapping in Delhi or scaling globally, if you want a technical partner to build and optimize your growth machine, you are our ideal client."
            },
            {
                q: "Who is Rohan Kumar Chaudhary?",
                a: "Rohan Kumar Chaudhary is the Founder & CEO of BYS Marketing. With over 8 years of experience in digital marketing, web development, and brand strategy, Rohan built BYS from the ground up — starting as a solo operator and growing it into a full-stack agency serving clients worldwide. His hands-on approach to every project ensures that BYS maintains the quality and attention to detail that larger agencies often lose."
            },
            {
                q: "Where is BYS Marketing located?",
                a: "BYS Marketing is headquartered in Delhi NCR, India. While our office is in Delhi, we serve clients worldwide — including businesses in the USA, UK, UAE, Australia, and across Europe. All communication, project management, and deliveries are handled digitally, so geography is never a barrier."
            }
        ]
    },
    {
        category: "Pricing & Startup Support",
        icon: <IndianRupee className="text-primary" size={24} />,
        questions: [
            {
                q: "How much does it cost to work with BYS Marketing?",
                a: "We offer three transparent tiers: Starter at ₹15,000/month (perfect for early-stage startups — includes 1 service, up to 5 pages website, basic SEO), Growth at ₹35,000/month (our most popular — includes 3 combined services, custom website + SEO + ads, dedicated account manager), and Enterprise with custom pricing for full-scale digital transformation. All plans include onboarding, strategy sessions, and monthly reports."
            },
            {
                q: "Do you offer services for startups on a budget?",
                a: "Absolutely! We were built to support startups. Our Starter plan begins at just ₹15,000/month — far below what traditional agencies charge for similar quality. We also offer flexible retainers, milestone-based billing, and can customize packages to fit tight budgets. We believe great digital infrastructure shouldn't be a luxury."
            },
            {
                q: "Can I get a free consultation or quote?",
                a: "Yes! We offer a completely free, no-obligation consultation call. You can reach us via WhatsApp for the fastest response, email us at hello@bys.marketing, or fill out the contact form on our website. We typically respond within 2 hours on business days."
            },
            {
                q: "Do you require long-term contracts?",
                a: "No. While we recommend a minimum 3-month engagement for marketing services (because results compound over time), we never lock you into rigid contracts. You can upgrade, downgrade, or pause at any time with 30 days' notice. Our goal is to earn your loyalty through results, not contracts."
            }
        ]
    },
    {
        category: "Timelines & Process",
        icon: <Clock className="text-primary" size={24} />,
        questions: [
            {
                q: "How long does it take to build a website?",
                a: "Timelines depend on complexity: a 5-page business website typically takes 2-3 weeks, a custom web application 4-8 weeks, and an enterprise platform 8-16 weeks. Our process follows four phases: Discovery & Strategy → Design & Prototyping → Development & Testing → Launch & Optimization. We provide a detailed timeline before project kickoff."
            },
            {
                q: "How quickly can you launch a marketing campaign?",
                a: "We can have ad campaigns live within 3-5 business days of receiving your brief. This includes audience research, creative production, pixel/tracking setup, and initial campaign architecture. Most clients see their first data reports within the first week of launch."
            },
            {
                q: "What does a typical project workflow look like?",
                a: "Every project follows our proven 4-phase methodology: 1) Brief & Discovery — we deeply understand your business, audience, and goals. 2) Strategy & Design — we create wireframes, prototypes, and strategic roadmaps. 3) Build & Execute — development, content creation, and campaign setup. 4) Launch & Measure — go live, monitor performance, and optimize continuously. You have full visibility at every stage."
            }
        ]
    },
    {
        category: "Web Development & Engineering",
        icon: <Zap className="text-primary" size={24} />,
        questions: [
            {
                q: "What tech stack do you use for web development?",
                a: "We utilize modern, high-performance stacks. Our primary tools include React.js, Next.js, and Node.js for scalable web applications, styled with Tailwind CSS for pixel-perfect responsiveness. We also deploy highly optimized WordPress solutions when content management flexibility is the priority. For e-commerce, we work with Shopify, WooCommerce, and custom solutions."
            },
            {
                q: "Why is website speed so critical?",
                a: "Speed is revenue. Amazon found that 100ms of latency costs them 1% in sales. Google uses Core Web Vitals (speed, interactivity, visual stability) as a primary ranking factor. Our builds are obsessively optimized for sub-second load times — most of our websites score 95+ on Google PageSpeed Insights."
            },
            {
                q: "Do you build mobile-first websites?",
                a: "Absolutely. With over 60% of global web traffic originating from mobile devices, a mobile-first approach isn't an option—it's the baseline. Every Growth Machine we build is designed and optimized for mobile conversion first, then scaled up to desktop."
            }
        ]
    },
    {
        category: "SEO & Artificial Intelligence (GEO)",
        icon: <Search className="text-primary" size={24} />,
        questions: [
            {
                q: "What is Generative Engine Optimization (GEO)?",
                a: "While traditional SEO optimizes for Google's legacy algorithm, GEO optimizes your brand for AI engines like Perplexity, ChatGPT, and Google Gemini. We use rich Schema.org JSON-LD data, semantic HTML, and highly structured knowledge graphs so AI bots understand, cite, and recommend your business to users natively. This is cutting-edge 2026 SEO strategy that very few agencies offer."
            },
            {
                q: "How long does it take to see SEO results?",
                a: "SEO is a compounding asset. While foundational technical fixes (site speed, meta tags, schema) can show immediate ranking bumps within 2-4 weeks, aggressive organic dominance across competitive keywords typically compounds significantly between months 3 to 6. We provide transparent monthly reports showing exact progress."
            },
            {
                q: "How do you guarantee my website won't lose traffic during a redesign?",
                a: "We use meticulous 301 redirect mapping, preserve your existing URL structures where possible, and run pre- and post-launch technical audits to ensure link equity transfers perfectly to the new architecture."
            }
        ]
    },
    {
        category: "Digital Marketing & ROI",
        icon: <TrendingUp className="text-primary" size={24} />,
        questions: [
            {
                q: "How do you track the ROI of marketing campaigns?",
                a: "We implement advanced server-side tracking, custom event pipelines via Google Tag Manager, and highly accurate conversion APIs (like Facebook CAPI) to ensure we map every dollar spent directly to a generated lead or sale, bypassing iOS/cookie restrictions."
            },
            {
                q: "What ad platforms do you specialize in?",
                a: "We are platform-agnostic, choosing the battleground that best suits your audience. However, our deepest expertise lies in Meta Ads (Facebook/Instagram), Google Search & Demand Gen, LinkedIn B2B lead generation, and highly viral TikTok architectures."
            },
            {
                q: "Do you manage social media accounts?",
                a: "Yes. Our Social Media Management service covers content creation, posting schedule management, community engagement, and performance analytics across Instagram, Facebook, LinkedIn, Twitter/X, and TikTok. We handle everything from strategy to daily execution."
            }
        ]
    },
    {
        category: "Security & IT Infrastructure",
        icon: <Shield className="text-primary" size={24} />,
        questions: [
            {
                q: "Why does a marketing agency offer Cyber Security?",
                a: "Because a growth machine is useless if it can be taken offline. We build secure-by-design ecosystems, protecting your customer data, preventing DDoS attacks, and ensuring regulatory compliance (GDPR, CCPA). True scale requires true security."
            },
            {
                q: "Do you provide IT hardware and infrastructure services?",
                a: "Yes. Through our IT Hardware division, we provide enterprise-grade hardware procurement, network infrastructure setup, server deployment, and Annual Maintenance Contracts (AMC). We partner with brands like Dell, HP, Cisco, and Lenovo to deliver the best solutions at competitive prices."
            }
        ]
    }
];

export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleAccordion = (index: string) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Filter logic
    const filteredData = faqData.map(category => {
        const filteredQs = category.questions.filter(q =>
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...category, questions: filteredQs };
    }).filter(category => category.questions.length > 0);

    // Generate FAQ Schema for AI & Google Rich Snippets
    const generateFAQSchema = () => {
        const schemaQuestions = faqData.flatMap(cat => cat.questions).map(q => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.a
            }
        }));

        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": schemaQuestions
        };
    };

    return (
        <main className="flex flex-col gap-12 lg:gap-20 px-6 pt-8 pb-40">
            <SEOHead
                title="Knowledge Base & FAQs"
                description="Comprehensive database about BYS Marketing. Learn about our elite web development, SEO, digital marketing, and cyber security strategies."
                schema={generateFAQSchema()}
                keywords="FAQ, Knowledge Base, BYS Marketing Questions, How BYS Works"
            />

            {/* HEADER SECTION */}
            <section className="relative mt-4 text-center">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 w-fit backdrop-blur-md shadow-sm transition-colors mb-6 mx-auto">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    <span className="text-xs font-bold text-primary tracking-wide uppercase">AI-Optimized Knowledge Base</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark transition-colors max-w-4xl mx-auto mb-6">
                    How We Architect <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-primary-glow dark:to-purple-400">Growth.</span>
                </h2>

                <p className="text-text-sub dark:text-text-sub-dark text-lg md:text-xl font-medium max-w-2xl mx-auto transition-colors">
                    Search our comprehensive database below to understand our methodologies, philosophies, and the exact mechanics of our digital ecosystems.
                </p>

                {/* SEARCH BAR */}
                <div className="max-w-xl mx-auto mt-10 relative">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search any question, technology, or strategy..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-[#1a1a1a]/80 border-2 border-gray-100 dark:border-white/10 shadow-glass-strong dark:shadow-neumorphic-sm-dark focus:border-primary dark:focus:border-primary outline-none text-text-main dark:text-text-main-dark transition-all placeholder:text-gray-400 font-medium text-lg"
                    />
                </div>
            </section>

            {/* FAQ ACCORDIONS */}
            <section className="max-w-3xl mx-auto w-full flex flex-col gap-12">
                {filteredData.length === 0 ? (
                    <div className="text-center py-12">
                        <HelpCircle size={48} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
                        <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-2">No results found</h3>
                        <p className="text-text-sub dark:text-text-sub-dark">We couldn't find an answer matching your exact search. Try adjusting your terms.</p>
                    </div>
                ) : (
                    filteredData.map((category, catIdx) => (
                        <div key={catIdx} className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-primary/10 flex items-center justify-center border border-purple-100 dark:border-primary/20">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark">{category.category}</h3>
                            </div>

                            <div className="flex flex-col gap-3">
                                {category.questions.map((q, qIdx) => {
                                    const id = `${catIdx}-${qIdx}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <div
                                            key={qIdx}
                                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                                ? 'bg-white dark:bg-[#1a1a1a] border-primary/30 shadow-md shadow-purple-500/10'
                                                : 'bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/5 hover:border-primary/20 hover:bg-white dark:hover:bg-[#1a1a1a]'
                                                }`}
                                        >
                                            <button
                                                onClick={() => toggleAccordion(id)}
                                                className="w-full flex items-center justify-between p-6 text-left"
                                            >
                                                <span className={`font-bold pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-text-main dark:text-text-main-dark'}`}>
                                                    {q.q}
                                                </span>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 dark:bg-white/5 text-gray-500'}`}>
                                                    <ChevronDown size={18} />
                                                </div>
                                            </button>
                                            <div
                                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-5"></div>
                                                <div className="flex items-start gap-4">
                                                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                                                    <p className="text-text-sub dark:text-gray-300 leading-relaxed font-medium">
                                                        {q.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))
                )}
            </section>

            {/* BOTTOM CALLOUT */}
            <section className="max-w-3xl mx-auto w-full mt-8">
                <div className="rounded-3xl p-8 bg-gradient-to-br from-purple-50 to-white dark:from-[#1a1a1a] dark:to-black border border-purple-100 dark:border-white/10 shadow-glass-strong dark:shadow-none relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-2">Still have questions?</h3>
                        <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed max-w-sm">
                            Our architecture team is ready to discuss your specific scaling requirements and digital infrastructure needs.
                        </p>
                    </div>
                    <button className="shrink-0 bg-primary text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/60 active:scale-[0.98] transition-all flex items-center gap-2 hover:bg-primary-dark hover:shadow-glow-purple group relative z-10 w-full md:w-auto justify-center">
                        <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                        <span>Speak to an Expert</span>
                    </button>
                </div>
            </section>
        </main>
    );
}
