import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(10,13,26,0.95))",
      borderTop: "1px solid rgba(30,64,175,0.4)",
      padding: "3rem 1.5rem 2rem",
      marginTop: "auto",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#60a5fa", marginBottom: "0.75rem", letterSpacing: "0.1em" }}>
              ⚔ MOONLIGHT NETWORK
            </h3>
            <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Il server Minecraft di civiltà roleplay medievale. Costruisci il tuo impero, forgia alleanze, scrivi la storia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: "Georgia, serif", color: "#d4a843", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem", letterSpacing: "0.08em" }}>
              NAVIGAZIONE
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/forum", label: "Forum" },
                { href: "/rules", label: "Regolamento" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Server info */}
          <div>
            <h4 style={{ fontFamily: "Georgia, serif", color: "#d4a843", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem", letterSpacing: "0.08em" }}>
              IL SERVER
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.85rem", color: "#64748b" }}>
              <span>🎮 Java Edition</span>
              <span>⚔ Civiltà Roleplay</span>
              <span>🏰 Stile Medievale</span>
              <a
                href="https://minecraft-italia.net/lista/server/moonlight-network"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#60a5fa", textDecoration: "none" }}
              >
                📋 Vota il Server
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 style={{ fontFamily: "Georgia, serif", color: "#d4a843", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem", letterSpacing: "0.08em" }}>
              COMUNITÀ
            </h4>
            <a
              href="https://discord.gg/h4nwsrHQBg"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.25rem",
                background: "rgba(88,101,242,0.2)",
                border: "1px solid rgba(88,101,242,0.5)",
                borderRadius: 4,
                color: "#a5b4fc",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "Georgia, serif",
                fontWeight: 600,
              }}
            >
              🎮 Entra su Discord
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(30,64,175,0.2)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}>
          <p style={{ color: "#475569", fontSize: "0.8rem" }}>
            © 2025 Moonlight Network. Tutti i diritti riservati.
          </p>
          <p style={{ color: "#475569", fontSize: "0.8rem" }}>
            Non affiliato con Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
}
