import ScrollReveal from '../components/ScrollReveal';
import StarBorder from '../components/ReactBits/StarBorder';
import { ArrowForward } from '@mui/icons-material';
import { Zap, Gauge, Code2, Database, LayoutTemplate, Rocket, GitBranch, Paintbrush, TestTubeDiagonal, ServerCrash, DollarSign, Timer, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import DesktopSidebar from '../components/DesktopSidebar';
import ServiceCrossLinks from '../components/ServiceCrossLinks';
import Waves from '../components/ReactBits/Waves';

export default function WebDevService() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Development",
        "provider": {
            "@type": "Organization",
            "name": "BYS Marketing",
            "url": "https://bys.marketing"
        },
        "areaServed": "Worldwide",
        "description": "Premium, high-performance web development services including React, Next.js, and headless CMS architectures. We build growth machines that load in under 0.4 seconds."
    };

    return (
        <main className="flex flex-col gap-12 lg:gap-20 px-6 pt-8 max-w-[1440px] lg:px-12 mx-auto w-full pb-40">
            <SEOHead
                title="Premium Web Development Services"
                description="High-performance web development using React, Next.js & Node.js. Sub-0.4s load times, 99+ Google PageSpeed scores. We architect growth machines."
                url="https://bys.marketing/services/web-development"
                schema={schema}
                keywords="web development, React development, Next.js agency, premium web design, high-performance websites, headless CMS, Node.js, BYS Marketing"
            />

            {/* HERO SECTION */}
            <section className="relative mt-4">
                <div className="glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group shadow-glass-strong dark:shadow-glow-purple border-white/60 dark:border-white/5 bg-white/60 dark:bg-[#1a1a1a]/80 min-h-[500px] flex items-center transition-all">
                    <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/15 dark:group-hover:bg-primary/30 transition-all duration-700"></div>
                    <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-[80px]"></div>
                    {/* Animated Waves Background */}
                    <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.15] pointer-events-none z-0 overflow-hidden rounded-[2.5rem]">
                        <Waves lineColor="rgba(104, 54, 244, 0.5)" waveSpeedX={0.008} waveSpeedY={0.004} waveAmpX={20} waveAmpY={12} xGap={14} yGap={36} />
                    </div>

                    <div className="relative z-10 flex flex-col gap-8 max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 w-fit backdrop-blur-md shadow-sm transition-colors">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold text-primary tracking-wide uppercase">Elite Development Team</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-text-main dark:text-text-main-dark transition-colors">
                            Premium Web<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-primary-glow dark:to-purple-400">Development</span>
                        </h2>

                        <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-lg md:text-xl max-w-2xl font-medium transition-colors">
                            We architect high-performance digital ecosystems. Merging technical precision with aesthetic excellence to build growth machines that scale.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <button className="bg-primary text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/60 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group/btn hover:bg-primary-dark hover:shadow-glow-purple text-lg">
                                <span>Start Build</span>
                                <ArrowForward className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                            <Link to="/website-demos" className="py-4 px-8 rounded-2xl bg-white dark:bg-[#1a1a1a] text-text-main dark:text-text-main-dark font-bold shadow-neumorphic-sm dark:shadow-none active:shadow-neumorphic-pressed flex items-center justify-center hover:scale-[1.02] transition-transform border border-gray-50 dark:border-white/10 text-lg gap-2">
                                <LayoutTemplate className="text-primary" />
                                <span>Website Demos</span>
                            </Link>
                        </div>
                    </div>

                    {/* 3D CODE BLOCK */}
                    <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[400px] h-[340px] opacity-90 [perspective:1000px]">
                        <div className="w-full h-full bg-white/40 dark:bg-black/60 backdrop-blur-md rounded-2xl border border-white/60 dark:border-white/10 shadow-glass dark:shadow-2xl p-6 font-mono text-xs text-gray-800 dark:text-gray-300 flex flex-col gap-2 transition-all [transform:rotateY(-12deg)_rotateX(5deg)]">
                            <div className="flex gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="text-purple-600 dark:text-purple-400">const <span className="text-blue-600 dark:text-blue-400">GrowthMachine</span> = <span className="text-orange-500">async</span> () ={'>'} {'{'}</div>
                            <div className="pl-4"><span className="text-gray-500 dark:text-gray-500">// Initialize high-performance core</span></div>
                            <div className="pl-4">const <span className="text-blue-600 dark:text-blue-400">performance</span> = <span className="text-green-600 dark:text-green-400">100</span>;</div>
                            <div className="pl-4">const <span className="text-blue-600 dark:text-blue-400">design</span> = <span className="text-green-600 dark:text-green-400">'Pixel Perfect'</span>;</div>
                            <div className="pl-4 text-purple-600 dark:text-purple-400">await <span className="text-blue-600 dark:text-blue-400">deploy</span>({'{'}</div>
                            <div className="pl-8">speed: <span className="text-green-600 dark:text-green-400">'&lt;0.4s'</span>,</div>
                            <div className="pl-8">seo: <span className="text-green-600 dark:text-green-400">'Optimized'</span>,</div>
                            <div className="pl-8">conversion: <span className="text-green-600 dark:text-green-400">'Maximized'</span></div>
                            <div className="pl-4">{'}'});</div>
                            <div className="text-purple-600 dark:text-purple-400">{'}'};</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DESKTOP 2-COLUMN LAYOUT WRAPPER --- */}
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start w-full">

                {/* Main Content Column */}
                <div className="flex flex-col gap-12 lg:gap-20 w-full min-w-0">
                    {/* PERFORMANCE METRICS */}
                    <ScrollReveal>
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-[2rem] p-8 md:p-10 flex items-center justify-between shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:shadow-glow-purple transition-all duration-300 group">
                                <div>
                                    <h4 className="text-5xl md:text-6xl font-black text-primary mb-2 group-hover:scale-105 transition-transform origin-left">99<span className="text-3xl align-top text-primary/60">+</span></h4>
                                    <p className="text-sm md:text-base text-text-sub dark:text-text-sub-dark uppercase tracking-wider font-bold transition-colors">Google Speed Score</p>
                                </div>
                                <div className="w-20 h-20 rounded-full bg-purple-50 dark:bg-black/40 flex items-center justify-center text-primary border border-purple-100 dark:border-white/5 transition-colors">
                                    <Gauge size={40} className="stroke-current" />
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-[2rem] p-8 md:p-10 flex items-center justify-between shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:shadow-glow-purple transition-all duration-300 group">
                                <div>
                                    <h4 className="text-5xl md:text-6xl font-black text-primary mb-2 group-hover:scale-105 transition-transform origin-left">&lt;0.4s</h4>
                                    <p className="text-sm md:text-base text-text-sub dark:text-text-sub-dark uppercase tracking-wider font-bold transition-colors">Average Load Time</p>
                                </div>
                                <div className="w-20 h-20 rounded-full bg-purple-50 dark:bg-black/40 flex items-center justify-center text-primary border border-purple-100 dark:border-white/5 transition-colors">
                                    <Zap size={40} className="stroke-current" />
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* TECH STACK */}
                    <ScrollReveal delay={0.1}>
                        <section>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark tracking-tight transition-colors">Tech Stack</h3>
                                <a className="text-sm text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-primary/10" href="#">
                                    Full capabilities <ArrowForward fontSize="small" />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-5 group cursor-pointer hover:-translate-y-2 shadow-neumorphic-sm dark:shadow-none hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-glow-purple transition-all duration-300 h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-black/40 flex items-center justify-center text-primary group-hover:text-blue-500 transition-colors shadow-inner dark:shadow-none">
                                        <Code2 size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark mb-1 transition-colors">Modern Frontend</h4>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark font-medium leading-relaxed transition-colors">React, Vue, and Next.js for reactive, lightning-fast interfaces.</p>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-5 group cursor-pointer hover:-translate-y-2 shadow-neumorphic-sm dark:shadow-none hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-glow-purple transition-all duration-300 h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-black/40 flex items-center justify-center text-primary group-hover:text-green-600 transition-colors shadow-inner dark:shadow-none">
                                        <Database size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark mb-1 transition-colors">Robust Backend</h4>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark font-medium leading-relaxed transition-colors">Node.js and Python architectures that scale securely.</p>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-5 group cursor-pointer hover:-translate-y-2 shadow-neumorphic-sm dark:shadow-none hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-glow-purple transition-all duration-300 h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-black/40 flex items-center justify-center text-primary group-hover:text-orange-500 transition-colors shadow-inner dark:shadow-none">
                                        <LayoutTemplate size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark mb-1 transition-colors">Headless CMS</h4>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark font-medium leading-relaxed transition-colors">Content management via Sanity, Strapi, or Contentful.</p>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-5 group cursor-pointer hover:-translate-y-2 shadow-neumorphic-sm dark:shadow-none hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-glow-purple transition-all duration-300 h-full">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-xs font-bold text-text-sub dark:text-text-sub-dark mb-1">
                                            <span>Performance Score</span>
                                            <span className="text-green-500">99</span>
                                        </div>
                                        <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-2 overflow-hidden shadow-inner">
                                            <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] w-[99%]"></div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs font-bold text-text-sub dark:text-text-sub-dark mb-1 mt-3">
                                            <span>Accessibility</span>
                                            <span className="text-primary">100</span>
                                        </div>
                                        <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-2 overflow-hidden shadow-inner">
                                            <div className="bg-gradient-to-r from-primary-light to-primary h-2 rounded-full shadow-[0_0_10px_rgba(104,54,244,0.5)] w-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* RECENT DEPLOYMENTS */}
                    <section className="overflow-hidden">
                        <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark mb-8 tracking-tight transition-colors">Recent Deployments</h3>
                        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-12 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x lg:snap-none">
                            <div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[480px] rounded-[2rem] relative overflow-hidden group shadow-xl shadow-gray-200 dark:shadow-none border border-transparent dark:border-white/5 cursor-pointer">
                                <img alt="Luxe Furniture ecommerce" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHcnKtp2uqZpYu45qKVB5UG_ESHYBkyJ07Sw5XN8e05M_WmDhqgqQAfDbk7u5JsSE_fjoxWWvbChoTmkde9cz_7XAXmgD7sIS0GgKkfCQe6wRDcSNamSATxzEqOOzABoZnBrM0rnECE-3BELVrj4vMBzeoWYHTwfUmNq_7dWb3uyi_IS8nnrC-v5u3OMDyH6dmwhg7l3ldOmmUmgHogTf3GB13qYZnhOpDl2j4u49LTmCcQw7WUeLCMF2P6CW8JG_-Yio8YpnmaJ4" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold text-white bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-lg w-fit mb-3 shadow-lg">E-Commerce</span>
                                    <h4 className="text-3xl font-bold text-white mb-2">Luxe Furniture</h4>
                                    <p className="text-base text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Headless Shopify implementation with Next.js frontend.</p>
                                </div>
                            </div>

                            <div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[480px] rounded-[2rem] relative overflow-hidden group shadow-xl shadow-gray-200 dark:shadow-none border border-transparent dark:border-white/5 cursor-pointer">
                                <img alt="Nova Bank SaaS" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBorlZsSpmxV_0_GFc4illy20YXPg-I2gAU-aqBF4RZ3N43KimfWXFUcr2seI48VbLONNnRoIwyokMDetspqJ3AOHJBHX6tYvjIX2N7xf3FPEO7MoVo0k-Q4chKWxlwdGBcc2MldjluiulFN-4rGba_Lk5RC8itVlE4YHH_Ux79uFOUgIxCnEzE6H702LsWlUHOLxAsb80agR9Go_wmrDPLBd1TsPI-aSO9EtcP44s6ZqP7p_AiVsR_ddW0lvHXJ_Nj88sU86bTELQ" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold text-white bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-lg w-fit mb-3 shadow-lg">SaaS Platform</span>
                                    <h4 className="text-3xl font-bold text-white mb-2">Nova Bank</h4>
                                    <p className="text-base text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Real-time financial dashboard with WebSockets.</p>
                                </div>
                            </div>

                            <div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[480px] rounded-[2rem] relative overflow-hidden group shadow-xl shadow-gray-200 dark:shadow-none border border-transparent dark:border-white/5 cursor-pointer">
                                <img alt="Connect+ Social tech" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg92XdH-Dqy4z47c10P8CgacCvZ2QHkQQ03tcvr-cf_nCZL4DWz931xQbG1mzvItUC3S52EYCINx1T88lN3ESH5dyh7tO1Sx0OGiW6PmE5eoAWaOJxqJ9PsqEZNPhWNfK5Eb9USAUHh-D8lhWxpw8xt1UCbM4Q1pFF7UbU3EjUSd_cPm3IJO0e0-muuLgPbasHU2eLZUkLKLqxdabhtm0FnCTqz_qh3e0lzxDZX5OFxiLDVaSsHGxbu1f8EKAYj_CyLIwtRcuvG-E" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold text-white bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-lg w-fit mb-3 shadow-lg">Social Tech</span>
                                    <h4 className="text-3xl font-bold text-white mb-2">Connect+</h4>
                                    <p className="text-base text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Progressive Web App with offline capabilities.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* DEVELOPMENT PROCESS TIMELINE - UNIQUE SECTION */}
                    <section>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark tracking-tight transition-colors">Our Build Process</h3>
                            <span className="text-xs font-bold text-primary bg-purple-50 dark:bg-primary/10 px-3 py-1.5 rounded-lg border border-purple-100 dark:border-primary/20">4-Phase Architecture</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { step: '01', title: 'Discovery & Architecture', desc: 'Deep-dive into business goals, user personas, and technical requirements. We map the entire information architecture before writing a single line of code.', icon: <GitBranch size={28} />, color: 'from-blue-500 to-cyan-400' },
                                { step: '02', title: 'UI/UX Engineering', desc: 'Pixel-perfect Figma-to-code translation with mobile-first responsive grids, micro-animations, and accessibility (WCAG 2.1 AA).', icon: <Paintbrush size={28} />, color: 'from-purple-500 to-pink-400' },
                                { step: '03', title: 'Development & QA', desc: 'Agile sprints with CI/CD pipelines. Every component is unit-tested. Performance budgets are enforced at build time, not afterthought.', icon: <TestTubeDiagonal size={28} />, color: 'from-green-500 to-emerald-400' },
                                { step: '04', title: 'Launch & Growth', desc: 'Zero-downtime deployment with DNS cutover strategy, 301 redirect mapping, and post-launch performance monitoring for 30 days.', icon: <Rocket size={28} />, color: 'from-orange-500 to-amber-400' },
                            ].map((phase, i) => (
                                <div key={i} className="relative bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-5 group hover:-translate-y-1 shadow-neumorphic-sm dark:shadow-none hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-glow-purple transition-all duration-300">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white shadow-lg`}>
                                        {phase.icon}
                                    </div>
                                    <span className="text-6xl font-black text-gray-100 dark:text-gray-800 absolute top-4 right-6 select-none pointer-events-none group-hover:text-primary/10 transition-colors">{phase.step}</span>
                                    <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark transition-colors relative z-10">{phase.title}</h4>
                                    <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed transition-colors relative z-10">{phase.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* WHY SPEED MATTERS - DATA SECTION */}
                    <section className="rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-br from-purple-50 to-white dark:from-[#0d0d0d] dark:to-[#1a1a1a] border border-purple-100 dark:border-white/10 shadow-glass-strong dark:shadow-none relative overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
                        <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark mb-3 transition-colors">Why Speed Equals Revenue</h3>
                        <p className="text-text-sub dark:text-text-sub-dark text-sm mb-8 max-w-xl leading-relaxed">Every millisecond matters. Here's the data that drives our obsession with performance.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { stat: '53%', label: 'of mobile users abandon sites that take over 3 seconds to load', icon: <ServerCrash size={24} className="text-red-500" /> },
                                { stat: '$2.6M', label: 'annual revenue loss per second of load time delay for a $5M/yr e-commerce site', icon: <DollarSign size={24} className="text-green-500" /> },
                                { stat: '70%', label: 'longer sessions on sites with sub-2s load times vs industry average', icon: <Timer size={24} className="text-blue-500" /> },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 dark:bg-black/30 rounded-2xl p-6 border border-white dark:border-white/5 flex flex-col gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center">{item.icon}</div>
                                    <h4 className="text-3xl font-black text-primary">{item.stat}</h4>
                                    <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed font-medium">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* WHO WE BUILD FOR */}
                    <section>
                        <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark mb-8 tracking-tight transition-colors">Built For Ambitious Brands</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Startups', desc: 'MVP-to-market in 6 weeks. Lean architecture that scales from 100 to 100,000 users without re-platforming.', icon: <Rocket size={28} className="text-primary" /> },
                                { title: 'E-Commerce', desc: 'Headless Shopify & WooCommerce builds optimized for conversion rate, average order value, and cart abandonment recovery.', icon: <DollarSign size={28} className="text-primary" /> },
                                { title: 'Enterprise', desc: 'Complex SaaS dashboards, multi-tenant architectures, and real-time data pipelines with enterprise-grade security.', icon: <Users size={28} className="text-primary" /> },
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-4 group hover:-translate-y-1 shadow-neumorphic-sm dark:shadow-none hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-primary/10 flex items-center justify-center border border-purple-100 dark:border-primary/20">{item.icon}</div>
                                    <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark transition-colors">{item.title}</h4>
                                    <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Desktop Sticky Sidebar Column */}
                <DesktopSidebar serviceName="Web Development" expertName="Michael Chang" expertRole="Technical Director" />

            </div >
            {/* --- END DESKTOP 2-COLUMN LAYOUT --- */}

            {/* CTA */}
            <section className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 mb-8 bg-surface-light dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/10 shadow-neumorphic-sm dark:shadow-none transition-colors">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 dark:bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-[80px]"></div>
                <div className="relative z-10 text-center flex flex-col items-center max-w-2xl mx-auto">
                    <div className="w-20 h-20 mx-auto bg-white dark:bg-black/60 rounded-2xl flex items-center justify-center mb-6 shadow-neumorphic-sm dark:shadow-none text-primary rotate-3 hover:rotate-0 transition-transform duration-300">
                        <Rocket size={40} className="stroke-current" />
                    </div>
                    <h3 className="text-4xl font-black text-text-main dark:text-text-main-dark mb-4 transition-colors">Ready to Scale?</h3>
                    <p className="text-text-sub dark:text-text-sub-dark text-lg mb-8 transition-colors">Stop losing customers to slow load times. Schedule a technical consultation today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <StarBorder as="button" className="w-full sm:w-auto" color="rgba(104,54,244,0.6)" speed="4s">
                            <span className="flex items-center gap-2">Book Strategy Call</span>
                        </StarBorder>
                        <button className="px-8 py-4 bg-white dark:bg-[#1a1a1a] text-text-sub dark:text-text-main-dark font-bold rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm">
                            View Pricing
                        </button>
                    </div>
                </div>
            </section>


            <ServiceCrossLinks currentService="Web Development" />
        </main >
    );
}
