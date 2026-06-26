import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forum — Moonlight Network",
  description: "Unisciti alla community di Moonlight Network su Discord.",
};

const channels = [
  { icon: "📢", name: "#annunci", desc: "Aggiornamenti ufficiali, changelog e eventi del server.", color: "#3b82f6" },
  { icon: "💬", name: "#generale", desc: "Discussioni libere, benvenuto ai nuovi giocatori.", color: "#60a5fa" },
  { icon: "⚔", name: "#strategie", desc: "Tattiche di guerra, guide alle civiltà e consigli di gioco.", color: "#a78bfa" },
  { icon: "🛒", name: "#mercato", desc: "Annunci di compravendita tra giocatori.", color: "#d4a843" },
  { icon: "🏛", name: "#diplomazia", desc: "Trattati di pace, alleanze e dichiarazioni di guerra.", color: "#f59e0b" },
  { icon: "🎟", name: "#ticket-supporto", desc: "Apri un ticket per ricevere aiuto dallo staff.", color: "#34d399" },
];

export default function ForumPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0d1a", paddingTop: 70 }}>
      {/* Hero */}
      <div style={{
        padding: "5rem 1.5rem 3rem",
        textAlign: "center",
        background: "linear-gradient(180deg, rgba(88,101,242,0.1) 0%, transparent 100%)",
        borderBottom: "1px solid rgba(88,101,242,0.25)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", bottom: -1, left: "20%", right: "20%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)",
        }} />
        <p style={{ color: "#d4a843", fontFamily: "Georgia, serif", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          ✦ PIAZZA DEL POPOLO ✦
        </p>
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#e2e8f0",
          letterSpacing: "0.05em",
          marginBottom: "1rem",
        }}>
          Il <span style={{ color: "#818cf8" }}>Forum</span> della Gilda
        </h1>
        <p style={{ color: "#64748b", maxWidth: 550, margin: "0 auto 2.5rem", fontFamily: "Georgia, serif", lineHeight: 1.7 }}>
          Il cuore della community di Moonlight Network vive su Discord. Unisciti ai canali dedicati, discuti strategie, forma alleanze e partecipa agli eventi.
        </p>

        {/* Discord big CTA */}
        <div style={{
          display: "inline-block",
          background: "linear-gradient(135deg, rgba(88,101,242,0.2), rgba(88,101,242,0.1))",
          border: "1px solid rgba(88,101,242,0.5)",
          borderRadius: 12,
          padding: "2rem 3rem",
          marginBottom: "1rem",
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🎮</div>
          <p style={{ color: "#a5b4fc", fontFamily: "Georgia, serif", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
            Entra nel server Discord ufficiale di Moonlight Network
          </p>
          <a
            href="https://discord.gg/h4nwsrHQBg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              border: "1px solid #818cf8",
              borderRadius: 8,
              color: "white",
              padding: "0.875rem 2.5rem",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 20px rgba(79,70,229,0.4)",
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>⚔</span>
            Unisciti al Discord
          </a>
        </div>
      </div>

      {/* Channels overview */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <h2 style={{
          fontFamily: "Georgia, serif", fontSize: "1.5rem", color: "#e2e8f0",
          letterSpacing: "0.08em", marginBottom: "0.75rem", textAlign: "center",
        }}>
          Canali della Comunità
        </h2>
        <p style={{ color: "#64748b", textAlign: "center", marginBottom: "2.5rem", fontFamily: "Georgia, serif", fontSize: "0.9rem" }}>
          Ecco i canali principali che troverai nel nostro Discord
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {channels.map((ch) => (
            <div key={ch.name} style={{
              background: "linear-gradient(135deg, rgba(17,24,39,0.95), rgba(13,20,38,0.95))",
              border: "1px solid rgba(30,64,175,0.25)",
              borderRadius: 10,
              padding: "1.5rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              transition: "border-color 0.2s",
            }}>
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{ch.icon}</span>
              <div>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  color: ch.color,
                  fontSize: "0.9rem",
                  marginBottom: "0.35rem",
                }}>
                  {ch.name}
                </div>
                <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: "3rem",
          textAlign: "center",
          padding: "2rem",
          background: "rgba(17,24,39,0.7)",
          border: "1px solid rgba(30,64,175,0.25)",
          borderRadius: 12,
        }}>
          <p style={{ color: "#94a3b8", fontFamily: "Georgia, serif", marginBottom: "1.25rem", lineHeight: 1.7 }}>
            Hai bisogno di aiuto, vuoi segnalare una violazione o aprire un ticket?<br />
            <span style={{ color: "#60a5fa" }}>Il nostro staff è attivo su Discord.</span>
          </p>
          <a
            href="https://discord.gg/h4nwsrHQBg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              border: "1px solid rgba(88,101,242,0.5)",
              borderRadius: 6,
              color: "#a5b4fc",
              padding: "0.75rem 2rem",
              fontFamily: "Georgia, serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            🎟 Apri un Ticket
          </a>
        </div>
      </div>
    </div>
  );
}
