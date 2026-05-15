const SectionLabel = ({ label }) => {
  return (
    <p
      style={{
        fontFamily: "'Courier New', monospace",
        color: "#a78bfa",
        fontSize: 11,
        letterSpacing: 4,
        marginBottom: 16,
        opacity: 0.8,
      }}
    >
      {label}
    </p>
  );
};

export default SectionLabel;
