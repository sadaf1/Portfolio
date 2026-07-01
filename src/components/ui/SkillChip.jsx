import { useState } from "react";

const SkillChip = ({ name, icon, color }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "10px 16px", borderRadius: 10,
        background: hov ? "rgba(129,140,248,0.1)" : "rgba(255,255,255,0.04)",
        border: hov ? "0.5px solid rgba(129,140,248,0.4)" : "0.5px solid rgba(255,255,255,0.07)",
        fontSize: 13, fontWeight: 500, cursor: "default", color: "#e2e8f0",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.22s",
      }}>
      <span style={{ fontSize: 17, color, minWidth: 22, textAlign: "center" }}>{icon}</span>
      {name}
    </div>
  );
}

export default SkillChip;