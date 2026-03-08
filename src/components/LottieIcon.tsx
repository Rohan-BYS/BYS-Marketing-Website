import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';

interface LottieIconProps {
    animationData: object;
    size?: number;
    className?: string;
}

/**
 * A lightweight Lottie animation wrapper that plays on hover and pauses on mouse leave.
 * Used to replace static SVG icons with engaging micro-interactions.
 */
export default function LottieIcon({ animationData, size = 30, className = '' }: LottieIconProps) {
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        lottieRef.current?.goToAndPlay(0, true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Let current loop finish, then stop
        lottieRef.current?.setSpeed(1.5);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ width: size, height: size }}
            className={className}
        >
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={isHovered}
                autoplay={false}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
