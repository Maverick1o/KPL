import { renderSite } from "./site-content.mjs";

const page = document.body.dataset.page || "home";
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

const bookingRequestForm = document.querySelector("#booking-request-form");
const bookingRequestStatus = document.querySelector("#booking-request-status");
const preferredTimeInput = document.querySelector("#preferred-time");
const timeZoneInput = document.querySelector("#booking-time-zone-value");
const timeZoneLabel = document.querySelector("#booking-timezone");
const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "local time";

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

if (preferredTimeInput) {
  const now = new Date();
  const localNow = new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
  preferredTimeInput.min = localNow;
  timeZoneInput.value = localTimeZone;
  timeZoneLabel.textContent = `Times are shown in your local timezone (${localTimeZone}).`;
}

bookingRequestForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submit = bookingRequestForm.querySelector("button[type='submit']");
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
    bookingRequestForm.reset();
    preferredTimeInput.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
    timeZoneInput.value = localTimeZone;
    bookingRequestStatus.textContent = "Thanks—your time request is in. Kevin will confirm or suggest another time, then send prep details and a payment link.";
  } catch (error) {
    bookingRequestStatus.classList.add("is-error");
    bookingRequestStatus.textContent = bookingRequestFailureMessage(error);
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
    form.reset();
    formStatus.classList.remove("is-error");
    formStatus.textContent = "Thanks—your request has been sent. I’ll reply to confirm fit and availability.";
  } catch {
    formStatus.classList.add("is-error");
    formStatus.textContent = "That didn’t go through. Please try again in a moment.";
  } finally {
    submit.disabled = false;
  }
});
