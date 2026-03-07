import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
type ChatbotContextType = {
    isOpen: boolean;
    toggleChatbot: () => void;
    closeChatbot: () => void;
    openChatbot: () => void;
};

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => setIsOpen((prev) => !prev);
    const closeChatbot = () => setIsOpen(false);
    const openChatbot = () => setIsOpen(true);

    return (
        <ChatbotContext.Provider value={{ isOpen, toggleChatbot, closeChatbot, openChatbot }}>
            {children}
        </ChatbotContext.Provider>
    );
}

export function useBotContext() {
    const context = useContext(ChatbotContext);
    if (context === undefined) {
        throw new Error('useBotContext must be used within a ChatbotProvider');
    }
    return context;
}
