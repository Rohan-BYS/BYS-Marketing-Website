import ScrollReveal from '../components/ScrollReveal';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, ArrowRight, Search, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';

// ─── BLOG DATA ───
import { blogArticles } from '../data/blogData';

const silos = [
    'All Categories',
    'AI Search & GEO',
    'Local SEO Delhi',
    'Technical SEO',
    'Performance Marketing',
    'Content & Brand'
];

export default function BlogList() {
    const [activeCategory, setActiveCategory] = useState('All Categories');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = useMemo(() => {
        return blogArticles.filter(a => {
            const matchCat = activeCategory === 'All Categories' || a.category === activeCategory;
            const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [activeCategory, searchQuery]);

    const featured = filtered.length > 0 ? filtered[0] : null;
    const secondary = filtered.length > 1 ? filtered.slice(1, 4) : []; // Next 3 articles
    const rest = filtered.length > 4 ? filtered.slice(4) : []; // Remaining

    return (
        <main className="flex flex-col gap-16 px-6 pt-12 max-w-[1240px] mx-auto w-full pb-40">
            <SEOHead
                title="Insights & Strategies | BYS Marketing Blog"
                description="Expert analysis on Generative Engine Optimization, Delhi NCR Local SEO, modern web development, and digital marketing strategies."
                keywords="BYS Marketing blog, SEO strategies 2026, web development insights, marketing case studies"
                url="https://bys.marketing/blog"
            />

            {/* HEADER SECTION */}
            <section className="text-center mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 backdrop-blur-md mb-8 shadow-sm">
                    <Sparkles size={14} className="text-primary" />
                    <span className="text-xs font-bold text-primary tracking-wide uppercase">The Publication</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark mb-6">
                    Engineering <span className="text-primary">Growth.</span>
                </h1>
                <p className="text-text-sub dark:text-text-sub-dark text-lg md:text-xl font-medium max-w-2xl mx-auto">
                    Deep-dive strategies from practitioners building high-performance marketing machines for enterprises and startups.
                </p>
            </section>

            {/* STICKY NAVIGATION & SEARCH */}
            <section className="sticky top-[80px] z-40 bg-background-light/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl py-4 border-b border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 -mx-6 px-6">
                <div className="flex overflow-x-auto hide-scrollbar w-full md:w-auto gap-2 pb-2 md:pb-0">
                    {silos.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${activeCategory === cat
                                ? 'bg-text-main text-white dark:bg-white dark:text-black shadow-lg'
                                : 'bg-transparent text-text-sub dark:text-text-sub-dark hover:text-primary hover:bg-gray-100 dark:hover:bg-white/5'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-64 flex-shrink-0">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400"><Search size={16} /></div>
                    <input
                        type="text"
                        placeholder="Search topics..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-100 dark:bg-white/5 border-transparent focus:bg-white dark:focus:bg-black border focus:border-primary outline-none text-sm font-medium text-text-main dark:text-white transition-all"
                    />
                </div>
            </section>

            {/* NO RESULTS */}
            {filtered.length === 0 && (
                <div className="text-center py-32">
                    <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">No articles found</h3>
                    <p className="text-text-sub dark:text-gray-400">Try adjusting your search or category filter.</p>
                </div>
            )}

            {/* TOP STORIES: ASYMMETRIC GRID */}
            {(featured || secondary.length > 0) && (
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Featured (Left, 8 cols) */}
                    {featured && (
                        <div className="lg:col-span-8 flex flex-col group">
                            <Link to={`/blog/${featured.slug}`} className="block relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-[2rem] mb-6 shadow-2xl shadow-purple-200/40 dark:shadow-none border border-gray-100 dark:border-white/5">
                                <img alt={featured.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src={featured.image} loading="eager" />
                                <div className="absolute top-6 left-6">
                                    <span className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-primary font-black text-[10px] uppercase tracking-wider shadow-sm">
                                        {featured.category}
                                    </span>
                                </div>
                            </Link>
                            <div className="px-2">
                                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                    <span>{featured.date}</span>
                                    <span>•</span>
                                    <span>{featured.readTime} read</span>
                                </div>
                                <Link to={`/blog/${featured.slug}`}>
                                    <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white leading-[1.1] mb-4 group-hover:text-primary transition-colors tracking-tight">
                                        {featured.title}
                                    </h2>
                                </Link>
                                <p className="text-lg text-text-sub dark:text-text-sub-dark leading-relaxed mb-6 line-clamp-3">
                                    {featured.description}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Secondary Featured (Right, 4 cols) */}
                    {secondary.length > 0 && (
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            <h3 className="text-sm font-black text-text-main dark:text-white uppercase tracking-widest border-b border-gray-200 dark:border-white/10 pb-4">Latest Insights</h3>
                            {secondary.map((article) => (
                                <div key={article.slug} className="group flex flex-col gap-3 pb-8 border-b border-gray-100 dark:border-white/5 last:border-0 last:pb-0">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{article.category}</span>
                                    <Link to={`/blog/${article.slug}`}>
                                        <h4 className="text-xl font-bold text-text-main dark:text-white leading-snug group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h4>
                                    </Link>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-text-sub dark:text-gray-400 line-clamp-2">{article.description}</p>
                                        <span className="text-xs font-bold text-gray-400 mt-2">{article.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {/* THE ARCHIVE: MASONRY-STYLE GRID */}
            {rest.length > 0 && (
                <section className="pt-16 border-t border-gray-200 dark:border-white/5">
                    <h3 className="text-3xl font-black text-text-main dark:text-white mb-10 tracking-tight">More Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {rest.map((article, i) => (
                            <ScrollReveal key={article.slug} delay={i * 0.05}>
                                <div className="flex flex-col group h-full">
                                    <Link to={`/blog/${article.slug}`} className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 block shadow-sm border border-gray-100 dark:border-white/5">
                                        <img alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={article.image} loading="lazy" />
                                    </Link>
                                    <div className="flex flex-col flex-1 px-1">
                                        <span className="text-[10px] font-black text-primary uppercase mb-3 tracking-widest">{article.category}</span>
                                        <Link to={`/blog/${article.slug}`} className="text-2xl font-bold text-text-main dark:text-white leading-tight mb-3 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </Link>
                                        <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed line-clamp-2 mb-6">{article.description}</p>

                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                                            <div className="flex items-center gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider">
                                                <span>{article.date}</span>
                                            </div>
                                            <Link to={`/blog/${article.slug}`} className="text-primary bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full text-xs font-bold transition-all">
                                                Read Entry
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}

