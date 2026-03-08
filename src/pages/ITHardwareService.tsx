import {
    ArrowRight,
    Package,
    Network,
    Wrench,
    Cpu,
    HardDrive,
    ServerCog,
    Headset,
    Handshake,
    Zap,
    ChevronRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ServiceCrossLinks from '../components/ServiceCrossLinks';

interface ITHardwareServiceProps {
    locationOverride?: string;
}

export default function ITHardwareService({ locationOverride }: ITHardwareServiceProps) {
    const pageTitle = "Enterprise IT Hardware Solutions"; // Placeholder, adjust as needed

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "IT Hardware Solutions",
            "provider": {
                "@type": "Organization",
                "name": "BYS Marketing",
                "url": "https://bys.marketing"
            },
            "areaServed": locationOverride || "Worldwide",
            "description": "Enterprise-grade IT infrastructure, corporate hardware procurement, and secure network setup for scaling businesses."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://bys.marketing/services" },
                { "@type": "ListItem", "position": 3, "name": "IT Hardware", "item": `https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/it-hardware` }
            ]
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark min-h-screen flex flex-col items-center selection:bg-primary selection:text-white overflow-x-hidden">
            <SEOHead
                title={pageTitle}
                description="Enterprise IT Hardware solutions and infrastructure setup. Premium procurement, network security, and scalable tech deployments for modern offices."
                url={`https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/it-hardware`}
                schema={schemas}
                keywords="IT hardware, enterprise servers, networking solutions, server procurement, IT infrastructure, workstations, Dell, HP, Cisco, BYS Marketing"
            />
            {/* Background Orbs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-[150px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-50/50 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute top-[30%] right-[10%] w-[25vw] h-[25vw] bg-white dark:bg-primary/5 rounded-full blur-[80px] opacity-80"></div>
            </div>

            <div className="w-full max-w-[1400px] flex flex-col relative pb-32">


                <main className="flex flex-col gap-12 px-6 md:px-12 pt-8">
                    {/* Hero Section */}
                    <section className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center shadow-2xl shadow-purple-100 dark:shadow-none dark:border dark:border-white/10">
                        <div className="absolute inset-0 bg-gray-900">
                            <img alt="Server room infrastructure" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFn0lF3RwzIkRqL_SYJuWclDA3qhgCf2Kb6J428DshF_3pbjnmzcy1srNkyPBJieVxVsxhbHeLAiFx2JiGL8QIEwyllWeXEW9L_2H-iHLbLUSbxEmIS6m6c3kiyOLvqBonUqWHDrzGKdTaFh9z_GO6FmVBNkr7pXc8bDt1kj4BXhwipjEvj6pMaPKh9x2ZKGfw-SoSBt779oHFPK_gAXYfx6bmvtgVu5PJorR-89kR256mi7SD6KlHShY4JtL9-V0FP2xfwGQvRpI" loading="eager" />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900/40 to-primary/20 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
                            <div className="glass-panel p-8 md:p-12 rounded-[2rem] max-w-2xl border-l-4 border-l-primary shadow-floating backdrop-blur-3xl bg-white/10 dark:bg-black/40">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 w-fit backdrop-blur-md shadow-sm mb-6">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.8)]"></span>
                                    <span className="text-xs font-bold text-white tracking-wide uppercase">Hardware Solutions</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-white mb-6 drop-shadow-sm">
                                    Robust Infrastructure for <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Modern Enterprise</span>
                                </h2>
                                <p className="text-gray-100 leading-relaxed text-base md:text-lg mb-8 font-medium max-w-lg">
                                    Power your business with enterprise-grade servers, workstations, and networking solutions. Reliable, scalable, and secure.
                                </p>
                                <div className="flex gap-4 flex-wrap">
                                    <button className="bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-purple-900/50 active:scale-[0.98] transition-all duration-200 flex items-center gap-2 hover:bg-primary-dark border border-white/10">
                                        <span>View Catalog</span>
                                        <ArrowRight size={18} />
                                    </button>
                                    <button className="bg-white/10 text-white backdrop-blur-md font-bold py-4 px-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2">
                                        <span>Consult Expert</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Solutions Grid */}
                    <section>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-black dark:text-white">Core Solutions</h3>
                                <p className="text-text-sub dark:text-text-sub-dark text-sm mt-1">Comprehensive IT hardware services</p>
                            </div>
                            <span className="text-sm text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-1 group cursor-pointer">
                                All Categories <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="clay-card dark:bg-black/40 dark:border-white/10 p-8 flex flex-col justify-between group cursor-pointer hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-80">
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-50 dark:bg-primary/5 rounded-full blur-2xl group-hover:bg-purple-100 dark:group-hover:bg-primary/10 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-neumorphic-sm dark:shadow-none flex items-center justify-center text-primary mb-6 border border-gray-50 dark:border-white/5">
                                        <Package size={28} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-black dark:text-white mb-2">Hardware Supply</h4>
                                    <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed">Direct procurement of servers, workstations, and networking gear from top-tier manufacturers.</p>
                                </div>
                                <div className="relative z-10 mt-6 flex gap-2">
                                    <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">Dell</span>
                                    <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">HP</span>
                                    <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">Cisco</span>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="clay-card dark:bg-black/40 dark:border-primary/20 p-8 flex flex-col justify-between group cursor-pointer hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-80 border-primary/20 shadow-lg shadow-purple-100/50 dark:shadow-purple-900/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 dark:from-black dark:to-primary/5 opacity-50"></div>
                                <div className="absolute -right-12 bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/50 flex items-center justify-center mb-6">
                                        <Network size={28} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-black dark:text-white mb-2">Infrastructure</h4>
                                    <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed">End-to-end network design, server room setup, and structured cabling solutions.</p>
                                </div>
                                <div className="relative z-10 mt-6 flex items-center text-primary text-sm font-bold group-hover:gap-2 transition-all">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="clay-card dark:bg-black/40 dark:border-white/10 p-8 flex flex-col justify-between group cursor-pointer hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-80">
                                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-2xl"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-neumorphic-sm dark:shadow-none flex items-center justify-center text-primary mb-6 border border-gray-50 dark:border-white/5">
                                        <Wrench size={28} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-black dark:text-white mb-2">Maintenance</h4>
                                    <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed">24/7 proactive monitoring, on-site repairs, and regular hardware health checks.</p>
                                </div>
                                <div className="relative z-10 mt-6">
                                    <div className="flex items-center gap-2 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-lg w-fit">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        SLA Guarantee
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Featured Product */}
                    <section className="py-6">
                        <div className="bg-surface-light dark:bg-black/60 rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-gray-100 dark:border-white/10">
                            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                                <div>
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">New Arrival</span>
                                    <h3 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-6">Quantum Server X1</h3>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary shadow-sm">
                                                <Cpu size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-black dark:text-white">Dual AMD EPYC™</p>
                                                <p className="text-xs text-text-sub dark:text-text-sub-dark">96 Cores per processor</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary shadow-sm">
                                                <HardDrive size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-black dark:text-white">4PB Storage</p>
                                                <p className="text-xs text-text-sub dark:text-text-sub-dark">NVMe All-Flash Array</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
                                        Configure Yours
                                    </button>
                                </div>
                                <div className="relative h-[400px] w-full flex items-center justify-center">
                                    <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-2xl shadow-neumorphic dark:shadow-none flex items-center justify-center overflow-hidden group">
                                        <img alt="Server rack closeup" className="object-cover w-full h-full mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMze1yOZIB1l9DiDoLLq8002GKz76QoUM1_DELMM4BnvrWiLHs77XiySPL4zYwMGoiXyzS-CLfBawv7wVV-bT7TTWTXeV2tK4AxVkeAFNaWllomKYmmAHVeQNAFYrdDDaZFWT08fUPaYNHtskefQq8w_n6jwsggztFRx2KN52aZZmfLWXzql7xnaGDgpFfZHk6KKmU3SLkrIudsPxDOzyqbFOApiYJFDuUCM6H93VOC318IwprLC03phXNljM3aYPTpRzR9z-s134" loading="lazy" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-left-10 bg-white dark:bg-black p-4 rounded-2xl shadow-floating z-20 flex flex-col items-center border border-gray-100 dark:border-white/10">
                                        <span className="text-2xl font-black text-primary">40%</span>
                                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Faster I/O</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* DEPLOYMENT LIFECYCLE - UNIQUE SECTION */}
                    <section className="py-4">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-black dark:text-white">Deployment Lifecycle</h3>
                            <span className="text-xs font-bold text-primary bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">4-Phase Process</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { step: '01', title: 'Assess', desc: 'Full infrastructure audit — mapping existing systems, identifying bottlenecks, and forecasting growth requirements.' },
                                { step: '02', title: 'Specify', desc: 'Custom hardware specifications tailored to your workloads, budget, and scalability roadmap. Direct OEM pricing.' },
                                { step: '03', title: 'Deploy', desc: 'White-glove installation with zero-downtime migration. Structured cabling, rack configuration, and network integration.' },
                                { step: '04', title: 'Monitor', desc: 'Proactive 24/7 health monitoring with automated alerts. Preventive maintenance schedules and instant escalation paths.' },
                            ].map((phase, i) => (
                                <div key={i} className="relative bg-white dark:bg-black/40 border border-gray-100 dark:border-white/5 rounded-2xl p-6 flex flex-col gap-3 group hover:-translate-y-1 shadow-sm hover:shadow-lg transition-all duration-300">
                                    <span className="text-4xl font-black text-gray-100 dark:text-gray-800 absolute top-3 right-4 select-none pointer-events-none group-hover:text-primary/10 transition-colors">{phase.step}</span>
                                    <h4 className="font-bold text-sm text-black dark:text-white relative z-10">{phase.title}</h4>
                                    <p className="text-[11px] text-text-sub dark:text-text-sub-dark leading-relaxed relative z-10">{phase.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* WHY ENTERPRISE HARDWARE — DATA SECTION */}
                    <section className="bg-black rounded-3xl p-8 md:p-10 text-white mb-4">
                        <h3 className="text-2xl font-bold mb-2">Why Enterprise Hardware Matters</h3>
                        <p className="text-white/60 text-sm mb-8 max-w-xl">Consumer-grade equipment costs more in the long run. Here's what the data shows.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { metric: '87%', label: 'Lower TCO', sub: 'vs consumer-grade over 5 years' },
                                { metric: '4.2hrs', label: 'Avg Downtime Saved', sub: 'per month with proactive monitoring' },
                                { metric: '3x', label: 'Longer Lifespan', sub: 'enterprise SSDs vs consumer drives' },
                                { metric: '$150k', label: 'Breach Cost Avoided', sub: 'avg cost per data breach incident' },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-3xl font-black text-primary mb-1">{item.metric}</p>
                                    <p className="text-sm font-bold text-white mb-1">{item.label}</p>
                                    <p className="text-[10px] text-white/40">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Stats */}
                    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8">
                        <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-all duration-300 group">
                            <ServerCog className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-700 group-hover:text-primary mb-2 transition-colors" />
                            <h4 className="text-3xl font-black text-black dark:text-white mb-1">5k<span className="text-primary">+</span></h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Units Deployed</p>
                        </div>
                        <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-all duration-300 group">
                            <Headset className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-700 group-hover:text-primary mb-2 transition-colors" />
                            <h4 className="text-3xl font-black text-black dark:text-white mb-1">24/7</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Expert Support</p>
                        </div>
                        <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-all duration-300 group">
                            <Handshake className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-700 group-hover:text-primary mb-2 transition-colors" />
                            <h4 className="text-3xl font-black text-black dark:text-white mb-1">50<span className="text-primary">+</span></h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">OEM Partners</p>
                        </div>
                        <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-all duration-300 group">
                            <Zap className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-700 group-hover:text-primary mb-2 transition-colors" />
                            <h4 className="text-3xl font-black text-black dark:text-white mb-1">99.9%</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Uptime Guaranteed</p>
                        </div>
                    </section>

                    <ServiceCrossLinks currentService="IT Hardware" />
                </main>
            </div>
        </div>
    );
}
