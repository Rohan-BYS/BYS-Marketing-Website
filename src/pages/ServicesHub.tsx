import {
    Globe,
    Megaphone,
    Camera,
    HardDrive,
    MessageSquare,
    Search,
    PenTool,
    Share2,
    FileText,
    Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MultiStepIntake from '../components/MultiStepIntake';
import { useState } from 'react';

export default function ServicesHub() {
    // const { toggleChatbot } = useBotContext(); // Uncomment if useBotContext is needed and imported
    const [isIntakeOpen, setIsIntakeOpen] = useState(false);
    const services = [
        { name: "Web\nDevelopment", icon: <Globe size={32} strokeWidth={1.5} />, path: "/services/web-development", desc: "Blazing-fast, mobile-first sites", price: "₹25K", badge: "Most Popular", cat: "dev" },
        { name: "Digital\nMarketing", icon: <Megaphone size={32} strokeWidth={1.5} />, path: "/services/digital-marketing", desc: "ROI-driven paid campaigns", price: "₹15K/mo", badge: "Hot", cat: "marketing" },
        { name: "Media\nProduction", icon: <Camera size={32} strokeWidth={1.5} />, path: "/services/media-production", desc: "Reels, ads & cinematic content", price: "₹10K", cat: "creative" },
        { name: "IT \nHardware", icon: <HardDrive size={32} strokeWidth={1.5} />, path: "/services/it-hardware", desc: "Enterprise-grade procurement", price: "Custom", cat: "dev" },
        { name: "Strategic\nConsultation", icon: <MessageSquare size={32} strokeWidth={1.5} />, path: "/services/consultation", desc: "1-on-1 growth strategy calls", price: "Free", badge: "Hot", cat: "marketing" },
        { name: "SEO\nOptimization", icon: <Search size={32} strokeWidth={1.5} />, path: "/services/seo", desc: "Rank #1 on Google & AI engines", price: "₹12K/mo", badge: "Most Popular", cat: "marketing" },
        { name: "UI/UX\nDesign", icon: <PenTool size={32} strokeWidth={1.5} />, path: "/services/design", desc: "Figma prototypes & design systems", price: "₹20K", cat: "creative" },
        { name: "Social\nMedia", icon: <Share2 size={32} strokeWidth={1.5} />, path: "/services/social", desc: "Full social media management", price: "₹10K/mo", cat: "marketing" },
        { name: "Content\nStrategy", icon: <FileText size={32} strokeWidth={1.5} />, path: "/services/content", desc: "Blog, copy & content marketing", price: "₹8K/mo", cat: "marketing" },
        { name: "Cyber\nSecurity", icon: <Shield size={32} strokeWidth={1.5} />, path: "/services/security", desc: "Audits, DDoS protection & compliance", price: "₹15K", cat: "dev" },
    ];

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden bg-background-light dark:bg-[#0a0a0a]">
            {/* Background Orbs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-white dark:bg-primary/5 rounded-full blur-[80px] opacity-80"></div>
            </div>

            {/* Blurred Background Hero (Matches HTML aesthetic) */}
            <div className="w-full h-full overflow-y-auto no-scrollbar pb-32 flex flex-col items-center">
                <div className="w-full max-w-md md:max-w-2xl lg:max-w-[800px] flex flex-col relative pointer-events-none select-none filter blur-[4px] dark:blur-[6px] opacity-60 dark:opacity-30 pt-12">
                    <main className="flex flex-col gap-10 px-6">
                        <section className="relative mt-4">
                            <div className="glass-panel rounded-3xl p-8 relative overflow-hidden shadow-floating border-white/60 dark:border-white/5 dark:bg-black/40">
                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-primary/10 border border-purple-100 dark:border-primary/20 w-fit">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        <span className="text-xs font-semibold text-primary tracking-wide">Accepting new projects</span>
                                    </div>
                                    <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark">
                                        We Build<br />
                                        <span className="text-primary">Growth Machines</span>
                                    </h2>
                                    <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium">
                                        Engineering digital experiences that convert. Precision marketing met with beautiful design.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <button
                                            onClick={() => setIsIntakeOpen(true)}
                                            className="bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                                        >
                                            <span>Start Project</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            {/* Multi-Step Intake Overlay */}
            {isIntakeOpen && (
                <MultiStepIntake onClose={() => setIsIntakeOpen(false)} />
            )}

            {/* Frosted Overlay */}
            <div className="fixed inset-0 z-40 bg-slate-900/40 dark:bg-black/60 backdrop-blur-md animate-in fade-in duration-500"></div>

            <div
                className="fixed bottom-0 left-0 w-full z-50 flex flex-col items-center justify-end pb-28 md:pb-32 px-4 pointer-events-none"
                style={{ transform: 'translateY(100%)', animation: 'slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
            >
                <div className="w-full max-w-4xl p-6 md:p-8 rounded-[2.5rem] relative overflow-y-auto no-scrollbar max-h-[85vh] bg-white/85 dark:bg-[#1a1a2e]/90 backdrop-blur-2xl border border-white/60 dark:border-primary/15 shadow-[0_-20px_50px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] dark:shadow-[0_-20px_50px_rgba(104,54,244,0.15),inset_0_0_0_1px_rgba(104,54,244,0.1)] pointer-events-auto">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 px-2">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-tight">All Services</h3>
                        <span className="text-xs font-medium text-primary bg-purple-50 dark:bg-primary/10 px-2 py-1 rounded-lg border border-purple-100 dark:border-primary/20">
                            10 Available
                        </span>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4 md:gap-x-8">
                        {services.map((service, index) => (
                            <Link
                                to={service.path}
                                key={index}
                                className="group flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform relative"
                            >
                                {service.badge && (
                                    <span className={`absolute -top-2 -right-1 z-10 text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full ${service.badge === 'Most Popular' ? 'bg-primary text-white' : 'bg-orange-500 text-white'}`}>{service.badge === 'Most Popular' ? '⭐ Popular' : '🔥 Hot'}</span>
                                )}
                                <div className="w-14 h-14 md:w-16 md:h-16 relative bg-gradient-to-br from-white to-gray-50 dark:from-[#2a2a40] dark:to-[#1e1e30] rounded-2xl shadow-[5px_5px_10px_rgba(163,177,198,0.4),-5px_-5px_10px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.02)] dark:shadow-[3px_3px_8px_rgba(0,0,0,0.5),-3px_-3px_8px_rgba(104,54,244,0.08),inset_1px_1px_2px_rgba(255,255,255,0.08)] flex items-center justify-center text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:text-primary-dark group-hover:shadow-[8px_12px_20px_rgba(104,54,244,0.2),-5px_-5px_10px_rgba(255,255,255,0.8)] dark:group-hover:shadow-[6px_8px_18px_rgba(104,54,244,0.35)] after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br after:from-white/60 dark:after:from-white/8 after:to-transparent after:pointer-events-none border border-transparent dark:border-white/5">
                                    {service.icon}
                                </div>
                                <span className="text-[11px] md:text-xs font-semibold text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors text-center leading-tight whitespace-pre-line">
                                    {service.name}
                                </span>
                                <span className="text-[9px] font-bold text-primary dark:text-primary/80 tracking-wide">from {service.price}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Bottom Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-300/50 dark:bg-gray-700/50 rounded-full mt-4"></div>
                </div>
            </div>

            <style>{`
                @keyframes slide-up {
                    0% { transform: translateY(100%); }
                    100% { transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
