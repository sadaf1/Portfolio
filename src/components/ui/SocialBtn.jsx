import { useState } from "react";
const SocialBtn = ({ icon, href, title }) => {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
        background: hov ? "rgba(129,140,248,0.1)" : "rgba(255,255,255,0.04)",
        border: hov ? "0.5px solid rgba(129,140,248,0.4)" : "0.5px solid rgba(255,255,255,0.07)",
        color: hov ? "#a5b4fc" : "rgba(226,232,240,0.35)",
        fontSize: 12, fontWeight: 600, textDecoration: "none", transition: "all 0.2s"
      }}>{icon}</a>
  );
}

export default SocialBtn;