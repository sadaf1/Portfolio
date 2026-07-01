import Reveal from "../ui/reveal";

const About = () => {
  return (
    <section id="about" style={{ padding: "90px 60px", background: "#0a0a14" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#818cf8", marginBottom: 10 }}>About Me</div></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 700, marginBottom: 50, color: "#f1f5f9", letterSpacing: "-0.5px" }}>Turning ideas into<br />real digital products</h2></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 48, alignItems: "start" }}>
          <Reveal delay={0.1}>
            <p
              style={{
                fontSize: 15,
                color: "rgba(226,232,240,0.55)",
                lineHeight: 1.85,
                marginBottom: 20,
              }}
            >
              I'm <strong style={{ color: "#e2e8f0" }}>Sadaf Khan</strong>, a
              <strong style={{ color: "#e2e8f0" }}>
                {" "}Frontend Developer &amp; UI/UX Engineer
              </strong>{" "}
              based in Islamabad, Pakistan, with
              <strong style={{ color: "#e2e8f0" }}>
                {" "}4+ years of professional experience
              </strong>{" "}
              designing and developing modern, responsive, and scalable web
              applications using React and modern frontend technologies.
            </p>

            <p
              style={{
                fontSize: 15,
                color: "rgba(226,232,240,0.55)",
                lineHeight: 1.85,
                marginBottom: 20,
              }}
            >
              I specialize in
              <strong style={{ color: "#e2e8f0" }}>
                {" "}React.js, Redux Toolkit, JavaScript, TypeScript, Tailwind CSS,
                Material UI, REST APIs, and responsive UI development
              </strong>,
              with a strong focus on reusable component architecture, performance
              optimization, accessibility, and creating intuitive user experiences.
            </p>

            <p
              style={{
                fontSize: 15,
                color: "rgba(226,232,240,0.55)",
                lineHeight: 1.85,
              }}
            >
              Throughout my career, I've contributed to
              <strong style={{ color: "#e2e8f0" }}>
                {" "}international projects for WOAH
              </strong>{" "}
              and
              <strong style={{ color: "#e2e8f0" }}>
                {" "}government digital solutions for DRAP
              </strong>,
              collaborating within Agile teams to deliver scalable, maintainable, and
              user-focused web applications.
            </p>

            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 28,
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://www.linkedin.com/in/sadafkhan4/"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "10px 22px",
                  borderRadius: 8,
                  background: "linear-gradient(135deg,#818cf8,#6366f1)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/sadaf1"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "10px 22px",
                  borderRadius: 8,
                  background: "transparent",
                  color: "#a5b4fc",
                  fontSize: 13,
                  fontWeight: 500,
                  border: "1px solid rgba(129,140,248,0.35)",
                  textDecoration: "none",
                }}
              >
                GitHub
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[["2022", "Started Career", "#818cf8"], ["10+", "Projects Shipped", "#818cf8"], ["4+", "Yrs Experience", "#22d3ee"], ["WOAH", "Int'l Client", "#22d3ee"]].map(([n, l, c]) => (
                <div key={l} style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "22px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 28, fontWeight: 700, color: c }}>{n}</div>
                  <div style={{ fontSize: 12, color: "rgba(226,232,240,0.4)", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
