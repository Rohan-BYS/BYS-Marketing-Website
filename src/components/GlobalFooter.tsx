import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const BYSLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 375 375" fill="currentColor" aria-hidden="true">
        <g><path d="M 187.5 112.48 C 204.55 112.95 220.98 115.43 236.25 120.85 L 236.25 119.38 C 236.25 53.43 182.77 0.03 116.9 0.03 L 71.25 0.03 L 71.25 165.02 C 71.25 165.02 117.98 110.54 187.5 112.48 Z" /></g>
        <g><path d="M 187.5 142.47 C 123.33 142.47 71.25 194.48 71.25 258.72 L 71.25 374.97 L 187.5 374.97 C 251.67 374.97 303.75 322.97 303.75 258.72 C 303.67 194.55 251.67 142.47 187.5 142.47 Z" /></g>
    </svg>
);
import { Link } from 'react-router-dom';

export default function GlobalFooter() {
    return (
        <footer className="w-full relative z-0 overflow-hidden bg-white/40 dark:bg-black/40 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 pt-16 pb-8 transition-colors">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="flex items-center gap-3 w-fit group">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-purple-900/40 group-hover:scale-105 transition-transform text-white">
                                <BYSLogo />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl text-text-main dark:text-text-main-dark tracking-tight leading-none group-hover:text-primary transition-colors">BYS Marketing.</h2>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark font-medium tracking-wider uppercase mt-1">Growth Machines</p>
                            </div>
                        </Link>
                        <p className="text-text-sub dark:text-text-sub-dark text-sm leading-relaxed max-w-xs mt-2 transition-colors">
                            Architecting elite digital ecosystems and scalable growth machines for future-focused brands.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="https://facebook.com/bysmarketing" target="_blank" rel="noopener noreferrer" aria-label="BYS Marketing on Facebook" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-purple-50 dark:hover:bg-primary/20 transition-all"><Facebook size={16} /></a>
                            <a href="https://twitter.com/bysmarketing" target="_blank" rel="noopener noreferrer" aria-label="BYS Marketing on Twitter" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-purple-50 dark:hover:bg-primary/20 transition-all"><Twitter size={16} /></a>
                            <a href="https://instagram.com/bysmarketing" target="_blank" rel="noopener noreferrer" aria-label="BYS Marketing on Instagram" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-purple-50 dark:hover:bg-primary/20 transition-all"><Instagram size={16} /></a>
                            <a href="https://linkedin.com/company/bysmarketing" target="_blank" rel="noopener noreferrer" aria-label="BYS Marketing on LinkedIn" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-purple-50 dark:hover:bg-primary/20 transition-all"><Linkedin size={16} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-text-main dark:text-text-main-dark transition-colors">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/services" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary dark:hover:text-primary transition-colors">All Services</Link></li>
                            <li><Link to="/service-areas" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary dark:hover:text-primary transition-colors">Service Areas</Link></li>
                            <li><Link to="/website-demos" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary dark:hover:text-primary transition-colors">Website Demos</Link></li>
                            <li><Link to="/faq" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary dark:hover:text-primary transition-colors">Knowledge Base (FAQ)</Link></li>
                            <li><Link to="/contact" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary dark:hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-text-main dark:text-text-main-dark transition-colors">Core Services</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/services/web-development" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary dark:hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link to="/services/seo" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary dark:hover:text-primary transition-colors">SEO Optimization</Link></li>
                            <li><Link to="/services/digital-marketing" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary dark:hover:text-primary transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/services/security" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary dark:hover:text-primary transition-colors">Cyber Security</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-text-main dark:text-text-main-dark transition-colors">Contact Us</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                                <span className="text-text-sub dark:text-text-sub-dark text-sm transition-colors">Delhi NCR, India<br />Serving clients worldwide</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <a href="tel:+918383894893" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary transition-colors">+918383894893</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:hello@bys.marketing" className="text-text-sub dark:text-text-sub-dark text-sm hover:text-primary transition-colors">hello@bys.marketing</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} BYS Marketing. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
                        <Link to="/privacy" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
                        <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Sitemap XML</a>
                        <Link to="/locations" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Detailed Directory</Link>
                        <a href="https://bys.marketing" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">bys.marketing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
