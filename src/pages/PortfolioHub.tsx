import { ArrowRight as ArrowForward, Play as PlayCircle, ListFilter as FilterList, Star } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import SEOHead from '../components/SEOHead';
import CaseStudyCard from '../components/CaseStudyCard';

export default function PortfolioHub() {
    // ─── PORTFOLIO PAGE SCHEMA ───────────
    const portfolioSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "BYS Marketing Case Studies & Portfolio",
            "description": "Explore our successful projects in performance web development, technical SEO, and ROI-driven digital marketing.",
            "url": "https://bys.marketing/portfolio"
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bys.marketing" },
                { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://bys.marketing/portfolio" }
            ]
        }
    ];

    return (
        <main className="flex flex-col gap-16 md:gap-24 pt-4 pb-32 mx-auto w-full">
            <SEOHead
                title="Case Studies & Portfolio | BYS Marketing"
                description="See how we generate 300%+ traffic growth and build sub-0.4s load time platforms. View BYS Marketing's case studies across SEO, web dev, and paid media."
                url="https://bys.marketing/portfolio"
                schema={portfolioSchemas}
            />
            {/* HERO SECTION */}
            <section className="relative mt-4">
                <div className="glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group shadow-floating border-white/60 dark:border-white/5 dark:bg-[#1a1a1a]/80 transition-all">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-700"></div>
                    <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 w-fit backdrop-blur-sm shadow-sm transition-colors">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.6)]"></span>
                            <span className="text-xs font-bold text-primary tracking-wide uppercase">Portfolio Hub</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-text-main dark:text-text-main-dark transition-colors">
                            Engineering Growth:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Our Portfolio</span>
                        </h2>

                        <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-base md:text-xl max-w-2xl font-medium transition-colors">
                            A showcase of performance-driven machines and high-impact digital experiences that define the future of brands.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button className="bg-primary text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-purple-200 dark:shadow-purple-900/60 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:bg-primary-dark hover:shadow-glow-purple">
                                <span>View Case Studies</span>
                                <ArrowForward fontSize="small" className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED WORK (HERO FULL-WIDTH IMAGE) */}
            <section className="w-full">
                <div className="relative rounded-[2rem] overflow-hidden h-[60vh] md:h-[70vh] shadow-2xl shadow-gray-200 dark:shadow-none group border border-transparent dark:border-white/10 transition-colors">
                    <div className="absolute inset-0 bg-black/20 z-10 transition-opacity group-hover:bg-black/10"></div>
                    <img alt="Featured Project Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/portfolio/mashupminati.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20"></div>

                    <div className="absolute top-8 right-8 z-30">
                        <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-white/20 bg-white/10 dark:bg-black/30 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-white uppercase">Live Project</span>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 flex flex-col md:flex-row items-end justify-between gap-6">
                        <div className="max-w-xl">
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">Mashup Minati Pro</h3>
                            <p className="text-gray-300 text-lg mb-6">India's premier high-energy event aggregator platform.</p>
                            <div className="flex gap-3">
                                <span className="px-3 py-1 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg text-white text-xs font-medium transition-colors">Entertainment</span>
                                <span className="px-3 py-1 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg text-white text-xs font-medium transition-colors">Web Development</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="glass-panel p-4 rounded-2xl min-w-[120px] text-center border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/40 backdrop-blur-xl transition-colors">
                                <p className="text-3xl font-black text-white">Scale</p>
                                <p className="text-xs text-gray-200 uppercase tracking-wider font-bold mt-1">Pan India</p>
                            </div>
                            <div className="glass-panel p-4 rounded-2xl min-w-[120px] text-center border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/40 backdrop-blur-xl transition-colors">
                                <p className="text-3xl font-black text-white">Event</p>
                                <p className="text-xs text-gray-200 uppercase tracking-wider font-bold mt-1">Aggregator</p>
                            </div>
                        </div>
                    </div>

                    <button title="Play Video" className="absolute inset-0 w-full h-full flex items-center justify-center z-20 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 hover:scale-110 transition-transform duration-300">
                            <PlayCircle size={40} />
                        </div>
                    </button>
                </div>
            </section>

            {/* FEATURED WORK GRID - MASONRY BREAKOUT */}
            <section className="w-[100vw] relative left-1/2 -translate-x-1/2 px-6 md:px-12 lg:px-20 py-20 bg-[#0a0a0a] border-t border-white/5 my-12" id="featured-work">
                <div className="max-w-[1920px] mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                        <div className="max-w-xl">
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">The Work.</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                A curated selection of our finest digital experiences, high-converting platforms, and brand transformations.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button title="Filter List" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all border border-white/5 hover:border-white/20">
                                <FilterList />
                            </button>
                        </div>
                    </div>

                    {/* CSS MASONRY LAYOUT */}
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {caseStudies.map((caseStudy, i) => (
                            <div key={i} className="break-inside-avoid">
                                <CaseStudyCard {...caseStudy} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <button className="px-10 py-5 rounded-2xl border border-white/20 text-white font-bold text-lg hover:bg-white/5 backdrop-blur-md transition-all flex items-center gap-3 group">
                            Load More Projects
                            <ArrowForward className="group-hover:translate-x-2 transition-transform opacity-70" />
                        </button>
                    </div>
                </div>
            </section>

            {/* BEHIND THE SCENES */}
            <section className="py-12">
                <div className="mb-8">
                    <h3 className="text-3xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Behind the Scenes</h3>
                    <p className="text-text-sub dark:text-text-sub-dark transition-colors">Inside the agency where magic happens.</p>
                </div>
                {/* CSS Columns (Masonry equivalent in basic CSS) */}
                <div className="columns-2 md:columns-3 gap-6 space-y-6">
                    <div className="break-inside-avoid relative group overflow-hidden rounded-2xl">
                        <img alt="Office Life" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHwSifAwBHgPRti6I3HDj-VPfCQl_1DIK2Zepb5Rcwe-wRK3uA4cS2s4gMf-8UVSAmLM-eyMCQ16tB_3fCOy2iNNmelBriD1cmHN-OFYOrd4yfO7MX5ksq_XSmfChHuT4CqELBWBH7AKcKaA2PDQwv-BAydSrF0r_tcLApNRyf1U3yWScWYDi-XGB4ZSo07lLQZ06c_MFcDV5NC5_MRlRPpfcSqcReUU6YfPV0G1bZtnsQzVewI8CZhFGY6sQwn_ymKo_AK0LBwEk" loading="lazy" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-bold">Team Brainstorming</span>
                        </div>
                    </div>
                    <div className="break-inside-avoid relative group overflow-hidden rounded-2xl">
                        <img alt="Design Process" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5OjML6xTj24KPcJtujehOJUNpZJtUhzqjofKNpKVTkBm1H-qv06BlAzxNqmlCeFW0tgCAzypnr4cRS_4iMejbHOL13MWXaQGVAfg-yl_a84GV_N94DhgjbeUdjEjSOhgTs8YMRg1ok_znBnq-cy4dIxoGXCGW_AJ_zhzwFZQvjcrnS-sfj0FhzwUsTcCnGRQfQu8pt77Ovusr7YIPf-g_ylVhfFpHM1G6OQzjtMi4caSApLd--oSGNj05UuGJejSTmNQhsVJ_tWw" loading="lazy" />
                    </div>
                    <div className="break-inside-avoid relative group overflow-hidden rounded-2xl">
                        <div className="aspect-[9/16] bg-gray-900 flex items-center justify-center relative">
                            <img alt="Video Editing" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs7EtNp6G6HytCv17tTOfU1rv8Kd8s5Eq3YtqRKfff4YfF2K_8cKiIeJFG7Ln6_vKH2zbA-mkAy1a6LF56GktbCbcIsnSp2D_4Vzk-A6Fdbs9JDcLuky0u0JbMjc_Wekv9mHFRiQ6ynEZEF64uwEGn9sgyHdELtZIge44vze_qbvo1xhcvOqgmPWF5l6Xyd291EWJIJMwAE52WYXA7-puUHyV3i69L9WOp4mteqE-EAquA9a8JV9iapz1I4rCXs4hWkpTqCs7VZi0" loading="lazy" />
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <PlayCircle size={64} className="text-white drop-shadow-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="break-inside-avoid relative group overflow-hidden rounded-2xl">
                        <img alt="Coding Session" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3pz6qhMexMO0xS1U0t57aBNjAnbBWunsC-NPJF14doA4IBRUwRA4QoIXwrV4KwzY9XrA9XSi1n11nihf11yz5Ipjy3lQ2dGwoSjZTKKfkMLaqS3_UAPXyVuFcD9JWWsE9OoiylnKhsF4p-iiSYHq42PfPWYu-FL4os0eryfF6rrPJCnIVb07YhzGIShY03VO0fAJjjO_1wpfD6YHa3KdAJiCPPsNzzDTPM3cTwL4x4zoyt9fHZG5UXTrbNhmTKnFVGEyXdBlp_L8" loading="lazy" />
                    </div>
                    <div className="break-inside-avoid relative group overflow-hidden rounded-2xl">
                        <img alt="Client Meeting" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAviKM4ZIVmDstUElMBJos4xi9q1u33HWkikyDXoV_bZTp3Hzvohcr0REs2nQLwMQa8Gs2TtdC8oP3Ilem-nZ44a9v72tfRMxXLv3hB8-Aaob5Svf_9o9WC3Iw06S5pk_PyRZ66xD_-VF3BPWkt9c1OvCjpK0-G9W5jyOgtnJeVSJ73cKIt38s0NRa29ow9loFT0D96b6PXGrlk-6L3YYhIuv4tFm7qIR-cRsHn2HsQ57IdugftOdLCo6oeRqBr-P5C0PKYvlHWexs" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark transition-colors">Client Success</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-white/90 dark:border-white/5 p-8 rounded-3xl relative shadow-[0_8px_32px_rgba(104,54,244,0.08)] dark:shadow-none transition-colors">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex gap-1 text-yellow-400">
                                <Star fontSize="small" />
                                <Star fontSize="small" />
                                <Star fontSize="small" />
                                <Star fontSize="small" />
                                <Star fontSize="small" />
                            </div>
                            <img alt="Google" className="h-6 opacity-50 grayscale dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK8oEltIh9G1atbr1IILTfSV4tdkw0Wy5S-S8r2sRCyRFoEBPYwM_VE9CU3XQiGqzlHragh92zTyt2cl9hdzYn4FpuXVyDBs2HCzbYfPApAHPP4QQQH6tze7Q6kxLh0sc_pF7Zq3nud7dEOxfStw8ij1aQ4kyHcxkc_kf92iuruOjXgyHzVPSGBMy_EAjowaesQalWw9nT2CQOOuhVZgYq5Q3gf6Y9FLcgkOefuWVJ0rBUxUcuP4tnVKvhKyS8TMrcX9V0Cgdk6hk" />
                        </div>
                        <p className="text-text-sub dark:text-text-sub-dark font-medium mb-6 leading-relaxed transition-colors">"BYS transformed our digital presence completely. Their strategic approach to our rebranding resulted in a 40% increase in qualified leads within the first quarter. Truly exceptional partners."</p>
                        <div className="flex items-center gap-4">
                            <img alt="Client Photo" className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-black shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-TcYo6evT-VEeEhQmZ3SKsrPK0JHxdluAiNZbCeXRijQSvyDYir7wnc_I6RkUKnFSbq8C3aVhprNWs9ih2elKsJVwr8_rmFl5ehEhDj265QsvIKZ0ek7KlnhZQrigepw_YfODepkBJfAk5kxgDrwolU5oge8ReBH-OqAvw3TAt9jgaE0UBuzL_4f4FLyDp3MQv_d3hQX-2JHPH_scevZdC0jYpfOmDU2Sdyc9LLUYooaazN835WMp52S160m7E20gOoToq7Soawg" loading="lazy" />
                            <div>
                                <h4 className="font-bold text-sm text-text-main dark:text-text-main-dark transition-colors">James Wilson</h4>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark transition-colors">CMO, TechFlow Inc.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-white/90 dark:border-white/5 p-8 rounded-3xl relative shadow-[0_8px_32px_rgba(104,54,244,0.08)] dark:shadow-none transition-colors">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex gap-1 text-yellow-400">
                                <Star fontSize="small" />
                                <Star fontSize="small" />
                                <Star fontSize="small" />
                                <Star fontSize="small" />
                                <Star fontSize="small" />
                            </div>
                            <img alt="Google" className="h-6 opacity-50 grayscale dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH_CeLGTyeaoF41sD7ON8xoLTj6JZHNy6tyW-16XMC2rAlHGeZkOnknHM_iU7EoEuPSAdxDDEMbPM_BGUQiD2o_50FT2MtWEf0G8R0P7t06vn1zDLJbqvy_a0VTJrqXd1sFQ6p6bl3dyeLZpX5MJvYOLApNAkH7n9sZUsBhXS0wsyqIoSGNx3XpcNtqEK9-ldIswVvup1DOGKNj14Rr0-6FBH1Zd2s9oSbSNKWL0CxzfX6-wj68LTaZ-wduHqFv9hQ0-7roDC77_k" />
                        </div>
                        <p className="text-text-sub dark:text-text-sub-dark font-medium mb-6 leading-relaxed transition-colors">"The attention to detail in the UI/UX design was outstanding. They didn't just build a website; they crafted a journey for our customers that feels intuitive and premium."</p>
                        <div className="flex items-center gap-4">
                            <img alt="Client Photo" className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-black shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUWQRgHICULwrp3TyEYUT1ysk_CActzgv40cjMxkkoEvDPxLda6us-klxy8UfJVUw97218G2C76FUIIhF1sGMe4V7pvgKWLYVtzSdL1f_BpJqKDgxKgIXGxkXk-sB5AVdLSLFKfkILKdd9krfCdflegvvOcKt35C4yBnZNlUHKPAHhbBhdyxpOAXu3GQqe2eg7L3WePrYDc7LgMZFqxEpVqlnJhbHOzDC9qb0o0zXV-GeNH4hYkDrvZ_22wV-ZN3GLu_NKmw_aOWM" loading="lazy" />
                            <div>
                                <h4 className="font-bold text-sm text-text-main dark:text-text-main-dark transition-colors">Sarah Chen</h4>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark transition-colors">Founder, GreenLife</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY BANNER */}
            <section className="bg-surface-light dark:bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5 shadow-inner mt-12 transition-colors">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-wider">Our Philosophy</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-text-main-dark mb-6 transition-colors">Client-Centric Growth</h2>
                    <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-lg transition-colors">
                        We believe that true innovation happens at the intersection of data and creativity. Our mission is to build digital ecosystems that not only look spectacular but also perform relentlessly to drive your business forward. Your growth is our only metric of success.
                    </p>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 mt-12 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 shadow-neumorphic dark:shadow-none transition-colors">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 dark:bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-text-main dark:text-text-main-dark mb-4 tracking-tight transition-colors">
                        Ready to be our next <span className="text-primary">success story?</span>
                    </h3>
                    <p className="text-text-sub dark:text-text-sub-dark text-lg mb-8 max-w-lg mx-auto transition-colors">
                        Let's build something extraordinary together. Schedule your discovery call today.
                    </p>
                    <button className="px-10 py-5 bg-primary text-white text-lg font-bold rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 hover:shadow-glow-purple hover:scale-[1.02] hover:bg-primary-dark transition-all duration-300">
                        Start Your Project
                    </button>
                </div>
            </section>

        </main>
    );
}
