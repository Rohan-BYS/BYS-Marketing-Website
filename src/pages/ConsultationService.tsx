import {
    Rocket,
    Calendar,
    Map,
    BarChart,
    Layers,
    TrendingUp,
    Search,
    PenTool,
    ArrowRight,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Waves from '../components/ReactBits/Waves';
import ServiceCrossLinks from '../components/ServiceCrossLinks';

export default function ConsultationService() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Business Consultation",
        "provider": { "@type": "Organization", "name": "BYS Marketing", "url": "https://bys.marketing" },
        "areaServed": "Worldwide",
        "description": "Strategic business consultation for startups and SMEs. Market analysis, tech stack audits, growth optimization, and data-driven roadmaps."
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark min-h-screen flex justify-center selection:bg-primary selection:text-white overflow-x-hidden">
            <SEOHead
                title="Strategic Business Consultation"
                description="500+ businesses scaled. 1:1 expert guidance with data-driven roadmaps for startups & SMEs. Market analysis, tech stack audits, and growth optimization."
                url="https://bys.marketing/services/consultation"
                schema={schema}
                keywords="business consultation, startup strategy, market analysis, tech stack audit, growth optimization, business roadmap, BYS Marketing"
            />
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-white dark:bg-primary/5 rounded-full blur-[80px] opacity-80"></div>
            </div>

            <div className="w-full max-w-md md:max-w-2xl lg:max-w-[800px] flex flex-col relative pb-32">


                <main className="flex flex-col gap-10 px-6">
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
                                    <span className="text-xs font-semibold text-primary tracking-wide">Limited Availability</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-black dark:text-white">
                                    Strategic Business<br />
                                    <span className="text-primary">Consultation</span>
                                </h2>
                                <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium">
                                    Data-driven roadmaps for startups and SMEs. We transform uncertain trajectories into scalable success stories.
                                </p>
                                <div className="flex gap-4 pt-2">
                                    <Link to="/contact" className="flex-1 bg-primary text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:bg-primary-dark">
                                        <span>Book Strategy Session</span>
                                        <Calendar className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats */}
                    <section className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300">
                            <h4 className="text-3xl font-black text-primary mb-1">500<span className="text-lg align-top">+</span></h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Businesses Scaled</p>
                        </div>
                        <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300">
                            <h4 className="text-3xl font-black text-primary mb-1">1:1</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Expert Guidance</p>
                        </div>
                    </section>

                    {/* Solutions Grid */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-black dark:text-white">Core Solutions</h3>
                            <span className="text-sm text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-1 cursor-pointer">
                                All services <ChevronRight className="w-4 h-4" />
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                    <Map size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-black dark:text-white">Startup Roadmap</h4>
                                    <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Foundational strategy</p>
                                </div>
                            </div>
                            <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                    <BarChart size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-black dark:text-white">Market Analysis</h4>
                                    <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Deep dive research</p>
                                </div>
                            </div>
                            <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-black dark:text-white">Tech Stack Audit</h4>
                                    <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Infrastructure check</p>
                                </div>
                            </div>
                            <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-black dark:text-white">Growth Opt.</h4>
                                    <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Scale faster</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Timeline */}
                    <section className="py-2">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-black dark:text-white">The Process</h3>
                        </div>
                        <div className="relative pl-2 pb-4">
                            {/* Line connecting */}
                            <div className="absolute left-[31px] top-6 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>

                            <div className="flex gap-6 mb-8 relative z-10 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-black border-2 border-primary text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Search size={20} />
                                </div>
                                <div className="pt-1">
                                    <h4 className="text-lg font-bold text-black dark:text-white">Deep Audit</h4>
                                    <p className="text-sm text-text-sub dark:text-text-sub-dark mt-1 leading-relaxed">
                                        We analyze every facet of your current operations, market position, and tech infrastructure.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 mb-8 relative z-10 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-purple-900/40 group-hover:scale-110 transition-transform duration-300">
                                    <PenTool size={20} />
                                </div>
                                <div className="pt-1">
                                    <h4 className="text-lg font-bold text-black dark:text-white">Strategy Design</h4>
                                    <p className="text-sm text-text-sub dark:text-text-sub-dark mt-1 leading-relaxed">
                                        Crafting a bespoke, data-backed roadmap tailored to your specific scaling goals.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 relative z-10 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-black border-2 border-primary text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Rocket size={20} />
                                </div>
                                <div className="pt-1">
                                    <h4 className="text-lg font-bold text-black dark:text-white">Execution</h4>
                                    <p className="text-sm text-text-sub dark:text-text-sub-dark mt-1 leading-relaxed">
                                        Guiding your team through implementation with continuous optimization and support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Image Block */}
                    <section className="overflow-hidden">
                        <div className="w-full h-[320px] rounded-3xl relative overflow-hidden group shadow-xl shadow-gray-200 dark:shadow-none">
                            <img alt="Strategic consultation meeting in progress" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJkSWISkxR3yCLDbBIpZ4fpBcdmg4wdXT6LZdjIychwMxrgCsL8JVKS9vLSL_yBzFXsVBpK-UQzF4CYpw5qTGZ3Bpgm4NDeCEdbxE2mNDCztIZogGqA2iBnUeQgekb8YnVx_OncUaI5FNywfH4-DGdGUPJlIttOvhdu32glUcdadBbDvWQoA27gP_egomLlYKyMJF8Vm-76ygMruAE2qi7U9I1mad5bD5LmsKQ7GQis85Q8mDUxU0Tke-5TgoYzIlW-yKr0k-VJUE" />
                            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-black text-white mb-3 leading-tight">Expert Insight</h3>
                                <p className="text-white/90 text-sm font-medium max-w-sm leading-relaxed">
                                    Experience a consultation that digs deep into your business model, identifying hidden opportunities for explosive growth.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CONSULTATION ROI — UNIQUE DATA SECTION */}
                    <section className="bg-black rounded-3xl p-8 text-white mb-4">
                        <h3 className="text-xl font-bold mb-2">Consultation ROI</h3>
                        <p className="text-white/50 text-sm mb-6">Average results our consultation clients see within 6 months.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { metric: '2.8x', label: 'Revenue Growth', color: 'text-green-400' },
                                { metric: '45%', label: 'Cost Reduction', color: 'text-blue-400' },
                                { metric: '3.2x', label: 'Team Efficiency', color: 'text-yellow-400' },
                                { metric: '67%', label: 'Faster Time-to-Market', color: 'text-pink-400' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                    <p className={`text-3xl font-black ${item.color} mb-1`}>{item.metric}</p>
                                    <p className="text-[10px] text-white/50 font-bold uppercase tracking-wide">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DELIVERABLES — UNIQUE SECTION */}
                    <section className="py-2">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-6">What You Walk Away With</h3>
                        <div className="space-y-3">
                            {[
                                { title: 'Custom Growth Roadmap', desc: 'A detailed 90-day and 12-month action plan tailored to your market position.' },
                                { title: 'Competitive Landscape Report', desc: 'Deep analysis of your top 5 competitors with actionable positioning strategies.' },
                                { title: 'Tech Stack Recommendations', desc: 'Targeted tool and platform suggestions to eliminate waste and boost productivity.' },
                                { title: 'Revenue Model Optimization', desc: 'Pricing strategy review with unit economics analysis and growth projections.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-5 flex items-center gap-4 group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-black text-xs shrink-0">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-sm text-black dark:text-white">{item.title}</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bottom CTA Block */}
                    <section className="bg-surface-grey/30 dark:bg-white/5 rounded-3xl p-8 border border-gray-100 dark:border-white/10 mb-8">
                        <h3 className="text-lg font-bold text-black dark:text-white mb-3">Our Philosophy</h3>
                        <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed mb-4">
                            We believe in <strong className="text-primary">Client-Centric Growth</strong>. Every strategy we devise is tailored specifically to your unique market position and long-term goals. Your Growth is Our Growth.
                        </p>
                        <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                            <p className="text-xs text-text-sub dark:text-text-sub-dark font-semibold uppercase tracking-wider mb-4">Ready to Scale?</p>
                            <Link to="/contact" className="w-full inline-flex py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/30 hover:shadow-xl hover:scale-[1.02] hover:bg-primary-dark transition-all items-center justify-center gap-2">
                                <span>Schedule Strategy Call</span>
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </section>
                
            <ServiceCrossLinks currentService="Strategic Consultation" />
        </main>
            </div>
        </div>
    );
}
