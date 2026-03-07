import ScrollReveal from '../components/ScrollReveal';
import StarBorder from '../components/ReactBits/StarBorder';
import { Suspense, lazy } from 'react';
import LazySection from '../components/LazySection';
import Magnet from '../components/ReactBits/Magnet';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Zap, Target, ShieldCheck, Rocket, Users, TrendingUp,
    BarChart3, Globe, Award, Coffee, Heart, Code2, Search, Palette,
    Linkedin, Twitter, Instagram
} from 'lucide-react';

const LogoLoop = lazy(() => import('../components/ReactBits/LogoLoop'));

const logoLoopItems = [
    { src: 'https://cdn.simpleicons.org/html5/E34F26', alt: 'HTML5' },
    { src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python' },
    { src: 'https://cdn.simpleicons.org/javascript/F7DF1E', alt: 'JavaScript' },
    { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript' },
    { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React' },
    { src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', alt: 'Tailwind CSS' },
    { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js' },
    { src: 'https://cdn.simpleicons.org/shopify/95BF47', alt: 'Shopify' },
    { src: 'https://cdn.simpleicons.org/stripe/008CDD', alt: 'Stripe' },
    { src: 'https://cdn.simpleicons.org/googleads/4285F4', alt: 'Google Ads' },
    { src: 'https://cdn.simpleicons.org/meta/0468FF', alt: 'Meta' },
    { src: 'https://cdn.simpleicons.org/googleanalytics/E37400', alt: 'Google Analytics' },
    { src: 'https://cdn.simpleicons.org/figma/F24E1E', alt: 'Figma' },
    { src: 'https://cdn.simpleicons.org/supabase/3ECF8E', alt: 'Supabase' },
    { src: 'https://cdn.simpleicons.org/webflow/4353FF', alt: 'Webflow' },
];

const stats = [
    { value: '8+', label: 'Years in Battle', icon: Coffee },
    { value: '150+', label: 'Brands Transformed', icon: Globe },
    { value: '$50M+', label: 'Client Revenue Driven', icon: TrendingUp },
    { value: '12+', label: 'Industries Conquered', icon: Target },
];

const timeline = [
    { year: '2016', title: 'The Spark', body: 'Started from a shared apartment with zero clients, one laptop, and an unshakeable belief that small businesses deserve elite-level marketing.' },
    { year: '2017', title: 'First Check', body: 'Landed our first paying client — a local restaurant. Ran their ads so well they opened two new locations within 18 months.' },
    { year: '2018', title: 'Going Digital-First', body: 'Pivoted fully to performance-based digital marketing. Developed our first in-house analytics framework.' },
    { year: '2020', title: 'Scaling Through the Storm', body: 'When the pandemic hit, we helped 40+ businesses pivot online, generating over $3M in new digital revenue during a global recession.' },
    { year: '2022', title: 'Full-Stack Agency', body: 'Launched our web engineering arm. Began building custom headless storefronts that consistently score 99+ on Lighthouse.' },
    { year: '2024', title: 'We\'re Just Getting Started', body: 'Now operating globally, with a team of strategists, engineers, and creatives who treat every client\'s business like it\'s their own.' },
];

const values = [
    { icon: Zap, title: 'Zero Fluff, All Fire', desc: 'We cut the agency bloat and deliver real results. Your metrics are our metrics.', color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
    { icon: ShieldCheck, title: 'Radical Transparency', desc: 'No black boxes. You see every campaign, every metric, every rupee spent — always.', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
    { icon: Rocket, title: 'Obsessed with Speed', desc: 'Quarter-second load times. We engineer for performance because every millisecond is money.', color: 'text-primary', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: Heart, title: 'Partner, Not Vendor', desc: 'We\'re not a vendor you hire and forget. We\'re the growth partner embedded in your team.', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
    { icon: BarChart3, title: 'Data-Led Everything', desc: 'Gut instinct is an input, not a strategy. Every decision is backed by real-world data.', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: Code2, title: 'Engineering Culture', desc: 'We write clean code, design scalable systems, and build things that last 5+ years.', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
];

const founders = [
    {
        name: 'Rohan Kumar Chaudhary',
        title: 'Founder & CEO',
        bio: 'Started as a solo hustler, worked behind the scenes for dozens of brands as a white-label partner, and built BYS from the ground up into a full-stack digital growth agency serving clients worldwide.',
        img: 'https://i.pravatar.cc/200?img=68',
        tags: ['Growth Strategy', 'Brand Architecture', 'Leadership'],
    },
    {
        name: 'Vikram Sinha',
        title: 'Head of Engineering',
        bio: 'Full-stack wizard and performance nerd. If a website doesn\'t score 95+ on Lighthouse, he doesn\'t ship it. Leads the entire web development and infrastructure team.',
        img: 'https://i.pravatar.cc/200?img=12',
        tags: ['Engineering', 'Web Perf', 'Architecture'],
    },
    {
        name: 'Ananya Kapoor',
        title: 'Head of Marketing',
        bio: 'Spent 6 years dissecting why consumers buy. Now uses that psychology to architect campaigns that convert cold traffic into loyal customers at scale.',
        img: 'https://i.pravatar.cc/200?img=47',
        tags: ['SEO', 'Content', 'Psychology'],
    },
];

const awards = [
    'Google Partner', 'Meta Business Partner', 'Clutch Top Agency 2023',
    'G2 High Performer', 'Shopify Plus Partner', 'HubSpot Certified',
];

export default function About() {
    return (
        <main className="flex flex-col gap-0 pb-32 w-full overflow-hidden">

            {/* ─── 1. HERO ─── */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(104,54,244,0.08),_transparent_60%)]" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <ScrollReveal direction="down" delay={0.05}>
                        <StarBorder as="div" color="#6836f4" speed="4s" className="inline-block mb-8">
                            <span className="text-sm font-bold tracking-widest uppercase opacity-90">Est. 2016 · 8 Years of Grit</span>
                        </StarBorder>
                    </ScrollReveal>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-tighter text-text-main dark:text-white mb-8 transition-colors">
                        We didn't start<br />
                        <span className="text-primary dark:text-primary-light">perfect.</span><br />
                        We started <span className="italic">hungry.</span>
                    </h1>

                    <ScrollReveal delay={0.2}>
                        <p className="text-xl md:text-2xl text-text-sub dark:text-white/60 leading-relaxed max-w-3xl mx-auto font-medium">
                            From one laptop and zero clients to a global growth machine. This is the story of a team that refused to quit — and built something the industry couldn't ignore.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── 2. STATS BAR ─── */}
            <LazySection fallbackHeight="200px">
                <section className="px-6 pb-16 max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <ScrollReveal key={i} delay={i * 0.08}>
                                <Magnet>
                                    <div className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col items-center text-center border border-white/60 dark:border-white/10 hover:shadow-floating hover:-translate-y-1 transition-all group cursor-pointer">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <stat.icon size={22} className="text-primary" />
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-1">{stat.value}</h3>
                                        <p className="text-xs text-text-sub dark:text-text-sub-dark uppercase tracking-widest font-bold">{stat.label}</p>
                                    </div>
                                </Magnet>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </LazySection>

            {/* ─── 3. ORIGIN STORY ─── */}
            <section className="px-6 py-20 bg-white dark:bg-[#0b0b0b] transition-colors">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal direction="right">
                        <div>
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">Our Origin</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6 leading-tight">
                                One laptop.<br />
                                Zero clients.<br />
                                <span className="text-primary">Infinite belief.</span>
                            </h2>
                            <div className="space-y-4 text-text-sub dark:text-white/60 leading-relaxed text-base md:text-lg">
                                <p>
                                    In 2016, BYS started in a shared apartment in Bangalore. Three friends, a shared laptop, and a conviction that Indian businesses were being underserved by agencies that churned out templates and called it strategy.
                                </p>
                                <p>
                                    We worked nights. We pitched everywhere. We got rejected constantly. But every "no" sharpened our thinking. We refused to dilute our standards — because we'd seen what mediocre marketing did to good businesses.
                                </p>
                                <p className="font-bold text-text-main dark:text-white border-l-4 border-primary pl-4">
                                    Eight years later, we've helped over 150 brands scale past their ceilings — and we're still just getting started.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Visual bento mini-grid */}
                    <ScrollReveal direction="left" delay={0.15}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary to-purple-800 p-8 text-white flex flex-col gap-2 shadow-glow-purple">
                                <Users size={32} className="opacity-70" />
                                <h4 className="text-3xl font-black">150+</h4>
                                <p className="text-white/70 text-sm">Brands we've taken from stagnant to scaling</p>
                            </div>
                            <div className="rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 flex flex-col gap-2">
                                <Award size={24} className="text-yellow-500" />
                                <h4 className="text-xl font-black text-text-main dark:text-white">6</h4>
                                <p className="text-text-sub dark:text-white/50 text-xs">Industry awards</p>
                            </div>
                            <div className="rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 flex flex-col gap-2">
                                <Search size={24} className="text-green-500" />
                                <h4 className="text-xl font-black text-text-main dark:text-white">99+</h4>
                                <p className="text-text-sub dark:text-white/50 text-xs">Lighthouse score avg</p>
                            </div>
                            <div className="col-span-2 rounded-3xl bg-black dark:bg-white/5 border border-white/10 p-6 flex items-center gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                                    <Palette size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">3 Continents</h4>
                                    <p className="text-white/50 text-xs">Global clients, local empathy</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── 4. TIMELINE ─── */}
            <LazySection fallbackHeight="900px">
                <section className="px-6 py-24 max-w-4xl mx-auto w-full">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">The Journey</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">From Hustle<br /> to <span className="text-primary">Empire</span></h2>
                        </div>
                    </ScrollReveal>

                    <div className="relative">
                        {/* Center line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <ScrollReveal key={i} delay={i * 0.07} direction={i % 2 === 0 ? 'right' : 'left'}>
                                    <div className={`flex gap-8 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        {/* Content */}
                                        <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                                            <div className="glass-panel rounded-2xl p-6 border border-white/60 dark:border-white/10 inline-block w-full hover:-translate-y-1 transition-transform shadow-sm hover:shadow-floating">
                                                <span className="text-xs font-black text-primary tracking-widest uppercase block mb-1">{item.year}</span>
                                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">{item.title}</h3>
                                                <p className="text-text-sub dark:text-white/60 text-sm leading-relaxed">{item.body}</p>
                                            </div>
                                        </div>

                                        {/* Dot */}
                                        <div className="absolute left-4 md:relative md:left-auto flex-shrink-0 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-[#0b0b0b] shadow-[0_0_12px_rgba(104,54,244,0.6)] mt-5 md:mt-8" />

                                        {/* Spacer for alternating layout */}
                                        <div className="hidden md:block flex-1" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </LazySection>

            {/* ─── 5. VALUES BENTO GRID ─── */}
            <LazySection fallbackHeight="600px">
                <section className="px-6 py-20 bg-gray-50/50 dark:bg-white/[0.02] transition-colors">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-14">
                                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">How We Operate</span>
                                <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">Why We're<br /><span className="text-primary">Different</span></h2>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {values.map((val, i) => (
                                <ScrollReveal key={i} delay={i * 0.07}>
                                    <Magnet>
                                        <div className="glass-panel rounded-3xl p-8 border border-white/60 dark:border-white/10 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col cursor-pointer">
                                            <div className={`w-14 h-14 rounded-2xl ${val.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                                <val.icon size={26} className={val.color} />
                                            </div>
                                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">{val.title}</h3>
                                            <p className="text-sm text-text-sub dark:text-white/60 leading-relaxed flex-1">{val.desc}</p>
                                        </div>
                                    </Magnet>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </LazySection>

            {/* ─── 6. BIG QUOTE ─── */}
            <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <div className="text-8xl text-white/20 font-serif absolute top-0 left-8">"</div>
                        <p className="text-2xl md:text-4xl font-bold leading-relaxed italic mb-8">
                            We don't chase trends. We set them. Every strategy, every line of code, every ad creative is built around one obsession: making your business impossible to ignore.
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-0.5 bg-white/40" />
                            <span className="text-white/70 text-sm font-bold uppercase tracking-widest">The BYS Marketing Manifesto</span>
                            <div className="w-10 h-0.5 bg-white/40" />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── 7. FOUNDERS ─── */}
            <LazySection fallbackHeight="600px">
                <section className="px-6 py-24 max-w-7xl mx-auto w-full">
                    <ScrollReveal>
                        <div className="text-center mb-14">
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">The Team Behind It</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">Meet the<br /><span className="text-primary">Founders</span></h2>
                            <p className="text-text-sub dark:text-white/50 mt-4 max-w-xl mx-auto">Three obsessives who refused to accept "good enough" — in business or in life.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {founders.map((founder, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="glass-panel rounded-3xl overflow-hidden border border-white/60 dark:border-white/10 group hover:shadow-floating hover:-translate-y-2 transition-all duration-300">
                                    <div className="relative h-56 bg-gradient-to-br from-primary/20 to-purple-900/30 overflow-hidden">
                                        <img
                                            src={founder.img}
                                            alt={founder.name}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-text-main dark:text-white">{founder.name}</h3>
                                        <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">{founder.title}</p>
                                        <p className="text-sm text-text-sub dark:text-white/60 leading-relaxed mb-4">{founder.bio}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {founder.tags.map((tag, ti) => (
                                                <span key={ti} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 pt-3 border-t border-gray-100 dark:border-white/5">
                                            <a href="#" aria-label={`${founder.name}'s LinkedIn profile`} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                                <Linkedin size={14} />
                                            </a>
                                            <a href="#" aria-label={`${founder.name}'s Twitter profile`} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                                <Twitter size={14} />
                                            </a>
                                            <a href="#" aria-label={`${founder.name}'s Instagram profile`} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                                <Instagram size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </LazySection>

            {/* ─── 8. TECH STACK ─── */}
            <LazySection fallbackHeight="200px">
                <section className="py-16 bg-white dark:bg-[#0b0b0b] border-y border-gray-100 dark:border-white/5 transition-colors overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <ScrollReveal>
                            <h2 className="text-lg font-black text-text-main dark:text-white uppercase tracking-[0.2em] mb-10 text-center">
                                Technologies We Master
                            </h2>
                        </ScrollReveal>
                        <Suspense fallback={<div className="h-10" />}>
                            <LogoLoop logos={logoLoopItems} speed={45} logoHeight={40} gap={80} fadeOut={true} fadeOutColor="rgba(255,255,255,1)" />
                        </Suspense>
                    </div>
                </section>
            </LazySection>

            {/* ─── 9. AWARDS / PRESS BAR ─── */}
            <section className="px-6 py-16 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <p className="text-xs font-bold text-text-sub dark:text-white/40 uppercase tracking-widest mb-8 text-center">
                        Recognized by industry leaders
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
                        {awards.map((award, i) => (
                            <div
                                key={i}
                                className="glass-panel px-5 py-2.5 rounded-full border border-white/60 dark:border-white/10 text-text-sub dark:text-white/50 text-sm font-bold hover:text-primary dark:hover:text-primary-light hover:border-primary/30 transition-colors cursor-default"
                            >
                                {award}
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            {/* ─── 10. FINAL CTA ─── */}
            <section className="px-6 pb-16 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-black border border-white/10 p-12 md:p-20 text-center">
                        <div className="absolute right-0 top-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
                        <div className="absolute left-0 bottom-0 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px]" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Ready to be our<br /><span className="text-primary-light">next success story?</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                                Let's sit down, audit your current digital setup, and map out exactly how we take your brand to the next level.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <StarBorder as={Link} to="/contact" color="#6836f4" speed="3s">
                                    <span className="flex items-center gap-2 font-bold text-base">
                                        Start a Conversation <ArrowRight size={18} />
                                    </span>
                                </StarBorder>
                                <Link
                                    to="/portfolio"
                                    className="px-8 py-4 rounded-[20px] border border-white/20 text-white font-bold hover:bg-white/10 transition-all"
                                >
                                    See Our Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

        </main>
    );
}
