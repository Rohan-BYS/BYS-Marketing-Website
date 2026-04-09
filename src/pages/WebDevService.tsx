import ScrollReveal from '../components/ScrollReveal';
import StarBorder from '../components/ReactBits/StarBorder';
import { ArrowForward } from '@mui/icons-material';
import { Zap, Gauge, Code2, Database, LayoutTemplate, Rocket, GitBranch, Paintbrush, TestTubeDiagonal, ServerCrash, DollarSign, Timer, Users, Check, X, Shield, Globe, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import DesktopSidebar from '../components/DesktopSidebar';
import ServiceCrossLinks from '../components/ServiceCrossLinks';
import Waves from '../components/ReactBits/Waves';
import OkhlaStory from '../components/OkhlaStory';

interface WebDevServiceProps {
    locationOverride?: string;
}

/* ═══════ Infinite marquee of tech brand logos ═══════ */
function TechMarquee() {
    const techs = [
        { name: 'React', color: '#61DAFB' },
        { name: 'Next.js', color: '#ffffff' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Node.js', color: '#339933' },
        { name: 'Tailwind', color: '#06B6D4' },
        { name: 'PostgreSQL', color: '#4169E1' },
        { name: 'Figma', color: '#F24E1E' },
        { name: 'Vercel', color: '#ffffff' },
        { name: 'Supabase', color: '#3ECF8E' },
        { name: 'GraphQL', color: '#E10098' },
        { name: 'Docker', color: '#2496ED' },
        { name: 'AWS', color: '#FF9900' },
    ];
    const doubled = [...techs, ...techs]; // duplicate for seamless loop

    return (
        <div className="w-full overflow-hidden py-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent pointer-events-none"></div>
            <div className="flex gap-8 animate-marquee-slow whitespace-nowrap">
                {doubled.map((t, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/60 dark:bg-white/5 border border-gray-100 dark:border-white/10 backdrop-blur-sm shrink-0 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                        <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: t.color, boxShadow: `0 0 8px ${t.color}40` }}></div>
                        <span className="text-sm font-bold text-text-sub dark:text-text-sub-dark whitespace-nowrap">{t.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ═══════ Animated comparison table ═══════ */
function ComparisonStrip() {
    const rows = [
        { feature: 'Page Speed Score', us: '99+', them: '40–70' },
        { feature: 'Load Time', us: '<0.4s', them: '3–6s' },
        { feature: 'Mobile UX', us: 'Pixel-perfect', them: 'Template fit' },
        { feature: 'SEO Architecture', us: 'AI-Ready Schema', them: 'Basic meta tags' },
        { feature: 'Post-Launch Support', us: '30 days included', them: 'Extra charge' },
        { feature: 'Code Ownership', us: '100% yours', them: 'Licensed / locked' },
    ];

    return (
        <ScrollReveal>
            <section>
                <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark mb-3 tracking-tight">BYS vs The Rest</h3>
                <p className="text-sm text-text-sub dark:text-text-sub-dark mb-8 max-w-xl">Not all agencies are built equal. Here's the honest breakdown.</p>
                <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-neumorphic-sm dark:shadow-none">
                    {/* Header */}
                    <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-4 bg-gray-50 dark:bg-white/5 text-xs font-black uppercase tracking-widest text-text-sub dark:text-text-sub-dark">
                        <span>Feature</span>
                        <span className="text-center w-24 sm:w-32">BYS</span>
                        <span className="text-center w-24 sm:w-32">Others</span>
                    </div>
                    {rows.map((row, i) => (
                        <div key={i} className={`grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-4 items-center text-sm border-t border-gray-50 dark:border-white/5 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f0f0f]' : 'bg-gray-50/50 dark:bg-white/[0.02]'} hover:bg-primary/5 dark:hover:bg-primary/5 transition-colors`}>
                            <span className="font-semibold text-text-main dark:text-text-main-dark text-xs sm:text-sm">{row.feature}</span>
                            <span className="flex items-center justify-center gap-1.5 w-24 sm:w-32">
                                <Check size={14} className="text-green-500 shrink-0" />
                                <span className="font-bold text-green-600 dark:text-green-400 text-xs sm:text-sm">{row.us}</span>
                            </span>
                            <span className="flex items-center justify-center gap-1.5 w-24 sm:w-32">
                                <X size={14} className="text-red-400 shrink-0" />
                                <span className="font-medium text-text-sub dark:text-text-sub-dark text-xs sm:text-sm">{row.them}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </ScrollReveal>
    );
}

export default function WebDevService({ locationOverride }: WebDevServiceProps) {
    const isOkhla = locationOverride?.toLowerCase().includes('okhla');

    // Massy Title Logic
    const pageTitle = isOkhla
        ? `Best Web Development Company in ${locationOverride} Phase 1, 2, 3`
        : locationOverride
            ? `Premium Web Development Services in ${locationOverride}`
            : "Premium Web Development Services";

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development",
            "provider": {
                "@type": "Organization",
                "name": "BYS Marketing",
                "url": "https://bys.marketing"
            },
            "areaServed": locationOverride || "Worldwide",
            "description": isOkhla
                ? `Specialized high-performance web development for businesses in ${locationOverride}. We build growth machines for industrial leaders and exporters.`
                : "Premium, high-performance web development services including React, Next.js, and headless CMS architectures. We build growth machines that load in under 0.4 seconds."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://bys.marketing/services" },
                { "@type": "ListItem", "position": 3, "name": isOkhla ? `Web Development ${locationOverride}` : "Web Development", "item": `https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/web-development` }
            ]
        }
    ];

    return (
        <main className="flex flex-col gap-12 lg:gap-20 px-6 pt-8 max-w-[1440px] lg:px-12 mx-auto w-full pb-40">
            <SEOHead
                title={pageTitle}
                description={isOkhla
                    ? `Top-rated web development agency in ${locationOverride}. Specializing in B2B portals, export websites, and industrial E-commerce with sub-0.4s load times.`
                    : "High-performance web development using React, Next.js & Node.js. Sub-0.4s load times, 99+ Google PageSpeed scores. We architect growth machines."}
                url={`https://bys.marketing${locationOverride ? `/in/${locationOverride.toLowerCase().replace(/ /g, '-')}` : ''}/services/web-development`}
                schema={schemas}
                keywords={`${isOkhla ? `web development ${locationOverride}, best agency ${locationOverride}, industrial website design, ` : ''}web development, React development, Next.js agency, premium web design, high-performance websites, headless CMS, Node.js, BYS Marketing`}
            />

            {/* ═══════════ HERO SECTION — Enhanced ═══════════ */}
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-fuchsia-500 dark:from-primary-glow dark:via-purple-400 dark:to-fuchsia-400 animate-gradient-x bg-[length:200%_auto]">Development</span>
                        </h2>

                        <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-lg md:text-xl max-w-2xl font-medium transition-colors">
                            We architect high-performance digital ecosystems. Merging technical precision with aesthetic excellence to build growth machines that scale.
                        </p>

                        {/* Floating tech chips — mobile responsive row */}
                        <div className="flex flex-wrap gap-2">
                            {['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/70 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-[11px] font-bold text-text-sub dark:text-text-sub-dark backdrop-blur-sm hover:border-primary/40 hover:text-primary transition-all duration-200">{tech}</span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <a href="https://wa.me/+918383894893?text=Hi%2C%20I'm%20interested%20in%20Web%20Development%20services.%20Let's%20discuss%20my%20project." target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold py-4 px-8 rounded-2xl shadow-[0_0_25px_rgba(104,54,244,0.35)] hover:shadow-[0_0_40px_rgba(104,54,244,0.5)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 group/btn hover:bg-primary-dark text-lg">
                                <span>Start Build</span>
                                <ArrowForward className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                            <Link to="/website-demos" className="py-4 px-8 rounded-2xl bg-white dark:bg-[#1a1a1a] text-text-main dark:text-text-main-dark font-bold shadow-neumorphic-sm dark:shadow-none active:shadow-neumorphic-pressed flex items-center justify-center hover:scale-[1.02] transition-transform border border-gray-50 dark:border-white/10 text-lg gap-2">
                                <LayoutTemplate className="text-primary" />
                                <span>Website Demos</span>
                            </Link>
                        </div>
                    </div>

                    {/* 3D CODE BLOCK — Desktop Only */}
                    <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[400px] h-[340px] opacity-90 [perspective:1000px]">
                        <div className="w-full h-full bg-white/40 dark:bg-black/60 backdrop-blur-md rounded-2xl border border-white/60 dark:border-white/10 shadow-glass dark:shadow-2xl p-6 font-mono text-xs text-gray-800 dark:text-gray-300 flex flex-col gap-2 transition-all [transform:rotateY(-12deg)_rotateX(5deg)] hover:[transform:rotateY(-6deg)_rotateX(2deg)] duration-700">
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

            {/* ═══════════ TECH MARQUEE — Adds motion ═══════════ */}
            <TechMarquee />

            {/* Okhla Personal Narrative */}
            <OkhlaStory location={locationOverride} />

            {/* --- DESKTOP 2-COLUMN LAYOUT WRAPPER --- */}
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start w-full">

                {/* Main Content Column */}
                <div className="flex flex-col gap-12 lg:gap-20 w-full min-w-0">

                    {/* ═══ PERFORMANCE METRICS — Enhanced with gradient borders ═══ */}
                    <ScrollReveal>
                        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { value: '99+', label: 'Speed Score', icon: <Gauge size={22} />, gradient: 'from-green-400 to-emerald-500' },
                                { value: '<0.4s', label: 'Load Time', icon: <Zap size={22} />, gradient: 'from-primary to-purple-500' },
                                { value: '100%', label: 'Mobile First', icon: <Smartphone size={22} />, gradient: 'from-blue-400 to-cyan-500' },
                                { value: 'A+', label: 'Security', icon: <Shield size={22} />, gradient: 'from-orange-400 to-amber-500' },
                            ].map((metric, i) => (
                                <div key={i} className="relative group">
                                    {/* Gradient border trick */}
                                    <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}></div>
                                    <div className="relative bg-white dark:bg-[#141414] border border-gray-100 dark:border-white/5 rounded-2xl p-5 md:p-6 flex flex-col items-center text-center gap-3 shadow-neumorphic-sm dark:shadow-none group-hover:shadow-xl transition-all duration-300">
                                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-white shadow-lg`}>
                                            {metric.icon}
                                        </div>
                                        <h4 className="text-2xl md:text-3xl font-black text-text-main dark:text-text-main-dark group-hover:text-primary transition-colors">{metric.value}</h4>
                                        <p className="text-[10px] md:text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-widest font-bold">{metric.label}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </ScrollReveal>

                    {/* ═══ TECH STACK — Enhanced cards ═══ */}
                    <ScrollReveal delay={0.1}>
                        <section>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark tracking-tight transition-colors">Tech Stack</h3>
                                <a className="text-sm text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-primary/10" href="#">
                                    Full capabilities <ArrowForward fontSize="small" />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                {[
                                    { title: 'Modern Frontend', desc: 'React 19, Vue 3, and Next.js 15 for reactive, lightning-fast interfaces with server components.', icon: <Code2 size={28} />, gradient: 'from-blue-500 to-cyan-400', hoverColor: 'group-hover:text-blue-500' },
                                    { title: 'Robust Backend', desc: 'Node.js, Python, and Supabase architectures that scale securely to millions of requests.', icon: <Database size={28} />, gradient: 'from-green-500 to-emerald-400', hoverColor: 'group-hover:text-green-500' },
                                    { title: 'Headless CMS', desc: 'Content management via Sanity, Strapi, or Contentful with real-time preview.', icon: <LayoutTemplate size={28} />, gradient: 'from-orange-500 to-amber-400', hoverColor: 'group-hover:text-orange-500' },
                                    { title: 'Global Deploy', desc: 'Edge-deployed on Vercel, AWS, or Cloudflare for sub-50ms TTFB worldwide.', icon: <Globe size={28} />, gradient: 'from-purple-500 to-pink-400', hoverColor: 'group-hover:text-purple-500' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white dark:bg-[#141414] border border-gray-100 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-5 group cursor-pointer hover:-translate-y-2 shadow-neumorphic-sm dark:shadow-none hover:shadow-xl hover:shadow-purple-100/50 dark:hover:shadow-glow-purple transition-all duration-300 h-full">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className={`font-bold text-lg text-text-main dark:text-text-main-dark mb-1.5 transition-colors ${item.hoverColor}`}>{item.title}</h4>
                                            <p className="text-xs text-text-sub dark:text-text-sub-dark font-medium leading-relaxed transition-colors">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* Performance bars card */}
                                <div className="sm:col-span-2 bg-white dark:bg-[#141414] border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-neumorphic-sm dark:shadow-none">
                                    <h4 className="font-bold text-base text-text-main dark:text-text-main-dark mb-6">Lighthouse Audit Scores</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                        {[
                                            { label: 'Performance', score: 99, color: 'from-green-400 to-green-500', glow: 'rgba(34,197,94,0.5)' },
                                            { label: 'Accessibility', score: 100, color: 'from-primary-light to-primary', glow: 'rgba(104,54,244,0.5)' },
                                            { label: 'Best Practices', score: 100, color: 'from-blue-400 to-blue-500', glow: 'rgba(59,130,246,0.5)' },
                                            { label: 'SEO', score: 100, color: 'from-orange-400 to-orange-500', glow: 'rgba(249,115,22,0.5)' },
                                        ].map((bar, i) => (
                                            <div key={i}>
                                                <div className="flex items-center justify-between text-xs font-bold text-text-sub dark:text-text-sub-dark mb-1.5">
                                                    <span>{bar.label}</span>
                                                    <span className="text-text-main dark:text-text-main-dark">{bar.score}</span>
                                                </div>
                                                <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-2 overflow-hidden">
                                                    <div className={`bg-gradient-to-r ${bar.color} h-2 rounded-full transition-all duration-1000`} style={{ width: `${bar.score}%`, boxShadow: `0 0 10px ${bar.glow}` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* ═══ RECENT DEPLOYMENTS ═══ */}
                    <section className="overflow-hidden">
                        <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark mb-8 tracking-tight transition-colors">Recent Deployments</h3>
                        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-12 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x lg:snap-none">
                            {[
                                { title: 'Mashup Minati Pro', cat: 'Entertainment', desc: 'Immersive, high-energy digital presence for India\'s premier event aggregator.', img: '/portfolio/mashupminati.png' },
                                { title: 'Design Furniture', cat: 'Fabrication Catalog', desc: 'Comprehensive cataloging system tailored for B2B interior architecture lines.', img: '/portfolio/df.png' },
                                { title: 'Advocate Yajuvandra', cat: 'Legal Services', desc: 'Secure consultation portal prioritizing clear communication and expertise.', img: '/portfolio/advocate.png' },
                            ].map((project, i) => (
                                <div key={i} className="snap-center shrink-0 w-[280px] md:w-[380px] h-[460px] rounded-[2rem] relative overflow-hidden group shadow-xl shadow-gray-200 dark:shadow-none border border-transparent dark:border-white/5 cursor-pointer">
                                    <img alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={project.img} loading="lazy" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-7 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-xs font-bold text-white bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-lg w-fit mb-3 shadow-lg">{project.cat}</span>
                                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h4>
                                        <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ═══ DEVELOPMENT PROCESS — Enhanced vertical timeline ═══ */}
                    <ScrollReveal>
                        <section>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark tracking-tight transition-colors">Our Build Process</h3>
                                <span className="text-xs font-bold text-primary bg-purple-50 dark:bg-primary/10 px-3 py-1.5 rounded-lg border border-purple-100 dark:border-primary/20">4-Phase Architecture</span>
                            </div>
                            <div className="relative">
                                {/* Vertical connecting line — hidden on mobile, shown md+ */}
                                <div className="hidden md:block absolute left-[23px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-400 via-purple-500 via-green-400 to-orange-400 opacity-30 rounded-full"></div>

                                <div className="grid grid-cols-1 gap-5">
                                    {[
                                        { step: '01', title: 'Discovery & Architecture', desc: 'Deep-dive into business goals, user personas, and technical requirements. We map the entire information architecture before writing a single line of code.', icon: <GitBranch size={22} />, color: 'from-blue-500 to-cyan-400' },
                                        { step: '02', title: 'UI/UX Engineering', desc: 'Pixel-perfect Figma-to-code translation with mobile-first responsive grids, micro-animations, and accessibility (WCAG 2.1 AA).', icon: <Paintbrush size={22} />, color: 'from-purple-500 to-pink-400' },
                                        { step: '03', title: 'Development & QA', desc: 'Agile sprints with CI/CD pipelines. Every component is unit-tested. Performance budgets are enforced at build time, not afterthought.', icon: <TestTubeDiagonal size={22} />, color: 'from-green-500 to-emerald-400' },
                                        { step: '04', title: 'Launch & Growth', desc: 'Zero-downtime deployment with DNS cutover strategy, 301 redirect mapping, and post-launch performance monitoring for 30 days.', icon: <Rocket size={22} />, color: 'from-orange-500 to-amber-400' },
                                    ].map((phase, i) => (
                                        <div key={i} className="flex gap-5 md:gap-6 items-start group">
                                            {/* Step indicator */}
                                            <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                                                {phase.icon}
                                            </div>
                                            {/* Content card */}
                                            <div className="flex-1 bg-white dark:bg-[#141414] border border-gray-100 dark:border-white/5 rounded-2xl p-6 md:p-7 group-hover:-translate-y-0.5 shadow-neumorphic-sm dark:shadow-none group-hover:shadow-xl group-hover:shadow-purple-100/50 dark:group-hover:shadow-glow-purple transition-all duration-300 relative overflow-hidden">
                                                <span className="text-5xl font-black text-gray-100 dark:text-gray-800 absolute top-3 right-5 select-none pointer-events-none group-hover:text-primary/10 transition-colors">{phase.step}</span>
                                                <h4 className="font-bold text-base md:text-lg text-text-main dark:text-text-main-dark transition-colors relative z-10 mb-2">{phase.title}</h4>
                                                <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed transition-colors relative z-10">{phase.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* ═══ BYS vs THE REST — Comparison Table ═══ */}
                    <ComparisonStrip />

                    {/* ═══ WHY SPEED MATTERS ═══ */}
                    <ScrollReveal>
                        <section className="rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-br from-purple-50 to-white dark:from-[#0d0d0d] dark:to-[#141414] border border-purple-100 dark:border-white/10 shadow-glass-strong dark:shadow-none relative overflow-hidden">
                            <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
                            <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark mb-3 transition-colors">Why Speed Equals Revenue</h3>
                            <p className="text-text-sub dark:text-text-sub-dark text-sm mb-8 max-w-xl leading-relaxed">Every millisecond matters. Here's the data that drives our obsession with performance.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    { stat: '53%', label: 'of mobile users abandon sites that take over 3 seconds to load', icon: <ServerCrash size={24} className="text-red-500" /> },
                                    { stat: '$2.6M', label: 'annual revenue loss per second of load time delay for a $5M/yr e-commerce site', icon: <DollarSign size={24} className="text-green-500" /> },
                                    { stat: '70%', label: 'longer sessions on sites with sub-2s load times vs industry average', icon: <Timer size={24} className="text-blue-500" /> },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/60 dark:bg-black/30 rounded-2xl p-6 border border-white dark:border-white/5 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center">{item.icon}</div>
                                        <h4 className="text-3xl font-black text-primary">{item.stat}</h4>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed font-medium">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* ═══ WHO WE BUILD FOR ═══ */}
                    <ScrollReveal>
                        <section>
                            <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark mb-8 tracking-tight transition-colors">Built For Ambitious Brands</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: 'Startups', desc: 'MVP-to-market in 6 weeks. Lean architecture that scales from 100 to 100,000 users without re-platforming.', icon: <Rocket size={28} className="text-primary" /> },
                                    { title: 'E-Commerce', desc: 'Headless Shopify & WooCommerce builds optimized for conversion rate, average order value, and cart abandonment recovery.', icon: <DollarSign size={28} className="text-primary" /> },
                                    { title: 'Enterprise', desc: 'Complex SaaS dashboards, multi-tenant architectures, and real-time data pipelines with enterprise-grade security.', icon: <Users size={28} className="text-primary" /> },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white dark:bg-[#141414] border border-gray-100 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-4 group hover:-translate-y-1 shadow-neumorphic-sm dark:shadow-none hover:shadow-xl transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-primary/10 flex items-center justify-center border border-purple-100 dark:border-primary/20">{item.icon}</div>
                                        <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark transition-colors">{item.title}</h4>
                                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>
                </div>

                {/* Desktop Sticky Sidebar Column */}
                <DesktopSidebar serviceName="Web Development" />

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
                        <Link to="/contact" className="w-full sm:w-auto">
                            <StarBorder as="span" className="w-full sm:w-auto" color="rgba(104,54,244,0.6)" speed="4s">
                                <span className="flex items-center gap-2">Book Strategy Call</span>
                            </StarBorder>
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] text-text-sub dark:text-text-main-dark font-bold rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm text-center">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>


            <ServiceCrossLinks currentService="Web Development" />
        </main >
    );
}
