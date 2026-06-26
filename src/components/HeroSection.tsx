"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText("moonlightnetwork.gamehosting.it");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      paddingTop: 70,
    }}>
      {/* Background layers */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #0a0d1a 0%, #0d1426 40%, #0a0d1a 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 75% 15%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 45% 65%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 25% 85%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(2px 2px at 60% 30%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 5% 50%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 95% 40%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 35% 45%, rgba(255,255,255,0.4) 0%, transparent 100%)
        `,
      }} />
      {/* Blue radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(30,64,175,0.2) 0%, transparent 70%)",
      }} />
      {/* Bottom fog */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
        background: "linear-gradient(to top, #0a0d1a, transparent)",
      }} />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "2rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }} className="animate-fade-in-up">
          <div className="animate-float" style={{
            background: "rgba(30,64,175,0.15)",
            borderRadius: "50%",
            padding: "1rem",
            border: "2px solid rgba(59,130,246,0.4)",
            boxShadow: "0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(59,130,246,0.1)",
          }}>
            <Image src="/logo.png" alt="Moonlight Network Logo" width={160} height={160} priority style={{ borderRadius: "50%" }} />
          </div>
        </div>

        {/* Title */}
        <div style={{ animationDelay: "0.1s" }} className="animate-fade-in-up">
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "0.5rem",
            letterSpacing: "0.08em",
          }}>
            <span style={{
              background: "linear-gradient(135deg, #60a5fa, #93c5fd, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              display: "block",
            }}>
              MOONLIGHT
            </span>
            <span style={{
              color: "#e2e8f0",
              fontSize: "0.55em",
              letterSpacing: "0.3em",
              display: "block",
              marginTop: "0.25rem",
            }}>
              ⚔ NETWORK ⚔
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p style={{
          color: "#94a3b8",
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          marginBottom: "2.5rem",
          lineHeight: 1.6,
          animationDelay: "0.2s",
        }} className="animate-fade-in-up">
          Un regno da costruire. Una storia da scrivere.<br />
          <span style={{ color: "#d4a843" }}>Civiltà Roleplay Medievale</span>
        </p>

        {/* IP Copy box */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          background: "rgba(17,24,39,0.9)",
          border: "1px solid rgba(59,130,246,0.4)",
          borderRadius: 8,
          padding: "0.75rem 1.25rem",
          marginBottom: "2.5rem",
          animationDelay: "0.3s",
          boxShadow: "0 0 20px rgba(59,130,246,0.15)",
        }} className="animate-fade-in-up">
          <span style={{ color: "#64748b", fontSize: "0.8rem", fontFamily: "Georgia, serif" }}>IP:</span>
          <code style={{ color: "#60a5fa", fontFamily: "monospace", fontSize: "1rem", fontWeight: 600 }}>
            moonlightnetwork.gamehosting.it
          </code>
          <button
            onClick={copyIP}
            style={{
              background: copied ? "rgba(34,197,94,0.2)" : "rgba(59,130,246,0.2)",
              border: `1px solid ${copied ? "rgba(34,197,94,0.5)" : "rgba(59,130,246,0.5)"}`,
              borderRadius: 4,
              color: copied ? "#86efac" : "#93c5fd",
              padding: "0.3rem 0.75rem",
              fontSize: "0.75rem",
              fontFamily: "Georgia, serif",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {copied ? "✓ Copiato!" : "Copia"}
          </button>
        </div>

        {/* CTA buttons */}
        <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          animationDelay: "0.4s",
        }} className="animate-fade-in-up">
          <a
            href="https://discord.gg/h4nwsrHQBg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
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
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(30,64,175,0.4)",
            }}
          >
            ⚔ Entra nella Gilda
          </a>
          <Link
            href="/shop"
            style={{
              background: "transparent",
              border: "1px solid #d4a843",
              borderRadius: 6,
              color: "#d4a843",
              padding: "0.875rem 2rem",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "all 0.3s ease",
            }}
          >
            👑 Acquista Rang
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        color: "#475569",
        fontSize: "0.75rem",
        fontFamily: "Georgia, serif",
      }}>
        <span>scorri</span>
        <div style={{
          width: 1,
          height: 40,
          background: "linear-gradient(to bottom, #3b82f6, transparent)",
        }} />
      </div>
    </section>
  );
}
