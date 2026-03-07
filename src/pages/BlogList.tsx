import ScrollReveal from '../components/ScrollReveal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, ArrowRight, Search, Mail, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';

// ─── BLOG DATA ───
import { blogArticles } from '../data/blogData';

// Explicitly define the Silo categories for UI order
const silos = [
    'All',
    'AI Search & GEO',
    'Local SEO Delhi',
    'Technical SEO',
    'Performance Marketing',
    'Content & Brand'
];

export default function BlogList() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = blogArticles.filter(a => {
        const matchCat = activeCategory === 'All' || a.category === activeCategory;
        const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    const featured = filtered.length > 0 ? filtered[0] : null;
    const rest = filtered.length > 1 ? filtered.slice(1) : [];

    return (
        <main className="flex flex-col gap-12 px-6 pt-8 max-w-[1100px] mx-auto w-full pb-40">
            <SEOHead
                title="Blog — Digital Marketing, SEO & Web Development Insights"
                description="Read expert articles on SEO, digital marketing, web development, UI/UX design, and growth strategies from BYS Marketing. Actionable insights for startups and enterprises."
                keywords="digital marketing blog, SEO tips, web development articles, startup marketing guide, BYS Marketing blog, content marketing, Meta ads tracking, GEO optimization"
                url="https://bys.marketing/blog"
            />

            {/* HERO */}
            <section className="text-center mt-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 backdrop-blur-md mb-6 shadow-sm">
                    <Sparkles size={14} className="text-primary" />
                    <span className="text-xs font-bold text-primary tracking-wide uppercase">Insights & Resources</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark mb-4">
                    The BYS <span className="text-primary">Blog</span>
                </h1>
                <p className="text-text-sub dark:text-text-sub-dark text-lg font-medium max-w-xl mx-auto mb-8">
                    Actionable insights on growth, marketing, engineering, and design — written by practitioners, not theorists.
                </p>

                {/* Search */}
                <div className="max-w-md mx-auto relative mb-8">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400"><Search size={18} /></div>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-5 py-3.5 rounded-2xl bg-white dark:bg-[#1a1a1a]/80 border border-gray-100 dark:border-white/10 shadow-sm focus:border-primary outline-none text-sm font-medium text-text-main dark:text-white"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2">
                    {silos.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeCategory === cat
                                ? 'bg-primary text-white shadow-lg shadow-purple-200/50 dark:shadow-purple-900/40'
                                : 'bg-white dark:bg-white/5 text-text-sub dark:text-text-sub-dark border border-gray-200 dark:border-white/10 hover:border-primary/30 hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* NEWSLETTER BAR */}
            <ScrollReveal>
                <div className="rounded-2xl p-6 bg-gradient-to-r from-primary/10 to-purple-500/5 dark:from-primary/20 dark:to-purple-900/10 border border-purple-100 dark:border-white/10 flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Mail size={20} /></div>
                        <div>
                            <h3 className="font-bold text-sm text-text-main dark:text-white">Get weekly growth tips</h3>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark">Join 2,000+ founders and marketers. No spam.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <input type="email" placeholder="your@email.com" className="flex-1 sm:w-56 px-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 text-sm outline-none focus:border-primary text-text-main dark:text-white" />
                        <button className="px-5 py-2.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm">Subscribe</button>
                    </div>
                </div>
            </ScrollReveal>

            {/* FEATURED ARTICLE */}
            {featured && (
                <ScrollReveal>
                    <div className="glass-panel rounded-3xl overflow-hidden group border-white/60 dark:border-white/10 dark:bg-black/40 shadow-sm hover:shadow-floating transition-all duration-300 relative">
                        <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-wider shadow-lg">⭐ Featured</span>
                        <Link to={`/blog/${featured.slug}`} className="block relative aspect-video overflow-hidden">
                            <img alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={featured.image} loading="eager" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex gap-2 mb-3">
                                    <span className="px-2 py-0.5 rounded-md bg-primary/80 text-white text-[10px] font-bold uppercase tracking-wider">{featured.category}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 group-hover:text-primary-light transition-colors">{featured.title}</h2>
                                <p className="text-white/80 text-sm line-clamp-2 mb-4">{featured.description}</p>
                                <div className="flex items-center gap-4 text-xs text-white/60 font-medium">
                                    <span className="flex items-center gap-1"><CalendarDays size={14} /> {featured.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {featured.readTime} read</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </ScrollReveal>
            )}

            {/* ARTICLE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((article, i) => (
                    <ScrollReveal key={article.slug} delay={i * 0.05}>
                        <div className="glass-panel p-5 rounded-3xl border-white/60 dark:border-white/10 dark:bg-black/40 shadow-sm hover:shadow-floating hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full">
                            <Link to={`/blog/${article.slug}`} className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 block">
                                <img alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={article.image} loading="lazy" />
                            </Link>
                            <div className="flex flex-col flex-1">
                                <span className="text-[10px] font-bold text-primary uppercase mb-2 tracking-wider">{article.category}</span>
                                <Link to={`/blog/${article.slug}`} className="text-lg font-bold text-black dark:text-white leading-snug mb-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </Link>
                                <p className="text-text-sub dark:text-text-sub-dark text-xs line-clamp-2 mb-4">{article.description}</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-[10px] text-text-sub dark:text-text-sub-dark font-medium">
                                        <span className="flex items-center gap-1"><CalendarDays size={12} /> {article.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                                    </div>
                                    <Link to={`/blog/${article.slug}`} className="text-primary text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                        Read <ArrowRight size={12} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-xl font-bold text-text-main dark:text-white mb-2">No articles found</p>
                    <p className="text-text-sub dark:text-text-sub-dark text-sm">Try a different category or search term.</p>
                </div>
            )}

            {/* CROSS LINKS */}
            <ScrollReveal>
                <div className="rounded-3xl p-8 bg-gradient-to-br from-purple-50 to-white dark:from-[#1a1a1a] dark:to-black border border-purple-100 dark:border-white/10">
                    <h3 className="text-lg font-black text-text-main dark:text-white mb-4">Explore More</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { label: 'All Services', to: '/services', desc: '10 services' },
                            { label: 'Our Portfolio', to: '/portfolio', desc: 'Case studies' },
                            { label: 'Website Demos', to: '/website-demos', desc: 'Template gallery' },
                            { label: 'Contact Us', to: '/contact', desc: 'Free consultation' },
                        ].map((link, i) => (
                            <Link key={i} to={link.to} className="p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all group">
                                <h4 className="font-bold text-sm text-text-main dark:text-white group-hover:text-primary transition-colors">{link.label}</h4>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark">{link.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </main>
    );
}
