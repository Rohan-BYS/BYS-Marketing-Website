import ScrollReveal from '../components/ScrollReveal';
import StarBorder from '../components/ReactBits/StarBorder';
import { Suspense, lazy } from 'react';
import LazySection from '../components/LazySection';
import Magnet from '../components/ReactBits/Magnet';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Zap, Coffee,
    Clock, Globe, ShieldCheck, Cpu, ChevronRight, Sparkles,
    CheckCircle2, HelpCircle
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

const perks = [
    { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere in the world. We value output over seat time.' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Plan your day around your life, not your life around your day.' },
    { icon: Cpu, title: 'Tech Budget', desc: 'Get the tools you need to do your best work. High-end gear on us.' },
    { icon: ShieldCheck, title: 'Health & Wellness', desc: 'Comprehensive health insurance and mental health support.' },
    { icon: Zap, title: 'Learning Stipend', desc: 'Annual budget for courses, conferences, and books. Keep growing.' },
    { icon: Coffee, title: 'Stocked Studio', desc: 'If you choose to visit our hubs, the coffee and snacks never end.' },
];

const openRoles = [
    { title: 'Senior React Engineer', dept: 'Engineering', type: 'Remote', location: 'Global' },
    { title: 'Full Stack Developer', dept: 'Engineering', type: 'Remote', location: 'Global' },
    { title: 'Senior Product Designer', dept: 'Design', type: 'Hybrid', location: 'Bangalore' },
    { title: 'SEO Strategist', dept: 'Marketing', type: 'Remote', location: 'IST Preferred' },
    { title: 'Performance Marketing Manager', dept: 'Marketing', type: 'Remote', location: 'Global' },
    { title: 'Video Editor & Producer', dept: 'Media', type: 'Remote', location: 'Global' },
];

const processSteps = [
    { id: '01', title: 'Apply', desc: 'Submit your portfolio or GitHub. We focus on proof of work.' },
    { id: '02', title: 'Discovery', desc: 'A 30-min call to see if our speed matches your hunger.' },
    { id: '03', title: 'Skills Challenge', desc: 'A real-world task that reflects what you\'ll actually do.' },
    { id: '04', title: 'Final Sync', desc: 'Talk to the founders and meet your future squad.' },
];

export default function Careers() {
    return (
        <main className="flex flex-col gap-0 pb-32 w-full overflow-hidden">

            {/* ═══ 1. HERO ═══ */}
            <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 dark:bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <ScrollReveal direction="down" delay={0.05}>
                        <StarBorder as="div" color="#6836f4" speed="4s" className="inline-block mb-8">
                            <span className="text-sm font-bold tracking-widest uppercase opacity-90">We're Growing · 6 Open Slots</span>
                        </StarBorder>
                    </ScrollReveal>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.92] tracking-tighter text-text-main dark:text-white mb-8 transition-colors">
                        Build the future<br />
                        of <span className="text-primary dark:text-primary-light italic">Growth.</span>
                    </h1>

                    <ScrollReveal delay={0.2}>
                        <p className="text-xl md:text-2xl text-text-sub dark:text-white/60 leading-relaxed max-w-3xl mx-auto font-medium">
                            Forget the traditional agency grind. Join a high-performance squad of builders, designers, and strategists who are redefining digital growth.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ 2. THE CULTURE ═══ */}
            <section className="px-6 py-20 bg-white dark:bg-[#0b0b0b] transition-colors">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal direction="right">
                        <div>
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">The Vibe</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6 leading-tight">
                                High tempo.<br />
                                High standards.<br />
                                <span className="text-primary">Zero fluff.</span>
                            </h2>
                            <div className="space-y-6 text-text-sub dark:text-white/60 leading-relaxed text-base md:text-lg">
                                <p>
                                    At BYS, we don't do "busy work." We do effective work. We've replaced endless meetings with deep focus, and corporate politics with radical transparency.
                                </p>
                                <p>
                                    We started with the grind, and we've kept that hustle at our core. We're looking for people who don't just want a job, but want to own their craft and see the impact of their work in real-time.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-primary" />
                                        <span className="text-sm font-bold text-text-main dark:text-white uppercase tracking-wider">Results Driven</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-primary" />
                                        <span className="text-sm font-bold text-text-main dark:text-white uppercase tracking-wider">Async First</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-primary" />
                                        <span className="text-sm font-bold text-text-main dark:text-white uppercase tracking-wider">Constant Learning</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-primary" />
                                        <span className="text-sm font-bold text-text-main dark:text-white uppercase tracking-wider">Full Ownership</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.15}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl" />
                            <div className="relative glass-panel rounded-[2rem] p-10 border border-white/60 dark:border-white/10 shadow-floating">
                                <Sparkles className="text-primary mb-6" size={40} />
                                <h3 className="text-2xl font-black text-text-main dark:text-white mb-4 italic">"The best part about BYS is that I'm surrounded by people who are actually better than me at what they do. It keeps me sharp."</h3>
                                <div className="flex items-center gap-4 mt-8">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                                        <img src="https://i.pravatar.cc/100?img=33" alt="Team member" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-main dark:text-white text-sm">Vikram Patel</p>
                                        <p className="text-xs text-text-sub dark:text-white/40 uppercase tracking-widest font-bold">Senior Engineer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ 3. PERKS BENTO ═══ */}
            <LazySection fallbackHeight="500px">
                <section className="px-6 py-24 max-w-7xl mx-auto w-full">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">Perks & Benefits</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">Built for <span className="text-primary">Performance</span></h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {perks.map((perk, i) => (
                            <ScrollReveal key={i} delay={i * 0.08}>
                                <Magnet>
                                    <div className="glass-panel rounded-3xl p-8 border border-white/60 dark:border-white/10 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col cursor-pointer">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <perk.icon size={26} className="text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">{perk.title}</h3>
                                        <p className="text-sm text-text-sub dark:text-white/60 leading-relaxed flex-1">{perk.desc}</p>
                                    </div>
                                </Magnet>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </LazySection>

            {/* ═══ 4. OPEN ROLES ═══ */}
            <LazySection fallbackHeight="800px">
                <section className="px-6 py-24 bg-gray-50/50 dark:bg-white/[0.02] transition-colors" id="open-roles">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">Current Openings</span>
                                <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">Find your <span className="text-primary">Squad</span></h2>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {openRoles.map((role, i) => (
                                <ScrollReveal key={i} delay={i * 0.08}>
                                    <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/30 hover:shadow-floating hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                                    {role.dept}
                                                </span>
                                                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-text-sub dark:text-white/40">
                                                    {role.type}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">{role.title}</h3>
                                            <p className="text-sm text-text-sub dark:text-white/40 font-medium">{role.location}</p>
                                        </div>
                                        <div className="mt-4 md:mt-0 flex items-center gap-4">
                                            <Link to="/contact" className="text-sm font-bold text-primary dark:text-primary-light flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Apply Now <ChevronRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </LazySection>

            {/* ═══ 5. INTERVIEW PROCESS ═══ */}
            <LazySection fallbackHeight="400px">
                <section className="px-6 py-24 max-w-7xl mx-auto w-full">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">The Journey</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white">How We <span className="text-primary">Hire</span></h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                        {processSteps.map((step, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="relative flex flex-col items-center text-center group">
                                    <div className="w-14 h-14 rounded-full bg-white dark:bg-[#0b0b0b] border-2 border-primary/20 dark:border-primary/40 flex items-center justify-center text-lg font-black text-primary mb-6 shadow-glow-purple relative z-10 group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                                        {step.id}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-text-sub dark:text-white/60 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </LazySection>

            {/* ═══ 6. TECH STACK ═══ */}
            <LazySection fallbackHeight="200px">
                <section className="py-20 bg-white dark:bg-[#0b0b0b] border-y border-gray-100 dark:border-white/5 transition-colors overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <ScrollReveal>
                            <h2 className="text-lg font-black text-text-main dark:text-white uppercase tracking-[0.2em] mb-12 text-center">
                                Stack We Master
                            </h2>
                        </ScrollReveal>
                        <Suspense fallback={<div className="h-10" />}>
                            <LogoLoop logos={logoLoopItems} speed={45} logoHeight={40} gap={80} fadeOut={true} fadeOutColor="rgba(255,255,255,1)" />
                        </Suspense>
                    </div>
                </section>
            </LazySection>

            {/* ═══ 7. FAQ MINI ═══ */}
            <section className="px-6 py-24 max-w-4xl mx-auto w-full">
                <ScrollReveal>
                    <div className="flex items-center gap-3 mb-12">
                        <HelpCircle size={28} className="text-primary" />
                        <h2 className="text-3xl font-black text-text-main dark:text-white">Quick Qs</h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-6">
                    <ScrollReveal delay={0.1}>
                        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                            <h4 className="font-bold text-text-main dark:text-white mb-2">Can I work 100% remote?</h4>
                            <p className="text-sm text-text-sub dark:text-white/60">Yes. We are remote-first. We only ask for overlap during our core sync hours (11 AM - 4 PM IST).</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                            <h4 className="font-bold text-text-main dark:text-white mb-2">Is there a probation period?</h4>
                            <p className="text-sm text-text-sub dark:text-white/60">We do 3-month onboarding where you work closely with a mentor. We set clear goals from day one.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                            <h4 className="font-bold text-text-main dark:text-white mb-2">What if I don't see my role?</h4>
                            <p className="text-sm text-text-sub dark:text-white/60">We always hire exceptional talent. If you bring a skill we can't ignore, we'll create a role for you.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ 8. FINAL CTA ═══ */}
            <section className="px-6 pb-24 max-w-7xl mx-auto w-full">
                <ScrollReveal>
                    <div className="relative rounded-[3rem] overflow-hidden bg-black border border-white/10 p-12 md:p-24 text-center">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/25 rounded-full blur-[100px]" />
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                                Ready to join the<br /><span className="text-primary-light">Growth Machine?</span>
                            </h2>
                            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
                                We're building something special, and we're moving fast. If you're ready to do the best work of your career, let's talk.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <StarBorder as={Link} to="/contact" color="#6836f4" speed="3s">
                                    <span className="flex items-center gap-2 font-bold text-lg">
                                        Send Your Portfolio <ArrowRight size={20} />
                                    </span>
                                </StarBorder>
                                <Link
                                    to="/team"
                                    className="px-10 py-5 rounded-[24px] border border-white/20 text-white font-bold hover:bg-white/10 transition-all text-lg"
                                >
                                    Meet the Squad
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

        </main>
    );
}
