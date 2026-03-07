import {
    Search,
    Timer,
    BookmarkBorder,
    CheckCircle
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ExclusiveOffers() {
    return (
        <div className="bg-background-light dark:bg-[#0a0a0a] min-h-screen flex justify-center selection:bg-primary selection:text-white pb-32 transition-colors">
            {/* Background Effects */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-white dark:bg-transparent rounded-full blur-[80px] opacity-80"></div>
            </div>

            <div className="w-full max-w-[1200px] flex flex-col relative z-10 px-6 pt-6">

                {/* Header */}


                <main className="flex flex-col gap-10">

                    {/* Hero Section */}
                    <section className="relative mt-2">
                        <div className="bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-xl rounded-3xl p-10 relative overflow-hidden group border border-white/60 dark:border-white/5 shadow-floating dark:shadow-none transition-all">
                            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                            <div className="relative z-10 flex flex-col gap-4 text-center items-center">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-primary/10 border border-purple-100 dark:border-primary/20 w-fit backdrop-blur-sm shadow-sm transition-colors">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.6)]"></span>
                                    <span className="text-xs font-semibold text-primary tracking-wide">Limited Time Deals</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-text-main dark:text-text-main-dark max-w-3xl transition-colors">
                                    Exclusive <span className="text-primary">Growth Offers</span>
                                </h2>
                                <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-lg max-w-2xl font-medium transition-colors">
                                    Unlock premium performance at specialized rates for your startup or enterprise.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Search and Filters */}
                    <section className="flex flex-col gap-6 items-center">
                        <div className="w-full max-w-2xl relative">
                            <input
                                className="w-full h-14 pl-12 pr-6 rounded-2xl bg-white/50 dark:bg-black/40 backdrop-blur-md border border-white/80 dark:border-white/10 text-text-main dark:text-text-main-dark placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/80 dark:focus:bg-black/60 transition-all shadow-sm"
                                placeholder="Search for offers (e.g., Web Development)..."
                                type="text"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-lg shadow-purple-200 dark:shadow-none hover:shadow-glow-purple transition-all">All Offers</button>
                            <button className="px-5 py-2 rounded-full bg-white dark:bg-[#1a1a1a] text-text-sub dark:text-text-sub-dark text-sm font-medium border border-gray-100 dark:border-white/5 hover:text-primary hover:border-primary/30 transition-colors shadow-sm dark:shadow-none">Web Dev</button>
                            <button className="px-5 py-2 rounded-full bg-white dark:bg-[#1a1a1a] text-text-sub dark:text-text-sub-dark text-sm font-medium border border-gray-100 dark:border-white/5 hover:text-primary hover:border-primary/30 transition-colors shadow-sm dark:shadow-none">Marketing</button>
                            <button className="px-5 py-2 rounded-full bg-white dark:bg-[#1a1a1a] text-text-sub dark:text-text-sub-dark text-sm font-medium border border-gray-100 dark:border-white/5 hover:text-primary hover:border-primary/30 transition-colors shadow-sm dark:shadow-none">Media</button>
                            <button className="px-5 py-2 rounded-full bg-white dark:bg-[#1a1a1a] text-text-sub dark:text-text-sub-dark text-sm font-medium border border-gray-100 dark:border-white/5 hover:text-primary hover:border-primary/30 transition-colors shadow-sm dark:shadow-none">IT Support</button>
                        </div>
                    </section>

                    {/* Offers Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {/* Hostinger Offer */}
                        <div className="bg-white/85 dark:bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-lg shadow-purple-200/50 dark:shadow-purple-900/20 border-2 border-primary/20 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(104,54,244,0.25)] hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-primary stroke-current stroke-2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Active Referral Offer
                                </div>
                                <BookmarkBorder className="text-primary transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-text-main dark:text-text-main-dark mb-2 relative z-10">20% to 40% Off Hostinger Premium</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark mb-6 relative z-10 font-medium">Fast, secure web hosting with free domain and 24/7 support. The exact infrastructure BYS uses.</p>
                            <div className="space-y-3 mb-8 flex-grow relative z-10">
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Free Domain & Professional Email</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>LiteSpeed Servers for Max Speed</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Free SSL & Cloudflare Included</span>
                                </div>
                            </div>
                            <Link to="/hostinger-discount-code" className="w-full text-center py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-purple-300/50 dark:shadow-none hover:shadow-glow-purple transition-all duration-300 active:scale-95 block relative z-10 border border-white/10">
                                Grab This Discount
                            </Link>
                        </div>

                        {/* Offer 1 */}
                        <div className="bg-white/85 dark:bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-lg shadow-gray-100/50 dark:shadow-none border border-white/60 dark:border-white/5 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(104,54,244,0.15)] hover:border-primary/20 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-purple-100 dark:bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors">
                                    <Timer fontSize="small" />
                                    Limited Time Left
                                </div>
                                <BookmarkBorder className="text-gray-300 dark:text-gray-600 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">20% Off Full-Stack Development</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark mb-6 transition-colors">Launch your MVP faster with our dedicated sprint team.</p>
                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>React/Node.js Stack</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>2-Week Sprint Cycle</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Free Architecture Audit</span>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-md shadow-purple-200 dark:shadow-none hover:shadow-glow-purple hover:bg-primary-dark transition-all duration-300 active:scale-95">
                                Claim Offer
                            </button>
                        </div>

                        {/* Offer 2 */}
                        <div className="bg-white/85 dark:bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-lg shadow-gray-100/50 dark:shadow-none border border-white/60 dark:border-white/5 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(104,54,244,0.15)] hover:border-primary/20 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-purple-100 dark:bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors">
                                    <Timer fontSize="small" />
                                    Ends in 2 Days
                                </div>
                                <BookmarkBorder className="text-gray-300 dark:text-gray-600 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Growth Marketing Bundle</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark mb-6 transition-colors">Comprehensive audit and strategy for scaling startups.</p>
                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>SEO & Content Strategy</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Paid Ad Setup (PPC)</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Conversion Optimization</span>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-md shadow-purple-200 dark:shadow-none hover:shadow-glow-purple hover:bg-primary-dark transition-all duration-300 active:scale-95">
                                Claim Offer
                            </button>
                        </div>

                        {/* Offer 3 */}
                        <div className="bg-white/85 dark:bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-lg shadow-gray-100/50 dark:shadow-none border border-white/60 dark:border-white/5 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(104,54,244,0.15)] hover:border-primary/20 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-purple-100 dark:bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors">
                                    <Timer fontSize="small" />
                                    5 Spots Left
                                </div>
                                <BookmarkBorder className="text-gray-300 dark:text-gray-600 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Enterprise IT Audit</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark mb-6 transition-colors">Secure your infrastructure with a full-scale security review.</p>
                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Vulnerability Scanning</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Hardware Health Check</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Compliance Report</span>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-md shadow-purple-200 dark:shadow-none hover:shadow-glow-purple hover:bg-primary-dark transition-all duration-300 active:scale-95">
                                Claim Offer
                            </button>
                        </div>

                        {/* Offer 4 */}
                        <div className="bg-white/85 dark:bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-lg shadow-gray-100/50 dark:shadow-none border border-white/60 dark:border-white/5 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(104,54,244,0.15)] hover:border-primary/20 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-purple-100 dark:bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors">
                                    <Timer fontSize="small" />
                                    Limited Time Left
                                </div>
                                <BookmarkBorder className="text-gray-300 dark:text-gray-600 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Social Media Kickstart</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark mb-6 transition-colors">Boost your brand presence across all major platforms.</p>
                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>15 Custom Graphics</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Profile Optimization</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Content Calendar</span>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-md shadow-purple-200 dark:shadow-none hover:shadow-glow-purple hover:bg-primary-dark transition-all duration-300 active:scale-95">
                                Claim Offer
                            </button>
                        </div>

                        {/* Offer 5 */}
                        <div className="bg-white/85 dark:bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-lg shadow-gray-100/50 dark:shadow-none border border-white/60 dark:border-white/5 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(104,54,244,0.15)] hover:border-primary/20 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-purple-100 dark:bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors">
                                    <Timer fontSize="small" />
                                    Expires Soon
                                </div>
                                <BookmarkBorder className="text-gray-300 dark:text-gray-600 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Cloud Migration Pro</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark mb-6 transition-colors">Seamlessly move your legacy systems to the cloud.</p>
                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>AWS/Azure Setup</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Zero Downtime Plan</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Post-Migration Support</span>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-md shadow-purple-200 dark:shadow-none hover:shadow-glow-purple hover:bg-primary-dark transition-all duration-300 active:scale-95">
                                Claim Offer
                            </button>
                        </div>

                        {/* Offer 6 */}
                        <div className="bg-white/85 dark:bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-lg shadow-gray-100/50 dark:shadow-none border border-white/60 dark:border-white/5 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(104,54,244,0.15)] hover:border-primary/20 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-purple-100 dark:bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors">
                                    <Timer fontSize="small" />
                                    Only 2 Left
                                </div>
                                <BookmarkBorder className="text-gray-300 dark:text-gray-600 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-main dark:text-text-main-dark mb-2 transition-colors">Video Production Pack</h3>
                            <p className="text-sm text-text-sub dark:text-text-sub-dark mb-6 transition-colors">High-quality video assets for your marketing campaigns.</p>
                            <div className="space-y-3 mb-8 flex-grow">
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Scriptwriting</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>4k Filming & Editing</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                                    <CheckCircle fontSize="small" className="text-primary" />
                                    <span>Motion Graphics</span>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-md shadow-purple-200 dark:shadow-none hover:shadow-glow-purple hover:bg-primary-dark transition-all duration-300 active:scale-95">
                                Claim Offer
                            </button>
                        </div>

                    </section>
                </main>
            </div>
        </div>
    );
}
