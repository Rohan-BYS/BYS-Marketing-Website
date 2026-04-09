import { useState, useEffect, useRef } from 'react';
import { TrendingUp, DollarSign, Target, Zap, ArrowRight, Calculator } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ROIResult {
    projectedLeads: number;
    projectedRevenue: number;
    roiPercentage: number;
    costPerLead: number;
}

function AnimatedNumber({ value, prefix = '', suffix = '', duration = 1200 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
    const [display, setDisplay] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        if (value <= 0) { setDisplay(0); return; }
        started.current = false;
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                const steps = 50;
                const increment = value / steps;
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= value) { setDisplay(value); clearInterval(timer); }
                    else setDisplay(Math.floor(current));
                }, duration / steps);
            }
        }, { threshold: 0.3 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [value, duration]);

    return <span ref={ref}>{prefix}{display.toLocaleString('en-IN')}{suffix}</span>;
}

export default function ROICalculator() {
    const [monthlySpend, setMonthlySpend] = useState(25000);
    const [avgDealSize, setAvgDealSize] = useState(50000);
    const [currentLeads, setCurrentLeads] = useState(10);
    const [result, setResult] = useState<ROIResult | null>(null);
    const [isCalculated, setIsCalculated] = useState(false);

    const calculateROI = () => {
        // BYS claims 400% lead increase and 300% ROI on average
        const leadMultiplier = 3.5; // Conservative — 350% increase
        const conversionRateImprovement = 1.8; // 80% better conversion
        const projectedLeads = Math.round(currentLeads * leadMultiplier);
        const projectedRevenue = Math.round(projectedLeads * avgDealSize * 0.15 * conversionRateImprovement); // 15% close rate improved
        const totalInvestment = monthlySpend * 6; // 6-month projection
        const roiPercentage = Math.round(((projectedRevenue - totalInvestment) / totalInvestment) * 100);
        const costPerLead = Math.round(monthlySpend / projectedLeads);

        setResult({ projectedLeads, projectedRevenue, roiPercentage, costPerLead });
        setIsCalculated(true);
    };

    const formatCurrency = (val: number) => {
        if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)}Cr`;
        if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
        return `₹${val.toLocaleString('en-IN')}`;
    };

    return (
        <ScrollReveal>
            <section className="w-full" id="roi-calculator">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 mb-4">
                        <Calculator size={14} className="text-primary" />
                        <span className="text-xs font-black text-primary uppercase tracking-[0.15em]">Free Tool</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mb-4 tracking-tight">
                        ROI Impact <span className="text-primary">Calculator</span>
                    </h2>
                    <p className="text-text-sub dark:text-text-sub-dark max-w-lg mx-auto text-base">
                        See how much revenue BYS can generate for your business. Enter your numbers — get a data-driven projection.
                    </p>
                </div>

                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/60 dark:border-white/10 bg-white/50 dark:bg-[#0f0f0f]/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(104,54,244,0.08)] dark:shadow-[0_20px_60px_rgba(104,54,244,0.15)]">
                    {/* Background orbs */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-300/10 dark:bg-purple-900/20 rounded-full blur-[60px] pointer-events-none"></div>

                    <div className="relative z-10 p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                            {/* Input Side */}
                            <div className="flex flex-col gap-7">
                                <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
                                    <Target size={20} className="text-primary" />
                                    Your Current Numbers
                                </h3>

                                {/* Monthly Marketing Spend */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-text-sub dark:text-text-sub-dark uppercase tracking-wider">Monthly Marketing Spend</label>
                                        <span className="text-lg font-black text-primary tabular-nums">₹{monthlySpend.toLocaleString('en-IN')}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={5000}
                                        max={500000}
                                        step={5000}
                                        value={monthlySpend}
                                        onChange={(e) => { setMonthlySpend(Number(e.target.value)); setIsCalculated(false); }}
                                        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-white/10 accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(104,54,244,0.5)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
                                    />
                                    <div className="flex justify-between text-[10px] font-bold text-text-sub/50 dark:text-text-sub-dark/50 uppercase tracking-wider">
                                        <span>₹5K</span>
                                        <span>₹5L</span>
                                    </div>
                                </div>

                                {/* Average Deal Size */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-text-sub dark:text-text-sub-dark uppercase tracking-wider">Average Deal/Order Value</label>
                                        <span className="text-lg font-black text-primary tabular-nums">₹{avgDealSize.toLocaleString('en-IN')}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={5000}
                                        max={1000000}
                                        step={5000}
                                        value={avgDealSize}
                                        onChange={(e) => { setAvgDealSize(Number(e.target.value)); setIsCalculated(false); }}
                                        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-white/10 accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(104,54,244,0.5)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
                                    />
                                    <div className="flex justify-between text-[10px] font-bold text-text-sub/50 dark:text-text-sub-dark/50 uppercase tracking-wider">
                                        <span>₹5K</span>
                                        <span>₹10L</span>
                                    </div>
                                </div>

                                {/* Current Monthly Leads */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-text-sub dark:text-text-sub-dark uppercase tracking-wider">Current Monthly Leads</label>
                                        <span className="text-lg font-black text-primary tabular-nums">{currentLeads}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={1}
                                        max={200}
                                        step={1}
                                        value={currentLeads}
                                        onChange={(e) => { setCurrentLeads(Number(e.target.value)); setIsCalculated(false); }}
                                        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-200 dark:bg-white/10 accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(104,54,244,0.5)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
                                    />
                                    <div className="flex justify-between text-[10px] font-bold text-text-sub/50 dark:text-text-sub-dark/50 uppercase tracking-wider">
                                        <span>1</span>
                                        <span>200+</span>
                                    </div>
                                </div>

                                <button
                                    onClick={calculateROI}
                                    className="w-full py-4 px-8 bg-primary text-white font-black text-lg rounded-2xl shadow-[0_0_25px_rgba(104,54,244,0.35)] hover:shadow-[0_0_40px_rgba(104,54,244,0.5)] hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group mt-2"
                                >
                                    Calculate My ROI
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Results Side */}
                            <div className="flex flex-col gap-6">
                                <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
                                    <TrendingUp size={20} className="text-green-500" />
                                    Projected Impact <span className="text-xs text-text-sub dark:text-text-sub-dark font-medium">(6-Month)</span>
                                </h3>

                                {!isCalculated ? (
                                    <div className="flex-1 flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-gray-200 dark:border-white/10 p-10 min-h-[300px]">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center">
                                            <Calculator size={32} className="text-primary/40" />
                                        </div>
                                        <p className="text-text-sub dark:text-text-sub-dark text-center text-sm max-w-xs">
                                            Adjust the sliders and hit <strong className="text-primary">Calculate</strong> to see your projected revenue growth with BYS.
                                        </p>
                                    </div>
                                ) : result && (
                                    <div className="grid grid-cols-2 gap-4 flex-1">
                                        {/* Projected Leads */}
                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/10 rounded-2xl p-6 border border-green-100 dark:border-green-900/20 flex flex-col justify-between group hover:-translate-y-0.5 transition-transform">
                                            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-3">
                                                <TrendingUp size={20} />
                                            </div>
                                            <div>
                                                <p className="text-3xl md:text-4xl font-black text-green-600 dark:text-green-400 mb-1">
                                                    <AnimatedNumber value={result.projectedLeads} suffix="/mo" />
                                                </p>
                                                <p className="text-[10px] font-bold text-green-700/60 dark:text-green-400/60 uppercase tracking-widest">Projected Leads</p>
                                            </div>
                                        </div>

                                        {/* Projected Revenue */}
                                        <div className="bg-gradient-to-br from-purple-50 to-primary/5 dark:from-primary/15 dark:to-primary/5 rounded-2xl p-6 border border-primary/20 dark:border-primary/15 flex flex-col justify-between group hover:-translate-y-0.5 transition-transform">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                                                <DollarSign size={20} />
                                            </div>
                                            <div>
                                                <p className="text-3xl md:text-4xl font-black text-primary mb-1">
                                                    {formatCurrency(result.projectedRevenue)}
                                                </p>
                                                <p className="text-[10px] font-bold text-primary/50 uppercase tracking-widest">Projected Revenue</p>
                                            </div>
                                        </div>

                                        {/* ROI % */}
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/20 flex flex-col justify-between group hover:-translate-y-0.5 transition-transform">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                                                <Zap size={20} />
                                            </div>
                                            <div>
                                                <p className="text-3xl md:text-4xl font-black text-blue-600 dark:text-blue-400 mb-1">
                                                    <AnimatedNumber value={result.roiPercentage} suffix="%" />
                                                </p>
                                                <p className="text-[10px] font-bold text-blue-700/60 dark:text-blue-400/60 uppercase tracking-widest">Projected ROI</p>
                                            </div>
                                        </div>

                                        {/* Cost Per Lead */}
                                        <div className="bg-gradient-to-br from-orange-50 to-amber-50/50 dark:from-orange-900/20 dark:to-amber-900/10 rounded-2xl p-6 border border-orange-100 dark:border-orange-900/20 flex flex-col justify-between group hover:-translate-y-0.5 transition-transform">
                                            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-3">
                                                <Target size={20} />
                                            </div>
                                            <div>
                                                <p className="text-3xl md:text-4xl font-black text-orange-600 dark:text-orange-400 mb-1">
                                                    <AnimatedNumber value={result.costPerLead} prefix="₹" />
                                                </p>
                                                <p className="text-[10px] font-bold text-orange-700/60 dark:text-orange-400/60 uppercase tracking-widest">Cost Per Lead</p>
                                            </div>
                                        </div>

                                        {/* CTA Banner */}
                                        <div className="col-span-2 bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_30px_rgba(104,54,244,0.3)]">
                                            <div>
                                                <p className="text-white font-bold text-sm">Ready to see these results?</p>
                                                <p className="text-white/70 text-xs">Book a free strategy call — no commitment.</p>
                                            </div>
                                            <a
                                                href="https://wa.me/+918383894893?text=Hi%2C%20I%20used%20the%20ROI%20Calculator%20and%20I'm%20interested%20in%20discussing%20my%20project"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-white text-primary font-black text-sm rounded-xl hover:bg-gray-50 transition-colors shadow-md whitespace-nowrap"
                                            >
                                                Book Strategy Call
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Trust Footer */}
                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                            {[
                                { label: 'Based on 150+ client projects', icon: '📊' },
                                { label: 'Conservative estimates used', icon: '🎯' },
                                { label: 'No obligation', icon: '🤝' },
                            ].map((item, i) => (
                                <span key={i} className="flex items-center gap-2 text-xs text-text-sub dark:text-text-sub-dark font-medium">
                                    <span>{item.icon}</span> {item.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
}
