import type { ReactNode } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const BYSLogo = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 375 375" fill="currentColor" aria-hidden="true">
        <g><path d="M 187.5 112.48 C 204.55 112.95 220.98 115.43 236.25 120.85 L 236.25 119.38 C 236.25 53.43 182.77 0.03 116.9 0.03 L 71.25 0.03 L 71.25 165.02 C 71.25 165.02 117.98 110.54 187.5 112.48 Z" /></g>
        <g><path d="M 187.5 142.47 C 123.33 142.47 71.25 194.48 71.25 258.72 L 71.25 374.97 L 187.5 374.97 C 251.67 374.97 303.75 322.97 303.75 258.72 C 303.67 194.55 251.67 142.47 187.5 142.47 Z" /></g>
    </svg>
);
import { useTheme } from './ThemeProvider';
import { Link } from 'react-router-dom';

interface HeaderProps {
    title?: string;
    subtitle?: string;
    icon?: ReactNode;
    brandLink?: string;
}

export default function Header({
    title = "BYS Marketing.",
    subtitle = "Growth Machines",
    icon = <BYSLogo size={24} />,
    brandLink
}: HeaderProps) {
    const { theme, setTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleTheme = () => {
        if (theme === 'system') {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(isDark ? 'light' : 'dark');
        } else {
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }
    };

    const navLinks = [
        { label: 'Company', to: '/about' },
        { label: 'Team', to: '/team' },
        { label: 'Careers', to: '/careers' },
        { label: 'Blogs', to: '/blog' },
        { label: 'Startup?', to: '/startups' },
    ];

    return (
        <>
            <header className="flex items-center justify-between pt-7 pb-3 md:py-6 px-6 relative z-50">
                <div className="flex items-center gap-3">
                    {brandLink ? (
                        <Link to={brandLink} className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-purple-900/40 hover:scale-105 transition-transform">
                            {icon}
                        </Link>
                    ) : (
                        <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-purple-900/40">
                            {icon}
                        </div>
                    )}
                    <div>
                        <h1 className="font-bold text-xl text-text-main dark:text-text-main-dark tracking-tight leading-none">{title}</h1>
                        <p className="text-xs text-text-sub dark:text-text-sub-dark font-medium tracking-wider uppercase mt-1">{subtitle}</p>
                    </div>
                </div>

                {/* Desktop Navigation (Centered) */}
                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-full px-2 py-1.5 shadow-sm">
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={label}
                            to={to}
                            className="relative group px-4 py-1.5 rounded-full text-sm font-semibold text-text-sub dark:text-white/70 hover:text-primary dark:hover:text-white transition-all duration-300 hover:bg-white/70 dark:hover:bg-white/10"
                        >
                            {/* Shimmer sweep on hover */}
                            <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent" />
                            </span>
                            {/* Label */}
                            <span className="relative z-10">{label}</span>
                            {/* Animated dot indicator */}
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2 md:gap-3">

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="relative group overflow-hidden rounded-full w-10 h-10 flex items-center justify-center bg-white dark:bg-[#1a1a1a] shadow-neumorphic dark:shadow-neumorphic-sm-dark active:shadow-neumorphic-pressed dark:active:shadow-neumorphic-pressed transition-all duration-300 border border-gray-50 dark:border-white/5"
                        aria-label="Toggle Dark Mode"
                        title="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? (
                            <Sun size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                        ) : (
                            <Moon size={20} className="text-text-sub group-hover:text-primary transition-colors" />
                        )}
                    </button>

                    {/* Mobile Menu Button (replaces notification bell) */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative group overflow-hidden rounded-full w-10 h-10 flex items-center justify-center bg-white dark:bg-[#1a1a1a] shadow-neumorphic dark:shadow-neumorphic-sm-dark active:shadow-neumorphic-pressed dark:active:shadow-neumorphic-pressed transition-all duration-300 border border-gray-50 dark:border-white/5"
                        aria-label="Toggle Menu"
                        title="Toggle Menu"
                    >
                        {mobileMenuOpen ? (
                            <X size={20} className="text-primary transition-colors" />
                        ) : (
                            <Menu size={20} className="text-text-sub dark:text-text-sub-dark group-hover:text-primary dark:group-hover:text-primary-light transition-colors" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-x-0 top-[72px] z-40 px-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <nav className="bg-white/90 dark:bg-[#1a1a1a]/95 backdrop-blur-2xl border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40 p-3 flex flex-col gap-1">
                        {navLinks.map(({ label, to }) => (
                            <Link
                                key={label}
                                to={to}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-text-main dark:text-white hover:bg-primary/5 dark:hover:bg-white/5 hover:text-primary transition-all"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}
