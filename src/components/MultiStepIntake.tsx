import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Briefcase,
    Globe,
    Megaphone,
    PenTool,
    Rocket,
    Building2,
    DollarSign,
    Target
} from 'lucide-react';

interface MultiStepIntakeProps {
    onClose: () => void;
    initialData?: {
        name?: string;
        email?: string;
        service?: string;
        details?: string;
    };
}

export default function MultiStepIntake({ onClose, initialData }: MultiStepIntakeProps) {
    const [step, setStep] = useState(initialData?.service ? 2 : 1);
    const [formData, setFormData] = useState({
        service: initialData?.service || '',
        budget: '',
        timeline: '',
        name: initialData?.name || '',
        email: initialData?.email || '',
        company: '',
        details: initialData?.details || ''
    });

    const updateForm = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const isStep1Valid = formData.service !== '';
    const isStep2Valid = formData.budget !== '';
    const isStep3Valid = formData.timeline !== '';
    const isStep4Valid = formData.name !== '' && formData.email !== '';

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would integrate with the actual backend/analytics
        console.log('Form submitted:', formData);
        setStep(5); // Success step
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: 'easeOut' as const }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.2, ease: 'easeIn' as const }
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    const [direction, setDirection] = useState(1);
    const changeStep = (newStep: number) => {
        setDirection(newStep > step ? 1 : -1);
        setStep(newStep);
    }

    // Step 1: Service Selection
    const renderStep1 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">What can we help you build?</h3>
                <p className="text-text-sub dark:text-gray-400">Select the primary service you're interested in.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { id: 'web', label: 'Web Development', icon: Globe },
                    { id: 'marketing', label: 'Digital Marketing', icon: Megaphone },
                    { id: 'design', label: 'UI/UX Design', icon: PenTool },
                    { id: 'strategy', label: 'Growth Strategy', icon: Rocket },
                ].map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => updateForm('service', item.id)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 flex flex-col gap-3 group ${formData.service === item.id
                            ? 'border-primary bg-primary/5 dark:bg-primary/10'
                            : 'border-gray-200 dark:border-white/10 hover:border-primary/50'
                            }`}
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${formData.service === item.id ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500 group-hover:bg-primary/20 group-hover:text-primary'
                            }`}>
                            <item.icon size={24} />
                        </div>
                        <span className={`font-bold text-lg ${formData.service === item.id ? 'text-primary' : 'text-text-main dark:text-gray-300'}`}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );

    // Step 2: Budget
    const renderStep2 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">What is your estimated budget?</h3>
                <p className="text-text-sub dark:text-gray-400">This helps us scope the right solution for you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { id: 'small', label: '$5k - $10k', icon: DollarSign },
                    { id: 'medium', label: '$10k - $25k', icon: Target },
                    { id: 'large', label: '$25k - $50k', icon: Briefcase },
                    { id: 'enterprise', label: '$50k+', icon: Building2 },
                ].map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => updateForm('budget', item.id)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 flex items-center gap-4 group ${formData.budget === item.id
                            ? 'border-primary bg-primary/5 dark:bg-primary/10'
                            : 'border-gray-200 dark:border-white/10 hover:border-primary/50'
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${formData.budget === item.id ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500 group-hover:bg-primary/20 group-hover:text-primary'
                            }`}>
                            <item.icon size={20} />
                        </div>
                        <span className={`font-bold text-lg ${formData.budget === item.id ? 'text-primary' : 'text-text-main dark:text-gray-300'}`}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );

    // Step 3: Timeline & Details
    const renderStep3 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">Tell us more about the project</h3>
                <p className="text-text-sub dark:text-gray-400">When do you need this completed?</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-3">Timeline</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['ASAP', '1-2 Months', '3-6 Months', 'Flexible'].map((time) => (
                            <button
                                key={time}
                                type="button"
                                onClick={() => updateForm('timeline', time)}
                                className={`py-3 px-4 rounded-xl border-2 text-center transition-all duration-300 font-medium ${formData.timeline === time
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-primary/50'
                                    }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-2">Project Details (Optional)</label>
                    <textarea
                        value={formData.details}
                        onChange={(e) => updateForm('details', e.target.value)}
                        placeholder="Briefly describe your goals, target audience, or existing roadblocks..."
                        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-transparent text-text-main dark:text-white focus:border-primary focus:ring-0 transition-colors resize-none h-32"
                    />
                </div>
            </div>
        </div>
    );

    // Step 4: Contact Info
    const renderStep4 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">Where should we send the proposal?</h3>
                <p className="text-text-sub dark:text-gray-400">We'll review your requirements and get back within 24 hours.</p>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-2">Full Name *</label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => updateForm('name', e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#222] text-text-main dark:text-white focus:border-primary focus:ring-0 transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-2">Work Email *</label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => updateForm('email', e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#222] text-text-main dark:text-white focus:border-primary focus:ring-0 transition-colors"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-text-main dark:text-gray-300 mb-2">Company Name</label>
                    <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateForm('company', e.target.value)}
                        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#222] text-text-main dark:text-white focus:border-primary focus:ring-0 transition-colors"
                        placeholder="Innovate Inc."
                    />
                </div>
            </div>
        </div>
    );

    // Step 5: Success
    const renderStep5 = () => (
        <div className="text-center space-y-6 py-8">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <CheckCircle2 size={48} className="text-green-500" />
                </motion.div>
            </div>
            <h3 className="text-3xl font-bold text-text-main dark:text-white mb-4">Request Received!</h3>
            <p className="text-lg text-text-sub dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                Thank you for considering BYS. One of our lead strategists will review your project details and reach out within 24 hours.
            </p>
            <button
                onClick={onClose}
                className="mt-8 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors inline-block"
            >
                Done
            </button>
        </div>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative z-10 w-full max-w-3xl bg-white dark:bg-[#111] rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10"
            >
                {/* Progress Bar */}
                {step < 5 && (
                    <div className="w-full h-2 bg-gray-100 dark:bg-white/5">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary-light to-primary"
                            initial={{ width: `${((step - 1) / 4) * 100}%` }}
                            animate={{ width: `${(step / 4) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                )}

                {/* Form Content */}
                <div className="p-6 md:p-12 min-h-[500px] flex flex-col justify-center relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors z-20"
                    >
                        ✕
                    </button>

                    <form onSubmit={submitForm} className="relative w-full overflow-hidden flex-grow flex flex-col justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={step}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="w-full"
                            >
                                {step === 1 && renderStep1()}
                                {step === 2 && renderStep2()}
                                {step === 3 && renderStep3()}
                                {step === 4 && renderStep4()}
                                {step === 5 && renderStep5()}
                            </motion.div>
                        </AnimatePresence>
                    </form>

                    {/* Navigation Footer */}
                    {step < 5 && (
                        <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-100 dark:border-white/5 relative z-20">
                            {step > 1 ? (
                                <button
                                    onClick={() => changeStep(step - 1)}
                                    className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors flex items-center gap-2"
                                >
                                    <ArrowLeft size={18} /> Back
                                </button>
                            ) : (
                                <div></div> // Placeholder for alignment
                            )}

                            {step < 4 ? (
                                <button
                                    onClick={() => changeStep(step + 1)}
                                    disabled={
                                        (step === 1 && !isStep1Valid) ||
                                        (step === 2 && !isStep2Valid) ||
                                        (step === 3 && !isStep3Valid)
                                    }
                                    className="px-8 py-3 rounded-xl bg-primary text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors flex items-center gap-2"
                                >
                                    Next <ArrowRight size={18} />
                                </button>
                            ) : (
                                <button
                                    onClick={submitForm}
                                    disabled={!isStep4Valid}
                                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-light to-primary text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow-purple transition-all flex items-center gap-2"
                                >
                                    Submit Request <ArrowRight size={18} />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
