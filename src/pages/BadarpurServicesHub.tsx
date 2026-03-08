import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';
import BadarpurStory from '../components/BadarpurStory';
import {
    Code2, Megaphone, Search, Palette,
    MessageSquare,
    ArrowRight, MapPin, PhoneCall
} from 'lucide-react';

/* ─── SERVICE DATA ─── */
const LOCATION_NAME = 'Badarpur Area';
const LOCATION_SLUG = 'badarpur-area';
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
        description: `We build blazing-fast, conversion-optimised websites for Badarpur businesses — from granite traders to logistics firms. Every site is engineered with semantic HTML for AI crawlers and structured data so your business appears in Google's rich results. Mobile-first, WCAG-compliant, and built to outlast your competitors.`,
        highlights: ['Custom React / Next.js architecture', 'AI-ready semantic structure', 'Google Core Web Vitals optimised', 'Google Business Profile sync'],
        cta: 'Get a Website for Badarpur',
        href: `/in/${LOCATION_SLUG}/web-development`,
        servicePage: '/services/web-development',
        whatsappMsg: "Hi%2C%20I%27m%20a%20business%20in%20Badarpur%20and%20I%27m%20interested%20in%20Website%20Development%20services.%20Can%20we%20discuss%3F",
        schemaName: 'Web Development Services in Badarpur Delhi',
        schemaDesc: 'Custom website development for traders, logistics companies, and businesses in Badarpur, New Delhi.',
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
        description: `Dominate the search results in Badarpur. We deploy hyper-local SEO strategies targeting the exact queries buyers use to find suppliers and services at the Delhi-NCR border. Includes local schema, Google Maps dominance, and AI Overview optimisation.`,
        highlights: ['Hyper-local Badarpur keyword clusters', 'Google Maps Pack ranking', 'AI Overview / GEO optimisation', 'Competitor gap analysis'],
        cta: 'Rank Higher in Badarpur',
        href: `/in/${LOCATION_SLUG}/seo`,
        servicePage: '/services/seo',
        whatsappMsg: "Hi%2C%20I%27m%20a%20business%20in%20Badarpur%20and%20I%27m%20interested%20in%20SEO%20services%20to%20rank%20higher%20on%20Google.%20Can%20we%20talk%3F",
        schemaName: 'SEO Services in Badarpur Delhi',
        schemaDesc: 'Hyper-local search engine optimisation for businesses in Badarpur targeting clients in Delhi and Faridabad.',
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
        description: `Google Ads, Meta Ads, and LinkedIn campaigns built for Badarpur's trade and service ecosystem. Whether you are a local supplier or a regional distributor — we architect campaigns with military-grade attribution and transparent ROAS reporting.`,
        highlights: ['Google Ads (Search + Shopping)', 'Meta Ads for local lead gen', 'LinkedIn for B2B trade reach', 'Real-time ROAS dashboards'],
        cta: 'Launch Badarpur Ad Campaigns',
        href: `/in/${LOCATION_SLUG}/digital-marketing`,
        servicePage: '/services/digital-marketing',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20interested%20in%20running%20Google%20or%20Meta%20Ads.%20Can%20we%20discuss%20a%20performance%20marketing%20plan%3F",
        schemaName: 'Digital Marketing Services in Badarpur Area',
        schemaDesc: 'Performance marketing, Google Ads, and Meta Ads for businesses in Badarpur area, New Delhi.',
    },
    {
        id: 'design',
        icon: Palette,
        color: 'from-pink-500 to-rose-400',
        bgLight: 'bg-pink-50 dark:bg-pink-900/15',
        border: 'border-pink-200 dark:border-pink-700/30',
        iconColor: 'text-pink-500',
        title: 'UI/UX Design',
        tagline: 'Premium digital identity for Badarpur brands.',
        description: `We design intuitive, premium digital experiences that reflect the quality of your product. For Badarpur's trade-led businesses — from stone works to retail — a professional UI signals trust instantly. We handle everything from brand identity to full UX product design.`,
        highlights: ['Trade-specific UX research', 'Figma-to-production delivery', 'Conversion-optimised layouts', 'Catalogue & product showcase design'],
        cta: 'Elevate Your Brand Design',
        href: `/in/${LOCATION_SLUG}/design`,
        servicePage: '/services/design',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20and%20I%27m%20looking%20for%20UI%2FUX%20Design%20and%20brand%20identity%20work.%20Can%20we%20discuss%3F",
        schemaName: 'UI UX Design Services in Badarpur Area',
        schemaDesc: 'Premium UI/UX design and brand identity for traders and businesses in the Badarpur area.',
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
        description: `Your social presence is your 24/7 shop windows at the border. We manage Instagram, Facebook, LinkedIn, and WhatsApp Business — creating content that accurately represents your scale and builds trust with buyers across the NCR. We handle the content, you handle the growth.`,
        highlights: ['Instagram & Facebook content', 'LinkedIn professional positioning', 'WhatsApp Business automation', 'Monthly performance reports'],
        cta: 'Grow Your Social Presence',
        href: `/in/${LOCATION_SLUG}/social`,
        servicePage: '/services/social',
        whatsappMsg: "Hi%2C%20I%27m%20a%20Badarpur%20business%20and%20I%27m%20interested%20in%20Social%20Media%20Management.%20Can%20we%20discuss%3F",
        schemaName: 'Social Media Management in Badarpur Area',
        schemaDesc: 'Professional social media management for businesses in Badarpur area targeting Delhi NCR and regional markets.',
    },
];

/* ─── SCHEMA MARKUP ─── */
function buildSchemas() {
    const webPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": `Digital Marketing & IT Services in Badarpur Delhi | BYS Marketing`,
        "description": "BYS Marketing offers web development, SEO, digital marketing, and UI/UX design for businesses in the Badarpur area, New Delhi - the gateway to NCR.",
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

    const itemList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `Digital Marketing & IT Services for ${LOCATION_NAME}`,
        "description": `Services offered by BYS Marketing for businesses in ${LOCATION_NAME}, New Delhi.`,
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
                        "streetAddress": "Okhla Industrial Area",
                        "addressLocality": "New Delhi",
                        "addressRegion": "Delhi",
                        "postalCode": "110020",
                        "addressCountry": "IN"
                    }
                }
            }
        }))
    };

    const FAQPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does BYS Marketing serve businesses in Badarpur area?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. BYS Marketing provides dedicated digital services including web development, SEO, and performance marketing specifically for traders and businesses in the Badarpur area and near the Delhi-Faridabad border."
                }
            },
            {
                "@type": "Question",
                "name": "What are the best marketing options for traders in Badarpur?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For Badarpur businesses, we recommend hyper-local SEO and Google Maps optimization to attract customers across South Delhi and Faridabad, combined with robust WhatsApp-integrated websites."
                }
            }
        ]
    };

    return [webPage, itemList, FAQPage];
}

export default function BadarpurServicesHub() {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const schemas = buildSchemas();

    return (
        <main className="bg-background-light dark:bg-[#0a0a0a] min-h-screen pb-32 overflow-hidden transition-colors">
            <SEOHead
                title="Digital Marketing & IT Services in Badarpur Delhi | BYS Marketing"
                description="BYS Marketing is Badarpur's trusted digital partner. We offer web development, SEO, performance marketing, and branding for businesses in Badarpur and the Delhi-NCR border."
                keywords="digital marketing Badarpur, web development Badarpur Delhi, SEO services Badarpur, marketing agency Badarpur border, website design Badarpur"
                url={PAGE_URL}
                schema={schemas}
            />

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/5 dark:from-primary/20 pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center sm:text-left">
                    <ScrollReveal>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20">
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs font-black text-primary uppercase tracking-widest">Gateway to NCR — Badarpur</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                <MapPin size={12} className="text-primary" />
                                <span className="text-xs font-bold text-text-sub dark:text-white/60">New Delhi — 110044</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.08}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-main dark:text-white leading-[1.05] tracking-tighter mb-6">
                            The Only Digital Hub<br />
                            <span className="text-primary">Badarpur Area</span><br />
                            Ever Needed.
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <p className="text-lg md:text-xl text-text-sub dark:text-white/60 leading-relaxed max-w-3xl mb-10 font-medium">
                            Badarpur is where Delhi's industrial grit meets the trade flow of NCR. We build the digital infrastructure that ensures your business isn't just a transit point, but a destination.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-white font-black rounded-2xl shadow-floating hover:-translate-y-0.5 transition-all text-base">
                                <PhoneCall size={18} /> Free Consultation for Badarpur
                                <ArrowRight size={16} />
                            </Link>
                            <a href={`https://wa.me/+918383894893?text=Hi, I'm a business in Badarpur and I'm interested in your services.`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-7 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-main dark:text-white font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-base">
                                WhatsApp Us Now
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* STORY NARRATIVE */}
            <div className="max-w-7xl mx-auto px-6">
                <BadarpurStory location="Badarpur Area" />
            </div>

            {/* SERVICES GRID */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-black text-primary uppercase tracking-widest block mb-3">Service Catalogue for Badarpur</span>
                        <h2 className="text-4xl md:text-5xl font-black">Dominate the <span className="text-primary">Border Trade.</span></h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <ScrollReveal key={service.id} delay={i * 0.05}>
                                <div className={`glass-panel p-8 rounded-3xl border ${service.border} ${service.bgLight} h-full flex flex-col group hover:-translate-y-1 transition-all`}>
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <Icon size={26} />
                                    </div>
                                    <h3 className="text-2xl font-black mb-2">{service.title}</h3>
                                    <p className={`text-sm font-bold ${service.iconColor} mb-4 italic`}>{service.tagline}</p>
                                    <p className="text-text-sub dark:text-white/60 mb-6 text-sm flex-1">{service.description}</p>
                                    <Link to={service.servicePage} className={`mt-auto inline-flex items-center gap-2 font-black text-sm ${service.iconColor} group-hover:gap-3 transition-all`}>
                                        Explore Strategy <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="max-w-5xl mx-auto px-6 mt-20">
                <div className="relative rounded-[2.5rem] bg-black text-white p-10 md:p-16 text-center overflow-hidden border border-white/10">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                    <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Ready to Scale your <br /><span className="text-primary-light">Badarpur Business?</span></h2>
                    <p className="text-white/60 mb-10 text-lg relative z-10">Reach out today for a free digital audit of your business in the Badarpur trade cluster.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-primary rounded-2xl font-black text-xl shadow-glow-purple hover:-translate-y-1 transition-all relative z-10">
                        Start Now <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
