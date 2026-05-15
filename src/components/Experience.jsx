import { useState } from "react";
import useInView from "../hooks/useInview";
import SectionLabel from "../shared/SectionLabel";

import { data } from "../constants";

const Experience = () => {
  const [open, setOpen] = useState(0);
  const [ref, inView] = useInView();

  return (
    <section id="experience" ref={ref} style={{ padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="03 / EXPERIENCE" />
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            color: "#fff",
            fontFamily: "Georgia, serif",
            marginBottom: 56,
            letterSpacing: -1,
          }}
        >
          Work History
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
          {data.experience.map((exp, i) => (
            <div
              key={i}
              style={{
                borderLeft: `2px solid ${open === i ? exp.color : "rgba(255,255,255,0.08)"}`,
                paddingLeft: 32,
                paddingBottom: 48,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.5s ease ${i * 0.1}s`,
                position: "relative",
              }}
            >
              {/* dot */}
              <div
                style={{
                  position: "absolute",
                  left: -7,
                  top: 4,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: open === i ? exp.color : "rgba(255,255,255,0.2)",
                  border: `2px solid ${open === i ? exp.color : "rgba(255,255,255,0.1)"}`,
                  transition: "all 0.3s",
                }}
              />

              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  padding: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        fontWeight: 700,
                        margin: "0 0 4px",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      style={{
                        color: exp.color,
                        fontFamily: "'Courier New', monospace",
                        fontSize: 13,
                        margin: "0 0 4px",
                        letterSpacing: 1,
                      }}
                    >
                      {exp.company}
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontSize: 12,
                        margin: 0,
                        fontFamily: "'Courier New', monospace",
                      }}
                    >
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                  <span
                    style={{
                      color: exp.color,
                      fontSize: 20,
                      transition: "transform 0.3s",
                      transform: open === i ? "rotate(45deg)" : "rotate(0)",
                      flexShrink: 0,
                      marginTop: 4,
                    }}
                  >
                    +
                  </span>
                </div>
              </button>

              {open === i && (
                <ul
                  style={{ marginTop: 20, paddingLeft: 0, listStyle: "none" }}
                >
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 12,
                        color: "rgba(255,255,255,0.65)",
                        fontSize: 15,
                        lineHeight: 1.65,
                        marginBottom: 10,
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      <span
                        style={{
                          color: exp.color,
                          fontFamily: "'Courier New', monospace",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        ▸
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
