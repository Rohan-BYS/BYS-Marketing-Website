import { Terminal, Play, MoreHorizontal, ArrowRight, Download, Linkedin, Github, Instagram, Facebook, Twitter, GraduationCap, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FounderPortfolio() {
    return (
        <main className="flex flex-col gap-10 px-6 pt-12 max-w-[1200px] mx-auto w-full pb-32">

            {/* HERO SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative order-2 lg:order-1 h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-neumorphic dark:shadow-neumorphic-sm-dark border border-white/60 dark:border-white/5 group bg-white dark:bg-[#1a1a1a] transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-white dark:to-[#1a1a1a]"></div>
                    <img alt="Founder Avatar" className="absolute inset-0 w-full h-full object-cover object-top mix-blend-multiply dark:mix-blend-normal opacity-90 transition-transform duration-700 group-hover:scale-105" src="/rohan-chaudhary.jpg" />
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-white/90 dark:from-black/90 to-transparent backdrop-blur-sm transition-colors">
                        <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/50 dark:border-white/10 dark:bg-black/40 mb-2 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-primary tracking-wide">Available for projects</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-6 order-1 lg:order-2">
                    <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight text-text-main dark:text-text-main-dark transition-colors">
                        Architect of<br />
                        <span className="text-primary">Digital Growth</span>
                    </h2>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors">David Chen</h3>
                        <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-lg max-w-md transition-colors">
                            Transforming complex technical challenges into seamless, high-performance digital experiences. Specializing in AI integration and full-stack scalability.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-200 dark:shadow-purple-900/60 hover:shadow-glow-purple hover:bg-primary-dark transition-all transform hover:-translate-y-1 inline-block">
                            Let's Connect
                        </Link>
                        <button className="bg-white dark:bg-[#1a1a1a] text-text-main dark:text-white border border-gray-200 dark:border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2 shadow-sm">
                            <Download size={20} />
                            Resume
                        </button>
                    </div>
                </div>
            </section>

            {/* SOCIAL STRIP */}
            <section className="overflow-x-auto no-scrollbar py-4">
                <div className="flex justify-between gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-5">
                    <a className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark p-4 flex flex-col items-center justify-center gap-2 w-32 md:w-auto h-28 hover:border-primary/50 dark:hover:border-primary/50 transition-colors group cursor-pointer" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-8 h-8 opacity-80 group-hover:opacity-100 text-blue-600 dark:text-blue-400 transition-all" />
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">LinkedIn</span>
                    </a>
                    <a className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark p-4 flex flex-col items-center justify-center gap-2 w-32 md:w-auto h-28 hover:border-primary/50 transition-colors group cursor-pointer" href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="w-8 h-8 opacity-80 group-hover:opacity-100 text-gray-900 dark:text-white transition-all" />
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">GitHub</span>
                    </a>
                    <a className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark p-4 flex flex-col items-center justify-center gap-2 w-32 md:w-auto h-28 hover:border-primary/50 transition-colors group cursor-pointer" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">Instagram</span>
                    </a>
                    <a className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark p-4 flex flex-col items-center justify-center gap-2 w-32 md:w-auto h-28 hover:border-primary/50 transition-colors group cursor-pointer" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-8 h-8 opacity-80 group-hover:opacity-100 text-blue-500 dark:text-blue-400 transition-all" />
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">Facebook</span>
                    </a>
                    <a className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark p-4 flex flex-col items-center justify-center gap-2 w-32 md:w-auto h-28 hover:border-primary/50 transition-colors group cursor-pointer" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 opacity-80 group-hover:opacity-100 text-blue-400 dark:text-blue-300 transition-all" />
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">X (Twitter)</span>
                    </a>
                </div>
            </section>

            {/* TECHNICAL & EDUCATION */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 shadow-neumorphic dark:shadow-neumorphic-dark rounded-2xl p-8 md:col-span-2 relative overflow-hidden group transition-colors">
                    <div className="absolute right-0 top-0 opacity-5 transform translate-x-8 -translate-y-4">
                        <Terminal size={150} />
                    </div>
                    <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-6 flex items-center gap-2 transition-colors">
                        <Terminal size={24} className="text-primary" />
                        Technical Expertise
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Frontend</h4>
                            <ul className="space-y-3 text-sm text-text-sub dark:text-text-sub-dark font-medium transition-colors">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>React / Next.js</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Tailwind CSS</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Three.js / WebGL</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Backend & AI</h4>
                            <ul className="space-y-3 text-sm text-text-sub dark:text-text-sub-dark font-medium transition-colors">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>Node.js / Python</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>OpenAI API Integration</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div>PostgreSQL / Supabase</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-primary rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden group shadow-[8px_8px_24px_rgba(104,54,244,0.3),inset_2px_2px_10px_rgba(255,255,255,0.1)]">
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <GraduationCap size={40} className="mb-4 text-white/90" />
                        <h3 className="text-2xl font-bold mb-1">Education</h3>
                        <p className="text-white/70 text-sm">Computer Science, MSc</p>
                    </div>
                    <div className="mt-8 space-y-4 relative z-10">
                        <div className="bg-white/10 border border-white/20 p-3 rounded-xl backdrop-blur-sm">
                            <div className="text-xs font-bold uppercase opacity-70">2018 - 2022</div>
                            <div className="font-bold">Stanford University</div>
                        </div>
                        <div className="bg-white/10 border border-white/20 p-3 rounded-xl backdrop-blur-sm">
                            <div className="text-xs font-bold uppercase opacity-70">Certification</div>
                            <div className="font-bold">Google AI Specialist</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHOWREEL & LAB */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden shadow-xl h-[400px] group bg-white border border-gray-100 dark:border-white/5 transition-colors">
                    <img alt="Project Showreel Cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2LYcwclRnIGdFT09teGcUmDHIUU-n008GsOmrzU3LnjMbqM3BG1zy1F2CSj_fjMMvJ_SsX34Sr0kRqb_fjpqAAObgj6a5hIH0AzUdKOlAN1I7AbqbzKiDKTsMsWUlvjblOhoRALice3x4MESu8sr4IYM02qcpOwJzLhEvR19ZQtGWTHAi6AggIILaSgBOFJNZnK56Tpf2-Mqh_koBRTW3OcHzgTPMqH14WBvUcgT2WGV2OYxcfGCtuGxJLWEiHJ4qu6osAkr_0w" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button title="Play Showreel" className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group-hover:bg-primary/80 group-hover:border-primary">
                            <Play size={40} className="ml-1 fill-current" />
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="bg-black/40 border border-white/10 text-white p-4 rounded-xl backdrop-blur-md flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">2024 Showreel</h3>
                                <p className="text-xs opacity-70">Highlighting our best immersive web experiences.</p>
                            </div>
                            <div className="text-xs font-mono opacity-80">02:45</div>
                        </div>
                    </div>
                </div>

                {/* PODCAST PLAYER */}
                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-2xl shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark p-6 flex flex-col justify-between h-64 transition-colors">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-purple-50 dark:bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-2 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                Podcast
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark transition-colors">Tech Talk: Future of AI</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark mt-1 transition-colors">Episode 42 • 24 min</p>
                        </div>
                        <button title="More Podcast Options" className="w-10 h-10 rounded-full bg-surface-light dark:bg-black/40 hover:bg-purple-50 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-colors flex items-center justify-center">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>

                    <div className="flex items-end justify-between gap-1 h-16 mt-4 opacity-70">
                        {Array.from({ length: 15 }).map((_, i) => (
                            // eslint-disable-next-line react/forbid-dom-props
                            <div key={i} className="w-1.5 bg-primary rounded-full animate-pulse" style={{ height: `${Math.max(20, Math.random() * 100)}%`, animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <button title="Play Episode" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-purple-900/40 hover:scale-105 transition-transform shrink-0">
                            <Play size={18} className="fill-current" />
                        </button>
                        <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700/50 rounded-full overflow-hidden transition-colors">
                            <div className="w-1/3 h-full bg-primary rounded-full"></div>
                        </div>
                        <span className="text-xs font-mono text-text-sub dark:text-text-sub-dark transition-colors">08:12</span>
                    </div>
                </div>

                {/* TERMINAL UI */}
                <div className="bg-gray-900 rounded-2xl p-6 text-white flex flex-col h-64 relative overflow-hidden shadow-xl border border-gray-700">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Code2 size={120} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10">
                        <Terminal size={20} className="text-green-400" />
                        Interactive Lab
                    </h3>
                    <div className="flex-1 bg-black/60 rounded-lg p-4 font-mono text-xs overflow-hidden relative z-10 border border-white/5">
                        <div className="absolute top-2 right-2 flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-green-400 mt-2">
                            <span className="text-purple-400">const</span> <span className="text-blue-400">innovation</span> = <span className="text-yellow-300">async</span> () ={'>'} {'{'}<br />
                            <span className="pl-4 text-gray-500">// Live Contribution Graph</span><br />
                            <span className="pl-4 text-purple-400">await</span> <span className="text-blue-400">deploy</span>(<span className="text-green-300">'NextBigThing'</span>);<br />
                            <span className="pl-4 text-purple-400">return</span> <span className="text-green-300">'🚀 Success'</span>;<br />
                            {'}'}
                        </div>
                        <div className="mt-4 flex gap-1 flex-wrap">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div key={i} className={`w-3 h-3 rounded-sm ${['bg-green-900', 'bg-green-700', 'bg-green-500', 'bg-green-400', 'bg-green-300'][Math.floor(Math.random() * 5)]}`}></div>
                            ))}
                        </div>
                    </div>
                    <a className="relative z-10 mt-4 text-xs flex items-center justify-between text-gray-400 hover:text-white transition-colors group" href="https://github.com" target="_blank" rel="noopener noreferrer">
                        View all repositories
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>

        </main>
    );
}
