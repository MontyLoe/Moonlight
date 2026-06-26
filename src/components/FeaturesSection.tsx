const features = [
  {
    icon: "🏰",
    title: "Civiltà Roleplay",
    desc: "Costruisci la tua civiltà, forgia alleanze e domina il regno medievale. Un mondo vivo e dinamico ti aspetta.",
  },
  {
    icon: "⚔",
    title: "Guerre & Alleanze",
    desc: "Forma eserciti, dichiara guerra ai tuoi nemici o stringi patti diplomatici per espandere il tuo territorio.",
  },
  {
    icon: "🌙",
    title: "Atmosfera Unica",
    desc: "Grafica studiata, build medievali e un'atmosfera notturna che rende ogni sessione di gioco indimenticabile.",
  },
  {
    icon: "👑",
    title: "Ranghi Nobiliari",
    desc: "Scala la gerarchia da Plebeo a Patrizio. Ogni rango sblocca privilegi esclusivi e poteri nel server.",
  },
  {
    icon: "📜",
    title: "Lore Profondo",
    desc: "Un universo narrativo ricco di storia, eventi stagionali e quest collaborative per tutta la comunità.",
  },
  {
    icon: "🛡",
    title: "Staff Attivo",
    desc: "Un team dedicato che garantisce un'esperienza equa, eventi regolari e supporto diretto via Discord.",
  },
];

export default function FeaturesSection() {
  return (
    <section style={{
      padding: "6rem 1.5rem",
      background: "linear-gradient(180deg, #0a0d1a 0%, #0d1426 50%, #0a0d1a 100%)",
      position: "relative",
    }}>
      {/* Decorative top border */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#d4a843", fontFamily: "Georgia, serif", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
            ✦ PERCHÉ UNIRSI ✦
          </p>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "#e2e8f0",
            letterSpacing: "0.05em",
            marginBottom: "1rem",
          }}>
            Il Tuo <span style={{ color: "#60a5fa" }}>Regno</span> Ti Aspetta
          </h2>
          <p style={{ color: "#64748b", maxWidth: 500, margin: "0 auto", fontFamily: "Georgia, serif", lineHeight: 1.7 }}>
            Moonlight Network offre un&apos;esperienza medievale unica con meccaniche di civiltà profonde e una community appassionata.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(17,24,39,0.95), rgba(13,20,38,0.95))",
                border: "1px solid rgba(30,64,175,0.3)",
                borderRadius: 10,
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* Top shimmer line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
              }} />

              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{f.icon}</div>
              <h3 style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#e2e8f0",
                marginBottom: "0.5rem",
                letterSpacing: "0.05em",
              }}>
                {f.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)",
      }} />
    </section>
  );
}
