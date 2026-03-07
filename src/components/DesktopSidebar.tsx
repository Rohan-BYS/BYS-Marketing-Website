import { ArrowRight, CheckCircle, Mail, Phone, ShieldCheck, Star, Zap } from 'lucide-react';
import { useState } from 'react';
import MultiStepIntake from './MultiStepIntake';

interface DesktopSidebarProps {
    serviceName?: string;
    expertName?: string;
    expertRole?: string;
    showContactForm?: boolean;
}

export default function DesktopSidebar({
    serviceName = 'Marketing',
    expertName = 'Sarah Jenkins',
    expertRole = 'Lead Strategist',
    showContactForm = true
}: DesktopSidebarProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [isIntakeOpen, setIsIntakeOpen] = useState(false);

    return (
        <aside className="hidden lg:flex flex-col gap-6 sticky top-28 h-fit w-full max-w-[380px] self-start">

            {/* 1. EXPERT PROFILE */}
            <div className="glass-panel p-6 rounded-3xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-[#1a1a1a]/80 shadow-neumorphic-sm dark:shadow-none">
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-primary/20 bg-gray-100">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUWQRgHICULwrp3TyEYUT1ysk_CActzgv40cjMxkkoEvDPxLda6us-klxy8UfJVUw97218G2C76FUIIhF1sGMe4V7pvgKWLYVtzSdL1f_BpJqKDgxKgIXGxkXk-sB5AVdLSLFKfkILKdd9krfCdflegvvOcKt35C4yBnZNlUHKPAHhbBhdyxpOAXu3GQqe2eg7L3WePrYDc7LgMZFqxEpVqlnJhbHOzDC9qb0o0zXV-GeNH4hYkDrvZ_22wV-ZN3GLu_NKmw_aOWM"
                            alt={expertName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-1 mb-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Online Now</span>
                        </div>
                        <h4 className="font-bold text-text-main dark:text-text-main-dark">{expertName}</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark">{expertRole}</p>
                    </div>
                </div>
                <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed mb-5">
                    "I oversee all {serviceName} implementations. Tap the button below to connect with me directly."
                </p>
                <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-xs font-bold text-text-main dark:text-white">
                        <Phone size={14} /> Call Me
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-xs font-bold text-text-main dark:text-white">
                        <Mail size={14} /> Email Me
                    </button>
                </div>
            </div>

            {/* 2. INSTANT QUOTE FORM */}
            {showContactForm && (
                <div className="glass-panel p-6 rounded-3xl border border-primary/20 dark:border-primary/30 bg-gradient-to-br from-primary/5 to-purple-500/5 dark:from-primary/10 dark:to-purple-900/10 shadow-glow-purple/20">
                    <h4 className="font-bold text-lg text-text-main dark:text-white mb-1">Instant Estimate</h4>
                    <p className="text-xs text-text-sub dark:text-text-sub-dark mb-5">Get a custom quote for {serviceName} in 60 seconds.</p>

                    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main dark:text-white placeholder:text-gray-400"
                        />
                        <input
                            type="email"
                            placeholder="Work Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main dark:text-white placeholder:text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Website URL"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main dark:text-white placeholder:text-gray-400"
                        />
                        <button
                            type="button"
                            onClick={() => setIsIntakeOpen(true)}
                            className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-primary-dark hover:shadow-glow-purple transition-all flex items-center justify-center gap-2 mt-2"
                        >
                            <span>Get Growth Plan</span>
                            <ArrowRight size={16} />
                        </button>
                    </form>
                </div>
            )}

            {/* 3. GUARANTEES / TRUST */}
            <div className="glass-panel p-6 rounded-3xl border border-white/60 dark:border-white/10 bg-white/30 dark:bg-[#1a1a1a]/50">
                <h4 className="font-bold text-sm text-text-main dark:text-white uppercase tracking-widest mb-4">Our Guarantees</h4>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                        <div className="mt-0.5 text-primary"><ShieldCheck size={18} /></div>
                        <div>
                            <h5 className="text-sm font-bold text-text-main dark:text-white">Ironclad Security</h5>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed">Enterprise-grade protection on all deliverables.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="mt-0.5 text-primary"><Zap size={18} /></div>
                        <div>
                            <h5 className="text-sm font-bold text-text-main dark:text-white">Speed Optimization</h5>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed">Built for maximum performance and minimum latency.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="mt-0.5 text-green-500"><CheckCircle size={18} /></div>
                        <div>
                            <h5 className="text-sm font-bold text-text-main dark:text-white">Transparent Revisions</h5>
                            <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed">We don't stop until the metrics are met.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. REVIEWS */}
            <div className="glass-panel p-6 rounded-3xl border border-white/60 dark:border-white/10 bg-white/30 dark:bg-[#1a1a1a]/50">
                <div className="flex gap-1 text-yellow-400 mb-2">
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                </div>
                <p className="text-sm text-text-main dark:text-white font-medium italic mb-4 leading-relaxed">
                    "The BYS team handled our {serviceName} with absolute precision. Our ROI skyrocketed within 60 days."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">MK</div>
                    <div>
                        <p className="text-xs font-bold text-text-main dark:text-white">Marcus K.</p>
                        <p className="text-[10px] text-text-sub dark:text-text-sub-dark">CEO, NovaTech Solutions</p>
                    </div>
                </div>
            </div>

            {/* Multi-Step Intake Overlay */}
            {isIntakeOpen && (
                <MultiStepIntake
                    onClose={() => setIsIntakeOpen(false)}
                    initialData={{
                        name,
                        email,
                        details: website ? `Website: ${website}` : '',
                        service: serviceName.toLowerCase().includes('marketing') ? 'marketing' :
                            serviceName.toLowerCase().includes('web') ? 'web' :
                                serviceName.toLowerCase().includes('design') ? 'design' : ''
                    }}
                />
            )}
        </aside>
    );
}
