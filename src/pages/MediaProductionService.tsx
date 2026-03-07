import {
    ArrowForward,
    PlayCircle,
    PlayArrow,
    Visibility,
    MovieFilter,
    AutoStories,
    Movie,
    GraphicEq,
    Animation,
    CameraAlt,
    ChevronRight,
    Handshake
} from '@mui/icons-material';
import SEOHead from '../components/SEOHead';
import ServiceCrossLinks from '../components/ServiceCrossLinks';

export default function MediaProductionService() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Media Production",
        "provider": { "@type": "Organization", "name": "BYS Marketing", "url": "https://bys.marketing" },
        "areaServed": "Worldwide",
        "description": "Cinematic media production including 4K video, brand storytelling, commercial ads, sound design, motion graphics, and photography. Strategic partnership with TM Production."
    };

    return (
        <div className="bg-white dark:bg-[#0a0a0a] text-text-main dark:text-text-main-dark min-h-screen flex flex-col pb-32 transition-colors">
            <SEOHead
                title="Cinematic Media Production Services"
                description="Studio-grade 4K video production, brand storytelling, commercial ads, sound design & motion graphics. 10M+ combined views. Powered by TM Production partnership."
                url="https://bys.marketing/services/media-production"
                schema={schema}
                keywords="media production, video production, 4K video, brand storytelling, commercial ads, sound design, motion graphics, BYS Marketing, TM Production"
            />

            {/* Background Effects */}
            <div className="fixed top-0 left-0 right-0 h-[800px] w-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[100px] transition-colors"></div>
                <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-400/5 dark:bg-blue-600/10 blur-[80px] transition-colors"></div>
            </div>

            {/* Header */}


            <main className="flex-grow pt-28 px-4 lg:px-8 relative z-10 w-full max-w-[1400px] mx-auto">

                {/* Hero section */}
                <section className="mx-auto w-full max-w-7xl mb-24">
                    <div className="bg-white/65 dark:bg-[#1a1a1a]/70 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_8px_32px_0_rgba(104,54,244,0.05)] dark:shadow-none relative overflow-hidden rounded-3xl p-8 lg:p-20 text-center transition-all">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col items-center gap-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">Powered by TM Production</span>
                            </div>

                            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-text-main dark:text-text-main-dark lg:text-7xl transition-colors">
                                High-Impact<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">Media Production</span>
                            </h1>

                            <p className="max-w-xl text-lg text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">
                                Elevating brand narratives through cinematic storytelling and cutting-edge technical execution. Studio-grade quality for the digital age.
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row items-center pt-4">
                                <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/25 hover:bg-violet-700 transition-all hover:-translate-y-0.5">
                                    <span>Get Started</span>
                                    <ArrowForward fontSize="small" />
                                </button>
                                <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white dark:bg-[#1a1a1a] px-8 text-base font-bold text-text-main dark:text-text-main-dark border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                                    <PlayCircle sx={{ color: 'inherit' }} />
                                    <span>Watch Showreel</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Showreel & Stats Grid */}
                <section className="mx-auto w-full max-w-7xl mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                        {/* Video Feature */}
                        <div className="md:col-span-12 lg:col-span-8 relative group overflow-hidden rounded-3xl bg-black shadow-2xl dark:shadow-none transition-shadow">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                            <div className="h-[400px] lg:h-[500px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9YAJD_rKDJ8k5F1n_IlpfFg9u2nv-waS_znSMLDgOG9uG0wfH0RZFcULjE3yvl9AtUMo5sWJgDzdR7_I3W9tscbw5Vi1ArIldqlrix8jDAamdB0aMRJ4AW2poiH-Kdhf9ZAgWlBIWlWGuhE7yQjl8S1z13K1iRXog7nNFDYzJUKzslqMDmL4Q4y2AVfauA-H3b7IfbxMbyR8KokoynQ6aU2wzx9DnXU5RZ94qI0J0YAbAZOITAmHodkrX9pkbqa3E-3YIwVdzvOg')" }}></div>
                            <div className="absolute top-6 right-6 z-20">
                                <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-1.5 text-white text-xs font-bold border border-white/10 uppercase tracking-wider">
                                    4K HDR
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex items-end justify-between">
                                <div>
                                    <h3 className="text-white text-2xl font-bold mb-1">BYS 2024 Showreel</h3>
                                    <p className="text-white/70 text-sm">Cinematic Excellence • 03:45</p>
                                </div>
                                <button className="h-14 w-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg hover:scale-110">
                                    <PlayArrow sx={{ fontSize: 32 }} />
                                </button>
                            </div>
                        </div>

                        {/* Stats Panel */}
                        <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
                            <div className="flex-1 bg-surface-light dark:bg-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-between border border-gray-100 dark:border-white/5 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Visibility />
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-text-main dark:text-text-main-dark tracking-tighter mb-2 transition-colors">10M<span className="text-primary">+</span></div>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors">Combined Views Across Platforms</p>
                                </div>
                            </div>

                            <div className="flex-1 bg-surface-light dark:bg-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-between border border-gray-100 dark:border-white/5 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <MovieFilter />
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-text-main dark:text-text-main-dark tracking-tighter mb-2 transition-colors">4K</div>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors">Cinematic Delivery Standards</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Features */}
                        <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-soft dark:shadow-none relative overflow-hidden group transition-colors">
                            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <ArrowForward className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors transform -rotate-45" />
                            </div>
                            <div className="mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c4dff] to-primary flex items-center justify-center text-white shadow-[inset_-3px_-3px_6px_rgba(104,54,244,0.3),inset_3px_3px_6px_rgba(255,255,255,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                                    <AutoStories fontSize="large" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Brand Storytelling</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">Compelling narratives that build deep connections with your audience.</p>
                        </div>

                        <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-soft dark:shadow-none relative overflow-hidden group transition-colors">
                            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <ArrowForward className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors transform -rotate-45" />
                            </div>
                            <div className="mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c4dff] to-primary flex items-center justify-center text-white shadow-[inset_-3px_-3px_6px_rgba(104,54,244,0.3),inset_3px_3px_6px_rgba(255,255,255,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                                    <Movie fontSize="large" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Commercial Ads</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">High-fidelity production for TV and digital advertising campaigns.</p>
                        </div>

                        <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-soft dark:shadow-none relative overflow-hidden group transition-colors">
                            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <ArrowForward className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors transform -rotate-45" />
                            </div>
                            <div className="mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c4dff] to-primary flex items-center justify-center text-white shadow-[inset_-3px_-3px_6px_rgba(104,54,244,0.3),inset_3px_3px_6px_rgba(255,255,255,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                                    <GraphicEq fontSize="large" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Sound Design</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">Immersive audio engineering, custom scores, and foley work.</p>
                        </div>

                        <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-soft dark:shadow-none relative overflow-hidden group transition-colors">
                            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <ArrowForward className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors transform -rotate-45" />
                            </div>
                            <div className="mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c4dff] to-primary flex items-center justify-center text-white shadow-[inset_-3px_-3px_6px_rgba(104,54,244,0.3),inset_3px_3px_6px_rgba(255,255,255,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                                    <Animation fontSize="large" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Motion FX</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">Cutting-edge visual effects and motion graphics for dynamic impact.</p>
                        </div>

                        {/* Wide Feature */}
                        <div className="md:col-span-12 lg:col-span-8 bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 lg:p-10 border border-gray-100 dark:border-white/5 shadow-soft dark:shadow-none relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-8 group transition-colors">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7c4dff] to-primary flex items-center justify-center text-white shadow-[inset_-3px_-3px_6px_rgba(104,54,244,0.3),inset_3px_3px_6px_rgba(255,255,255,0.5)] transform group-hover:rotate-12 transition-transform duration-300">
                                    <CameraAlt sx={{ fontSize: 40 }} />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Photography & Technical Shoots</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg transition-colors">Precision photography and videography showcasing product details with macro shots and dynamic lighting setups designed to highlight unique features.</p>
                            </div>
                            <div className="hidden md:block">
                                <ChevronRight sx={{ fontSize: 40 }} className="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* Partnership Banner */}
                <section className="mx-auto w-full max-w-7xl mb-12">
                    <div className="bg-gray-50 dark:bg-black rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 transition-colors">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-8 lg:p-16 flex flex-col justify-center">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-8 bg-primary"></span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Partnership</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-text-main dark:text-text-main-dark mb-6 leading-tight transition-colors">
                                    Where Strategy Meets <br />
                                    <span className="text-primary">Masterful Execution</span>
                                </h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8 transition-colors">
                                    <p>
                                        BYS Media has joined forces with <span className="font-semibold text-text-main dark:text-white">TM Production</span> to bridge the gap between creative marketing strategy and high-end technical production.
                                    </p>
                                    <p>
                                        We combine BYS's market insight with TM's decades of production excellence to deliver content that converts.
                                    </p>
                                </div>
                                <div className="flex items-center gap-8 pt-8 border-t border-gray-200 dark:border-white/10 transition-colors">
                                    <div>
                                        <p className="text-3xl font-black text-text-main dark:text-text-main-dark transition-colors">50+</p>
                                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mt-1 transition-colors">Projects</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black text-text-main dark:text-text-main-dark transition-colors">20+</p>
                                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mt-1 transition-colors">Partners</p>
                                    </div>
                                    <div>
                                        <div className="flex -space-x-3">
                                            <div className="h-10 w-10 rounded-full ring-2 ring-white dark:ring-black bg-gray-300 bg-cover bg-center transition-colors" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-dCbR0lxB6OG2gZaQFyFBOJLBWTfX-ZWz_T7He5qekWz68lzRoCumARjvyI_4jwotBYyJz_PaKsOJes9Guq7v2oMkwiSuKa9RZNKtf03nHFQvCahVkKdImfOsE36Os-mRm6MqD-HQv5fzEFnysVHzQGYqQZW7CX9D6xAOBd13Qpb_Nl9bj5J4VyfDB2bEuZFqIZ5WStUl88Ucx3QCQljzDLmX0mmKzlCG3L5T7VA8PbM-jY6uD9lbbYSjSaFU0_7Jos18tw3pcS8')" }}></div>
                                            <div className="h-10 w-10 rounded-full ring-2 ring-white dark:ring-black bg-gray-300 bg-cover bg-center transition-colors" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRsl473q8z-sUG8-wSKwTQtSUKTV0aDPE_FwF5MNMmpFpeBFNTVy_C33BP_BBtQzhNJQIK21GJypK81nWMZkT_LPEMmfP8KSHRz05LpGwMPPXDMLSJjbG7diHNjZ7DnICaoPcoMcQMhVcLIKbuxL_eWlOPhDhcangzhZRNt77M13l2fTeTtc9S_ZEXtMYUKV_uXqKIliz1AJnT6odxXBgTAjnZkln_QbBdeeMumnn4tpPQPI45MplVBK3-nOmgJbUX3MlRW-fYjsY')" }}></div>
                                            <div className="h-10 w-10 rounded-full ring-2 ring-white dark:ring-black bg-black dark:bg-[#1a1a1a] flex items-center justify-center text-xs font-bold text-white transition-colors">+12</div>
                                        </div>
                                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mt-2 transition-colors">The Team</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[400px] lg:h-auto bg-black overflow-hidden">
                                <div className="absolute inset-0 opacity-80 mix-blend-multiply bg-primary/40"></div>
                                <div className="absolute inset-0 bg-cover bg-center grayscale contrast-125" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJPBCISWe4XJnqRcJH0RUB5sX3gBlM9O8pt0LpSmRw0urth39A9mnB5miPodUu3UAoHDWGaGg5Zc-phFz-PgY0zYLcxuiiJtmAyOO9l94e5sm0_fAmrLuFrLCfcCMBP73vZZZo35_gi8AqsQ_7T6P3fGjSJ8taH0mx-J4qch9pr-ukHu3XpzFW0kioiW7rkY8SIP0i75LLhXPVf1qniCrCBcTpULknjQyWBA-s8k6A1NnVy96_T82LybGu18T7FeKnve06_HiTl6M')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center mb-4">
                                        <Handshake />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Production Excellence</h3>
                                    <p className="text-white/70 text-sm">Our joint studio facilities offer state-of-the-art equipment for any production scale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE CINEMATIC PROCESS - UNIQUE SECTION */}
                <section className="mx-auto w-full max-w-7xl mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-text-main dark:text-text-main-dark transition-colors">The Cinematic Process</h3>
                        <span className="text-xs font-bold text-primary bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">5-Stage Pipeline</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { step: '01', title: 'Ideation', desc: 'Concept development, moodboard creation, and script writing aligned with brand strategy.' },
                            { step: '02', title: 'Storyboard', desc: 'Shot-by-shot visual planning with camera angles, lighting setups, and scene transitions.' },
                            { step: '03', title: 'Production', desc: 'On-location or studio shoots with professional crew, 4K cameras, and cinematic lighting rigs.' },
                            { step: '04', title: 'Post-Production', desc: 'Color grading (DaVinci Resolve), VFX compositing, sound mixing, and motion graphics.' },
                            { step: '05', title: 'Delivery', desc: 'Multi-format export optimized for social, web, broadcast, and cinema standards.' },
                        ].map((phase, i) => (
                            <div key={i} className="relative bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl p-6 flex flex-col gap-3 group hover:-translate-y-1 shadow-sm hover:shadow-lg transition-all duration-300">
                                <span className="text-4xl font-black text-gray-100 dark:text-gray-800 absolute top-3 right-4 select-none pointer-events-none group-hover:text-primary/10 transition-colors">{phase.step}</span>
                                <h4 className="font-bold text-sm text-text-main dark:text-text-main-dark transition-colors relative z-10">{phase.title}</h4>
                                <p className="text-[11px] text-text-sub dark:text-text-sub-dark leading-relaxed relative z-10">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="mx-auto w-full max-w-7xl mb-8 border-t border-transparent pt-4">
                    <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-16 text-center shadow-2xl md:px-20 lg:py-24">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary blur-[80px] opacity-40"></div>
                        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-600 blur-[80px] opacity-40"></div>

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                                Ready to Create?
                            </h2>
                            <p className="mb-10 text-lg text-gray-400">
                                Let's discuss how we can bring your vision to life with our comprehensive media production services.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95">
                                    <span>Schedule Consultation</span>
                                </button>
                                <button className="flex h-14 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20">
                                    <span>View Pricing</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>


                <ServiceCrossLinks currentService="Media Production" />
            </main>
        </div>
    );
}
