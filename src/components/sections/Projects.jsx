import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/reveal";

const Projects = () => {

  const projects = [
    {
      name: "PVS Pathway Information System",
      client: "WOAH (World Organisation for Animal Health)",
      period: "2022 – Present",
      desc: "Built a scalable frontend using React.js with reusable components for better maintainability and consistency. Developed custom React components used throughout the application and customised UI and themes to match WOAH branding standards.",
      tags: ["React.js", "Redux", "REST API", "MUI"],
      link: "https://pvs.woah.org/",
      icon: "🐾",
      badge: "WOAH",
    },
    {
      name: "Standards Online Navigation Tool (SONT)",
      client: "WOAH (World Organisation for Animal Health)",
      period: "2022 – Present",
      desc: "Built reusable UI components using MUI for a multilingual standards search platform. Integrated CKEditor for rich text content editing and used Redux for managing application state and handling structured data flows across search and filtering functionality.",
      tags: ["React.js", "Redux", "MUI", "CKEditor"],
      link: "https://www.woah.org/en/what-we-do/standards/codes-and-manuals/",
      icon: "🗺️",
      badge: "WOAH",
    },
    {
      name: "e-Services Portal",
      client: "DRAP (Drug Regulatory Authority of Pakistan)",
      period: "2022 – Present",
      desc: "Developed responsive frontend modules using React.js and Redux, integrated RESTful APIs, and implemented automated PDF generation using EJS templates in Node.js to support regulatory workflows.",
      tags: ["React.js", "Redux", "Node.js", "EJS", "REST API"],
      link: "https://edrap.dra.gov.pk/",
      icon: "🏛️",
      badge: "DRAP",
    },
    {
      name: "Commuterslink",
      client: "SysReforms International",
      period: "2022 – Present",
      desc: "Developed a responsive frontend interface for a commute management platform, ensuring cross-device compatibility and smooth user experience across web and mobile views.",
      tags: ["React.js", "Tailwind CSS", "MUI", "REST API", "Redux"],
      link: "https://www.commuterslink.com/",
      icon: "🚌",
      badge: "SysReforms",
    },
  ];


  return (
    <section id="projects" style={{ padding: "90px 60px", background: "#07070f" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#818cf8", marginBottom: 10 }}>Portfolio</div></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, marginBottom: 16, color: "#f1f5f9", letterSpacing: "-0.5px" }}>Projects</h2></Reveal>
        <Reveal delay={0.08}>
          <div style={{ display: "flex", gap: 10, marginBottom: 40, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(129,140,248,0.12)", color: "#818cf8", border: "0.5px solid rgba(129,140,248,0.25)" }}>🌍 WOAH &amp; DRAP Projects</span>
            <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(255,255,255,0.04)", color: "rgba(226,232,240,0.5)", border: "0.5px solid rgba(255,255,255,0.08)" }}>+ Client Work</span>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(310px,1fr))", gap: 16 }}>
          {projects.map((p, i) => <ProjectCard key={i} project={p} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;