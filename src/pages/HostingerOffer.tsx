import { ArrowRight, Zap, ShieldCheck, Globe, Infinity, ChevronDown } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Waves from '../components/ReactBits/Waves';

export default function HostingerOffer() {
    const affiliateUrl = "https://www.hostinger.com/in?REFERRALCODE=BYS20OFF";

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Hostinger Discount Code - 20% to 40% Off Premium Hosting",
        "description": "Get a guaranteed 20% and up to 40% off Hostinger premium web hosting plans. Recommended by BYS Marketing for unparalleled speed, 99.9% uptime, and free domain.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "eligibleRegion": {
                "@type": "Country",
                "name": "Worldwide"
            },
            "url": affiliateUrl
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark min-h-screen flex flex-col selection:bg-primary selection:text-white">
            <SEOHead
                title="Hostinger Discount Code | 20% to 40% Off Hosting"
                description="Claim your exclusive Hostinger discount code for a guaranteed minimum 20% and up to 40% off premium web hosting. 99.9% uptime, free domain, and 24/7 support. Recommended by BYS Marketing."
                url="https://bys.marketing/hostinger-discount-code"
                schema={schema}
                keywords="Hostinger discount code, Hostinger coupon, cheap web hosting, premium hosting, Hostinger referral code, web hosting deals, BYS Marketing"
            />

            {/* Background Effects */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] opacity-40"></div>
            </div>

            <main className="flex-grow pt-28 pb-32">
                {/* Hero Section */}
                <section className="relative px-6 max-w-[1200px] mx-auto w-full mb-20 lg:mb-32">
                    <div className="glass-panel rounded-[2.5rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-neumorphic dark:shadow-none border-white/60 dark:border-white/10 dark:bg-black/40 text-center flex flex-col items-center">
                        <div className="absolute inset-0 z-0 opacity-80">
                            <Waves lineColor="rgba(104, 54, 244, 0.1)" backgroundColor="transparent" waveSpeedX={0.015} waveSpeedY={0.01} waveAmpX={40} waveAmpY={20} friction={0.9} tension={0.01} maxCursorMove={80} xGap={20} yGap={20} />
                        </div>
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] z-0"></div>

                        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 mb-8 backdrop-blur-md">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                                <span className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">Limited Time Offer</span>
                            </div>

                            Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">20% to 40% Off</span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-800 dark:text-gray-200 mb-8">
                                Premium Hostinger Plans
                            </h2>

                            <p className="text-lg md:text-xl text-text-sub dark:text-text-sub-dark leading-relaxed mb-10 max-w-2xl font-medium">
                                Fast, secure, and user-friendly web hosting. Get a free domain, massive NVMe storage, and 24/7 expert support to launch your website today.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <a
                                    href={affiliateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto bg-primary text-white font-black text-lg py-5 px-10 rounded-2xl shadow-[0_8px_30px_rgb(104,54,244,0.3)] hover:shadow-[0_12px_40px_rgb(104,54,244,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    Claim Your Discount
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                            <p className="mt-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                                Applied automatically at checkout.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3 Step Process */}
                <section className="px-6 max-w-[1200px] mx-auto w-full mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight mb-4">
                            How to Get the <span className="text-primary">Discount</span>
                        </h2>
                        <p className="text-text-sub dark:text-text-sub-dark font-medium text-lg">Three simple steps to launch your digital presence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[60px] left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>

                        {[
                            { step: '01', title: 'Click the Link', desc: 'Use our exclusive partner button above to activate the discount tracking.' },
                            { step: '02', title: 'Choose a Plan', desc: 'Select the Premium or Business Web Hosting plan that fits your needs (Business recommended).' },
                            { step: '03', title: 'Complete Checkout', desc: 'Enjoy your guaranteed 20% (and up to 40%) off your total purchase, plus a free domain name for the first year.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-black/40 border border-gray-100 dark:border-white/10 rounded-3xl p-8 shadow-neumorphic-sm dark:shadow-none hover:-translate-y-2 transition-transform duration-300 relative group text-center">
                                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-50 dark:from-primary/20 dark:to-primary/5 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden group-hover:scale-110 transition-transform">
                                    <span className="text-3xl font-black text-primary">{item.step}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why BYS Recommends Hostinger - Bento Grid */}
                <section className="px-6 max-w-[1200px] mx-auto w-full mb-32">
                    <div className="bg-black text-white rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden border border-white/10 shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                            <div className="w-full lg:w-5/12 text-left">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                                    Why BYS <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Recommends</span> Hostinger
                                </h2>
                                <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8">
                                    As an agency that builds high-performance websites for clients globally, we depend on rock-solid infrastructure. We exclusively partner with Hostinger because they deliver incredible speed, unparalleled reliability, and the best value in the industry.
                                </p>
                                <a
                                    href={affiliateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex bg-white text-black font-black text-base py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors items-center gap-2 group"
                                >
                                    View Hosting Plans
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">LiteSpeed Web Servers</h3>
                                    <p className="text-sm text-gray-400 font-medium">Industry-leading performance technology that makes websites load instantly, improving SEO and user experience.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
                                    <p className="text-sm text-gray-400 font-medium">Free unlimited SSL certificates, automated backups, and Cloudflare protected nameservers included standard.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <Infinity className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Free Domain & Email</h3>
                                    <p className="text-sm text-gray-400 font-medium">Claim your professional web address and create custom business email accounts at no extra cost for the first year.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <Globe className="w-10 h-10 text-blue-400 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Global Data Centers</h3>
                                    <p className="text-sm text-gray-400 font-medium">Host your site closer to your audience with data centers in the USA, UK, France, India, Singapore, and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="px-6 max-w-3xl mx-auto w-full mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'How do I apply the Hostinger discount code?', a: 'By clicking any link on this page, the maximum available discount (starting at 20% and up to 40%) is automatically embedded into the URL. You won\'t need to type in a promo code manually at checkout.' },
                            { q: 'Which hosting plan should I choose?', a: 'For most businesses and blogs, the "Premium Web Hosting" plan offers the best value as it includes a free domain name, 100GB NVMe storage, and supports up to 100 websites. If you expect higher traffic, the "Business Web Hosting" plan includes daily backups and increased performance.' },
                            { q: 'Is the free domain name forever?', a: 'The domain name is free for the first year of your hosting plan. Standard renewal rates apply after the first 12 months.' },
                            { q: 'Can I migrate my existing website to Hostinger?', a: 'Yes! Hostinger offers a free, automated website migration tool. Their 24/7 success team can also assist you with transferring your WordPress or custom site.' },
                        ].map((faq, i) => (
                            <details key={i} className="group bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-2xl [&_summary::-webkit-details-marker]:hidden shadow-sm">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 dark:text-white font-bold">
                                    <h2 className="text-lg">{faq.q}</h2>
                                    <span className="shrink-0 rounded-full bg-gray-100 dark:bg-white/10 p-1.5 text-gray-900 dark:text-white sm:p-3">
                                        <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                                    </span>
                                </summary>
                                <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="px-6 max-w-[1200px] mx-auto w-full text-center">
                    <div className="inline-flex flex-col items-center gap-6">
                        <p className="text-sm font-bold tracking-widest uppercase text-text-sub dark:text-text-sub-dark">Don't miss out on this offer</p>
                        <a
                            href={affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary-dark text-white font-black text-xl py-6 px-12 rounded-full shadow-[0_10px_40px_rgb(104,54,244,0.4)] hover:shadow-[0_15px_50px_rgb(104,54,244,0.6)] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-3 group"
                        >
                            Get Hosted Today
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
