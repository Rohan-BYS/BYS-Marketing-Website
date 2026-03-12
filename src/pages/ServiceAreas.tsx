import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ScrollReveal from '../components/ScrollReveal';

/* ── City data: landmark image + services snippet ── */
const SERVICE_TAGS = ['Web Development', 'SEO', 'Google Ads', 'UI/UX Design', 'IT Hardware', 'Social Media'];

const cities = [
    {
        name: 'Okhla Industrial Area',
        slug: 'okhla-industrial-area',
        hubRoute: '/in/okhla-industrial-area',
        state: 'New Delhi',
        tagline: 'India\'s largest industrial & manufacturing cluster',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80&auto=format',
        imageAlt: 'Delhi skyline representing Okhla Industrial Area, New Delhi',
        highlight: true,
    },
    {
        name: 'Badarpur Area',
        slug: 'badarpur-area',
        hubRoute: '/in/badarpur-area',
        state: 'New Delhi',
        tagline: 'Gateway to Delhi-NCR trade & logistics',
        image: 'https://images.unsplash.com/photo-1590066348630-9759be752077?w=600&q=80&auto=format',
        imageAlt: 'Badarpur border area Delhi NCR trade junction',
    },
    {
        name: 'Connaught Place',
        slug: 'connaught-place',
        hubRoute: '/in/connaught-place',
        state: 'New Delhi',
        tagline: 'Heart of Delhi\'s business & commercial hub',
        image: 'https://images.unsplash.com/photo-1545085563-c6bcf79c1bce?w=600&q=80&auto=format',
        imageAlt: 'Connaught Place New Delhi - India Gate area',
    },
    {
        name: 'Gurugram',
        slug: 'gurugram',
        hubRoute: '/in/gurugram',
        state: 'Haryana',
        tagline: 'Millennium City & India\'s startup capital',
        image: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=600&q=80&auto=format',
        imageAlt: 'Gurugram Haryana skyline - Cyber City corporate towers',
    },
    {
        name: 'Noida',
        slug: 'noida',
        hubRoute: '/in/noida',
        state: 'Uttar Pradesh',
        tagline: 'IT & tech corridor of Delhi NCR',
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80&auto=format',
        imageAlt: 'Noida Uttar Pradesh tech park skyline',
    },
    {
        name: 'Lajpat Nagar',
        slug: 'lajpat-nagar',
        hubRoute: '/in/lajpat-nagar',
        state: 'New Delhi',
        tagline: 'Delhi\'s premium retail & fashion district',
        image: 'https://images.unsplash.com/photo-1598164984293-b0879e0e0ee3?w=600&q=80&auto=format',
        imageAlt: 'Lajpat Nagar market New Delhi retail district',
    },
    {
        name: 'Faridabad',
        slug: 'faridabad',
        hubRoute: '/in/faridabad',
        state: 'Haryana',
        tagline: 'Manufacturing powerhouse of Haryana',
        image: 'https://images.unsplash.com/photo-1624132903946-3a1278e4b0d3?w=600&q=80&auto=format',
        imageAlt: 'Faridabad Haryana industrial manufacturing area',
    },
    {
        name: 'Karol Bagh',
        slug: 'karol-bagh',
        hubRoute: '/in/karol-bagh',
        state: 'New Delhi',
        tagline: 'Bustling electronics & retail market hub',
        image: 'https://images.unsplash.com/photo-1597735881925-8bddbe9c4905?w=600&q=80&auto=format',
        imageAlt: 'Karol Bagh Delhi busy market electronics shopping',
    },
    {
        name: 'Chandni Chowk',
        slug: 'chandni-chowk',
        hubRoute: '/in/chandni-chowk',
        state: 'New Delhi',
        tagline: 'Old Delhi\'s iconic wholesale trade capital',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80&auto=format',
        imageAlt: 'Chandni Chowk Old Delhi wholesale market Red Fort area',
    },
    {
        name: 'Nehru Place',
        slug: 'nehru-place',
        hubRoute: '/in/nehru-place',
        state: 'New Delhi',
        tagline: 'Asia\'s largest IT & electronics market',
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80&auto=format',
        imageAlt: 'Nehru Place New Delhi IT hardware electronics market',
    },
    {
        name: 'Rohini',
        slug: 'rohini',
        hubRoute: '/in/rohini',
        state: 'New Delhi',
        tagline: 'North Delhi\'s fast-growing residential & commercial hub',
        image: 'https://images.unsplash.com/photo-1624132903946-3a1278e4b0d3?w=600&q=80&auto=format',
        imageAlt: 'Rohini North Delhi sector skyline',
    },
    {
        name: 'Dwarka',
        slug: 'dwarka',
        hubRoute: '/in/dwarka',
        state: 'New Delhi',
        tagline: 'South-West Delhi\'s largest planned township',
        image: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=600&q=80&auto=format',
        imageAlt: 'Dwarka New Delhi planned township sector',
    },
    {
        name: 'Mumbai',
        slug: 'mumbai',
        hubRoute: '/in/mumbai',
        state: 'Maharashtra',
        tagline: 'India\'s financial capital & commercial hub',
        image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&q=80&auto=format',
        imageAlt: 'Mumbai Maharashtra skyline - Marine Drive Gateway of India',
    },
    {
        name: 'Bengaluru',
        slug: 'bengaluru',
        hubRoute: '/in/bengaluru',
        state: 'Karnataka',
        tagline: 'Silicon Valley of India & startup ecosystem',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80&auto=format',
        imageAlt: 'Bengaluru Karnataka tech park skyline - Silicon Valley of India',
    },
    {
        name: 'Hyderabad',
        slug: 'hyderabad',
        hubRoute: '/in/hyderabad',
        state: 'Telangana',
        tagline: 'HITEC City & pharmaceutical capital',
        image: 'https://images.unsplash.com/photo-1629468128127-14b0e3bb86dc?w=600&q=80&auto=format',
        imageAlt: 'Hyderabad Telangana HITEC City skyline Charminar',
    },
    {
        name: 'Pune',
        slug: 'pune',
        hubRoute: '/in/pune',
        state: 'Maharashtra',
        tagline: 'Oxford of the East & IT growth hub',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80&auto=format',
        imageAlt: 'Pune Maharashtra skyline IT hub Oxford of the East',
    },
    {
        name: 'Ahmedabad',
        slug: 'ahmedabad',
        hubRoute: '/in/ahmedabad',
        state: 'Gujarat',
        tagline: 'Gujarat\'s commercial heartbeat & textile capital',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format',
        imageAlt: 'Ahmedabad Gujarat commercial city textile hub',
    },
];

export default function ServiceAreas() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://bys.marketing/service-areas" }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "BYS Marketing Service Areas across India",
            "description": "BYS Marketing provides digital marketing, web development, SEO, and IT services across major cities and localities in India.",
            "url": "https://bys.marketing/service-areas",
            "itemListElement": cities.map((c, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": `Digital Marketing Services in ${c.name}`,
                "url": `https://bys.marketing${c.hubRoute}`
            }))
        }
    ];

    return (
        <main className="bg-background-light dark:bg-[#0a0a0a] min-h-screen pb-32 transition-colors">
            <SEOHead
                title="Service Areas — Digital Marketing across India | BYS Marketing"
                description="BYS Marketing provides web development, SEO, digital marketing, and IT services in Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Ahmedabad, and across India. Find your city."
                keywords="digital marketing agency India cities, BYS Marketing service areas, web development Delhi Gurugram Mumbai, SEO agency Noida Okhla Faridabad"
                url="https://bys.marketing/service-areas"
                schema={schemas}
            />

            {/* ── HERO ── */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-orange-400/5 dark:from-primary/15 pointer-events-none" />
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/6 dark:bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 mb-6">
                            <Globe size={13} className="text-primary" />
                            <span className="text-xs font-black text-primary uppercase tracking-widest">We Serve Across India</span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.08}>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-text-main dark:text-white leading-[1.05] tracking-tighter mb-6 max-w-4xl">
                            Find BYS Marketing<br />
                            <span className="text-primary">In Your City.</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.14}>
                        <p className="text-lg md:text-xl text-text-sub dark:text-white/55 max-w-2xl leading-relaxed mb-8">
                            Select your city or locality below to see our hyper-localised services, case studies, and specialist knowledge for your exact market.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── CITY GRID ── */}
            <section className="max-w-7xl mx-auto px-6 py-4 pb-20">
                {/* Okhla — featured hero card */}
                <ScrollReveal>
                    <div className="mb-6">
                        <span className="text-xs font-black text-primary tracking-widest uppercase mb-4 block">Our Home Base — Featured Location</span>
                        <Link
                            to={cities[0].hubRoute}
                            className="group relative flex flex-col md:flex-row overflow-hidden rounded-3xl border-2 border-primary/25 hover:border-primary/50 transition-all hover:shadow-[0_0_40px_rgba(104,54,244,0.2)] bg-white dark:bg-[#111]"
                        >
                            {/* Image */}
                            <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden shrink-0">
                                <img
                                    src={cities[0].image}
                                    alt={cities[0].imageAlt}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 md:to-black/10" />
                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest shadow-lg">
                                    ★ Home Base
                                </div>
                            </div>
                            {/* Content */}
                            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin size={15} className="text-primary" />
                                    <span className="text-sm font-bold text-primary">{cities[0].state}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                                    {cities[0].name}
                                </h2>
                                <p className="text-text-sub dark:text-white/55 mb-6 text-base leading-relaxed">{cities[0].tagline}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {SERVICE_TAGS.map(t => (
                                        <span key={t} className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/15">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="inline-flex items-center gap-2 font-black text-primary text-base group-hover:gap-3 transition-all">
                                    View All Okhla Services <ArrowRight size={18} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollReveal>

                {/* All other cities grid */}
                <ScrollReveal delay={0.05}>
                    <span className="text-xs font-black text-text-sub dark:text-white/40 tracking-widest uppercase mb-5 block">All Service Areas</span>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {cities.slice(1).map((city, i) => (
                        <ScrollReveal key={city.slug} delay={i * 0.04}>
                            <Link
                                to={city.hubRoute}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 dark:border-white/8 bg-white dark:bg-[#121212] hover:border-primary/30 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgba(104,54,244,0.12)] transition-all duration-300"
                            >
                                {/* City image */}
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={city.image}
                                        alt={city.imageAlt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    {/* City name on image */}
                                    <div className="absolute bottom-3 left-4 right-4">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={11} className="text-white/80 shrink-0" />
                                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{city.state}</span>
                                        </div>
                                        <h3 className="text-lg font-black text-white leading-tight  group-hover:text-primary-light transition-colors">
                                            {city.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="flex flex-col flex-1 p-4">
                                    <p className="text-xs text-text-sub dark:text-white/45 leading-relaxed mb-3 line-clamp-2">
                                        {city.tagline}
                                    </p>
                                    {/* Service tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {SERVICE_TAGS.slice(0, 3).map(t => (
                                            <span key={t} className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-gray-100 dark:bg-white/8 text-text-sub dark:text-white/50">
                                                {t}
                                            </span>
                                        ))}
                                        <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-gray-100 dark:bg-white/8 text-text-sub dark:text-white/50">
                                            +3 more
                                        </span>
                                    </div>
                                    <div className="mt-auto flex items-center gap-1.5 text-primary text-xs font-black group-hover:gap-2.5 transition-all">
                                        Explore Services <ArrowRight size={13} />
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}

                    {/* Coming soon placeholder cards */}
                    {['Chennai', 'Kolkata', 'Jaipur', 'Lucknow'].map((city, i) => (
                        <ScrollReveal key={city} delay={(cities.length + i) * 0.03}>
                            <div className="flex flex-col overflow-hidden rounded-2xl border border-dashed border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/3 opacity-60 cursor-default">
                                <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin size={28} className="text-gray-300 dark:text-white/20 mx-auto mb-2" />
                                        <span className="text-gray-400 dark:text-white/30 font-black text-sm">{city}</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 dark:text-white/25">Coming Soon</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </main>
    );
}
