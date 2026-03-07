import ScrollReveal from '../components/ScrollReveal';
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Layout, Sparkles, ArrowRight, Search, Monitor, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Waves from '../components/ReactBits/Waves';
import templatesData from '../data/templates.json';

const templates = templatesData;

// ─── CLIENT WEBSITES (PROOF OF WORK — PLACEHOLDERS) ───
const clientWork = [
    { name: 'TM Production', category: 'Media Production', desc: 'Full-scale media production website with booking system & portfolio showcase.', placeholder: true },
    { name: 'NovaTech Solutions', category: 'SaaS Platform', desc: 'Custom SaaS dashboard with analytics, user management, and subscription flow.', placeholder: true },
    { name: 'Luxe & Co Real Estate', category: 'Real Estate', desc: 'Luxury property listing site with advanced filters, virtual tours, and lead gen.', placeholder: true },
    { name: 'FreshBite Restaurants', category: 'E-Commerce / F&B', desc: 'Multi-branch restaurant ordering platform with delivery tracking integration.', placeholder: true },
];

const allCategories = ['All', ...Array.from(new Set(templates.map(t => t.category)))];

export default function WebsiteDemos() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(12);
    const observerTarget = useRef<HTMLDivElement>(null);

    const filtered = templates.filter(t => {
        const matchCat = activeFilter === 'All' || t.category === activeFilter;
        const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    const visibleTemplates = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    // Reset pagination when searching or filtering
    useEffect(() => {
        setVisibleCount(12);
    }, [activeFilter, searchQuery]);

    // Intersection Observer for Infinite Scroll Lazy Loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setTimeout(() => {
                        setVisibleCount(prev => prev + 12);
                    }, 300); // Slight delay for graceful gradual loading
                }
            },
            { threshold: 0.1, rootMargin: '600px' }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => observer.disconnect();
    }, [hasMore, filtered.length]);

    return (
        <main className="flex flex-col gap-16 lg:gap-24 px-6 pt-8 max-w-[1280px] mx-auto w-full pb-40">
            <SEOHead
                title="Website Demos & Templates | BYS Marketing"
                description="Explore our curated collection of premium website templates and live client work. From SaaS dashboards to agency portfolios — see the quality of BYS Marketing's web development."
                keywords="website demos, web design templates, BYS Marketing portfolio, premium website templates, SaaS templates, agency websites, Delhi NCR web development"
            />

            {/* ─── HERO ─── */}
            <section className="relative mt-4 text-center pb-24 rounded-3xl overflow-hidden glass-panel border-white/60 dark:border-white/10 p-10 mb-16 shadow-neumorphic dark:shadow-neumorphic-dark">
                <div className="absolute inset-0 z-0">
                    <Waves
                        lineColor="rgba(104, 54, 244, 0.15)"
                        backgroundColor="transparent"
                        waveSpeedX={0.02}
                        waveSpeedY={0.01}
                        waveAmpX={30}
                        waveAmpY={20}
                        friction={0.9}
                        tension={0.01}
                        maxCursorMove={100}
                        xGap={15}
                        yGap={15}
                    />
                </div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 backdrop-blur-md mb-6 mx-auto shadow-sm">
                    <Sparkles size={14} className="text-primary" />
                    <span className="text-xs font-bold text-primary tracking-wide uppercase">Premium Design Collection</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark mb-6 max-w-4xl mx-auto">
                    Websites We <span className="text-primary">Build.</span><br />
                    Templates We <span className="text-primary">Love.</span>
                </h1>
                <p className="text-text-sub dark:text-text-sub-dark text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8">
                    Browse live demos, explore real client work, and find the perfect starting point for your next digital project. Every build is mobile-first, SEO-optimized, and blazing fast.
                </p>

                {/* ─── SEARCH ─── */}
                <div className="max-w-xl mx-auto relative z-10">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400"><Search size={20} /></div>
                    <input
                        type="text"
                        placeholder="Search templates by name or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-xl border-2 border-gray-100 dark:border-white/10 shadow-glass-strong dark:shadow-neumorphic-sm-dark focus:border-primary outline-none text-text-main dark:text-text-main-dark font-medium transition-all"
                    />
                </div>
            </section>

            {/* ─── CLIENT WORK (PROOF OF WORK) ─── */}
            <section>
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Our Latest Builds</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mb-4">Real Websites. Real Results.</h2>
                        <p className="text-text-sub dark:text-text-sub-dark max-w-lg mx-auto">These are some of our most recent client websites — built, optimized, and launched by BYS Marketing. We have many more like these.</p>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clientWork.map((work, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="group relative rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-floating hover:-translate-y-1 transition-all duration-300">
                                {/* Placeholder thumbnail */}
                                <div className="h-52 bg-gradient-to-br from-primary/10 to-purple-500/5 dark:from-primary/20 dark:to-purple-900/10 flex items-center justify-center">
                                    <div className="text-center">
                                        <Monitor size={48} className="text-primary/40 mx-auto mb-3" />
                                        <p className="text-xs font-bold text-primary/60 uppercase tracking-widest">Screenshot Coming Soon</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-black text-primary uppercase tracking-widest">{work.category}</span>
                                    <h3 className="text-xl font-black text-text-main dark:text-white mt-1 mb-2">{work.name}</h3>
                                    <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed mb-4">{work.desc}</p>
                                    <a
                                        href={`https://wa.me/+919876543210?text=Hi%2C%20I%20want%20a%20website%20like%20${encodeURIComponent(work.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                                    >
                                        Request a similar website <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ─── TEMPLATE GALLERY ─── */}
            <section>
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3 block">Design Templates</span>
                        <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mb-4">Pick a Style. We'll Build It.</h2>
                        <p className="text-text-sub dark:text-text-sub-dark max-w-lg mx-auto">Browse premium templates — and tell us which one you like. We'll customize it into a fully-functional website for your brand.</p>
                    </div>
                </ScrollReveal>

                {/* ─── Category Filters ─── */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {allCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeFilter === cat
                                ? 'bg-primary text-white shadow-lg shadow-purple-200/50 dark:shadow-purple-900/40'
                                : 'bg-white dark:bg-white/5 text-text-sub dark:text-text-sub-dark border border-gray-200 dark:border-white/10 hover:border-primary/30 hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ─── Template Grid ─── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleTemplates.map((tpl, i) => (
                        <ScrollReveal key={tpl.name} delay={i * 0.05}>
                            <div className="group bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-floating hover:-translate-y-2 transition-all duration-300 flex flex-col">
                                {/* Image */}
                                <div className="h-52 bg-gray-100 dark:bg-black/50 relative overflow-hidden">
                                    <img
                                        src={tpl.image}
                                        alt={`${tpl.name} - ${tpl.category} website template by BYS Marketing`}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                                        <a href={tpl.demo} target="_blank" rel="noopener noreferrer" title={`Preview ${tpl.name} template`} className="w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-xl translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            <ExternalLink size={20} className="text-primary" />
                                        </a>
                                    </div>
                                    {/* Speed badge */}
                                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full px-2.5 py-1 flex items-center gap-1.5 border border-white/50 dark:border-white/10">
                                        <span className={`w-2 h-2 rounded-full ${tpl.speed >= 95 ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                        <span className="text-[10px] font-black text-text-main dark:text-white">{tpl.speed}/100</span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{tpl.category}</span>
                                    <h3 className="font-bold text-text-main dark:text-text-main-dark text-lg leading-tight mb-3">{tpl.name}</h3>
                                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100 dark:border-white/5">
                                        <a
                                            href={tpl.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 font-bold text-sm text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                        >
                                            Live Preview
                                        </a>
                                        <a
                                            href={`https://wa.me/+919876543210?text=Hi%2C%20I%20want%20the%20${encodeURIComponent(tpl.name)}%20design%20for%20my%20brand`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-colors shadow-sm"
                                        >
                                            Request This
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-16">
                        <Layout size={48} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">No templates found</h3>
                        <p className="text-text-sub dark:text-text-sub-dark">Try adjusting your filters or search terms.</p>
                    </div>
                )}

                {hasMore && (
                    <div ref={observerTarget} className="flex justify-center items-center py-12">
                        <Loader2 className="animate-spin text-primary/60" size={32} />
                    </div>
                )}
            </section>

            {/* ─── BOTTOM CTA ─── */}
            <section>
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-white/10 p-8 md:p-12 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(104,54,244,0.3),transparent_70%)] pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Don't see what you need?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">We build fully custom websites from scratch. Tell us your vision and we'll bring it to life — pixel-perfect and performance-obsessed.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/+919876543210?text=Hi%2C%20I%20want%20a%20fully%20custom%20website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-[0_0_20px_rgba(104,54,244,0.4)] hover:bg-primary-dark transition-all"
                            >
                                Get a Custom Quote
                            </a>
                            <Link to="/services/web-development" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                                View Web Dev Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
