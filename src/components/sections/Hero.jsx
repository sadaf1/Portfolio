import PHOTO from "../../assets/profile.png";
const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "130px 60px 80px", position: "relative", overflow: "hidden", gap: 40, flexWrap: "wrap"
    }}>
      {/* bg glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 700px 600px at 70% 40%,rgba(129,140,248,0.09),transparent 65%), radial-gradient(ellipse 400px 400px at 5% 80%,rgba(34,211,238,0.06),transparent 60%)"
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%,black 20%,transparent 100%)"
      }} />

      {/* Left */}
      <div style={{ maxWidth: 560, position: "relative", zIndex: 1, flex: "1 1 320px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 500,
          padding: "6px 14px", borderRadius: 20, marginBottom: 28,
          background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.28)",
          color: "#a5b4fc",
          animation: "fadeDown 0.6s ease both"
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%", background: "#a5b4fc",
            display: "inline-block", animation: "pulse 2s infinite"
          }} />
          Open to Frontend / Full Stack Opportunities
        </div>

        <h1 style={{
          fontFamily: "'Clash Display',sans-serif",
          fontSize: "clamp(40px,5.5vw,68px)", fontWeight: 700, lineHeight: 1.08,
          marginBottom: 8, color: "#f1f5f9",
          animation: "fadeUp 0.7s ease 0.1s both", letterSpacing: "-1px"
        }}>Sadaf Khan</h1>

        <h2 style={{
          fontFamily: "'Clash Display',sans-serif",
          fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, lineHeight: 1.08,
          background: "linear-gradient(135deg,#818cf8,#a5b4fc,#22d3ee)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginBottom: 24, letterSpacing: "-1px",
          animation: "fadeUp 0.7s ease 0.18s both"
        }}>Frontend Developer &amp; UI/UX Engineer</h2>

        <p style={{
          fontSize: 16, color: "rgba(226,232,240,0.55)", lineHeight: 1.8,
          marginBottom: 36, maxWidth: 440,
          animation: "fadeUp 0.7s ease 0.28s both"
        }}>
          Building modern, responsive, and scalable web applications with React.js, Redux,
          TypeScript, Tailwind CSS, and MUI. 4+ years of experience delivering solutions
          for international organisations and government projects including WOAH and DRAP.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.38s both" }}>
          <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById("projects").scrollIntoView({ behavior: "smooth" }) }}
            style={{
              padding: "13px 28px", borderRadius: 10,
              background: "linear-gradient(135deg,#818cf8,#6366f1)",
              color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none",
              transition: "opacity 0.2s,transform 0.2s", display: "inline-block"
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >View Projects</a>
          <a href="https://drive.google.com/file/d/142WMNGbHcbgDazMRPEWzr-Sy3-qK8k9P/view?usp=drive_link" target="_blank"
            style={{
              padding: "13px 28px", borderRadius: 10,
              background: "transparent", color: "#a5b4fc", fontSize: 14, fontWeight: 500,
              border: "1px solid rgba(129,140,248,0.35)", textDecoration: "none",
              transition: "all 0.2s", display: "inline-block"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(129,140,248,0.1)"; e.currentTarget.style.borderColor = "#818cf8"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(129,140,248,0.35)"; }}
          >Download CV</a>
        </div>

        <div style={{ display: "flex", gap: 40, marginTop: 44, animation: "fadeUp 0.7s ease 0.48s both" }}>
          {[["4+", "Years Exp."], ["10+", "Projects Built"], ["2", "Int'l Orgs"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 28, fontWeight: 700, color: "#a5b4fc" }}>{n}</div>
              <div style={{ fontSize: 12, color: "rgba(226,232,240,0.4)", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Photo */}
      <div style={{ position: "relative", zIndex: 1, flex: "0 0 auto", animation: "fadeLeft 0.8s ease 0.2s both" }}>
        <div style={{ width: 300, height: 360, position: "relative" }}>
          <div style={{
            position: "absolute", inset: -3, borderRadius: 36,
            background: "linear-gradient(135deg,#818cf8,#22d3ee,#a5b4fc)",
            animation: "ringPulse 3s ease-in-out infinite"
          }} />
          <div style={{ position: "absolute", inset: 3, borderRadius: 34, overflow: "hidden", background: "#0f0f1e" }}>
            <img src={PHOTO} alt="Sadaf Khan"
              style={{
                width: "93%",
                height: "92%",
                objectFit: "cover",
                objectPosition: "bottom center",
                transform: "scale(1.19)",
              }} />
          </div>
          {/* Float tags */}
          <div style={{
            position: "absolute", top: 16, right: -70,
            background: "rgba(10,10,20,0.92)", border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: 10, padding: "8px 14px", fontSize: 12, fontWeight: 500,
            backdropFilter: "blur(12px)", whiteSpace: "nowrap",
            animation: "float 4s ease-in-out infinite", color: "#e2e8f0"
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#22c55e",
              display: "inline-block", marginRight: 6, verticalAlign: "middle"
            }} />
            Open to work
          </div>
          <div style={{
            position: "absolute", bottom: 50, left: -70,
            background: "rgba(10,10,20,0.92)", border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: 10, padding: "8px 14px", fontSize: 12, fontWeight: 500,
            backdropFilter: "blur(12px)", whiteSpace: "nowrap",
            animation: "float 4s ease-in-out 1.5s infinite", color: "#e2e8f0"
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#22d3ee",
              display: "inline-block", marginRight: 6, verticalAlign: "middle"
            }} />
            Frontend Dev
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;