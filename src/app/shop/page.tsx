import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Moonlight Network",
  description: "Acquista ranghi e bundle esclusivi per Moonlight Network.",
};

const ranks = [
  {
    name: "Borghese",
    color: "#60a5fa",
    border: "rgba(96,165,250,0.5)",
    glow: "rgba(59,130,246,0.2)",
    icon: "🏠",
    desc: "Scala la gerarchia e ottieni privilegi esclusivi nel regno.",
    perks: [
      "Claim espansi (+50%)",
      "Accesso ai mercati privati",
      "Supporto prioritario Discord",
      "Tag [Borghese] in chat",
    ],
  },
  {
    name: "Nobile",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.5)",
    glow: "rgba(139,92,246,0.25)",
    icon: "⚜",
    desc: "Entra nell'aristocrazia e comanda rispetto.",
    perks: [
      "Tutto di Borghese +",
      "Fly in zona spawn",
      "Kit esclusivo settimanale",
      "Accesso sale VIP Discord",
      "Particelle esclusive",
    ],
    featured: true,
  },
  {
    name: "Patrizio",
    color: "#d4a843",
    border: "rgba(212,168,67,0.6)",
    glow: "rgba(212,168,67,0.25)",
    icon: "👑",
    desc: "Il vertice della nobiltà. Il massimo potere e prestigio.",
    perks: [
      "Tutto di Nobile +",
      "Tag dorato [Patrizio] in chat",
      "Accesso canali staff Discord",
      "Bundle Civiltà incluso",
      "Vantaggi esclusivi futuri",
    ],
  },
];

const bundle = {
  name: "Bundle Civiltà",
  color: "#f59e0b",
  icon: "🏛",
  desc: "Il pacchetto completo per chi vuole dominare il regno. Include risorse, kit e vantaggi speciali per fondare una civiltà potente.",
  perks: [
    "Kit fondazione civiltà",
    "Risorse di partenza (pietra, legno, cibo)",
    "Mappa territoriale esclusiva",
    "Accesso alle missioni speciali",
    "Supporto staff per setup civiltà",
  ],
};

export default function ShopPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0d1a", paddingTop: 70 }}>
      {/* Hero */}
      <div style={{
        padding: "5rem 1.5rem 3rem",
        textAlign: "center",
        background: "linear-gradient(180deg, rgba(30,64,175,0.15) 0%, transparent 100%)",
        borderBottom: "1px solid rgba(30,64,175,0.25)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", bottom: -1, left: "20%", right: "20%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)",
        }} />
        <p style={{ color: "#d4a843", fontFamily: "Georgia, serif", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          ✦ NEGOZIO REALE ✦
        </p>
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#e2e8f0",
          letterSpacing: "0.05em",
          marginBottom: "1rem",
        }}>
          Il <span style={{ color: "#60a5fa" }}>Mercato</span> del Regno
        </h1>
        <p style={{ color: "#64748b", maxWidth: 550, margin: "0 auto 2rem", fontFamily: "Georgia, serif", lineHeight: 1.7 }}>
          Acquista ranghi e bundle esclusivi per potenziare la tua esperienza su Moonlight Network. I tuoi acquisti supportano il server e la community.
        </p>
        <a
          href="https://moonlightnetworkk.tebex.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "linear-gradient(135deg, #1e40af, #2563eb)",
            border: "1px solid #3b82f6",
            borderRadius: 6,
            color: "white",
            padding: "0.875rem 2rem",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            letterSpacing: "0.05em",
            boxShadow: "0 4px 20px rgba(30,64,175,0.4)",
          }}
        >
          🛒 Vai allo Store Ufficiale →
        </a>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem" }}>
        {/* Ranks */}
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "1.5rem",
          color: "#e2e8f0",
          letterSpacing: "0.08em",
          marginBottom: "2rem",
          textAlign: "center",
        }}>
          <span style={{ color: "#d4a843" }}>⚜</span> Ranghi Nobiliari
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginBottom: "4rem",
        }}>
          {ranks.map((rank) => (
            <div key={rank.name} style={{
              background: "linear-gradient(135deg, rgba(17,24,39,0.98), rgba(13,20,38,0.98))",
              border: `1px solid ${rank.border}`,
              borderRadius: 12,
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: `0 0 ${rank.featured ? "40px" : "20px"} ${rank.glow}`,
            }}>
              {rank.featured && (
                <div style={{
                  position: "absolute", top: 12, right: 12,
                  background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                  borderRadius: 99,
                  padding: "0.2rem 0.6rem",
                  fontSize: "0.65rem",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "0.1em",
                }}>
                  PIÙ SCELTO
                </div>
              )}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${rank.color}, transparent)`,
              }} />

              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{rank.icon}</div>
              <h3 style={{
                fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700,
                color: rank.color, letterSpacing: "0.1em", marginBottom: "0.5rem",
              }}>
                {rank.name.toUpperCase()}
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                {rank.desc}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0" }}>
                {rank.perks.map((perk, i) => (
                  <li key={i} style={{
                    color: "#94a3b8", fontSize: "0.85rem", padding: "0.4rem 0",
                    borderBottom: "1px solid rgba(30,64,175,0.1)",
                    display: "flex", alignItems: "center", gap: "0.5rem",
                  }}>
                    <span style={{ color: rank.color }}>✓</span> {perk}
                  </li>
                ))}
              </ul>

              <a
                href="https://moonlightnetworkk.tebex.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "0.75rem",
                  background: `linear-gradient(135deg, ${rank.color}22, ${rank.color}33)`,
                  border: `1px solid ${rank.border}`,
                  borderRadius: 6,
                  color: rank.color,
                  textDecoration: "none",
                  fontFamily: "Georgia, serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textAlign: "center",
                }}
              >
                Acquista →
              </a>
            </div>
          ))}
        </div>

        {/* Bundle */}
        <h2 style={{
          fontFamily: "Georgia, serif", fontSize: "1.5rem", color: "#e2e8f0",
          letterSpacing: "0.08em", marginBottom: "2rem", textAlign: "center",
        }}>
          <span style={{ color: "#f59e0b" }}>🏛</span> Bundle Esclusivi
        </h2>

        <div style={{
          background: "linear-gradient(135deg, rgba(17,24,39,0.98), rgba(13,20,38,0.98))",
          border: `2px solid rgba(245,158,11,0.5)`,
          borderRadius: 12,
          padding: "2.5rem",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 0 50px rgba(245,158,11,0.15)",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(90deg, transparent, #f59e0b, transparent)",
          }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start", flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "2.5rem" }}>{bundle.icon}</span>
                <h3 style={{
                  fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700,
                  color: bundle.color, letterSpacing: "0.08em",
                }}>
                  {bundle.name.toUpperCase()}
                </h3>
              </div>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 600 }}>
                {bundle.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.25rem" }}>
                {bundle.perks.map((perk, i) => (
                  <span key={i} style={{
                    background: "rgba(245,158,11,0.1)",
                    border: "1px solid rgba(245,158,11,0.3)",
                    borderRadius: 4,
                    color: "#fbbf24",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.8rem",
                    fontFamily: "Georgia, serif",
                  }}>
                    ✓ {perk}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="https://moonlightnetworkk.tebex.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #b45309, #d97706)",
                border: "1px solid #f59e0b",
                borderRadius: 6,
                color: "white",
                padding: "0.875rem 1.75rem",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                whiteSpace: "nowrap",
                letterSpacing: "0.05em",
              }}
            >
              Acquista Bundle →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
