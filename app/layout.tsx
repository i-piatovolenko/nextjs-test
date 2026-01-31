import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Legacy React to Next.js Migration Demo",
  description: "Shows legacy React SPA mounted inside Next.js with partial migration."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "16px", borderBottom: "1px solid #ccc" }}>
          <strong>Next.js Shell</strong>
          <nav style={{ marginTop: "8px", display: "flex", gap: "12px" }}>
            <Link href="/">Home (Next)</Link>
            <Link href="/about">About (Next)</Link>
            <Link href="/legacy/home">Home (Legacy)</Link>
            <Link href="/legacy/contacts">Contacts (Legacy)</Link>
            <Link href="/legacy/mails?folder=inbox&unread=true">
              Mails (Legacy)
            </Link>
          </nav>
        </header>
        <main style={{ padding: "16px" }}>{children}</main>
      </body>
    </html>
  );
}
