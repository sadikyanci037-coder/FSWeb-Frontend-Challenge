import { useAppContext } from "../context/AppContext";

function Header() {
    const { content, theme, toggleTheme, toggleLanguage } = useAppContext();

    return (
        <header className="header">
            <div className="header-actions">
                <button className="theme-button" onClick={toggleTheme}>
                    <span className="theme-dot"></span>
                    {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
                </button>

                <span className="header-divider">|</span>

                <button className="language-button" onClick={toggleLanguage}>
                    {content.header.language}
                </button>
            </div>
        </header>
    );
}

export default Header;