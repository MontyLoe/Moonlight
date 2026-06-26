import Link from "next/link";

const ranks = [
  {
    name: "Plebeo",
    color: "#94a3b8",
    border: "rgba(148,163,184,0.4)",
    glow: "rgba(148,163,184,0.15)",
    icon: "🧑‍🌾",
    desc: "Il punto di partenza. Ogni grande storia inizia da qui.",
    perks: ["Accesso base al server", "Chat generale", "Costruzione nelle zone libere"],
    price: "Gratuito",
  },
  {
    name: "Borghese",
    color: "#60a5fa",
    border: "rgba(96,165,250,0.5)",
    glow: "rgba(59,130,246,0.2)",
    icon: "🏠",
    desc: "Un cittadino rispettato con privilegi aggiuntivi.",
    perks: ["Claim espansi", "Accesso ai mercati", "Supporto prioritario Discord"],
    price: "Shop",
  },
  {
    name: "Nobile",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.5)",
    glow: "rgba(139,92,246,0.2)",
    icon: "⚜",
    desc: "La classe nobile con accesso ai segreti del regno.",
    perks: ["Rank visibile in chat", "Fly in spawn", "Kit esclusivo settimanale", "Accesso sale VIP Discord"],
    price: "Shop",
    featured: true,
  },
  {
    name: "Patrizio",
    color: "#d4a843",
    border: "rgba(212,168,67,0.6)",
    glow: "rgba(212,168,67,0.25)",
    icon: "👑",
    desc: "Il vertice della gerarchia. Potere e prestigio assoluti.",
    perks: ["Tutti i benefici Nobile", "Particelle esclusive", "Accesso canali staff Discord", "Tag dorato in chat", "Bundle Civiltà incluso"],
    price: "Shop",
  },
];

export default function RanksSection() {
  return (
    <section style={{
      padding: "6rem 1.5rem",
      background: "#0a0d1a",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#d4a843", fontFamily: "Georgia, serif", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
            ✦ GERARCHIA NOBILIARE ✦
          </p>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "#e2e8f0",
            letterSpacing: "0.05em",
            marginBottom: "1rem",
          }}>
            Scala la <span style={{ color: "#d4a843" }}>Gerarchia</span>
          </h2>
          <p style={{ color: "#64748b", maxWidth: 500, margin: "0 auto", fontFamily: "Georgia, serif", lineHeight: 1.7 }}>
            Dal semplice Plebeo al nobile Patrizio — ogni rango porta con sé potere e privilegi esclusivi.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          alignItems: "start",
        }}>
          {ranks.map((rank) => (
            <div
              key={rank.name}
              style={{
                background: `linear-gradient(135deg, rgba(17,24,39,0.98), rgba(13,20,38,0.98))`,
                border: `1px solid ${rank.border}`,
                borderRadius: 12,
                padding: "2rem 1.5rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: rank.featured ? `0 0 30px ${rank.glow}, 0 0 60px ${rank.glow}` : `0 0 15px ${rank.glow}`,
              }}
            >
              {rank.featured && (
                <div style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                  borderRadius: 99,
                  padding: "0.2rem 0.6rem",
                  fontSize: "0.65rem",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "0.1em",
                }}>
                  POPOLARE
                </div>
              )}

              {/* Top border glow */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${rank.color}, transparent)`,
              }} />

              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{rank.icon}</div>
              <h3 style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: rank.color,
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}>
                {rank.name.toUpperCase()}
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                {rank.desc}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", textAlign: "left" }}>
                {rank.perks.map((perk, i) => (
                  <li key={i} style={{
                    color: "#94a3b8",
                    fontSize: "0.82rem",
                    padding: "0.35rem 0",
                    borderBottom: "1px solid rgba(30,64,175,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}>
                    <span style={{ color: rank.color }}>✓</span> {perk}
                  </li>
                ))}
              </ul>

              {rank.price === "Gratuito" ? (
                <span style={{
                  display: "block",
                  padding: "0.6rem",
                  border: `1px solid ${rank.border}`,
                  borderRadius: 6,
                  color: rank.color,
                  fontFamily: "Georgia, serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}>
                  Gratuito
                </span>
              ) : (
                <Link
                  href="/shop"
                  style={{
                    display: "block",
                    padding: "0.6rem",
                    background: `linear-gradient(135deg, ${rank.color}22, ${rank.color}33)`,
                    border: `1px solid ${rank.border}`,
                    borderRadius: 6,
                    color: rank.color,
                    textDecoration: "none",
                    fontFamily: "Georgia, serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    transition: "all 0.2s",
                  }}
                >
                  Acquista →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
