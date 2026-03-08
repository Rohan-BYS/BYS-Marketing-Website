import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';
import {
    Code2, Megaphone, Camera, HardDrive, Shield,
    MessageSquare, FileText, Search, Palette, Lightbulb,
    ArrowRight, MapPin, Star, CheckCircle2, PhoneCall, TrendingUp,
    Building2, Factory, Zap, Info
} from 'lucide-react';

/* ─── SERVICE DATA ─── */
const LOCATION_NAME = 'Okhla Industrial Area';
const LOCATION_SLUG = 'okhla-industrial-area';
const BASE_URL = 'https://bys.marketing';
const PAGE_URL = `${BASE_URL}/in/${LOCATION_SLUG}`;

const services = [
    {
        id: 'web-development',
        icon: Code2,
        color: 'from-blue-500 to-cyan-500',
        bgLight: 'bg-blue-50 dark:bg-blue-900/15',
        border: 'border-blue-200 dark:border-blue-700/30',
        iconColor: 'text-blue-500',
        title: 'Website Development',
        tagline: 'Precision-engineered websites that convert.',
        description: `We build blazing-fast, conversion-optimised websites for Okhla businesses — from wholesale traders to B2B manufacturers. Every site is engineered with semantic HTML for AI crawlers and structured data so your business appears in Google's rich results. Mobile-first, WCAG-compliant, and built to outlast your competitors.`,
        highlights: ['Custom React / Next.js architecture', 'AI-ready semantic structure', 'Google Core Web Vitals optimised', 'Google Business Profile sync'],
        cta: 'Get a Website for Okhla',
        href: `/in/${LOCATION_SLUG}/web-development`,
        servicePage: '/services/web-development',
        whatsappMsg: "Hi%2C%20I%27m%20a%20business%20in%20Okhla%20and%20I%27m%20interested%20in%20Website%20Development%20services.%20Can%20we%20discuss%3F",
        schemaName: 'Web Development Services in Okhla Industrial Area',
        schemaDesc: 'Custom website development for manufacturers, exporters, and B2B businesses in Okhla Industrial Area, New Delhi.',
    },
    {
        id: 'seo',
        icon: Search,
        color: 'from-orange-500 to-amber-400',
        bgLight: 'bg-orange-50 dark:bg-orange-900/15',
        border: 'border-orange-200 dark:border-orange-700/30',
        iconColor: 'text-orange-500',
        title: 'Search Engine Optimisation (SEO)',
        tagline: 'Own Google in Okhla before your rivals do.',
        description: `Most businesses in Okhla Industrial Area are invisible on Google — not because they lack merit, but because no one has optimised their digital presence. We deploy hyper-local SEO strategies targeting the exact queries buyers use to find manufacturers and suppliers in Okhla. Includes local schema, Google Maps dominance, and AI Overview optimisation.`,
        highlights: ['Hyper-local Okhla keyword clusters', 'Google Maps Pack ranking', 'AI Overview / GEO optimisation', 'Competitor gap analysis'],
        cta: 'Rank Higher in Okhla',
        href: `/in/${LOCATION_SLUG}/seo`,
        servicePage: '/services/seo',
        whatsappMsg: "Hi%2C%20I%27m%20a%20business%20in%20Okhla%20and%20I%27m%20interested%20in%20SEO%20services%20to%20rank%20higher%20on%20Google.%20Can%20we%20talk%3F",
        schemaName: 'SEO Services in Okhla Industrial Area',
        schemaDesc: 'Hyper-local search engine optimisation for businesses in Okhla Industrial Area targeting buyers in Delhi NCR.',
    },
    {
        id: 'digital-marketing',
        icon: Megaphone,
        color: 'from-green-500 to-emerald-400',
        bgLight: 'bg-green-50 dark:bg-green-900/15',
        border: 'border-green-200 dark:border-green-700/30',
        iconColor: 'text-green-500',
        title: 'Performance Marketing',
        tagline: 'Data-driven campaigns that fill your order pipeline.',
        description: `Google Ads, Meta Ads, and LinkedIn campaigns built for Okhla's B2B and B2C ecosystem. Whether you are a garment exporter needing pan-India leads, or a hardware supplier targeting procurement managers — we architect campaigns with military-grade attribution and transparent ROAS reporting. No inflated budgets, no vanity metrics.`,
        highlights: ['Google Ads (Search + Shopping)', 'Meta Ads for B2C trade orders', 'LinkedIn for B2B lead generation', 'Real-time ROAS dashboards'],
        cta: 'Launch Okhla Ad Campaigns',
        href: `/in/${LOCATION_SLUG}/digital-marketing`,
        servicePage: '/services/digital-marketing',
        whatsappMsg: "Hi%2C%20I%27m%20an%20Okhla%20business%20interested%20in%20running%20Google%20or%20Meta%20Ads.%20Can%20we%20discuss%20a%20performance%20marketing%20plan%3F",
        schemaName: 'Digital Marketing Services in Okhla Industrial Area',
        schemaDesc: 'Performance marketing, Google Ads, and Meta Ads for businesses in Okhla Industrial Area, New Delhi.',
    },
    {
        id: 'design',
        icon: Palette,
        color: 'from-pink-500 to-rose-400',
        bgLight: 'bg-pink-50 dark:bg-pink-900/15',
        border: 'border-pink-200 dark:border-pink-700/30',
        iconColor: 'text-pink-500',
        title: 'UI/UX Design',
        tagline: 'Premium digital identity for Okhla brands.',
        description: `We design intuitive, premium digital experiences that reflect the quality of your product rather than a generic template. For Okhla's product-led businesses — from apparel to electronics — a world-class UI signals trust to buyers who judge suppliers in the first 7 seconds. We handle everything from brand identity to full UX product design.`,
        highlights: ['Industry-specific UX research', 'Figma-to-production delivery', 'Conversion-optimised layouts', 'Catalogue & product showcase design'],
        cta: 'Elevate Your Brand Design',
        href: `/in/${LOCATION_SLUG}/design`,
        servicePage: '/services/design',
        whatsappMsg: "Hi%2C%20I%27m%20an%20Okhla%20business%20and%20I%27m%20looking%20for%20UI%2FUX%20Design%20and%20brand%20identity%20work.%20Can%20we%20discuss%3F",
        schemaName: 'UI UX Design Services in Okhla Industrial Area',
        schemaDesc: 'Premium UI/UX design and brand identity for manufacturers and exporters in Okhla Industrial Area.',
    },
    {
        id: 'social',
        icon: MessageSquare,
        color: 'from-purple-500 to-violet-500',
        bgLight: 'bg-purple-50 dark:bg-purple-900/15',
        border: 'border-purple-200 dark:border-purple-700/30',
        iconColor: 'text-purple-500',
        title: 'Social Media Management',
        tagline: 'A consistent brand voice across every platform.',
        description: `Okhla businesses that went digital during COVID proved one thing: your social presence is your 24/7 shop floor. We manage Instagram, Facebook, LinkedIn, and WhatsApp Business — creating content that accurately represents your product quality and builds trust with buyers across India and internationally. We handle the content, you handle the orders.`,
        highlights: ['Instagram & Facebook content', 'LinkedIn B2B positioning', 'WhatsApp Business automation', 'Monthly performance reports'],
        cta: 'Grow Your Social Presence',
        href: `/in/${LOCATION_SLUG}/social`,
        servicePage: '/services/social',
        whatsappMsg: "Hi%2C%20I%27m%20an%20Okhla%20business%20and%20I%27m%20interested%20in%20Social%20Media%20Management.%20Can%20we%20discuss%3F",
        schemaName: 'Social Media Management in Okhla Industrial Area',
        schemaDesc: 'Professional social media management for businesses in Okhla Industrial Area targeting Delhi NCR and national buyers.',
    },
    {
        id: 'media-production',
        icon: Camera,
        color: 'from-red-500 to-orange-500',
        bgLight: 'bg-red-50 dark:bg-red-900/15',
        border: 'border-red-200 dark:border-red-700/30',
        iconColor: 'text-red-500',
        title: 'Media Production',
        tagline: 'Product-quality video and photography that closes deals.',
        description: `In Okhla's competitive industrial landscape, buyers make decisions based on what they see before they visit. Our product photography, factory floor videography, and promotional reels transform your workshop into a premium, aspirational brand that buyers trust instantly. High-impact media that lives on your website, catalogue, and social channels.`,
        highlights: ['Product catalogue photography', 'Factory & facility walkthroughs', 'Promotional video reels', 'Brand story documentaries'],
        cta: 'Book a Media Shoot',
        href: `/in/${LOCATION_SLUG}/media-production`,
        servicePage: '/services/media-production',
        whatsappMsg: "Hi%2C%20I%27m%20an%20Okhla%20business%20and%20I%27d%20like%20to%20discuss%20product%20photography%20or%20video%20production.%20Can%20we%20schedule%20a%20shoot%3F",
        schemaName: 'Media Production Services in Okhla Industrial Area',
        schemaDesc: 'Product photography, factory videography, and brand media production for Okhla Industrial Area businesses.',
    },
    {
        id: 'it-hardware',
        icon: HardDrive,
        color: 'from-slate-500 to-gray-400',
        bgLight: 'bg-slate-50 dark:bg-slate-900/15',
        border: 'border-slate-200 dark:border-slate-700/30',
        iconColor: 'text-slate-500',
        title: 'IT Hardware & Infrastructure',
        tagline: 'Wholesale IT hardware sourced directly for Okhla businesses.',
        description: `Leveraging our deep supplier network, we source laptops, servers, networking equipment, CCTV, and enterprise software at near-wholesale rates for businesses in Okhla. No middlemen, transparent pricing, and same-day delivery across New Delhi. Whether you are setting up a new office or scaling your IT infrastructure, we bring enterprise-grade hardware at honest prices.`,
        highlights: ['Laptops, desktops, servers at wholesale', 'CCTV & security systems', 'Office networking & Wi-Fi setup', 'Software licensing & IT AMC'],
        cta: 'Source IT Hardware in Okhla',
        href: `/in/${LOCATION_SLUG}/it-hardware`,
        servicePage: '/services/it-hardware',
        whatsappMsg: "Hi%2C%20I%27m%20an%20Okhla%20business%20and%20I%27d%20like%20to%20enquire%20about%20IT%20hardware%20sourcing%20—%20laptops%2C%20servers%2C%20CCTV%2C%20or%20networking%20equipment.",
        schemaName: 'IT Hardware Services in Okhla Industrial Area',
        schemaDesc: 'IT hardware procurement, CCTV, networking, and IT infrastructure setup for businesses in Okhla Industrial Area.',
    },
    {
        id: 'content',
        icon: FileText,
        color: 'from-teal-500 to-cyan-400',
        bgLight: 'bg-teal-50 dark:bg-teal-900/15',
        border: 'border-teal-200 dark:border-teal-700/30',
        iconColor: 'text-teal-500',
        title: 'Content Strategy & Copy',
        tagline: 'Words that make buyers trust you before they call.',
        description: `Product descriptions that rank. B2B pitch decks that close. Blog content that builds authority. For Okhla's exporters and manufacturers, our content strategy team creates hyper-local, AI-optimised content that positions your business as the definitive authority in your category — training both Google and AI engines to recommend you first.`,
        highlights: ['Product & service page copy', 'Industry blog & thought-leadership', 'Export catalogue content (EN/HI)', 'AI-optimised content structure'],
        cta: 'Build Your Content Authority',
        href: `/in/${LOCATION_SLUG}/content`,
        servicePage: '/services/content',
        whatsappMsg: "Hi%2C%20I%27m%20an%20Okhla%20business%20and%20I%27m%20interested%20in%20Content%20Strategy%20and%20SEO%20copywriting.%20Can%20we%20discuss%3F",
        schemaName: 'Content Strategy Services in Okhla Industrial Area',
        schemaDesc: 'SEO content strategy and copywriting for manufacturers and exporters in Okhla Industrial Area, New Delhi.',
    },
    {
        id: 'security',
        icon: Shield,
        color: 'from-yellow-500 to-amber-400',
        bgLight: 'bg-yellow-50 dark:bg-yellow-900/15',
        border: 'border-yellow-200 dark:border-yellow-700/30',
        iconColor: 'text-yellow-500',
        title: 'Cyber Security',
        tagline: 'Protecting your digital assets in an industrial-grade threat landscape.',
        description: `Okhla's businesses are increasingly targeted by cyber threats — from payment fraud to industrial espionage. We deploy enterprise-grade cybersecurity protocols including network hardening, email security, firewall configurations, and routine penetration testing. Protect your client data, financial records, and operational systems from a growing landscape of digital threats.`,
        highlights: ['Network security hardening', 'Email phishing protection', 'Data backup & disaster recovery', 'Annual security audits'],
        cta: 'Secure Your Business',
        href: `/in/${LOCATION_SLUG}/security`,
        servicePage: '/services/security',
        whatsappMsg: "Hi%2C%20I%27m%20an%20Okhla%20business%20and%20I%27d%20like%20to%20discuss%20Cybersecurity%20solutions%20for%20my%20company.",
        schemaName: 'Cyber Security Services in Okhla Industrial Area',
        schemaDesc: 'Enterprise cybersecurity, network protection, and data security for businesses in Okhla Industrial Area.',
    },
    {
        id: 'consultation',
        icon: Lightbulb,
        color: 'from-indigo-500 to-blue-400',
        bgLight: 'bg-indigo-50 dark:bg-indigo-900/15',
        border: 'border-indigo-200 dark:border-indigo-700/30',
        iconColor: 'text-indigo-500',
        title: 'Digital Strategy Consultation',
        tagline: 'An honest roadmap — not a sales pitch.',
        description: `Before you spend a rupee on marketing, talk to us. Our strategy sessions are built for Okhla business owners who are ready to go digital but aren't sure where to invest first. We analyse your current digital footprint, map your competitors, and give you a brutally honest prioritised action plan. No upselling. No jargon. Just a clear path forward.`,
        highlights: ['Free 60-minute discovery call', 'Competitor digital analysis', 'Prioritised growth roadmap', 'ROI-first investment advice'],
        cta: 'Book a Free Strategy Call',
        href: `/in/${LOCATION_SLUG}/consultation`,
        servicePage: '/services/consultation',
        whatsappMsg: "Hi%2C%20I%27m%20an%20Okhla%20business%20owner%20and%20I%27d%20like%20to%20book%20a%20free%20Digital%20Strategy%20consultation%20call.",
        schemaName: 'Digital Consultation Services in Okhla Industrial Area',
        schemaDesc: 'Free digital strategy consultation for businesses in Okhla Industrial Area, New Delhi.',
    },
];

/* ─── SCHEMA MARKUP ─── */
function buildSchemas() {
    // 1. WebPage schema (core page entity)
    const webPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": `Digital Marketing & IT Services in Okhla Industrial Area | BYS Marketing`,
        "description": "BYS Marketing offers web development, SEO, digital marketing, IT hardware, UI/UX design, and more for businesses in Okhla Industrial Area, New Delhi.",
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "about": {
            "@type": "Place",
            "name": "Okhla Industrial Area",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Okhla Industrial Area",
                "addressRegion": "New Delhi",
                "postalCode": "110020",
                "addressCountry": "IN"
            }
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/services` },
                { "@type": "ListItem", "position": 3, "name": "Okhla Industrial Area", "item": PAGE_URL }
            ]
        }
    };

    // 2. ItemList schema (triggers the Google Sitelinks / service list)
    const itemList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `All Digital Marketing & IT Services for ${LOCATION_NAME}`,
        "description": `Complete list of services offered by BYS Marketing for businesses in ${LOCATION_NAME}, New Delhi.`,
        "url": PAGE_URL,
        "numberOfItems": services.length,
        "itemListElement": services.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": s.schemaName,
            "description": s.schemaDesc,
            "url": `${BASE_URL}${s.href}`,
            "item": {
                "@type": "Service",
                "name": s.schemaName,
                "description": s.schemaDesc,
                "url": `${BASE_URL}${s.href}`,
                "areaServed": {
                    "@type": "Place",
                    "name": LOCATION_NAME,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Okhla Industrial Area",
                        "addressRegion": "New Delhi",
                        "addressCountry": "IN"
                    }
                },
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "BYS Marketing",
                    "url": BASE_URL,
                    "telephone": "+918383894893",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "A-115, Harkesh Nagar, Okhla",
                        "addressLocality": "New Delhi",
                        "addressRegion": "Delhi",
                        "postalCode": "110020",
                        "addressCountry": "IN"
                    }
                }
            }
        }))
    };

    // 3. LocalBusiness schema (authority signal)
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#localbusiness`,
        "name": "BYS Marketing",
        "image": `${BASE_URL}/logo.png`,
        "url": BASE_URL,
        "telephone": "+918383894893",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, UPI, NEFT",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "A-115, Harkesh Nagar, Okhla",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110020",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.5355,
            "longitude": 77.2682
        },
        "areaServed": [
            { "@type": "Place", "name": "Okhla Industrial Area, New Delhi" },
            { "@type": "Place", "name": "Okhla Phase 1, New Delhi" },
            { "@type": "Place", "name": "Okhla Phase 2, New Delhi" },
            { "@type": "Place", "name": "Okhla Phase 3, New Delhi" },
            { "@type": "Place", "name": "New Delhi, India" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing & IT Services",
            "itemListElement": services.map(s => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": s.title,
                    "url": `${BASE_URL}${s.href}`
                }
            }))
        },
        "sameAs": [
            "https://www.facebook.com/bysmarketing",
            "https://www.instagram.com/bysmarketing",
            "https://linkedin.com/company/bysmarketing"
        ]
    };

    // 4. FAQPage schema for the page
    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does BYS Marketing serve businesses in Okhla Industrial Area?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. BYS Marketing is headquartered in Okhla, New Delhi. We offer web development, SEO, digital marketing, IT hardware, media production, UI/UX design, content strategy, and cybersecurity services specifically for Okhla Phase 1, Phase 2, Phase 3, and the surrounding industrial areas."
                }
            },
            {
                "@type": "Question",
                "name": "What digital marketing services are available for manufacturers in Okhla?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BYS Marketing provides SEO, Google Ads, Meta Ads, website development, product photography, social media management, and content strategy specifically tailored for Okhla's manufacturing, export, and B2B industrial businesses."
                }
            },
            {
                "@type": "Question",
                "name": "How much does an SEO service cost for an Okhla business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO pricing for Okhla businesses starts at ₹8,000 per month for local SEO and Google Business Profile optimisation, scaling to ₹25,000+ per month for comprehensive keyword campaigns targeting national and international buyers. Contact us for a custom quote."
                }
            },
            {
                "@type": "Question",
                "name": "Can BYS Marketing build a website for a small business in Okhla?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We build affordable yet high-performance websites starting from ₹15,000 for small businesses in Okhla — with mobile-first design, SEO optimisation, and Google Business integration included as standard. No bloated templates, no hidden fees."
                }
            }
        ]
    };

    return [webPage, itemList, localBusiness, faqPage];
}

/* ─── COMPONENT ─── */
export default function OkhlaServicesHub() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const schemas = buildSchemas();

    return (
        <main className="bg-background-light dark:bg-[#0a0a0a] min-h-screen pb-32 overflow-hidden transition-colors">
            <SEOHead
                title="Digital Marketing & IT Services in Okhla Industrial Area | BYS Marketing"
                description="BYS Marketing is Okhla's trusted digital agency. We offer web development, SEO, performance marketing, UI/UX design, IT hardware, and more for businesses in Okhla Industrial Area, New Delhi."
                keywords="digital marketing Okhla Industrial Area, web development Okhla, SEO services Okhla, IT company Okhla Phase 1, marketing agency Okhla Delhi, website design Okhla, BYS Marketing Okhla"
                url={PAGE_URL}
                schema={schemas}
            />

            {/* ═══ HERO ═══ */}
            <section className="relative overflow-hidden">
                {/* Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/5 dark:from-primary/20 dark:via-transparent dark:to-orange-500/10 pointer-events-none" />
                <div className="absolute top-[20%] right-[-8%] w-[500px] h-[500px] bg-primary/8 dark:bg-primary/12 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-orange-400/8 dark:bg-orange-400/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
                    <ScrollReveal>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30">
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs font-black text-primary uppercase tracking-widest">Now Serving Okhla Industrial Area</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                <MapPin size={12} className="text-primary" />
                                <span className="text-xs font-bold text-text-sub dark:text-white/60">New Delhi — 110020</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.08}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-main dark:text-white leading-[1.05] tracking-tighter mb-6 max-w-5xl">
                            Every Digital Service<br />
                            <span className="text-primary">Okhla Businesses</span><br />
                            Actually Need.
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <p className="text-lg md:text-xl text-text-sub dark:text-white/60 leading-relaxed max-w-3xl mb-10 font-medium">
                            We're based in Okhla. We've seen the businesses here grind every day — manufacturing, exporting, supplying — without a single digital touchpoint. That changes now. From a ₹499 domain to a full-scale AI-powered enterprise website, we handle it all for Okhla's business community.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2.5 px-7 py-4 bg-primary text-white font-black text-base rounded-2xl shadow-[0_0_25px_rgba(104,54,244,0.4)] hover:shadow-[0_0_40px_rgba(104,54,244,0.6)] hover:-translate-y-0.5 transition-all duration-300 group"
                            >
                                <PhoneCall size={18} />
                                Free Consultation for Okhla Businesses
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="https://wa.me/+918383894893?text=Hi%2C%20I%27m%20a%20business%20owner%20in%20Okhla%20Industrial%20Area%20and%20want%20to%20know%20more%20about%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-7 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-main dark:text-white font-bold text-base rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
                            >
                                WhatsApp Us Now
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* Stats row */}
                    <ScrollReveal delay={0.28}>
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: Building2, label: 'Based in Okhla', value: 'Since 2017' },
                                { icon: Star, label: 'Satisfaction Rate', value: '98.4%' },
                                { icon: TrendingUp, label: 'Avg. ROAS for Clients', value: '4.2×' },
                                { icon: Factory, label: 'Industries Served', value: '18+' },
                            ].map((stat, i) => (
                                <div key={i} className="glass-panel rounded-2xl p-5 border border-white/60 dark:border-white/10 text-center group hover:-translate-y-1 transition-all">
                                    <stat.icon size={20} className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-black text-text-main dark:text-white">{stat.value}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-text-sub dark:text-white/40 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ SERVICES GRID ═══ */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Our Complete Service Catalogue for Okhla</span>
                        <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">
                            Choose Your Service.<br />
                            <span className="text-primary">Dominate Your Market.</span>
                        </h2>
                        <p className="text-text-sub dark:text-white/50 mt-4 max-w-xl mx-auto text-lg">
                            Every service below is hyper-localised for Okhla Industrial Area. Click on any service to see the full scope, pricing, and case studies.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col gap-8">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        const isEven = i % 2 === 0;
                        return (
                            <ScrollReveal key={service.id} delay={0.05}>
                                <article
                                    id={service.id}
                                    className={`group relative rounded-3xl border ${service.border} ${service.bgLight} overflow-hidden hover:shadow-floating hover:-translate-y-1 transition-all duration-300`}
                                >
                                    {/* Subtle gradient accent */}
                                    <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-64 h-64 bg-gradient-to-br ${service.color} opacity-[0.06] dark:opacity-[0.08] rounded-full blur-[80px] pointer-events-none group-hover:opacity-[0.1] transition-opacity`} />

                                    <div className="relative z-10 p-8 md:p-10">
                                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">

                                            {/* Left: Content */}
                                            <div>
                                                <div className="flex items-center gap-4 mb-5">
                                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                        <Icon size={26} />
                                                    </div>
                                                    <div>
                                                        <span className={`text-[10px] font-black uppercase tracking-widest ${service.iconColor} block mb-0.5`}>
                                                            Service #{String(i + 1).padStart(2, '0')}
                                                        </span>
                                                        <h3 className="text-2xl md:text-3xl font-black text-text-main dark:text-white leading-tight">
                                                            {service.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <p className={`text-lg font-bold ${service.iconColor} mb-4 italic`}>
                                                    "{service.tagline}"
                                                </p>

                                                <p className="text-text-sub dark:text-white/60 leading-relaxed mb-6 max-w-2xl text-base">
                                                    {service.description}
                                                </p>

                                                {/* Highlights */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                                    {service.highlights.map((h, hi) => (
                                                        <div key={hi} className="flex items-center gap-2.5 text-sm text-text-main dark:text-white font-medium">
                                                            <CheckCircle2 size={15} className={service.iconColor} strokeWidth={2.5} />
                                                            {h}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right: CTA Card */}
                                            <div className="md:w-64 shrink-0">
                                                <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 sticky top-24 text-center">
                                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mx-auto mb-4 shadow-md`}>
                                                        <Zap size={22} />
                                                    </div>
                                                    <div className="text-xs font-black uppercase tracking-widest text-text-sub dark:text-white/40 mb-1">
                                                        {LOCATION_NAME}
                                                    </div>
                                                    <h4 className="text-base font-bold text-text-main dark:text-white mb-4 leading-tight">
                                                        {service.title}
                                                    </h4>
                                                    {/* Primary: WhatsApp pre-filled */}
                                                    <a
                                                        href={`https://wa.me/+918383894893?text=${service.whatsappMsg ?? encodeURIComponent(`Hi, I'm interested in ${service.title} for my Okhla business.`)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`WhatsApp us about ${service.title}`}
                                                        className={`w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r ${service.color} text-white font-bold text-sm hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-md mb-3`}
                                                    >
                                                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.526 5.855L.057 23.4a.5.5 0 0 0 .61.61l5.568-1.456A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.061-1.375l-.361-.214-3.742.98.999-3.652-.235-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                                                        {service.cta}
                                                    </a>
                                                    {/* Secondary: More Info → service page */}
                                                    <Link
                                                        to={service.servicePage ?? service.href}
                                                        aria-label={`More information about ${service.title}`}
                                                        className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl border border-gray-200 dark:border-white/10 text-text-sub dark:text-white/60 font-bold text-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                                                    >
                                                        <Info size={14} /> More Info
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </section>

            {/* ═══ WHY OKHLA BUSINESSES TRUST BYS ═══ */}
            <section className="bg-white dark:bg-[#0b0b0b] transition-colors py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-14">
                            <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Local Credibility</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">
                                Why Okhla Businesses<br /><span className="text-primary">Choose BYS</span>
                            </h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'We Grew Up Here',
                                desc: 'Our founder lived in Okhla Industrial Area and experienced firsthand how hard-working businesses struggled to find buyers online despite producing world-class goods. BYS was built to solve exactly that problem.',
                                icon: MapPin,
                                color: 'text-primary',
                                bg: 'bg-primary/10 dark:bg-primary/20'
                            },
                            {
                                title: 'Industrial B2B Specialists',
                                desc: 'We understand that Okhla\'s buyers are procurement managers, retail chains, and international importers — not casual Instagram scrollers. Every campaign we run is built for B2B conversion cycles.',
                                icon: Factory,
                                color: 'text-orange-500',
                                bg: 'bg-orange-50 dark:bg-orange-900/20'
                            },
                            {
                                title: 'No Office Overhead Costs',
                                desc: 'We\'re remote-first. We pass those savings directly to you. Get enterprise-quality digital work at startup-friendly pricing — because we believe your money should go into growing your business, not our furniture.',
                                icon: TrendingUp,
                                color: 'text-green-500',
                                bg: 'bg-green-50 dark:bg-green-900/20'
                            },
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.08}>
                                <div className="glass-panel rounded-3xl p-8 border border-white/60 dark:border-white/10 h-full hover:-translate-y-1 transition-all group">
                                    <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                        <item.icon size={26} className={item.color} />
                                    </div>
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-text-sub dark:text-white/55 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FAQ SECTION ═══ */}
            <section className="max-w-4xl mx-auto px-6 py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Common Questions</span>
                        <h2 className="text-4xl font-black text-text-main dark:text-white">
                            FAQ for <span className="text-primary">Okhla Businesses</span>
                        </h2>
                    </div>
                </ScrollReveal>
                <div className="flex flex-col gap-4">
                    {[
                        { q: 'Does BYS Marketing serve businesses in Okhla Industrial Area?', a: 'Yes. BYS Marketing is headquartered in Okhla, New Delhi. We offer all digital services — web development, SEO, digital marketing, IT hardware, and more — specifically for Okhla Phase 1, Phase 2, and Phase 3 businesses.' },
                        { q: 'What digital marketing services are available for manufacturers in Okhla?', a: 'We provide SEO, Google Ads, Meta Ads, website development, product photography, social media management, and content strategy tailored specifically for Okhla\'s manufacturing, export, and B2B industrial businesses.' },
                        { q: 'How much does an SEO service cost for an Okhla business?', a: 'SEO for Okhla businesses starts at ₹8,000/month for local SEO and Google Business Profile optimisation, scaling to ₹25,000+ for comprehensive keyword campaigns targeting national and international buyers.' },
                        { q: 'Can BYS Marketing build a website for a small business in Okhla?', a: 'Absolutely. We build affordable, high-performance websites starting from ₹15,000 for small Okhla businesses — with mobile-first design, SEO, and Google Business integration included as standard.' },
                    ].map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.05}>
                            <details className="group bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-sm transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <span className="text-base font-bold text-text-main dark:text-white pr-4">{faq.q}</span>
                                    <ArrowRight size={18} className="text-primary shrink-0 transition-transform group-open:rotate-90" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">{faq.a}</p>
                                </div>
                            </details>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="max-w-7xl mx-auto px-6 pb-8">
                <ScrollReveal>
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-black border border-white/10 p-12 md:p-20 text-center">
                        <div className="absolute right-0 top-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
                        <div className="absolute left-0 bottom-0 w-80 h-80 bg-orange-500/15 rounded-full blur-[100px]" />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
                                <MapPin size={12} className="text-primary-light" />
                                <span className="text-xs font-black text-white/70 uppercase tracking-widest">Okhla Industrial Area</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Ready to Put Your Business<br /><span className="text-primary-light">on the Digital Map?</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                                Join Okhla's forward-thinking businesses that are winning online orders, attracting international buyers, and building brands that last.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="px-10 py-5 bg-primary text-white font-black text-lg rounded-2xl shadow-[0_0_30px_rgba(104,54,244,0.5)] hover:shadow-[0_0_50px_rgba(104,54,244,0.7)] hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-3 group"
                                >
                                    <PhoneCall size={20} />
                                    Book Free Consultation
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/services"
                                    className="px-10 py-5 border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all inline-flex items-center justify-center"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </main>
    );
}
