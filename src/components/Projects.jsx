import useInView from "../hooks/useInview";
import SectionLabel from "../shared/SectionLabel";
import { data } from "../constants";

const Projects = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "100px 2rem", background: "rgba(255,255,255,0.02)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="04 / PROJECTS" />
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
          Selected Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {data.projects.map((p, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                padding: 32,
                position: "relative",
                overflow: "hidden",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: `all 0.5s ease ${i * 0.1}s`,
                cursor: "default",
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = p.color + "60";
                e.currentTarget.style.background = p.color + "08";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
            >
              {/* accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: p.color,
                }}
              />

              <h3
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: "0 0 12px",
                  fontFamily: "Georgia, serif",
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  margin: "0 0 20px",
                }}
              >
                {p.desc}
              </p>

              {/* Metrics */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    style={{
                      padding: "4px 10px",
                      background: p.color + "20",
                      color: p.color,
                      fontFamily: "'Courier New', monospace",
                      fontSize: 11,
                      border: `1px solid ${p.color}40`,
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Tech */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "3px 8px",
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "'Courier New', monospace",
                      fontSize: 11,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
