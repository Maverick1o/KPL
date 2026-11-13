import { renderSite } from "./site-content.mjs";

const page = document.body.dataset.page || "home";
const GA4_MEASUREMENT_ID = "G-Y8Q414E2YG";
const ANALYTICS_CONSENT_KEY = "kpl-analytics-consent";
let analyticsInitialized = false;

function initGoogleAnalytics(measurementId) {
  if (analyticsInitialized || !/^G-[A-Z0-9]+$/i.test(measurementId)) return;
  analyticsInitialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);
}

function getAnalyticsConsent() {
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  } catch {
    return null;
  }
}

function setAnalyticsConsent(choice) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, choice);
  } catch {
    // Keep this page's choice even when the browser blocks local storage.
  }
  window[`ga-disable-${GA4_MEASUREMENT_ID}`] = choice !== "granted";
  document.querySelector("#analytics-consent")?.remove();
  if (choice === "granted") initGoogleAnalytics(GA4_MEASUREMENT_ID);
}

function showAnalyticsConsent() {
  if (document.querySelector("#analytics-consent")) return;
  const banner = document.createElement("aside");
  banner.id = "analytics-consent";
  banner.className = "analytics-consent";
  banner.setAttribute("aria-label", "Analytics privacy choices");
  banner.innerHTML = `
    <div class="analytics-consent-copy">
      <strong>Help improve this site?</strong>
      <p>Optional Google Analytics measures visits and interactions. You can allow or decline it; see the <a href="privacy.html">privacy page</a>.</p>
    </div>
    <div class="analytics-consent-actions">
      <button class="analytics-choice analytics-choice-decline" type="button" data-analytics-decline>Decline</button>
      <button class="analytics-choice analytics-choice-allow" type="button" data-analytics-allow>Allow analytics</button>
    </div>
  `;
  banner.querySelector("[data-analytics-decline]").addEventListener("click", () => setAnalyticsConsent("denied"));
  banner.querySelector("[data-analytics-allow]").addEventListener("click", () => setAnalyticsConsent("granted"));
  document.body.append(banner);
}

const savedAnalyticsConsent = getAnalyticsConsent();
if (savedAnalyticsConsent === "granted") initGoogleAnalytics(GA4_MEASUREMENT_ID);
else if (savedAnalyticsConsent !== "denied") showAnalyticsConsent();

document.addEventListener("click", (event) => {
  const preferencesButton = event.target.closest("[data-analytics-preferences]");
  if (!preferencesButton) return;
  showAnalyticsConsent();
});

function trackEvent(name, parameters = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    page_type: page,
    page_path: window.location.pathname,
    ...parameters,
  });
}

function ctaPlacement(link) {
  if (link.closest(".primary-nav")) return "navigation";
  if (link.closest(".home-hero")) return "home_hero";
  if (link.closest(".home-starter-card")) return "home_offer";
  if (link.closest(".price-summary")) return "price_summary";
  if (link.closest(".price-payment-card")) return "payment_summary";
  if (link.closest(".booking-panel")) return "booking_panel";
  if (link.closest(".detail-hero")) return "service_hero";
  if (link.closest(".contact-section")) return "contact_section";
  if (link.closest(".cta-section")) return "section_cta";
  if (link.closest(".site-footer")) return "footer";
  return "content";
}

function getSharePageUrl() {
  const canonicalUrl = document.querySelector('link[rel="canonical"]')?.href;
  return new URL(canonicalUrl || window.location.href, window.location.href).href;
}

function getShareTitle() {
  return document.querySelector('meta[property="og:title"]')?.content || document.title;
}

function getShareHref(platform, url, title) {
  const encodedUrl = encodeURIComponent(url);
  if (platform === "linkedin") return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  if (platform === "facebook") return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  if (platform === "x") return `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodedUrl}`;
  return "#";
}

function initShareActions() {
  const shareUrl = getSharePageUrl();
  const shareTitle = getShareTitle();
  const feedback = document.querySelector("[data-share-feedback]");
  document.querySelectorAll("[data-share-platform]").forEach((link) => {
    link.href = getShareHref(link.dataset.sharePlatform, shareUrl, shareTitle);
  });

  const nativeShareButton = document.querySelector("[data-native-share]");
  if (nativeShareButton && typeof navigator.share === "function") {
    nativeShareButton.hidden = false;
    nativeShareButton.addEventListener("click", async () => {
      try {
        await navigator.share({ title: shareTitle, text: "Know someone who might find this page useful?", url: shareUrl });
        trackEvent("share", { share_method: "native" });
      } catch (error) {
        if (error?.name !== "AbortError" && feedback) feedback.textContent = "Sharing wasn’t available. Try one of the options above.";
      }
    });
  }

  document.querySelector("[data-copy-page-link]")?.addEventListener("click", async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const field = document.createElement("textarea");
        field.value = shareUrl;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        const copied = document.execCommand("copy");
        field.remove();
        if (!copied) throw new Error("Clipboard copy failed");
      }
      if (feedback) feedback.textContent = "Page link copied";
      trackEvent("share", { share_method: "copy_link" });
    } catch {
      if (feedback) feedback.textContent = "Couldn’t copy automatically. Please copy the page address from your browser.";
    }
  });
}

initShareActions();

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;

  const destination = new URL(link.href, window.location.href);
  const ctaText = (link.innerText || link.getAttribute("aria-label") || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 100);
  const placement = ctaPlacement(link);
  const isCta = link.matches(".button, .nav-cta, .text-link, .card-link, .about-linkedin");

  if (isCta) {
    trackEvent("cta_click", {
      cta_text: ctaText,
      cta_placement: placement,
      destination: destination.origin === window.location.origin
        ? `${destination.pathname}${destination.hash}`
        : destination.hostname,
    });
  }

  if (/instagram\.com$|ig\.me$/i.test(destination.hostname)) {
    trackEvent("instagram_click", { cta_placement: placement });
  }

  if (link.dataset.sharePlatform) {
    trackEvent("share", { share_method: link.dataset.sharePlatform });
  }
});

const siteRoot = document.querySelector("#site");
if (!siteRoot.innerHTML.trim()) siteRoot.innerHTML = renderSite(page);
document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });

function initHomeParallax() {
  if (page !== "home" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const layers = [...document.querySelectorAll("[data-parallax], [data-parallax-bg]")].map((element) => ({
    element,
    speed: Number(element.dataset.parallax || element.dataset.parallaxBg),
  }));
  if (!layers.length) return;

  let frame = 0;
  const update = () => {
    frame = 0;
    const viewportCenter = window.innerHeight / 2;
    const maxOffset = window.innerWidth <= 460 ? 10 : window.innerWidth <= 800 ? 18 : 34;
    layers.forEach(({ element, speed }) => {
      const bounds = element.getBoundingClientRect();
      if (bounds.bottom < -120 || bounds.top > window.innerHeight + 120) return;
      const center = bounds.top + bounds.height / 2;
      const offset = Math.max(-maxOffset, Math.min(maxOffset, (viewportCenter - center) * speed));
      element.style.setProperty("--parallax-offset", `${offset.toFixed(1)}px`);
    });
  };
  const scheduleUpdate = () => {
    if (!frame) frame = window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  scheduleUpdate();
}

initHomeParallax();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav?.classList.toggle("is-open", !open);
});

const params = new URLSearchParams(window.location.search);
const interestFromLink = params.get("interest");
const interestSelect = document.querySelector("#lead-interest");
if (interestSelect && interestFromLink) interestSelect.value = interestFromLink;

const form = document.querySelector("#lead-form");
const formStatus = document.querySelector("#form-status");
const isStudentRequest = interestFromLink === "student";
const formEndpoint = "https://formsubmit.co/ajax/kevinkirkland0@gmail.com";
const formSubmit = form?.querySelector(".form-submit");
const giftRequestForm = document.querySelector("#gift-request-form");
const giftRequestStatus = document.querySelector("#gift-request-status");
const giftDeliveryDateInput = document.querySelector("#gift-delivery-date");

const bookingRequestForm = document.querySelector("#booking-request-form");
const bookingRequestStatus = document.querySelector("#booking-request-status");
const preferredDateInput = document.querySelector("#preferred-date");
const preferredStartTimeInput = document.querySelector("#preferred-start-time");
const preferredTimeInput = document.querySelector("#preferred-time");
const timeZoneInput = document.querySelector("#booking-time-zone-value");
const timeZoneLabel = document.querySelector("#booking-timezone");
const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "local time";

bookingRequestForm?.addEventListener("focusin", () => {
  if (bookingRequestForm.dataset.analyticsStarted) return;
  bookingRequestForm.dataset.analyticsStarted = "true";
  trackEvent("booking_request_start");
});

form?.addEventListener("focusin", () => {
  if (form.dataset.analyticsStarted) return;
  form.dataset.analyticsStarted = "true";
  trackEvent("contact_form_start");
});

giftRequestForm?.addEventListener("focusin", () => {
  if (giftRequestForm.dataset.analyticsStarted) return;
  giftRequestForm.dataset.analyticsStarted = "true";
  trackEvent("gift_request_start", { offer: "ai_build_kickstart" });
});

if (giftDeliveryDateInput) {
  giftDeliveryDateInput.min = localDateTimeValues().date;
}

async function emailFormSubmission(values) {
  const payload = Object.fromEntries(values.entries());
  if (payload.email) payload._replyto = payload.email;
  payload._url = `${window.location.origin}${window.location.pathname}`;
  const response = await fetch(formEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error(`The form service returned an unreadable response (${response.status}).`);
  }
  if (!response.ok || result.success === false || result.success === "false") {
    throw new Error(result.message || `The form service did not accept the submission (${response.status}).`);
  }
  return result;
}

function bookingRequestFailureMessage(error) {
  const message = error instanceof Error ? error.message : "";
  const normalized = message.toLowerCase();
  if (normalized.includes("activation")) {
    return "FormSubmit is waiting for inbox confirmation. Check for its activation email, including in spam, then try again.";
  }
  if (normalized.includes("web server") || normalized.includes("html files") || normalized.includes("referer")) {
    return "FormSubmit couldn’t verify this page. Open the published website (not a local HTML file) and try again.";
  }
  if (normalized.includes("failed to fetch") || normalized.includes("networkerror")) {
    return "Couldn’t connect to the form service. Check your connection and try again.";
  }
  return message
    ? `FormSubmit rejected the request: ${message} Please try again or DM Kevin on Instagram.`
    : "The request didn’t go through. Please try again or DM Kevin on Instagram.";
}

function localDateTimeValues(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000).toISOString();
  return { date: local.slice(0, 10), time: local.slice(11, 16) };
}

function updateBookingTimeMinimum() {
  if (!preferredDateInput || !preferredStartTimeInput) return;
  const earliestStart = new Date(Date.now() + 60_000);
  earliestStart.setMinutes(Math.ceil(earliestStart.getMinutes() / 15) * 15, 0, 0);
  const earliest = localDateTimeValues(earliestStart);
  preferredDateInput.min = earliest.date;
  if (preferredDateInput.value === earliest.date) preferredStartTimeInput.min = earliest.time;
  else preferredStartTimeInput.removeAttribute("min");
}

if (preferredDateInput) {
  updateBookingTimeMinimum();
  preferredDateInput.addEventListener("change", updateBookingTimeMinimum);
  timeZoneInput.value = localTimeZone;
  timeZoneLabel.textContent = `Times are shown in your local timezone (${localTimeZone}).`;
}

bookingRequestForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submit = bookingRequestForm.querySelector("button[type='submit']");
  preferredTimeInput.value = `${preferredDateInput.value}T${preferredStartTimeInput.value}`;
  const values = new FormData(bookingRequestForm);
  const requestedTime = new Date(values.get("preferred_time"));
  const formattedTime = new Intl.DateTimeFormat(undefined, {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: localTimeZone === "local time" ? undefined : localTimeZone,
  }).format(requestedTime);
  values.set("preferred_time_display", `${formattedTime} (${localTimeZone})`);

  submit.disabled = true;
  bookingRequestStatus.hidden = false;
  bookingRequestStatus.classList.remove("is-error");
  bookingRequestStatus.textContent = "Sending your request…";
  try {
    await emailFormSubmission(values);
    trackEvent("booking_request_submit", { offer: "ai_build_kickstart" });
    bookingRequestForm.reset();
    updateBookingTimeMinimum();
    timeZoneInput.value = localTimeZone;
    bookingRequestStatus.textContent = "Thanks—your time request is in. Kevin will confirm or suggest another time, then send prep details and a payment link.";
  } catch (error) {
    trackEvent("booking_request_error", { offer: "ai_build_kickstart" });
    bookingRequestStatus.classList.add("is-error");
    bookingRequestStatus.textContent = bookingRequestFailureMessage(error);
  } finally {
    submit.disabled = false;
  }
});

giftRequestForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submit = giftRequestForm.querySelector("button[type='submit']");
  submit.disabled = true;
  giftRequestStatus.hidden = false;
  giftRequestStatus.classList.remove("is-error");
  giftRequestStatus.textContent = "Sending your gift request…";
  try {
    await emailFormSubmission(new FormData(giftRequestForm));
    trackEvent("gift_request_submit", { offer: "ai_build_kickstart" });
    trackEvent("generate_lead", { lead_type: "gift_request" });
    giftRequestForm.reset();
    if (giftDeliveryDateInput) giftDeliveryDateInput.min = localDateTimeValues().date;
    giftRequestStatus.textContent = "Thanks—your gift request is in. Kevin will confirm the details and send you a payment link for $447. The gift certificate will be sent after payment.";
  } catch (error) {
    trackEvent("gift_request_error", { offer: "ai_build_kickstart" });
    giftRequestStatus.classList.add("is-error");
    giftRequestStatus.textContent = bookingRequestFailureMessage(error);
  } finally {
    submit.disabled = false;
  }
});

if (isStudentRequest) {
  document.querySelector(".contact-copy .eyebrow").lastChild.textContent = " REQUEST A STUDENT SESSION";
  document.querySelector(".contact-copy h1").innerHTML = "Request a<br /><span>student session.</span>";
  document.querySelector(".form-heading h2").textContent = "What is the student curious about?";
  document.querySelector(".form-heading p:last-child").textContent = "A parent or guardian can share a little about the student’s interests.";
  document.querySelector("#lead-form input[name='_subject']").value = "New student coaching session request";
  if (formSubmit) formSubmit.firstChild.textContent = "Request a student session ";
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submit = form.querySelector("button[type='submit']");
  submit.disabled = true;
  formStatus.hidden = false;
  formStatus.textContent = "Sending…";
  try {
    const values = new FormData(form);
    values.delete("permission");
    await emailFormSubmission(values);
    trackEvent("generate_lead", {
      lead_type: isStudentRequest ? "student_inquiry" : "contact_inquiry",
    });
    form.reset();
    formStatus.classList.remove("is-error");
    formStatus.textContent = "Thanks—your request has been sent. I’ll reply to confirm fit and availability.";
  } catch {
    trackEvent("contact_form_error", {
      lead_type: isStudentRequest ? "student_inquiry" : "contact_inquiry",
    });
    formStatus.classList.add("is-error");
    formStatus.textContent = "That didn’t go through. Please try again in a moment.";
  } finally {
    submit.disabled = false;
  }
});
