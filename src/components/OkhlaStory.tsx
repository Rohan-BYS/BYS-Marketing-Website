import React from 'react';
import ScrollReveal from './ScrollReveal';
import { MapPin, Quote } from 'lucide-react';

interface OkhlaStoryProps {
    location?: string;
}

/**
 * A specialized component for Okhla Industrial Area pages.
 * Tells the founder's personal story of living and working in Okhla.
 */
const OkhlaStory: React.FC<OkhlaStoryProps> = ({ location }) => {
    // Only show if the location contains "Okhla"
    if (!location?.toLowerCase().includes('okhla')) return null;

    return (
        <ScrollReveal>
            <section className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-16 mb-20 bg-gradient-to-br from-primary/5 via-white to-purple-50/30 dark:from-primary/10 dark:via-[#1a1a1a] dark:to-purple-900/10 border border-primary/10 dark:border-white/5 shadow-glass-strong">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 w-fit">
                            <MapPin size={14} />
                            <span>The Okhla Narrative</span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black text-text-main dark:text-text-main-dark tracking-tighter leading-tight">
                            "I lived in Okhla. I saw the <br />
                            <span className="text-primary italic">Invisible Giants</span> firsthand."
                        </h3>

                        <div className="space-y-4 text-text-sub dark:text-text-sub-dark text-lg leading-relaxed relative">
                            <Quote className="absolute -left-6 -top-2 text-primary/20 scale-150 rotate-12" size={40} />
                            <p>
                                Okhla isn't just an industrial estate to me; it's where I lived and saw the raw energy of Indian business. I saw shutters processing millions in orders without a single signpost on the street.
                            </p>
                            <p className="font-medium text-text-main dark:text-text-main-dark">
                                I remember spending an hour searching for a business I'd found online, only to realize I was standing right in front of it. They were a digital powerhouse but physically invisible.
                            </p>
                            <p>
                                At **BYS Marketing**, we bridge this gap. We turn Okhla’s industrial grit into global digital authority. We ensure that when someone searches for excellence in Phase 1, 2, or 3, your business is the only choice they see.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-4 p-4 rounded-2xl bg-white/40 dark:bg-black/20 border border-white/60 dark:border-white/5 backdrop-blur-sm w-fit">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-glow-purple">
                                <img src="/rohan-chaudhary.jpg" alt="Rohan Chaudhary" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-text-main dark:text-text-main-dark">Rohan Chaudhary</p>
                                <p className="text-[10px] uppercase font-black text-primary tracking-widest leading-none">Founder, BYS Marketing</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-2 gap-4 w-[400px]">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl rotate-3 h-48 bg-gray-200 dark:bg-gray-800">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" alt="Industrial Hub" className="w-full h-full object-cover grayscale opacity-80" />
                        </div>
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl -rotate-6 translate-y-8 h-48 bg-gray-200 dark:bg-gray-800 border-2 border-primary/40">
                            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" alt="Tech Excellence" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl rotate-12 h-44 bg-gray-200 dark:bg-gray-800 col-span-2 mx-auto -translate-y-4">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="Growth" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
};

export default OkhlaStory;
