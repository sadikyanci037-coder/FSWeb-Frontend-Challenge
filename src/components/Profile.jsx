import { useAppContext } from "../context/AppContext";

function Profile() {
    const { content, language } = useAppContext();

    return (
        <section id="profile" className="profile">
            <h2>{content.profile.title}</h2>

            <div className="profile-container">
                <div className="profile-info">
                    <h3>
                        {language === "tr" ? "Temel Bilgiler" : "Basic Information"}
                    </h3>

                    <p>
                        <strong>{content.profile.birth}</strong>
                        <span>1998</span>
                    </p>

                    <p>
                        <strong>{content.profile.city}</strong>
                        <span>İstanbul</span>
                    </p>

                    <p>
                        <strong>{content.profile.education}</strong>
                        <span>Workintech Full Stack Program</span>
                    </p>

                    <p>
                        <strong>{content.profile.role}</strong>
                        <span>Full Stack Developer</span>
                    </p>
                </div>

                <div className="about">
                    <h3>{content.profile.aboutTitle}</h3>
                    <p>{content.profile.about}</p>
                </div>
            </div>
        </section>
    );
}

export default Profile;