import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(sections[i]); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = ["home", "about", "skills", "experience", "projects", "contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 60px",
      background: scrolled ? "rgba(6,6,14,0.96)" : "rgba(6,6,14,0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: "0.5px solid rgba(255,255,255,0.07)",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{
        fontFamily: "'Clash Display',sans-serif", fontSize: 20, fontWeight: 700,
        background: "linear-gradient(135deg,#818cf8,#22d3ee)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.5px"
      }}>Sadaf</div>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }} className="d-none d-md-flex">
        {links.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "4px 0",
              fontSize: 13, letterSpacing: "0.3px",
              color: active === l ? "#e2e8f0" : "rgba(226,232,240,0.45)",
              borderBottom: active === l ? "1.5px solid #818cf8" : "1.5px solid transparent",
              transition: "all 0.2s", fontFamily: "'DM Sans',sans-serif"
            }}>{l.charAt(0).toUpperCase() + l.slice(1)}</button>
          </li>
        ))}
      </ul>

      <button onClick={() => scrollTo("contact")} style={{
        padding: "9px 22px", borderRadius: 8, fontSize: 13, fontWeight: 500,
        border: "1px solid #818cf8", color: "#818cf8", background: "transparent",
        cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Sans',sans-serif"
      }}
        onMouseEnter={e => { e.target.style.background = "#818cf8"; e.target.style.color = "#fff"; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#818cf8"; }}
        className="d-none d-md-block"
      >Hire Me</button>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        className="d-md-none"
        style={{ background: "none", border: "none", color: "#e2e8f0", fontSize: 22, cursor: "pointer" }}>
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(6,6,14,0.98)", borderBottom: "0.5px solid rgba(255,255,255,0.08)",
          padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "12px 0",
              fontSize: 15, color: active === l ? "#818cf8" : "rgba(226,232,240,0.7)",
              textAlign: "left", fontFamily: "'DM Sans',sans-serif",
              borderBottom: "0.5px solid rgba(255,255,255,0.06)"
            }}>{l.charAt(0).toUpperCase() + l.slice(1)}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;