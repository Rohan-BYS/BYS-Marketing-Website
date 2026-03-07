import {
    Psychology,
    ChatBubbleOutline,
    ArrowBack,
    Share,
    Twitter,
    LinkedIn,
    Facebook
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';
import SEOHead from '../components/SEOHead';
import ReactMarkdown from 'react-markdown';
import ScrollReveal from '../components/ScrollReveal';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function BlogArticle() {
    const { slug } = useParams<{ slug: string }>();
    const [scrollProgress, setScrollProgress] = useState(0);

    // Find current article
    const article = blogArticles.find(a => a.slug === slug);

    // Reading Progress Hook
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return (
            <div className="bg-background-light dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center text-center px-6">
                <SEOHead title="Article Not Found" description="The requested blog article could not be found." url={`https://bys.marketing/blog/${slug || ''}`} />
                <h1 className="text-4xl md:text-6xl font-black text-text-main dark:text-white mb-4">404</h1>
                <p className="text-xl text-text-sub dark:text-gray-400 mb-8">Article not found.</p>
                <Link to="/blog" className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors flex items-center gap-2">
                    <ArrowBack fontSize="small" /> Back to Publication
                </Link>
            </div>
        );
    }

    // --- Dynamic Advanced Schema Generation (GEO Strategy) ---
    const schemas: any[] = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "BYS Marketing", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://bys.marketing/blog" },
                { "@type": "ListItem", "position": 3, "name": article.category, "item": "https://bys.marketing/blog" },
                { "@type": "ListItem", "position": 4, "name": article.title, "item": `https://bys.marketing/blog/${article.slug}` }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://bys.marketing/blog/${article.slug}` },
            "headline": article.title,
            "description": article.description,
            "image": [article.image],
            "datePublished": new Date(article.date).toISOString(),
            "dateModified": new Date(article.date).toISOString(), // Assume same for now unless updated
            "wordCount": article.content.split(' ').length,
            "timeRequired": `PT${article.readTime.split(' ')[0]}M`,
            "author": {
                "@type": "Person",
                "name": article.author,
                "url": "https://bys.marketing/about",
                "image": "https://bys.marketing/rohan-chaudhary.jpg",
                "jobTitle": "Founder & CEO, BYS Marketing",
                "sameAs": [
                    "https://linkedin.com/in/rohanchaudhary",
                    "https://twitter.com/rohanchaudhary"
                ]
            },
            "publisher": {
                "@type": "Organization",
                "name": "BYS Marketing",
                "logo": { "@type": "ImageObject", "url": "https://bys.marketing/logo.png" }
            }
        }
    ];

    if (article.faqs && article.faqs.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": article.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        });
    }

    if (article.category === 'Local SEO Delhi') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BYS Marketing",
            "image": "https://bys.marketing/logo.png",
            "url": "https://bys.marketing",
            "telephone": "+918802803681",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-115, Harkesh Nagar, Okhla",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110020",
                "addressCountry": "IN"
            }
        });
    }

    // Related insights within same Silo
    const relatedArticles = blogArticles
        .filter(a => a.slug !== slug && a.category === article.category)
        .slice(0, 3);

    return (
        <div className="bg-background-light dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center selection:bg-primary selection:text-white pb-32 transition-colors relative">

            <SEOHead
                title={`${article.title} | BYS Insights`}
                description={article.description}
                keywords={article.targetKeywords?.join(', ')}
                url={`https://bys.marketing/blog/${article.slug}`}
                image={article.image}
                schema={schemas}
            />

            {/* Reading Progress Bar (Sticky Top) */}
            <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-200 dark:bg-white/10">
                <div
                    className="h-full bg-primary transition-all duration-150 ease-out"
                    style={{ width: `${scrollProgress * 100}%` }}
                />
            </div>

            {/* Background Atmosphere */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[140px] opacity-30"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] opacity-20"></div>
            </div>

            <main className="w-full max-w-[1240px] flex flex-col relative z-10 px-6 pt-12 mt-20">

                {/* Back Link */}
                <div className="mb-8 pl-4 lg:pl-0">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-text-sub dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                        <ArrowBack fontSize="small" /> Back to Publication
                    </Link>
                </div>

                {/* EDITORIAL HERO */}
                <header className="mb-12 max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
                            {article.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] tracking-tight mb-6">
                            {article.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-text-sub dark:text-text-sub-dark leading-relaxed font-medium mb-8">
                            {article.description}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-text-sub dark:text-gray-400 font-medium border-y border-gray-100 dark:border-white/10 py-4">
                            <span className="flex items-center gap-2">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt={article.author} className="w-8 h-8 rounded-full object-cover" />
                                <strong className="text-text-main dark:text-white">{article.author}</strong>
                            </span>
                            <span>•</span>
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime} read</span>
                        </div>
                    </ScrollReveal>
                </header>

                {/* MASSIVE HERO IMAGE */}
                <ScrollReveal delay={0.1}>
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 shadow-2xl shadow-purple-200/50 dark:shadow-none border border-gray-100 dark:border-white/5">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="eager" />
                    </div>
                </ScrollReveal>

                {/* CONTENT LAYOUT: Sidebar (desktop) + Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT SIDEBAR: Social Share & ToC */}
                    <aside className="hidden lg:flex lg:col-span-3 sticky top-32 flex-col gap-10">
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Share Article</span>
                            <div className="flex flex-col gap-3">
                                <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 text-text-main dark:text-white transition-colors border border-transparent hover:border-gray-100 dark:hover:border-white/10 group">
                                    <Twitter fontSize="small" className="text-gray-400 group-hover:text-[#1DA1F2]" />
                                    <span className="text-sm font-bold">Twitter / X</span>
                                </button>
                                <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 text-text-main dark:text-white transition-colors border border-transparent hover:border-gray-100 dark:hover:border-white/10 group">
                                    <LinkedIn fontSize="small" className="text-gray-400 group-hover:text-[#0A66C2]" />
                                    <span className="text-sm font-bold">LinkedIn</span>
                                </button>
                                <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 text-text-main dark:text-white transition-colors border border-transparent hover:border-gray-100 dark:hover:border-white/10 group">
                                    <Share fontSize="small" className="text-gray-400 group-hover:text-primary" />
                                    <span className="text-sm font-bold">Copy Link</span>
                                </button>
                            </div>
                        </div>

                        {/* TL;DR Box in sidebar */}
                        <div className="p-5 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20">
                            <h4 className="font-black text-primary mb-2 flex items-center gap-2">
                                <Sparkles size={16} /> Key Takeaway
                            </h4>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                                AI Search is fundamentally changing how users discover services. Optimize for generative engines by injecting structured JSON-LD data and highly specific, factual content.
                            </p>
                        </div>
                    </aside>

                    {/* MAIN ARTICLE BODY */}
                    <div className="lg:col-span-9 max-w-[800px] w-full">
                        <article className="prose prose-lg md:prose-xl max-w-none dark:prose-invert 
                            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-text-main dark:prose-headings:text-white 
                            prose-p:text-text-sub dark:prose-p:text-text-sub-dark prose-p:leading-relaxed 
                            prose-a:text-primary hover:prose-a:text-primary-dark prose-a:no-underline hover:prose-a:underline prose-a:font-bold transition-all
                            prose-strong:text-text-main dark:prose-strong:text-white prose-strong:font-bold
                            prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary/70 
                            prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-gray-100 dark:prose-img:border-white/10
                            prose-hr:border-gray-200 dark:prose-hr:border-white/10
                            marker:text-primary">
                            <ReactMarkdown>
                                {article.content}
                            </ReactMarkdown>
                        </article>

                        {/* AUTHOR BIO BOX */}
                        <div className="mt-16 p-8 rounded-[2rem] bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/10 shadow-xl shadow-purple-100/50 dark:shadow-none flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                            <img src="/rohan-chaudhary.jpg" alt={article.author} className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-[#222] shadow-md" />
                            <div>
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 block">Written By</span>
                                <h3 className="text-2xl font-black text-text-main dark:text-white mb-2">{article.author}</h3>
                                <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed mb-4">
                                    Founder & CEO of BYS Marketing. With over 8 years of experience in digital marketing, web development, and brand strategy, Rohan built BYS from the ground up — starting as a solo operator in Delhi NCR and growing it into a full-stack growth agency serving clients worldwide.
                                </p>
                                <div className="flex gap-4 justify-center sm:justify-start">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" className="text-gray-400 hover:text-[#0A66C2] transition-colors"><LinkedIn /></a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter Profile" className="text-gray-400 hover:text-[#1DA1F2] transition-colors"><Twitter /></a>
                                </div>
                            </div>
                        </div>


                        {/* AI CHAT TRIGGER (CTA) */}
                        <div className="my-16 pb-16 border-b border-gray-200 dark:border-white/10">
                            <div className="p-8 bg-gradient-to-r from-primary to-purple-800 dark:from-primary dark:to-purple-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-primary/30 relative overflow-hidden group">
                                <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[200%] bg-white/10 rotate-12 blur-2xl group-hover:bg-white/20 transition-all duration-700"></div>
                                <div className="flex items-center gap-5 relative z-10 w-full md:w-auto">
                                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shrink-0">
                                        <Psychology fontSize="large" />
                                    </div>
                                    <div className="text-left w-full">
                                        <h4 className="text-xl md:text-2xl font-black text-white mb-1">Discuss this strategy</h4>
                                        <p className="text-sm text-purple-100">Our neural network read this article. Ask it anything.</p>
                                    </div>
                                </div>
                                <Link to="/contact" className="w-full md:w-auto px-8 py-4 bg-white text-primary font-black rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 relative z-10 shrink-0 shadow-lg">
                                    <ChatBubbleOutline fontSize="small" /> Open AI Chat
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RELATED READS */}
                {relatedArticles.length > 0 && (
                    <section className="pb-16 max-w-[1000px] mx-auto w-full">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl md:text-3xl font-black text-text-main dark:text-white tracking-tight">Keep Reading in <span className="text-primary">{article.category}</span></h3>
                            <Link to="/blog" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm">
                                View all <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedArticles.map((related, i) => (
                                <ScrollReveal key={related.slug} delay={i * 0.1}>
                                    <Link to={`/blog/${related.slug}`} className="group flex flex-col h-full bg-white dark:bg-[#1a1a1a] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl shadow-purple-200/20 dark:shadow-none transition-all duration-300">
                                        <div className="relative aspect-video overflow-hidden">
                                            <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">{related.category}</span>
                                            <h4 className="text-xl font-bold text-text-main dark:text-white leading-snug group-hover:text-primary transition-colors mb-3">
                                                {related.title}
                                            </h4>
                                            <p className="text-sm text-text-sub dark:text-gray-400 line-clamp-2 mt-auto">
                                                {related.description}
                                            </p>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                        <div className="mt-8 text-center md:hidden">
                            <Link to="/blog" className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-xl font-bold">
                                View all articles <ArrowRight size={16} />
                            </Link>
                        </div>
                    </section>
                )}

            </main>
        </div>
    );
}

