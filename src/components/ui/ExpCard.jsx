import { useState } from "react";
import Reveal from "./Reveal";

const ExpCard = ({ exp, delay }) => {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "flex", gap: 24, padding: "28px 32px",
          background: "rgba(255,255,255,0.03)",
          border: hov ? `0.5px solid rgba(129,140,248,0.28)` : "0.5px solid rgba(255,255,255,0.07)",
          borderRadius: 14,
          transform: hov ? "translateX(5px)" : "translateX(0)",
          transition: "all 0.25s", position: "relative", overflow: "hidden",
          flexWrap: "wrap"
        }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(180deg,${exp.color},transparent)`, borderRadius: "0 2px 2px 0" }} />
        <div style={{
          width: 46, height: 46, borderRadius: 12, flexShrink: 0,
          background: `rgba(129,140,248,0.1)`, border: "0.5px solid rgba(129,140,248,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginTop: 2
        }}>{exp.icon}</div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 12, color: exp.color, fontWeight: 500, marginBottom: 4 }}>{exp.company}</div>
          <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{exp.role}</div>
          <div style={{ fontSize: 12, color: "rgba(226,232,240,0.35)", marginBottom: 12 }}>📅 {exp.period} · {exp.type}</div>
          <p style={{ fontSize: 14, color: "rgba(226,232,240,0.5)", lineHeight: 1.75, margin: 0 }}>{exp.desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default ExpCard;