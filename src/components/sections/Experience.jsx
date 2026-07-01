import ExpCard from "../ui/ExpCard";
import Reveal from "../ui/reveal";


const Experience = () => {
  const experience = [
  {
    role: "Frontend Developer & UI/UX Engineer",
    company: "SysReforms International",
    period: "2022 – Present",
    type: "Full-time",
    icon: "💼",
    color: "#818cf8",
    desc: "Developing scalable React.js applications with reusable components and managing complex state using Redux Toolkit (RTK). Integrating RESTful APIs for dynamic, data-driven experiences. Implementing form validations, optimising performance via lazy loading and code refactoring, and ensuring cross-browser, mobile-first responsiveness. Creating UI mockups and wireframes in Figma, translating designs into pixel-perfect interfaces. Collaborating in Agile/Scrum teams and working with DevOps on deployments.",
  },
  {
    role: "Intern – SEO & Graphic Design",
    company: "Quaid Tech",
    period: "Sept 2021 – Nov 2021",
    type: "Internship",
    icon: "🎓",
    color: "#22d3ee",
    desc: "Designed UI elements and marketing graphics following brand guidelines. Made basic SEO-related design updates to improve website usability. Assisted in creating website layouts and visual assets for digital campaigns. Gained foundational knowledge in user-focused design and digital marketing processes.",
  },
];

  return (
    <section id="experience" style={{ padding: "90px 60px", background: "#0a0a14" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#818cf8", marginBottom: 10 }}>Career</div></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, marginBottom: 50, color: "#f1f5f9", letterSpacing: "-0.5px" }}>Experience</h2></Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {experience.map((exp, i) => (
            <ExpCard key={i} exp={exp} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;