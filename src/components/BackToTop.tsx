import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to top"
            className="fixed bottom-24 left-6 z-40 w-9 h-9 rounded-full bg-primary text-white shadow-lg shadow-purple-300/40 dark:shadow-purple-900/40 flex items-center justify-center hover:bg-primary-dark hover:-translate-y-1 active:scale-90 transition-all duration-200 border border-primary-dark"
        >
            <ArrowUp size={16} strokeWidth={3} />
        </button>
    );
}
