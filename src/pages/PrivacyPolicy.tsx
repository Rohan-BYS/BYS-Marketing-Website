import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicy() {
    return (
        <main className="flex flex-col gap-8 px-6 pt-8 max-w-[900px] mx-auto w-full pb-40">
            <SEOHead
                title="Privacy Policy — BYS Marketing"
                description="BYS Marketing privacy policy. Learn how we collect, use, and protect your personal data."
                url="https://bys.marketing/privacy"
            />

            <ScrollReveal>
                <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all mb-4">
                    <ArrowLeft size={14} /> Back to Home
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Shield size={28} className="text-primary" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white">Privacy Policy</h1>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark font-medium">Last updated: March 1, 2026</p>
                    </div>
                </div>
            </ScrollReveal>

            <div className="prose prose-sm dark:prose-invert max-w-none">
                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">1. Information We Collect</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed mb-3">We collect the following types of information:</p>
                        <ul className="text-sm text-text-sub dark:text-text-sub-dark space-y-2">
                            <li>• <strong>Personal Information:</strong> Name, email address, phone number, and company name when you fill out our contact forms or subscribe to our newsletter.</li>
                            <li>• <strong>Usage Data:</strong> Pages visited, time spent, browser type, device type, and IP address for analytics purposes.</li>
                            <li>• <strong>Cookies:</strong> We use cookies for analytics (Google Analytics), site functionality, and marketing.</li>
                        </ul>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">2. How We Use Your Information</h2>
                        <ul className="text-sm text-text-sub dark:text-text-sub-dark space-y-2">
                            <li>• To respond to your enquiries and provide customer support</li>
                            <li>• To send you relevant marketing communications (with your consent)</li>
                            <li>• To improve our website, services, and user experience</li>
                            <li>• To comply with legal obligations</li>
                        </ul>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">3. Data Protection & Security</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                            We implement industry-standard security measures including SSL encryption, secure hosting, and access controls to protect your personal data. We do not sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">4. Your Rights</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed mb-3">Under applicable data protection laws (including GDPR and India's DPDP Act), you have the right to:</p>
                        <ul className="text-sm text-text-sub dark:text-text-sub-dark space-y-2">
                            <li>• Access, correct, or delete your personal data</li>
                            <li>• Opt out of marketing communications at any time</li>
                            <li>• Request data portability</li>
                            <li>• Lodge a complaint with a supervisory authority</li>
                        </ul>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">5. Third-Party Services</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                            We use third-party services including Google Analytics, Meta Pixel, and WhatsApp Business API. These services have their own privacy policies. We recommend reviewing their privacy practices.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">6. Contact Us</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                            For privacy-related enquiries, contact us at <a href="mailto:hello@bys.marketing" className="text-primary font-bold hover:underline">hello@bys.marketing</a> or visit our <Link to="/contact" className="text-primary font-bold hover:underline">contact page</Link>.
                        </p>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark mt-2">
                            BYS Marketing · Delhi NCR, India · <a href="https://bys.marketing" className="text-primary font-bold hover:underline">bys.marketing</a>
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
