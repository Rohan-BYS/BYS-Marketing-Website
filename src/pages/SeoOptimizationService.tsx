import {
    BarChart,
    Target,
    MapPin,
    Link as LinkIcon,
    TrendingUp,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Waves from '../components/ReactBits/Waves';
import DesktopSidebar from '../components/DesktopSidebar';
import ServiceCrossLinks from '../components/ServiceCrossLinks';
import OkhlaStory from '../components/OkhlaStory';

interface SeoOptimizationServiceProps {
    locationOverride?: string;
}

export default function SeoOptimizationService({ locationOverride }: SeoOptimizationServiceProps) {
    const isOkhla = locationOverride?.toLowerCase().includes('okhla');

    // Massy Title Logic
    const pageTitle = isOkhla
        ? `#1 SEO Services in ${locationOverride} Industrial Estate for Manufacturers`
        : locationOverride
            ? `SEO Optimization & Search Dominance in ${locationOverride}`
            : "SEO Optimization & Search Dominance";

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Search Engine Optimization",
            "provider": {
                "@type": "Organization",
                "name": "BYS Marketing",
                "url": "https://bys.marketing"
            },
            "areaServed": locationOverride || "Worldwide",
            "description": isOkhla
                ? `Specialized local SEO, technical optimization, and content strategies to dominate search results in ${locationOverride}.`
                : "Mathematical, intent-driven organic optimization that outranks competitors and delivers sustainable traffic."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://bys.marketing/services" },
                { "@type": "ListItem", "position": 3, "name": isOkhla ? `SEO ${locationOverride}` : "SEO Optimization", "item": `https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/seo` }
            ]
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark min-h-screen flex justify-center selection:bg-primary selection:text-white overflow-x-hidden">
            <SEOHead
                title={pageTitle}
                description={isOkhla
                    ? `Top SEO agency in ${locationOverride}. Dominate local search, outrank competitors, and drive high-intent organic traffic to your business.`
                    : "Advanced Search Engine Optimization services. Mathematical, intent-driven strategies that consistently secure top Google rankings and sustainable growth."}
                url={`https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/seo`}
                schema={schemas}
                keywords={`${isOkhla ? `SEO ${locationOverride}, best seo agency ${locationOverride}, industrial seo experts, ` : ''}SEO optimization, search engine optimization, keyword research, technical SEO, local SEO, link building, Google rankings, BYS Marketing`}
            />
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-white dark:bg-primary/5 rounded-full blur-[80px] opacity-80"></div>
            </div>

            <main className="flex flex-col gap-12 lg:gap-20 px-6 pt-8 lg:px-12 max-w-[1440px] mx-auto w-full pb-40">
                <section className="relative mt-4">
                    <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group shadow-floating border-white/60 dark:border-white/10 dark:bg-black/40">
                        <div className="absolute inset-0 z-0 opacity-80">
                            <Waves lineColor="rgba(104, 54, 244, 0.15)" backgroundColor="transparent" waveSpeedX={0.02} waveSpeedY={0.01} waveAmpX={30} waveAmpY={20} friction={0.9} tension={0.01} maxCursorMove={80} xGap={15} yGap={15} />
                        </div>
                        <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-primary/10 border border-purple-100 dark:border-primary/20 w-fit backdrop-blur-sm shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.6)]"></span>
                                <span className="text-xs font-semibold text-primary tracking-wide">Data Driven Authority</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-black dark:text-white">
                                Search Engine<br />
                                <span className="text-primary">Dominance</span>
                            </h2>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium">
                                Outrank your competitors organically and capture high-intent traffic with our comprehensive technical and content-led SEO strategies.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <Link to="/contact" className="flex-1 bg-primary text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:bg-primary-dark">
                                    <span>Start SEO Audit</span>
                                    <TrendingUp className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300">
                        <h4 className="text-3xl font-black text-primary mb-1">Page 1</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Organic Rankings</p>
                    </div>
                    <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300">
                        <h4 className="text-3xl font-black text-primary mb-1">300<span className="text-lg align-top">%</span></h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Traffic Growth</p>
                    </div>
                </section>

                {/* Okhla Personal Narrative */}
                <OkhlaStory location={locationOverride} />

                {/* --- DESKTOP 2-COLUMN LAYOUT WRAPPER --- */}
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start w-full">

                    {/* Main Content Column */}
                    <div className="flex flex-col gap-12 lg:gap-20 w-full min-w-0">

                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-black dark:text-white">SEO Framework</h3>
                                <span className="text-sm text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-1 cursor-pointer">
                                    Capabilities <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Keyword Research</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">High-intent targeting</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                        <BarChart size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Technical Audit</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Site speed & architecture</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Local SEO</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">GMB & directory citations</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                        <LinkIcon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Link Building</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Authority acquisition</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SEO RANKING PROCESS — UNIQUE SECTION */}
                        <section className="py-2">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-black dark:text-white">Our SEO Process</h3>
                                <span className="text-xs font-bold text-primary bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">5-Step Framework</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { step: '01', title: 'Deep Crawl Analysis', desc: 'Complete site audit using Screaming Frog, Ahrefs, and custom scripts to identify technical debt.' },
                                    { step: '02', title: 'Keyword Universe Mapping', desc: 'Building a comprehensive keyword map covering head terms, long-tail, and question-based queries.' },
                                    { step: '03', title: 'On-Page Optimization', desc: 'Title tags, meta descriptions, header hierarchy, internal linking, and content gap analysis.' },
                                    { step: '04', title: 'Off-Page Authority', desc: 'Strategic link building through guest posts, digital PR, HARO, and niche directory submissions.' },
                                    { step: '05', title: 'Monitor & Iterate', desc: 'Weekly rank tracking, monthly reporting, and continuous algorithm adaptation strategies.' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-5 flex items-center gap-4 group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-xs shrink-0">
                                            {item.step}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-sm text-black dark:text-white">{item.title}</h4>
                                            <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* GOOGLE RANKING FACTORS — DATA SECTION */}
                        <section className="bg-black rounded-3xl p-8 text-white mb-4">
                            <h3 className="text-xl font-bold mb-2">What Actually Moves Rankings</h3>
                            <p className="text-white/50 text-sm mb-6">Based on our analysis of 10,000+ ranking positions across client sites.</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { factor: 'Content Quality', weight: '38%', bar: 'w-[95%]' },
                                    { factor: 'Backlink Profile', weight: '27%', bar: 'w-[68%]' },
                                    { factor: 'Technical Health', weight: '21%', bar: 'w-[53%]' },
                                    { factor: 'User Signals', weight: '14%', bar: 'w-[35%]' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-xs font-bold text-white">{item.factor}</p>
                                            <p className="text-xs font-black text-primary">{item.weight}</p>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className={`h-full bg-primary rounded-full ${item.bar}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Desktop Sticky Sidebar Column */}
                    <DesktopSidebar serviceName="SEO Optimization" />

                </div>
                {/* --- END DESKTOP 2-COLUMN LAYOUT --- */}

                {/* CTA Block */}
                <section className="relative rounded-3xl overflow-hidden p-8 mb-8 bg-surface-light dark:bg-black/40 border border-gray-100 dark:border-white/10 shadow-neumorphic-sm dark:shadow-none">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10 text-center flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Ready to Dominate Search?</h3>
                        <p className="text-text-sub dark:text-text-sub-dark text-sm mb-6 max-w-xs mx-auto">Get a free SEO audit and discover your path to Page 1 organic rankings.</p>
                        <Link to="/contact" className="w-full inline-flex py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/30 hover:shadow-xl hover:scale-[1.02] hover:bg-primary-dark transition-all items-center justify-center gap-2">
                            <span>Start Free SEO Audit</span>
                            <TrendingUp className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

                <ServiceCrossLinks currentService="SEO Optimization" />
            </main>
        </div>
    );
}
