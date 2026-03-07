import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, LayoutGrid, Tag, Mail, Bot } from 'lucide-react';
import { useBotContext } from '../context/ChatbotContext'; // we will create this soon

export default function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();
    const { toggleChatbot } = useBotContext();

    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/services', icon: LayoutGrid, label: 'Services' },
    ];

    const rightNavItems = [
        { path: '/offers', icon: Tag, label: 'Offers' },
        { path: '/contact', icon: Mail, label: 'Contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-50">
            <div className="glass-panel rounded-full px-2 py-2 flex justify-between items-center shadow-glass dark:shadow-2xl backdrop-blur-xl dark:backdrop-blur-2xl bg-white/80 dark:bg-[#0a0a0a]/80 border-white/60 dark:border-white/10 transition-colors">
                {navItems.map((item) => {
                    const active = isActive(item.path);

                    const handleClick = (e: React.MouseEvent) => {
                        if (item.path === '/services' && active) {
                            e.preventDefault();
                            navigate(-1);
                        }
                    };

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={handleClick}
                            className={`flex flex-col items-center justify-center w-16 h-14 rounded-full transition-colors group relative ${active
                                ? 'text-primary'
                                : 'text-text-sub dark:text-text-sub-dark hover:text-primary dark:hover:text-white opacity-70'
                                }`}
                        >
                            <item.icon className={`mb-0.5 group-hover:-translate-y-0.5 transition-transform ${active ? 'fill-primary/20' : ''}`} size={24} />
                            <span className={`text-[9px] ${active ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                            {active && (
                                <span className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_2px_rgba(104,54,244,0.6)]"></span>
                            )}
                        </Link>
                    );
                })}

                <div className="relative -top-6">
                    <button
                        onClick={toggleChatbot}
                        className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-[#845df7] text-white shadow-[0_0_20px_rgba(104,54,244,0.6)] flex items-center justify-center border-4 border-white dark:border-[#121212] transform hover:scale-110 transition-transform duration-200"
                    >
                        <Bot size={32} />
                    </button>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-primary/50 blur-md rounded-full"></div>
                </div>

                {rightNavItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex flex-col items-center justify-center w-16 h-14 rounded-full transition-colors group relative ${isActive(item.path)
                            ? 'text-primary'
                            : 'text-text-sub dark:text-text-sub-dark hover:text-primary dark:hover:text-white opacity-70'
                            }`}
                    >
                        <item.icon className={`mb-0.5 group-hover:-translate-y-0.5 transition-transform ${isActive(item.path) ? 'fill-primary/20' : ''}`} size={24} />
                        <span className={`text-[9px] ${isActive(item.path) ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                        {isActive(item.path) && (
                            <span className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_2px_rgba(104,54,244,0.6)]"></span>
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
