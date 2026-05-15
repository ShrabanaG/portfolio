import useInView from "../hooks/useInview";
import SectionLabel from "../shared/SectionLabel";
import { data } from "../constants";

const Contact = () => {
  const [ref, inView] = useInView();
  const contacts = [
    { label: "Email", value: data.email, href: `mailto:${data.email}` },
    { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
    {
      label: "LinkedIn",
      value: data.linkedin,
      href: `https://${data.linkedin}`,
    },
    { label: "GitHub", value: data.github, href: `https://${data.github}` },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "100px 2rem 60px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel label="05 / CONTACT" />
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            color: "#fff",
            fontFamily: "Georgia, serif",
            marginBottom: 16,
            letterSpacing: -1,
          }}
        >
          Let's Build Something
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 18,
            marginBottom: 56,
            fontFamily: "Georgia, serif",
          }}
        >
          Open to onsite Frontend roles in Bengaluru.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                padding: "24px 28px",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.4s ease ${i * 0.08}s`,
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#a78bfa60";
                e.currentTarget.style.background = "#a78bfa08";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "'Courier New', monospace",
                  fontSize: 11,
                  letterSpacing: 2,
                  margin: "0 0 8px",
                }}
              >
                {c.label}
              </p>
              <p
                style={{
                  color: "#a78bfa",
                  fontSize: 14,
                  margin: 0,
                  wordBreak: "break-all",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                {c.value}
              </p>
            </a>
          ))}
        </div>

        {/* Education & Certs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginTop: 80,
            paddingTop: 60,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'Courier New', monospace",
                fontSize: 11,
                letterSpacing: 2,
                marginBottom: 20,
              }}
            >
              EDUCATION
            </p>
            {data.education.map((e) => (
              <div key={e.degree} style={{ marginBottom: 20 }}>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    margin: "0 0 4px",
                    fontSize: 14,
                  }}
                >
                  {e.degree}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'Courier New', monospace",
                    fontSize: 12,
                    margin: 0,
                  }}
                >
                  {e.school} · {e.year} · {e.cgpa}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'Courier New', monospace",
                fontSize: 11,
                letterSpacing: 2,
                marginBottom: 20,
              }}
            >
              CERTIFICATIONS
            </p>
            {data.certifications.map((c) => (
              <p
                key={c}
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 13,
                  marginBottom: 10,
                  fontFamily: "Georgia, serif",
                  borderLeft: "2px solid #a78bfa40",
                  paddingLeft: 12,
                }}
              >
                {c}
              </p>
            ))}
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.15)",
            fontFamily: "'Courier New', monospace",
            fontSize: 12,
            marginTop: 60,
            letterSpacing: 1,
          }}
        >
          © {new Date().getFullYear()} Shrabana Goswami · Built with React
        </p>
      </div>
    </section>
  );
};

export default Contact;
