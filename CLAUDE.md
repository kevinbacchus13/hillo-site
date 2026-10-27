# hillo-site

Source of truth for hillo.co.za. Cloudflare Pages deploys every push to `main` automatically (check "Cloudflare Pages" on the commit).

## Layout
- `index.html`, `img/` — the Hillo studio site
- `receptionist/index.html`, `receptionist/og.png` — Hillo Receptionist product page (hillo.co.za/receptionist) and its WhatsApp share image

## Workflow
- Edit here, show Kev a preview, and only commit + push to `main` once he approves. Nothing is uploaded by hand.
- Before pushing: `git fetch origin main && git rebase origin/main`.
- Check mobile (390px) and desktop before showing anything.
- The old `~/Developer/front-desk-site` repo on Kev's Mac is archive/reference only. Do not build the receptionist page there.

## Brand (Hillo identity v1)
- Ink Midnight `#14213D`, Signal `#2F7DE1` (the raised dot only), Signal Deep `#1F63C2` (links), Slate `#3F6F9B`, Mist `#E9F1F8`.
- Wordmark: lowercase "hıllo" in Funnel Display 600 with the lifted Signal dot. Funnel is for the wordmark only; Figtree for everything else.
- Receptionist page keeps its product colours: tangerine `#FF8A3D` for the one primary CTA, Aurora wash, WhatsApp green only for customer bubbles.
- Product name: "Hillo Receptionist".

## Public repo
This repo is public. Never commit private notes, client details, API keys or briefs.
