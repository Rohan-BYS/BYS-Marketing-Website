import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';
import {
    Code2, Megaphone, Camera, HardDrive, Shield,
    MessageSquare, FileText, Search, Palette, Lightbulb,
    ArrowRight, MapPin, Star, CheckCircle2, PhoneCall, TrendingUp,
    Building2, Truck, Zap, Info
} from 'lucide-react';

/* ─── LOCATION CONSTANTS ─── */
const LOCATION_NAME = 'Badarpur';
const LOCATION_SLUG = 'badarpur-area';
const BASE_URL = 'https://bys.marketing';
const PAGE_URL = `${BASE_URL}/in/${LOCATION_SLUG}`;

/* ─── SERVICE DATA ─── */
const services = [
    {
        id: 'web-development',
        icon: Code2,
        color: 'from-blue-500 to-cyan-500',
        bgLight: 'bg-blue-50 dark:bg-blue-900/15',
        border: 'border-blue-200 dark:border-blue-700/30',
        iconColor: 'text-blue-500',
        title: 'Website Development',
        tagline: 'Precision-engineered websites that convert Badarpur buyers.',
        description: `We build blazing-fast, conversion-optimised websites for Badarpur businesses — from granite traders and building material suppliers to logistics firms and transport companies operating along the Delhi-Faridabad corridor. Every site is engineered with semantic HTML for AI crawlers, structured data markup so your business appears in Google's rich results, and WhatsApp-integrated lead forms so buyers can reach you instantly. Mobile-first, WCAG-compliant, and built to outlast competitors who are still invisible online.`,
        highlights: [
            'Custom React / Next.js architecture',
            'AI-ready semantic HTML structure',
            'Google Core Web Vitals optimised',
            'Google Business Profile sync',
            'WhatsApp lead capture integration',
            'Mobile-first responsive design',
        ],
        cta: 'Get a Website for Badarpur',
        href: `/in/${LOCATION_SLUG}/web-development`,
        servicePage: '/services/web-development',
        whatsappMsg: "Hi%2C%20I%27m%20a%20business%20in%20Badarpur%20and%20I%27m%20interested%20in%20Website%20Development%20services.%20Can%20we%20discuss%3F",
        schemaName: 'Web Development Services in Badarpur Delhi',
        schemaDesc: 'Custom website development for traders, logistics companies, and businesses in Badarpur, New Delhi — the gateway to NCR.',
    },
    {
        id: 'seo',
        icon: Search,
        color: 'from-orange-500 to-amber-400',
        bgLight: 'bg-orange-50 dark:bg-orange-900/15',
        border: 'border-orange-200 dark:border-orange-700/30',
        iconColor: 'text-orange-500',
        title: 'Search Engine Optimisation (SEO)',
        tagline: 'Own Google in Badarpur before your rivals do.',
        description: `Most businesses in Badarpur and the Delhi-Faridabad border zone are invisible on Google — not because they lack quality, but because no one has built their digital authority. We deploy hyper-local SEO strategies targeting the exact queries that buyers, contractors, and procurement managers type when they search for suppliers in the South Delhi and NCR border region. Our campaigns include local schema implementation, Google Maps Pack dominance, AI Overview (GEO) optimisation, and competitor gap analysis. If someone in South Delhi or Faridabad is searching for your product or service, we make sure they find you first.`,
        highlights: [
            'Hyper-local Badarpur keyword clusters',
            'Google Maps Pack ranking strategy',
            'AI Overview / GEO optimisation',
            'Competitor gap analysis & backlink building',
            'On-page & technical SEO audit',
            'Monthly ranking & traffic reports',
        ],
        cta: 'Rank Higher in Badarpur',
        href: `/in/${LOCATION_SLUG}/seo`,
        servicePage: '/services/seo',
        whatsappMsg: "Hi%2C%20I%27m%20a%20business%20in%20Badarpur%20and%20I%27m%20interested%20in%20SEO%20services%20to%20rank%20higher%20on%20Google.%20Can%20we%20talk%3F",
        schemaName: 'SEO Services in Badarpur Delhi',
        schemaDesc: 'Hyper-local search engine optimisation for businesses in Badarpur targeting clients across South Delhi and Faridabad.',
    },
    {
        id: 'digital-marketing',
        icon: Megaphone,
        color: 'from-green-500 to-emerald-400',
        bgLight: 'bg-green-50 dark:bg-green-900/15',
        border: 'border-green-200 dark:border-green-700/30',
        iconColor: 'text-green-500',
        title: 'Performance Marketing & Google Ads',
        tagline: 'Data-driven campaigns that fill your order pipeline.',
        description: `Google Ads, Meta Ads, and LinkedIn campaigns engineered for Badarpur's unique trade and service ecosystem. Whether you are a building materials supplier targeting contractors across Delhi NCR, a logistics company chasing fleet deals, or a service business capturing walk-in customers from the Badarpur border — we architect campaigns with military-grade conversion tracking and transparent ROAS reporting. No inflated budgets. No vanity clicks. Just hot leads that turn into real revenue.`,
        highlights: [
            'Google Ads (Search + Display + Shopping)',
            'Meta Ads for local lead generation',
            'LinkedIn Ads for B2B procurement reach',
            'Real-time ROAS & conversion dashboards',
            'Landing page optimisation',
            'Remarketing & retargeting campaigns',
        ],
        cta: 'Launch Badarpur Ad Campaigns',
        href: `/in/${LOCATION_SLUG}/digital-marketing`,
        servicePage: '/services/digital-marketing',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20interested%20in%20running%20Google%20or%20Meta%20Ads.%20Can%20we%20discuss%20a%20performance%20marketing%20plan%3F",
        schemaName: 'Digital Marketing Services in Badarpur Area',
        schemaDesc: 'Performance marketing, Google Ads, and Meta Ads for businesses in Badarpur area, New Delhi targeting NCR and Faridabad buyers.',
    },
    {
        id: 'design',
        icon: Palette,
        color: 'from-pink-500 to-rose-400',
        bgLight: 'bg-pink-50 dark:bg-pink-900/15',
        border: 'border-pink-200 dark:border-pink-700/30',
        iconColor: 'text-pink-500',
        title: 'UI/UX Design & Brand Identity',
        tagline: 'Premium digital identity that makes buyers trust you in 7 seconds.',
        description: `We design intuitive, premium digital experiences that reflect the true quality of your product or service. For Badarpur's trade-led businesses — from stone and granite works to transport and logistics — a professional, high-quality digital brand signals trust instantly to buyers who judge suppliers before they even call. We handle everything from logo and brand identity design to full UX product design on Figma, with pixel-perfect handoff to development. Your brand should work as hard as you do.`,
        highlights: [
            'Brand identity & logo design',
            'Trade-specific UX research & wireframing',
            'Figma-to-production delivery',
            'Conversion-optimised page layouts',
            'Catalogue & product showcase design',
            'Print & digital collateral design',
        ],
        cta: 'Elevate Your Brand Design',
        href: `/in/${LOCATION_SLUG}/design`,
        servicePage: '/services/design',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20and%20I%27m%20looking%20for%20UI%2FUX%20Design%20and%20brand%20identity%20work.%20Can%20we%20discuss%3F",
        schemaName: 'UI UX Design Services in Badarpur Area',
        schemaDesc: 'Premium UI/UX design and brand identity for traders and businesses in the Badarpur area, New Delhi.',
    },
    {
        id: 'social',
        icon: MessageSquare,
        color: 'from-purple-500 to-violet-500',
        bgLight: 'bg-purple-50 dark:bg-purple-900/15',
        border: 'border-purple-200 dark:border-white/10',
        iconColor: 'text-purple-500',
        title: 'Social Media Management',
        tagline: 'Your 24/7 brand voice at the NCR border.',
        description: `Your social presence is your 24/7 shop window to buyers across South Delhi, Faridabad, and NCR. We manage Instagram, Facebook, LinkedIn, and WhatsApp Business — creating consistent, high-quality content that accurately represents your scale, quality, and professionalism. From showcasing your granite stock and building materials to highlighting your logistics capacity — we handle the content and community management so you can focus on operations and growth.`,
        highlights: [
            'Instagram & Facebook content strategy',
            'LinkedIn professional business positioning',
            'WhatsApp Business catalogue & automation',
            'Reels & short-form video production',
            'Community management & DM handling',
            'Monthly growth & engagement reports',
        ],
        cta: 'Grow Your Social Presence',
        href: `/in/${LOCATION_SLUG}/social`,
        servicePage: '/services/social',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20and%20I%27m%20interested%20in%20Social%20Media%20Management.%20Can%20we%20discuss%3F",
        schemaName: 'Social Media Management in Badarpur Area',
        schemaDesc: 'Professional social media management for businesses in Badarpur area targeting Delhi NCR and Faridabad regional markets.',
    },
    {
        id: 'media-production',
        icon: Camera,
        color: 'from-red-500 to-orange-500',
        bgLight: 'bg-red-50 dark:bg-red-900/15',
        border: 'border-red-200 dark:border-red-700/30',
        iconColor: 'text-red-500',
        title: 'Media Production',
        tagline: 'Product-quality visuals that close deals before buyers arrive.',
        description: `In Badarpur's competitive trade landscape, buyers decide before they even step foot in your yard. Our product and facility photography, promotional video reels, and brand story documentaries transform your business into a premium, trustworthy brand that wins orders online. Whether you are showcasing granite slabs, a logistics fleet, or a real estate project near the Badarpur border — high-impact media that lives permanently on your website, Google Business Profile, and social channels is your most powerful sales tool.`,
        highlights: [
            'Product & stock photography',
            'Facility & yard/floor walkthroughs',
            'Promotional video reels & shorts',
            'Drone footage for real estate & logistics',
            'Brand story documentary production',
            'Google Business Profile photo updates',
        ],
        cta: 'Book a Media Shoot for Badarpur',
        href: `/in/${LOCATION_SLUG}/media-production`,
        servicePage: '/services/media-production',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20and%20I%27d%20like%20to%20discuss%20product%20photography%20or%20video%20production.%20Can%20we%20schedule%20a%20shoot%3F",
        schemaName: 'Media Production Services in Badarpur Area',
        schemaDesc: 'Product photography, facility videography, and brand media production for businesses in Badarpur, New Delhi.',
    },
    {
        id: 'it-hardware',
        icon: HardDrive,
        color: 'from-slate-500 to-gray-400',
        bgLight: 'bg-slate-50 dark:bg-slate-900/15',
        border: 'border-slate-200 dark:border-slate-700/30',
        iconColor: 'text-slate-500',
        title: 'IT Hardware & Infrastructure',
        tagline: 'Wholesale IT hardware sourced directly for Badarpur businesses.',
        description: `Leveraging our deep supplier network across Delhi NCR, we source laptops, desktops, servers, networking equipment, CCTV surveillance systems, and enterprise software at near-wholesale prices for businesses in Badarpur and the Faridabad border area. No middlemen, fully transparent pricing, and fast delivery across South Delhi and NCR. Whether you are setting up a new trade office, a logistics dispatch centre, or a warehouse management system — we bring enterprise-grade hardware at honest prices.`,
        highlights: [
            'Laptops, desktops & servers at wholesale',
            'CCTV & security surveillance systems',
            'Office networking & Wi-Fi infrastructure',
            'Software licensing, ERP & IT AMC',
            'Biometric attendance & access control',
            'Same-day delivery across South Delhi & NCR',
        ],
        cta: 'Source IT Hardware in Badarpur',
        href: `/in/${LOCATION_SLUG}/it-hardware`,
        servicePage: '/services/it-hardware',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20and%20I%27d%20like%20to%20enquire%20about%20IT%20hardware%20sourcing%20%E2%80%94%20laptops%2C%20servers%2C%20CCTV%2C%20or%20networking%20equipment.",
        schemaName: 'IT Hardware Services in Badarpur Area',
        schemaDesc: 'IT hardware procurement, CCTV, networking, and IT infrastructure setup for businesses in Badarpur, New Delhi.',
    },
    {
        id: 'content',
        icon: FileText,
        color: 'from-teal-500 to-cyan-400',
        bgLight: 'bg-teal-50 dark:bg-teal-900/15',
        border: 'border-teal-200 dark:border-teal-700/30',
        iconColor: 'text-teal-500',
        title: 'Content Strategy & Copywriting',
        tagline: 'Words that make buyers trust you before they call.',
        description: `Product descriptions that rank on Google. Trade catalogues that close deals. Blog content that builds lasting authority for your Badarpur business. Our content strategy team creates hyper-local, AI-optimised content that positions your business as the definitive authority in your category across South Delhi and the NCR border region — training both Google's algorithm and AI engines like Gemini and ChatGPT to recommend you first when customers search for suppliers.`,
        highlights: [
            'Product, service & category page copy',
            'Industry blog & thought-leadership articles',
            'Trade catalogue content (EN/HI)',
            'AI-optimised E-E-A-T content structure',
            'Google Business Profile posts & updates',
            'Locality-specific landing page content',
        ],
        cta: 'Build Your Content Authority in Badarpur',
        href: `/in/${LOCATION_SLUG}/content`,
        servicePage: '/services/content',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20and%20I%27m%20interested%20in%20Content%20Strategy%20and%20SEO%20copywriting.%20Can%20we%20discuss%3F",
        schemaName: 'Content Strategy Services in Badarpur Area',
        schemaDesc: 'SEO content strategy and copywriting for traders and businesses in Badarpur, New Delhi targeting Delhi NCR and Faridabad buyers.',
    },
    {
        id: 'security',
        icon: Shield,
        color: 'from-yellow-500 to-amber-400',
        bgLight: 'bg-yellow-50 dark:bg-yellow-900/15',
        border: 'border-yellow-200 dark:border-yellow-700/30',
        iconColor: 'text-yellow-500',
        title: 'Cyber Security',
        tagline: 'Protecting your business from digital threats at the border.',
        description: `Badarpur's trade businesses — handling large transactions, logistics operations, and supplier networks — are increasingly targeted by cyber fraud, UPI scams, and data theft. We deploy enterprise-grade cybersecurity protocols including network hardening, email phishing protection, firewall configuration, and routine security audits. Protect your client data, bank credentials, financial records, and operational systems from an evolving landscape of digital threats, before it costs you more than a security subscription ever would.`,
        highlights: [
            'Network security hardening & firewalls',
            'Email phishing & scam protection',
            'Data backup & disaster recovery planning',
            'Annual penetration testing & security audits',
            'UPI fraud prevention setup',
            'Staff cybersecurity awareness training',
        ],
        cta: 'Secure Your Badarpur Business',
        href: `/in/${LOCATION_SLUG}/security`,
        servicePage: '/services/security',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20and%20I%27d%20like%20to%20discuss%20Cybersecurity%20solutions%20for%20my%20company.",
        schemaName: 'Cyber Security Services in Badarpur Area',
        schemaDesc: 'Enterprise cybersecurity, network protection, and UPI fraud prevention for businesses in Badarpur, New Delhi.',
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
        description: `Before you spend a single rupee on marketing, talk to us. Our strategy sessions are designed for Badarpur business owners who are ready to go digital but aren't sure where to invest first for the highest return. We analyse your current digital footprint, map your top competitors across South Delhi and Faridabad, and deliver a brutally honest prioritised action plan. No upselling. No jargon. No 30-day free trial traps. Just a clear, ROI-first path forward that fits your budget and your market.`,
        highlights: [
            'Free 60-minute discovery & strategy call',
            'Competitor digital gap analysis',
            'Prioritised growth roadmap for Badarpur',
            'ROI-first investment sequencing',
            'Website, SEO & ads performance audit',
            'No-obligation, no-commitment approach',
        ],
        cta: 'Book a Free Strategy Call',
        href: `/in/${LOCATION_SLUG}/consultation`,
        servicePage: '/services/consultation',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20owner%20and%20I%27d%20like%20to%20book%20a%20free%20Digital%20Strategy%20consultation%20call.",
        schemaName: 'Digital Consultation Services in Badarpur Area',
        schemaDesc: 'Free digital strategy consultation for businesses in Badarpur, New Delhi — honest, ROI-first roadmaps.',
    },
];

/* ─── SCHEMA MARKUP ─── */
function buildSchemas() {
    // 1. WebPage schema
    const webPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": `Digital Marketing & IT Services in Badarpur Delhi | BYS Marketing`,
        "description": "BYS Marketing provides web development, SEO, performance marketing, UI/UX design, IT hardware, media production, and cybersecurity for businesses in Badarpur — the gateway between South Delhi and NCR Faridabad.",
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "about": {
            "@type": "Place",
            "name": "Badarpur",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Badarpur",
                "addressRegion": "New Delhi",
                "postalCode": "110044",
                "addressCountry": "IN"
            }
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/services` },
                { "@type": "ListItem", "position": 3, "name": "Badarpur Area", "item": PAGE_URL }
            ]
        }
    };

    // 2. ItemList schema
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
                        "addressLocality": "Badarpur",
                        "addressRegion": "New Delhi",
                        "postalCode": "110044",
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

    // 3. LocalBusiness schema
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
            "latitude": 28.5021,
            "longitude": 77.2940
        },
        "areaServed": [
            { "@type": "Place", "name": "Badarpur, New Delhi" },
            { "@type": "Place", "name": "Badarpur Border, New Delhi" },
            { "@type": "Place", "name": "Sarita Vihar, New Delhi" },
            { "@type": "Place", "name": "Kalkaji, New Delhi" },
            { "@type": "Place", "name": "Faridabad, Haryana" },
            { "@type": "Place", "name": "South Delhi, India" }
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

    // 4. FAQPage schema
    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does BYS Marketing serve businesses in Badarpur, Delhi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. BYS Marketing provides dedicated digital services including web development, SEO, performance marketing, IT hardware, media production, UI/UX design, content strategy, and cybersecurity specifically for traders, logistics companies, and businesses in Badarpur and the Delhi-Faridabad border area, PIN 110044."
                }
            },
            {
                "@type": "Question",
                "name": "What are the best digital marketing options for traders in Badarpur?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For Badarpur businesses, we recommend starting with hyper-local SEO and Google Maps Pack optimisation to attract customers across South Delhi and Faridabad, combined with a WhatsApp-integrated website for instant lead capture. We then layer Google Ads and Meta Ads to fill your sales pipeline with high-intent buyers."
                }
            },
            {
                "@type": "Question",
                "name": "How much does a website cost for a Badarpur business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Websites for Badarpur businesses start at ₹15,000 for a mobile-first, SEO-optimised business website — with WhatsApp integration, Google Business Profile sync, and structured data markup included as standard. Custom eCommerce and product catalogue sites start at ₹35,000. No hidden fees."
                }
            },
            {
                "@type": "Question",
                "name": "How much does SEO cost for a business in Badarpur?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO for Badarpur businesses starts at ₹8,000 per month for local SEO and Google Business Profile optimisation targeting South Delhi and Faridabad. Comprehensive keyword campaigns targeting NCR and wider markets start at ₹18,000/month. Contact us for a custom quote tailored to your industry and competition level."
                }
            },
            {
                "@type": "Question",
                "name": "Can BYS Marketing run Google Ads for my Badarpur trade business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We run highly targeted Google Ads, Meta Ads, and LinkedIn campaigns for Badarpur traders, logistics companies, building material suppliers, and service businesses. Every campaign uses precise location targeting for the Badarpur, South Delhi, and Faridabad market zone with full conversion tracking and ROAS reporting."
                }
            },
            {
                "@type": "Question",
                "name": "What industries does BYS Marketing serve in Badarpur?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve a wide range of Badarpur industries including granite and stone trading, building materials, logistics and transport, real estate, auto spare parts, textile trading, FMCG distribution, retail, food & hospitality, and professional services. If your business operates in or around the Badarpur-Faridabad corridor, we have a tailored digital strategy for you."
                }
            }
        ]
    };

    return [webPage, itemList, localBusiness, faqPage];
}

/* ─── PAGE COMPONENT ─── */
export default function BadarpurServicesHub() {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const schemas = buildSchemas();

    return (
        <main className="bg-background-light dark:bg-[#0a0a0a] min-h-screen pb-32 overflow-hidden transition-colors">
            <SEOHead
                title="Digital Marketing & IT Services in Badarpur Delhi | BYS Marketing"
                description="BYS Marketing is Badarpur's trusted digital agency. We offer web development, SEO, performance marketing, UI/UX design, IT hardware, media production & cybersecurity for businesses in Badarpur, New Delhi — the gateway to NCR Faridabad."
                keywords="digital marketing Badarpur, web development Badarpur Delhi, SEO services Badarpur, marketing agency Badarpur border, website design Badarpur, IT company Badarpur, Google Ads Badarpur, SEO Badarpur Delhi, BYS Marketing Badarpur, digital agency South Delhi, Badarpur trade digital marketing, Faridabad border business SEO"
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
                                <span className="text-xs font-black text-primary uppercase tracking-widest">Now Serving Badarpur & Delhi-Faridabad Border</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                <MapPin size={12} className="text-primary" />
                                <span className="text-xs font-bold text-text-sub dark:text-white/60">New Delhi — 110044</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.08}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-main dark:text-white leading-[1.05] tracking-tighter mb-6 max-w-5xl">
                            Every Digital Service<br />
                            <span className="text-primary">Badarpur Businesses</span><br />
                            Actually Need.
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <p className="text-lg md:text-xl text-text-sub dark:text-white/60 leading-relaxed max-w-3xl mb-10 font-medium">
                            Badarpur is where Delhi's trade grit meets the commerce of NCR. Thousands of businesses — granite traders, logistics fleets, building suppliers, and service companies — operate right at this gateway every single day. Most of them are invisible online. We fix that. From a performance website to full-scale AI-powered SEO, we build the digital infrastructure that turns the Badarpur border into your biggest competitive advantage.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2.5 px-7 py-4 bg-primary text-white font-black text-base rounded-2xl shadow-[0_0_25px_rgba(104,54,244,0.4)] hover:shadow-[0_0_40px_rgba(104,54,244,0.6)] hover:-translate-y-0.5 transition-all duration-300 group"
                            >
                                <PhoneCall size={18} />
                                Free Consultation for Badarpur Businesses
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="https://wa.me/+918383894893?text=Hi%2C%20I%27m%20a%20business%20owner%20in%20Badarpur%20and%20want%20to%20know%20more%20about%20your%20services."
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
                                { icon: Building2, label: 'Based Near Badarpur', value: 'Since 2017' },
                                { icon: Star, label: 'Client Satisfaction', value: '98.4%' },
                                { icon: TrendingUp, label: 'Avg. ROAS for Clients', value: '4.2×' },
                                { icon: Truck, label: 'Trade Industries Served', value: '18+' },
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

            {/* ═══ SERVICES ═══ */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Our Complete Service Catalogue for Badarpur</span>
                        <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">
                            Choose Your Service.<br />
                            <span className="text-primary">Dominate Your Market.</span>
                        </h2>
                        <p className="text-text-sub dark:text-white/50 mt-4 max-w-xl mx-auto text-lg">
                            Every service below is hyper-localised for Badarpur and the Delhi-Faridabad corridor. Click any service to see the full scope and pricing.
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
                                                    {/* Primary: WhatsApp */}
                                                    <a
                                                        href={`https://wa.me/+918383894893?text=${service.whatsappMsg ?? encodeURIComponent(`Hi, I'm interested in ${service.title} for my Badarpur business.`)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`WhatsApp us about ${service.title}`}
                                                        className={`w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r ${service.color} text-white font-bold text-sm hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-md mb-3`}
                                                    >
                                                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.526 5.855L.057 23.4a.5.5 0 0 0 .61.61l5.568-1.456A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.061-1.375l-.361-.214-3.742.98.999-3.652-.235-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                                                        {service.cta}
                                                    </a>
                                                    {/* Secondary: More Info */}
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

            {/* ═══ WHY BADARPUR BUSINESSES TRUST BYS ═══ */}
            <section className="bg-white dark:bg-[#0b0b0b] transition-colors py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-14">
                            <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Local Credibility</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">
                                Why Badarpur Businesses<br /><span className="text-primary">Choose BYS</span>
                            </h2>
                            <p className="text-text-sub dark:text-white/50 mt-4 max-w-xl mx-auto text-base">
                                We understand the Badarpur market because we have worked closely with the South Delhi NCR trade corridor for years.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'We Know the Border Trade',
                                desc: 'Badarpur is not just an address — it is a critical commercial artery between South Delhi and Faridabad. We understand the buyer behaviour, the competition, and the search patterns of this unique market, and we build digital strategies that match.',
                                icon: MapPin,
                                color: 'text-primary',
                                bg: 'bg-primary/10 dark:bg-primary/20'
                            },
                            {
                                title: 'Trade & Logistics Specialists',
                                desc: 'We understand that Badarpur\'s buyers are contractors, procurement managers, retail chains, and B2B buyers — not casual window shoppers. Every campaign, website, and SEO strategy we build is designed for the real buying cycles of the border trade market.',
                                icon: Truck,
                                color: 'text-orange-500',
                                bg: 'bg-orange-50 dark:bg-orange-900/20'
                            },
                            {
                                title: 'Enterprise Quality, Startup Pricing',
                                desc: 'We are remote-first and pass every penny of saved overhead directly to our clients. Get enterprise-quality digital work at honest pricing — because your marketing budget should grow your business, not fund our glass-walled office.',
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

            {/* ═══ NEARBY AREAS SERVED ═══ */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Coverage Zone</span>
                        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white">
                            We Serve the Entire <span className="text-primary">Badarpur Corridor</span>
                        </h2>
                        <p className="text-text-sub dark:text-white/50 mt-3 max-w-xl mx-auto text-base">
                            Our digital marketing and IT services cover Badarpur and all surrounding localities along the South Delhi–NCR trade route.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Badarpur', 'Badarpur Border', 'Sarita Vihar', 'Jasola', 'Kalkaji',
                            'Govindpuri', 'Tughlakabad', 'Sangam Vihar', 'Faridabad Sector 11-15',
                            'Mathura Road', 'Mohan Estate', 'Mohan Cooperative', 'Molar Band',
                            'Greater Faridabad', 'South Delhi NCR'
                        ].map((area) => (
                            <span
                                key={area}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-semibold text-text-main dark:text-white hover:border-primary/40 hover:bg-primary/5 transition-colors"
                            >
                                <MapPin size={12} className="text-primary" />
                                {area}
                            </span>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            {/* ═══ FAQ SECTION ═══ */}
            <section className="max-w-4xl mx-auto px-6 py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Common Questions</span>
                        <h2 className="text-4xl font-black text-text-main dark:text-white">
                            FAQ for <span className="text-primary">Badarpur Businesses</span>
                        </h2>
                    </div>
                </ScrollReveal>
                <div className="flex flex-col gap-4">
                    {[
                        {
                            q: 'Does BYS Marketing serve businesses in Badarpur, Delhi?',
                            a: 'Yes. BYS Marketing provides dedicated digital services — including web development, SEO, performance marketing, IT hardware, media production, UI/UX design, content strategy, and cybersecurity — specifically for traders, logistics companies, and businesses in Badarpur and the Delhi-Faridabad border area (PIN 110044).'
                        },
                        {
                            q: 'What are the best digital marketing options for traders in Badarpur?',
                            a: 'For Badarpur businesses, we recommend starting with hyper-local SEO and Google Maps Pack optimisation to attract buyers across South Delhi and Faridabad, combined with a WhatsApp-integrated website for instant lead capture. We then layer Google Ads and Meta Ads to fill your sales pipeline with high-intent buyers actively searching for your product or service.'
                        },
                        {
                            q: 'How much does a website cost for a Badarpur business?',
                            a: 'Websites for Badarpur businesses start at ₹15,000 for a mobile-first, SEO-optimised business site with WhatsApp integration, Google Business Profile sync, and structured data markup included as standard. Custom eCommerce and product catalogue sites start at ₹35,000. No hidden fees, no recurring template costs.'
                        },
                        {
                            q: 'How much does SEO cost for a business in Badarpur?',
                            a: 'SEO for Badarpur businesses starts at ₹8,000/month for local SEO and Google Business Profile optimisation targeting South Delhi and Faridabad. Comprehensive keyword campaigns targeting NCR and wider markets start at ₹18,000/month. Contact us for a custom quote based on your industry and competition level.'
                        },
                        {
                            q: 'Can BYS Marketing run Google Ads for my Badarpur trade business?',
                            a: 'Absolutely. We run highly targeted Google Ads, Meta Ads, and LinkedIn campaigns for Badarpur traders, logistics companies, building material suppliers, and service businesses. Every campaign includes precise location targeting for the Badarpur, South Delhi, and Faridabad market zone with full conversion tracking and transparent ROAS reporting.'
                        },
                        {
                            q: 'What industries does BYS Marketing serve in Badarpur?',
                            a: 'We serve a wide range of Badarpur industries including granite and stone trading, building materials, logistics and transport, real estate, auto spare parts, textile trading, FMCG distribution, retail, food and hospitality, and professional services. If your business operates in or around the Badarpur-Faridabad corridor, we have a tailored digital strategy ready for you.'
                        },
                    ].map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.05}>
                            <details className="group bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-sm transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <span className="text-base font-bold text-text-main dark:text-white pr-4">{faq.q}</span>
                                    <ArrowRight size={18} className="text-primary shrink-0 transition-transform group-open:rotate-90" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-sm text-text-sub dark:text-white/60 leading-relaxed">{faq.a}</p>
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
                                <span className="text-xs font-black text-white/70 uppercase tracking-widest">Badarpur — Gateway to NCR</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Ready to Put Badarpur<br /><span className="text-primary-light">On the Digital Map?</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                                Join Badarpur's forward-thinking businesses winning online orders, attracting South Delhi and Faridabad buyers, and building brands that outlast the competition.
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
