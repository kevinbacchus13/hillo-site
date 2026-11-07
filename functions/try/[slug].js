// hillo.co.za/try/<business-slug>
// The short link the Hillo assistant sends after a preview ("Want someone else to try it?").
// WhatsApp reads this page's preview card; tapping opens a WhatsApp chat with Hillo,
// with "Hi, I'd like to try the preview for <Business>." already typed.
//
// Hillo's WhatsApp number (live since 7 Nov 2026).
const NUMBER = "27608869171";

export function onRequestGet({ params }) {
  const slug = String(params.slug || "").toLowerCase();
  const name = /^[a-z0-9]+(-[a-z0-9]+){0,9}$/.test(slug) && slug.length <= 60
    ? slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")
    : "";
  const text = name ? `Hi, I'd like to try the preview for ${name}.` : "Hi, I'd like to try the preview.";
  const wa = `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;
  const title = name ? `Try the ${name} preview` : "Try Hillo Receptionist";
  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  return new Response(`<!doctype html>
<html lang="en-ZA"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · Hillo Receptionist</title>
<meta name="robots" content="noindex">
<meta property="og:title" content="${esc(title)} · Hillo Receptionist">
<meta property="og:description" content="See how a WhatsApp assistant answers and books for a business like yours. Takes two minutes, on WhatsApp.">
<meta property="og:image" content="https://hillo.co.za/receptionist/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta http-equiv="refresh" content="0; url=${esc(wa)}">
<style>
:root{--ink:#14213D;--muted:#3F6F9B;--bg:#F6F8FB;--cta:#FF8A3D}
@media (prefers-color-scheme:dark){:root{--ink:#E9F1F8;--muted:#9DB8D3;--bg:#0E1626}}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:var(--ink);font:16px/1.5 Figtree,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;text-align:center;padding:24px 16px}
h1{font-size:20px;font-weight:600;margin:0 0 8px}
p{margin:0 0 20px;color:var(--muted)}
a.btn{display:inline-flex;align-items:center;min-height:48px;padding:0 22px;border-radius:999px;background:var(--cta);color:#14213D;font-weight:600;text-decoration:none}
</style></head>
<body><main>
<h1>${esc(title)}</h1>
<p>Opening WhatsApp…</p>
<a class="btn" href="${esc(wa)}">Open WhatsApp</a>
</main>
<script>location.replace(${JSON.stringify(wa)});</script>
</body></html>`, {
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" },
  });
}
