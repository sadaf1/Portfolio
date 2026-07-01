import { useState } from "react";
import Reveal from "./reveal";

const ProjectCard = ({ project: p, delay }) => {
  const [hov, setHov] = useState(false);
  const beeTags = ["Node.js", "EJS", "REST API"];
  const isBe = t => beeTags.includes(t);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background:
            p.badge === "WOAH"
              ? "rgba(129,140,248,0.15)"
              : p.badge === "DRAP"
                ? "rgba(87,183, 226 ,0.15)"
                : "rgba(255,255,255,0.06)",

          border: `0.5px solid ${p.badge === "WOAH"
            ? "rgba(129,140,248,0.25)"
            : p.badge === "DRAP"
              ? "rgba(87,183, 226 ,0.25)"
              : "rgba(255,255,255,0.1)"
            }`,
          borderRadius: 14, padding: 24,
          transform: hov ? "translateY(-5px)" : "translateY(0)",
          transition: "all 0.25s", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column"
        }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 10,
              background: p.isWoah ? "rgba(129,140,248,0.15)" : "rgba(255,255,255,0.06)",
              border: `0.5px solid ${p.isWoah ? "rgba(129,140,248,0.25)" : "rgba(255,255,255,0.1)"}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18
            }}>{p.icon}</div>
            {p.badge && (
              <span
                style={{
                  fontSize: 10,
                  padding: "2px 8px",
                  borderRadius: 8,
                  background:
                    p.badge === "WOAH"
                      ? "rgba(129,140,248,0.15)"
                      : p.badge === "DRAP"
                        ? "rgb(34 ,125, 197,0.15)"
                        : p.badge === "SYS"
                          ? "rgba(34,211,238,0.15)"
                          : "rgba(255,255,255,0.06)",

                  border: `0.5px solid ${p.badge === "WOAH"
                    ? "rgba(129,140,248,0.25)"
                    : p.badge === "DRAP"
                      ? "rgb(34 ,125, 197,0.25)"
                      : p.badge === "SYS"
                        ? "rgba(34,211,238,0.25)"
                        : "rgba(255,255,255,0.1)"
                    }`,
                  color:
                    p.badge === "WOAH"
                      ? "#a5b4fc"
                      : p.badge === "DRAP"
                        ? "#4addde"
                        : p.badge === "SYS"
                          ? "#22d3ee"
                          : "#e2e8f0",
                  border:
                    p.badge === "WOAH"
                      ? "0.5px solid rgba(129,140,248,0.2)"
                      : "0.5px solid rgba(34,125,197,0.2)",
                  fontWeight: 600,
                }}
              >
                {p.badge}
              </span>
            )}
          </div>
          {p.link && <a href={p.link} target="_blank" rel="noreferrer"
            style={{ fontSize: 12, color: "rgba(226,232,240,0.4)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#a5b4fc"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(226,232,240,0.4)"}
          >View ↗</a>}
        </div>
        <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{p.name}</div>
        <div style={{ fontSize: 11, color: "rgba(226,232,240,0.35)", marginBottom: 4 }}>{p.client}</div>
        <div style={{ fontSize: 11, color: "rgba(226,232,240,0.28)", marginBottom: 12 }}>📅 {p.period}</div>
        <p style={{ fontSize: 13, color: "rgba(226,232,240,0.5)", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{p.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: 11, padding: "3px 9px", borderRadius: 6,
              background: isBe(t) ? "rgba(34,211,238,0.08)" : "rgba(129,140,248,0.08)",
              color: isBe(t) ? "#22d3ee" : "#a5b4fc",
              border: `0.5px solid ${isBe(t) ? "rgba(34,211,238,0.2)" : "rgba(129,140,248,0.2)"}`
            }}>{t}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default ProjectCard;