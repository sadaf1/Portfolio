import ContactItems from "../ui/ContactItems";
import Reveal from "../ui/reveal";

const Contact = () => {
  return (
    <section id="contact" style={{ padding: "90px 60px", background: "#0a0a14" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div style={{
            background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(255,255,255,0.07)",
            borderRadius: 20, padding: "60px 40px", textAlign: "center", position: "relative", overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 500px 300px at 50% 50%,rgba(129,140,248,0.07),transparent 70%)"
            }} />
            <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 700, color: "#f1f5f9", marginBottom: 12, position: "relative", letterSpacing: "-0.5px" }}>
              Let's Build Something Together 🚀
            </h2>
            <p style={{ fontSize: 15, color: "rgba(226,232,240,0.45)", marginBottom: 36, position: "relative" }}>
              Open to frontend &amp; full-stack roles, freelance projects, and exciting collaborations.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", position: "relative" }}>
              {[
                { icon: "📞", label: "+92 343 5863474", href: "tel:+923435863474" },
                { icon: "✉️", label: "khan.sadaf0408@gmail.com", href: "mailto:khan.sadaf0408@gmail.com" },
                { icon: "🔗", label: "LinkedIn", href: "https://www.linkedin.com/in/sadafkhan4/" },
                { icon: "🐙", label: "GitHub", href: "https://github.com/sadaf1" },
              ].map(c => (
                <ContactItems key={c.label} {...c} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;