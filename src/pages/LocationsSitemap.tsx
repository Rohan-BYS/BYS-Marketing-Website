import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { ArrowRight, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

// Target highest-intent SEO locations synchronized with ServiceAreas.tsx
const targetLocations = [
    { name: 'Okhla Industrial Area', slug: 'okhla-industrial-area' },
    { name: 'Badarpur Area', slug: 'badarpur-area' },
    { name: 'Connaught Place', slug: 'connaught-place' },
    { name: 'Gurugram', slug: 'gurugram' },
    { name: 'Noida', slug: 'noida' },
    { name: 'Lajpat Nagar', slug: 'lajpat-nagar' },
    { name: 'Faridabad', slug: 'faridabad' },
    { name: 'Karol Bagh', slug: 'karol-bagh' },
    { name: 'Chandni Chowk', slug: 'chandni-chowk' },
    { name: 'Nehru Place', slug: 'nehru-place' },
    { name: 'Rohini', slug: 'rohini' },
    { name: 'Dwarka', slug: 'dwarka' },
    { name: 'Mumbai', slug: 'mumbai' },
    { name: 'Bengaluru', slug: 'bengaluru' },
    { name: 'Hyderabad', slug: 'hyderabad' },
    { name: 'Pune', slug: 'pune' },
    { name: 'Ahmedabad', slug: 'ahmedabad' }
];

const services = [
    { name: 'Web Development', slug: 'web-development' },
    { name: 'SEO Optimization', slug: 'seo' },
    { name: 'Digital Marketing', slug: 'digital-marketing' },
    { name: 'UI/UX Design', slug: 'design' },
    { name: 'Media Production', slug: 'media-production' },
    { name: 'Cyber Security', slug: 'security' },
    { name: 'IT & Hardware', slug: 'it-hardware' },
    { name: 'Social Media', slug: 'social' },
    { name: 'Content Strategy', slug: 'content' },
    { name: 'Consulting', slug: 'consultation' }
];

export default function LocationsSitemap() {
    return (
        <main className="flex flex-col gap-12 lg:gap-20 px-6 pt-24 max-w-[1440px] lg:px-12 mx-auto w-full pb-40">
            <SEOHead
                title="Service Areas Directory — Complete Location Index | BYS Marketing"
                description="Browse our complete directory of digital marketing, web development, and SEO services across major Indian cities and localities."
                url="https://bys.marketing/locations"
                keywords="BYS Marketing locations, service areas directory, digital marketing India cities, web development NCR, SEO Mumbai Bengaluru"
            />

            <ScrollReveal>
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 w-fit backdrop-blur-md mb-6">
                        <MapPin size={16} className="text-primary" />
                        <span className="text-xs font-bold text-primary tracking-wide uppercase">Hyper-Local Service Infrastructure</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-text-main dark:text-text-main-dark mb-6">
                        Find Specialized <span className="text-primary">Services</span> In Your Exact Operating Area.
                    </h1>
                    <p className="text-text-sub dark:text-text-sub-dark text-lg md:text-xl max-w-2xl">
                        While we operate as a remote-first, global digital agency, we understand the nuances of local markets. Select your region below to view our specialized offerings and localized data.
                    </p>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {targetLocations.map(location => (
                        <div key={location.slug} className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-neumorphic-sm dark:shadow-none">
                            <h2 className="text-2xl font-black text-text-main dark:text-white mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                                <MapPin size={24} className="text-primary" />
                                {location.name}
                            </h2>
                            <ul className="flex flex-col gap-3">
                                {services.map(service => (
                                    <li key={service.slug}>
                                        <Link
                                            to={`/in/${location.slug}/${service.slug}`}
                                            className="group flex items-center justify-between py-2 text-text-sub dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors text-sm font-medium"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">{service.name} in {location.name}</span>
                                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </main>
    );
}
