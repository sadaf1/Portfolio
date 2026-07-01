import { useState } from "react";

const ContactItems = ({ icon, label, href }) => {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "13px 24px", borderRadius: 10, fontSize: 14,
        textDecoration: "none", color: hov ? "#a5b4fc" : "#e2e8f0",
        background: hov ? "rgba(129,140,248,0.1)" : "rgba(255,255,255,0.04)",
        border: hov ? "0.5px solid rgba(129,140,248,0.4)" : "0.5px solid rgba(255,255,255,0.1)",
        transition: "all 0.2s",
      }}>
      <span>{icon}</span>{label}
    </a>
  );
}

export default ContactItems;