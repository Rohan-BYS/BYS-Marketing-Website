import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Service cross-links data
const allServices = [
    { name: 'Web Development', path: '/services/web-development', emoji: '🌐' },
    { name: 'Digital Marketing', path: '/services/digital-marketing', emoji: '📢' },
    { name: 'Media Production', path: '/services/media-production', emoji: '🎬' },
    { name: 'IT Hardware', path: '/services/it-hardware', emoji: '🖥️' },
    { name: 'Strategic Consultation', path: '/services/consultation', emoji: '🤝' },
    { name: 'SEO Optimization', path: '/services/seo', emoji: '🔍' },
    { name: 'UI/UX Design', path: '/services/design', emoji: '🎨' },
    { name: 'Social Media', path: '/services/social', emoji: '📱' },
    { name: 'Content Strategy', path: '/services/content', emoji: '📝' },
    { name: 'Cyber Security', path: '/services/security', emoji: '🔒' },
];

interface ServiceCrossLinksProps {
    currentService: string; // name of current service to exclude
}

export default function ServiceCrossLinks({ currentService }: ServiceCrossLinksProps) {
    const related = allServices.filter(s => s.name !== currentService).slice(0, 6);

    return (
        <>
            {/* Related Services */}
            <section className="mt-16 mb-8">
                <ScrollReveal>
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-purple-50 to-white dark:from-[#1a1a1a] dark:to-black border border-purple-100 dark:border-white/10">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-black text-text-main dark:text-white">Explore More Services</h3>
                            <Link to="/services" className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                                All Services <ArrowRight size={12} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {related.map((svc, i) => (
                                <Link key={i} to={svc.path} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all group">
                                    <span className="text-2xl">{svc.emoji}</span>
                                    <span className="font-bold text-sm text-text-main dark:text-white group-hover:text-primary transition-colors">{svc.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* CTA Strip */}
            <ScrollReveal>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-primary text-white mb-8">
                    <div>
                        <h4 className="font-bold text-lg mb-1">Ready to Get Started?</h4>
                        <p className="text-white/80 text-sm">Free consultation · No commitment · Reply within 2 hours</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="https://wa.me/+919876543210?text=Hi%2C%20I%27m%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white text-primary font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2">
                            <MessageCircle size={16} /> WhatsApp
                        </a>
                        <Link to="/contact" className="px-5 py-2.5 bg-white/20 text-white font-bold text-sm rounded-xl hover:bg-white/30 transition-colors border border-white/30">
                            Contact Form
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </>
    );
}
