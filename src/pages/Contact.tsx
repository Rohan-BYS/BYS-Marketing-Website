import ScrollReveal from '../components/ScrollReveal';
import { Send, Mail, Globe, HeadphonesIcon, Phone, MessageCircle, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function Contact() {
    // ─── CONTACT PAGE SCHEMA ───────────
    const contactSchemas = [
        // 1. ContactPage / LocalBusiness / Organization integration
        {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact BYS Marketing",
            "description": "Get in touch with BYS Marketing for performance web development, SEO, and digital marketing inquiries.",
            "url": "https://bys.marketing/contact",
            "mainEntity": {
                "@type": "Organization",
                "name": "BYS Marketing",
                "telephone": "+918383894893",
                "email": "hello@bys.marketing",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "A-115, Harkesh Nagar, Okhla",
                    "addressLocality": "New Delhi",
                    "addressRegion": "Delhi",
                    "postalCode": "110020",
                    "addressCountry": "IN"
                }
            }
        },
        // 2. BreadcrumbList for Sitelinks
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://bys.marketing/contact" }
            ]
        }
    ];

    return (
        <main className="flex flex-col gap-8 px-6 pt-12 max-w-[1200px] mx-auto w-full pb-32">
            <SEOHead
                title="Contact BYS Marketing | Start Your Project"
                description="Ready to scale? Contact BYS Marketing in New Delhi for enterprise SEO, performance web development, and ROI-driven marketing campaigns."
                url="https://bys.marketing/contact"
                schema={contactSchemas}
            />

            {/* HERO SECTION */}
            <section className="relative mt-2">
                <ScrollReveal>
                    <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-floating border-white/60 dark:border-white/10 dark:shadow-glow-purple">
                        <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 w-fit backdrop-blur-sm shadow-sm transition-colors">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                                <span className="text-xs font-semibold text-green-600 dark:text-green-400 tracking-wide">Currently accepting new clients</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark transition-colors">
                                Let's Build Your <br />
                                <span className="text-primary">Growth Machine</span>
                            </h1>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-lg max-w-[90%] font-medium transition-colors">
                                Get in touch to discuss your next project, hardware needs, or strategic audit. We're a full-stack digital agency based in <strong>Delhi NCR</strong>, serving clients worldwide.
                            </p>
                            <div className="inline-flex items-center gap-2 mt-2 text-xs text-text-sub dark:text-text-sub-dark">
                                <Clock size={14} className="text-primary" />
                                <span className="font-bold">We reply within 2 hours on weekdays</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* QUICK CONTACT STRIP */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ScrollReveal>
                    <a
                        href="https://wa.me/+918383894893?text=Hi%2C%20I%20found%20you%20on%20your%20website%20and%20want%20to%20discuss%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                            <MessageCircle size={22} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white text-sm">WhatsApp Us</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark">Instant reply — fastest way</p>
                        </div>
                    </a>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <a href="mailto:hello@bys.marketing" className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/10 hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Mail size={22} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white text-sm">Email Us</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark">hello@bys.marketing</p>
                        </div>
                    </a>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <a href="tel:+918383894893" className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/10 hover:border-primary/30 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Phone size={22} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-main dark:text-white text-sm">Call Us</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark">+918383894893</p>
                        </div>
                    </a>
                </ScrollReveal>
            </section>

            {/* FORM SECTION */}
            <section className="relative z-10">
                <ScrollReveal>
                    <div className="glass-panel rounded-3xl p-6 md:p-8 shadow-neumorphic dark:shadow-neumorphic-dark border-white/60 dark:border-white/5 transition-colors">
                        <h3 className="text-lg font-black text-text-main dark:text-white mb-6 uppercase tracking-widest">Send us a message</h3>
                        <form className="flex flex-col gap-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="name">Full Name</label>
                                    <input className="w-full rounded-xl px-4 py-3.5 text-sm text-black dark:text-white bg-surface-light dark:bg-black/40 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none" id="name" placeholder="Rohan Chaudhary" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="email">Email</label>
                                    <input className="w-full rounded-xl px-4 py-3.5 text-sm text-black dark:text-white bg-surface-light dark:bg-black/40 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none" id="email" placeholder="you@company.com" type="email" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="phone">Phone (optional)</label>
                                    <input className="w-full rounded-xl px-4 py-3.5 text-sm text-black dark:text-white bg-surface-light dark:bg-black/40 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none" id="phone" placeholder="+918383894893" type="tel" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="budget">Estimated Budget</label>
                                    <select className="w-full rounded-xl px-4 py-3.5 text-sm text-black dark:text-white bg-surface-light dark:bg-black/40 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none transition-all outline-none cursor-pointer appearance-none" id="budget" defaultValue="">
                                        <option disabled value="">Select range...</option>
                                        <option value="under-15k">Under ₹15,000/mo</option>
                                        <option value="15k-35k">₹15,000 – ₹35,000/mo</option>
                                        <option value="35k-75k">₹35,000 – ₹75,000/mo</option>
                                        <option value="75k-plus">₹75,000+/mo</option>
                                        <option value="custom">Custom / One-time project</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="service">Service Interest</label>
                                <select className="w-full rounded-xl px-4 py-3.5 text-sm text-black dark:text-white bg-surface-light dark:bg-black/40 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none transition-all outline-none cursor-pointer appearance-none" id="service" defaultValue="">
                                    <option disabled value="">Select a service...</option>
                                    <option value="web-dev">Web Development</option>
                                    <option value="seo">SEO Optimization</option>
                                    <option value="digital-marketing">Digital Marketing & Ads</option>
                                    <option value="social-media">Social Media Management</option>
                                    <option value="media-production">Media Production</option>
                                    <option value="it-hardware">IT Hardware & Infrastructure</option>
                                    <option value="security">Cyber Security</option>
                                    <option value="design">UI/UX Design</option>
                                    <option value="content">Content Strategy</option>
                                    <option value="consultation">Strategic Consultation</option>
                                    <option value="full-stack">Full-Stack Growth Package</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="message">Project Details</label>
                                <textarea className="w-full rounded-xl px-4 py-3.5 text-sm text-black dark:text-white bg-surface-light dark:bg-black/40 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none resize-none" id="message" placeholder="Tell us about your project goals, timeline, and any specific requirements..." rows={5}></textarea>
                            </div>

                            <button className="mt-2 w-full md:w-auto md:self-end bg-primary text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/60 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group hover:bg-primary-dark hover:shadow-glow-purple" type="submit">
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </ScrollReveal>
            </section>

            {/* LOCATION & INFO CARDS */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ScrollReveal>
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-6 flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <MapPin size={24} />
                        </div>
                        <h4 className="font-bold text-text-main dark:text-white text-lg">Our Office</h4>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">Delhi NCR, India<br />Serving clients in India, USA, UK, UAE & worldwide</p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-6 flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Globe size={24} />
                        </div>
                        <h4 className="font-bold text-text-main dark:text-white text-lg">Working Hours</h4>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">Mon – Fri: 9:00 AM – 7:00 PM IST<br />Sat: 10:00 AM – 4:00 PM IST</p>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-6 flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <HeadphonesIcon size={24} />
                        </div>
                        <h4 className="font-bold text-text-main dark:text-white text-lg">Priority Support</h4>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">Existing clients get 24/7 priority support via WhatsApp & dedicated Slack channels.</p>
                    </div>
                </ScrollReveal>
            </section>

            {/* INTERLINKS */}
            <section>
                <ScrollReveal>
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-purple-50 to-white dark:from-[#1a1a1a] dark:to-black border border-purple-100 dark:border-white/10 shadow-sm">
                        <h3 className="text-lg font-black text-text-main dark:text-white mb-6">Explore More</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { label: 'All Services', to: '/services', desc: 'See everything we offer' },
                                { label: 'Our Portfolio', to: '/portfolio', desc: 'View our best work' },
                                { label: 'Website Demos', to: '/website-demos', desc: 'Browse template designs' },
                                { label: 'FAQs', to: '/faq', desc: 'Common questions' },
                            ].map((link, i) => (
                                <Link key={i} to={link.to} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all group">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm text-text-main dark:text-white group-hover:text-primary transition-colors">{link.label}</h4>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark">{link.desc}</p>
                                    </div>
                                    <ArrowRight size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </main>
    );
}
