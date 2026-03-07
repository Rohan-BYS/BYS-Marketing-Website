import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import GlobalFooter from '../components/GlobalFooter';
import { ThemeProvider } from '../components/ThemeProvider';
import { ChatbotProvider } from '../context/ChatbotContext';
import AIChatbotModal from '../components/AIChatbotModal';
import BackToTop from '../components/BackToTop';
import CookieConsent from '../components/CookieConsent';
import { useEffect } from 'react';

export default function RootLayout() {
    const location = useLocation();
    const isServicesDrawer = location.pathname === '/services';

    // Cursor glow: track mouse position for CSS radial gradient
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
            document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <ThemeProvider defaultTheme="system" storageKey="bys-theme">
            <ChatbotProvider>
                <div className="bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark min-h-screen flex justify-center selection:bg-primary selection:text-white overflow-x-hidden transition-colors duration-300">

                    {/* Global Background Elements */}
                    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                        <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-purple-100 dark:bg-purple-900 rounded-full blur-[120px] dark:blur-[140px] opacity-40 dark:opacity-20 transition-all duration-500"></div>
                        <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-indigo-50 dark:bg-indigo-950 rounded-full blur-[120px] dark:blur-[140px] opacity-50 dark:opacity-20 transition-all duration-500"></div>
                        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-white dark:bg-primary rounded-full blur-[80px] dark:blur-[150px] opacity-80 dark:opacity-10 transition-all duration-500"></div>
                    </div>

                    {/* Main App Container */}
                    <div className="w-full flex flex-col relative">
                        {!isServicesDrawer && <Header />}
                        <div className={isServicesDrawer ? "" : "pb-8 lg:pb-12"}>
                            <Outlet />
                        </div>
                        {!isServicesDrawer && <GlobalFooter />}
                    </div>

                    <Navigation />
                    <AIChatbotModal />
                    <BackToTop />
                    <CookieConsent />

                    {/* Floating WhatsApp Button */}
                    <a
                        href="https://wa.me/+919876543210?text=Hi%2C%20I%20found%20you%20on%20your%20website%20and%20want%20to%20discuss%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                        className="fixed bottom-32 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300"
                    >
                        {/* Pulse ring */}
                        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                        <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.526 5.855L.057 23.4a.5.5 0 0 0 .61.61l5.568-1.456A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.061-1.375l-.361-.214-3.742.98.999-3.652-.235-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                    </a>
                </div>
            </ChatbotProvider>
        </ThemeProvider>
    );
}

