import { Heart, Rocket, Quote, Zap } from 'lucide-react';

export default function AboutUs() {
    return (
        <main className="flex flex-col gap-10 px-6 pt-12 max-w-[1200px] mx-auto w-full">

            {/* HERO SECTION */}
            <section className="relative mt-4">
                <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-floating border-white/60 dark:border-white/10 dark:shadow-glow-purple">
                    <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                    <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 w-fit backdrop-blur-sm shadow-sm transition-colors object-contain">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.6)]"></span>
                            <span className="text-xs font-semibold text-primary tracking-wide">Philosophy & Vision</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark transition-colors">
                            Engineering<br />
                            <span className="text-primary">Digital Success</span>
                        </h2>
                        <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-xl max-w-[90%] font-medium transition-colors">
                            We don't just build websites; we architect growth engines. Our philosophy intertwines cutting-edge technology with deep market psychology.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR STORY */}
            <section>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark flex items-center gap-2 transition-colors">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Our Story
                    </h3>
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5 shadow-sm leading-relaxed text-text-sub dark:text-text-sub-dark text-sm md:text-base transition-colors">
                        <p className="mb-4">
                            From a small local consultancy to a global digital powerhouse, the journey of BYS Marketing has been defined by one singular goal: <strong className="dark:text-white">Partnership</strong>. We started with the belief that agencies shouldn't just be service providers, but integral growth partners invested in their clients' success.
                        </p>
                        <p>
                            Today, we operate across three continents, yet our mindset remains agile and hungry. We've replaced the traditional agency bloat with lean, high-performance teams that treat your business metrics as our own.
                        </p>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section>
                <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-6 flex items-center gap-2 transition-colors">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    Core Values
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-xl shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark p-6 flex flex-col justify-between h-full group hover:border-primary/30 dark:hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-black/40 flex items-center justify-center text-primary mb-4 shadow-inner dark:shadow-none transition-colors">
                            <Heart size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark mb-2 transition-colors">Client-Centricity</h4>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark transition-colors">We don't just deliver; we listen. Every strategy is bespoke, tailored to the unique heartbeat of your brand.</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-xl shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark p-6 flex flex-col justify-between h-full group hover:border-primary/30 dark:hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-black/40 flex items-center justify-center text-primary mb-4 shadow-inner dark:shadow-none transition-colors">
                            <Rocket size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark mb-2 transition-colors">Tech-Forward Adaptation</h4>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark transition-colors">Embracing the new. From AI integration to next-gen frameworks, we stay ahead so you don't fall behind.</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-xl shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark p-6 md:col-span-2 flex flex-row items-center gap-6 group hover:border-primary/30 dark:hover:border-primary/50 transition-colors">
                        <div className="w-16 h-16 shrink-0 rounded-full bg-primary flex items-center justify-center text-white shadow-glow-purple">
                            <span className="font-black text-xl">99+</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark mb-1 transition-colors">Absolute Performance</h4>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark transition-colors">We accept nothing less than Lighthouse 99+ scores. Speed isn't a feature; it's our foundation.</p>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-400 dark:bg-green-500"></div>
                            <div className="h-2 w-2 rounded-full bg-green-400 dark:bg-green-500"></div>
                            <div className="h-2 w-2 rounded-full bg-green-400 dark:bg-green-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM EXPERTISE */}
            <section className="overflow-hidden">
                <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-6 flex items-center gap-2 transition-colors">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    Team Expertise
                </h3>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6 snap-x">
                    <div className="snap-center shrink-0 w-[240px] md:w-[280px] h-[320px] rounded-3xl relative overflow-hidden group shadow-lg shadow-gray-200 dark:shadow-none border border-transparent dark:border-white/10 transition-all">
                        <img alt="Team working on strategy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM5PitlVBvoIbYexo4kZldFRS6b_-V1aLl1lkoY2ZgfDU0Ri_WETomArOag2ShILnkUtOUGOskHArfTZ8c8w1riTjXaUlIwvb4TC6xNlCnFbnL7hZFoLWD1YR8u_PGR_ZiDbIPO0TlrndRRQLh9UJ9N9hN5z1z0sVxUvPhWBqU5wa0nNBzK8jAA1RQWlxN4SrLAU4ew5MsXgV3zi9vS9tKB-jU0qMzf1IX_jk205VAHWlmTleKmgHA1uoLE2Y-zRhsVQjgBmKNT0c" />
                        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                            <h4 className="font-bold text-xl">Strategy</h4>
                            <p className="text-xs text-white/80">Data-driven decisions</p>
                        </div>
                    </div>

                    <div className="snap-center shrink-0 w-[240px] md:w-[280px] h-[320px] rounded-3xl relative overflow-hidden group shadow-lg shadow-gray-200 dark:shadow-none border border-transparent dark:border-white/10 transition-all">
                        <img alt="Design team collaboration" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN0uwCEFlA-LhKcefPW5i2N5i_QtF4GFXZf8J_N4v99ihUYkV1j1svRbUGnX4WB_T91oMkA4tDmORLmj8QyDQHrRk20x6XO2AqYACDVfleQAM7UUY6gNiUfHxNm7blND15PlRxZNwpkOA0wH_SJgpTEwTMtXeAyHJGboAfwls-MgVSbekyDd2REKGusXsc8xZzQLBGbGirJWmNSWHGh3T8ilwed45x31B7V2xrICK95I3LSiQjUVd5CmfcymucgwDeB59KdwyXfOo" />
                        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                            <h4 className="font-bold text-xl">Design</h4>
                            <p className="text-xs text-white/80">Visual storytelling</p>
                        </div>
                    </div>

                    <div className="snap-center shrink-0 w-[240px] md:w-[280px] h-[320px] rounded-3xl relative overflow-hidden group shadow-lg shadow-gray-200 dark:shadow-none border border-transparent dark:border-white/10 transition-all">
                        <img alt="Developer coding" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBQB21_bvOdMYYuY_mwbv_vu2TVrOf4Zg94pLG4GbDnh6RGhoO5Qa7_p6nwkT08UHuviQT469B2waW5GuaVlhdDASY1By44XkSTv2ej8jzSHuZY7DNLP5t0NMffJiRNjc4A0g6xsJdRAQOojMDfCgeKiAgUbWA5Sp6Hh391Frf6T7M7RyoktctJzTh2akngJO2tXwzqsvAoxJSzgdN3iMIHJaemM1F7_dHjoWeAxFC0aVqzU0hBbcqikb2SQJepxQkOTGs_JVX4w8" />
                        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                            <h4 className="font-bold text-xl">Development</h4>
                            <p className="text-xs text-white/80">Robust engineering</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* STRATEGIC PARTNER */}
            <section className="relative">
                <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white dark:border-white/10 shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark relative overflow-hidden transition-colors">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 dark:bg-primary/20 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shadow-lg">
                                <span className="font-black text-xs tracking-tighter">TM</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-main dark:text-text-main-dark transition-colors">Strategic Partner: TM Production</h3>
                        </div>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed mb-4 transition-colors">
                            Our exclusive partnership with TM Production unlocks studio-grade content creation capabilities for our clients. From high-end video production to 3D motion graphics, this synergy ensures your brand looks as good as it performs.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-[10px] font-bold text-text-sub dark:text-text-sub-dark uppercase tracking-wide transition-colors">Video</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-[10px] font-bold text-text-sub dark:text-text-sub-dark uppercase tracking-wide transition-colors">Photography</span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-[10px] font-bold text-text-sub dark:text-text-sub-dark uppercase tracking-wide transition-colors">Motion</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* GLOBAL REACH & CLIENT WORDS */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark flex items-center gap-2 transition-colors">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Global Reach
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-surface-light dark:bg-[#1a1a1a] p-4 rounded-xl border border-gray-100 dark:border-white/5 text-center shadow-sm transition-colors">
                            <h4 className="text-3xl md:text-4xl font-black text-primary">15+</h4>
                            <p className="text-[10px] font-bold text-text-sub dark:text-text-sub-dark uppercase mt-1 transition-colors">Countries</p>
                        </div>
                        <div className="bg-surface-light dark:bg-[#1a1a1a] p-4 rounded-xl border border-gray-100 dark:border-white/5 text-center shadow-sm transition-colors">
                            <h4 className="text-3xl md:text-4xl font-black text-primary">200+</h4>
                            <p className="text-[10px] font-bold text-text-sub dark:text-text-sub-dark uppercase mt-1 transition-colors">Projects</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark flex items-center gap-2 transition-colors">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Client Words
                    </h3>
                    <div className="glass-panel p-6 rounded-xl border border-white/80 dark:border-white/10 shadow-sm relative h-full flex flex-col justify-center">
                        <Quote className="absolute top-4 right-4 text-primary/20" size={48} />
                        <p className="text-sm text-text-sub dark:text-text-sub-dark italic mb-4 relative z-10 transition-colors">"BYS transformed our digital presence completely. They aren't just a vendor; they are the engine behind our growth."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <span className="text-xs font-bold text-text-main dark:text-text-main-dark transition-colors">Sarah Jenkins, CEO</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* JOIN CTA */}
            <section className="relative rounded-3xl overflow-hidden p-8 mb-8 bg-surface-light dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/10 shadow-neumorphic-sm dark:shadow-none transition-colors mt-4">
                <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 dark:bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute left-0 bottom-0 w-48 h-48 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <div className="w-16 h-16 mx-auto bg-white dark:bg-black/40 rounded-full flex items-center justify-center mb-4 shadow-neumorphic-sm dark:shadow-none text-primary transition-colors">
                        <Zap size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Join the Growth Machine</h3>
                    <p className="text-text-sub dark:text-text-sub-dark text-sm mb-6 max-w-xs mx-auto transition-colors">Ready to elevate your digital strategy with a partner that cares? Let's build the future together.</p>
                    <button className="w-full md:w-auto py-4 px-12 bg-primary text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/60 hover:shadow-xl hover:scale-[1.02] hover:bg-primary-dark transition-all">
                        Get Started
                    </button>
                </div>
            </section>
        </main>
    );
}
