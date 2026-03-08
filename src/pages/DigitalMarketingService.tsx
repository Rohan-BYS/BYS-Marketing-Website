import StarBorder from '../components/ReactBits/StarBorder';
import { TrendingUp, Play, Rocket, Layers, Eye, BarChart3, Target, Zap, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Waves from '../components/ReactBits/Waves';
import DesktopSidebar from '../components/DesktopSidebar';
import ServiceCrossLinks from '../components/ServiceCrossLinks';
import OkhlaStory from '../components/OkhlaStory';

interface DigitalMarketingServiceProps {
    locationOverride?: string;
}

export default function DigitalMarketingService({ locationOverride }: DigitalMarketingServiceProps) {
    const isOkhla = locationOverride?.toLowerCase().includes('okhla');

    // Massy Title Logic
    const pageTitle = isOkhla
        ? `Top Digital Marketing Agency in ${locationOverride} – Lead Generation Experts`
        : locationOverride
            ? `Premium Digital Marketing Agency in ${locationOverride}`
            : "Strategic Digital Marketing Services";

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Marketing",
            "provider": {
                "@type": "Organization",
                "name": "BYS Marketing",
                "url": "https://bys.marketing"
            },
            "areaServed": locationOverride || "Worldwide",
            "description": isOkhla
                ? `Specialized digital marketing, SEO, and lead generation for B2B industrial businesses in ${locationOverride}.`
                : "Performance-based digital marketing, paid acquisition, and organic growth strategies. We scale brands profitably."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://bys.marketing/services" },
                { "@type": "ListItem", "position": 3, "name": isOkhla ? `Digital Marketing ${locationOverride}` : "Digital Marketing", "item": `https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/digital-marketing` }
            ]
        }
    ];

    return (
        <main className="flex flex-col gap-12 lg:gap-20 px-6 pt-8 lg:px-12 max-w-[1440px] mx-auto w-full pb-40">
            <SEOHead
                title={pageTitle}
                description={isOkhla
                    ? `Top digital marketing agency in ${locationOverride}. Drive B2B leads, scale your industrial brand, and dominate local search rankings.`
                    : "Data-driven digital marketing agency. We specialize in paid acquisition, SEO, and comprehensive growth strategies that deliver measurable ROI."}
                url={`https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/digital-marketing`}
                schema={schemas}
                keywords={`${isOkhla ? `digital marketing ${locationOverride}, best agency ${locationOverride}, industrial b2b marketing, ` : ''}digital marketing agency, PPC management, social media marketing, content marketing, ROI optimization, Google Ads, Meta Ads, BYS Marketing`}
            />

            {/* HERO SECTION */}
            <section className="relative mt-4">
                <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group shadow-floating border-white/60 dark:border-white/5 dark:bg-[#1a1a1a]/80 transition-all">
                    <div className="absolute inset-0 z-0 opacity-80">
                        <Waves lineColor="rgba(104, 54, 244, 0.15)" backgroundColor="transparent" waveSpeedX={0.02} waveSpeedY={0.01} waveAmpX={30} waveAmpY={20} friction={0.9} tension={0.01} maxCursorMove={80} xGap={15} yGap={15} />
                    </div>
                    <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-500"></div>
                    <div className="relative z-10 flex flex-col gap-6 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 w-fit backdrop-blur-sm shadow-sm transition-colors">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.6)]"></span>
                            <span className="text-xs font-semibold text-primary tracking-wide">Revenue-Generating Campaigns</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark transition-colors">
                            Strategic<br />
                            <span className="text-primary">Digital Marketing</span>
                        </h2>

                        <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium transition-colors">
                            Unlock potential with data-driven growth strategies. We turn clicks into customers and impressions into income.
                        </p>

                        <div className="flex gap-4 pt-2">
                            <button className="flex-1 bg-primary text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/60 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:bg-primary-dark hover:shadow-glow-purple">
                                <span>Boost My ROI</span>
                                <TrendingUp size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                            <button aria-label="Play video" className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] text-primary shadow-neumorphic-purple dark:shadow-none active:shadow-neumorphic-pressed flex items-center justify-center hover:scale-105 transition-transform border border-gray-50 dark:border-white/10 shrink-0">
                                <Play size={24} className="fill-current" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS GRID */}
            <section className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:shadow-glow-purple transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 dark:bg-primary/20 rounded-bl-full transition-colors"></div>
                    <h4 className="text-3xl font-black text-primary mb-1">3.5x</h4>
                    <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold transition-colors">Average ROI</p>
                </div>
                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:shadow-glow-purple transition-all duration-300 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-50 dark:bg-primary/20 rounded-tr-full transition-colors"></div>
                    <h4 className="text-3xl font-black text-primary mb-1">24/7</h4>
                    <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold transition-colors">Campaign Monitoring</p>
                </div>
            </section>

            {/* Okhla Personal Narrative */}
            <OkhlaStory location={locationOverride} />

            {/* --- DESKTOP 2-COLUMN LAYOUT WRAPPER --- */}
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start w-full">

                {/* Main Content Column */}
                <div className="flex flex-col gap-12 lg:gap-20 w-full min-w-0">

                    {/* CLIENT SUCCESS */}
                    <section className="bg-black rounded-3xl p-8 mb-4">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-white">Client Success Snippets</h3>
                        </div>
                        <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
                            {/* Card 1 */}
                            <div className="snap-center shrink-0 w-[280px] md:w-[320px] h-[320px] rounded-[2rem] relative overflow-hidden group shadow-xl shadow-gray-200 dark:shadow-none border border-transparent dark:border-white/5 cursor-pointer">
                                <img alt="Design Furniture Catalog" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/portfolio/df.png" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                                    <div className="flex gap-2 mb-2">
                                        <span className="text-[10px] font-bold text-white bg-primary backdrop-blur-md px-2 py-1 rounded-md shadow-lg">B2B/B2C</span>
                                        <span className="text-[10px] font-bold text-black bg-white backdrop-blur-md px-2 py-1 rounded-md shadow-lg">Interior Design</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-1">Design Furniture (DF)</h4>
                                    <p className="text-xs text-gray-300">Premium metal fabrication cataloging over 500+ products for architects.</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="snap-center shrink-0 w-[280px] md:w-[320px] h-[320px] rounded-[2rem] relative overflow-hidden group shadow-xl shadow-gray-200 dark:shadow-none border border-transparent dark:border-white/5 cursor-pointer">
                                <img alt="TM Production Portfolio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/portfolio/tmproduction.png" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                                    <div className="flex gap-2 mb-2">
                                        <span className="text-[10px] font-bold text-white bg-primary backdrop-blur-md px-2 py-1 rounded-md shadow-lg">High-End</span>
                                        <span className="text-[10px] font-bold text-black bg-white backdrop-blur-md px-2 py-1 rounded-md shadow-lg">Media</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-1">TM Production</h4>
                                    <p className="text-xs text-gray-300">Award-winning media production house showcasing high-end cinematography.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FUNNEL ARCHITECTURE - UNIQUE SECTION */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark transition-colors">Our Funnel Architecture</h3>
                            <span className="text-xs font-bold text-primary bg-purple-50 dark:bg-primary/10 px-3 py-1.5 rounded-lg border border-purple-100 dark:border-primary/20">Full-Funnel</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                { stage: 'TOFU', title: 'Awareness & Discovery', desc: 'Viral content, influencer seeding, and broad-match search campaigns to capture cold traffic at scale.', icon: <Eye size={22} />, color: 'from-blue-500 to-cyan-400', width: 'w-full' },
                                { stage: 'MOFU', title: 'Engagement & Nurture', desc: 'Retargeting sequences, email drip campaigns, and lead magnets that educate and build trust.', icon: <Layers size={22} />, color: 'from-purple-500 to-pink-400', width: 'flex-1 md:w-[90%] md:mx-auto' },
                                { stage: 'BOFU', title: 'Conversion & Revenue', desc: 'High-intent keyword bidding, urgency-driven offers, and conversion rate optimization for maximum ROAS.', icon: <Target size={22} />, color: 'from-green-500 to-emerald-400', width: 'flex-1 md:w-[80%] md:mx-auto' },
                                { stage: 'POST', title: 'Loyalty & LTV Growth', desc: 'Post-purchase upsells, referral programs, and review generation to maximize customer lifetime value.', icon: <Zap size={22} />, color: 'from-orange-500 to-amber-400', width: 'flex-1 md:w-[70%] md:mx-auto' },
                            ].map((item, i) => (
                                <div key={i} className={`${item.width} bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-5 flex items-start gap-4 shadow-neumorphic-sm dark:shadow-none hover:shadow-lg transition-all duration-300 group`}>
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md shrink-0`}>{item.icon}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-black text-primary tracking-widest">{item.stage}</span>
                                            <ArrowRight size={12} className="text-gray-300" />
                                        </div>
                                        <h4 className="font-bold text-sm text-text-main dark:text-text-main-dark transition-colors">{item.title}</h4>
                                        <p className="text-[11px] text-text-sub dark:text-text-sub-dark mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* THE BYS METHODOLOGY */}
                    <section className="rounded-3xl p-8 bg-gradient-to-br from-purple-50 to-white dark:from-[#0d0d0d] dark:to-[#1a1a1a] border border-purple-100 dark:border-white/10 shadow-glass-strong dark:shadow-none relative overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary/10 dark:bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
                        <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">The BYS Methodology</h3>
                        <p className="text-text-sub dark:text-text-sub-dark text-xs mb-6 leading-relaxed">Every campaign we run follows this battle-tested framework.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: 'Track Everything', desc: 'Server-side conversion APIs bypass cookie restrictions for 100% accurate attribution.', icon: <BarChart3 size={20} className="text-blue-500" /> },
                                { title: 'Test Relentlessly', desc: 'A/B test creatives, audiences, and landing pages in 72-hour sprint cycles.', icon: <Zap size={20} className="text-yellow-500" /> },
                                { title: 'Scale Winners', desc: 'When a campaign hits KPIs, we scale spend 20% daily while monitoring CAC/LTV ratios.', icon: <TrendingUp size={20} className="text-green-500" /> },
                                { title: 'Kill Losers Fast', desc: 'Underperformers get 3 days. No emotional attachment to creative. Only data decides.', icon: <Target size={20} className="text-red-500" /> },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 dark:bg-black/30 rounded-xl p-4 border border-white dark:border-white/5 flex flex-col gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center">{item.icon}</div>
                                    <h4 className="font-bold text-xs text-text-main dark:text-text-main-dark">{item.title}</h4>
                                    <p className="text-[10px] text-text-sub dark:text-text-sub-dark leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Desktop Sticky Sidebar Column */}
                <DesktopSidebar serviceName="Digital Marketing" />

            </div>
            {/* --- END DESKTOP 2-COLUMN LAYOUT --- */}

            {/* TRANSPARENCY */}
            <section className="rounded-3xl p-8 bg-surface-light dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 shadow-sm relative overflow-hidden transition-colors">
                <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-3 relative z-10 transition-colors">Client-Centric Growth</h3>
                <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed relative z-10 transition-colors">
                    We don't just run ads; we partner with you. Our philosophy is built on transparency and results. We treat your budget like our own, meticulously optimizing every campaign to ensure maximum efficiency and sustainable scaling.
                </p>
            </section>

            {/* BOTTOM CTA */}
            <section className="relative rounded-3xl overflow-hidden p-8 mb-8 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 shadow-neumorphic-sm dark:shadow-none mt-6 transition-colors">
                <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 dark:bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute left-0 bottom-0 w-48 h-48 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <div className="w-16 h-16 mx-auto bg-white dark:bg-black/40 rounded-full flex items-center justify-center mb-4 shadow-neumorphic-sm dark:shadow-none text-primary transition-colors">
                        <Rocket size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Ready to Scale?</h3>
                    <p className="text-text-sub dark:text-text-sub-dark text-sm mb-6 max-w-xs mx-auto transition-colors">Get a free audit of your current digital strategy.</p>
                    <StarBorder as="button" className="w-full" color="rgba(104,54,244,0.6)" speed="4s">
                        <span className="flex items-center justify-center gap-2">
                            Schedule Strategy Call
                        </span>
                    </StarBorder>
                </div>
            </section>


            <ServiceCrossLinks currentService="Digital Marketing" />
        </main >
    );
}
