export function renderSite(page) {
const navItems = [
  ["Home", "./", "home"],
  ["Ways to work together", "./#offers", "offers"],
  ["Pricing", "pricing.html", "pricing"],
  ["About", "about.html", "about"],
];

const instagramDmHref = "https://ig.me/m/kirkland_product_lab";
const currentNav = page === "contact" ? "" : page;
const primaryRequestHref = page === "students"
  ? "contact.html?interest=student#lead-form"
  : "booking.html#booking-widget";
const primaryRequestLabel = page === "students" ? "Request a student session" : "Request a time";

function header() {
  const links = navItems.map(([label, href, key]) => `
    <a href="${href}" ${currentNav === key ? 'aria-current="page"' : ""}>${label}</a>
  `).join("");

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="shell nav-shell">
        <a class="brand" href="./" aria-label="Kirkland Product Lab home">
          <span class="brand-mark"><img src="assets/kpl-icon.png" alt="" /></span>
          <span class="brand-name">Kirkland <b>Product Lab</b></span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
          <span></span><span></span><span class="sr-only">Toggle navigation</span>
        </button>
        <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
          ${links}
          <a class="nav-cta" href="${primaryRequestHref}">${primaryRequestLabel} <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer" id="site-footer">
      <div class="shell footer-invite">
        <div class="footer-invite-copy">
          <p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span> YOUR IDEA HAS A NEXT STEP</p>
          <h2>Bring an idea.<br /><span>Leave with a way forward.</span></h2>
        </div>
        <div class="footer-invite-action">
          <p>Make a real start together, then take the skills with you.</p>
          <a class="button button-lime" href="${primaryRequestHref}">${primaryRequestLabel} <span aria-hidden="true">↗</span></a>
          <a class="footer-question" href="${instagramDmHref}" target="_blank" rel="noopener noreferrer">Have a question? DM me on Instagram <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="shell footer-main">
        <div class="footer-brand-block">
          <a class="brand brand-inverse" href="./" aria-label="Kirkland Product Lab home">
            <span class="brand-mark"><img src="assets/kpl-icon.png" alt="" /></span>
            <span class="brand-name">Kirkland <b>Product Lab</b></span>
          </a>
          <p>One-to-one guidance for building real projects with AI.</p>
          <a class="footer-handle" href="${instagramDmHref}" target="_blank" rel="noopener noreferrer">@kirkland_product_lab <span aria-hidden="true">↗</span></a>
        </div>
        <nav class="footer-links" aria-label="Footer navigation">
          <div><h3>Explore</h3><a href="app-building.html">App coaching</a><a href="website-building.html">Website coaching</a><a href="student-coaching.html">Students</a></div>
          <div><h3>More</h3><a href="pricing.html">Pricing</a><a href="about.html">About Kevin</a><a href="contact.html">Contact</a></div>
        </nav>
      </div>
      <div class="shell footer-bottom"><span>© <span data-year></span> Kirkland Product Lab</span><span>Practical coaching <i>·</i> Real projects <i>·</i> Skills that travel</span></div>
    </footer>
  `;
}

const pageContent = {
  home: `
    <main id="main">
      <section class="home-hero">
        <div class="shell hero-grid">
          <svg class="hero-thread" data-parallax="0.025" viewBox="0 0 1370 720" preserveAspectRatio="none" aria-hidden="true">
            <path class="thread-echo" d="M 362 538 C 480 538 550 512 614 453 C 630 410 605 354 652 327" />
            <path class="thread-main" d="M 354 526 C 473 526 540 501 604 441 C 616 398 595 342 642 315" />
            <circle cx="362" cy="532" r="4" />
            <circle class="thread-node" cx="642" cy="315" r="3.5" />
          </svg>
          <div class="hero-copy">
            <p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span> ONE-TO-ONE GUIDANCE FOR BUILDING REAL PROJECTS WITH AI</p>
            <h1><span class="title-lead">Learn AI by</span><span class="title-word">making</span><span class="title-follow">something real.</span></h1>
            <p class="hero-lede">Bring a goal, a question, or just curiosity. We’ll choose a real project—or a hands-on practice build—and work through it together, so you leave ready to keep building with AI on your own.</p>
            <ul class="project-types" aria-label="Project examples"><li>Apps</li><li>Websites</li><li>Digital tools</li><li>Automations</li></ul>
            <div class="hero-actions"><a class="button button-lime" href="#offers">Find your starting point <span aria-hidden="true">↓</span></a><a class="text-link" href="about.html">Meet Kevin <span aria-hidden="true">↗</span></a></div>
          </div>
          <div class="hero-rail">
            <dl class="proof-strip" aria-label="Kevin's experience">
              <div class="proof-item"><dt>20 years</dt><dd>building software</dd></div>
              <div class="proof-item"><dt>50+ products</dt><dd>built or supported</dd></div>
              <div class="proof-item"><dt>Thousands of hours</dt><dd>building with AI</dd></div>
            </dl>
            <p class="rail-caption"><span class="caption-dot" aria-hidden="true"></span> The playbook and confidence to build on your own.</p>
            <a class="scroll-cue" href="#intro" aria-label="Scroll to explore the next section">
              <span>SCROLL TO EXPLORE</span><span class="scroll-cue-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
          <figure class="hero-art" data-parallax="0.065">
            <div class="art-stack"><div class="art-plate"><img src="assets/home-build-together-tabletop-v3.png" alt="A person sketches a digital product at a warm geometric worktable while a remote coach guides them and interface panels take shape." /></div></div>
          </figure>
        </div>
      </section>

      <section class="section intro-section" id="intro">
        <div class="shell intro-grid">
          <div class="intro-copy">
            <p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span> THE IDEA</p>
            <h2>Thousands of hours putting AI to work on <span>real projects.</span></h2>
            <p class="section-lede">I’ve learned how to give AI the right context, structure the work, catch mistakes, and keep projects moving. I’ll help you apply those methods to your idea—and keep building with confidence.</p>
          </div>
          <figure class="intro-art" data-parallax="0.04">
            <svg viewBox="0 0 480 390" role="img" aria-labelledby="idea-art-title idea-art-desc">
              <title id="idea-art-title">How Kevin turns AI into useful project work</title>
              <desc id="idea-art-desc">A project idea is shaped with useful context, tested in an app, and refined with careful human review before it is ready to use.</desc>
              <defs>
                <linearGradient id="idea-wash" x1="62" y1="45" x2="420" y2="352" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#f4c746" stop-opacity=".25" />
                  <stop offset=".58" stop-color="#fffdfa" stop-opacity=".62" />
                  <stop offset="1" stop-color="#ba6448" stop-opacity=".1" />
                </linearGradient>
                <filter id="idea-shadow" x="25" y="36" width="442" height="334" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="11" stdDeviation="9" flood-color="#16233b" flood-opacity=".12" />
                </filter>
              </defs>
              <path d="M251 25c89-2 165 40 192 113 31 83-9 176-86 210-74 33-189 26-280-14C8 297 4 196 42 113 77 37 154 28 251 25Z" fill="url(#idea-wash)" />
              <path d="M34 283c36 0 44-37 75-52 27-13 45 4 66-7 27-14 23-67 57-82 29-13 51 11 77 3 29-9 42-53 74-57 26-3 43 17 72 18" fill="none" stroke="#ba6448" stroke-opacity=".53" stroke-width="1.7" stroke-linecap="round" stroke-dasharray="2 7" />
              <path d="M34 291c40 0 47-35 78-50 26-12 43 5 66-7 27-14 25-63 57-77 28-12 51 11 77 3 29-9 42-50 73-54 24-3 44 16 70 17" fill="none" stroke="#16233b" stroke-opacity=".13" stroke-width="1.1" stroke-linecap="round" />
              <circle cx="34" cy="283" r="6" fill="#e98137" stroke="#fbf5eb" stroke-width="4" />

              <g transform="rotate(-7 95 205)" filter="url(#idea-shadow)">
                <path d="M55 155 144 150l9 104-92 8Z" fill="#e7d8c5" fill-opacity=".48" />
                <path d="M49 148 138 143l9 104-92 8Z" fill="#fffdfa" stroke="#16233b" stroke-opacity=".52" stroke-width="1.4" stroke-linejoin="round" />
                <path d="m62 171 29-2m-29 9 42-3m-42 9 24-2" stroke="#ba6448" stroke-width="2" stroke-linecap="round" />
                <path d="m64 211 15-14 12 10 12-17 21 22-1 17-56 3Z" fill="#f4c746" fill-opacity=".78" stroke="#16233b" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round" />
                <path d="M64 235h35" stroke="#16233b" stroke-opacity=".36" stroke-width="1.7" stroke-linecap="round" />
                <circle cx="126" cy="164" r="5" fill="#e98137" />
              </g>

              <g transform="rotate(3 239 131)" filter="url(#idea-shadow)">
                <path d="m167 73 12-8h119l10 9v124l-9 8H170l-8-8V83Z" fill="#eadfce" fill-opacity=".7" />
                <path d="m158 67 12-8h119l10 9v124l-9 8H161l-8-8V77Z" fill="#fffdfa" stroke="#16233b" stroke-opacity=".68" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M153 81h146" stroke="#16233b" stroke-opacity=".18" />
                <circle cx="167" cy="72" r="2.5" fill="#ba6448" />
                <circle cx="176" cy="72" r="2.5" fill="#f4c746" />
                <text x="169" y="99" fill="#66758a" font-family="DM Mono, monospace" font-size="8" letter-spacing="1.2">PROJECT CONTEXT</text>
                <path d="M169 110h91m-91 8h113m-113 8h72" stroke="#16233b" stroke-opacity=".42" stroke-width="2" stroke-linecap="round" />
                <rect x="169" y="140" width="52" height="23" rx="4" fill="#f5e5c3" />
                <path d="M178 151h34" stroke="#9a5a25" stroke-opacity=".8" stroke-width="2" stroke-linecap="round" />
                <rect x="226" y="140" width="52" height="23" rx="4" fill="#e7efeb" />
                <path d="M235 151h34" stroke="#557970" stroke-opacity=".8" stroke-width="2" stroke-linecap="round" />
                <path d="M169 177h73m-73 7h45" stroke="#16233b" stroke-opacity=".25" stroke-width="1.7" stroke-linecap="round" />
              </g>

              <g transform="rotate(4 367 222)" filter="url(#idea-shadow)">
                <rect x="286" y="105" width="147" height="224" rx="9" fill="#fffdfa" stroke="#16233b" stroke-width="1.7" />
                <path d="M287 129h145" stroke="#16233b" stroke-width="1.5" />
                <circle cx="300" cy="117" r="2.4" fill="#ba6448" />
                <circle cx="309" cy="117" r="2.4" fill="#f4c746" />
                <rect x="300" y="143" width="119" height="42" rx="4" fill="#f4eee4" />
                <circle cx="315" cy="164" r="8" fill="#f4c746" />
                <path d="M330 158h61m-61 8h42" stroke="#16233b" stroke-opacity=".68" stroke-width="2" stroke-linecap="round" />
                <path d="M300 201h78" stroke="#16233b" stroke-opacity=".75" stroke-width="2.2" stroke-linecap="round" />
                <path d="M300 213h111" stroke="#16233b" stroke-opacity=".22" stroke-width="1.5" />
                <rect x="300" y="225" width="119" height="25" rx="4" fill="#f8f3ec" stroke="#16233b" stroke-opacity=".12" />
                <circle cx="312" cy="237" r="4" fill="#e98137" />
                <path d="M323 234h59m-59 6h39" stroke="#16233b" stroke-opacity=".48" stroke-width="1.7" stroke-linecap="round" />
                <rect x="300" y="258" width="119" height="25" rx="4" fill="#f7f0e5" />
                <circle cx="312" cy="270" r="4" fill="#829c70" />
                <path d="M323 267h71m-71 6h48" stroke="#16233b" stroke-opacity=".48" stroke-width="1.7" stroke-linecap="round" />
                <rect x="300" y="294" width="56" height="20" rx="4" fill="#f4c746" />
                <path d="M312 304h31" stroke="#16233b" stroke-width="1.8" stroke-linecap="round" />
              </g>

              <g transform="rotate(-8 280 217)">
                <path d="m268 201 16 14-14 4-4 14-14-16 6-5 5-11Z" fill="#fffdfa" stroke="#16233b" stroke-width="1.4" stroke-linejoin="round" />
                <path d="m258 216 7 7" stroke="#ba6448" stroke-width="1.8" stroke-linecap="round" />
              </g>
              <g transform="rotate(6 419 94)">
                <rect x="399" y="72" width="43" height="43" rx="10" fill="#fffdfa" stroke="#ba6448" stroke-opacity=".52" />
                <path d="m410 94 7 7 14-17" fill="none" stroke="#ba6448" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="441" cy="74" r="3" fill="#f4c746" stroke="#16233b" stroke-width="1" />
              </g>
            </svg>
          </figure>
        </div>
      </section>

      <section class="section offers-section" id="offers" data-parallax-bg="0.025">
        <div class="shell">
          <div class="section-heading">
            <div><p class="eyebrow">PICK YOUR PROJECT</p><h2>Three ways to get started.</h2></div>
            <div class="offers-intro">
              <p>Build the skills to do more yourself—and spend less on outside help.</p>
              <div class="coach-note">
                <svg viewBox="0 0 38 32" aria-hidden="true">
                  <circle cx="11" cy="9" r="4" fill="#ba6448" />
                  <path d="M3 27c0-5 3.6-9 8-9s8 4 8 9" fill="none" stroke="#16233b" stroke-width="2" stroke-linecap="round" />
                  <circle cx="27" cy="9" r="4" fill="#f4c746" stroke="#16233b" stroke-width="1.2" />
                  <path d="M19 27c0-5 3.6-9 8-9s8 4 8 9" fill="none" stroke="#16233b" stroke-width="2" stroke-linecap="round" />
                  <path d="M16 7h6" stroke="#ba6448" stroke-width="1.5" stroke-dasharray="2 2" />
                </svg>
                <span>One-to-one with Kevin</span>
              </div>
            </div>
          </div>
          <div class="offer-grid">
            <article class="offer-card offer-card-lime" data-parallax="0.015">
              <div class="card-topline"><span class="card-index">01</span><span class="card-icon">&lt;/&gt;</span></div>
              <svg class="offer-art" data-parallax="0.05" viewBox="0 0 180 72" aria-hidden="true">
                <ellipse cx="92" cy="63" rx="79" ry="4" fill="#9a5a25" fill-opacity=".09" />
                <g transform="rotate(-5 32 36)">
                  <path d="M8 14 51 10l5 45-44 4Z" fill="#d8a735" fill-opacity=".19" />
                  <path d="M6 11 49 8l5 46-44 4Z" fill="#fffaf0" stroke="#16233b" stroke-opacity=".58" stroke-width="1.4" stroke-linejoin="round" />
                  <circle cx="43" cy="16" r="3.2" fill="#f4c746" stroke="#9a5a25" stroke-width="1.1" />
                  <path d="M14 25c5-3 8 1 12-2 3-2 5 1 9-1M14 32c4-2 6 1 10-1M14 39c6-3 10 1 17-2M14 46h16" fill="none" stroke="#ba6448" stroke-width="1.8" stroke-linecap="round" />
                  <path d="m34 47 9-10 3 3-9 10-5 2Z" fill="#f4c746" stroke="#16233b" stroke-width="1.1" stroke-linejoin="round" />
                </g>
                <path d="M59 43c14-17 26-19 41-8" fill="none" stroke="#9a5a25" stroke-width="1.7" stroke-dasharray="2 4" stroke-linecap="round" />
                <circle cx="99" cy="35" r="3" fill="#ba6448" />
                <g transform="rotate(2 137 36)">
                  <path d="m107 13 7-4h51l4 4v47l-4 4h-54l-4-4Z" fill="#c99125" fill-opacity=".16" />
                  <path d="m104 10 7-4h51l4 4v47l-4 4h-54l-4-4Z" fill="#fffaf0" stroke="#16233b" stroke-opacity=".65" stroke-width="1.5" stroke-linejoin="round" />
                  <path d="M104 19h62" stroke="#16233b" stroke-opacity=".42" stroke-width="1.3" />
                  <circle cx="112" cy="13" r="1.6" fill="#ba6448" /><circle cx="118" cy="13" r="1.6" fill="#f4c746" />
                  <rect x="112" y="25" width="26" height="21" rx="4" fill="#f4c746" />
                  <path d="M116 41c5-8 8-3 11-9 3 4 6 3 8 7" fill="none" stroke="#9a5a25" stroke-width="1.5" stroke-linecap="round" />
                  <rect x="144" y="25" width="16" height="8" rx="4" fill="#ba6448" fill-opacity=".84" />
                  <path d="M144 39h16M112 51h48" stroke="#16233b" stroke-opacity=".58" stroke-width="1.6" stroke-linecap="round" />
                </g>
              </svg>
              <p class="card-label">FOR APP IDEAS</p>
              <h3>Let’s build your app idea with AI.</h3>
              <p>We’ll get your idea off the ground together, while I teach you how to keep building with AI on your own.</p>
              <a class="card-link" href="app-building.html">Explore app coaching <span aria-hidden="true">↗</span></a>
            </article>
            <article class="offer-card" data-parallax="0.018">
              <div class="card-topline"><span class="card-index">02</span><span class="card-icon">↗</span></div>
              <svg class="offer-art" data-parallax="0.046" viewBox="0 0 180 72" aria-hidden="true">
                <ellipse cx="84" cy="63" rx="73" ry="4" fill="#39737d" fill-opacity=".1" />
                <g transform="rotate(-2 59 36)">
                  <path d="M13 13c0-4 3-7 7-7h79c4 0 7 3 7 7v44c0 4-3 7-7 7H20c-4 0-7-3-7-7Z" fill="#b8d0d5" fill-opacity=".3" />
                  <path d="M9 10c0-4 3-7 7-7h79c4 0 7 3 7 7v44c0 4-3 7-7 7H16c-4 0-7-3-7-7Z" fill="#fffaf0" stroke="#16233b" stroke-opacity=".64" stroke-width="1.5" />
                  <path d="M9 19h93" stroke="#39737d" stroke-width="1.4" />
                  <circle cx="17" cy="13" r="1.7" fill="#ba6448" /><circle cx="24" cy="13" r="1.7" fill="#f4c746" /><circle cx="31" cy="13" r="1.7" fill="#5e7e5a" />
                  <path d="M18 27c8-3 16-1 24-3 8-2 15 1 23-1" fill="none" stroke="#16233b" stroke-opacity=".6" stroke-width="1.7" stroke-linecap="round" />
                  <path d="M18 33h25" stroke="#ba6448" stroke-width="1.7" stroke-linecap="round" />
                  <path d="M19 49c8-12 15-7 20-15 5 6 11 9 19 4 4-2 8 0 12 6" fill="#dcebef" stroke="#39737d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M77 28h28M77 34h18M77 40h23" stroke="#16233b" stroke-opacity=".58" stroke-width="1.6" stroke-linecap="round" />
                  <rect x="77" y="47" width="16" height="6" rx="3" fill="#f4c746" />
                </g>
                <path d="M112 49c10-4 15-13 20-23" fill="none" stroke="#39737d" stroke-width="1.7" stroke-dasharray="2 4" stroke-linecap="round" />
                <circle cx="133" cy="26" r="3" fill="#ba6448" />
                <g transform="rotate(13 148 33)">
                  <path d="m143 13 7 3-13 34-7 4 1-8Z" fill="#fffaf0" stroke="#16233b" stroke-width="1.5" stroke-linejoin="round" />
                  <path d="m143 13 7 3-2 5-7-3Z" fill="#ba6448" stroke="#16233b" stroke-width="1.2" stroke-linejoin="round" />
                  <path d="m130 51 7-1-6 7Z" fill="#f4c746" stroke="#16233b" stroke-width="1.1" stroke-linejoin="round" />
                </g>
                <path d="m157 12 2-5m6 11 5-2" stroke="#ba6448" stroke-width="1.6" stroke-linecap="round" />
              </svg>
              <p class="card-label">FOR BUSINESS WEBSITES</p>
              <h3>Let’s build a website you can manage.</h3>
              <p>Create it together, then learn to make your own updates with AI—without big bills or waiting on a developer for every small change.</p>
              <a class="card-link" href="website-building.html">Explore website coaching <span aria-hidden="true">↗</span></a>
            </article>
            <article class="offer-card" data-parallax="0.021">
              <div class="card-topline"><span class="card-index">03</span><span class="card-icon">✳</span></div>
              <svg class="offer-art" data-parallax="0.042" viewBox="0 0 180 72" aria-hidden="true">
                <ellipse cx="90" cy="64" rx="78" ry="4" fill="#5e7e5a" fill-opacity=".1" />
                <path d="M8 57c32-4 59-3 84-1 29 2 52 1 80-4" fill="none" stroke="#5e7e5a" stroke-opacity=".55" stroke-width="1.7" stroke-linecap="round" />
                <path d="M32 48c12-1 21 1 29 6" fill="none" stroke="#ba6448" stroke-width="3" stroke-linecap="round" />
                <path d="M148 48c-10-2-18 0-25 6" fill="none" stroke="#39737d" stroke-width="3" stroke-linecap="round" />
                <path d="M70 20c0-3 2-5 5-5h31l6 5v25H70Z" fill="#fffaf0" stroke="#16233b" stroke-width="1.5" stroke-linejoin="round" />
                <path d="m76 38 10-9 8 5 7-8 7 12" fill="none" stroke="#39737d" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M76 42h31" stroke="#ba6448" stroke-width="1.7" stroke-linecap="round" />
                <path d="M59 23c4 1 7 2 11 6m45-4c5-3 9-4 15-4" fill="none" stroke="#5e7e5a" stroke-width="1.5" stroke-dasharray="2 3" stroke-linecap="round" />
                <circle cx="31" cy="23" r="8" fill="#c77656" stroke="#16233b" stroke-width="1.5" />
                <path d="M23 22c0-7 5-11 11-9 4 1 6 4 5 8-3-1-5-3-7-5-2 4-5 6-9 6Z" fill="#16233b" />
                <path d="M16 53c1-10 6-16 15-16 8 0 13 4 15 12l-5 5Z" fill="#f4c746" stroke="#16233b" stroke-width="1.6" stroke-linejoin="round" />
                <path d="M35 23c0 3 2 4 4 4" fill="none" stroke="#16233b" stroke-width="1.2" stroke-linecap="round" />
                <circle cx="151" cy="22" r="8" fill="#e0a078" stroke="#16233b" stroke-width="1.5" />
                <path d="M143 22c-1-6 3-10 9-10 6 0 9 4 8 10-3-1-5-3-7-6-2 3-5 5-10 6Z" fill="#16233b" />
                <path d="M135 53c1-10 7-16 16-16 8 0 13 5 15 14l-5 3Z" fill="#39737d" stroke="#16233b" stroke-width="1.6" stroke-linejoin="round" />
                <path d="M146 22c-1 2-2 3-4 3" fill="none" stroke="#16233b" stroke-width="1.2" stroke-linecap="round" />
              </svg>
              <p class="card-label">FOR STUDENTS &amp; EXPLORERS</p>
              <h3>Let’s explore tech by making something real.</h3>
              <p>A low-pressure way to explore AI, coding, app building, and whether technology might be for you.</p>
              <a class="card-link" href="student-coaching.html">Explore student coaching <span aria-hidden="true">↗</span></a>
            </article>
          </div>
        </div>
      </section>

      <section class="section how-section" id="how-we-work" data-parallax-bg="0.016">
        <div class="shell how-grid">
          <div class="how-intro">
            <p class="eyebrow">HOW WE WORK</p>
            <h2>Learn by doing.<br /><span>Leave ready to do more.</span></h2>
            <p>Bring a real goal. We’ll choose a useful first step, work through it together, and turn the process into skills you can reuse.</p>
            <a class="text-link" href="about.html">Get to know Kevin <span aria-hidden="true">↗</span></a>
          </div>
          <div class="steps-list">
              <svg class="steps-route" data-parallax="0.03" viewBox="0 0 70 394" preserveAspectRatio="none" aria-hidden="true">
              <path d="M35 4c-1 21 8 36 0 56-8 19-12 28 0 45 10 16 8 30 0 45-11 20 8 30 0 48-8 20-9 28 0 45 10 19 8 30 0 48-10 20-4 32 0 50 3 18-3 31 0 49" fill="none" stroke="#ba6448" stroke-opacity=".56" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 5" />
              <circle cx="35" cy="60" r="4" fill="#f4c746" stroke="#9a5a25" stroke-width="1.3" />
              <circle cx="35" cy="198" r="4" fill="#dcebef" stroke="#39737d" stroke-width="1.3" />
              <circle cx="35" cy="337" r="4" fill="#e4ebdc" stroke="#5e7e5a" stroke-width="1.3" />
            </svg>
            <article class="step"><span>01</span><div><h3>Choose a useful first step</h3><p>We set a goal that fits your idea, experience, and time—even if it’s still taking shape.</p></div></article>
            <article class="step"><span>02</span><div><h3>Build side by side</h3><p>We make progress on your project while you learn to guide AI, review its work, and solve problems.</p></div></article>
            <article class="step"><span>03</span><div><h3>Leave ready for what’s next</h3><p>You keep the skills, a clear next step, and the confidence to continue on your own.</p></div></article>
          </div>
        </div>
      </section>

      <section class="cta-section home-starter-cta" id="starter-offer" data-parallax-bg="0.02"><div class="shell cta-card home-starter-card" data-parallax="0.018"><div class="home-starter-copy"><p class="eyebrow eyebrow-light">TWO-SESSION STARTER · FOUNDING RATE, FIRST 5 CLIENTS</p><h2>Make a real start in two sessions.</h2><p>We’ll build your app, website, or digital tool together—and you’ll leave with the skills to keep going. No ongoing commitment.</p><p class="home-starter-details"><strong>$447 total</strong><span aria-hidden="true">·</span><span>Two 90-minute sessions</span><span aria-hidden="true">·</span><span>$225 after time confirmation · $222 before session two</span></p></div><div class="home-starter-actions"><a class="button button-lime" href="booking.html#booking-widget">Request your first session time <span aria-hidden="true">↗</span></a><a class="text-link" href="${instagramDmHref}" target="_blank" rel="noopener noreferrer">Have a question? DM Kevin on Instagram <span aria-hidden="true">↗</span></a></div></div></section>
    </main>
  `,
  booking: `
    <main id="main">
      <section class="booking-section">
        <div class="shell booking-grid">
          <div class="booking-copy">
            <p class="eyebrow"><span class="eyebrow-dot"></span> TWO-SESSION BUILD-TOGETHER STARTER</p>
            <h1>Choose a time<br /><span>for session one.</span></h1>
            <p class="hero-lede">Request a preferred 90-minute start time for the two-session starter. I’ll confirm it or suggest another time, then send prep details and a payment link. We’ll schedule session two together.</p>
            <div class="booking-price"><div class="booking-price-total"><span>TWO-SESSION TOTAL</span><strong>$447</strong></div><div class="booking-price-details"><span class="booking-price-promise">No payment until I confirm your time</span><p>$225 reserves your place after confirmation; the remaining $222 is due before session two.</p></div></div>
          </div>
          <div class="booking-panel" id="booking-widget" data-booking-offer="two-session-starter">
            <div class="booking-panel-heading"><div class="booking-panel-progress"><span class="booking-panel-step">01</span><span>SESSION 1 OF 2 · 90 MIN</span></div><span class="booking-status">I’LL CONFIRM THE TIME</span></div>
            <div class="booking-panel-body">
              <h2>When should we get started?</h2>
              <p>Choose a preferred start time. I’ll confirm it or suggest another—your session isn’t booked until I confirm.</p>
              <form class="booking-request-form" id="booking-request-form">
                <fieldset class="booking-time-fields">
                  <legend>Preferred date and start time</legend>
                  <div class="booking-time-row">
                    <div class="booking-form-field"><label for="preferred-date">Date</label><input id="preferred-date" type="date" required /></div>
                    <div class="booking-form-field"><label for="preferred-start-time">Start time</label><input id="preferred-start-time" type="time" step="900" required /></div>
                  </div>
                </fieldset>
                <input id="preferred-time" name="preferred_time" type="hidden" />
                <p class="booking-timezone" id="booking-timezone">Time shown in your local timezone.</p>
                <div class="booking-form-row">
                  <div class="booking-form-field"><label for="booking-name">Name</label><input id="booking-name" name="name" autocomplete="name" type="text" required /></div>
                  <div class="booking-form-field"><label for="booking-email">Email</label><input id="booking-email" name="email" autocomplete="email" type="email" required /></div>
                </div>
                <div class="booking-form-field"><label for="booking-phone">Phone</label><input id="booking-phone" name="phone" autocomplete="tel" type="tel" required /></div>
                <input id="booking-time-zone-value" name="time_zone" type="hidden" />
                <input name="offer" type="hidden" value="Two-session starter · $447 total" />
                <input name="_subject" type="hidden" value="New two-session starter request" />
                <button class="button button-lime booking-submit" type="submit">Request this time <span aria-hidden="true">↗</span></button>
                <p class="booking-form-privacy">Your details go to Kevin’s inbox and are used only to follow up about this request.</p>
                <p class="booking-form-status form-status" id="booking-request-status" role="status" aria-live="polite" hidden></p>
                <p class="booking-form-question">Need to ask something first? <a href="${instagramDmHref}" target="_blank" rel="noopener noreferrer">DM Kevin on Instagram</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  app: `
    <main id="main">
      <section class="detail-hero app-detail-hero"><div class="shell detail-grid"><div class="detail-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> AI APP-BUILDING COACHING</p><h1>Got an app idea?<br /><span>Let’s start building it together—with AI.</span></h1><p class="hero-lede">Bring the idea you keep coming back to. We’ll make a practical start, and I’ll teach you the tools and methods to keep developing it yourself.</p><div class="hero-actions"><a class="button button-dark" href="booking.html#booking-widget">Request your first session time <span aria-hidden="true">↗</span></a><a class="text-link" href="contact.html?interest=app">Have a question?</a></div><aside class="detail-offer-summary" aria-label="Two-session starter price and what's included"><div class="detail-offer-heading"><div><span class="detail-offer-kicker">TWO-SESSION STARTER</span><strong>$447 <small>total</small></strong></div><span class="detail-offer-duration">2 × 90-minute sessions</span></div><p>Build on your real app idea and leave with AI workflows and problem-solving skills you can reuse.</p><div class="detail-offer-footer"><span>No payment until I confirm your time</span><a href="pricing.html">See payment details <span aria-hidden="true">↗</span></a></div></aside><p class="fine-print">You don’t need a perfect plan, a technical background, or the perfect prompt.</p></div><figure class="comic-frame"><img src="assets/app-coaching-comic-isometric.png" alt="An architectural five-panel comic showing a client and coach starting an app idea, learning during remote sessions, and continuing with confidence." /><figcaption>Start together. Learn the process. Keep building.</figcaption></figure></div></section>
      <section class="section"><div class="shell two-col-section"><div><p class="eyebrow">A REAL PROJECT, NOT A LECTURE</p><h2>Turn “someday” into a first step.</h2></div><div><p class="section-lede">We’ll focus on the most useful starting point for your app. That could mean clarifying the idea, mapping the first version, setting up an AI-assisted coding workflow, or working through an early feature together.</p><p>You’ll see how I break down a project, give AI the right context, guide its work, check the result, and recover when it goes sideways. Then you can use that process on the next step.</p></div></div></section>
      <section class="section soft-section"><div class="shell"><div class="section-heading"><div><p class="eyebrow">WHAT YOU’LL PRACTICE</p><h2>Useful skills for the next feature, too.</h2></div><p>We’ll tailor the work to your idea and starting point. These are examples, not a fixed curriculum.</p></div><div class="feature-grid"><article><span>01</span><h3>Shape a buildable idea</h3><p>Turn a broad concept into a clear next step and a small first version.</p></article><article><span>02</span><h3>Guide AI with context</h3><p>Learn how to brief AI, keep it focused, and work through code changes together.</p></article><article><span>03</span><h3>Review and troubleshoot</h3><p>Check what AI produces, spot issues, and get unstuck without starting over.</p></article></div></div></section>
      <section class="cta-section"><div class="shell cta-card"><div><p class="eyebrow eyebrow-light">BRING THE IDEA YOU CAN’T STOP THINKING ABOUT</p><h2>Let’s find a smart place to begin.</h2><p>Request a first-session time to start building your app and learn how to keep going with AI.</p></div><a class="button button-lime" href="booking.html#booking-widget">Request a time <span aria-hidden="true">↗</span></a></div></section>
    </main>
  `,
  website: `
    <main id="main">
      <section class="detail-hero"><div class="shell detail-grid"><div class="detail-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> AI WEBSITE-BUILDING COACHING</p><h1>Your website should be easier to <span>change, improve, and own.</span></h1><p class="hero-lede">We’ll build or improve your business website together, then I’ll teach you how to make everyday updates and keep moving with AI—without waiting on a developer for every small change.</p><div class="hero-actions"><a class="button button-dark" href="booking.html#booking-widget">Request your first session time <span aria-hidden="true">↗</span></a><a class="text-link" href="contact.html?interest=website">Have a question?</a></div><aside class="detail-offer-summary" aria-label="Two-session starter price and what's included"><div class="detail-offer-heading"><div><span class="detail-offer-kicker">TWO-SESSION STARTER</span><strong>$447 <small>total</small></strong></div><span class="detail-offer-duration">2 × 90-minute sessions</span></div><p>Improve your real website and learn to make everyday updates without waiting on a developer.</p><div class="detail-offer-footer"><span>No payment until I confirm your time</span><a href="pricing.html">See payment details <span aria-hidden="true">↗</span></a></div></aside></div><figure class="scene-frame"><img src="assets/website-coaching-cutaway.png" alt="A business owner editing a website in a bright architectural cutaway studio, with a laptop and separate monitor showing page layouts." /><figcaption><span class="caption-dot"></span> Your site · Your decisions · Skills you can reuse</figcaption></figure></div></section>
      <section class="section"><div class="shell two-col-section"><div><p class="eyebrow">FOR SMALL BUSINESSES &amp; INDEPENDENT OWNERS</p><h2>Stop putting the simple updates on hold.</h2></div><div><p class="section-lede">Maybe the site needs a refresh. Maybe you want to add a service, update a page, or finally fix the thing you’ve been meaning to change. We’ll work on the real site and use AI to help you learn the process.</p><p>I’ll show you how to make common changes, keep your content current, and recognize when a task needs deeper technical help. You build confidence and keep control of your website.</p></div></div></section>
      <section class="section soft-section"><div class="shell"><div class="section-heading"><div><p class="eyebrow">WE CAN WORK ON</p><h2>Make the next update feel manageable.</h2></div><p>We’ll choose a useful scope based on your current site and what you want to do next.</p></div><div class="feature-grid"><article><span>01</span><h3>Build or refresh</h3><p>Start a simple new site or improve the one you already have.</p></article><article><span>02</span><h3>Make everyday edits</h3><p>Practice updating copy, images, pages, services, and basic site content with AI.</p></article><article><span>03</span><h3>Know what’s safe to change</h3><p>Learn a repeatable workflow and when a job deserves specialist support.</p></article></div></div></section>
      <section class="cta-section"><div class="shell cta-card"><div><p class="eyebrow eyebrow-light">KEEP YOUR WEBSITE MOVING</p><h2>Bring the site you have—or the one you want.</h2><p>Request a first-session time to improve your website, then learn to make everyday changes yourself.</p></div><a class="button button-lime" href="booking.html#booking-widget">Request a time <span aria-hidden="true">↗</span></a></div></section>
    </main>
  `,
  students: `
    <main id="main">
      <section class="detail-hero student-hero"><div class="shell detail-grid"><div class="detail-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> FOR HIGH SCHOOL &amp; COLLEGE STUDENTS</p><h1>Curious about tech?<br /><span>Try it by making something real.</span></h1><p class="hero-lede">A low-pressure, hands-on way to explore AI, app building, coding, and prompting—before deciding whether technology is something you want to pursue.</p><div class="hero-actions"><a class="button button-dark" href="contact.html?interest=student#lead-form">Request a student session <span aria-hidden="true">↗</span></a><a class="text-link" href="pricing.html">See how pricing works</a></div><p class="fine-print">No experience required. Parents and guardians are welcome to reach out.</p></div><figure class="scene-frame"><img src="assets/student-coaching-cutaway.png" alt="A college-age student building an app in a vivid blue cutaway studio while a coach joins by video call." /><figcaption><span class="caption-dot"></span> Make a start · Learn by doing · See what clicks</figcaption></figure></div></section>
      <section class="section"><div class="shell two-col-section"><div><p class="eyebrow">A SMALL COMMITMENT. SKILLS THAT TRAVEL.</p><h2>Find out if building with tech feels like your thing.</h2></div><div><p class="section-lede">You don’t have to choose a major or have a career plan. Bring a curiosity or a small idea, and we’ll try building something with AI together.</p><p>Along the way, you can learn how to break down a problem, ask better questions, work with AI tools, understand basic code, and test what you make. Those skills can be useful in almost any future path.</p></div></div></section>
      <section class="section soft-section"><div class="shell student-split"><div><p class="eyebrow">WHAT A STUDENT CAN EXPLORE</p><h2>One project can answer a lot of questions.</h2><div class="student-list"><p><span>↗</span> What app building and coding actually feel like</p><p><span>↗</span> How to use AI as a creative and problem-solving tool</p><p><span>↗</span> How ideas become a simple working prototype</p><p><span>↗</span> Whether they’d like to keep exploring technology</p></div></div><aside class="parent-note"><span class="parent-note-mark">KPL</span><p class="eyebrow">FOR PARENTS &amp; GUARDIANS</p><h3>Let them try the work before choosing the path.</h3><p>It’s a practical introduction to building with AI, guided by an experienced software consultant. For students under 18, please have a parent or guardian start the conversation.</p><a class="text-link" href="contact.html?interest=student">Ask a question <span aria-hidden="true">↗</span></a></aside></div></section>
      <section class="cta-section"><div class="shell cta-card"><div><p class="eyebrow eyebrow-light">CURIOUS ENOUGH TO TRY?</p><h2>Pick a small idea. See where it goes.</h2><p>Students and parents can share what they’re curious about, even if the project isn’t fully formed yet.</p></div><a class="button button-lime" href="contact.html?interest=student#lead-form">Request a student session <span aria-hidden="true">↗</span></a></div></section>
    </main>
  `,
  pricing: `
    <main id="main">
      <section class="page-hero price-hero"><div class="shell price-hero-grid"><div class="price-hero-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> HANDS-ON AI BUILDING · REMOTE 1:1</p><h1>Build something real.<br /><span>Keep the skills.</span></h1><p class="hero-lede">Two focused sessions on your app idea, business website, or digital tool. We’ll make real progress together—and you’ll learn how to carry it forward without relying on a developer for every next step.</p><div class="price-hero-points"><span><i aria-hidden="true">✓</i> Your project, not a canned demo</span><span><i aria-hidden="true">✓</i> No ongoing commitment</span></div></div><aside class="price-summary" id="starter" aria-label="Two-session starter price and booking"><div class="price-summary-top"><p class="eyebrow">TWO-SESSION STARTER</p><span class="price-rate-badge">FOUNDING RATE · FIRST 5 CLIENTS</span></div><div class="price-summary-main"><div><span class="price-total-label">TOTAL INVESTMENT</span><p class="price-total"><span>$</span>447 <small>total</small></p></div><div class="price-session-count"><strong>3 hours</strong><span>private, live build time</span></div></div><div class="price-equivalent"><strong>$149 <span>/ live hour</span></strong><span>2 × 90-minute sessions</span></div><a class="button button-lime price-primary-cta" href="booking.html#booking-widget">Request your first session time <span aria-hidden="true">↗</span></a><p class="price-summary-note">No payment until I confirm your time. Then $225 to reserve; the remaining $222 is due before session two.</p><div class="price-assurance"><span aria-hidden="true">✳</span> You’ll know the time, scope, and price before any payment.</div></aside></div></section>
      <section class="section price-value-section"><div class="shell"><div class="section-heading price-value-heading"><div><p class="eyebrow">WHAT YOUR $447 INCLUDES</p><h2>Project progress.<br /><span>Skills you can reuse.</span></h2></div><p>Each session centers on something you want to make—with an experienced software builder working alongside you.</p></div><div class="price-value-grid"><article><span>01</span><h3>A clear first milestone</h3><p>We’ll shape the idea into a useful first slice and decide what’s realistic to tackle together.</p></article><article><span>02</span><h3>Hands-on building with Kevin</h3><p>Build on your real project. I’ll bring the AI workflow, explain key decisions, and step in when experience can unblock the work.</p></article><article><span>03</span><h3>A way to keep moving</h3><p>Leave knowing what we did, what to tackle next, and how to make progress without waiting on a developer for every change.</p></article></div></div></section>
      <section class="price-payment-section"><div class="shell price-payment-grid"><div class="price-payment-copy"><p class="eyebrow">STRAIGHTFORWARD PAYMENT</p><h2>One price.<br /><span>Split into two.</span></h2><p>Request a preferred time first. There’s nothing to pay until I confirm it with you.</p><div class="price-payment-facts"><span>Remote, one-to-one</span><span>Two 90-minute sessions</span><span>No automatic enrollment</span></div></div><div class="price-payment-card"><div class="payment-total-row"><span>Two-session total</span><strong>$447</strong></div><div class="payment-step-row"><span><i>01</i> After I confirm your time</span><strong>$225</strong></div><div class="payment-step-row"><span><i>02</i> Before session two</span><strong>$222</strong></div><a class="button button-dark" href="booking.html#booking-widget">Choose a first-session time <span aria-hidden="true">↗</span></a><p>Requesting a time is free. I’ll confirm it or suggest another time before you pay.</p></div></div></section>
      <section class="price-options-section"><div class="shell"><div class="price-continuation"><div class="price-continuation-copy"><p class="eyebrow">OPTIONAL · AFTER THE STARTER</p><h2>Want to keep building?</h2><p>Two 90-minute build blocks each month, plus up to two email questions (replies within two business days).</p></div><div class="price-continuation-price"><strong>$399</strong><span>per month</span></div><div class="price-continuation-action"><p>Opt in only if it’s useful. Monthly billing is recurring.</p><a class="text-link" href="contact.html?interest=build">Request ongoing support <span aria-hidden="true">↗</span></a></div></div><div class="price-student-note"><p><strong>For students:</strong> Sessions are shaped around the student’s age, interests, and project. A parent or guardian can <a href="contact.html?interest=student#lead-form">ask about a student session</a>.</p></div></div></section>
    </main>
  `,
  about: `
    <main id="main">
      <section class="about-hero"><div class="shell about-grid"><div class="about-intro"><p class="eyebrow"><span class="eyebrow-dot"></span> MEET KEVIN · SOFTWARE BUILDER, DAD, ALWAYS CURIOUS</p><h1>I’ve always been curious<br /><span>about how things work.</span></h1><p class="hero-lede">I’m Kevin—a software builder, dad, and lifelong tinkerer. I’ve spent thousands of hours trying AI on real projects, and I still love those “wait, it can do that?” moments.</p><div class="about-hero-actions"><a class="linkedin-profile-link" href="https://www.linkedin.com/in/kevinkirkland11/" target="_blank" rel="noopener noreferrer"><span class="linkedin-mark" aria-hidden="true">in</span><span><b>Connect on LinkedIn</b><small>Work history &amp; projects</small></span><span class="linkedin-arrow" aria-hidden="true">↗</span></a></div></div><aside class="about-profile" aria-label="Portrait of Kevin Kirkland"><figure class="about-portrait"><img src="assets/kevin-kirkland-02.jpg" width="2750" height="2133" fetchpriority="high" decoding="async" alt="Kevin smiling in a black-and-white portrait." /><figcaption><span class="about-portrait-dot" aria-hidden="true"></span><span><b>Kevin Kirkland</b><small>Dad · builder · lifelong tinkerer</small></span></figcaption></figure></aside></div></section>
      <section class="about-method-section">
        <div class="shell about-method-grid">
          <div class="about-method-copy">
            <p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span> WHAT I’VE LEARNED ALONG THE WAY</p>
            <h2>The part that still surprises me <span>about AI.</span></h2>
            <p class="section-lede">The tools keep changing, but the interesting part is the back-and-forth: give AI enough context, see what it gets right, catch what it misses, and figure out the next move. I’ve learned that by putting AI to work on real software projects—and I’m still finding new things it can do.</p>
            <p class="about-method-note"><span aria-hidden="true">✳</span> Still experimenting. Still surprised.</p>
          </div>
          <figure class="about-method-art">
            <svg viewBox="0 0 700 520" role="img" aria-labelledby="about-workflow-title about-workflow-desc">
              <title id="about-workflow-title">How Kevin experiments with AI on real projects</title>
              <desc id="about-workflow-desc">A question takes shape with context, an AI experiment produces a result, and a person reviews it before deciding what to try next.</desc>
              <defs>
                <linearGradient id="workflow-wash" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7e8c8"/><stop offset=".56" stop-color="#f7eee3"/><stop offset="1" stop-color="#e4edeb"/></linearGradient>
                <linearGradient id="workflow-screen" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffdf9"/><stop offset="1" stop-color="#f4f7f1"/></linearGradient>
                <filter id="workflow-shadow" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="14" stdDeviation="11" flood-color="#26364b" flood-opacity=".13"/></filter>
                <marker id="workflow-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1 1l5 3-5 3" fill="none" stroke="#bd694d" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></marker>
              </defs>
              <rect x="12" y="12" width="676" height="496" rx="34" fill="url(#workflow-wash)"/>
              <circle cx="568" cy="74" r="116" fill="#f4c746" opacity=".14"/>
              <circle cx="568" cy="74" r="86" fill="none" stroke="#bd694d" stroke-opacity=".15"/>
              <path d="M52 298c54-37 88-32 130-12s78-20 107-89 82-92 126-41 37 107 95 118 81-13 123-64" fill="none" stroke="#bd694d" stroke-opacity=".58" stroke-width="2" stroke-dasharray="2 9" stroke-linecap="round" marker-end="url(#workflow-arrow)"/>
              <circle cx="52" cy="298" r="6" fill="#e98137" stroke="#fffaf2" stroke-width="4"/>
              <g filter="url(#workflow-shadow)" transform="rotate(-5 141 180)">
                <rect x="57" y="95" width="168" height="164" rx="15" fill="#fffaf2" stroke="#d8c9b7" stroke-width="1.5"/>
                <path d="M57 128h168" stroke="#e7dbce"/>
                <circle cx="75" cy="112" r="3.5" fill="#bd694d"/><circle cx="88" cy="112" r="3.5" fill="#f4c746"/>
                <text x="74" y="151" fill="#738096" font-family="monospace" font-size="9" letter-spacing="1.4">A QUESTION</text>
                <path d="M77 174c18-13 28 10 44-1s28 8 45-3" fill="none" stroke="#bd694d" stroke-width="3" stroke-linecap="round"/>
                <path d="M77 192c20-7 37 6 58-2" fill="none" stroke="#253550" stroke-opacity=".56" stroke-width="3" stroke-linecap="round"/>
                <path d="M77 210c14-4 23 3 38 0" fill="none" stroke="#253550" stroke-opacity=".3" stroke-width="3" stroke-linecap="round"/>
                <rect x="167" y="197" width="38" height="36" rx="8" fill="#f9e8b9"/>
                <path d="M176 219l8-10 7 6 7-9" fill="none" stroke="#bd694d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <g filter="url(#workflow-shadow)">
                <rect x="249" y="62" width="230" height="254" rx="17" fill="url(#workflow-screen)" stroke="#cbd3d1" stroke-width="1.5"/>
                <path d="M249 100h230" stroke="#e5e2dc"/>
                <circle cx="268" cy="81" r="3.5" fill="#bd694d"/><circle cx="281" cy="81" r="3.5" fill="#f4c746"/><circle cx="294" cy="81" r="3.5" fill="#88a38a"/>
                <text x="270" y="126" fill="#758096" font-family="monospace" font-size="9" letter-spacing="1.4">AI EXPERIMENT · 01</text>
                <text x="270" y="159" fill="#16233b" font-family="Arial,sans-serif" font-size="19" font-weight="700">Try a direction.</text>
                <text x="270" y="182" fill="#16233b" font-family="Arial,sans-serif" font-size="19" font-weight="700">See what changes.</text>
                <rect x="270" y="201" width="187" height="34" rx="8" fill="#f5eee5"/>
                <circle cx="284" cy="218" r="4" fill="#e98137"/><path d="M296 214h67M296 222h111" stroke="#718096" stroke-width="3" stroke-linecap="round"/>
                <rect x="270" y="244" width="187" height="34" rx="8" fill="#eaf0eb"/>
                <circle cx="284" cy="261" r="4" fill="#89a78c"/><path d="M296 257h84M296 265h121" stroke="#718096" stroke-width="3" stroke-linecap="round"/>
                <path d="M441 113l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#f4c746" stroke="#bd694d" stroke-width="1.5"/>
              </g>
              <g filter="url(#workflow-shadow)" transform="rotate(4 553 313)">
                <rect x="467" y="224" width="177" height="191" rx="15" fill="#fffdf9" stroke="#c9d1cf" stroke-width="1.5"/>
                <path d="M467 258h177" stroke="#e6e1d9"/>
                <circle cx="483" cy="241" r="3.2" fill="#bd694d"/><circle cx="495" cy="241" r="3.2" fill="#f4c746"/><circle cx="507" cy="241" r="3.2" fill="#89a78c"/>
                <text x="484" y="280" fill="#758096" font-family="monospace" font-size="8.5" letter-spacing="1.2">HUMAN REVIEW</text>
                <rect x="484" y="296" width="142" height="55" rx="8" fill="#f5eee5"/>
                <path d="M494 327l10-11 10 7 11-13 17 16" fill="none" stroke="#bd694d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M550 315h62M550 323h48" stroke="#697990" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="493" cy="370" r="8" fill="#e7eee6" stroke="#8da78d"/>
                <path d="M489 370l3 3 5-6" fill="none" stroke="#477052" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M509 368h91M509 376h69" stroke="#738096" stroke-width="2.5" stroke-linecap="round"/>
                <rect x="484" y="388" width="59" height="16" rx="8" fill="#f4c746"/>
                <text x="496" y="399" fill="#16233b" font-family="monospace" font-size="6.5" letter-spacing=".6">TRY AGAIN</text>
              </g>
              <g transform="translate(61 360)">
                <path d="M0 52c2-21 15-32 34-32s32 11 34 32" fill="#dce7e6" stroke="#16233b" stroke-width="2"/>
                <circle cx="34" cy="15" r="14" fill="#d98a67" stroke="#16233b" stroke-width="2"/>
                <path d="M62 53c1-19 12-29 28-29s28 10 29 29" fill="#f4c746" stroke="#16233b" stroke-width="2"/>
                <circle cx="90" cy="12" r="13" fill="#c6825f" stroke="#16233b" stroke-width="2"/>
                <rect x="14" y="62" width="110" height="25" rx="12.5" fill="#fffaf2" stroke="#e2d7c9"/>
                <text x="37" y="78" fill="#34435a" font-family="monospace" font-size="8" letter-spacing="1">HUMAN IN LOOP</text>
              </g>
              <g transform="translate(478 76)">
                <circle cx="41" cy="38" r="31" fill="#fffaf2" stroke="#e3d4c3" stroke-width="1.5"/>
                <circle cx="41" cy="38" r="22" fill="#f4c746"/>
                <path d="M31 38l7 7 14-16" fill="none" stroke="#16233b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="70" cy="16" r="5" fill="#e98137"/>
              </g>
            </svg>
            <figcaption><span>QUESTION</span><i aria-hidden="true"></i><span>EXPERIMENT</span><i aria-hidden="true"></i><span>REVIEW</span><i aria-hidden="true"></i><span>CURIOSITY</span></figcaption>
          </figure>
        </div>
      </section>
      <section class="about-outside-section">
        <div class="shell about-outside-grid">
          <figure class="about-outside-photo">
            <div class="about-outside-photo-frame"><img src="assets/kevin-bike-ride.jpg" width="1440" height="1800" loading="lazy" decoding="async" alt="Kevin smiling on a mountain bike ride through a sunny meadow." /><span class="about-photo-tag"><i aria-hidden="true"></i> OUT FOR A RIDE</span></div>
            <figcaption>A little time outside keeps the curiosity going.</figcaption>
          </figure>
          <div class="about-outside-copy">
            <p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span> A LITTLE OFF-SCREEN</p>
            <h2>Usually outside, <span>camera close by.</span></h2>
            <p>When I’m not building, I’m happiest on a bike, on a ski hill, fishing, taking photos, or cheering on my kids. It’s how I recharge, stay curious, and come back ready for the next idea.</p>
            <div class="about-interest-list" aria-label="A few things Kevin enjoys">
              <span><i aria-hidden="true">🚵</i> Biking</span>
              <span><i aria-hidden="true">⛷️</i> Skiing</span>
              <span><i aria-hidden="true">🎣</i> Fishing</span>
              <span><i aria-hidden="true">📸</i> Photography</span>
              <span><i aria-hidden="true">👨‍👩‍👧‍👦</i> Family &amp; kids’ games</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  contact: `
    <main id="main">
      <section class="contact-section"><div class="shell contact-grid"><div class="contact-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> QUESTIONS &amp; PROJECTS</p><h1>Have a question?<br /><span>Let’s talk it through.</span></h1><p class="hero-lede">Want to check if the starter fits your idea, or ask about something else? Send Kevin a note and he’ll reply directly.</p><div class="contact-reassurance"><span>01</span><p>You don’t need a finished plan to get in touch.</p></div><div class="contact-reassurance"><span>02</span><p>You’ll know the scope, price, and next step before any work begins.</p></div><div class="contact-reassurance"><span>03</span><p>For a student under 18, a parent or guardian should submit the message.</p></div><p class="contact-instagram-link">Prefer Instagram? <a href="${instagramDmHref}" target="_blank" rel="noopener noreferrer">DM Kevin directly <span aria-hidden="true">↗</span></a></p></div><div class="form-card"><div class="form-heading"><p class="eyebrow">SEND KEVIN A NOTE</p><h2>What’s on your mind?</h2><p>Tell me what you’d like to build or ask a question.</p></div><form id="lead-form">
        <label for="lead-name">Your name <span>*</span></label><input id="lead-name" name="name" autocomplete="name" required placeholder="Name" />
        <label for="lead-email">Email address <span>*</span></label><input id="lead-email" name="email" type="email" autocomplete="email" required placeholder="you@example.com" />
        <label for="lead-interest">What would you like to work on?</label><select id="lead-interest" name="interest"><option value="">Choose one</option><option value="build">App, website, or digital tool</option><option value="app">App idea</option><option value="website">Business website</option><option value="student">Student exploration</option><option value="other">Something else / not sure yet</option></select>
        <label for="lead-message">What are you hoping to make?</label><textarea id="lead-message" name="message" rows="4" placeholder="A sentence or two is plenty."></textarea>
        <input type="hidden" name="_subject" value="New Kirkland Product Lab contact request" />
        <label class="consent-row"><input type="checkbox" name="permission" required /><span>It’s okay to contact me about this message. <b>*</b></span></label>
        <button class="button button-dark form-submit" type="submit">Send my question <span aria-hidden="true">↗</span></button>
        <p class="form-privacy">Your message is delivered to Kevin’s inbox through FormSubmit and used to reply to your inquiry.</p>
        <p class="form-status" id="form-status" aria-live="polite" hidden></p>
      </form></div></div></section>
    </main>
  `,
};
  return `${header()}${pageContent[page] || pageContent.home}${footer()}`;
}
