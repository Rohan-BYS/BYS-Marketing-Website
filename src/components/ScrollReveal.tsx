import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    distance = 50,
    className = '',
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-10% 0px' });

    const getInitialProps = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: distance };
            case 'down':
                return { opacity: 0, y: -distance };
            case 'left':
                return { opacity: 0, x: distance };
            case 'right':
                return { opacity: 0, x: -distance };
            case 'none':
                return { opacity: 0 };
            default:
                return { opacity: 0, y: distance };
        }
    };

    const getAnimateProps = () => {
        switch (direction) {
            case 'up':
            case 'down':
                return { opacity: 1, y: 0 };
            case 'left':
            case 'right':
                return { opacity: 1, x: 0 };
            case 'none':
                return { opacity: 1 };
            default:
                return { opacity: 1, y: 0 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitialProps()}
            animate={isInView ? getAnimateProps() : getInitialProps()}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth, premium feel
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
