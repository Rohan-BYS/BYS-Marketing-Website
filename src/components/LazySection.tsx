import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
    children: ReactNode;
    fallbackHeight?: string;
    rootMargin?: string;
}

export default function LazySection({ children, fallbackHeight = '400px', rootMargin = '200px' }: LazySectionProps) {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once so it stays loaded
        rootMargin, // Load when within this distance of the viewport
    });

    return (
        <div ref={ref} style={{ minHeight: inView ? 'auto' : fallbackHeight }} className="w-full">
            {inView ? children : null}
        </div>
    );
}
