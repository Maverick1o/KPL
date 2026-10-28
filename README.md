# Kirkland Product Lab mini-site

This is a standalone static mini-site, separate from the Ballpark Bucket List app. For a local preview, serve this directory with any static web server:

```sh
python3 -m http.server 4173
```

## Pages

- `index.html` — overview and routing to the three offers
- `app-building.html` — one-on-one AI app-building coaching
- `website-building.html` — AI website-building coaching for business owners
- `student-coaching.html` — a low-pressure technology and AI exploration offer
- `pricing.html` — two-session build-together starter, monthly build partnership, and availability
- `booking.html` — custom preferred-time request form for session one of the two-session starter
- `about.html` — Kevin’s experience and story
- `contact.html` — lead form

## Search and publishing

The page URLs use descriptive, hyphen-separated names. Keep those URLs stable; each page has a canonical URL, unique title and description, social preview metadata, and structured data. `sitemap.xml` lists the public canonical URLs.

Page content is rendered into the HTML files so search crawlers can read it without running JavaScript. After changing page templates in `site-content.mjs`, regenerate the HTML before publishing:

```sh
node build-pages.mjs
```

The live sitemap is `https://maverick1o.github.io/KPL/sitemap.xml`. Submit it in Google Search Console and Bing Webmaster Tools after verifying site ownership; a sitemap helps discovery but does not guarantee indexing.

## Forms and current offer

The session request form collects a preferred first-session date/time, name, email, and phone. Kevin confirms the time or suggests an alternative, then sends preparation details and a payment link; session two is scheduled together. No payment is taken at request time. Both the session request and contact forms send directly to Kevin’s public inbox using FormSubmit’s AJAX endpoint. FormSubmit is a free third-party form delivery service; the recipient address is public in the client-side code. The first real submission triggers a one-time inbox confirmation from FormSubmit, which Kevin must approve before submissions are delivered. Review FormSubmit’s current privacy terms. The pricing page lists the current founding-client starter rate and monthly build partnership; confirm these terms before quoting clients.

## Visual direction

The site uses a warm paper canvas, deep navy type, rust and orange accents, and a restrained golden yellow for primary actions. Editorial typography, fine rules, layered paper shapes, and soft shadows connect the pages without making every section feel like a separate card. Existing illustrations remain in place and sit within the same warm visual system.

The site uses the supplied KPL icon. Fonts load from Google Fonts when network access is available and fall back to system sans-serif fonts otherwise.
