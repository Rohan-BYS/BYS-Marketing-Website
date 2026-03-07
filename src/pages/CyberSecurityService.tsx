import {
    Play,
    ClipboardCheck,
    Lock,
    ChevronRight,
    FileText,
    Flame,
    Headset,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Waves from '../components/ReactBits/Waves';
import DesktopSidebar from '../components/DesktopSidebar';
import ServiceCrossLinks from '../components/ServiceCrossLinks';

export default function CyberSecurityService() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cyber Security",
        "provider": { "@type": "Organization", "name": "BYS Marketing", "url": "https://bys.marketing" },
        "areaServed": "Worldwide",
        "description": "Enterprise cyber security: zero-breach record, 24/7 threat mitigation, AES-256 encryption, GDPR/CCPA compliance, and firewall management."
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark min-h-screen flex justify-center selection:bg-primary selection:text-white overflow-x-hidden">
            <SEOHead
                title="Enterprise Cyber Security Services"
                description="Zero-breach record. 24/7 threat mitigation, AES-256 encryption, GDPR & CCPA compliance. Protect your digital assets with enterprise-grade security."
                url="https://bys.marketing/services/cyber-security"
                schema={schema}
                keywords="cyber security, data protection, AES-256 encryption, GDPR compliance, firewall management, security audits, threat mitigation, BYS Marketing"
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
                                <span className="text-xs font-semibold text-primary tracking-wide">System Operational</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-black dark:text-white">
                                Fortified<br />
                                <span className="text-primary">Digital Assets</span>
                            </h2>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium">
                                Uncompromising protection for your enterprise data. We deploy advanced threat mitigation strategies to secure your growth.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <button title="Secure My Network" className="flex-1 bg-primary text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/60 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:bg-primary-dark hover:shadow-glow-purple">
                                    <span>Secure My Network</span>
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
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
                        <h4 className="text-3xl font-black text-primary mb-1">0</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Breach Record</p>
                    </div>
                    <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300">
                        <h4 className="text-3xl font-black text-primary mb-1">24/7</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Threat Mitigation</p>
                    </div>
                </section>

                {/* --- DESKTOP 2-COLUMN LAYOUT WRAPPER --- */}
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start w-full">

                    {/* Main Content Column */}
                    <div className="flex flex-col gap-12 lg:gap-20 w-full min-w-0">
                        {/* Suite Grid */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-black dark:text-white">Security Suite</h3>
                                <span className="text-sm text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-1 cursor-pointer">
                                    All features <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary relative">
                                        <ClipboardCheck className="relative z-10 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Security Audits</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Full scan & report</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary relative">
                                        <Lock className="relative z-10 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Data Encryption</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">AES-256 standard</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary relative">
                                        <FileText className="relative z-10 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Compliance</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">GDPR & CCPA ready</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-5 flex flex-col gap-4 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary relative">
                                        <Flame className="relative z-10 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-black dark:text-white">Firewall Mgmt</h4>
                                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-1">Intrusion prevention</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Live Dashboard UI */}
                        <section className="overflow-hidden">
                            <h3 className="text-xl font-bold text-black dark:text-white mb-6">Live Dashboard</h3>
                            <div className="w-full h-[320px] rounded-3xl relative overflow-hidden group shadow-xl shadow-purple-100 dark:shadow-purple-900/20 bg-black">
                                <div className="absolute inset-0 bg-slate-900">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-slate-900/50 to-slate-900 animate-pulse"></div>
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(104,54,244,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(104,54,244,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                                    <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_4px_rgba(104,54,244,0.8)] animate-bounce [animation-duration:3s]"></div>
                                    <div className="absolute top-[60%] left-[70%] w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.8)] animate-bounce [animation-duration:4s] [animation-delay:1s]"></div>
                                    <div className="absolute top-[40%] right-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] animate-pulse"></div>
                                    <div className="absolute top-[32%] left-[21%] w-[200px] h-[1px] bg-gradient-to-r from-primary to-transparent rotate-12 origin-left opacity-60"></div>
                                    <div className="absolute top-[61%] left-[70%] w-[150px] h-[1px] bg-gradient-to-l from-primary to-transparent -rotate-45 origin-left opacity-50"></div>

                                    <div className="absolute top-6 left-6 bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-lg w-48">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between text-xs font-bold text-text-sub dark:text-text-sub-dark mb-1">
                                                <span>ISO 27001 Compliance</span>
                                                <span className="text-primary">99.9%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-2 overflow-hidden shadow-inner">
                                                <div className="bg-gradient-to-r from-blue-500 to-primary h-2 rounded-full shadow-[0_0_10px_rgba(104,54,244,0.5)] w-full"></div>
                                            </div>

                                            <div className="flex items-center justify-between text-xs font-bold text-text-sub dark:text-text-sub-dark mb-1 mt-4">
                                                <span>Threat Neutralization Rate</span>
                                                <span className="text-primary">100%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-2 overflow-hidden shadow-inner">
                                                <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] w-full"></div>
                                            </div>

                                            <div className="flex items-center justify-between text-xs font-bold text-text-sub dark:text-text-sub-dark mb-1 mt-4">
                                                <span>Average Response Time</span>
                                                <span className="text-primary">&lt; 5 mins</span>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-2 overflow-hidden shadow-inner">
                                                <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)] w-[95%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 right-6 bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-lg w-auto">
                                        <div className="flex items-center gap-4">
                                            <div className="text-center">
                                                <div className="text-[10px] text-slate-400 uppercase">Threats</div>
                                                <div className="text-lg font-bold text-white font-mono">0</div>
                                            </div>
                                            <div className="w-[1px] h-8 bg-slate-700"></div>
                                            <div className="text-center">
                                                <div className="text-[10px] text-slate-400 uppercase">Uptime</div>
                                                <div className="text-lg font-bold text-primary font-mono">99.9%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* THREAT INTELLIGENCE STACK — UNIQUE SECTION */}
                        <section className="py-2">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-black dark:text-white">Defense Architecture</h3>
                                <span className="text-xs font-bold text-primary bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">4-Layer Stack</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { layer: 'L1', title: 'Perimeter Defense', tools: 'Next-Gen Firewall • WAF • DDoS Shield', color: 'bg-red-500' },
                                    { layer: 'L2', title: 'Network Security', tools: 'IDS/IPS • Zero-Trust Architecture • VPN Tunneling', color: 'bg-orange-500' },
                                    { layer: 'L3', title: 'Endpoint Protection', tools: 'EDR • Anti-Malware • Device Encryption', color: 'bg-yellow-500' },
                                    { layer: 'L4', title: 'Data Security', tools: 'AES-256 Encryption • DLP • Backup & DR', color: 'bg-green-500' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-5 flex items-center gap-4 group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                                        <div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center font-black text-xs shrink-0`}>
                                            {item.layer}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-sm text-black dark:text-white">{item.title}</h4>
                                            <p className="text-[10px] text-text-sub dark:text-text-sub-dark mt-0.5 truncate">{item.tools}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPLIANCE CERTIFICATIONS */}
                        <section className="bg-black rounded-3xl p-8 text-white mb-4">
                            <h3 className="text-xl font-bold mb-2">Compliance & Certifications</h3>
                            <p className="text-white/50 text-sm mb-6">Industry-standard compliance frameworks we implement and maintain.</p>
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                {[
                                    { name: 'GDPR', desc: 'EU Data Protection' },
                                    { name: 'ISO 27001', desc: 'Info Security Mgmt' },
                                    { name: 'SOC 2', desc: 'Service Org Controls' },
                                    { name: 'PCI DSS', desc: 'Payment Card Security' },
                                ].map((cert, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors group">
                                        <p className="text-lg font-black text-primary mb-1 group-hover:scale-105 transition-transform">{cert.name}</p>
                                        <p className="text-[10px] text-white/40">{cert.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Support Block */}
                        <section className="relative rounded-3xl overflow-hidden p-8 mb-8 bg-surface-light dark:bg-black/40 border border-gray-100 dark:border-white/10 shadow-neumorphic-sm dark:shadow-none">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                            <div className="absolute left-0 bottom-0 w-48 h-48 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
                            <div className="relative z-10 text-center flex flex-col items-center">
                                <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 shadow-neumorphic-sm dark:shadow-none text-primary">
                                    <Headset size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Need Urgent Support?</h3>
                                <p className="text-text-sub dark:text-text-sub-dark text-sm mb-6 max-w-xs mx-auto">Our cyber security experts are on standby 24/7 for immediate assistance.</p>
                                <Link to="/contact" className="w-full inline-block py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/30 hover:shadow-xl hover:scale-[1.02] hover:bg-primary-dark transition-all">
                                    Contact Security Team
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Desktop Sticky Sidebar Column */}
                    <DesktopSidebar serviceName="Cybersecurity" expertName="David Chen" expertRole="Chief Information Security Officer" />

                </div>
                {/* --- END DESKTOP 2-COLUMN LAYOUT --- */}
            
            <ServiceCrossLinks currentService="Cyber Security" />
        </main>
        </div>
    );
}
