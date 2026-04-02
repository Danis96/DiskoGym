import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getSiteContent, type Language } from "./content/client";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "bs";
    }

    const storedLanguage = window.localStorage.getItem("site-language");
    return storedLanguage === "en" ? "en" : "bs";
  });

  useEffect(() => {
    window.localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
    document.title = getSiteContent(language).meta.pageTitle;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
