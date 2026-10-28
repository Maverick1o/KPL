const navItems = [
  ["App coaching", "app-building.html", "app"],
  ["Website coaching", "website-building.html", "website"],
  ["Students", "student-coaching.html", "students"],
  ["Pricing", "pricing.html", "pricing"],
  ["About", "about.html", "about"],
];

const page = document.body.dataset.page || "home";
const instagramDmHref = "https://ig.me/m/kirkland_product_lab";
const currentNav = page === "home" || page === "contact" ? "" : page;
const primaryRequestHref = page === "students"
  ? "contact.html?interest=student&offer=student#lead-form"
  : "booking.html?offer=starter#booking-widget";
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
            <h1><span class="title-lead">Bring your</span><span class="title-word">idea.</span><span class="title-follow">We’ll build it together.</span></h1>
            <p class="hero-lede">I’ll teach you how to keep building with AI on your own.</p>
            <ul class="project-types" aria-label="Project examples"><li>Apps</li><li>Websites</li><li>Digital tools</li><li>Automations</li></ul>
            <div class="hero-actions"><a class="button button-lime" href="#offers">Choose a project <span aria-hidden="true">↓</span></a><a class="text-link" href="about.html">Meet Kevin <span aria-hidden="true">↗</span></a></div>
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

      <section class="cta-section home-starter-cta" id="starter-offer" data-parallax-bg="0.02"><div class="shell cta-card home-starter-card" data-parallax="0.018"><div class="home-starter-copy"><p class="eyebrow eyebrow-light">TWO-SESSION STARTER · FOUNDING RATE, FIRST 5 CLIENTS</p><h2>Make a real start in two sessions.</h2><p>We’ll build your app, website, or digital tool together—and you’ll leave with the skills to keep going. No ongoing commitment.</p><p class="home-starter-details"><strong>$447 total</strong><span aria-hidden="true">·</span><span>Two 90-minute sessions</span><span aria-hidden="true">·</span><span>$225 after time confirmation · $222 before session two</span></p></div><div class="home-starter-actions"><a class="button button-lime" href="booking.html?offer=starter#booking-widget">Request your first session time <span aria-hidden="true">↗</span></a><a class="text-link" href="${instagramDmHref}" target="_blank" rel="noopener noreferrer">Have a question? DM Kevin on Instagram <span aria-hidden="true">↗</span></a></div></div></section>
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
            <div class="booking-price"><div><span>TWO-SESSION TOTAL</span><strong>$447</strong></div><p>No payment now. After I confirm your time, $225 reserves your place; the remaining $222 is due before session two.</p></div>
          </div>
          <div class="booking-panel" id="booking-widget" data-booking-offer="two-session-starter">
            <div class="booking-panel-heading"><span>REQUEST YOUR FIRST SESSION</span><span class="booking-status">KEVIN WILL CONFIRM</span></div>
            <div class="booking-panel-body">
              <h2>When should we get started?</h2>
              <p>Choose a date and time that works for you. This is a request, not a confirmed appointment.</p>
              <form class="booking-request-form" id="booking-request-form">
                <label class="booking-field booking-field-time" for="preferred-time">Preferred date and start time</label>
                <input id="preferred-time" name="preferred_time" type="datetime-local" required />
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
                <p class="booking-form-privacy">Your details are delivered to Kevin’s inbox through FormSubmit and used to follow up about this request.</p>
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
      <section class="detail-hero app-detail-hero"><div class="shell detail-grid"><div class="detail-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> AI APP-BUILDING COACHING</p><h1>Got an app idea?<br /><span>Let’s start building it together—with AI.</span></h1><p class="hero-lede">Bring the idea you keep coming back to. We’ll make a practical start, and I’ll teach you the tools and methods to keep developing it yourself.</p><div class="hero-actions"><a class="button button-dark" href="booking.html?offer=starter&amp;interest=app#booking-widget">Request your first session time <span aria-hidden="true">↗</span></a><a class="text-link" href="contact.html?interest=app">Have a question?</a></div><p class="fine-print">You don’t need a perfect plan, a technical background, or the perfect prompt.</p></div><figure class="comic-frame"><img src="assets/app-coaching-comic-isometric.png" alt="An architectural five-panel comic showing a client and coach starting an app idea, learning during remote sessions, and continuing with confidence." /><figcaption>Start together. Learn the process. Keep building.</figcaption></figure></div></section>
      <section class="section"><div class="shell two-col-section"><div><p class="eyebrow">A REAL PROJECT, NOT A LECTURE</p><h2>Turn “someday” into a first step.</h2></div><div><p class="section-lede">We’ll focus on the most useful starting point for your app. That could mean clarifying the idea, mapping the first version, setting up an AI-assisted coding workflow, or working through an early feature together.</p><p>You’ll see how I break down a project, give AI the right context, guide its work, check the result, and recover when it goes sideways. Then you can use that process on the next step.</p></div></div></section>
      <section class="section soft-section"><div class="shell"><div class="section-heading"><div><p class="eyebrow">WHAT YOU’LL PRACTICE</p><h2>Useful skills for the next feature, too.</h2></div><p>We’ll tailor the work to your idea and starting point. These are examples, not a fixed curriculum.</p></div><div class="feature-grid"><article><span>01</span><h3>Shape a buildable idea</h3><p>Turn a broad concept into a clear next step and a small first version.</p></article><article><span>02</span><h3>Guide AI with context</h3><p>Learn how to brief AI, keep it focused, and work through code changes together.</p></article><article><span>03</span><h3>Review and troubleshoot</h3><p>Check what AI produces, spot issues, and get unstuck without starting over.</p></article></div></div></section>
      <section class="cta-section"><div class="shell cta-card"><div><p class="eyebrow eyebrow-light">BRING THE IDEA YOU CAN’T STOP THINKING ABOUT</p><h2>Let’s find a smart place to begin.</h2><p>Request a first-session time to start building your app and learn how to keep going with AI.</p></div><a class="button button-lime" href="booking.html?offer=starter&amp;interest=app#booking-widget">Request a time <span aria-hidden="true">↗</span></a></div></section>
    </main>
  `,
  website: `
    <main id="main">
      <section class="detail-hero"><div class="shell detail-grid"><div class="detail-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> AI WEBSITE-BUILDING COACHING</p><h1>Your website should be easier to <span>change, improve, and own.</span></h1><p class="hero-lede">We’ll build or improve your business website together, then I’ll teach you how to make everyday updates and keep moving with AI—without waiting on a developer for every small change.</p><div class="hero-actions"><a class="button button-dark" href="booking.html?offer=starter&amp;interest=website#booking-widget">Request your first session time <span aria-hidden="true">↗</span></a><a class="text-link" href="contact.html?interest=website">Have a question?</a></div></div><figure class="scene-frame"><img src="assets/website-coaching-cutaway.png" alt="A business owner editing a website in a bright architectural cutaway studio, with a laptop and separate monitor showing page layouts." /><figcaption><span class="caption-dot"></span> Your site · Your decisions · Skills you can reuse</figcaption></figure></div></section>
      <section class="section"><div class="shell two-col-section"><div><p class="eyebrow">FOR SMALL BUSINESSES &amp; INDEPENDENT OWNERS</p><h2>Stop putting the simple updates on hold.</h2></div><div><p class="section-lede">Maybe the site needs a refresh. Maybe you want to add a service, update a page, or finally fix the thing you’ve been meaning to change. We’ll work on the real site and use AI to help you learn the process.</p><p>I’ll show you how to make common changes, keep your content current, and recognize when a task needs deeper technical help. You build confidence and keep control of your website.</p></div></div></section>
      <section class="section soft-section"><div class="shell"><div class="section-heading"><div><p class="eyebrow">WE CAN WORK ON</p><h2>Make the next update feel manageable.</h2></div><p>We’ll choose a useful scope based on your current site and what you want to do next.</p></div><div class="feature-grid"><article><span>01</span><h3>Build or refresh</h3><p>Start a simple new site or improve the one you already have.</p></article><article><span>02</span><h3>Make everyday edits</h3><p>Practice updating copy, images, pages, services, and basic site content with AI.</p></article><article><span>03</span><h3>Know what’s safe to change</h3><p>Learn a repeatable workflow and when a job deserves specialist support.</p></article></div></div></section>
      <section class="cta-section"><div class="shell cta-card"><div><p class="eyebrow eyebrow-light">KEEP YOUR WEBSITE MOVING</p><h2>Bring the site you have—or the one you want.</h2><p>Request a first-session time to improve your website, then learn to make everyday changes yourself.</p></div><a class="button button-lime" href="booking.html?offer=starter&amp;interest=website#booking-widget">Request a time <span aria-hidden="true">↗</span></a></div></section>
    </main>
  `,
  students: `
    <main id="main">
      <section class="detail-hero student-hero"><div class="shell detail-grid"><div class="detail-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> FOR HIGH SCHOOL &amp; COLLEGE STUDENTS</p><h1>Curious about tech?<br /><span>Try it by making something real.</span></h1><p class="hero-lede">A low-pressure, hands-on way to explore AI, app building, coding, and prompting—before deciding whether technology is something you want to pursue.</p><div class="hero-actions"><a class="button button-dark" href="contact.html?interest=student&amp;offer=student#lead-form">Request a student session <span aria-hidden="true">↗</span></a><a class="text-link" href="pricing.html">See how pricing works</a></div><p class="fine-print">No experience required. Parents and guardians are welcome to reach out.</p></div><figure class="scene-frame"><img src="assets/student-coaching-cutaway.png" alt="A college-age student building an app in a vivid blue cutaway studio while a coach joins by video call." /><figcaption><span class="caption-dot"></span> Make a start · Learn by doing · See what clicks</figcaption></figure></div></section>
      <section class="section"><div class="shell two-col-section"><div><p class="eyebrow">A SMALL COMMITMENT. SKILLS THAT TRAVEL.</p><h2>Find out if building with tech feels like your thing.</h2></div><div><p class="section-lede">You don’t have to choose a major or have a career plan. Bring a curiosity or a small idea, and we’ll try building something with AI together.</p><p>Along the way, you can learn how to break down a problem, ask better questions, work with AI tools, understand basic code, and test what you make. Those skills can be useful in almost any future path.</p></div></div></section>
      <section class="section soft-section"><div class="shell student-split"><div><p class="eyebrow">WHAT A STUDENT CAN EXPLORE</p><h2>One project can answer a lot of questions.</h2><div class="student-list"><p><span>↗</span> What app building and coding actually feel like</p><p><span>↗</span> How to use AI as a creative and problem-solving tool</p><p><span>↗</span> How ideas become a simple working prototype</p><p><span>↗</span> Whether they’d like to keep exploring technology</p></div></div><aside class="parent-note"><span class="parent-note-mark">KPL</span><p class="eyebrow">FOR PARENTS &amp; GUARDIANS</p><h3>Let them try the work before choosing the path.</h3><p>It’s a practical introduction to building with AI, guided by an experienced software consultant. For students under 18, please have a parent or guardian start the conversation.</p><a class="text-link" href="contact.html?interest=student">Ask a question <span aria-hidden="true">↗</span></a></aside></div></section>
      <section class="cta-section"><div class="shell cta-card"><div><p class="eyebrow eyebrow-light">CURIOUS ENOUGH TO TRY?</p><h2>Pick a small idea. See where it goes.</h2><p>Students and parents can share what they’re curious about, even if the project isn’t fully formed yet.</p></div><a class="button button-lime" href="contact.html?interest=student&amp;offer=student#lead-form">Request a student session <span aria-hidden="true">↗</span></a></div></section>
    </main>
  `,
  pricing: `
    <main id="main">
      <section class="page-hero pricing-hero"><div class="shell pricing-hero-grid"><div class="page-hero-inner"><p class="eyebrow"><span class="eyebrow-dot"></span> HANDS-ON AI BUILDING · REMOTE 1:1</p><h1>Build your idea.<br /><span>Learn to keep going.</span></h1><p class="hero-lede">We’ll work on your real app idea or business website. I’ll teach you my AI workflow, build alongside you, and take the lead on a piece when that helps. You leave with real progress and a better sense of how to carry it forward.</p><div class="hero-actions"><a class="button button-dark" href="#starter">See the starter plan <span aria-hidden="true">↓</span></a><a class="text-link" href="booking.html?offer=starter#booking-widget">Request a time <span aria-hidden="true">↗</span></a></div><p class="pricing-capacity"><span aria-hidden="true">✳</span> You’ll work directly with me from the first idea through the build.</p></div><div class="pricing-hero-art" aria-label="The process: bring an idea, build it together, continue with confidence"><div class="process-kicker">THE BUILD-TOGETHER APPROACH</div><div class="process-step"><span>01</span><div><b>Bring the idea</b><small>App, website, or useful improvement</small></div></div><div class="process-line"><i></i><i></i><i></i></div><div class="process-step process-step-active"><span>02</span><div><b>Build it together</b><small>I teach, guide, and build with you</small></div></div><div class="process-line process-line-offset"><i></i><i></i><i></i></div><div class="process-step process-step-last"><span>03</span><div><b>Keep moving</b><small>Leave with skills you can reuse</small></div></div><div class="process-caption">Your project moves forward.<br /><strong>Your capability does too.</strong></div></div></div></section>
      <section class="section pricing-section" id="starter"><div class="shell"><div class="section-heading pricing-heading"><div><p class="eyebrow">START HERE</p><h2>Make a real start in <span>two sessions.</span></h2></div><p>One focused starter for app ideas and business websites. We’ll choose a useful first slice together—not pretend your whole product fits into one package.</p></div>
        <div class="pricing-offer-grid">
          <article class="starter-card"><div class="starter-card-top"><span class="offer-badge">FOUNDING-CLIENT RATE · FIRST 5 CLIENTS</span><span class="starter-format">REMOTE · 2 × 90 MIN</span></div><div class="starter-price-row"><div><p class="starter-label">TWO-SESSION BUILD TOGETHER STARTER</p><p class="starter-price"><span>$</span>447 <small>total</small></p></div><p class="starter-price-note">A real project, live work, and practical skills to keep building.</p></div><div class="starter-includes"><div><span>01</span><div><h3>Start with your actual idea</h3><p>Clarify the first useful version, choose a good starting point, and get the project moving.</p></div></div><div><span>02</span><div><h3>Build while you learn</h3><p>See how I brief AI, guide its work, and check what it produces. You can drive, I can demo, or we can switch as we go.</p></div></div><div><span>03</span><div><h3>Leave ready for the next step</h3><p>We’ll capture what we built, what you learned, and a practical path for continuing on your own.</p></div></div></div><div class="starter-footer"><p><b>Request a time for session one.</b> If confirmed, I’ll send a $225 payment link; the remaining $222 is due before session two.</p><a class="button button-lime" href="booking.html?offer=starter#booking-widget">Request a time <span aria-hidden="true">↗</span></a></div></article>
          <article class="monthly-card"><div class="monthly-top"><span class="monthly-kicker">AFTER YOUR STARTER</span><span class="monthly-mark" aria-hidden="true">↗</span></div><h3>Keep the build moving.</h3><p class="monthly-price"><strong>$399</strong><span>/ month</span></p><p class="monthly-intro">A flexible build partnership for the next stretch of your project.</p><ul class="monthly-list"><li><b>Two 90-minute build blocks each month</b><span>Use them for live coaching and building together, or have me take on a defined task and walk you through it.</span></li><li><b>Limited between-session help</b><span>Up to two quick email questions each month, with a reply within two business days.</span></li><li><b>Keep the knowledge with the project</b><span>Implementation time comes from your monthly build blocks, so the work stays clear and bounded.</span></li></ul><p class="monthly-footnote">Opt in after the starter. Monthly billing is recurring; no surprise enrollment.</p><a class="button button-dark" href="contact.html?interest=build">Ask about continuing <span aria-hidden="true">↗</span></a></article>
        </div>
        <div class="capacity-band"><div class="capacity-icon" aria-hidden="true">5</div><div><p class="eyebrow">A SMALLER CLIENT LIST, MORE HANDS-ON TIME</p><h3>Up to five new project starts each month.</h3><p>I’m a one-man show, so availability is limited. I cap new starts at five a month to stay involved in the actual build.</p></div><a class="text-link" href="booking.html?offer=starter#booking-widget">Request a time <span aria-hidden="true">↗</span></a></div>
      </div></section>
      <section class="section pricing-steps-section"><div class="shell"><div class="section-heading"><div><p class="eyebrow">SIMPLE, CLEAR, NO MYSTERY</p><h2>From request to building.</h2></div><p>Choose a preferred time for session one. I’ll confirm it directly, then we’ll plan session two together.</p></div><div class="pricing-steps"><article><span>01</span><h3>Request a first-session time</h3><p>Choose a preferred 90-minute date and time that works for you.</p></article><article><span>02</span><h3>Confirm it together</h3><p>I’ll reply to confirm or suggest another time, answer questions, and send the $225 payment link.</p></article><article><span>03</span><h3>Build, learn, keep going</h3><p>We’ll plan session two together. The remaining $222 is due before that session.</p></article></div><div class="student-pricing-note"><div><p class="eyebrow">FOR STUDENTS &amp; PARENTS</p><h3>Exploring tech with a student?</h3><p>Student sessions are shaped around age, interest, and project. A parent or guardian can request a session directly.</p></div><a class="text-link" href="contact.html?interest=student&amp;offer=student#lead-form">Request a student session <span aria-hidden="true">↗</span></a></div></div></section>
    </main>
  `,
  about: `
    <main id="main">
      <section class="about-hero"><div class="shell about-grid"><div><p class="eyebrow eyebrow-light"><span class="eyebrow-dot"></span> ABOUT KEVIN</p><h1>I’ve spent three years putting AI to work.<br /><span>Now I’m sharing what I’ve learned.</span></h1><p class="hero-lede">I’m a software consultant, an active AI builder, and a believer that the best way to learn is to make something you care about.</p></div><div class="about-stat-card"><div><strong>20</strong><span>years building software</span></div><div><strong>50+</strong><span>apps and SaaS products</span></div><div><strong>3</strong><span>years working hands-on with AI</span></div></div></div></section>
      <section class="section"><div class="shell about-story"><div class="story-label"><p class="eyebrow">THE SHORT VERSION</p><div class="story-line"></div></div><div><h2>Real projects taught me what works—and what doesn’t.</h2><p class="section-lede">For the past three years, I’ve been exploring AI tools as they evolve and putting them to work on real software projects. Through a lot of trial and error, I’ve developed practical ways to give AI useful context, guide its work, catch mistakes, and keep a project moving.</p><p>I’ve spent 20 years building software, and I’ve personally built or helped teams build more than 50 apps and SaaS products. I run a software consulting business today. Coaching is something I chose to add because I enjoy sharing the methods I’ve learned and helping people get capable with tools that can open up new possibilities.</p><p>My goal isn’t to take your idea away and disappear with it. We’ll make a useful start together, and I’ll teach you how to keep developing it—with support available when you want a hand.</p><a class="button button-dark" href="booking.html?offer=starter#booking-widget">Request your first session time <span aria-hidden="true">↗</span></a><p class="about-question-link"><a class="text-link" href="contact.html">Have a question? Ask Kevin <span aria-hidden="true">↗</span></a></p></div></div></section>
      <section class="quote-band"><div class="shell"><span class="quote-mark">“</span><blockquote>Learn by building something that matters to you.</blockquote><p>That’s the heart of Kirkland Product Lab.</p></div></section>
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

document.querySelector("#site").innerHTML = `${header()}${pageContent[page] || pageContent.home}${footer()}`;
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
