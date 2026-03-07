import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function TermsOfService() {
    return (
        <main className="flex flex-col gap-8 px-6 pt-8 max-w-[900px] mx-auto w-full pb-40">
            <SEOHead
                title="Terms of Service — BYS Marketing"
                description="Terms and conditions for using BYS Marketing services. Read our service agreement, payment terms, and intellectual property policies."
                url="https://bys.marketing/terms"
            />

            <ScrollReveal>
                <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all mb-4">
                    <ArrowLeft size={14} /> Back to Home
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <FileText size={28} className="text-primary" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white">Terms of Service</h1>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark font-medium">Last updated: March 1, 2026</p>
                    </div>
                </div>
            </ScrollReveal>

            <div className="prose prose-sm dark:prose-invert max-w-none">
                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">1. Services Offered</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                            BYS Marketing provides digital marketing, web development, UI/UX design, SEO optimization, media production, content strategy, social media management, IT hardware procurement, cyber security solutions, and strategic consultation services. All services are subject to the terms outlined in the specific project proposal/agreement.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">2. Project Engagement & Payment</h2>
                        <ul className="text-sm text-text-sub dark:text-text-sub-dark space-y-2">
                            <li>• All projects begin after mutual agreement on scope, timeline, and pricing</li>
                            <li>• A minimum 50% advance payment is required before work commences</li>
                            <li>• Monthly retainer services are billed at the start of each billing cycle</li>
                            <li>• Late payments beyond 15 days may result in service suspension</li>
                            <li>• We accept bank transfer, UPI, and international wire transfers</li>
                        </ul>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">3. Intellectual Property</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                            Upon full payment, all deliverables (designs, code, content) become the exclusive property of the client. BYS Marketing reserves the right to showcase completed work in our portfolio unless explicitly agreed otherwise. Third-party assets (stock images, fonts, plugins) are subject to their respective licenses.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">4. Revisions & Modifications</h2>
                        <ul className="text-sm text-text-sub dark:text-text-sub-dark space-y-2">
                            <li>• Each project includes a specified number of revision rounds (typically 2–3)</li>
                            <li>• Additional revisions beyond the agreed scope will be billed separately</li>
                            <li>• Major scope changes may require a revised proposal and timeline</li>
                        </ul>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">5. Confidentiality</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                            Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes but is not limited to business strategies, client lists, technical specifications, and financial information. NDAs can be executed upon request.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">6. Limitation of Liability</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                            BYS Marketing shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question. We do not guarantee specific results from marketing campaigns, as outcomes depend on multiple external factors.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">7. Cancellation & Refunds</h2>
                        <ul className="text-sm text-text-sub dark:text-text-sub-dark space-y-2">
                            <li>• Either party may terminate a project with 14 days written notice</li>
                            <li>• Client is responsible for payment for work already completed at termination</li>
                            <li>• Unused advance amounts (after deducting completed work) are refundable</li>
                            <li>• Monthly retainer services can be cancelled at the end of any billing cycle</li>
                        </ul>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">8. Governing Law</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                            These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi NCR, India.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/60 dark:border-white/10 dark:bg-black/40 mb-6">
                        <h2 className="text-lg font-bold text-text-main dark:text-white mb-3">9. Contact</h2>
                        <p className="text-sm text-text-sub dark:text-text-sub-dark leading-relaxed">
                            For questions about these terms, contact us at <a href="mailto:hello@bys.marketing" className="text-primary font-bold hover:underline">hello@bys.marketing</a> or visit our <Link to="/contact" className="text-primary font-bold hover:underline">contact page</Link>.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
