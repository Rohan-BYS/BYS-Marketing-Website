export default function SponsorshipForm() {
    return (
        <main className="flex flex-col gap-8 px-6 pt-8 pb-32 max-w-md md:max-w-2xl lg:max-w-[800px] mx-auto w-full">
            <section className="relative mt-2">
                <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group shadow-floating border-white/60 dark:border-white/10 dark:shadow-glow-purple">
                    <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 w-fit backdrop-blur-sm shadow-sm transition-colors">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.6)]"></span>
                            <span className="text-xs font-semibold text-primary tracking-wide">Applications Open: Q4 Cohort</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark transition-colors">
                            Apply for Your <br />
                            <span className="text-primary">Growth Journey</span>
                        </h2>
                        <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium transition-colors">
                            Join our exclusive sponsorship program designed to accelerate high-potential startups. Tell us about your vision.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative z-10">
                <div className="glass-panel rounded-3xl p-6 md:p-8 shadow-neumorphic dark:shadow-neumorphic-dark border-white/60 dark:border-white/5 transition-all">
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
                            <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10"></div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="name">Your Name</label>
                                <input className="w-full rounded-xl px-4 py-3.5 text-sm text-text-main dark:text-text-main-dark dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none" id="name" placeholder="Jane Doe" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="startup">Startup Name</label>
                                <input className="w-full rounded-xl px-4 py-3.5 text-sm text-text-main dark:text-text-main-dark dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none" id="startup" placeholder="NextBigThing.ai" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="industry">Industry</label>
                            <select className="w-full rounded-xl px-4 py-3.5 text-sm text-text-main dark:text-text-main-dark dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none cursor-pointer transition-all outline-none appearance-none" id="industry" defaultValue="">
                                <option disabled value="">Select industry...</option>
                                <option value="fintech">FinTech</option>
                                <option value="healthtech">HealthTech</option>
                                <option value="saas">SaaS</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="ai">Artificial Intelligence</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors" htmlFor="goals">Growth Goals</label>
                            <textarea className="w-full rounded-xl px-4 py-3.5 text-sm text-text-main dark:text-text-main-dark dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner dark:shadow-none placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none resize-none" id="goals" placeholder="Describe your primary growth objectives for the next 12 months..." rows={3}></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1 transition-colors">Pitch Deck</label>
                            <div className="w-full rounded-xl px-6 py-8 text-center cursor-pointer group relative overflow-hidden dark:bg-[#1a1a1a] border-2 border-dashed border-gray-300 dark:border-white/20 hover:border-primary dark:hover:border-primary transition-all">
                                <input accept=".pdf,.ppt,.pptx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" type="file" />
                                <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                                    <span className="w-10 h-10 rounded-full bg-white dark:bg-black/40 shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">cloud_upload</span>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-text-main dark:text-white transition-colors">Click to upload or drag and drop</p>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 transition-colors">PDF or PPT (Max 10MB)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="mt-4 w-full bg-primary text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/60 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group hover:bg-primary-dark hover:shadow-glow-purple" type="submit">
                            <span>Submit Application</span>
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </form>
                </div>
            </section>

            <section className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-5 flex flex-col justify-between h-40 group cursor-pointer hover:-translate-y-1 shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark hover:shadow-neumorphic dark:hover:shadow-neumorphic-dark border border-transparent dark:border-white/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-black/40 flex items-center justify-center text-primary group-hover:text-primary-dark shadow-inner dark:shadow-none transition-colors">
                        <span className="material-symbols-outlined text-3xl filled">school</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main dark:text-text-main-dark text-lg transition-colors">Mentorship</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 transition-colors">Learn from experts</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-5 flex flex-col justify-between h-40 group hover:-translate-y-1 shadow-neumorphic-sm dark:shadow-neumorphic-sm-dark hover:shadow-neumorphic dark:hover:shadow-neumorphic-dark border border-transparent dark:border-white/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-black/40 flex items-center justify-center text-primary shadow-inner dark:shadow-none transition-colors">
                        <span className="material-symbols-outlined text-3xl filled">attach_money</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main dark:text-text-main-dark text-lg transition-colors">Funding</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 transition-colors">Seed opportunities</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
