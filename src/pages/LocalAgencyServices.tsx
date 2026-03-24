import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {
    Zap, BarChart3, Target, ShieldCheck, Rocket, Users, TrendingUp, CheckCircle2,
    Search, LineChart, Cpu, Palette, Code, ArrowRight, MapPin, Phone, Star, Globe,
    Megaphone, ShoppingCart, Award, HeartHandshake
} from 'lucide-react';
import { ArrowForward } from '@mui/icons-material';
import MultiStepIntake from '../components/MultiStepIntake';
import LazySection from '../components/LazySection';
import LogoLoop from '../components/ReactBits/LogoLoop';
import MagicBento from '../components/ReactBits/MagicBento';

export default function LocalAgencyServices() {
    const [isIntakeOpen, setIsIntakeOpen] = useState(false);

    // ─── COUNT-UP HOOK ────────────────────────────────────
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
                    const duration = 1800; const steps = 60; const increment = value / steps;
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

    // ─── SCHEMA MARKUP FOR LOCAL BUSINESS ──────────────────
    const localBusinessSchema = [
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "BYS Marketing — Best Digital Marketing & Web Development Agency Near You",
            "image": "https://bys.marketing/landing/delhi-ncr-agency.png",
            "url": "https://bys.marketing/best-digital-marketing-web-development-agency-near-me",
            "telephone": "+918383894893",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "New Delhi",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110025",
                "addressCountry": "IN"
            },
            "geo": { "@type": "GeoCoordinates", "latitude": 28.6139, "longitude": 77.209 },
            "areaServed": [
                { "@type": "City", "name": "New Delhi" },
                { "@type": "City", "name": "Noida" },
                { "@type": "City", "name": "Gurgaon" },
                { "@type": "City", "name": "Faridabad" },
                { "@type": "City", "name": "Ghaziabad" }
            ],
            "priceRange": "₹₹",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127" },
            "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "19:00" },
            "sameAs": ["https://www.instagram.com/bys.marketing", "https://www.linkedin.com/company/bys-marketing"]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What makes BYS the best digital marketing agency near me?", "acceptedAnswer": { "@type": "Answer", "text": "BYS Marketing combines data-driven performance marketing with cutting-edge web development. We've generated over $50M in client revenue across Delhi NCR, Noida, and Gurgaon with a 98% client retention rate." } },
                { "@type": "Question", "name": "How much does web development cost in Delhi NCR?", "acceptedAnswer": { "@type": "Answer", "text": "Our web development packages start at ₹15,000/month for startups and scale based on complexity. We offer transparent pricing with no hidden fees." } },
                { "@type": "Question", "name": "Do you serve clients in Noida, Gurgaon, and Faridabad?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! BYS Marketing proudly serves businesses across the entire Delhi NCR region including Noida, Greater Noida, Gurgaon, Faridabad, and Ghaziabad." } },
                { "@type": "Question", "name": "What digital marketing services do you offer?", "acceptedAnswer": { "@type": "Answer", "text": "We offer SEO, Google Ads (PPC), Social Media Marketing, Content Strategy, Email Marketing, Conversion Rate Optimization (CRO), and complete web development solutions." } }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Best Digital Marketing & Web Development Agency Near Me", "item": "https://bys.marketing/best-digital-marketing-web-development-agency-near-me" }
            ]
        }
    ];

    const services = [
        { icon: Search, title: 'SEO That Actually Ranks', desc: 'Dominate Google search results in Delhi NCR with our intent-driven, mathematical SEO strategies that deliver first-page rankings.', color: 'text-green-500', link: '/services/seo' },
        { icon: Target, title: 'Google & Facebook Ads', desc: 'Hyper-targeted PPC campaigns designed for maximum ROAS. We manage budgets from ₹10K to ₹10L/month across Delhi, Noida, and Gurgaon.', color: 'text-orange-500', link: '/services/digital-marketing' },
        { icon: Code, title: 'Custom Web Development', desc: 'Lightning-fast, conversion-optimized websites built with React, Next.js, and modern architectures that score 99+ on Lighthouse.', color: 'text-blue-500', link: '/services/web-development' },
        { icon: Palette, title: 'UI/UX Design', desc: 'Psychology-driven interface design that removes friction, elevates your brand perception, and accelerates user conversion journeys.', color: 'text-purple-500', link: '/services/design' },
        { icon: Megaphone, title: 'Social Media Marketing', desc: 'Build a loyal following and drive engagement across Instagram, LinkedIn, YouTube, and Facebook with creative, data-backed campaigns.', color: 'text-pink-500', link: '/services/social' },
        { icon: ShoppingCart, title: 'E-Commerce Solutions', desc: 'End-to-end e-commerce development — from Shopify and WooCommerce stores to custom platforms — optimized for sales in the Delhi NCR market.', color: 'text-indigo-500', link: '/services/web-development' },
        { icon: BarChart3, title: 'Growth Consulting', desc: 'Fractional CMO services and strategic roadmapping to help startups and SMBs in Noida, Gurgaon, and Delhi scale their revenue predictably.', color: 'text-cyan-500', link: '/services/consultation' },
        { icon: Globe, title: 'Content Strategy & SEO Copywriting', desc: 'High-quality, keyword-rich content that attracts organic traffic, builds thought leadership, and converts visitors into paying customers.', color: 'text-amber-500', link: '/services/content' },
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
        { src: 'https://cdn.simpleicons.org/supabase/3ECF8E', alt: 'Supabase' },
    ];

    const localAreas = ['Delhi', 'New Delhi', 'Noida', 'Greater Noida', 'Gurgaon (Gurugram)', 'Faridabad', 'Ghaziabad', 'Dwarka', 'Rohini', 'Lajpat Nagar', 'Saket', 'Connaught Place', 'Nehru Place', 'Okhla', 'Karol Bagh'];

    return (
        <main className="flex flex-col gap-16 md:gap-24 pt-4 pb-32 mx-auto w-full">
            <SEOHead
                title="Best Digital Marketing & Web Development Agency Near You — Delhi, Noida, Gurgaon"
                description="Looking for the best digital marketing agency near you? BYS Marketing is a top-rated web development and performance marketing agency in Delhi NCR, Noida, and Gurgaon. Get a free consultation today."
                url="https://bys.marketing/best-digital-marketing-web-development-agency-near-me"
                image="https://bys.marketing/landing/delhi-ncr-agency.png"
                keywords="best digital marketing agency near me, web development agency near you, digital marketing agency Delhi NCR, best web development company Noida, hire digital marketing agency Gurgaon, affordable web development services Delhi, performance marketing agency near me, ecommerce website development company Delhi, SEO agency Noida, top digital marketing company Gurgaon, b2b lead generation agency Delhi NCR"
                schema={localBusinessSchema}
            />

            {/* ═══════════════════ 1. HERO SECTION ═══════════════════ */}
            <section className="relative w-full overflow-hidden text-center">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background dark:from-primary/20 dark:via-black dark:to-black"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" style={{ transform: 'translate3d(-50%, -50%, 0)', willChange: 'transform' }}></div>

                <div className="relative z-20 flex flex-col items-center justify-center min-h-[75vh] sm:min-h-[85vh] h-full px-4 text-center w-full">
                    <ScrollReveal direction="down" delay={0.1}>
                        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 dark:bg-white/5 backdrop-blur-md border border-primary/20 dark:border-white/10 mb-6 sm:mb-10 shadow-[0_0_15px_rgba(104,54,244,0.15)]">
                            <MapPin size={16} className="text-primary" />
                            <span className="text-sm font-bold text-text-main dark:text-white tracking-widest uppercase">Serving Delhi NCR · Noida · Gurgaon</span>
                        </div>
                    </ScrollReveal>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black text-text-main dark:text-white mb-6 sm:mb-8 leading-[1.05] tracking-tighter dark:text-glow max-w-6xl mx-auto">
                        <span className="block mb-2 sm:mb-4">The Best Digital Marketing</span>
                        <span className="block mb-2 sm:mb-4">& Web Development Agency</span>
                        <span className="text-primary dark:text-primary-light">Near You.</span>
                    </h1>

                    <ScrollReveal direction="up" delay={0.2}>
                        <p className="inline-block text-lg sm:text-xl md:text-2xl text-text-main font-bold dark:text-white mb-10 sm:mb-14 max-w-4xl mx-auto leading-relaxed px-8 py-5 rounded-3xl bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl">
                            Stop searching for the "<strong>best digital marketing agency near me</strong>." You've found us. BYS Marketing delivers data-driven SEO, high-ROI ad campaigns, and stunning web development across <strong>Delhi, Noida, and Gurgaon</strong>.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
                            <button onClick={() => setIsIntakeOpen(true)} className="w-full sm:w-auto px-7 py-4 sm:px-10 sm:py-5 rounded-full bg-primary text-white font-black text-base sm:text-lg md:text-xl hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(104,54,244,0.4)] hover:shadow-[0_0_40px_rgba(104,54,244,0.6)] flex items-center justify-center gap-3 group">
                                Get a Free Consultation
                                <ArrowForward className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <a href="tel:+918383894893" className="w-full sm:w-auto px-7 py-4 sm:px-10 sm:py-5 rounded-full border-2 border-primary/20 dark:border-white/20 text-primary dark:text-white font-bold text-base sm:text-lg md:text-xl hover:bg-primary/5 dark:hover:bg-white/5 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 bg-white/50 dark:bg-white/5">
                                <Phone size={20} /> Call Us Now
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══════════════════ 2. TRUST SIGNALS ═══════════════════ */}
            <section className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-500 px-6 -mt-10 sm:-mt-16">
                <p className="text-xs font-bold text-text-sub dark:text-text-sub-dark uppercase tracking-widest mb-6 text-center">Trusted by innovative disruptors across Delhi NCR</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale dark:grayscale-0 dark:brightness-100 dark:opacity-80">
                    <div className="flex items-center gap-2 font-black text-xl text-text-main dark:text-white"><Zap size={24} /> NovaTech</div>
                    <div className="flex items-center gap-2 font-serif italic font-bold text-2xl text-text-main dark:text-white">Luxe&Co.</div>
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-text-main dark:text-white"><Cpu size={28} /> SYNTHESIS</div>
                    <div className="flex items-center gap-2 font-black text-2xl lowercase text-text-main dark:text-white"><Star size={20} className="text-primary" /> aureus</div>
                </div>
            </section>

            {/* ═══════════════════ 3. ANIMATED STATS ═══════════════════ */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <div className="glass-panel rounded-3xl px-8 py-10 border border-white/60 dark:border-white/10 dark:bg-[#0f0f0f]/60 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <CountUpItem value={150} suffix="+" label="Projects Completed" icon="🚀" />
                    <CountUpItem value={8} suffix="+" label="Years of Experience" icon="📅" />
                    <CountUpItem value={12} suffix="+" label="Industries Served" icon="🌐" />
                    <CountUpItem value={98} suffix="%" label="Client Retention" icon="🤝" />
                </div>
            </section>

            {/* ═══════════════════ 4. WHY YOU NEED A DIGITAL MARKETING AGENCY (SEO content block) ═══════════════════ */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Why You Need Us</span>
                            <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mb-6 leading-tight">
                                Why Every Business in Delhi NCR Needs a <span className="text-primary">Performance-Driven Digital Marketing Agency</span>
                            </h2>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed mb-4">
                                The digital landscape in Delhi, Noida, and Gurgaon is fiercely competitive. Whether you're a startup looking for your first customers or an established brand aiming to dominate your niche, having the <strong>best web development agency near you</strong> is no longer optional — it's survival.
                            </p>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed mb-4">
                                At BYS Marketing, we don't just build websites. We engineer complete digital growth ecosystems — from high-converting landing pages and SEO-optimized content to precision-targeted Google Ads and Facebook campaigns that deliver measurable ROI.
                            </p>
                            <p className="text-text-main dark:text-white font-bold text-lg border-l-4 border-primary pl-4">
                                A beautiful website without traffic is a billboard in the desert. Traffic without conversion is burning cash. We fix both.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden border border-white/60 dark:border-white/10 shadow-lg">
                            <img loading="lazy" src="/landing/delhi-ncr-agency.png" alt="BYS Marketing Office — Best Digital Marketing Agency in Delhi NCR" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ═══════════════════ 5. TECH STACK LOOP ═══════════════════ */}
            <LazySection fallbackHeight="300px">
                <section className="w-full relative z-20 overflow-hidden bg-background dark:bg-black/60 py-12 flex flex-col items-center -mt-10 sm:-mt-16">
                    <h2 className="text-lg md:text-xl font-black text-text-main dark:text-white uppercase tracking-[0.2em] mb-10 text-center">
                        Technologies We Master
                    </h2>
                    <div className="w-full">
                        <LogoLoop logos={logoLoopItems} speed={50} logoHeight={40} gap={80} fadeOut={true} fadeOutColor="rgba(var(--background-rgb), 1)" />
                    </div>
                </section>
            </LazySection>

            {/* ═══════════════════ 6. ALL SERVICES ═══════════════════ */}
            <LazySection fallbackHeight="800px">
                <section>
                    <div className="container mx-auto px-6 max-w-7xl">
                        <ScrollReveal>
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Full-Stack Services</h2>
                                <h3 className="text-3xl md:text-5xl font-bold text-text-main dark:text-text-main-dark mb-6">
                                    Comprehensive Digital Marketing & Web Development Agency Services Near You
                                </h3>
                                <p className="text-lg text-text-sub dark:text-text-sub-dark">
                                    From SEO and paid advertising to custom web development and e-commerce solutions — everything your business in Delhi NCR needs to grow, under one roof.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
                            {services.map((service, index) => (
                                <ScrollReveal key={index} delay={index * 0.08}>
                                    <Link to={service.link}>
                                        <div className="glass-panel p-7 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 group border border-white/60 dark:border-white/10 dark:bg-[#1a1a1a] dark:hover:bg-[#222] h-full flex flex-col justify-between">
                                            <div>
                                                <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-black/50 shadow-sm flex items-center justify-center mb-5 ${service.color} service-icon-wrap`}>
                                                    <service.icon size={28} strokeWidth={2.5} />
                                                </div>
                                                <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">{service.title}</h4>
                                                <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed">{service.desc}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </LazySection>

            {/* ═══════════════════ 7. WEB DEVELOPMENT DEEP-DIVE (SEO long-form) ═══════════════════ */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="rounded-3xl overflow-hidden border border-white/60 dark:border-white/10 shadow-lg order-2 md:order-1">
                            <img loading="lazy" src="/landing/web-development.png" alt="Custom Web Development Services — Best Web Development Agency Near You in Delhi NCR" className="w-full h-full object-cover" />
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.2em] mb-3 block">Web Development</span>
                            <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-6 leading-tight">
                                The Best <span className="text-blue-500">Web Development Agency Near You</span> — Custom, Fast, Conversion-Focused
                            </h2>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed mb-4">
                                Your website is your most valuable sales employee — it works 24/7, never takes a break, and is the first impression for every potential customer. As the <strong>best web development company in Noida, Delhi, and Gurgaon</strong>, we build websites that don't just look premium — they perform like growth machines.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {['Custom React & Next.js websites scoring 99+ on Google PageSpeed', 'E-commerce stores (Shopify, WooCommerce, Custom) optimized for Indian markets', 'Progressive Web Apps (PWA) for mobile-first audiences in Delhi NCR', 'Landing pages designed for maximum ad conversion rates', 'Full-stack web applications with secure backend architectures'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-main dark:text-white">
                                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/services/web-development" className="inline-flex items-center gap-2 text-blue-500 font-bold hover:underline group">
                                Explore Web Development Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ═══════════════════ 8. DIGITAL MARKETING DEEP-DIVE (SEO long-form) ═══════════════════ */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <span className="text-xs font-black text-green-500 uppercase tracking-[0.2em] mb-3 block">Digital Marketing</span>
                            <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-6 leading-tight">
                                Hire the Best <span className="text-green-500">Digital Marketing Agency in Delhi NCR</span> for Guaranteed ROI
                            </h2>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed mb-4">
                                Are you tired of agencies that celebrate "impressions" while your revenue stays flat? As a leading <strong>performance marketing agency in Delhi</strong>, we measure success by only one metric: your bottom line. Every rupee you invest with us is tracked, optimized, and multiplied.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {['SEO strategies that rank your business #1 on Google for Delhi NCR searches', 'Google Ads (PPC) campaigns with optimized Cost-Per-Acquisition', 'Facebook & Instagram advertising with precision audience targeting', 'B2B lead generation funnels for service-based businesses in Noida & Gurgaon', 'Content marketing and SEO copywriting that drives organic traffic'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-main dark:text-white">
                                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/services/digital-marketing" className="inline-flex items-center gap-2 text-green-500 font-bold hover:underline group">
                                Explore Digital Marketing Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="rounded-3xl overflow-hidden border border-white/60 dark:border-white/10 shadow-lg">
                            <img loading="lazy" src="/landing/digital-marketing.png" alt="Digital Marketing Services — Top Performance Marketing Agency in Delhi NCR, Noida, Gurgaon" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ═══════════════════ 9. WHY CHOOSE US (3 columns) ═══════════════════ */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <div className="text-center mb-10">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Why Choose BYS Marketing</h3>
                    <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-text-main-dark">The Best Agency Near You. <span className="text-primary">Here's Why.</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: Award, title: 'Proven Track Record', desc: "150+ projects delivered, $50M+ in client revenue generated, and a 98% client retention rate across Delhi NCR. We don't just promise results — we prove them.", stat: '400%', statLabel: 'Avg Lead Increase', color: 'green' },
                        { icon: ShieldCheck, title: 'Full-Service Under One Roof', desc: "No more juggling between freelancers and vendors. Web development, digital marketing, SEO, ads, design, content, and more — all handled by our expert in-house team.", stat: '10+', statLabel: 'Integrated Services', color: 'purple' },
                        { icon: HeartHandshake, title: 'Local Expertise, Global Standards', desc: "Based in Delhi, we understand the local market dynamics of Noida, Gurgaon, and the entire NCR. But our development and marketing standards match the best agencies globally.", stat: '24/7', statLabel: 'Support Access', color: 'blue' },
                    ].map((item, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="glass-panel rounded-3xl p-8 border border-white/60 dark:border-white/10 bg-white/30 dark:bg-black/20 hover:shadow-floating hover:-translate-y-1 transition-all group h-full">
                                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 dark:bg-${item.color}-900/30 flex items-center justify-center mb-5 text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                                    <item.icon size={28} strokeWidth={2.5} />
                                </div>
                                <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">{item.title}</h4>
                                <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">{item.desc}</p>
                                <div className="mt-5 pt-5 border-t border-gray-100 dark:border-white/10">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-black text-primary">{item.stat}</span>
                                        <span className="text-xs text-text-sub dark:text-text-sub-dark uppercase font-bold">{item.statLabel}</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ═══════════════════ 10. FEATURED PORTFOLIO ═══════════════════ */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Our Work Speaks</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mb-4">
                            Websites & Campaigns We've Built for Brands <span className="text-primary">Like Yours</span>
                        </h2>
                        <p className="text-text-sub dark:text-text-sub-dark max-w-2xl mx-auto">Real projects. Real results. See how we've helped businesses across Delhi, Noida, and Gurgaon transform their digital presence.</p>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Mashup Minati Pro', category: 'Entertainment', img: '/portfolio/mashupminati.png', desc: 'High-energy event platform built for massive scale.' },
                        { title: 'TM Production', category: 'Media', img: '/portfolio/tmproduction.png', desc: 'Premier media house with cinematography portfolio.' },
                        { title: 'Design Furniture', category: 'Interior Design', img: '/portfolio/df.png', desc: 'Luxury digital showroom for elite interior projects.' },
                    ].map((work, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <Link to="/portfolio" className="group block rounded-3xl overflow-hidden border border-white/60 dark:border-white/10 shadow-md hover:shadow-floating hover:-translate-y-1 transition-all h-[350px] relative">
                                <img loading="lazy" src={work.img} alt={`${work.title} — Portfolio by Best Web Development Agency Delhi NCR`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] tracking-wider uppercase">{work.category}</div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h4 className="text-2xl font-bold text-white mb-1">{work.title}</h4>
                                    <p className="text-gray-300 text-sm">{work.desc}</p>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg group">
                        View Full Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* ═══════════════════ 11. HOW WE WORK (Bento) ═══════════════════ */}
            <section className="mt-4">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                            <span className="w-8 h-px bg-primary"></span>Our Process<span className="w-8 h-px bg-primary"></span>
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">
                            How We Build Your <span className="text-primary">Growth Machine</span>
                        </h2>
                    </div>
                </ScrollReveal>
                <MagicBento cards={[
                    { label: 'Step 01', title: 'Discovery & Audit', description: 'We deeply analyze your business, competitors, and market in Delhi NCR to find the fastest path to revenue.', icon: '🎯' },
                    { label: 'Step 02', title: 'Strategy & Design', description: 'Custom wireframes, keyword mapping, and a detailed campaign roadmap — you approve everything first.', icon: '📐' },
                    { label: 'Step 03', title: 'Full-Stack Build', description: 'Pixel-perfect development and campaign setup by our expert in-house team in Delhi.', icon: '⚡' },
                    { label: 'Step 04', title: 'Launch & Deploy', description: 'Seamless deployment across all digital channels for businesses in Noida, Gurgaon, and Delhi.', icon: '🚀' },
                    { label: 'Step 05', title: 'Data Analytics', description: 'Real-time dashboards tracking every click, conversion, and rupee spent for full transparency.', icon: '📊' },
                    { label: 'Step 06', title: 'Continuous Scaling', description: 'We aggressively A/B test, optimize CPA, and scale what works to maximize your ROI.', icon: '📈' },
                ]} />
            </section>

            {/* ═══════════════════ 12. LOCAL AREAS WE SERVE ═══════════════════ */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <ScrollReveal>
                    <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-[#151520] dark:via-[#0e0e14] dark:to-[#131320] border border-purple-100 dark:border-white/5 text-center">
                        <MapPin size={28} className="text-primary mx-auto mb-3" />
                        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">Areas We Serve</span>
                        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">
                            Your Trusted Digital Marketing & Web Development Agency Across <span className="text-primary">Delhi NCR</span>
                        </h2>
                        <p className="text-text-sub dark:text-text-sub-dark max-w-2xl mx-auto mb-8">
                            Whether you're in the heart of Connaught Place or the tech hubs of Noida Sector 62, BYS Marketing is the <strong>best digital marketing agency near you</strong>. We deliver full-service digital solutions across the entire National Capital Region.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {localAreas.map((area, i) => (
                                <span key={i} className="px-4 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-white/5 text-text-main dark:text-gray-300 border border-gray-100 dark:border-white/10 hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all cursor-default shadow-sm flex items-center gap-1.5">
                                    <MapPin size={12} className="text-primary" />
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ═══════════════════ 13. TESTIMONIAL ═══════════════════ */}
            <section className="glass-panel p-8 md:p-14 rounded-[2rem] border-white/60 dark:border-white/10 text-center relative overflow-hidden bg-white/40 dark:bg-black/40">
                <div className="text-6xl text-primary/20 font-serif absolute top-4 left-8 pointer-events-none">"</div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <p className="text-xl md:text-3xl font-bold text-text-main dark:text-white leading-relaxed mb-8 italic">
                        "BYS didn't just build us a website; they built our primary revenue engine. Their fusion of obsessive technical performance and cut-throat marketing strategy increased our qualified leads by 400% in exactly 90 days. They're the best digital marketing agency near us — bar none."
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden border-2 border-primary">
                            <img src="https://i.pravatar.cc/150?img=11" alt="Client from Delhi NCR" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <h5 className="font-bold text-text-main dark:text-white text-lg">Sarah Jenkins</h5>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wider font-bold">CEO, NovaTech Solutions — Delhi</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ 14. PERFORMANCE METRICS ═══════════════════ */}
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

            {/* ═══════════════════ 15. FAQ SECTION (Critical for long-tail SEO) ═══════════════════ */}
            <section className="px-6 max-w-[1200px] mx-auto w-full">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Frequently Asked Questions</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mb-4">
                            Questions About Hiring the <span className="text-primary">Best Agency Near You?</span>
                        </h2>
                    </div>
                </ScrollReveal>
                <div className="space-y-4">
                    {[
                        { q: 'What makes BYS the best digital marketing agency near me in Delhi NCR?', a: 'BYS Marketing stands out because we combine data-driven performance marketing with cutting-edge custom web development. Unlike template-based agencies, we build everything from scratch using React, Next.js, and modern architectures. With 150+ successful projects, $50M+ in generated client revenue, and a 98% retention rate, our results speak for themselves. We serve Delhi, Noida, Gurgaon, Faridabad, and the entire NCR region.' },
                        { q: 'How much does web development cost in Delhi, Noida, or Gurgaon?', a: 'Our web development packages start at ₹15,000/month for startups needing a basic 5-page website with SEO setup. Our Growth plan at ₹35,000/month includes custom website development, SEO optimization, and ad campaign management. Enterprise solutions are custom-quoted based on complexity. All plans include transparent pricing with zero hidden fees.' },
                        { q: 'Do you serve clients outside Delhi — in Noida, Gurgaon, and Faridabad?', a: 'Absolutely! BYS Marketing proudly serves businesses across the entire Delhi NCR region including Noida, Greater Noida, Gurgaon (Gurugram), Faridabad, Ghaziabad, Dwarka, Rohini, and beyond. Our local market expertise allows us to create hyper-targeted campaigns that resonate with audiences in your specific area.' },
                        { q: 'What digital marketing services do you offer as an agency?', a: 'We offer a comprehensive suite: Search Engine Optimization (SEO), Google Ads (PPC), Facebook & Instagram Advertising, Social Media Marketing, Content Strategy & Copywriting, Email Marketing, Conversion Rate Optimization (CRO), UI/UX Design, Custom Web Development, E-Commerce Solutions, and Growth Consulting. Everything a business needs to dominate online.' },
                        { q: 'How quickly can I see results from your SEO and marketing campaigns?', a: 'SEO is a long-term investment — most businesses begin seeing significant improvements in organic rankings within 3-6 months. However, our paid advertising campaigns (Google Ads, Facebook Ads) can start generating qualified leads within the first week of launch. We provide weekly reports so you can track every rupee and every result transparently.' },
                        { q: 'Why should I hire a local agency in Delhi NCR instead of a remote one?', a: 'A local digital marketing agency near you understands the Delhi NCR market dynamics — local consumer behavior, regional competition, and area-specific search trends. Face-to-face strategy sessions, faster communication, and accountability are invaluable. BYS Marketing combines local expertise with global development standards to give you the best of both worlds.' },
                    ].map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.05}>
                            <details className="glass-panel rounded-2xl border border-white/60 dark:border-white/10 p-6 group open:shadow-floating transition-all">
                                <summary className="font-bold text-lg text-text-main dark:text-white cursor-pointer flex items-center justify-between list-none">
                                    {faq.q}
                                    <ArrowRight size={18} className="text-primary shrink-0 group-open:rotate-90 transition-transform" />
                                </summary>
                                <p className="text-text-sub dark:text-text-sub-dark leading-relaxed mt-4 text-sm">{faq.a}</p>
                            </details>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ═══════════════════ 16. INDUSTRIES SERVED ═══════════════════ */}
            <section className="mt-4">
                <ScrollReveal>
                    <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-[#151520] dark:via-[#0e0e14] dark:to-[#131320] border border-purple-100 dark:border-white/5 text-center">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">Industries We've Served</span>
                        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-8">
                            From Startups to <span className="text-primary">Scale-Ups</span> Across Delhi NCR
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                            {['E-Commerce', 'SaaS', 'Real Estate', 'HealthTech', 'EdTech', 'Finance', 'Food & Restaurant', 'Fashion & Lifestyle', 'Travel & Hospitality', 'Media & Entertainment', 'Legal Services', 'Manufacturing', 'Automotive', 'Non-Profit', 'Government', 'Fitness & Wellness', 'B2B Services', 'Crypto & Web3'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 rounded-full text-xs font-bold bg-white dark:bg-white/5 text-text-main dark:text-gray-300 border border-gray-100 dark:border-white/10 hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all cursor-default shadow-sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ═══════════════════ 17. URGENCY STRIP ═══════════════════ */}
            <ScrollReveal>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/15">
                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
                        <span className="text-sm font-bold text-text-main dark:text-white">
                            🔥 Only <span className="text-primary">2 client spots</span> remaining for April 2026 — Delhi NCR businesses get priority
                        </span>
                    </div>
                    <button onClick={() => setIsIntakeOpen(true)} className="px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm flex items-center gap-2 group">
                        Claim Your Spot <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </ScrollReveal>

            {/* ═══════════════════ 18. FINAL CTA ═══════════════════ */}
            <section className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 mb-8 bg-black border border-white/10 shadow-2xl text-center flex flex-col items-center">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute left-0 bottom-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-6 shadow-glow-purple border border-white/20 text-white">
                        <Rocket size={40} className="text-primary-light animate-pulse" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ready to Dominate Your Market?</h2>
                    <p className="text-gray-300 text-lg md:text-xl mb-4 max-w-2xl mx-auto font-medium">
                        Stop searching for the "best digital marketing agency near me" — you've found us. Let's schedule a free deep-dive audit of your current digital setup and map out exactly how we can 10x your growth.
                    </p>
                    <p className="text-gray-400 text-sm mb-10 max-w-xl mx-auto">
                        Serving Delhi · Noida · Gurgaon · Faridabad · Ghaziabad · Greater Noida and the entire NCR region
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setIsIntakeOpen(true)} className="py-5 px-10 bg-primary text-white font-black text-lg rounded-2xl shadow-[0_0_30px_rgba(104,54,244,0.4)] hover:shadow-[0_0_50px_rgba(104,54,244,0.6)] hover:scale-[1.03] active:scale-95 hover:bg-primary-dark transition-all inline-flex items-center justify-center gap-2 group">
                            Get Your Free Strategy Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a href="tel:+918383894893" className="py-5 px-10 bg-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 inline-flex items-center justify-center gap-2">
                            <Phone size={20} /> Call +91 83838 94893
                        </a>
                    </div>
                </div>
            </section>

            {/* Multi-Step Intake */}
            {isIntakeOpen && <MultiStepIntake onClose={() => setIsIntakeOpen(false)} />}
        </main>
    );
}
