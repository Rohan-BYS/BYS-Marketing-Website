import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
    id: string;
    title: string;
    category: string;
    brandBgClass: string;
    brandTextClass: string;
    heroImage: string;
    summary: string;
    stats: { label: string; value: string }[];
}

export default function CaseStudyCard({
    id,
    title,
    category,
    brandBgClass,
    brandTextClass,
    heroImage,
    summary,
    stats
}: CaseStudyCardProps) {
    return (
        <Link
            to={`/portfolio/${id}`}
            className="group block relative rounded-[2rem] overflow-hidden bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all duration-500 shadow-neumorphic-sm dark:shadow-none hover:shadow-glow-purple/20"
        >
            {/* Image Container */}
            <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-100 dark:bg-[#111]">
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
                />
                <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Top Tags */}
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                    <span
                        className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-md ${brandBgClass}`}
                    >
                        {category}
                    </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-primary-light transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                        {summary}
                    </p>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-white/5 border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/20">
                {stats.slice(0, 3).map((stat, index) => (
                    <div key={index} className="p-4 sm:p-5 text-center transition-colors group-hover:bg-primary/5">
                        <div className={`text-lg sm:text-xl font-bold tracking-tight mb-1 ${index === 0 ? brandTextClass : 'text-text-main dark:text-white'}`}>
                            {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-sub dark:text-gray-500">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Hover Arrow indicator */}
            <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight size={20} />
            </div>
        </Link>
    );
}
