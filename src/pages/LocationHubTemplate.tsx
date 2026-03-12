import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';
import {
    ArrowRight, MapPin, Star, CheckCircle2, PhoneCall, TrendingUp,
    Building2, Briefcase, Truck, Zap, Info,
    type LucideIcon,
} from 'lucide-react';
import type { LocationHub } from '../data/locationHubData';
import { SHARED_SERVICES } from '../data/locationHubData';

/* ─── Map icon name strings to Lucide components ─── */
const ICON_MAP: Record<string, LucideIcon> = {
    Building2, Star, TrendingUp, Briefcase, Truck, MapPin,
};

const BASE_URL = 'https://bys.marketing';

/* ─── Props ─── */
interface Props {
    location: LocationHub;
}

/* ─── Schema builder ─── */
function buildSchemas(loc: LocationHub) {
    const PAGE_URL = `${BASE_URL}/in/${loc.slug}`;

    const webPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        "url": PAGE_URL,
        "name": loc.seoTitle,
        "description": loc.seoDescription,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "about": {
            "@type": "Place",
            "name": loc.name,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": loc.name,
                "addressRegion": loc.state,
                "postalCode": loc.pin,
                "addressCountry": "IN"
            }
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/services` },
                { "@type": "ListItem", "position": 3, "name": loc.name, "item": PAGE_URL }
            ]
        }
    };

    const itemList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `All Digital Marketing & IT Services for ${loc.name}`,
        "description": `Complete list of services offered by BYS Marketing for businesses in ${loc.name}, ${loc.state}.`,
        "url": PAGE_URL,
        "numberOfItems": SHARED_SERVICES.length,
        "itemListElement": SHARED_SERVICES.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": `${s.schemaTitle} ${loc.name}`,
            "description": `${s.title} for businesses in ${loc.name}, ${loc.state}.`,
            "url": `${PAGE_URL}/${s.id}`,
            "item": {
                "@type": "Service",
                "name": `${s.schemaTitle} ${loc.name}`,
                "url": `${PAGE_URL}/${s.id}`,
                "areaServed": {
                    "@type": "Place",
                    "name": loc.name,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": loc.name,
                        "addressRegion": loc.state,
                        "postalCode": loc.pin,
                        "addressCountry": "IN"
                    }
                },
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "BYS Marketing",
                    "url": BASE_URL,
                    "telephone": "+918383894893",
                }
            }
        }))
    };

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
            "latitude": loc.lat,
            "longitude": loc.lng
        },
        "areaServed": loc.nearbyAreas.slice(0, 6).map(a => ({
            "@type": "Place", "name": `${a}, ${loc.state}`
        })),
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing & IT Services",
            "itemListElement": SHARED_SERVICES.map(s => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": s.title,
                    "url": `${PAGE_URL}/${s.id}`
                }
            }))
        },
        "sameAs": [
            "https://www.facebook.com/bysmarketing",
            "https://www.instagram.com/bysmarketing",
            "https://linkedin.com/company/bysmarketing"
        ]
    };

    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": loc.faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };

    return [webPage, itemList, localBusiness, faqPage];
}

/* ─── COMPONENT ─── */
export default function LocationHubTemplate({ location: loc }: Props) {
    useEffect(() => { window.scrollTo(0, 0); }, [loc.slug]);

    const schemas = buildSchemas(loc);
    const PAGE_URL = `${BASE_URL}/in/${loc.slug}`;

    return (
        <main className="bg-background-light dark:bg-[#0a0a0a] min-h-screen pb-32 overflow-hidden transition-colors">
            <SEOHead
                title={loc.seoTitle}
                description={loc.seoDescription}
                keywords={loc.seoKeywords}
                url={PAGE_URL}
                schema={schemas}
            />

            {/* ═══ HERO ═══ */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/5 dark:from-primary/20 dark:via-transparent dark:to-orange-500/10 pointer-events-none" />
                <div className="absolute top-[20%] right-[-8%] w-[500px] h-[500px] bg-primary/8 dark:bg-primary/12 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-orange-400/8 dark:bg-orange-400/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 lg:mb-20">
                        {/* ── Left: Content ── */}
                        <div>
                            <ScrollReveal>
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30">
                                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-xs font-black text-primary uppercase tracking-widest">{loc.heroTagline}</span>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                        <MapPin size={12} className="text-primary" />
                                        <span className="text-xs font-bold text-text-sub dark:text-white/60">{loc.state} — {loc.pin}</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.08}>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-main dark:text-white leading-[1.05] tracking-tighter mb-6 relative z-10">
                                    {loc.heroHeadingLine1}<br />
                                    <span className="text-primary">{loc.heroHeadingLine2}</span><br />
                                    {loc.heroHeadingLine3}
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={0.15}>
                                <p className="text-lg md:text-xl text-text-sub dark:text-white/60 leading-relaxed max-w-xl mb-10 font-medium relative z-10">
                                    {loc.heroDescription}
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <div className="flex flex-wrap gap-4 relative z-10">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2.5 px-7 py-4 bg-primary text-white font-black text-base rounded-2xl shadow-[0_0_25px_rgba(104,54,244,0.4)] hover:shadow-[0_0_40px_rgba(104,54,244,0.6)] hover:-translate-y-0.5 transition-all duration-300 group"
                                    >
                                        <PhoneCall size={18} />
                                        Free Consultation
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <a
                                        href={`https://wa.me/+918383894893?text=${encodeURIComponent(`Hi, I'm a business owner in ${loc.name} and want to know more about your services.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 px-7 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-main dark:text-white font-bold text-base rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
                                    >
                                        WhatsApp Us
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* ── Right: Image ── */}
                        <ScrollReveal delay={0.1} className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center -order-1 lg:order-none max-w-2xl mx-auto lg:max-w-none">
                            {/* Decorative background shapes */}
                            <div className="absolute inset-4 lg:inset-8 bg-gradient-to-tr from-primary/30 to-orange-500/20 rounded-[3rem] md:rounded-[4rem] rotate-6 scale-105 pointer-events-none" />
                            <div className="absolute inset-4 lg:inset-8 bg-white/5 border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] -rotate-3 backdrop-blur-sm pointer-events-none" />
                            
                            {/* Main image container */}
                            <div className="relative w-full h-full lg:absolute lg:inset-0 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group z-0">
                                <img
                                    src={loc.heroImage}
                                    alt={loc.heroImageAlt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-[#0a0a0a] via-black/10 to-transparent opacity-80" />
                                
                                {/* Overlay Card */}
                                <div className="absolute left-6 bottom-6 right-6 md:left-8 md:bottom-8 lg:right-1/4">
                                    <div className="glass-panel p-4 md:p-5 rounded-2xl border border-white/20 backdrop-blur-md shadow-xl bg-white/10 dark:bg-black/20">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-lg">
                                                <MapPin size={20} className="md:w-6 md:h-6" />
                                            </div>
                                            <div>
                                                <p className="text-white text-sm md:text-base font-bold leading-tight drop-shadow-md">{loc.name}</p>
                                                <p className="text-white/80 text-[10px] md:text-xs font-black uppercase tracking-widest drop-shadow-md mt-0.5">Priority Service Area</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Stats row can be full width below the grid */}
                    <ScrollReveal delay={0.28}>
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {loc.stats.map((stat, i) => {
                                const StatIcon = ICON_MAP[stat.iconName] || Building2;
                                return (
                                    <div key={i} className="glass-panel rounded-2xl p-5 border border-white/60 dark:border-white/10 text-center group hover:-translate-y-1 transition-all">
                                        <StatIcon size={20} className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                        <div className="text-2xl font-black text-text-main dark:text-white">{stat.value}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-text-sub dark:text-white/40 mt-1">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ SERVICES ═══ */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Our Complete Service Catalogue for {loc.name}</span>
                        <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">
                            Choose Your Service.<br />
                            <span className="text-primary">Dominate Your Market.</span>
                        </h2>
                        <p className="text-text-sub dark:text-white/50 mt-4 max-w-xl mx-auto text-lg">
                            Every service below is hyper-localised for {loc.name} and the surrounding areas. Click any service to see the full scope and pricing.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col gap-8">
                    {SHARED_SERVICES.map((service, i) => {
                        const Icon = service.icon;
                        const isEven = i % 2 === 0;
                        const description = service.descriptionFn(loc.name, loc.keyIndustries);
                        const whatsappMsg = encodeURIComponent(`Hi, I'm a business in ${loc.name} and I'm interested in ${service.title} services. Can we discuss?`);

                        return (
                            <ScrollReveal key={service.id} delay={0.05}>
                                <article
                                    id={service.id}
                                    className={`group relative rounded-3xl border ${service.border} ${service.bgLight} overflow-hidden hover:shadow-floating hover:-translate-y-1 transition-all duration-300`}
                                >
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
                                                    {description}
                                                </p>

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
                                                        {loc.name}
                                                    </div>
                                                    <h4 className="text-base font-bold text-text-main dark:text-white mb-4 leading-tight">
                                                        {service.title}
                                                    </h4>
                                                    <a
                                                        href={`https://wa.me/+918383894893?text=${whatsappMsg}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`WhatsApp us about ${service.title}`}
                                                        className={`w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r ${service.color} text-white font-bold text-sm hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-md mb-3`}
                                                    >
                                                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.526 5.855L.057 23.4a.5.5 0 0 0 .61.61l5.568-1.456A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.061-1.375l-.361-.214-3.742.98.999-3.652-.235-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                                                        {service.ctaPrefix} {loc.name}
                                                    </a>
                                                    <Link
                                                        to={service.servicePage}
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

            {/* ═══ WHY [LOCATION] BUSINESSES TRUST BYS ═══ */}
            <section className="bg-white dark:bg-[#0b0b0b] transition-colors py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-14">
                            <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Local Credibility</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">
                                Why {loc.name} Businesses<br /><span className="text-primary">Choose BYS</span>
                            </h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {loc.trustCards.map((card, i) => {
                            const CardIcon = ICON_MAP[card.iconName] || MapPin;
                            return (
                                <ScrollReveal key={i} delay={i * 0.08}>
                                    <div className="glass-panel rounded-3xl p-8 border border-white/60 dark:border-white/10 h-full hover:-translate-y-1 transition-all group">
                                        <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                            <CardIcon size={26} className={card.color} />
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">{card.title}</h3>
                                        <p className="text-text-sub dark:text-white/55 text-sm leading-relaxed">{card.description}</p>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ NEARBY AREAS SERVED ═══ */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Coverage Zone</span>
                        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white">
                            We Serve the Entire <span className="text-primary">{loc.name} Zone</span>
                        </h2>
                        <p className="text-text-sub dark:text-white/50 mt-3 max-w-xl mx-auto text-base">
                            Our digital marketing and IT services cover {loc.name} and all surrounding localities.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-3">
                        {loc.nearbyAreas.map(area => (
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

            {/* ═══ FAQ ═══ */}
            <section className="max-w-4xl mx-auto px-6 py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-black text-primary tracking-widest uppercase mb-3 block">Common Questions</span>
                        <h2 className="text-4xl font-black text-text-main dark:text-white">
                            FAQ for <span className="text-primary">{loc.name} Businesses</span>
                        </h2>
                    </div>
                </ScrollReveal>
                <div className="flex flex-col gap-4">
                    {loc.faqs.map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.05}>
                            <details className="group bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-sm transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <span className="text-base font-bold text-text-main dark:text-white pr-4">{faq.question}</span>
                                    <ArrowRight size={18} className="text-primary shrink-0 transition-transform group-open:rotate-90" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-sm text-text-sub dark:text-white/60 leading-relaxed">{faq.answer}</p>
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
                                <span className="text-xs font-black text-white/70 uppercase tracking-widest">{loc.ctaBadge}</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                                {loc.ctaHeading}<br /><span className="text-primary-light">{loc.name} Digitally?</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                                {loc.ctaSub}
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
