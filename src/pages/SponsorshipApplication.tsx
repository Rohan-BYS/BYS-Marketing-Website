import {
    CloudUpload,
    ArrowForward,
    School,
    AttachMoney,
    SmartToy,
    Close,
    Send
} from '@mui/icons-material';
import { useState } from 'react';

export default function SponsorshipApplication() {
    const [isChatOpen, setIsChatOpen] = useState(true);

    return (
        <div className="bg-background-light dark:bg-[#0a0a0a] min-h-screen flex justify-center selection:bg-primary selection:text-white pb-32 transition-colors overflow-hidden relative">

            {/* Background Effects */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-white dark:bg-transparent rounded-full blur-[80px] opacity-80"></div>
            </div>

            {/* AI Assistant Chat popup equivalent */}
            {isChatOpen && (
                <div className="fixed inset-0 z-[60] flex items-end justify-center pb-32 pointer-events-none">
                    <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-sm pointer-events-auto transition-opacity duration-300"></div>
                    <div className="relative w-[90%] max-w-[380px] bg-white/70 dark:bg-[#1a1a1a]/80 border border-white/90 dark:border-white/10 backdrop-blur-xl rounded-3xl shadow-floating pointer-events-auto flex flex-col overflow-hidden animate-[fadeInUp_0.3s_ease-out]">

                        {/* Chat Header */}
                        <div className="px-6 py-5 border-b border-gray-100/50 dark:border-white/5 flex items-center justify-between bg-white/50 dark:bg-black/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#8A63F8] flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-none">
                                    <SmartToy className="text-white" fontSize="small" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-text-main dark:text-text-main-dark text-sm transition-colors">BYS Growth Assistant</h3>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        <span className="text-[10px] text-text-sub dark:text-text-sub-dark font-medium uppercase tracking-wide transition-colors">Online Now</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsChatOpen(false)}
                                className="w-8 h-8 rounded-full flex items-center justify-center text-text-sub dark:text-text-sub-dark hover:bg-gray-100 dark:hover:bg-white/5 hover:text-red-500 transition-colors"
                            >
                                <Close fontSize="small" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 p-5 max-h-[400px] overflow-y-auto flex flex-col gap-4 bg-white/30 dark:bg-transparent">
                            {/* AI Message */}
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-surface-grey dark:bg-gray-800 flex-shrink-0 flex items-center justify-center border border-white dark:border-white/5">
                                    <SmartToy className="text-primary" sx={{ fontSize: 16 }} />
                                </div>
                                <div className="bg-white/60 dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-white/80 dark:border-white/10 p-3.5 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] transition-colors">
                                    <p className="text-sm text-text-main dark:text-text-main-dark leading-relaxed">Hello! I'm your BYS Growth Assistant. How can I help you with your sponsorship application today?</p>
                                </div>
                            </div>

                            {/* User Message */}
                            <div className="flex gap-3 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center border border-white dark:border-transparent shadow-md text-white text-[10px] font-bold">
                                    ME
                                </div>
                                <div className="bg-primary p-3.5 rounded-2xl rounded-tr-none shadow-md shadow-purple-200/50 dark:shadow-none max-w-[85%] text-white">
                                    <p className="text-sm leading-relaxed">I have a question about the pitch deck requirements.</p>
                                </div>
                            </div>

                            {/* Typing Indicator */}
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-surface-grey dark:bg-gray-800 flex-shrink-0 flex items-center justify-center border border-white dark:border-white/5">
                                    <SmartToy className="text-primary" sx={{ fontSize: 16 }} />
                                </div>
                                <div className="bg-white/60 dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-white/80 dark:border-white/10 px-4 py-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce delay-150"></span>
                                </div>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 bg-white/60 dark:bg-black/40 border-t border-white/50 dark:border-white/5">
                            <div className="relative flex items-center">
                                <input
                                    className="w-full pl-5 pr-12 py-3.5 bg-surface-light dark:bg-[#1a1a1a] rounded-full text-sm text-text-main dark:text-text-main-dark placeholder-gray-400 shadow-[inset_2px_2px_5px_rgba(209,213,219,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] border border-transparent focus:border-primary focus:bg-white dark:focus:bg-black focus:outline-none transition-all"
                                    placeholder="Type your message..."
                                    type="text"
                                />
                                <button className="absolute right-2 p-2 bg-primary text-white rounded-full shadow-lg shadow-purple-200 dark:shadow-none hover:shadow-glow-purple hover:scale-105 transition-all">
                                    <Send sx={{ fontSize: 18 }} />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-[9px] text-gray-400">Powered by BYS Marketing AI</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full max-w-md md:max-w-2xl lg:max-w-[800px] flex flex-col relative z-20 pt-6">

                {/* Header */}


                <main className="flex flex-col gap-8 px-6">

                    {/* Hero Section */}
                    <section className="relative mt-2">
                        <div className="bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden group shadow-floating dark:shadow-none border border-white/60 dark:border-white/5 transition-all">
                            <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-primary/10 border border-purple-100 dark:border-primary/20 w-fit backdrop-blur-sm shadow-sm transition-colors">
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

                    {/* Form Section */}
                    <section className="relative z-10">
                        <div className="bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] dark:shadow-none border border-white/60 dark:border-white/5 transition-all">
                            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
                                    <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10"></div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1" htmlFor="name">Your Name</label>
                                        <input
                                            className="w-full rounded-xl px-4 py-3.5 text-sm text-text-main dark:text-text-main-dark placeholder-gray-400 bg-surface-light dark:bg-black/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-black focus:outline-none shadow-[inset_2px_2px_5px_rgba(209,213,219,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] transition-all"
                                            id="name"
                                            placeholder="Jane Doe"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1" htmlFor="startup">Startup Name</label>
                                        <input
                                            className="w-full rounded-xl px-4 py-3.5 text-sm text-text-main dark:text-text-main-dark placeholder-gray-400 bg-surface-light dark:bg-black/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-black focus:outline-none shadow-[inset_2px_2px_5px_rgba(209,213,219,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] transition-all"
                                            id="startup"
                                            placeholder="NextBigThing.ai"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                {/* Select Input (simplified styling vs detailed CSS bg image for purity) */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1" htmlFor="industry">Industry</label>
                                    <select
                                        className="w-full rounded-xl px-4 py-3.5 text-sm text-text-main dark:text-text-main-dark bg-surface-light dark:bg-black/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-black focus:outline-none shadow-[inset_2px_2px_5px_rgba(209,213,219,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] transition-all cursor-pointer appearance-none"
                                        id="industry"
                                        defaultValue=""
                                    >
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
                                    <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1" htmlFor="goals">Growth Goals</label>
                                    <textarea
                                        className="w-full rounded-xl px-4 py-3.5 text-sm text-text-main dark:text-text-main-dark placeholder-gray-400 resize-none bg-surface-light dark:bg-black/50 border border-transparent focus:border-primary focus:bg-white dark:focus:bg-black focus:outline-none shadow-[inset_2px_2px_5px_rgba(209,213,219,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] transition-all"
                                        id="goals"
                                        placeholder="Describe your primary growth objectives for the next 12 months..."
                                        rows={3}
                                    ></textarea>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-text-main dark:text-text-main-dark uppercase tracking-wider ml-1">Pitch Deck</label>
                                    <div className="w-full rounded-xl px-6 py-8 text-center cursor-pointer group relative overflow-hidden bg-surface-light dark:bg-[#1a1a1a] border-2 border-dashed border-gray-300 dark:border-white/10 hover:border-primary dark:hover:border-primary hover:bg-green-50 dark:hover:bg-primary/5 transition-all duration-300">
                                        <input accept=".pdf,.ppt,.pptx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" type="file" />
                                        <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                                            <span className="w-10 h-10 rounded-full bg-white dark:bg-[#0a0a0a] shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <CloudUpload />
                                            </span>
                                            <div>
                                                <p className="text-sm font-semibold text-text-main dark:text-text-main-dark transition-colors">Click to upload or drag and drop</p>
                                                <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 transition-colors">PDF or PPT (Max 10MB)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="mt-4 w-full bg-primary text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-none active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group hover:bg-primary-dark hover:shadow-glow-purple"
                                    type="submit"
                                >
                                    <span>Submit Application</span>
                                    <ArrowForward fontSize="small" className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* Features Grid */}
                    <section className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-5 border border-gray-100 dark:border-white/5 shadow-[8px_8px_24px_rgba(220,220,230,0.5),-8px_-8px_24px_rgba(255,255,255,1)] dark:shadow-none flex flex-col justify-between h-40 group hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-none transition-all duration-300 cursor-pointer">
                            <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 shadow-[inset_3px_3px_7px_rgba(209,213,219,0.4),inset_-3px_-3px_7px_rgba(255,255,255,1)] dark:shadow-none flex items-center justify-center text-primary group-hover:text-primary-dark transition-colors">
                                <School fontSize="large" />
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main dark:text-text-main-dark text-lg transition-colors">Mentorship</h4>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 transition-colors">Learn from experts</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-5 border border-gray-100 dark:border-white/5 shadow-[8px_8px_24px_rgba(220,220,230,0.5),-8px_-8px_24px_rgba(255,255,255,1)] dark:shadow-none flex flex-col justify-between h-40 group hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-none transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 shadow-[inset_3px_3px_7px_rgba(209,213,219,0.4),inset_-3px_-3px_7px_rgba(255,255,255,1)] dark:shadow-none flex items-center justify-center text-primary transition-colors">
                                <AttachMoney fontSize="large" />
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main dark:text-text-main-dark text-lg transition-colors">Funding</h4>
                                <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 transition-colors">Seed opportunities</p>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}
