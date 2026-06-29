import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forum — Moonlight Network",
  description: "Il forum ufficiale di Moonlight Network.",
};

export default function ForumPage() {
  return (
    <div style={{ paddingTop: 70, height: "100vh", display: "flex", flexDirection: "column" }}>
      <iframe
        src="https://moonlightnetworkk.freeflarum.com"
        style={{
          flex: 1,
          width: "100%",
          border: "none",
          display: "block",
        }}
        title="Moonlight Network Forum"
        allowFullScreen
      />
    </div>
  );
}
