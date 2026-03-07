import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Rocket, Heart, Shield, Users, Handshake, ArrowRight, CheckCircle2,
    MessageCircle, Lightbulb, TrendingUp, HardDrive, Scale, BadgeCheck,
    PhoneCall, X, Sparkles, Coffee, Network
} from 'lucide-react';
import { ArrowForward } from '@mui/icons-material';
import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';

export default function StartupSupport() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "BYS Marketing", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "For Startups", "item": "https://bys.marketing/startups" }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BYS Marketing",
            "image": "https://bys.marketing/logo.png",
            "url": "https://bys.marketing",
            "telephone": "+918802803681",
            "priceRange": "$$",
            "address": { "@type": "PostalAddress", "streetAddress": "A-115, Harkesh Nagar, Okhla", "addressLocality": "New Delhi", "addressRegion": "Delhi", "postalCode": "110020", "addressCountry": "IN" }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What if I can't afford any marketing services right now?", "acceptedAnswer": { "@type": "Answer", "text": "Then we'll tell you exactly that. We'll give you a free, honest roadmap of what you can do yourself for zero cost, and when you're ready, we'll be here. We don't pressure. Period." } },
                { "@type": "Question", "name": "Will you be honest if my business idea needs work?", "acceptedAnswer": { "@type": "Answer", "text": "100%. We would rather give you a hard truth that saves you lakhs than a comfortable lie that bankrupts you. That's the difference between a friend and a vendor." } },
                { "@type": "Question", "name": "Do you take equity instead of payment?", "acceptedAnswer": { "@type": "Answer", "text": "We don't currently operate on an equity model. However, for truly exceptional ideas, we're open to exploring hybrid models — reduced fees in exchange for a small advisory role. Let's talk." } },
                { "@type": "Question", "name": "How is BYS different from other agencies for startups?", "acceptedAnswer": { "@type": "Answer", "text": "Most agencies upsell you services you don't need. We actively tell you what to SKIP. Our goal is your survival first, then growth. We connect you to our network for hardware, legal, and more — far beyond just marketing." } }
            ]
        }
    ];

    const promises = [
        { icon: MessageCircle, title: "Brutally Honest Advice", desc: "We will never sugarcoat. If your landing page is bad, we'll say it. If you don't need paid ads yet, we won't sell them to you. Your survival is more important than our invoice.", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
        { icon: Shield, title: "Startup-Friendly Pricing", desc: "We'll structure a plan that fits YOUR budget — not ours. Long-term contracts with deep discounts, milestone-based billing, and zero hidden fees. We've been there. We get it.", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
        { icon: Network, title: "Our Entire Network, Your Resource", desc: "Need IT hardware? We know suppliers. Need legal advice? We'll connect you. Need a photographer? We've got one. We go far beyond marketing to help your business survive.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
        { icon: Handshake, title: "A Friend, Not a Vendor", desc: "We don't send cold invoices. We send honest WhatsApp messages at midnight when we find a way to save you money. Treat us like your co-founder who happens to run a marketing agency.", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
        { icon: Coffee, title: "Long-Term Partnership", desc: "When your startup stabilizes and grows, we grow with you. We start at deeply discounted rates and transition to regular pricing only when your revenue justifies it. Your success funds ours.", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
    ];

    const phases = [
        { phase: "Phase 1", title: "Idea Stage", subtitle: "You have an idea. That's it.", items: ["Free 1-hour consultation to validate your concept", "Honest assessment: is this idea viable?", "Advice on what digital presence you ACTUALLY need (hint: it's less than you think)", "Basic brand identity guidance"], color: "from-blue-500 to-cyan-400", icon: Lightbulb },
        { phase: "Phase 2", title: "Launch Stage", subtitle: "You're building. Budget is tight.", items: ["Lean, high-converting website (not a bloated template)", "Basic SEO foundation so Google knows you exist", "Social media setup — only the platforms that matter for YOUR industry", "Google Business Profile optimization"], color: "from-purple-500 to-pink-400", icon: Rocket },
        { phase: "Phase 3", title: "Survival Stage", subtitle: "You have customers. You need more.", items: ["Targeted ad campaigns with small, optimized budgets", "Content strategy that positions you as an authority", "Email automation to nurture leads you're already getting", "Monthly performance reviews with actionable insights"], color: "from-green-500 to-emerald-400", icon: TrendingUp },
        { phase: "Phase 4", title: "Scale Stage", subtitle: "Revenue is stable. Time to dominate.", items: ["Full-scale SEO & content dominance strategy", "Multi-channel paid acquisition (Google, Meta, LinkedIn)", "Advanced conversion rate optimization", "Transition to regular agency pricing — because now you can afford it"], color: "from-orange-500 to-amber-400", icon: BadgeCheck },
    ];

    const agenciesSell = [
        "₹5 lakh website with 50 pages you'll never update",
        "Premium social media management across 6 platforms",
        "₹1 lakh/month Google Ads budget from Day 1",
        "Fancy brand book with 40 pages of guidelines",
        "Complete CRM + automation suite",
    ];

    const youActuallyNeed = [
        "A clean, 3-5 page website that loads in under 2 seconds",
        "ONE social media platform done exceptionally well",
        "Google Business Profile + basic local SEO (free!)",
        "A simple logo and consistent color palette",
        "A WhatsApp Business number with quick replies",
    ];

    const faqs = [
        { q: "What if I can't afford any marketing services right now?", a: "Then we'll tell you exactly that. We'll give you a free, honest roadmap of what you can do yourself for zero cost — DIY guides, free tools, and a priority list. When you're ready, we'll be here. We don't chase. We don't guilt-trip. We don't pressure. Period." },
        { q: "Will you be honest if my business idea needs work?", a: "100%. We would rather give you a hard truth that saves you ₹10 lakhs than a comfortable lie that bankrupts you. We've told founders 'you're not ready for ads yet' and 'your product-market fit needs more work.' That's the difference between a friend and a vendor." },
        { q: "Do you take equity instead of payment?", a: "We don't currently operate on a pure equity model. However, for truly exceptional ideas with strong founding teams, we're open to exploring hybrid models — reduced fees in exchange for a small advisory role. Let's have an honest conversation about it." },
        { q: "How is BYS different from other agencies for startups?", a: "Most agencies upsell you services you don't need because their revenue depends on it. We actively tell you what to SKIP. Our goal is your survival first, then growth. And we go beyond marketing — we connect you to our network for IT hardware, legal support, office resources, and more." },
        { q: "What if I have a great idea but zero digital knowledge?", a: "That's exactly who we built this for. We'll walk you through everything — from registering a domain to setting up analytics — in language you understand, not jargon. We'll tell you which things are critical for day one and which can wait 6 months." },
        { q: "Can you help me with things outside of marketing?", a: "Yes. We run a multi-vertical business and have deep connections in IT hardware, event production, media creation, and cybersecurity. If your startup needs something and we know someone who can help, we will make that introduction at no cost to you." },
        { q: "How can BYS charge so much less than other agencies?", a: "Simple: we don't burn money on things that don't benefit you. BYS operates as a fully remote-first agency — our founder works from a professional home studio, and our team works remotely across India. No fancy office rent, no reception desk, no conference room no one uses. Every rupee we save on overhead gets passed on to you as lower pricing. Other agencies bake their ₹2 lakh/month office rent into your invoice. We don't." },
    ];

    return (
        <div className="bg-background-light dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center selection:bg-primary selection:text-white pb-32 transition-colors">
            <SEOHead
                title="For Startups — Honest Support, Startup-Friendly Prices | BYS Marketing"
                description="We don't sell. We survive together. BYS Marketing provides brutally honest digital marketing support, startup-friendly pricing, and our entire network — so your business doesn't just launch, it lasts."
                keywords="startup support India, affordable marketing agency for startups, startup digital presence, honest marketing advice for founders, startup friendly agency Delhi, BYS Marketing startups"
                url="https://bys.marketing/startups"
                schema={schemas}
            />

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 1: HERO */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green-500/5 dark:from-primary/20 dark:via-transparent dark:to-green-500/10 pointer-events-none" />
                <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 mb-8">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-black text-green-700 dark:text-green-400 uppercase tracking-widest">Open for Startups — India & Worldwide</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-text-main dark:text-white leading-[1.05] tracking-tighter mb-6 max-w-5xl mx-auto">
                            We Don't Sell.<br />
                            <span className="text-primary">We Survive Together.</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-lg sm:text-xl md:text-2xl text-text-sub dark:text-text-sub-dark max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
                            You have a great idea and no idea where to start digitally. Most agencies will take your money and give you templates. <strong className="text-text-main dark:text-white">We'll tell you what you actually need — and more importantly, what you can safely ignore.</strong>
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/+918802803681?text=Hi%2C%20I%27m%20a%20startup%20founder%20and%20I%20need%20honest%20advice%20about%20my%20digital%20presence."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-black text-lg rounded-2xl shadow-[0_0_25px_rgba(104,54,244,0.4)] hover:shadow-[0_0_40px_rgba(104,54,244,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                            >
                                Talk to Us Like a Friend
                                <ArrowForward className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 text-text-main dark:text-white font-bold text-lg rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                            >
                                <PhoneCall size={20} /> Book a Free Call
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 2: THE PROBLEM */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full max-w-[1200px] mx-auto px-6 -mt-4">
                <ScrollReveal>
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 border border-red-100 dark:border-red-900/20 p-8 md:p-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 dark:bg-red-900/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                                    <X size={24} strokeWidth={3} />
                                </div>
                                <span className="text-xs font-black text-red-500 uppercase tracking-widest">The Hard Truth</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-text-main dark:text-white mb-4 leading-tight max-w-3xl">
                                You have a great idea. But agencies want <span className="text-red-500">₹5 Lakhs</span> before you've earned <span className="text-red-500">₹1</span>.
                            </h2>
                            <p className="text-text-sub dark:text-text-sub-dark text-base md:text-lg leading-relaxed max-w-3xl">
                                The digital marketing industry has a dirty secret: most agencies are optimized to extract maximum money from you, not to maximize your success. They'll sell you a ₹3 lakh website when a ₹30,000 one would do. They'll push ₹50,000/month ad spend before you even have product-market fit. They use jargon to confuse you, and contracts to trap you.
                            </p>
                            <p className="text-text-main dark:text-white font-bold text-lg mt-6 border-l-4 border-red-400 pl-4">
                                We built BYS to be the opposite of that. Because we've been the startup founder sitting across from a sales pitch that felt more like a robbery.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 3: OUR MANIFESTO / PROMISES */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full max-w-[1200px] mx-auto px-6 mt-16 md:mt-24">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Our Promise to You</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white leading-tight">
                            Not a Pitch. A <span className="text-primary">Manifesto.</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {promises.map((p, i) => (
                        <ScrollReveal key={i} delay={i * 0.08}>
                            <div className="h-full flex flex-col bg-white dark:bg-[#1a1a1a] rounded-3xl p-7 border border-gray-100 dark:border-white/5 hover:-translate-y-1 hover:shadow-floating transition-all duration-300 group">
                                <div className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center mb-5 ${p.color} group-hover:scale-110 transition-transform`}>
                                    <p.icon size={28} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">{p.title}</h3>
                                <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed flex-1">{p.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 4: PHASE BY PHASE JOURNEY */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full max-w-[1200px] mx-auto px-6 mt-16 md:mt-24">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Your Journey With Us</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white leading-tight">
                            From <span className="text-primary">Idea</span> to <span className="text-primary">Empire</span>. Phase by Phase.
                        </h2>
                        <p className="text-text-sub dark:text-text-sub-dark mt-4 max-w-xl mx-auto">We don't give you everything at once. We give you exactly what you need, WHEN you need it. No more, no less.</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {phases.map((p, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="relative h-full bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-white/5 overflow-hidden group hover:-translate-y-1 hover:shadow-floating transition-all duration-300">
                                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${p.color} opacity-5 dark:opacity-10 rounded-full blur-[60px] pointer-events-none group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity`} />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-md`}>
                                            <p.icon size={24} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black text-primary uppercase tracking-widest block">{p.phase}</span>
                                            <h3 className="text-xl font-bold text-text-main dark:text-white">{p.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-sm text-text-sub dark:text-text-sub-dark italic mb-5">{p.subtitle}</p>
                                    <ul className="flex flex-col gap-3">
                                        {p.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-text-main dark:text-white">
                                                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" strokeWidth={3} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 5: WHAT YOU ACTUALLY NEED VS WHAT AGENCIES SELL */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full max-w-[1200px] mx-auto px-6 mt-16 md:mt-24">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">The Honesty Test</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white leading-tight">
                            What Agencies Sell You vs.<br /><span className="text-primary">What You Actually Need</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* What agencies sell */}
                    <ScrollReveal delay={0.1}>
                        <div className="h-full bg-red-50 dark:bg-red-900/10 rounded-3xl p-8 border border-red-100 dark:border-red-900/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                                    <X size={20} strokeWidth={3} />
                                </div>
                                <h3 className="text-lg font-black text-red-600 dark:text-red-400 uppercase tracking-wider">What Agencies Push</h3>
                            </div>
                            <ul className="flex flex-col gap-4">
                                {agenciesSell.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-text-main dark:text-white font-medium">
                                        <span className="mt-0.5 text-red-400 shrink-0">✗</span>
                                        <span className="line-through decoration-red-300 dark:decoration-red-700 opacity-80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-red-500 font-bold mt-6 text-sm border-t border-red-200 dark:border-red-900/30 pt-4">
                                Total cost: ₹3,00,000+ upfront. For a startup with no revenue.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* What you actually need */}
                    <ScrollReveal delay={0.2}>
                        <div className="h-full bg-green-50 dark:bg-green-900/10 rounded-3xl p-8 border border-green-100 dark:border-green-900/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
                                    <CheckCircle2 size={20} strokeWidth={3} />
                                </div>
                                <h3 className="text-lg font-black text-green-600 dark:text-green-400 uppercase tracking-wider">What You Actually Need</h3>
                            </div>
                            <ul className="flex flex-col gap-4">
                                {youActuallyNeed.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-text-main dark:text-white font-medium">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" strokeWidth={3} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-green-600 dark:text-green-400 font-bold mt-6 text-sm border-t border-green-200 dark:border-green-900/30 pt-4">
                                Total cost with BYS: Starting at ₹15,000/month. That's it.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 6: STARTUP-FRIENDLY PRICING */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full max-w-[1200px] mx-auto px-6 mt-16 md:mt-24">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Pricing That Doesn't Kill Your Runway</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mb-4">
                            Startup Plans. <span className="text-primary">Real Prices.</span>
                        </h2>
                        <p className="text-text-sub dark:text-text-sub-dark max-w-lg mx-auto">We work remotely, skip the fancy office, and pass the savings to you. Sign a long-term contract and get even deeper discounts. Our goal? Your survival — not your bankruptcy.</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            name: 'Bootstrap',
                            price: '₹15,000',
                            per: '/mo',
                            desc: 'For founders with an idea and a shoestring budget. We build only the essentials.',
                            features: ['3-5 Page Website', 'Basic SEO Foundation', 'Google Business Profile Setup', 'Monthly Strategy Call', 'WhatsApp / Email Support'],
                            cta: "Let's Start Small",
                            highlight: false,
                        },
                        {
                            name: 'Growth',
                            badge: 'Most Popular',
                            price: '₹30,000',
                            per: '/mo',
                            desc: "For startups with early traction that need to scale efficiently without wasting capital.",
                            features: ['Custom Website + Landing Pages', 'SEO + Content Strategy', 'Social Media (1-2 Platforms)', 'Google/Meta Ads Management', 'Bi-Weekly Reporting', 'Dedicated Account Manager'],
                            cta: 'Scale With Us',
                            highlight: true,
                        },
                        {
                            name: 'Long-Term Partner',
                            price: 'Custom',
                            per: '',
                            desc: "12-month partnership with the deepest discounts. We become your fractional marketing department.",
                            features: ['All Growth Plan Services', 'Media Production Included', 'IT Hardware Connections', 'Priority 24/7 Support', 'Quarterly Strategy Reviews', 'Network Introductions'],
                            cta: 'Become a Partner',
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
                                    href={`https://wa.me/+918802803681?text=Hi%2C%20I'm%20a%20startup%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan`}
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
            </section>

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 7: BEYOND MARKETING — OUR NETWORK */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full max-w-[1200px] mx-auto px-6 mt-16 md:mt-24">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Beyond Marketing</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white leading-tight">
                            Our Network = <span className="text-primary">Your Network</span>
                        </h2>
                        <p className="text-text-sub dark:text-text-sub-dark mt-4 max-w-xl mx-auto">We're not just a marketing agency. We're connected to an ecosystem of service providers, and we'll make introductions to get you the best deals.</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        { icon: HardDrive, title: "IT Hardware", desc: "Laptops, servers, networking equipment — sourced at wholesale rates through our supplier network.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                        { icon: Scale, title: "Legal & Compliance", desc: "Company registration, trademark filing, and legal consultations through trusted partner firms.", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
                        { icon: Users, title: "Talent & HR", desc: "Need to hire your first developer or designer? We'll help you find the right talent at the right price.", color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-900/20" },
                        { icon: Sparkles, title: "Media & Branding", desc: "Professional photography, videography, and branding packages through our in-house media production team.", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
                    ].map((item, i) => (
                        <ScrollReveal key={i} delay={i * 0.08}>
                            <div className="h-full bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 border border-gray-100 dark:border-white/5 hover:-translate-y-1 hover:shadow-floating transition-all duration-300 group">
                                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-base font-bold text-text-main dark:text-white mb-2">{item.title}</h3>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed">{item.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 8: FAQ FOR STARTUPS */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full max-w-[900px] mx-auto px-6 mt-16 md:mt-24">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Straight Answers</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white leading-tight">
                            Questions Founders <span className="text-primary">Actually Ask</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.05}>
                            <details className="group bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-sm transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <span className="text-base font-bold text-text-main dark:text-white pr-4">{faq.q}</span>
                                    <ArrowRight size={18} className="text-primary shrink-0 transition-transform group-open:rotate-90" />
                                </summary>
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">{faq.a}</p>
                                </div>
                            </details>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 9: TESTIMONIAL / SOCIAL PROOF */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full max-w-[900px] mx-auto px-6 mt-16 md:mt-24">
                <ScrollReveal>
                    <div className="relative bg-white dark:bg-[#1a1a1a] rounded-3xl p-10 md:p-14 border border-gray-100 dark:border-white/5 text-center overflow-hidden">
                        <div className="absolute top-4 left-8 text-6xl text-primary/10 font-serif pointer-events-none">"</div>
                        <div className="absolute bottom-[-20%] right-[-10%] w-60 h-60 bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10">
                            <Heart size={32} className="text-primary mx-auto mb-6" />
                            <p className="text-xl md:text-2xl font-bold text-text-main dark:text-white leading-relaxed italic mb-8 max-w-2xl mx-auto">
                                "I went to three agencies before BYS. They all wanted ₹2-3 lakhs upfront. BYS asked me what my budget was, told me what I could realistically achieve with it, and delivered more than I expected. They're not my agency — they're my co-founders who happen to do marketing."
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl">
                                    A
                                </div>
                                <div className="text-left">
                                    <h5 className="font-bold text-text-main dark:text-white text-lg">Amit K.</h5>
                                    <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wider font-bold">Founder, Early-Stage EdTech Startup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ═══════════════════════════════════════════════ */}
            {/* SECTION 10: FINAL CTA */}
            {/* ═══════════════════════════════════════════════ */}
            <section className="w-full max-w-[1200px] mx-auto px-6 mt-16 md:mt-24">
                <ScrollReveal>
                    <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 bg-black border border-white/10 shadow-2xl text-center flex flex-col items-center">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute left-0 bottom-0 w-80 h-80 bg-green-500/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-6 shadow-glow-purple border border-white/20 text-white">
                                <Rocket size={40} className="text-primary-light animate-pulse" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight max-w-2xl mx-auto">
                                Talk to Us Like a Friend.<br />
                                <span className="text-primary">Not a Vendor.</span>
                            </h3>
                            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium">
                                No fancy sales deck. No pressure. Just an honest conversation about your idea, your budget, and what we can realistically do for you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/+918802803681?text=Hi%2C%20I%27m%20a%20startup%20founder.%20Can%20we%20have%20an%20honest%20conversation%20about%20my%20digital%20needs?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-5 px-10 bg-primary text-white font-black text-lg rounded-2xl shadow-[0_0_30px_rgba(104,54,244,0.4)] hover:shadow-[0_0_50px_rgba(104,54,244,0.6)] hover:scale-[1.03] active:scale-95 hover:bg-primary-dark transition-all inline-flex items-center justify-center gap-3 group"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.526 5.855L.057 23.4a.5.5 0 0 0 .61.61l5.568-1.456A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.061-1.375l-.361-.214-3.742.98.999-3.652-.235-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                                    WhatsApp Us Now
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <Link to="/contact" className="py-5 px-10 bg-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 inline-flex items-center justify-center gap-2">
                                    <PhoneCall size={20} /> Schedule a Call Instead
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
