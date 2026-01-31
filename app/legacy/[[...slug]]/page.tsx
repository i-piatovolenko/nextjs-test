"use client";

import LegacyApp from "@/legacy/LegacyApp";

export default function LegacyCatchAllPage() {
  return (
    <section>
      <h1>Legacy React SPA</h1>
      <p>
        The legacy app is mounted below without rewriting its internal routing.
        React Router still owns navigation under the <code>/legacy</code> path.
      </p>
      <LegacyApp />
    </section>
  );
}
