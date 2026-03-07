import {
    ArrowRight,
    Play,
    Globe,
    Heart,
    Users,
    Video,
    Handshake,
    Megaphone,
    Plus,
    Calendar,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Waves from '../components/ReactBits/Waves';
import DesktopSidebar from '../components/DesktopSidebar';
import ServiceCrossLinks from '../components/ServiceCrossLinks';

export default function SocialMediaService() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Social Media Marketing",
        "provider": { "@type": "Organization", "name": "BYS Marketing", "url": "https://bys.marketing" },
        "areaServed": "Worldwide",
        "description": "Data-driven social media marketing with 2.5M+ viral reach. Community management, content creation, influencer collaborations, and paid social campaigns."
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark min-h-screen flex justify-center selection:bg-primary selection:text-white overflow-x-hidden">
            <SEOHead
                title="Social Media Marketing Services"
                description="2.5M+ viral reach. Community management, algorithm-optimized content, influencer collaborations & paid social campaigns that convert scrolls into sales."
                url="https://bys.marketing/services/social-media"
                schema={schema}
                keywords="social media marketing, community management, influencer marketing, content creation, paid social, Instagram marketing, TikTok marketing, BYS Marketing"
            />
            {/* Background Orbs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-white dark:bg-primary/5 rounded-full blur-[80px] opacity-80"></div>
            </div>

            <main className="flex flex-col gap-12 lg:gap-20 px-6 pt-8 lg:px-12 max-w-[1440px] mx-auto w-full pb-40">
                {/* Hero */}
                <section className="relative mt-4">
                    <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group shadow-floating border-white/60 dark:border-white/10 dark:bg-black/40">
                    <div className="absolute inset-0 z-0 opacity-80">
                        <Waves lineColor="rgba(104, 54, 244, 0.15)" backgroundColor="transparent" waveSpeedX={0.02} waveSpeedY={0.01} waveAmpX={30} waveAmpY={20} friction={0.9} tension={0.01} maxCursorMove={80} xGap={15} yGap={15} />
                    </div>
                        <div className="absolute -right-12 -top-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-primary/10 border border-purple-100 dark:border-primary/20 w-fit backdrop-blur-sm shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(104,54,244,0.6)]"></span>
                                <span className="text-xs font-semibold text-primary tracking-wide">Trend Trending Now</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-black dark:text-white">
                                Command the<br />
                                <span className="text-primary">Digital Conversation</span>
                            </h2>
                            <p className="text-text-sub dark:text-text-sub-dark leading-relaxed text-sm md:text-base max-w-[90%] font-medium">
                                Turning scrolls into sales. We engineer viral moments and build loyal communities through data-driven social strategies.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <button className="flex-1 bg-primary text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-200 dark:shadow-purple-900/40 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:bg-primary-dark">
                                    <span>Start Campaign</span>
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                                <button className="w-14 h-14 rounded-2xl bg-white dark:bg-black/60 text-primary shadow-neumorphic-purple dark:shadow-none dark:border-white/10 flex items-center justify-center hover:scale-105 transition-transform border border-gray-50">
                                    <Play className="fill-current w-6 h-6 ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10 text-primary">
                            <Globe size={64} />
                        </div>
                        <h4 className="text-3xl font-black text-primary mb-1">2.5M<span className="text-lg align-top">+</span></h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Viral Reach</p>
                    </div>
                    <div className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center shadow-neumorphic-sm dark:shadow-none hover:shadow-neumorphic dark:hover:border-primary/50 transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10 text-primary">
                            <Heart size={64} />
                        </div>
                        <h4 className="text-3xl font-black text-primary mb-1">15%</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-wide font-bold">Engagement First</p>
                    </div>
                </section>

                {/* --- DESKTOP 2-COLUMN LAYOUT WRAPPER --- */}
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start w-full">

                    {/* Main Content Column */}
                    <div className="flex flex-col gap-12 lg:gap-20 w-full min-w-0">

                        {/* Solutions Grid */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-black dark:text-white">Social Solutions</h3>
                                <span className="text-sm text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-1 cursor-pointer">
                                    View Plans <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-6 flex items-center gap-5 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
                                        <Users size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-black dark:text-white">Community Mgmt</h4>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 leading-relaxed">Active monitoring & engagement to build brand loyalty.</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-6 flex items-center gap-5 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary shrink-0 transform group-hover:-rotate-6 transition-transform duration-300">
                                        <Video size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-black dark:text-white">Content Creation</h4>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 leading-relaxed">High-fidelity visuals & reels tailored for algorithms.</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-6 flex items-center gap-5 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
                                        <Handshake size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-black dark:text-white">Influencer Collabs</h4>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 leading-relaxed">Strategic partnerships with niche voices.</p>
                                    </div>
                                </div>
                                <div className="clay-card dark:bg-black/40 dark:border-white/10 p-6 flex items-center gap-5 group cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary shrink-0 transform group-hover:-rotate-6 transition-transform duration-300">
                                        <Megaphone size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-black dark:text-white">Paid Social</h4>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1 leading-relaxed">ROI-focused ad campaigns across all platforms.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Social Snaps */}
                        <section className="overflow-hidden">
                            <h3 className="text-xl font-bold text-black dark:text-white mb-6 flex items-center gap-2">
                                Social Snaps
                                <span className="px-2 py-0.5 rounded-md bg-red-100 text-red-600 dark:bg-red-900/30 flex items-center text-[10px] font-bold uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1 animate-pulse" />Live
                                </span>
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {/* Reel 1 */}
                                <div className="aspect-[9/16] rounded-2xl relative overflow-hidden group cursor-pointer shadow-lg shadow-gray-200 dark:shadow-none">
                                    <img alt="High energy fashion reel preview" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHcnKtp2uqZpYu45qKVB5UG_ESHYBkyJ07Sw5XN8e05M_WmDhqgqQAfDbk7u5JsSE_fjoxWWvbChoTmkde9cz_7XAXmgD7sIS0GgKkfCQe6wRDmSNamSATxzEqOOzABoZnBrM0rnECE-3BELVrj4vMBzeoWYHTwfUmNq_7dWb3uyi_IS8nnrC-v5u3OMDyH6dmwhg7l3ldOmmUmgHogTf3GB13qYZnhOpDl2j4u49LTmCcQw7WUeLCMF2P6CW8JG_-Yio8YpnmaJ4" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 mb-2">
                                            <Play className="fill-white text-white w-4 h-4 ml-0.5" />
                                        </div>
                                        <p className="text-white text-xs font-bold drop-shadow-md">Summer Drop</p>
                                        <p className="text-white/80 text-[10px] font-medium drop-shadow-md">@LuxeFit</p>
                                    </div>
                                </div>
                                {/* Reel 2 */}
                                <div className="aspect-[9/16] rounded-2xl relative overflow-hidden group cursor-pointer shadow-lg shadow-gray-200 dark:shadow-none">
                                    <img alt="Tech gadget unboxing short video" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg92XdH-Dqy4z47c10P8CgacCvZ2QHkQQ03tcvr-cf_nCZL4DWz931xQbG1mzvItUC3S52EYCINx1T88lN3ESH5dyh7tO1Sx0OGiW6PmE5eoAWaOJxqJ9PsqEZNPhWNfK5Eb9USAUHh-D8lhWxpw8xt1UCbM4Q1pFF7UbU3EjUSd_cPm3IJO0e0-muuLgPbasHU2eLZUkLKLqxdabhtm0FnCTqz_qh3e0lzxDZX5OFxiLDVaSsHGxbu1f8EKAYj_CyLIwtRcuvG-E" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 mb-2">
                                            <Play className="fill-white text-white w-4 h-4 ml-0.5" />
                                        </div>
                                        <p className="text-white text-xs font-bold drop-shadow-md">Tech Review</p>
                                        <p className="text-white/80 text-[10px] font-medium drop-shadow-md">@GadgetGo</p>
                                    </div>
                                </div>
                                {/* Reel 3 */}
                                <div className="aspect-[9/16] rounded-2xl relative overflow-hidden group cursor-pointer shadow-lg shadow-gray-200 dark:shadow-none">
                                    <img alt="Food and beverage viral content" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBorlZsSpmxV_0_GFc4illy20YXPg-I2gAU-aqBF4RZ3N43KimfWXFUcr2seI48VbLONNnRoIwyokMDetspqJ3AOHJBHX6tYvjIX2N7xf3FPEO7MoVo0k-Q4chKWxlwdGBcc2MldjluiulFN-4rGba_Lk5RC8itVlE4YHH_Ux79uFOUgIxCnEzE6H702LsWlUHOLxAsb80agR9Go_wmrDPLBd1TsPI-aSO9EtcP44s6ZqP7p_AiVsR_ddW0lvHXJ_Nj88sU86bTELQ" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-[9px] font-bold rounded-md shadow-lg">
                                        Viral
                                    </div>
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 mb-2">
                                            <Play className="fill-white text-white w-4 h-4 ml-0.5" />
                                        </div>
                                        <p className="text-white text-xs font-bold drop-shadow-md">Taste Test</p>
                                        <p className="text-white/80 text-[10px] font-medium drop-shadow-md">@YumBox</p>
                                    </div>
                                </div>
                                {/* Create */}
                                <div className="aspect-[9/16] rounded-2xl relative overflow-hidden group cursor-pointer shadow-lg shadow-gray-200 dark:shadow-none bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                                            <Plus size={24} />
                                        </div>
                                        <p className="text-xs font-bold text-text-sub dark:text-text-sub-dark">Create<br />Yours</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* PLATFORM MASTERY — UNIQUE SECTION */}
                        <section className="py-2">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-black dark:text-white">Platform Mastery</h3>
                                <span className="text-xs font-bold text-primary bg-primary/5 dark:bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">All Platforms</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { platform: 'Instagram', stat: '8.2%', label: 'Avg Engagement', gradient: 'from-pink-500 to-purple-600' },
                                    { platform: 'TikTok', stat: '1.2M', label: 'Avg Views/Month', gradient: 'from-cyan-500 to-black' },
                                    { platform: 'LinkedIn', stat: '340%', label: 'Lead Growth', gradient: 'from-blue-600 to-blue-800' },
                                    { platform: 'X (Twitter)', stat: '52k', label: 'Impressions/Day', gradient: 'from-gray-700 to-black' },
                                ].map((item, i) => (
                                    <div key={i} className={`rounded-2xl p-5 bg-gradient-to-br ${item.gradient} text-white relative overflow-hidden group hover:scale-[1.02] transition-all duration-300`}>
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                        <p className="text-sm font-bold opacity-80 mb-3">{item.platform}</p>
                                        <p className="text-3xl font-black mb-0.5">{item.stat}</p>
                                        <p className="text-[10px] font-medium opacity-60">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CONTENT CALENDAR PREVIEW */}
                        <section className="bg-black rounded-3xl p-8 text-white mb-4">
                            <h3 className="text-xl font-bold mb-2">Your Content Engine</h3>
                            <p className="text-white/50 text-sm mb-6">A typical month in your social calendar — planned, created, and optimized by BYS.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { count: '12', type: 'Reels & Shorts', color: 'text-pink-400' },
                                    { count: '20', type: 'Feed Posts', color: 'text-blue-400' },
                                    { count: '60', type: 'Stories', color: 'text-yellow-400' },
                                    { count: '4', type: 'Influencer Colabs', color: 'text-green-400' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                        <p className={`text-3xl font-black ${item.color} mb-1`}>{item.count}</p>
                                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-wide">{item.type}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Desktop Sticky Sidebar Column */}
                    <DesktopSidebar serviceName="Social Media" expertName="Sofia Martinez" expertRole="Director of Social & Creators" />

                </div>
                {/* --- END DESKTOP 2-COLUMN LAYOUT --- */}

                {/* Support Block */}
                <section className="relative rounded-3xl overflow-hidden p-8 mb-8 bg-surface-light dark:bg-black/40 border border-gray-100 dark:border-white/10 shadow-neumorphic-sm dark:shadow-none">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 w-48 h-48 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 text-center flex flex-col items-center">
                        <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 shadow-neumorphic-sm dark:shadow-none text-primary">
                            <Calendar size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Schedule a Strategy Call</h3>
                        <p className="text-text-sub dark:text-text-sub-dark text-sm mb-6 max-w-xs mx-auto">Ready to blow up your socials? Let's discuss your next campaign.</p>
                        <Link to="/contact" className="w-full inline-block py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-purple-200 dark:shadow-purple-900/30 hover:shadow-xl hover:scale-[1.02] hover:bg-primary-dark transition-all">
                            Book Consultation
                        </Link>
                    </div>
                </section>
            
            <ServiceCrossLinks currentService="Social Media" />
        </main>
        </div>
    );
}
