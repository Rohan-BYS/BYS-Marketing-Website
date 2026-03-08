import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';
import { ArrowForward } from '@mui/icons-material';
import {
    Zap, BarChart3, Target, ShieldCheck,
    Rocket, Users, TrendingUp, CheckCircle2, Search, LineChart, Cpu, Gem,
    Server, Palette, Code, ArrowRight
} from 'lucide-react';
import { useBotContext } from '../context/ChatbotContext';
import { Link } from 'react-router-dom';
import MultiStepIntake from '../components/MultiStepIntake';
import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import LogoLoop from '../components/ReactBits/LogoLoop';
import LazySection from '../components/LazySection';
import MagicBento from '../components/ReactBits/MagicBento';

// Lazy load the heavy 3D Ballpit to prevent main thread blocking during initial render
const Ballpit = lazy(() => import('../components/ReactBits/Ballpit'));

export default function Home() {
    const { toggleChatbot } = useBotContext();
    const [isIntakeOpen, setIsIntakeOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // ─── COMPREHENSIVE SCHEMA FOR GOOGLE SITELINKS / KNOWLEDGE PANEL ───────────
    const homeSchemas = [
        // 1. WebSite + Sitelinks Searchbox — tells Google to show a search bar in results
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "BYS Marketing",
            "url": "https://bys.marketing",
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://bys.marketing/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            }
        },
        // 2. Organization — builds Knowledge Panel on Google with social links, logo, contact
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BYS Marketing",
            "alternateName": "BYS",
            "url": "https://bys.marketing",
            "logo": "https://bys.marketing/logo.png",
            "description": "BYS Marketing is a New Delhi-based full-service digital agency specialising in performance web development, SEO, social media marketing, UI/UX design, and IT solutions for businesses across India.",
            "foundingDate": "2016",
            "founders": [{ "@type": "Person", "name": "Rohan Chaudhary" }],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110025",
                "addressCountry": "IN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918383894893",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
                "https://www.instagram.com/bys.marketing",
                "https://www.linkedin.com/company/bys-marketing",
                "https://twitter.com/bysmarketing",
                "https://www.youtube.com/@bysmarketing"
            ]
        },
        // 3. SiteNavigationElement — tells Google the structure for Sitelinks
        {
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": ["Services", "Portfolio", "Blog", "Service Areas", "About Us", "Contact", "Exclusive Offers"],
            "url": [
                "https://bys.marketing/services",
                "https://bys.marketing/portfolio",
                "https://bys.marketing/blog",
                "https://bys.marketing/service-areas",
                "https://bys.marketing/about",
                "https://bys.marketing/contact",
                "https://bys.marketing/offers"
            ]
        },
        // 4. BreadcrumbList for the homepage
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" }
            ]
        }
    ];

    const services = [

        { icon: Server, title: 'Performance Engineering', desc: 'Lightning-fast, headless architectures that score 99+ on Lighthouse.', color: 'text-blue-500', link: '/services/web-development' },
        { icon: Search, title: 'SEO Dominance', desc: 'Mathematical, intent-driven organic optimization that outranks competitors.', color: 'text-green-500', link: '/services/digital-marketing' },
        { icon: Target, title: 'Paid Acquisition', desc: 'Hyper-targeted ad campaigns designed strictly for maximum ROAS.', color: 'text-orange-500', link: '/services/digital-marketing' },
        { icon: Palette, title: 'UI/UX Architecture', desc: 'Psychology-driven interfaces that remove friction and accelerate checkout.', color: 'text-purple-500', link: '/services/design' },
        { icon: Code, title: 'Full-Stack Development', desc: 'Custom web apps, portals, and scalable infrastructure tailored to you.', color: 'text-indigo-500', link: '/services/web-development' },
        { icon: BarChart3, title: 'Growth Consulting', desc: 'Fractional CMO services and strategic roadmapping for scaling brands.', color: 'text-pink-500', link: '/services/consultation' },
    ];

    const featuredWorks = [
        {
            category: 'Entertainment',
            title: 'Mashup Minati Pro',
            desc: 'High-energy event aggregator for royal weddings and stadium concerts. Built for massive scale and instant performance.',
            img: '/portfolio/mashupminati.png'
        },
        {
            category: 'Media Production',
            title: 'TM Production',
            desc: 'Premier media house showcase with high-end cinematography portfolio and automated booking infrastructure.',
            img: '/portfolio/tmproduction.png'
        },
        {
            category: 'Interior Design',
            title: 'Design Furniture (DF)',
            desc: 'Luxury metal fabrication & PVD coating digital showroom. Precision-engineered catalog for elite interior projects.',
            img: '/portfolio/df.png'
        },
    ];

    const logoLoopItems = [
        { src: 'https://cdn.simpleicons.org/html5/E34F26', alt: 'HTML5' },
        { src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python' },
        { src: 'https://cdn.simpleicons.org/javascript/F7DF1E', alt: 'JavaScript' },
        { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript' },
        { src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', alt: 'Tailwind CSS' },
        { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js' },
        { src: 'https://cdn.simpleicons.org/shopify/95BF47', alt: 'Shopify' },
        { src: 'https://cdn.simpleicons.org/stripe/008CDD', alt: 'Stripe' },
        { src: 'https://cdn.simpleicons.org/googleads/4285F4', alt: 'Google Ads' },
        { src: 'https://cdn.simpleicons.org/meta/0468FF', alt: 'Meta' },
        { src: 'https://cdn.simpleicons.org/googleanalytics/E37400', alt: 'Google Analytics' },
        { src: 'https://cdn.simpleicons.org/figma/F24E1E', alt: 'Figma' },
        { src: 'https://cdn.simpleicons.org/webflow/4353FF', alt: 'Webflow' },
        { src: 'https://cdn.simpleicons.org/supabase/3ECF8E', alt: 'Supabase' },
    ];

    return (
        <main className="flex flex-col gap-16 md:gap-24 pt-4 pb-32 mx-auto w-full">
            <SEOHead
                title="BYS Marketing — Performance Digital Agency | Delhi NCR"
                description="BYS Marketing is a New Delhi-based full-service digital agency specialising in web development, SEO, digital marketing, UI/UX design, and IT solutions for businesses across India."
                url="https://bys.marketing"
                keywords="digital marketing agency Delhi, web development agency India, SEO agency Delhi NCR, BYS Marketing, performance marketing, UI UX design agency"
                schema={homeSchemas}
            />

            {/* 2. HERO SECTION */}
            <section className="relative w-full overflow-hidden text-center">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>}>
                        {!isMobile && (
                            <Ballpit count={150} gravity={0.5} friction={0.9975} wallBounce={0.95} followCursor={true} colors={[0x6836f4, 0x6836f4, 0x6836f4, 0xffffff, 0x6836f4]} />
                        )}
                        {isMobile && (
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background dark:from-primary/20 dark:via-black dark:to-black"></div>
                        )}
                    </Suspense>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" style={{ transform: 'translate3d(-50%, -50%, 0)', willChange: 'transform' }}></div>

                {/* Hero Content */}
                <div className="relative z-20 flex flex-col items-center justify-center min-h-[75vh] sm:min-h-[85vh] h-full px-4 text-center w-full">
                    <ScrollReveal direction="down" delay={0.1}>
                        <div className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/5 dark:bg-white/5 backdrop-blur-md border border-primary/20 dark:border-white/10 mb-6 sm:mb-12 shadow-[0_0_15px_rgba(104,54,244,0.15)] transition-colors">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-primary-light animate-pulse"></span>
                            <span className="text-sm font-bold text-text-main dark:text-white tracking-widest uppercase">Next-Gen Digital Agency</span>
                        </div>
                    </ScrollReveal>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-text-main dark:text-white mb-6 sm:mb-10 leading-[1.05] tracking-tighter dark:text-glow transition-colors max-w-6xl mx-auto">
                        <span className="block mb-2 sm:mb-4">Digital Excellence</span>
                        <span className="text-primary dark:text-primary-light">Reimagined.</span>
                    </h1>

                    <ScrollReveal direction="up" delay={0.2}>
                        <p className="inline-block text-lg sm:text-2xl md:text-3xl text-text-main font-bold dark:text-white mb-10 sm:mb-14 max-w-4xl mx-auto leading-relaxed px-8 py-5 rounded-3xl bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl transition-colors relative z-10">
                            Elevate your brand with data-driven strategies, seamless development, and psychology-based conversion design.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
                            <button onClick={() => setIsIntakeOpen(true)} className="w-full sm:w-auto px-7 py-4 sm:px-10 sm:py-5 rounded-full bg-primary text-white font-black text-base sm:text-lg md:text-xl hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(104,54,244,0.4)] hover:shadow-[0_0_40px_rgba(104,54,244,0.6)] flex items-center justify-center gap-3 group">
                                Start Your Project
                                <ArrowForward className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <Link to="/services" className="w-full sm:w-auto px-7 py-4 sm:px-10 sm:py-5 rounded-full border-2 border-primary/20 dark:border-white/20 text-primary dark:text-white font-bold text-base sm:text-lg md:text-xl hover:bg-primary/5 dark:hover:bg-white/5 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 bg-white/50 dark:bg-white/5">
                                View Our Services
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 2.5 LOGO LOOP / TECH STACK */}
            <LazySection fallbackHeight="300px">
                <section className="w-full relative z-20 overflow-hidden bg-background dark:bg-black/60 py-12 flex flex-col items-center -mt-10 sm:-mt-16">
                    <h2 className="text-lg md:text-xl font-black text-text-main dark:text-white uppercase tracking-[0.2em] mb-10 text-center">
                        Our Tech Stack
                    </h2>
                    <div className="w-full">
                        <LogoLoop
                            logos={logoLoopItems}
                            speed={50}
                            logoHeight={40}
                            gap={80}
                            fadeOut={true}
                            fadeOutColor="rgba(var(--background-rgb), 1)"
                        />
                    </div>
                </section>
            </LazySection>

            {/* 3. SOCIAL PROOF LOGOS */}
            <section className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-500 px-6 -mt-10 sm:-mt-16">
                <p className="text-xs font-bold text-text-sub dark:text-text-sub-dark uppercase tracking-widest mb-6 text-center">Trusted by innovative disruptors worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale dark:grayscale-0 dark:brightness-100 dark:opacity-80">
                    {/* Simulated partner text-logos */}
                    <div className="flex items-center gap-2 font-black text-xl text-text-main dark:text-white"><Zap size={24} /> NovaTech</div>
                    <div className="flex items-center gap-2 font-serif italic font-bold text-2xl text-text-main dark:text-white">Luxe&Co.</div>
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-text-main dark:text-white"><Cpu size={28} /> SYNTHESIS</div>
                    <div className="flex items-center gap-2 font-black text-2xl lowercase text-text-main dark:text-white"><Gem size={20} className="text-primary" /> aureus</div>
                </div>
            </section>

            {/* 📊 ANIMATED STATS COUNTER STRIP */}
            <section className="px-6 max-w-[1200px] mx-auto w-full" id="stats-strip">
                {(() => {
                    const stats = [
                        { value: 150, suffix: '+', label: 'Projects Completed', icon: '🚀' },
                        { value: 8, suffix: '+', label: 'Years of Experience', icon: '📅' },
                        { value: 12, suffix: '+', label: 'Industries Served', icon: '🌐' },
                        { value: 98, suffix: '%', label: 'Client Retention', icon: '🤝' },
                    ];
                    function CountUpItem({ value, suffix, label, icon }: { value: number; suffix: string; label: string; icon: string }) {
                        const [count, setCount] = useState(0);
                        const ref = useRef<HTMLDivElement>(null);
                        const started = useRef(false);
                        useEffect(() => {
                            const el = ref.current;
                            if (!el) return;
                            const observer = new IntersectionObserver(([entry]) => {
                                if (entry.isIntersecting && !started.current) {
                                    started.current = true;
                                    const duration = 1800;
                                    const steps = 60;
                                    const increment = value / steps;
                                    let current = 0;
                                    const timer = setInterval(() => {
                                        current += increment;
                                        if (current >= value) { setCount(value); clearInterval(timer); }
                                        else setCount(Math.floor(current));
                                    }, duration / steps);
                                }
                            }, { threshold: 0.5 });
                            observer.observe(el);
                            return () => observer.disconnect();
                        }, [value]);
                        return (
                            <div ref={ref} className="flex flex-col items-center gap-2 text-center">
                                <span className="text-3xl">{icon}</span>
                                <div className="flex items-end gap-0.5">
                                    <span className="text-4xl md:text-5xl font-black text-primary tabular-nums">{count}</span>
                                    <span className="text-2xl md:text-3xl font-black text-primary mb-0.5">{suffix}</span>
                                </div>
                                <p className="text-xs font-bold text-text-sub dark:text-text-sub-dark uppercase tracking-widest">{label}</p>
                            </div>
                        );
                    }
                    return (
                        <div className="glass-panel rounded-3xl px-8 py-10 border border-white/60 dark:border-white/10 dark:bg-[#0f0f0f]/60 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((s, i) => <CountUpItem key={i} {...s} />)}
                        </div>
                    );
                })()}
            </section>

            {/* DESKTOP ONLY: Why BYS Marketing — 3-column trust section */}
            <section className="hidden lg:block px-6 -mt-8 sm:-mt-12">
                <div className="text-center mb-10">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Why Choose Us</h3>
                    <h2 className="text-4xl font-black text-text-main dark:text-text-main-dark">Built Different. By Design.</h2>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="glass-panel rounded-3xl p-8 border border-white/60 dark:border-white/10 bg-white/30 dark:bg-black/20 hover:shadow-floating hover:-translate-y-1 transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center mb-5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                            <CheckCircle2 size={28} strokeWidth={2.5} />
                        </div>
                        <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">Proven Results</h4>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">We don't celebrate vanity metrics. Every strategy is tied to measurable revenue outcomes — from CPA targets to conversion rate improvements.</p>
                        <div className="mt-5 pt-5 border-t border-gray-100 dark:border-white/10">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-black text-green-600 dark:text-green-400">400%</span>
                                <span className="text-xs text-text-sub dark:text-text-sub-dark uppercase font-bold">Avg Lead Increase</span>
                            </div>
                        </div>
                    </div>
                    <div className="glass-panel rounded-3xl p-8 border border-white/60 dark:border-white/10 bg-white/30 dark:bg-black/20 hover:shadow-floating hover:-translate-y-1 transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform">
                            <ShieldCheck size={28} strokeWidth={2.5} />
                        </div>
                        <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">Full-Service Agency</h4>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">Development, design, SEO, paid ads, content, and security — all under one roof. No more juggling freelancers or coordinating between 5 vendors.</p>
                        <div className="mt-5 pt-5 border-t border-gray-100 dark:border-white/10">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-black text-primary">10+</span>
                                <span className="text-xs text-text-sub dark:text-text-sub-dark uppercase font-bold">Integrated Services</span>
                            </div>
                        </div>
                    </div>
                    <div className="glass-panel rounded-3xl p-8 border border-white/60 dark:border-white/10 bg-white/30 dark:bg-black/20 hover:shadow-floating hover:-translate-y-1 transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <TrendingUp size={28} strokeWidth={2.5} />
                        </div>
                        <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">Transparent Pricing</h4>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">No hidden fees, no surprise invoices. We provide detailed proposals with clear deliverables, timelines, and costs before a single pixel is designed.</p>
                        <div className="mt-5 pt-5 border-t border-gray-100 dark:border-white/10">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-black text-blue-600 dark:text-blue-400">0</span>
                                <span className="text-xs text-text-sub dark:text-text-sub-dark uppercase font-bold">Hidden Charges</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DESKTOP ONLY: Client Success Snapshot */}
            <section className="hidden lg:block px-6">
                <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 dark:from-primary/20 dark:via-blue-500/10 dark:to-purple-500/20 rounded-3xl p-8 border border-primary/20 dark:border-primary/10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                                <Rocket size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main dark:text-white text-lg">Client Success Snapshot</h4>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark">Real results from real partnerships</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-12">
                            <div className="text-center">
                                <p className="text-3xl font-black text-primary">150+</p>
                                <p className="text-[10px] text-text-sub dark:text-text-sub-dark uppercase tracking-widest font-bold mt-1">Projects Delivered</p>
                            </div>
                            <div className="w-px h-12 bg-gray-200 dark:bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-3xl font-black text-green-600 dark:text-green-400">12+</p>
                                <p className="text-[10px] text-text-sub dark:text-text-sub-dark uppercase tracking-widest font-bold mt-1">Industries Served</p>
                            </div>
                            <div className="w-px h-12 bg-gray-200 dark:bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-3xl font-black text-blue-600 dark:text-blue-400">24/7</p>
                                <p className="text-[10px] text-text-sub dark:text-text-sub-dark uppercase tracking-widest font-bold mt-1">Support Access</p>
                            </div>
                            <div className="w-px h-12 bg-gray-200 dark:bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-3xl font-black text-orange-500">48h</p>
                                <p className="text-[10px] text-text-sub dark:text-text-sub-dark uppercase tracking-widest font-bold mt-1">Avg Response Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✨ STARTUP PITCH SECTION */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-white/10 p-8 md:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_-20%,rgba(104,54,244,0.25),transparent_70%)] pointer-events-none" />
                    <div className="absolute top-6 right-6 hidden md:flex gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                        <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Accepting New Clients</span>
                    </div>
                    <div className="relative z-10">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4 block">Built Different. For Everyone.</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 max-w-2xl">
                            Premium Agency Services.<br />
                            <span className="text-primary">Startup-Friendly Prices.</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                            Whether you're bootstrapping or scaling, we offer flexible retainers, fast turnarounds, and a full stack of services — all under one roof.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            {[
                                { icon: '⚡', label: 'Fast Turnaround', desc: 'Campaigns live in days, not weeks.' },
                                { icon: '🎯', label: 'Full-Stack Agency', desc: 'Dev, design, ads, media & more.' },
                                { icon: '💸', label: 'Flexible Pricing', desc: 'Plans for every stage of growth.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                                    <span className="text-2xl block mb-2">{item.icon}</span>
                                    <h4 className="font-bold text-white text-sm mb-1">{item.label}</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <a
                            href="https://wa.me/+918383894893?text=Hi%2C%20I%20want%20to%20discuss%20my%20project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-full shadow-[0_0_20px_rgba(104,54,244,0.4)] hover:shadow-[0_0_35px_rgba(104,54,244,0.6)] hover:bg-primary-dark transition-all duration-300"
                        >
                            <span>Let's Talk — Get a Free Quote</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.526 5.855L.057 23.4a.5.5 0 0 0 .61.61l5.568-1.456A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.061-1.375l-.361-.214-3.742.98.999-3.652-.235-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* 💰 PRICING SECTION */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Transparent Pricing</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mb-4">Plans Built to Scale With You</h2>
                        <p className="text-text-sub dark:text-text-sub-dark max-w-lg mx-auto">No hidden fees. No surprise invoices. Pick a plan, and we'll build your growth machine.</p>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            name: 'Starter',
                            badge: null,
                            price: '₹15,000',
                            per: '/mo',
                            desc: 'Perfect for early-stage startups ready to build their first digital presence.',
                            features: ['1 Service (Web or Marketing)', 'Up to 5 Pages Website', 'Basic SEO Setup', 'Monthly Performance Report', 'Email Support'],
                            cta: 'Get Started',
                            highlight: false,
                        },
                        {
                            name: 'Growth',
                            badge: 'Most Popular',
                            price: '₹35,000',
                            per: '/mo',
                            desc: 'For growing brands that need a full-stack partner to scale aggressively.',
                            features: ['3 Services Combined', 'Custom Website + SEO + Ads', 'Social Media Management', 'Weekly Reporting & Strategy', 'Priority Support', 'Dedicated Account Manager'],
                            cta: 'Start Growing',
                            highlight: true,
                        },
                        {
                            name: 'Enterprise',
                            badge: null,
                            price: 'Custom',
                            per: '',
                            desc: 'Full-scale digital transformation with all services and dedicated resources.',
                            features: ['All Services Unlocked', 'Media Production Included', 'IT Hardware Support', 'Cyber Security Audit', '24/7 Priority Support', 'Custom Reporting Dashboard'],
                            cta: 'Talk to Us',
                            highlight: false,
                        },
                    ].map((plan, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className={`relative flex flex-col h-full rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 ${plan.highlight
                                ? 'bg-primary border-primary/30 shadow-[0_0_40px_rgba(104,54,244,0.3)]'
                                : 'bg-white dark:bg-[#1a1a1a] border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none hover:shadow-floating'}`}>
                                {plan.badge && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                                        {plan.badge}
                                    </span>
                                )}
                                <div className="mb-6">
                                    <h3 className={`text-lg font-black uppercase tracking-widest mb-2 ${plan.highlight ? 'text-white/80' : 'text-text-sub dark:text-text-sub-dark'}`}>{plan.name}</h3>
                                    <div className="flex items-end gap-1 mb-3">
                                        <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-text-main dark:text-white'}`}>{plan.price}</span>
                                        <span className={`text-sm font-bold mb-1 ${plan.highlight ? 'text-white/60' : 'text-text-sub dark:text-text-sub-dark'}`}>{plan.per}</span>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/70' : 'text-text-sub dark:text-text-sub-dark'}`}>{plan.desc}</p>
                                </div>
                                <ul className="flex flex-col gap-3 mb-8 flex-1">
                                    {plan.features.map((f, fi) => (
                                        <li key={fi} className={`flex items-center gap-2.5 text-sm ${plan.highlight ? 'text-white' : 'text-text-main dark:text-white'}`}>
                                            <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={`https://wa.me/+918383894893?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3.5 rounded-xl font-bold text-center transition-all duration-300 block ${plan.highlight
                                        ? 'bg-white text-primary hover:bg-gray-100 shadow-md'
                                        : 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-purple-200/50 dark:shadow-purple-900/30'}`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                <ScrollReveal>
                    <p className="text-center text-xs text-text-sub dark:text-text-sub-dark mt-6">
                        All plans include onboarding, strategy session, and monthly reports. Need something custom? <a href="https://wa.me/+918383894893" className="text-primary font-bold hover:underline">Chat with us</a>.
                    </p>
                </ScrollReveal>
            </section>

            {/* Ready to Transform Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <ScrollReveal direction="right" className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Ready to Transform Your Digital Presence?</h2>
                            <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-xl leading-relaxed">Join industry leaders who trust BYS to deliver exceptional web experiences and drive growth.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => setIsIntakeOpen(true)} className="px-8 py-4 bg-white text-primary font-bold rounded-2xl text-lg hover:shadow-glow-white hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                    Start Your Project
                                    <ArrowForward />
                                </button>
                                <button onClick={toggleChatbot} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl text-lg hover:bg-white/10 transition-all duration-300">
                                    Schedule a Call
                                </button>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="left" className="lg:w-1/2 w-full">
                            <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] bg-white/10 border-white/20 shadow-2xl relative">
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-electric-lime rounded-full blur-2xl opacity-50 mix-blend-overlay"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/50">
                                            <img loading="lazy" width="64" height="64" src="https://i.pravatar.cc/150?img=11" alt="Client CEO" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Michael Carter</h4>
                                            <p className="text-purple-200">CEO, InnovateTech</p>
                                        </div>
                                    </div>
                                    <p className="text-2xl md:text-3xl font-medium italic leading-relaxed text-white">"The team at BYS didn't just understand our vision; they elevated it. Our conversion rate doubled within months of launch."</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 4. AGITATION / THE PROBLEM */}
            <div className="max-w-[1200px] mx-auto w-full px-6">
                <section className="relative">
                    <div className="absolute inset-0 bg-red-500/5 dark:bg-red-500/10 rounded-3xl blur-2xl"></div>
                    <div className="glass-panel p-8 md:p-12 rounded-3xl border-red-100 dark:border-red-900/30 relative">
                        <h3 className="text-2xl md:text-3xl font-black text-text-main dark:text-text-main-dark mb-4">Why 90% of Agencies Fail You</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-text-sub dark:text-text-sub-dark leading-relaxed font-medium mb-4">
                                    Most agencies sell you templates, vanity metrics, and empty promises. They celebrate "impressions" while your bottom line remains completely stagnant. Your website might look pretty, but underneath, it's a slow, unoptimized leak in your sales funnel.
                                </p>
                                <p className="text-text-main dark:text-white font-bold text-lg border-l-4 border-primary pl-4">
                                    A pretty website without traffic is a digital billboard in the desert. Traffic without conversion is just burning cash.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-red-100 dark:bg-red-900/40 p-1.5 rounded-full text-red-600 dark:text-red-400"><TrendingUp size={16} className="rotate-180" /></div>
                                    <div>
                                        <h4 className="font-bold text-text-main dark:text-white">Focusing on the Wrong KPIs</h4>
                                        <p className="text-sm text-text-sub dark:text-text-sub-dark">Reporting on likes and clicks instead of Cost Per Acquisition (CPA) and Revenue.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-red-100 dark:bg-red-900/40 p-1.5 rounded-full text-red-600 dark:text-red-400"><Server size={16} /></div>
                                    <div>
                                        <h4 className="font-bold text-text-main dark:text-white">Bloated Technical Debt</h4>
                                        <p className="text-sm text-text-sub dark:text-text-sub-dark">Using slow page builders that kill your SEO score and cause users to bounce instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 5. OUR CAPABILITIES / SERVICES */}
            <LazySection fallbackHeight="800px">
                <section>
                    <div className="container mx-auto px-6 max-w-7xl">
                        <ScrollReveal>
                            <div className="text-center mb-16 max-w-2xl mx-auto hidden lg:block">
                                <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Expertise</h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-text-main dark:text-text-main-dark mb-6 transition-colors">Solutions that Drive Growth</h3>
                                <p className="text-lg text-text-sub dark:text-text-sub-dark transition-colors">Comprehensive digital services tailored to elevate your brand and achieve measurable results.</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 cursor-pointer">
                            {services.map((service, index) => (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <Link to={service.link}>
                                        <div className="glass-panel p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group border border-white/60 dark:border-white/10 dark:bg-[#1a1a1a] dark:hover:bg-[#222] h-full flex flex-col justify-between">
                                            <div>
                                                <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-black/50 shadow-sm flex items-center justify-center mb-6 ${service.color} service-icon-wrap`}>
                                                    <service.icon size={30} strokeWidth={2.5} />
                                                </div>
                                                <h4 className="text-2xl font-bold text-text-main dark:text-white mb-3 transition-colors">{service.title}</h4>
                                                <p className="text-text-sub dark:text-text-sub-dark text-sm sm:text-base leading-relaxed transition-colors">{service.desc}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </LazySection>

            {/* 6. THE METHODOLOGY */}
            <div className="max-w-[1200px] mx-auto w-full px-6">
                <section className="bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 text-text-main dark:text-white rounded-[2rem] p-8 md:p-14 relative overflow-hidden shadow-2xl transition-colors">
                    <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="relative z-10">
                        <h3 className="text-xs font-bold text-primary dark:text-primary-light uppercase tracking-widest mb-2 transition-colors">How We Work</h3>
                        <h2 className="text-3xl md:text-5xl font-black mb-12">The 4-Phase Revenue Protocol</h2>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-white/10">
                            {[
                                { step: '01', title: 'Deep Discovery & Audit', desc: 'We dissect your current ecosystem, analyze competitor blind spots, and identify immediate revenue leaks.' },
                                { step: '02', title: 'Strategic Blueprint', desc: 'No guessing. We map out a mathematical roadmap detailing exact tech stacks, keyword targets, and ad spend allocation.' },
                                { step: '03', title: 'Flawless Execution', desc: 'Our engineering and creative teams deploy the assets—from high-converting landing pages to aggressive ad creatives.' },
                                { step: '04', title: 'Data-Driven Scaling', desc: 'Launch is just the beginning. We aggressively A/B test, optimize conversion rates, and pour fuel on what generates ROI.' },
                            ].map((item, i) => (
                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#111] bg-primary text-white font-black text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(104,54,244,0.5)] z-10 ml-0 md:ml-auto transition-colors">
                                        {item.step}
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel bg-white/50 border-gray-100 dark:bg-white/5 dark:border-white/10 p-6 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                                        <h4 className="text-xl font-bold mb-2 text-text-main dark:text-white transition-colors">{item.title}</h4>
                                        <p className="text-text-sub dark:text-white/60 text-sm transition-colors">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* 7. PERFORMANCE METRICS */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                    { number: '$50M+', label: 'Client Revenue Generated', icon: TrendingUp },
                    { number: '<0.4s', label: 'Average Page Load Time', icon: Zap },
                    { number: '300%', label: 'Average Campaign ROI', icon: LineChart },
                    { number: '99%', label: 'Client Retention Rate', icon: Users },
                ].map((stat, i) => (
                    <div key={i} className="glass-panel border-white/60 dark:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-floating hover:-translate-y-1 transition-all">
                        <stat.icon size={28} className="text-primary mb-4 opacity-80" />
                        <h4 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-2">{stat.number}</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-widest font-bold">{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* 8. RECENT WORK BENTO GRID */}
            <div className="max-w-[1200px] mx-auto w-full px-6">
                <LazySection fallbackHeight="800px">
                    <section className="overflow-hidden">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12 gap-6">
                                <div className="max-w-2xl">
                                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Portfolio</h2>
                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-text-main-dark transition-colors mb-4 tracking-tight">Featured Projects</h3>
                                    <p className="text-lg text-text-sub dark:text-text-sub-dark transition-colors">Explore our latest work blending strategic design with cutting-edge technology to drive revenue.</p>
                                </div>
                                <Link to="/portfolio" className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 hover:text-primary-dark dark:hover:bg-primary dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-glow-purple flex items-center gap-2 group bg-white/50 dark:bg-transparent backdrop-blur-sm">
                                    View All Work
                                    <ArrowForward className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-6 lg:h-[700px] w-full mt-6">
                            {/* 1. Focus Project (Big Left) */}
                            <ScrollReveal delay={0.1} className="lg:col-span-8 lg:row-span-2 h-[450px] sm:h-[550px] lg:h-full">
                                <Link to="/portfolio" className="relative block h-full w-full rounded-[2.5rem] overflow-hidden group border border-white/60 dark:border-white/10 shadow-lg dark:shadow-none hover:shadow-floating transition-all bg-gray-900">
                                    <img loading="lazy" alt={featuredWorks[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src={featuredWorks[0].img} />
                                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-700"></div>
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                                        <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs tracking-wider uppercase">{featuredWorks[0].category}</span>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col sm:flex-row justify-between items-end gap-6 sm:gap-0 z-10">
                                        <div className="max-w-xl">
                                            <h4 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{featuredWorks[0].title}</h4>
                                            <p className="text-gray-300 text-sm md:text-base lg:text-lg font-medium leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">{featuredWorks[0].desc}</p>
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg transition-all duration-500 delay-150 shrink-0">
                                            <ArrowForward />
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>

                            {/* 2. Secondary Project (Top Right) */}
                            <ScrollReveal delay={0.2} className="lg:col-span-4 lg:row-span-1 h-[350px] md:h-[400px] lg:h-full">
                                <Link to="/portfolio" className="relative block h-full w-full rounded-[2.5rem] overflow-hidden group border border-white/60 dark:border-white/10 shadow-md dark:shadow-none hover:shadow-floating transition-all bg-gray-900">
                                    <img loading="lazy" alt={featuredWorks[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" src={featuredWorks[1].img} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <div className="absolute top-6 right-6 z-10">
                                        <span className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white font-bold text-[10px] tracking-wider uppercase">{featuredWorks[1].category}</span>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 z-10">
                                        <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">{featuredWorks[1].title}</h4>
                                        <div className="flex items-center gap-2 text-primary-light font-bold text-sm opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                            View Project <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>

                            {/* 3. Tertiary Project (Bottom Right) */}
                            <ScrollReveal delay={0.3} className="lg:col-span-4 lg:row-span-1 h-[350px] md:h-[400px] lg:h-full">
                                <Link to="/portfolio" className="relative block h-full w-full rounded-[2.5rem] overflow-hidden group border border-white/60 dark:border-white/10 shadow-md dark:shadow-none hover:shadow-floating transition-all bg-gray-900">
                                    <img loading="lazy" alt={featuredWorks[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" src={featuredWorks[2].img} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <div className="absolute top-6 right-6 z-10">
                                        <span className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white font-bold text-[10px] tracking-wider uppercase">{featuredWorks[2].category}</span>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 z-10">
                                        <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">{featuredWorks[2].title}</h4>
                                        <div className="flex items-center gap-2 text-primary-light font-bold text-sm opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                            View Project <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        </div>
                    </section>
                </LazySection>
            </div>

            {/* ── HOW WE WORK — 6-Step Process using Magic Bento ── */}
            <section className="mt-4">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                            <span className="w-8 h-px bg-primary"></span>Our Process<span className="w-8 h-px bg-primary"></span>
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white transition-colors">
                            How We Build Your <span className="text-primary">Growth Machine</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <MagicBento
                    cards={[
                        { label: 'Step 01', title: 'Discovery & Brief', description: 'We deeply understand your business model, audience, competitors, and goals in a strategy call.', icon: '🎯' },
                        { label: 'Step 02', title: 'Strategy & Design', description: 'Wireframes, prototypes, and a detailed roadmap. You approve everything before code is written.', icon: '📐' },
                        { label: 'Step 03', title: 'Full-Stack Build', description: 'Pixel-perfect development and campaign setup—all done by our expert in-house team.', icon: '⚡' },
                        { label: 'Step 04', title: 'Launch & Deploy', description: 'Seamless deployment across all channels, ensuring technical perfection from day one.', icon: '🚀' },
                        { label: 'Step 05', title: 'Data Analytics', description: 'Monitor real-time analytics and user behavior to identify growth opportunities instantly.', icon: '📊' },
                        { label: 'Step 06', title: 'Continuous Scaling', description: 'Continuously iterate and scale campaigns to lower CPAs and maximize overall ROI.', icon: '📈' },
                    ]}
                />
            </section>

            {/* ── INDUSTRY TAGS — Breadth of Experience ── */}
            <section className="mt-4">
                <ScrollReveal>
                    <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-[#151520] dark:via-[#0e0e14] dark:to-[#131320] border border-purple-100 dark:border-white/5 text-center">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">Industries We've Served</span>
                        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-8">
                            From Startups to <span className="text-primary">Scale-Ups</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                            {[
                                'E-Commerce', 'SaaS', 'Real Estate', 'HealthTech', 'EdTech', 'Finance',
                                'Food & Restaurant', 'Fashion & Lifestyle', 'Travel & Hospitality', 'Media & Entertainment',
                                'Legal Services', 'Manufacturing', 'Automotive', 'Non-Profit', 'Government',
                                'Fitness & Wellness', 'B2B Services', 'Crypto & Web3'
                            ].map((tag, i) => (
                                <span key={i} className="px-4 py-2 rounded-full text-xs font-bold bg-white dark:bg-white/5 text-text-main dark:text-gray-300 border border-gray-100 dark:border-white/10 hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all cursor-default shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ── URGENCY STRIP ── */}
            <ScrollReveal>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/15">
                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
                        <span className="text-sm font-bold text-text-main dark:text-white">
                            🔥 Only <span className="text-primary">2 client spots</span> left for March 2026
                        </span>
                    </div>
                    <Link to="/contact" className="px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm flex items-center gap-2 group">
                        Claim Your Spot <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </ScrollReveal>

            {/* 9. BIG TESTIMONIAL */}
            <section className="glass-panel p-8 md:p-14 rounded-[2rem] border-white/60 dark:border-white/10 text-center relative overflow-hidden bg-white/40 dark:bg-black/40">
                <div className="text-6xl text-primary/20 font-serif absolute top-4 left-8 pointer-events-none">"</div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <p className="text-xl md:text-3xl font-bold text-text-main dark:text-white leading-relaxed mb-8 italic">
                        "BYS didn't just build us a website; they built our primary revenue engine. Their fusion of obsessive technical performance and cut-throat marketing strategy increased our qualified leads by 400% in exactly 90 days."
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden border-2 border-primary">
                            <img src="https://i.pravatar.cc/150?img=11" alt="Client CEO" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <h5 className="font-bold text-text-main dark:text-white text-lg">Sarah Jenkins</h5>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wider font-bold">CEO, NovaTech Solutions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FINAL CONTACT CTA */}
            <section className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 mb-8 bg-black border border-white/10 shadow-2xl text-center flex flex-col items-center">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute left-0 bottom-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-6 shadow-glow-purple border border-white/20 text-white">
                        <Rocket size={40} className="text-primary-light animate-pulse" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Stop Bleeding Revenue.</h3>
                    <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium">
                        Your competitors are already optimizing. Let's schedule a deep-dive audit of your current digital setup and map out exactly how we can scale your brand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="py-5 px-10 bg-primary text-white font-black text-lg rounded-2xl shadow-[0_0_30px_rgba(104,54,244,0.4)] hover:shadow-[0_0_50px_rgba(104,54,244,0.6)] hover:scale-[1.03] active:scale-95 hover:bg-primary-dark transition-all inline-flex items-center justify-center gap-2 group">
                            Book Strategic Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/portfolio" className="py-5 px-10 bg-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* Multi-Step Intake Overlay */}
            {
                isIntakeOpen && (
                    <MultiStepIntake onClose={() => setIsIntakeOpen(false)} />
                )
            }
        </main >
    );
}
