import { useSearchParams } from "react-router-dom";

export default function MailsPage() {
  const [searchParams] = useSearchParams();
  const folder = searchParams.get("folder") ?? "inbox";
  const unread = searchParams.get("unread") ?? "false";

  return (
    <section>
      <h2>Mails (Legacy React)</h2>
      <p>This page is protected by a legacy auth guard.</p>
      <div style={{ marginTop: "8px" }}>
        <div>
          <strong>Query params:</strong>
        </div>
        <div>folder: {folder}</div>
        <div>unread: {unread}</div>
      </div>
    </section>
  );
}
