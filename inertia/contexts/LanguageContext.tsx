import React, { createContext, useContext, useState, useCallback } from 'react';
import i18next from 'i18next';

const initialContextValue = {
    currentLanguage: i18next.language || 'en',
    changeLanguage: (value: string) => Promise.resolve(value),
    getCurrentLanguage: () => i18next.language || 'en'
};

const LanguageContext = createContext(initialContextValue);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

    const changeLanguage = useCallback(async (language: string) => {
        try {
            await i18next.changeLanguage(language);
            setCurrentLanguage(language);

            if(typeof window !== 'undefined') {
                window.location.reload();
            }
        } catch (error) {
            console.error('Failed to change language:', error);
        } finally {
            return language;
        }
    }, []);

    const getCurrentLanguage = useCallback(() => {
        return currentLanguage;
    }, [currentLanguage]);

    const value = {
        currentLanguage,
        changeLanguage,
        getCurrentLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};