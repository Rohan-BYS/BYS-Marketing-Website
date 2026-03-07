import ScrollReveal from '../components/ScrollReveal';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code, Target, ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudyView() {
    const { id } = useParams<{ id: string }>();
    const study = caseStudies.find(c => c.id === id);

    if (!study) {
        return (
            <div className="min-h-screen pt-40 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-4xl font-bold mb-4 text-text-main dark:text-white">Case Study Not Found</h2>
                <p className="text-text-sub mb-8">The project you're looking for doesn't exist.</p>
                <Link to="/portfolio" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-colors inline-flex items-center gap-2">
                    <ArrowLeft size={18} /> Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <main className="pt-24 pb-32">
            {/* Hero Section */}
            <section className="relative h-[60vh] sm:h-[80vh] min-h-[500px] w-full bg-[#111] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-black/30 to-transparent z-10" />

                <img
                    src={study.heroImage}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-16 max-w-[1200px] mx-auto w-full">
                    <ScrollReveal direction="up">
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-wider">
                            <ArrowLeft size={16} /> Back to Projects
                        </Link>

                        <div className="flex gap-3 mb-6">
                            <span
                                className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-md ${study.brandBgClass}`}
                            >
                                {study.category}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            {study.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                            {study.summary}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="max-w-[1200px] mx-auto w-full px-6 pt-16 md:pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16">
                        <ScrollReveal direction="up" delay={0.1}>
                            <h3 className="text-3xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3">
                                <Target className="text-primary" /> The Challenge
                            </h3>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-text-sub dark:text-gray-300 leading-relaxed">
                                <p>{study.challenge}</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.2}>
                            <h3 className="text-3xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3">
                                <Code className="text-primary" /> Our Solution
                            </h3>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-text-sub dark:text-gray-300 leading-relaxed">
                                <p>{study.solution}</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.3}>
                            <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={study.resultsImage}
                                    alt={`${study.title} Final Result`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Meta & Sidebar */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="glass-panel p-8 rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-[#1a1a1a]/80 shadow-neumorphic-sm dark:shadow-none sticky top-32">

                                <h4 className="font-bold text-sm text-text-main dark:text-white uppercase tracking-widest mb-6">Project Metadata</h4>

                                <div className="space-y-6 mb-8">
                                    {study.stats.map((stat, i) => (
                                        <div key={i} className="flex justify-between items-end border-b border-gray-100 dark:border-white/5 pb-4">
                                            <span className="text-sm font-bold text-text-sub dark:text-gray-500 uppercase tracking-wider">{stat.label}</span>
                                            <span className={`text-2xl font-bold ${i === 0 ? study.brandTextClass : 'text-text-main dark:text-white'}`}>
                                                {stat.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <h4 className="font-bold text-sm text-text-main dark:text-white uppercase tracking-widest mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {study.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-full text-xs font-bold bg-gray-100 dark:bg-white/5 text-text-main dark:text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-dark hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                    View Live Site <ExternalLink size={18} />
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </section>

            {/* Next Project CTA */}
            <section className="max-w-[1200px] mx-auto w-full px-6 pt-32">
                <ScrollReveal direction="up">
                    <div className="rounded-[3rem] p-12 md:p-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent border border-primary/20 dark:border-primary/30 relative overflow-hidden flex flex-col items-center text-center">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10" />

                        <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-6">
                            Ready to Build Something Similar?
                        </h2>
                        <p className="text-xl text-text-sub dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
                            Let's discuss how we can engineer growth for your brand using customized strategies and modern architecture.
                        </p>

                        <Link to="/services" className="px-10 py-5 bg-white dark:bg-black text-primary font-bold rounded-2xl text-lg hover:-translate-y-1 transition-transform shadow-xl dark:shadow-none flex items-center gap-2 group">
                            Start Your Project
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </ScrollReveal>
            </section>

        </main>
    );
}
