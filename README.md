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
- `pricing.html` — AI Build Kickstart (two private 90-minute sessions), monthly build partnership, and availability
- `booking.html` — custom preferred-time request form for session one of the AI Build Kickstart
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

The AI Build Kickstart request form collects a preferred first-session date/time, name, email, and phone, plus an optional note about what the person is curious to explore. Kevin confirms the time or suggests an alternative, then sends preparation details and a payment link; session two is scheduled together. No payment is taken at request time. Both the session request and contact forms send directly to Kevin’s public inbox using FormSubmit’s AJAX endpoint. FormSubmit is a free third-party form delivery service; the recipient address is public in the client-side code. The first real submission triggers a one-time inbox confirmation from FormSubmit, which Kevin must approve before submissions are delivered. Review FormSubmit’s current privacy terms. The pricing page lists the AI Build Kickstart rate and monthly build partnership; confirm these terms before quoting clients.

## Analytics

The site is connected to the GA4 property Kirkland Product Lab Website using Measurement ID `G-Y8Q414E2YG`. Analytics loads only after a visitor chooses “Allow analytics” in the consent banner; visitors who decline are not tracked. Events include `cta_click`, `booking_request_start`, `booking_request_submit`, `booking_request_error`, `contact_form_start`, `generate_lead`, `contact_form_error`, `instagram_click`, and `share`. Events report page type, CTA placement/destination, share method, offer, or inquiry type. Form names, email addresses, phone numbers, messages, and requested times are never sent to Analytics. Custom event-scoped dimensions are registered for `page_type`, `cta_text`, `cta_placement`, `destination`, and `lead_type`. After the first successful submission is received, mark `booking_request_submit` and `generate_lead` as key events in GA4. A booking request is not a sale: because payment is collected later through a separate link, record paid sales separately if sales attribution is needed.

Suggested KPIs: landing-page visitors, CTA clicks by page and placement, booking-request starts and successful submissions, contact leads, Instagram clicks, and share actions by platform. Build a funnel from `page_view` → `cta_click` → `booking_request_start` → `booking_request_submit`; mark `booking_request_submit` and `generate_lead` as key events in GA4. Google's current setup guide explains how to create a property and web stream, and where to copy the Measurement ID: <https://support.google.com/analytics/answer/9304153> and <https://support.google.com/analytics/answer/9539598>.

## Visual direction

The site uses colors sampled from the supplied illustration: warm cream, black, olive, ochre, red-orange, and slate blue. The homepage introduces Kevin and his experience in a separate black coach bar before presenting the one-on-one AI-build offer. Manrope is used for regular text, Space Grotesk for headings, DM Mono for small labels, and Georgia italic for the decorative hero phrase. The KPL logo tile remains black.

The site uses the supplied KPL icon and the learner-at-a-desk illustration on the homepage. Fonts load from Google Fonts when network access is available and fall back to system sans-serif fonts otherwise.
