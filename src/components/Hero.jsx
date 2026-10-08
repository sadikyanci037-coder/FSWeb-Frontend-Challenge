import { useAppContext } from "../context/AppContext";
import profileImage from "../assets/profil.jpeg";

function Hero() {
    const { language } = useAppContext();

    return (
        <section className="hero">
            <div className="hero-text">
                <p className="hello">
                    {language === "tr" ? "Merhaba! 👋" : "Hi! 👋"}
                </p>

                <h1>
                    {language === "tr" ? (
                        <>
                            Ben <span>Sadık</span>. Full-stack
                            <br />
                            geliştiriciyim. Sağlam ve
                            <br />
                            ölçeklenebilir web ürünleri
                            <br />
                            geliştirebilirim.
                            <br />
                            Tanışalım!
                        </>
                    ) : (
                        <>
                            I'm <span>Sadık</span>. I’m a full-stack
                            <br />
                            developer. I can craft solid and
                            <br />
                            scalable frontend products.
                            <br />
                            Let’s meet!
                        </>
                    )}
                </h1>

                <div className="hero-socials">
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        in
                    </a>

                    <a
                        href="https://github.com/sadikyanci037-coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>

                <p className="hero-small-text">
                    {language === "tr"
                        ? "Şu anda Frontend, UI/UX ve Web Design projelerinde çalışabilirim."
                        : "Currently Freelancing for UI, UX & Web Design Project."}
                </p>

                <p className="hero-small-text">
                    {language === "tr"
                        ? "Ekibine davet et → "
                        : "Invite me to join your team → "}

                    <a href="mailto:sadikyanci037@gmail.com">
                        sadikyanci037@gmail.com
                    </a>
                </p>
            </div>

            <div className="hero-image-wrapper">
                <img
                    src={profileImage}
                    alt="Sadık profil fotoğrafı"
                    className="hero-profile-image"
                />

                <div className="hero-pink-shape"></div>
            </div>
        </section>
    );
}

export default Hero;