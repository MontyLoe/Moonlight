"use client";
import { useState } from "react";

export default function ServerInfoSection() {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText("moonlightnetwork.gamehosting.it");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{
      padding: "6rem 1.5rem",
      background: "linear-gradient(180deg, #0a0d1a 0%, #0d1426 100%)",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#d4a843", fontFamily: "Georgia, serif", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
          ✦ ENTRA ORA ✦
        </p>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 700,
          color: "#e2e8f0",
          letterSpacing: "0.05em",
          marginBottom: "1.5rem",
        }}>
          Inizia la tua <span style={{ color: "#60a5fa" }}>Leggenda</span>
        </h2>

        {/* IP Box large */}
        <div style={{
          background: "rgba(17,24,39,0.9)",
          border: "1px solid rgba(59,130,246,0.4)",
          borderRadius: 12,
          padding: "2rem",
          marginBottom: "2rem",
          boxShadow: "0 0 40px rgba(59,130,246,0.1)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent)",
          }} />
          <p style={{ color: "#64748b", fontFamily: "Georgia, serif", fontSize: "0.85rem", marginBottom: "0.75rem", letterSpacing: "0.1em" }}>
            INDIRIZZO SERVER (JAVA EDITION)
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <code style={{
              color: "#60a5fa",
              fontFamily: "monospace",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}>
              moonlightnetwork.gamehosting.it
            </code>
            <button
              onClick={copyIP}
              style={{
                background: copied ? "rgba(34,197,94,0.2)" : "rgba(59,130,246,0.2)",
                border: `1px solid ${copied ? "rgba(34,197,94,0.5)" : "rgba(59,130,246,0.5)"}`,
                borderRadius: 6,
                color: copied ? "#86efac" : "#93c5fd",
                padding: "0.5rem 1.25rem",
                fontSize: "0.85rem",
                fontFamily: "Georgia, serif",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {copied ? "✓ Copiato!" : "📋 Copia IP"}
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          marginBottom: "3rem",
        }}>
          {[
            { label: "Versione", value: "Java Edition" },
            { label: "Stile", value: "Medievale" },
            { label: "Modalità", value: "Civiltà RP" },
            { label: "Lingua", value: "Italiano 🇮🇹" },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: "rgba(17,24,39,0.7)",
              border: "1px solid rgba(30,64,175,0.25)",
              borderRadius: 8,
              padding: "1.25rem 1rem",
            }}>
              <div style={{ color: "#64748b", fontSize: "0.75rem", fontFamily: "Georgia, serif", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>
                {stat.label.toUpperCase()}
              </div>
              <div style={{ color: "#e2e8f0", fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "0.95rem" }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://discord.gg/h4nwsrHQBg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              border: "1px solid #818cf8",
              borderRadius: 6,
              color: "white",
              padding: "0.875rem 2rem",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            🎮 Discord
          </a>
          <a
            href="https://minecraft-italia.net/lista/server/moonlight-network"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              border: "1px solid rgba(212,168,67,0.5)",
              borderRadius: 6,
              color: "#d4a843",
              padding: "0.875rem 2rem",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            📋 Vota il Server
          </a>
        </div>
      </div>
    </section>
  );
}
