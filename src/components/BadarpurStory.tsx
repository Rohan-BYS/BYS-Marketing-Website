import React from 'react';
import ScrollReveal from './ScrollReveal';
import { MapPin, Quote } from 'lucide-react';

interface BadarpurStoryProps {
    location?: string;
}

/**
 * A specialized component for Badarpur Area pages.
 * Tells the narrative of Badarpur as the strategic gateway between Delhi and Haryana.
 */
const BadarpurStory: React.FC<BadarpurStoryProps> = ({ location }) => {
    // Only show if the location contains "Badarpur"
    if (!location?.toLowerCase().includes('badarpur')) return null;

    return (
        <ScrollReveal>
            <section className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-16 mb-20 bg-gradient-to-br from-primary/5 via-white to-orange-50/30 dark:from-primary/10 dark:via-[#1a1a1a] dark:to-orange-900/10 border border-primary/10 dark:border-white/5 shadow-glass-strong">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 w-fit">
                            <MapPin size={14} />
                            <span>The Badarpur Narrative</span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-black text-text-main dark:text-text-main-dark tracking-tighter leading-tight">
                            "Badarpur is the <span className="text-primary italic">Gateway</span>.<br />
                            It's where Delhi's trade meets the NCR."
                        </h3>

                        <div className="space-y-4 text-text-sub dark:text-text-sub-dark text-lg leading-relaxed relative">
                            <Quote className="absolute -left-6 -top-2 text-primary/20 scale-150 rotate-12" size={40} />
                            <p>
                                Badarpur has always been more than just a border; it's a massive junction of commerce. From the historic Mathura Road to the bustling granite markets and logistics hubs, it's where millions in trade cross into Delhi every day.
                            </p>
                            <p className="font-medium text-text-main dark:text-text-main-dark">
                                I've watched the transformation of this area — from a transit point to a thriving business ecosystem. Yet, so many businesses here remain digitally silent while their competitors in the heart of Delhi steal the limelight.
                            </p>
                            <p>
                                At **BYS Marketing**, we bring the focus back to Badarpur. We build digital identities for the traders, manufacturers, and service providers who form the backbone of this border region. We ensure that when anyone searches for reliability at the Delhi-NCR gate, your business is the first they find.
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
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl rotate-3 h-48 bg-gray-200 dark:bg-gray-800 border border-primary/20">
                            <img src="https://images.unsplash.com/photo-1590066348630-9759be752077?auto=format&fit=crop&q=80&w=400" alt="Trade & Logistics" className="w-full h-full object-cover grayscale opacity-80" />
                        </div>
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl -rotate-6 translate-y-8 h-48 bg-gray-200 dark:bg-gray-800 border-2 border-primary/40">
                            <img src="https://images.unsplash.com/photo-1582213776866-339735a968a3?auto=format&fit=crop&q=80&w=400" alt="Gateway Hub" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl rotate-12 h-44 bg-gray-200 dark:bg-gray-800 col-span-2 mx-auto -translate-y-4">
                            <img src="https://images.unsplash.com/photo-1454165833222-d1d44d60ed4a?auto=format&fit=crop&q=80&w=400" alt="Growth & Connection" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
};

export default BadarpurStory;
