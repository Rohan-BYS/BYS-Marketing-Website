import {
    ArrowForward,
    ShoppingCart,
    BusinessCenter,
    School,
    CalendarMonth,
    Rocket,
    ChevronRight,
    ArrowRightAlt
} from '@mui/icons-material';

export default function PortfolioDemos() {
    return (
        <main className="flex flex-col gap-12 px-6 pt-12 pb-32 max-w-[1000px] mx-auto w-full">

            {/* HERO SECTION */}
            <section className="relative mt-2">
                <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-floating border-white/60 dark:border-white/5 dark:bg-[#1a1a1a]/80 transition-all">
                    <div className="absolute -right-12 -top-12 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-500"></div>
                    <div className="relative z-10 flex flex-col gap-6 text-center md:text-left">
                        <div className="inline-flex items-center justify-center md:justify-start gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 w-fit backdrop-blur-sm shadow-sm mx-auto md:mx-0 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.6)]"></span>
                            <span className="text-xs font-semibold text-primary tracking-wide">Web Development</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark transition-colors">
                            Types of Incredible <br className="hidden md:block" />
                            <span className="text-primary">Websites We Develop</span>
                        </h2>

                        <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-lg max-w-[90%] font-medium mx-auto md:mx-0 transition-colors">
                            A showcase of high-performance digital machines tailored to your brand and work culture.
                        </p>

                        <div className="flex gap-4 pt-2 justify-center md:justify-start">
                            <button className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-200 dark:shadow-purple-900/60 active:scale-[0.98] transition-all duration-200 flex items-center gap-2 group/btn hover:bg-primary-dark hover:shadow-glow-purple">
                                <span>Start Project</span>
                                <ArrowForward fontSize="small" className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* TYPES GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Ecommerce Featured */}
                <div className="bg-white/85 dark:bg-[#1a1a1a]/85 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300 border border-white/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_12px_40px_rgba(104,54,244,0.12)] hover:border-primary/20 lg:col-span-2">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-white/5 flex items-center justify-center text-primary mb-2 transition-colors">
                            <ShoppingCart />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider transition-colors">Featured</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-center h-full">
                        <div className="flex-1 flex flex-col items-start">
                            <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Ecommerce Store</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed mb-4 transition-colors">
                                Get your own ecommerce store like Amazon & Flipkart. Multi-vendor support, secure payments, and inventory management tailored for scale.
                            </p>
                            <button className="bg-primary text-white text-xs font-bold py-2 px-5 rounded-full shadow-md shadow-purple-100 dark:shadow-purple-900/40 hover:bg-primary-dark transition-colors flex items-center gap-1 mt-auto">
                                See Preview <ChevronRight fontSize="small" />
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 h-40 bg-gray-100 dark:bg-black/40 rounded-lg overflow-hidden shadow-inner dark:shadow-none relative border border-gray-200 dark:border-white/5 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-8 bg-white dark:bg-white/5 border-b border-gray-100 dark:border-white/5 flex items-center px-2 gap-1 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="mt-8 p-3 grid grid-cols-2 gap-2">
                                <div className="bg-white dark:bg-white/10 rounded h-20 shadow-sm dark:shadow-none transition-colors"></div>
                                <div className="bg-white dark:bg-white/10 rounded h-20 shadow-sm dark:shadow-none transition-colors"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business Portfolio */}
                <div className="bg-white/85 dark:bg-[#1a1a1a]/85 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300 border border-white/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_12px_40px_rgba(104,54,244,0.12)] hover:border-primary/20">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-white/5 flex items-center justify-center text-primary mb-2 transition-colors">
                        <BusinessCenter />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Business Portfolio</h3>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed mb-4 line-clamp-3 transition-colors">
                            Showcase your strengths and business features. Perfect for agencies and consultants needing a high-end corporate identity.
                        </p>
                        <button className="border border-gray-200 dark:border-white/10 text-text-main dark:text-text-main-dark text-xs font-bold py-2 px-4 rounded-full hover:border-primary hover:text-primary transition-colors flex items-center gap-1 w-fit mt-auto">
                            Learn More <ArrowRightAlt fontSize="small" />
                        </button>
                    </div>
                    <div className="h-32 bg-gray-50 dark:bg-black/40 rounded-lg mt-auto overflow-hidden relative border border-gray-100 dark:border-white/5 transition-colors group-hover:shadow-inner dark:group-hover:shadow-none">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20">
                            <BusinessCenter sx={{ fontSize: 60 }} />
                        </div>
                    </div>
                </div>

                {/* LMS Platform */}
                <div className="bg-white/85 dark:bg-[#1a1a1a]/85 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300 border border-white/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_12px_40px_rgba(104,54,244,0.12)] hover:border-primary/20">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-white/5 flex items-center justify-center text-primary mb-2 transition-colors">
                        <School />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">LMS Platform</h3>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed mb-4 transition-colors">
                            Start selling courses like Udemy. Complete learning management system for schools and educators.
                        </p>
                        <button className="border border-gray-200 dark:border-white/10 text-text-main dark:text-text-main-dark text-xs font-bold py-2 px-4 rounded-full hover:border-primary hover:text-primary transition-colors flex items-center gap-1 w-fit mt-auto">
                            Learn More <ArrowRightAlt fontSize="small" />
                        </button>
                    </div>
                    <div className="h-32 bg-gray-50 dark:bg-black/40 rounded-lg mt-auto overflow-hidden relative border border-gray-100 dark:border-white/5 transition-colors group-hover:shadow-inner dark:group-hover:shadow-none">
                        <div className="p-2 space-y-2 opacity-50 dark:opacity-20">
                            <div className="h-2 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            <div className="h-20 w-full bg-white dark:bg-black rounded border border-gray-200 dark:border-white/10"></div>
                        </div>
                    </div>
                </div>

                {/* Booking Based Sites */}
                <div className="bg-white/85 dark:bg-[#1a1a1a]/85 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300 border border-white/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_12px_40px_rgba(104,54,244,0.12)] hover:border-primary/20">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-white/5 flex items-center justify-center text-primary mb-2 transition-colors">
                        <CalendarMonth />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Booking Based Sites</h3>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed mb-4 transition-colors">
                            Ideal for travel, restaurants, and hotels. Robust booking engines with calendar integration.
                        </p>
                        <button className="border border-gray-200 dark:border-white/10 text-text-main dark:text-text-main-dark text-xs font-bold py-2 px-4 rounded-full hover:border-primary hover:text-primary transition-colors flex items-center gap-1 w-fit mt-auto">
                            Learn More <ArrowRightAlt fontSize="small" />
                        </button>
                    </div>
                    <div className="h-32 bg-gray-50 dark:bg-black/40 rounded-lg mt-auto overflow-hidden relative border border-gray-100 dark:border-white/5 flex items-center justify-center transition-colors group-hover:shadow-inner dark:group-hover:shadow-none">
                        <div className="grid grid-cols-3 gap-1 p-2 opacity-30 dark:opacity-40">
                            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                            <div className="w-6 h-6 bg-primary rounded-sm shadow-[0_0_8px_rgba(104,54,244,0.6)]"></div>
                            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Landing Pages */}
                <div className="bg-white/85 dark:bg-[#1a1a1a]/85 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300 border border-white/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_12px_40px_rgba(104,54,244,0.12)] hover:border-primary/20">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-white/5 flex items-center justify-center text-primary mb-2 transition-colors">
                        <Rocket />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Landing Pages</h3>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed mb-4 transition-colors">
                            High-conversion pages focused on lead generation. Optimized for ads and marketing campaigns.
                        </p>
                        <button className="border border-gray-200 dark:border-white/10 text-text-main dark:text-text-main-dark text-xs font-bold py-2 px-4 rounded-full hover:border-primary hover:text-primary transition-colors flex items-center gap-1 w-fit mt-auto">
                            Learn More <ArrowRightAlt fontSize="small" />
                        </button>
                    </div>
                    <div className="h-32 bg-gray-50 dark:bg-black/40 rounded-lg mt-auto overflow-hidden relative border border-gray-100 dark:border-white/5 flex flex-col items-center justify-center gap-2 transition-colors group-hover:shadow-inner dark:group-hover:shadow-none">
                        <div className="w-20 h-6 bg-primary/20 dark:bg-primary/40 rounded-md"></div>
                        <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-12 h-2 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                    </div>
                </div>

            </section>

            {/* CAPABILITIES / PROJECT GALLERIES */}
            <section className="mt-8">
                <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-text-main dark:text-text-main-dark transition-colors">See Some Of Our <span className="text-primary">Capabilities</span></h3>
                    <p className="text-text-sub dark:text-text-sub-dark mt-2 text-sm transition-colors">Real projects delivered with precision.</p>
                </div>

                <div className="columns-1 md:columns-2 gap-6 space-y-6">
                    {/* GlobeChart */}
                    <div className="break-inside-avoid bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-neumorphic-sm dark:shadow-none border border-gray-100 dark:border-white/5 group transition-colors">
                        <div className="h-56 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden transition-colors">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxuDf2M5mtWSGgqeB8BUwqYzNCvtV5WY2Rr1hh5-AEOFtMrrQlp5wPX9Lr4My3vuOxv-htVTRauxY_fLqMACCMB4AYaw4TAzVWQmmhhiwmcSqgJ5am6VdX07F0HGfYKaDagosbTj9EzWOLxVv-CAMyKBBzsrfCR31uFQMpVDNx1JUPgZIzi6KeQKD2QVtmUropbmWa9pjnot8Q3cL-57WAd4B81T3s-Zb6sRHHGQZvtyKKttXRLrTQWA2v49XnuCcEvsn54fOtluw')" }}></div>
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-5">
                            <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark transition-colors">GlobeChart</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark mb-4 transition-colors">Business Finance & Analytics</p>
                            <button className="w-full py-3 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 hover:bg-primary-dark transition-colors">
                                See Preview
                            </button>
                        </div>
                    </div>

                    {/* Furnika */}
                    <div className="break-inside-avoid bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-neumorphic-sm dark:shadow-none border border-gray-100 dark:border-white/5 group transition-colors">
                        <div className="h-64 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 relative overflow-hidden transition-colors">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKtoauMmqqGSxGPjtLRlpuYJ48zgzvPA54fTW6wOHNnkIyZzyubnGpPKisCBwEKkWMalDHl_e6zghJdiZ5XinkfS_27l8fOcbh4ueq3gXKAprbmoXMZLzk1Swf7akIJC0w-_LKR1NF_QylFVhQlSZoFEZnxJeoIFi5wRkGPPLbEqs-pUpoxRRQBU-vhvmlIvcGKvJrqKP-gUbmJLgSGLcOnWDuMbEMmXi94ySXyCWsbhH9nkRNnaUU5kJlxNsZBD9NYwYfvflYH8I')" }}></div>
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-5">
                            <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark transition-colors">Furnika</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark mb-4 transition-colors">Furniture Business E-com</p>
                            <button className="w-full py-3 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 hover:bg-primary-dark transition-colors">
                                See Preview
                            </button>
                        </div>
                    </div>

                    {/* Social Vibe */}
                    <div className="break-inside-avoid bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-neumorphic-sm dark:shadow-none border border-gray-100 dark:border-white/5 group transition-colors">
                        <div className="h-56 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 relative overflow-hidden transition-colors">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFNL1LNvETbiEk0GJcPofeHjUtGzYQ9WzU-Wl6ayDDdh1iUkOb7cHaZ0zIkt7v6jJ6I9DaQS2bypqG0W-SZKEsUqr1yKV279wlrpbyanmChX-_rsqFzsK9F_HKJ5zFoZXmvfPw1UazWJ_ycB4i-9ljv-jDMdvsyI9DG0kzm8rP8cZTQ6TMbPwnfKXManVKKyOFg-_fPxJjGLrdlIVo1kMzAx4aRogABTv265KJ2FlGQoj8dtJfOLqwAWXJi3qYBw4MzfYMaf8vOzY')" }}></div>
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-5">
                            <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark transition-colors">Social Vibe</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark mb-4 transition-colors">Business Portfolio & Agency</p>
                            <button className="w-full py-3 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 hover:bg-primary-dark transition-colors">
                                See Preview
                            </button>
                        </div>
                    </div>

                    {/* OnlyBank */}
                    <div className="break-inside-avoid bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-neumorphic-sm dark:shadow-none border border-gray-100 dark:border-white/5 group transition-colors">
                        <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 relative overflow-hidden transition-colors">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_bXlDDQLk6YCUOaTqB-9-WB03DYFbNDzt5rp88sUOlStWi8SS5sXoTtL9wRdzLJ_txKiiFdkKQMV1yWF7Iivlqhc7SCl7W71RpyIRAyE1b335ozcupGakJlVKlSSFPhGCnk9nrnu9BVCsjDGV_9UcRXz_AGL3EAQQh5tdmCJn7-yBoz2x_Sk4dP7f5f_RG2T2OkjQnAXlKHcv9moUQ1zN_PO5B6lKfPhfY0TiVQnTdSc_z9yvAcOjy0LWNr3Nqjo9MekPSEgBQqE')" }}></div>
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-5">
                            <h4 className="font-bold text-lg text-text-main dark:text-text-main-dark transition-colors">OnlyBank</h4>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark mb-4 transition-colors">NBFC Apps & Fintech</p>
                            <button className="w-full py-3 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 hover:bg-primary-dark transition-colors">
                                See Preview
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
