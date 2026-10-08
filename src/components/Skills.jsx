import { useAppContext } from "../context/AppContext";

function Skills() {
    const { content } = useAppContext();

    const skillIcons = {
        JavaScript: "JS",
        React: "⚛",
        Redux: "◉",
        Node: "node",
        "VS Code": "</>",
        Figma: "F",
    };

    const visibleSkills = [
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "VS Code",
        "Figma",
    ];

    return (
        <section id="skills" className="skills">
            <h2>{content.skills.title}</h2>

            <div className="skills-list">
                {visibleSkills.map((skill) => (
                    <div className="skill-item" key={skill}>
                        <div className={`skill-icon ${skill.toLowerCase().replace(" ", "-")}`}>
                            {skillIcons[skill]}
                        </div>

                        <span>{skill.toUpperCase()}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;