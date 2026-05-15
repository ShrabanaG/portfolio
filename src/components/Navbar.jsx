import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Skills", "Experience", "Projects", "Contact"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(6,6,10,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            color: "#a78bfa",
            fontSize: 16,
            letterSpacing: 2,
            fontWeight: 700,
          }}
        >
          &lt;SG /&gt;
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.6)",
                fontSize: 13,
                cursor: "pointer",
                letterSpacing: 1,
                fontFamily: "'Courier New', monospace",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#a78bfa")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.6)")
              }
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
