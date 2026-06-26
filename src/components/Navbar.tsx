"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/forum", label: "Forum" },
  { href: "/rules", label: "Regolamento" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10, 13, 26, 0.97)"
          : "rgba(10, 13, 26, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(30,64,175,0.5)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <Image src="/logo.png" alt="Moonlight Network" width={48} height={48} style={{ borderRadius: "50%", border: "2px solid rgba(59,130,246,0.5)" }} />
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.2rem", color: "#e2e8f0", letterSpacing: "0.05em" }}>
            <span style={{ color: "#60a5fa" }}>MOONLIGHT</span>{" "}
            <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>NETWORK</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 4,
                textDecoration: "none",
                fontFamily: "Georgia, serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: pathname === l.href ? "#60a5fa" : "#94a3b8",
                background: pathname === l.href ? "rgba(59,130,246,0.1)" : "transparent",
                borderBottom: pathname === l.href ? "2px solid #3b82f6" : "2px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              {l.label}
            </Link>
          ))}

          <a
            href="https://discord.gg/h4nwsrHQBg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "1rem",
              padding: "0.5rem 1.25rem",
              background: "linear-gradient(135deg, #1e40af, #2563eb)",
              border: "1px solid #3b82f6",
              borderRadius: 4,
              color: "white",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              fontFamily: "Georgia, serif",
              letterSpacing: "0.05em",
              transition: "all 0.2s ease",
            }}
          >
            ⚔ Discord
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#e2e8f0", cursor: "pointer", fontSize: "1.5rem" }}
          className="show-mobile"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(10,13,26,0.98)",
          borderTop: "1px solid rgba(30,64,175,0.4)",
          padding: "1rem 1.5rem",
        }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                color: pathname === l.href ? "#60a5fa" : "#94a3b8",
                textDecoration: "none",
                fontFamily: "Georgia, serif",
                fontWeight: 600,
                borderBottom: "1px solid rgba(30,64,175,0.2)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/h4nwsrHQBg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: "1rem",
              padding: "0.75rem",
              background: "linear-gradient(135deg, #1e40af, #2563eb)",
              borderRadius: 4,
              color: "white",
              textDecoration: "none",
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
            }}
          >
            ⚔ Entra nel Discord
          </a>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
