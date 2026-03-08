import {
    Play,
    TrendingUp,
    CheckCircle,
    PenBox,
    MailOpen,
    PenTool,
    FileText,
    CalendarDays,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Waves from '../components/ReactBits/Waves';
import DesktopSidebar from '../components/DesktopSidebar';
import ServiceCrossLinks from '../components/ServiceCrossLinks';

interface ContentStrategyServiceProps {
    locationOverride?: string;
}

export default function ContentStrategyService({ locationOverride }: ContentStrategyServiceProps) {
    const pageTitle = locationOverride
        ? `Content Strategy & Marketing Services in ${locationOverride}`
        : "Content Strategy & Marketing Services";

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Content Strategy",
            "provider": {
                "@type": "Organization",
                "name": "BYS Marketing",
                "url": "https://bys.marketing"
            },
            "areaServed": locationOverride || "Worldwide",
            "description": "High-converting SEO content, brand copywriting, technical writing, and automated content pipelines for enterprise scaling."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://bys.marketing/services" },
                { "@type": "ListItem", "position": 3, "name": "Content Strategy", "item": `https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/content` }
            ]
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark min-h-screen flex justify-center selection:bg-primary selection:text-white overflow-x-hidden">
            <SEOHead
                title={pageTitle}
                description="High-converting SEO content strategy, brand copywriting, technical writing, and automated media pipelines. We create content that ranks and converts."
                url={`https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/content`}
                schema={schemas}
                keywords="content strategy, blog marketing, email marketing, copywriting, whitepapers, content marketing agency, SEO content, BYS Marketing"
            />
            {/* Background Orbs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-white dark:bg-primary/5 rounded-full blur-[80px] opacity-80"></div>
            </div>

            <main className="flex flex-col gap-12 lg:gap-20 px-6 pt-8 lg:px-12 max-w-[1440px] mx-auto w-full pb-40">
                {/* Hero */}
                <section className="relative mt-4">
                    <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group shadow-floating border-white/60 dark:border-white/10 dark:bg-black/40">
                        <div className="absolute inset-0 z-0 opacity-80">
                            <Waves lineColor="rgba(104, 54, 244, 0.15)" backgroundColor="transparent" waveSpeedX={0.02} waveSpeedY={0.01} waveAmpX={30} waveAmpY={20} friction={0.9} tension={0.01} maxCursorMove={80} xGap={15} yGap={15} />
                        </div>
                        <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-primary/10 border border-purple-100 dark:border-primary/20 w-fit backdrop-blur-sm shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.6)]"></span>
                                <span className="text-xs font-semibold text-primary tracking-wide">Strategy Slots Open</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-black dark:text-white">
                                Narratives that<br />
                                <span className="text-primary">Build Revenue</span>
                            </h2>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium">
                                Transforming casual readers into loyal advocates. Data-driven storytelling that positions your brand as the authority.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <button title="Boost Content Strategies" className="flex-1 bg-primary text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/60 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:bg-primary-dark hover:shadow-glow-purple">
                                    <span>Boost My Brand</span>
                                    <TrendingUp size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                                <button title="Play Video" aria-label="Play Video" className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] text-primary shadow-neumorphic-purple dark:shadow-none active:shadow-neumorphic-pressed flex items-center justify-center hover:scale-105 transition-transform border border-gray-50 dark:border-white/10 shrink-0">
                                    <Play size={24} className="fill-current" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300">
                        <div className="w-10 h-10 mx-auto bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-3">
                            <TrendingUp className="text-primary w-5 h-5" />
                        </div>
                        <h4 className="text-2xl font-black text-black dark:text-white mb-1">2.4<span className="text-primary text-lg align-top">x</span></h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Content Efficiency</p>
                    </div>
                    <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300">
                        <div className="w-10 h-10 mx-auto bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-3">
                            <CheckCircle className="text-primary w-5 h-5" />
                        </div>
                        <h4 className="text-2xl font-black text-black dark:text-white mb-1">Top <span className="text-primary text-lg align-top">1%</span></h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Brand Authority</p>
                    </div>
                </section>

                {/* --- DESKTOP 2-COLUMN LAYOUT WRAPPER --- */}
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start w-full">

                    {/* Main Content Column */}
                    <div className="flex flex-col gap-12 lg:gap-20 w-full min-w-0">

                        {/* Core Capabilities Grid */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-black dark:text-white">Core Capabilities</h3>
                                <span className="text-sm text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-1 cursor-pointer">
                                    See all <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-3 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary relative overflow-hidden">
                                        <PenBox className="relative z-10 w-6 h-6" />
                                        <div className="absolute inset-0 bg-primary/5 rounded-xl transform rotate-45 translate-y-4 translate-x-4"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Blog Strategy</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">SEO & Thought Leadership</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-3 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary relative overflow-hidden">
                                        <MailOpen className="relative z-10 w-6 h-6" />
                                        <div className="absolute inset-0 bg-primary/5 rounded-xl transform rotate-45 translate-y-4 translate-x-4"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Email Marketing</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Nurture & Conversion</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-3 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary relative overflow-hidden">
                                        <PenTool className="relative z-10 w-6 h-6" />
                                        <div className="absolute inset-0 bg-primary/5 rounded-xl transform rotate-45 translate-y-4 translate-x-4"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Copywriting</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Landing Pages & Ads</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-3 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary relative overflow-hidden">
                                        <FileText className="relative z-10 w-6 h-6" />
                                        <div className="absolute inset-0 bg-primary/5 rounded-xl transform rotate-45 translate-y-4 translate-x-4"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Whitepapers</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Deep Research & Insights</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Typography Excellence Animation Block */}
                        <section className="overflow-hidden py-4">
                            <h3 className="text-xl font-bold text-black dark:text-white mb-6">Typography Excellence</h3>
                            <div className="relative w-full overflow-hidden bg-surface-light dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-3xl p-8 shadow-neumorphic-sm dark:shadow-none">
                                <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-surface-light via-transparent to-surface-light dark:from-black dark:to-black opacity-80"></div>
                                <div className="flex flex-col gap-8 opacity-80">
                                    <div className="flex whitespace-nowrap overflow-hidden">
                                        <style>{`
                                        @keyframes scrollInfo {
                                            0% { transform: translateX(0); }
                                            100% { transform: translateX(-50%); }
                                        }
                                        .animate-scroll {
                                            animation: scrollInfo 20s linear infinite;
                                        }
                                    `}</style>
                                        <div className="animate-scroll flex gap-8">
                                            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-800">IMPACTFUL</span>
                                            <span className="text-6xl font-black text-black dark:text-white">HEADLINES</span>
                                            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-800">IMPACTFUL</span>
                                            <span className="text-6xl font-black text-black dark:text-white">HEADLINES</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8 border-t border-gray-200 dark:border-white/10 pt-8">
                                        <div>
                                            <p className="font-serif italic text-3xl text-primary mb-2">Serif</p>
                                            <p className="text-xs text-text-sub dark:text-text-sub-dark">For editorial elegance and trustworthiness in long-form content.</p>
                                        </div>
                                        <div>
                                            <p className="font-sans font-bold text-3xl text-black dark:text-white mb-2">Sans</p>
                                            <p className="text-xs text-text-sub dark:text-text-sub-dark">Modern geometric precision for UI and quick scanning.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CONTENT PERFORMANCE MATRIX — UNIQUE SECTION */}
                        <section className="bg-black rounded-3xl p-8 text-white mb-4">
                            <h3 className="text-xl font-bold mb-2">Content Performance Matrix</h3>
                            <p className="text-white/50 text-sm mb-6">How BYS content outperforms industry benchmarks.</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { metric: '4.2x', label: 'Organic Traffic', sub: 'vs industry average', color: 'text-green-400' },
                                    { metric: '68%', label: 'Lead Conversion', sub: 'from gated content', color: 'text-blue-400' },
                                    { metric: '12min', label: 'Avg Read Time', sub: 'deep engagement', color: 'text-yellow-400' },
                                    { metric: '340%', label: 'Social Shares', sub: 'above benchmark', color: 'text-pink-400' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                        <p className={`text-2xl font-black ${item.color} mb-1`}>{item.metric}</p>
                                        <p className="text-xs font-bold text-white mb-0.5">{item.label}</p>
                                        <p className="text-[9px] text-white/30">{item.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CONTENT FORMATS — UNIQUE SECTION */}
                        <section className="py-2">
                            <h3 className="text-xl font-bold text-black dark:text-white mb-6">Content Formats We Master</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    { emoji: '📝', format: 'Long-Form Articles' },
                                    { emoji: '📧', format: 'Email Sequences' },
                                    { emoji: '📊', format: 'Case Studies' },
                                    { emoji: '🎙️', format: 'Podcast Scripts' },
                                    { emoji: '📋', format: 'Landing Pages' },
                                    { emoji: '📖', format: 'Whitepapers & eBooks' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-xl p-4 text-center group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                                        <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">{item.emoji}</span>
                                        <p className="text-[10px] font-bold text-text-sub dark:text-text-sub-dark">{item.format}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Desktop Sticky Sidebar Column */}
                    <DesktopSidebar serviceName="Content Strategy" />

                </div>
                {/* --- END DESKTOP 2-COLUMN LAYOUT --- */}

                {/* Bottom CTA Block */}
                <section className="relative rounded-3xl overflow-hidden p-8 mb-8 bg-surface-light dark:bg-black/40 border border-gray-100 dark:border-white/10 shadow-neumorphic-sm dark:shadow-none">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 w-48 h-48 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 text-center flex flex-col items-center">
                        <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 shadow-neumorphic-sm dark:shadow-none text-primary">
                            <CalendarDays size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Start Your Content Engine</h3>
                        <p className="text-text-sub dark:text-text-sub-dark text-sm mb-6 max-w-xs mx-auto">Ready to dominate your niche with superior content? Let's plan your editorial calendar.</p>
                        <Link to="/contact" className="w-full inline-block py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/30 hover:shadow-xl hover:scale-[1.02] hover:bg-primary-dark transition-all">
                            Schedule Strategy Call
                        </Link>
                    </div>
                </section>

                <ServiceCrossLinks currentService="Content Strategy" />
            </main>
        </div>
    );
}
