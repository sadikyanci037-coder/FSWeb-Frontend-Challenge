import { useAppContext } from "../context/AppContext";

function Footer() {
    const { language } = useAppContext();

    return (
        <footer className="footer">
            <h2>
                {language === "tr" ? (
                    <>
                        Bir sonraki ürününüz için <span>birlikte çalışalım.</span>
                    </>
                ) : (
                    <>
                        Let’s <span>work together</span> on
                        <br />
                        your next product.
                    </>
                )}
            </h2>

            <div className="footer-links">
                <a href="https://github.com/sadikyanci037-coder" target="_blank" rel="noreferrer">
                    Github
                </a>

                <a href="#">Personal Blog</a>

                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    Linkedin
                </a>

                <a href="mailto:sadikyanci037@gmail.com">
                    Email
                </a>
            </div>
        </footer>
    );
}

export default Footer;