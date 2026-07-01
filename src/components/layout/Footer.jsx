import SocialBtn from "../ui/SocialBtn";

const Footer = () => {
  return (
    <footer style={{ padding: "22px 60px", borderTop: "0.5px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, background: "#07070f" }}>
      <div style={{ fontSize: 13, color: "rgba(226,232,240,0.28)" }}>© 2025 Sadaf Khan. All rights reserved.</div>
      <div style={{ display: "flex", gap: 12 }}>
        {[
          { icon: "in", href: "https://www.linkedin.com/in/sadafkhan4/", title: "LinkedIn" },
          { icon: "gh", href: "https://github.com/sadaf1", title: "GitHub" },
          { icon: "@", href: "mailto:khan.sadaf0408@gmail.com", title: "Email" },
        ].map(s => <SocialBtn key={s.icon} {...s} />)}
      </div>
    </footer>
  );
}

export default Footer;