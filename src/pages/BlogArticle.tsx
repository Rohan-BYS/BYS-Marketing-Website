import {
    Psychology,
    ChatBubbleOutline,
    ArrowBack
} from '@mui/icons-material';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';
import SEOHead from '../components/SEOHead';
import ReactMarkdown from 'react-markdown';

export default function BlogArticle() {
    const { slug } = useParams<{ slug: string }>();

    // Find the current article
    const article = blogArticles.find(a => a.slug === slug);

    // Find related articles (excluding current one)
    const relatedArticles = blogArticles
        .filter(a => a.slug !== slug && a.category === article?.category)
        .slice(0, 2);

    // If less than 2 related in same category, pad with others
    if (relatedArticles.length < 2) {
        const others = blogArticles.filter(a => a.slug !== slug && !relatedArticles.includes(a));
        relatedArticles.push(...others.slice(0, 2 - relatedArticles.length));
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return (
            <div className="bg-background-light dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center text-center px-6">
                <SEOHead
                    title="Article Not Found"
                    description="The requested blog article could not be found."
                    url={`https://bys.marketing/blog/${slug || ''}`}
                />
                <h1 className="text-4xl md:text-6xl font-black text-text-main dark:text-white mb-4">404</h1>
                <p className="text-xl text-text-sub dark:text-gray-400 mb-8">Article not found.</p>
                <Link to="/blog" className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors flex items-center gap-2">
                    <ArrowBack fontSize="small" /> Back to Blog
                </Link>
            </div>
        );
    }

    // --- Dynamic Schema Generation ---
    const schemas: any[] = [
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "image": [
                article.image
            ],
            "datePublished": new Date(article.date).toISOString(),
            "author": [{
                "@type": "Person",
                "name": article.author,
                "url": "https://bys.marketing/about" // Link to main brand page
            }],
            "publisher": {
                "@type": "Organization",
                "name": "BYS Marketing",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://bys.marketing/logo.png"
                }
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
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
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
            "telephone": "+919876543210", // Placeholder from footer
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "New Delhi",
                "addressLocality": "Delhi NCR",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
            }
        });
    }

    return (
        <div className="bg-background-light dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center selection:bg-primary selection:text-white pb-32 transition-colors">

            <SEOHead
                title={article.title}
                description={article.description}
                keywords={article.targetKeywords?.join(', ')}
                url={`https://bys.marketing/blog/${article.slug}`}
                image={article.image}
                schema={schemas}
            />

            {/* Background Orbs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[100px] opacity-30"></div>
            </div>

            <div className="w-full max-w-3xl flex flex-col relative z-10 px-6 pt-6 mt-20">

                <div className="mb-6">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors">
                        <ArrowBack fontSize="small" /> Back to Blog
                    </Link>
                </div>

                <main className="flex flex-col gap-8">

                    {/* Hero Image Block */}
                    <section className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/50 dark:shadow-none aspect-[4/3] md:aspect-[2/1] group transition-shadow border border-gray-100 dark:border-white/5">
                        <img alt={article.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={article.image} loading="eager" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-white/10 transition-colors">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="px-2 py-0.5 rounded-md bg-primary text-white text-[10px] font-bold uppercase tracking-wider">{article.category}</span>
                                    <span className="text-xs font-medium text-gray-200">{article.date}</span>
                                    <span className="text-xs font-bold text-gray-400">•</span>
                                    <span className="text-xs font-medium text-gray-200">{article.readTime} read</span>
                                </div>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-4">
                                    {article.title}
                                </h1>
                                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-white/20">
                                        <img alt={article.author} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" loading="lazy" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-white">{article.author}</span>
                                        <span className="text-[10px] text-gray-300 uppercase tracking-wider">Founder / CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Content Start */}
                    <article className="prose prose-lg md:prose-xl max-w-none dark:prose-invert 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-text-main dark:prose-headings:text-white 
                        prose-p:text-text-sub dark:prose-p:text-text-sub-dark prose-p:leading-relaxed 
                        prose-a:text-primary hover:prose-a:text-primary-dark prose-a:no-underline hover:prose-a:underline prose-a:font-bold transition-all
                        prose-strong:text-text-main dark:prose-strong:text-white prose-strong:font-bold
                        prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary/70 
                        prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-gray-100 dark:prose-img:border-white/10
                        prose-hr:border-gray-200 dark:prose-hr:border-white/10
                        prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:text-text-main dark:prose-blockquote:text-white prose-blockquote:font-medium prose-blockquote:not-italic
                        marker:text-primary">
                        <ReactMarkdown>
                            {article.content}
                        </ReactMarkdown>
                    </article>

                    {/* AI Discussion Banner */}
                    <div className="p-6 bg-purple-50 dark:bg-primary/10 rounded-2xl border border-purple-100 dark:border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4 mt-8 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center text-primary shadow-sm">
                                <Psychology />
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main dark:text-text-main-dark transition-colors">Have questions about this tech?</h4>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark transition-colors">Our AI bot has read this article and can answer.</p>
                            </div>
                        </div>
                        <Link to="/contact" className="w-full md:w-auto px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                            <ChatBubbleOutline fontSize="small" />
                            Discuss with AI
                        </Link>
                    </div>

                    {/* Related Insights */}
                    {relatedArticles.length > 0 && (
                        <section className="pt-8 border-t border-gray-100 dark:border-white/10 mt-4 transition-colors">
                            <h3 className="text-lg font-bold text-text-main dark:text-text-main-dark mb-6">Related Insights</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {relatedArticles.map((related) => (
                                    <Link key={related.slug} to={`/blog/${related.slug}`} className="bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none hover:border-primary/30 flex gap-4 hover:shadow-md transition-all group">
                                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src={related.image} loading="lazy" alt={related.title} />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[10px] font-bold text-primary uppercase mb-1">{related.category}</span>
                                            <h4 className="font-bold text-sm text-text-main dark:text-text-main-dark leading-snug line-clamp-2 transition-colors">{related.title}</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                </main>
            </div>
        </div>
    );
}
