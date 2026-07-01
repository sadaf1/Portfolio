import Reveal from "../ui/Reveal";
import SkillChip from "../ui/SkillChip";

const Skills = () => {

  const skills = {
  "Languages & Frameworks": [
    { name: "React.js", icon: "⚛", color: "#61dafb" },
    { name: "Redux / RTK", icon: "🔄", color: "#764abc" },
    { name: "TypeScript", icon: "TS", color: "#3178c6" },
    { name: "JavaScript", icon: "JS", color: "#f0db4f" },
    { name: "HTML5", icon: "H", color: "#e34f26" },
    { name: "CSS3", icon: "C", color: "#264de4" },
    { name: "jQuery", icon: "jQ", color: "#0769ad" },
  ],
  "UI & Styling": [
    { name: "Tailwind CSS", icon: "🌊", color: "#38bdf8" },
    { name: "Material UI", icon: "M", color: "#007fff" },
    { name: "Bootstrap", icon: "B", color: "#7952b3" },
  ],
  "Design & UI/UX": [
    { name: "Figma", icon: "🎨", color: "#f24e1e" },
    { name: "Adobe Photoshop", icon: "Ps", color: "#31a8ff" },
    { name: "Adobe Illustrator", icon: "Ai", color: "#ff9a00" },
  ],
  "Tools & Methodologies": [
    { name: "Git & GitHub", icon: "🔧", color: "#f05032" },
    { name: "JIRA", icon: "J", color: "#0052cc" },
    { name: "Postman", icon: "📮", color: "#ef5b25" },
    { name: "VS Code", icon: "💻", color: "#007acc" },
    { name: "Agile / Scrum", icon: "🏃", color: "#818cf8" },
  ],
};

  return (
    <section id="skills" style={{ padding: "90px 60px", background: "#07070f" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#818cf8", marginBottom: 10 }}>Tech Stack</div></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, marginBottom: 50, color: "#f1f5f9", letterSpacing: "-0.5px" }}>Skills &amp; Technologies</h2></Reveal>
        {Object.entries(skills).map(([cat, items], ci) => (
          <Reveal key={cat} delay={ci * 0.08}>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(226,232,240,0.35)", marginBottom: 14, paddingLeft: 4 }}>{cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {items.map((sk, si) => (
                  <SkillChip key={sk.name} {...sk} delay={si * 0.04} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
