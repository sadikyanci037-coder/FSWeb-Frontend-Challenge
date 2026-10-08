import { createContext, useContext, useEffect } from "react";
import { data } from "../data/data";
import { api } from "../services/api";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [language, setLanguage] = useLocalStorage("language", "tr");
    const [theme, setTheme] = useLocalStorage("theme", "light");

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
    };

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const sendData = async () => {
        try {
            const response = await api.post("/posts", {
                language,
                theme,
                name: "Sadık",
            });

            console.log("API response:", response.data);

            return {
                success: true,
                data: response.data,
            };
        } catch (error) {
            console.error("API error:", error);

            return {
                success: false,
                error,
            };
        }
    };

    const content = data[language];

    return (
        <AppContext.Provider
            value={{
                language,
                theme,
                content,
                toggleLanguage,
                toggleTheme,
                sendData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}