import {
    CheckCircle,
    CalendarMonth,
    Schedule,
    Check,
    Videocam,
    ContentCopy,
    Checklist
} from '@mui/icons-material';

export default function BookingConfirmation() {
    return (
        <div className="bg-background-light dark:bg-[#0a0a0a] min-h-screen flex justify-center selection:bg-primary selection:text-white pb-32 transition-colors">

            {/* Background Effects */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-white dark:bg-transparent rounded-full blur-[80px] opacity-80"></div>
            </div>

            <div className="w-full max-w-md md:max-w-2xl lg:max-w-[800px] flex flex-col relative z-10 px-6 pt-6">

                {/* Header */}


                <main className="flex flex-col gap-8">

                    {/* Confirmation Hero */}
                    <section className="relative mt-2">
                        <div className="bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-floating dark:shadow-none border border-white/60 dark:border-white/5 text-center transition-all">
                            <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-2 shadow-sm animate-bounce-short transition-colors">
                                    <CheckCircle className="text-green-600 dark:text-green-400" sx={{ fontSize: 48 }} />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark transition-colors">
                                    Strategy Session<br />
                                    <span className="text-primary">Confirmed</span>
                                </h2>
                                <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium transition-colors">
                                    Your growth roadmap starts here. Check your email for the calendar invitation and meeting link.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Booking Details Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Time Card */}
                        <div className="bg-primary rounded-2xl p-6 text-white flex flex-col justify-between h-40 relative overflow-hidden group shadow-[8px_8px_24px_rgba(104,54,244,0.3)] shadow-[inset_2px_2px_10px_rgba(255,255,255,0.1)]">
                            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
                                <CalendarMonth sx={{ fontSize: 100 }} />
                            </div>
                            <div>
                                <span className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1 block">When</span>
                                <h3 className="text-3xl font-bold">Oct 24</h3>
                                <p className="text-lg font-medium opacity-90">Thursday, 2024</p>
                            </div>
                            <div className="mt-auto flex items-center gap-2">
                                <Schedule fontSize="small" />
                                <span className="font-bold text-xl">10:00 AM</span>
                            </div>
                        </div>

                        {/* Consultant Card */}
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-[8px_8px_24px_rgba(220,220,230,0.5),-8px_-8px_24px_rgba(255,255,255,1)] dark:shadow-none flex items-center gap-5 transition-all">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-[#1a1a1a] shadow-lg bg-gray-100 transition-colors">
                                    <img alt="Consultant" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu9XEnFTFs3rov-2_MZILg_bqW-W1DIzkAnD2qaVPFZz5qdV3SNCKI57NyzScIclLh_msMHXeK4N-TU9ivYYb6P46gvLfHiWlEOCMUeGrKsBM8qbfPF-ay1VNHhyBb9uN_pWGg1W3MGDmCGaKMqO52lqkZgL7mkoPz1X3TYwbqkqosSeBJwVUiVNsT-PA5DqHCyWvxCNRJuGP4f0TCrDQBDe4yByGwc7pFUBfSk08lNOIcDvCmoYV_B9krLK4IsNMpkb9Nu20LY_c" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-[#1a1a1a] flex items-center justify-center transition-colors">
                                    <Check sx={{ fontSize: 14, color: 'white' }} />
                                </div>
                            </div>
                            <div>
                                <span className="text-xs text-primary font-bold uppercase tracking-wider">Your Consultant</span>
                                <h4 className="text-lg font-bold text-text-main dark:text-text-main-dark leading-tight mt-1 transition-colors">David Chen</h4>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark mt-0.5 transition-colors">Senior Growth Strategist</p>
                            </div>
                        </div>

                        {/* Location/Type Card */}
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-[8px_8px_24px_rgba(220,220,230,0.5),-8px_-8px_24px_rgba(255,255,255,1)] dark:shadow-none flex flex-col justify-center gap-3 md:col-span-2 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors">
                                    <Videocam />
                                </div>
                                <div>
                                    <span className="text-xs text-text-sub dark:text-text-sub-dark font-bold uppercase tracking-wider transition-colors">Meeting Type</span>
                                    <h4 className="text-base font-bold text-text-main dark:text-text-main-dark transition-colors">Video Consultation via Google Meet</h4>
                                </div>
                                <button className="ml-auto text-primary hover:bg-purple-50 dark:hover:bg-primary/10 p-2 rounded-lg transition-colors">
                                    <ContentCopy fontSize="small" />
                                </button>
                            </div>
                        </div>

                    </section>

                    {/* Promotional visual */}
                    <section className="relative rounded-3xl overflow-hidden shadow-xl dark:shadow-none h-64 md:h-80 group border border-white/5 transition-all">
                        <img alt="Abstract 3D Growth Engine" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2LYcwclRnIGdFT09teGcUmDHIUU-n008GsOmrzU3LnjMbqM3BG1zy1F2CSj_fjMMvJ_SsX34Sr0kRqb_fjpqAAObgj6a5hIH0AzUdKOlAN1I7AbqbzKiDKTsMsWUlvjblOhoRALice3x4MESu8sr4IYM02qcpOwJzLhEvR19ZQtGWTHAi6AggIILaSgBOFJNZnK56Tpf2-Mqh_koBRTW3OcHzgTPMqH14WBvUcgT2WGV2OYxcfGCtuGxJLWEiHJ4qu6osAkr_0w" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply"></div>
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                <span className="text-[10px] font-bold tracking-wide uppercase">System Online</span>
                            </div>
                            <h3 className="text-2xl font-bold">The Growth Engine</h3>
                            <p className="text-sm opacity-90">We are preparing your personalized audit.</p>
                        </div>
                    </section>

                    {/* Checklist */}
                    <section className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5 shadow-[8px_8px_24px_rgba(220,220,230,0.5),-8px_-8px_24px_rgba(255,255,255,1)] dark:shadow-none transition-all">
                        <h3 className="text-xl font-bold text-text-main dark:text-text-main-dark mb-6 flex items-center gap-2 transition-colors">
                            <Checklist className="text-primary" />
                            Prepare for success
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 w-5 h-5 rounded border border-primary flex items-center justify-center text-white bg-primary">
                                    <Check sx={{ fontSize: 16 }} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-text-main dark:text-text-main-dark transition-colors">Confirmation email sent</p>
                                    <p className="text-xs text-text-sub dark:text-text-sub-dark mt-0.5 transition-colors">We've sent the details to your inbox.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-primary transition-colors"></div>
                                <div>
                                    <p className="text-sm font-bold text-text-main dark:text-text-main-dark group-hover:text-primary transition-colors">Prepare your current stats</p>
                                    <p className="text-xs text-text-sub dark:text-text-sub-dark mt-0.5 transition-colors">Traffic, conversion rates, and monthly spend.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-primary transition-colors"></div>
                                <div>
                                    <p className="text-sm font-bold text-text-main dark:text-text-main-dark group-hover:text-primary transition-colors">Gather your questions</p>
                                    <p className="text-xs text-text-sub dark:text-text-sub-dark mt-0.5 transition-colors">Write down top 3 challenges you are facing.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="text-center pt-4 pb-8">
                        <button className="text-sm font-semibold text-text-sub dark:text-text-sub-dark hover:text-primary transition-colors">
                            Need to reschedule?
                        </button>
                    </section>

                </main>
            </div>
        </div>
    );
}
