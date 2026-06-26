import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regolamento — Moonlight Network",
  description: "Leggi le regole ufficiali di Moonlight Network.",
};

const ruleCategories = [
  {
    icon: "🎙",
    title: "Comportamento dei Giocatori",
    color: "#60a5fa",
    rules: [
      { num: 1, text: "Rispetta gli altri – Nessun insulto o ritorsione. Segnala ai moderatori." },
      { num: 2, text: "Mantieni pulito – Vietati insulti, contenuti sessuali, razzismo, temi sensibili (politica, religione, droga, autolesionismo)." },
      { num: 3, text: "No spam, pubblicità o mendicità – Pubblicità limitata e solo link ufficiali. Vietati messaggi ripetitivi, incomprensibili o in maiuscolo." },
      { num: 4, text: "Chat solo in italiano – Obbligatorio per moderazione. Altre lingue solo in messaggi privati." },
    ],
  },
  {
    icon: "❌",
    title: "Cheating & Exploit",
    color: "#f87171",
    rules: [
      { num: 5, text: "Vietati hack ed exploit – Niente x-ray, autoclicker, fly, duplicazioni. Solo mod consentite (Optifine, Lunar, ecc.)." },
      { num: 6, text: "No automazioni del giocatore – Vietati bot, keyweight e farm automatiche per lavori. Consentite farm automatiche solo per risorse vanilla." },
    ],
  },
  {
    icon: "🔒",
    title: "Claim & Protezione",
    color: "#34d399",
    rules: [
      { num: 7, text: "No griefing – Né in aree claiimate né libere. Vietato distruggere mappe o riempire inventari altrui con spazzatura." },
      { num: 8, text: "Regole sui claim – Non costruire entro 100 blocchi senza permesso. I claim inattivi da oltre 3 settimane possono essere rimossi." },
      { num: 9, text: "No PvP casuale – Il PvP deve essere consensuale o nelle zone apposite (PvP per il momento disattivato perché zone ancora in costruzione)." },
    ],
  },
  {
    icon: "💶",
    title: "Economia & Commercio",
    color: "#fbbf24",
    rules: [
      { num: 10, text: "No truffe o impersonificazioni – Consentito mercanteggiare, ma vietato ingannare o impersonare altri. Vietato commercio con soldi reali." },
    ],
  },
  {
    icon: "✍️",
    title: "Varie",
    color: "#a78bfa",
    rules: [
      { num: 11, text: "No mini-modding – Solo lo staff modera. I giocatori possono segnalare, non imporre regole." },
      { num: 12, text: "No aggiramento punizioni – Vietato usare altri account dopo ban o scrivere tramite cartelli/librerie se mutati." },
      { num: 13, text: "VPN – Consentite ma a proprio rischio (associazione con IP bannati)." },
    ],
  },
];

export default function RulesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0d1a", paddingTop: 70 }}>
      {/* Hero */}
      <div style={{
        padding: "5rem 1.5rem 3rem",
        textAlign: "center",
        background: "linear-gradient(180deg, rgba(30,64,175,0.12) 0%, transparent 100%)",
        borderBottom: "1px solid rgba(30,64,175,0.25)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", bottom: -1, left: "20%", right: "20%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)",
        }} />
        <p style={{ color: "#d4a843", fontFamily: "Georgia, serif", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          ✦ CODICE REALE ✦
        </p>
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#e2e8f0",
          letterSpacing: "0.05em",
          marginBottom: "1rem",
        }}>
          👑 Regolamento <span style={{ color: "#60a5fa" }}>Moonlight Network</span>
        </h1>
        <p style={{ color: "#64748b", maxWidth: 600, margin: "0 auto", fontFamily: "Georgia, serif", lineHeight: 1.7 }}>
          Per dubbi o segnalazioni di violazioni, apri un ticket o contatta lo staff su Discord. L&apos;ignoranza delle regole non è una scusa valida.
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 1.5rem" }}>
        {/* Alert box */}
        <div style={{
          background: "rgba(212,168,67,0.08)",
          border: "1px solid rgba(212,168,67,0.35)",
          borderRadius: 10,
          padding: "1.25rem 1.5rem",
          marginBottom: "3rem",
          display: "flex",
          gap: "1rem",
          alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>⚠️</span>
          <div>
            <p style={{ color: "#d4a843", fontFamily: "Georgia, serif", fontWeight: 700, marginBottom: "0.4rem" }}>
              Rispetta il Codice del Regno
            </p>
            <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
              Il mancato rispetto delle regole comporta sanzioni che vanno dall&apos;avvertimento al ban permanente, a discrezione dello staff. Per segnalazioni utilizza il Discord ufficiale.
            </p>
          </div>
        </div>

        {/* Rule categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {ruleCategories.map((cat) => (
            <div key={cat.title} style={{
              background: "linear-gradient(135deg, rgba(17,24,39,0.98), rgba(13,20,38,0.98))",
              border: "1px solid rgba(30,64,175,0.25)",
              borderRadius: 12,
              overflow: "hidden",
            }}>
              {/* Category header */}
              <div style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid rgba(30,64,175,0.2)",
                background: "rgba(30,64,175,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}>
                <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                <h2 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: cat.color,
                  letterSpacing: "0.05em",
                  margin: 0,
                }}>
                  {cat.title}
                </h2>
              </div>

              {/* Rules */}
              <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {cat.rules.map((rule) => (
                  <div key={rule.num} style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    padding: "0.75rem",
                    background: "rgba(10,13,26,0.4)",
                    borderRadius: 6,
                    border: "1px solid rgba(30,64,175,0.1)",
                  }}>
                    <span style={{
                      background: `${cat.color}22`,
                      border: `1px solid ${cat.color}44`,
                      borderRadius: 4,
                      color: cat.color,
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      padding: "0.2rem 0.5rem",
                      flexShrink: 0,
                      minWidth: 28,
                      textAlign: "center",
                    }}>
                      {rule.num}
                    </span>
                    <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                      {rule.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: "3rem",
          textAlign: "center",
          padding: "2rem",
          background: "rgba(17,24,39,0.7)",
          border: "1px solid rgba(30,64,175,0.2)",
          borderRadius: 12,
        }}>
          <p style={{ color: "#64748b", fontFamily: "Georgia, serif", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Hai domande sul regolamento o vuoi segnalare una violazione?<br />
            <span style={{ color: "#60a5fa" }}>Contatta lo staff direttamente su Discord.</span>
          </p>
          <a
            href="https://discord.gg/h4nwsrHQBg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              border: "1px solid #818cf8",
              borderRadius: 6,
              color: "white",
              padding: "0.75rem 2rem",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            🎟 Apri un Ticket su Discord
          </a>
        </div>
      </div>
    </div>
  );
}
