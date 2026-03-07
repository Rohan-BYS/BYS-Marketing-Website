import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('bys-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setShow(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('bys-cookie-consent', 'accepted');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 animate-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 p-5 backdrop-blur-xl">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <Cookie size={20} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-sm text-text-main dark:text-white mb-1">We use cookies</h4>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark leading-relaxed mb-3">
                            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                        </p>
                        <div className="flex gap-2">
                            <button onClick={accept} className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary-dark transition-colors">
                                Accept All
                            </button>
                            <button onClick={accept} className="px-4 py-2 bg-gray-100 dark:bg-white/10 text-text-main dark:text-white text-xs font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                                Necessary Only
                            </button>
                        </div>
                    </div>
                    <button onClick={() => setShow(false)} title="Dismiss cookie banner" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
