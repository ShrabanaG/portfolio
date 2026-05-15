import useTypewriter from "../hooks/useTypewriter";
import Counter from "../shared/Counter";
import { data } from "../constants";

const HeroSection = () => {
  const role = useTypewriter(data.roles);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'Courier New', monospace",
            color: "#a78bfa",
            fontSize: 13,
            letterSpacing: 3,
            marginBottom: 24,
            opacity: 0.9,
          }}
        >
          // HELLO WORLD
        </p>
        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 800,
            lineHeight: 1.05,
            margin: 0,
            color: "#fff",
            fontFamily: "'Georgia', serif",
            letterSpacing: -2,
          }}
        >
          {data.name}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            margin: "20px 0 32px",
            height: 48,
          }}
        >
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              color: "#a78bfa",
              fontSize: "clamp(18px, 3vw, 28px)",
              fontWeight: 400,
            }}
          >
            {role}
            <span
              style={{
                animation: "blink 1s infinite",
                borderRight: "2px solid #a78bfa",
              }}
            >
              &nbsp;
            </span>
          </span>
        </div>
        <p
          style={{
            maxWidth: 580,
            color: "rgba(255,255,255,0.6)",
            fontSize: 18,
            lineHeight: 1.7,
            margin: "0 0 40px",
            fontFamily: "Georgia, serif",
          }}
        >
          {data.summary}
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "14px 32px",
              background: "#a78bfa",
              color: "#06060a",
              fontWeight: 700,
              fontFamily: "'Courier New', monospace",
              fontSize: 13,
              letterSpacing: 2,
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            HIRE ME →
          </button>
          <a
            href="/SHRABANA_GOSWAMI.pdf"
            download="Shrabana_Goswami_Resume.pdf"
            style={{
              padding: "14px 32px",
              background: "transparent",
              color: "#a78bfa",
              fontFamily: "'Courier New', monospace",
              fontSize: 13,
              letterSpacing: 2,
              border: "1px solid #a78bfa50",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#a78bfa15";
              e.currentTarget.style.borderColor = "#a78bfa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "#a78bfa50";
            }}
          >
            RESUME ↓
          </a>
          <a
            href={`https://${data.github}`}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "14px 32px",
              background: "transparent",
              color: "#fff",
              fontFamily: "'Courier New', monospace",
              fontSize: 13,
              letterSpacing: 2,
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#a78bfa")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
            }
          >
            GITHUB ↗
          </a>
        </div>

        {/* Metrics strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 1,
            marginTop: 80,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 40,
          }}
        >
          {data.metrics.map((m) => (
            <div key={m.label} style={{ padding: "16px 0" }}>
              <div
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "#a78bfa",
                  lineHeight: 1,
                }}
              >
                <Counter target={m.value} />
              </div>
              <div
                style={{
                  color: "#fff",
                  fontSize: 13,
                  marginTop: 6,
                  fontWeight: 600,
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 12,
                  marginTop: 2,
                  fontFamily: "'Courier New', monospace",
                }}
              >
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
