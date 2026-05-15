import { useState } from "react";
import useInView from "../hooks/useInview";
import SectionLabel from "../shared/SectionLabel";

import { data } from "../constants";

const skillColors = {
  Frontend: "#a78bfa",
  Performance: "#34d399",
  Backend: "#f59e0b",
  Cloud: "#60a5fa",
  Visualization: "#f472b6",
};

const Skills = () => {
  const [ref, inView] = useInView();
  const [active, setActive] = useState("Frontend");

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "100px 2rem", background: "rgba(255,255,255,0.02)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="02 / SKILLS" />
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            color: "#fff",
            fontFamily: "Georgia, serif",
            marginBottom: 48,
            letterSpacing: -1,
          }}
        >
          Tech Stack
        </h2>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          {Object.keys(data.skills).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 20px",
                border: `1px solid ${active === cat ? skillColors[cat] : "rgba(255,255,255,0.12)"}`,
                background:
                  active === cat ? `${skillColors[cat]}18` : "transparent",
                color:
                  active === cat ? skillColors[cat] : "rgba(255,255,255,0.5)",
                fontFamily: "'Courier New', monospace",
                fontSize: 12,
                letterSpacing: 1,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {data.skills[active].map((skill, i) => (
            <div
              key={skill}
              style={{
                padding: "10px 20px",
                border: `1px solid ${skillColors[active]}40`,
                background: `${skillColors[active]}10`,
                color: skillColors[active],
                fontFamily: "'Courier New', monospace",
                fontSize: 13,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.4s ease ${i * 0.04}s`,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
