import {
    Layout,
    Smartphone,
    Eye,
    Palette,
    Figma,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Waves from '../components/ReactBits/Waves';
import DesktopSidebar from '../components/DesktopSidebar';
import ServiceCrossLinks from '../components/ServiceCrossLinks';

interface UiUxDesignServiceProps {
    locationOverride?: string;
}

export default function UiUxDesignService({ locationOverride }: UiUxDesignServiceProps) {
    const pageTitle = "Premium UI/UX Design Services";

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "UI/UX Design",
            "provider": {
                "@type": "Organization",
                "name": "BYS Marketing",
                "url": "https://bys.marketing"
            },
            "areaServed": locationOverride || "Worldwide",
            "description": "High-conversion UI/UX design, wireframing, prototyping, and user research. We design digital products that users love."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://bys.marketing/services" },
                { "@type": "ListItem", "position": 3, "name": "UI/UX Design", "item": `https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/ui-ux-design` }
            ]
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark min-h-screen flex justify-center selection:bg-primary selection:text-white overflow-x-hidden">
            <SEOHead
                title={pageTitle}
                description="Premium UI/UX design agency. We craft highly intuitive, accessible, and conversion-optimized digital experiences that your users will actually love to use."
                url={`https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/ui-ux-design`}
                schema={schemas}
                keywords="UI/UX design, user interface design, user experience, wireframing, prototyping, responsive design, visual design, Figma, BYS Marketing"
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
                                <span className="text-xs font-semibold text-primary tracking-wide">Intuitive Interfaces</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-black dark:text-white">
                                Crafting Digital<br />
                                <span className="text-primary">Experiences</span>
                            </h2>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium">
                                Merge breathtaking aesthetics with frictionless usability. We design applications and websites that your users will fall in love with.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <Link to="/portfolio" className="flex-1 bg-primary text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:bg-primary-dark">
                                    <span>View Design Work</span>
                                    <Eye className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300">
                        <h4 className="text-3xl font-black text-primary mb-1">Awwwards</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Standard Quality</p>
                    </div>
                    <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300">
                        <h4 className="text-3xl font-black text-primary mb-1">Glassmorphism</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Modern Aesthetic</p>
                    </div>
                </section>

                {/* --- DESKTOP 2-COLUMN LAYOUT WRAPPER --- */}
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start w-full">

                    {/* Main Content Column */}
                    <div className="flex flex-col gap-12 lg:gap-20 w-full min-w-0">

                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-black dark:text-white">Design Process</h3>
                                <span className="text-sm text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-1 cursor-pointer">
                                    Learn More <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                        <Layout size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Wireframing</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">UX blueprints & user flows</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                        <Palette size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Visual Design</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">High fidelity UI mockups</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                        <Figma size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Prototyping</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Interactive component states</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                        <Smartphone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Responsive</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Mobile-first scaling</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* OUR DESIGN PROCESS — UNIQUE SECTION */}
                        <section className="py-2">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-black dark:text-white">Our Design Process</h3>
                                <span className="text-xs font-bold text-primary bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">5-Stage Design</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { step: '01', title: 'Research & Discovery', desc: 'User interviews, competitor analysis, and stakeholder alignment to define the design challenge.' },
                                    { step: '02', title: 'Information Architecture', desc: 'Sitemaps, user flows, and content hierarchy that ensure intuitive navigation.' },
                                    { step: '03', title: 'Wireframes & Prototypes', desc: 'Low to high-fidelity wireframes in Figma with interactive prototypes for user testing.' },
                                    { step: '04', title: 'Visual Design', desc: 'Pixel-perfect UI with cohesive design systems, component libraries, and motion guidelines.' },
                                    { step: '05', title: 'Handoff & QA', desc: 'Developer-ready specs with design tokens, responsive breakpoints, and accessibility checks.' },
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

                        {/* DESIGN PHILOSOPHY — DATA SECTION */}
                        <section className="bg-black rounded-3xl p-8 text-white mb-4">
                            <h3 className="text-xl font-bold mb-2">Design That Converts</h3>
                            <p className="text-white/50 text-sm mb-6">Good design isn't just aesthetic — it's strategic. Here's what our UX delivers.</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { metric: '200%', label: 'Conversion Lift', sub: 'avg improvement after redesign', color: 'text-green-400' },
                                    { metric: '40%', label: 'Bounce Reduction', sub: 'through UX optimization', color: 'text-blue-400' },
                                    { metric: '95+', label: 'Accessibility Score', sub: 'WCAG 2.1 AA compliant', color: 'text-yellow-400' },
                                    { metric: '<2s', label: 'Time to Interactive', sub: 'performance-first design', color: 'text-pink-400' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                        <p className={`text-2xl font-black ${item.color} mb-1`}>{item.metric}</p>
                                        <p className="text-xs font-bold text-white mb-0.5">{item.label}</p>
                                        <p className="text-[9px] text-white/30">{item.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Desktop Sticky Sidebar Column */}
                    <DesktopSidebar serviceName="UI/UX Design" />

                </div>
                {/* --- END DESKTOP 2-COLUMN LAYOUT --- */}

                {/* CTA Block */}
                <section className="relative rounded-3xl overflow-hidden p-8 mb-8 bg-surface-light dark:bg-black/40 border border-gray-100 dark:border-white/10 shadow-neumorphic-sm dark:shadow-none">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10 text-center flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Let's Design Something Beautiful</h3>
                        <p className="text-text-sub dark:text-text-sub-dark text-sm mb-6 max-w-xs mx-auto">Ready for an interface that delights users and drives business results?</p>
                        <Link to="/contact" className="w-full inline-flex py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/30 hover:shadow-xl hover:scale-[1.02] hover:bg-primary-dark transition-all items-center justify-center gap-2">
                            <span>Start Design Project</span>
                            <Eye className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

                <ServiceCrossLinks currentService="UI/UX Design" />
            </main>
        </div>
    );
}
