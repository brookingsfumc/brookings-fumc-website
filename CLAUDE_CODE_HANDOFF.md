# Brookings First UMC — Website Handoff Document
## For use with Claude Code

This document summarizes everything about the Brookings First United Methodist Church website so Claude Code can pick up exactly where we left off.

---

## Repository

- **GitHub repo:** `brookingsfumc/brookings-fumc-website` (confirm exact repo name)
- **Hosting:** Cloudflare Pages — auto-deploys within ~60 seconds of any push to main branch
- **Live preview URL:** `brookings-fumc.media-72f.workers.dev` (until domain cutover)
- **Production domain:** Not yet switched — current site still lives on old domain

---

## File Structure

```
brookings-fumc-website/
├── index.html          # Home page
├── about.html          # About / Staff page
├── watch.html          # Watch Online / Sermons page
├── events.html         # Events page (pulls from Google Calendar API)
├── give.html           # Giving page (Vanco + FAQ accordion)
├── contact.html        # Contact page (form + map)
├── connect.html        # Connect With Us page (Google Form embed)
├── style.css           # Single shared stylesheet for all pages
└── images/
    ├── FirstHorizontal-FullColor.svg    # Nav header logo (color)
    ├── FirstHorizontal-W.svg            # Footer logo (white, no address)
    ├── FirstHorizontal-Address-W.svg    # White logo with address (not currently used)
    ├── FirstHorizontal-Address-FullColor.svg  # Color logo with address (not currently used)
    ├── hero.mp4                         # Drone footage — home page hero background video
    ├── building.jpg                     # Church exterior — video poster + about page
    ├── congregation.jpg                 # Congregation photo — home page welcome section
    ├── pastor-jen.jpg                   # Pastor Jen Osterloh headshot
    ├── bunny-christie.jpg               # Bunny Christie headshot
    └── gretchen-knutson.jpg             # Gretchen Knutson headshot
```

---

## Church Information

| Field | Value |
|---|---|
| Full name | Brookings First United Methodist Church |
| Short name | Brookings First UMC |
| Address | 625 Fifth Street, Brookings, SD 57006 |
| Phone | 605-692-4345 |
| Email | office@brookingsmethodist.org |
| Website | www.brookingsmethodist.org |
| Tagline | At the Corner of Church and Community |
| Footer tagline | Open hearts. Open minds. Open doors. |

**Service Times:**
- 9:30 AM — Sunday Radio Broadcast
- 10:00 AM — Sunday Worship Service

**Office Hours:** Monday–Thursday, 8:30 AM – 4:30 PM

**Staff:**
- Pastor Jen Osterloh — Pastor
- Bunny Christie — Music Coordinator
- Gretchen Knutson — Education Coordinator

**Social Media:**
- Facebook: `facebook.com/FUMCBrookings`
- YouTube: `youtube.com/@brookingsfumc`
- Instagram: `instagram.com/brookingsfumc`

---

## Brand / Design System

### Colors (CSS Variables in style.css)

```css
--red: #7f1117;          /* Primary — buttons, hero, accents */
--red-dark: #5a0c10;     /* Hover states */
--red-bright: #ee373d;   /* Accent only */
--teal: #005280;         /* Secondary — service banner, card tops, links */
--teal-dark: #003d60;    /* Teal hover */
--gold: #f2c777;         /* Eyebrow labels, footer headings */
--gold-dark: #a5753f;    /* Brown accent */
--tan: #cbbca3;          /* Staff photo borders */
--cream: #faf7f2;        /* Light section backgrounds */
--warm-white: #fffdf9;   /* Page background */
--text-dark: #1C1A19;
--text-mid: #4A4542;
--text-light: #7A7470;
--border: #E5DDD5;
```

### Fonts

```css
--font-display: 'Oswald', 'Arial Narrow', Arial, sans-serif;
--font-body: 'Gentium Basic', Georgia, serif;
```

Loaded via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Gentium+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
```

**Usage per style guide:**
- **Oswald** — all headings (h1–h4), nav links, buttons, labels, contact info, eyebrows
- **Gentium Basic** — body text, paragraphs

### Typography Scale

```css
h1: clamp(2.4rem, 6vw, 4rem) — weight 700
h2: clamp(1.8rem, 3.5vw, 2.6rem) — weight 600
h3: 1.4rem — weight 600
h4: 1.15rem — weight 500
body: 16px base
```

---

## Page-by-Page Notes

### index.html — Home Page
- **Hero:** Full-screen background video (`images/hero.mp4`), with `images/building.jpg` as poster fallback. Dark red gradient overlay. Respects `prefers-reduced-motion`.
- **Hero headline:** "At the Corner of Church and Community"
- **Service banner:** Teal bar with 4 items — Radio Broadcast, Worship, Watch Online, Address
- **Floating Quick Links button:** Fixed bottom-right corner. Red on desktop, teal on mobile. Expands upward to show 4 links. Links include Give Online (Vanco), VBS Sign-Up (`#` placeholder), Slush Booth Sign-Up (`#` placeholder), Watch Online. **VBS and Slush Booth links need real URLs when available.**
- **Welcome section:** Two-column — text left, `congregation.jpg` right
- **Feature cards:** 4 cards — Worship, Grow, Serve, Support
- **Events preview:** Live from Google Calendar API (next 3 events)
- **All "Connect With Us" buttons** link to `connect.html`

### about.html — About
- Story section with `building.jpg`
- Core beliefs — 3 cards
- Staff section — 3 cards with real headshots, **bios still need to be written**

### watch.html — Watch Online
- YouTube live embed (needs real channel UC ID — currently using handle which may not work for live stream)
- Sermon archive list — **dates, titles, scripture references all need real content**
- YouTube channel: `youtube.com/@brookingsfumc`

### events.html — Events
- **Fully dynamic** — pulls from Google Calendar API
- API Key: `AIzaSyCK4vyJoMfocN1YgD2vHpXxAtMEePKIf5M`
- Calendar ID: `m6p861t5evod3mp0lctjsou3s4@group.calendar.google.com`
- Shows up to 20 upcoming events
- Falls back gracefully if API unavailable
- "Add to calendar" link on each event
- "View Full Calendar" button at bottom

### give.html — Give
- **4 giving methods:** Online (Vanco), ACH, Vanco Mobile App, In-Person/Mail
- **Vanco URL:** `https://secure.myvanco.com/YPEP/home`
- **PayPal link** was removed — Vanco only
- **FAQ accordion** — 6 questions, smooth expand/collapse animation
- "Where Your Gift Goes" — 3 cards

### contact.html — Contact
- Two-column: contact info + form
- **Contact form needs Formspree** — `action="YOUR_FORM_URL"` is still a placeholder. Sign up at formspree.io and replace with real endpoint.
- Google Maps embed
- Office hours listed

### connect.html — Connect With Us
- Google Form embedded: `https://docs.google.com/forms/d/e/1FAIpQLSfjm4_J18TNltY75spb9A2sdYjD-NUCRdQHHZI4Z3wPRyhbBw/viewform?embedded=true`
- Form height set to 2518px (matches Google's natural form height)

---

## Shared Components

### Navigation (all pages)
- Sticky header, white background, red bottom border
- Logo: `images/FirstHorizontal-FullColor.svg`
- Nav links: Home, About, Watch Online, Events, Give, Contact, Connect With Us
- "Connect With Us" button (red pill) — links to `connect.html`
- Nav collapses on screens < 900px (no mobile hamburger menu yet — **potential future improvement**)

### Footer (all pages — identical)
4-column grid:
1. **Brand** — white logo (`FirstHorizontal-W.svg`), tagline, social icons (Facebook, YouTube, Instagram)
2. **Quick Links** — nav links
3. **Contact** — address, phone, email, office hours
4. **Find Us** — embedded Google Map + Get Directions link

Footer background: `#1a1a1a` (dark charcoal), red top border

### Google Fonts
Must be included in `<head>` of every page — **this link was accidentally corrupted once before, be careful with find/replace on this line:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Gentium+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
```

---

## Third-Party Integrations

| Service | Purpose | URL / ID |
|---|---|---|
| Vanco | Online giving | `secure.myvanco.com/YPEP/home` |
| Google Calendar API | Events page | Key: `AIzaSyCK4vyJoMfocN1YgD2vHpXxAtMEePKIf5M` |
| Google Calendar | Events feed | ID: `m6p861t5evod3mp0lctjsou3s4@group.calendar.google.com` |
| Google Forms | Connect With Us page | See connect.html embed src |
| Google Maps | Footer + contact page | Query-based embed (no API key needed) |
| YouTube | Watch Online page | `@brookingsfumc` |
| Formspree | Contact form | **Not yet set up — placeholder in contact.html** |
| Vanco Faith App | Mobile giving | App Store + Google Play links in give.html |

---

## Outstanding To-Dos

These items still need real content or setup:

- [ ] **Staff bios** — about.html has placeholder text for all three staff members
- [ ] **Sermon content** — watch.html has placeholder titles, dates, scripture
- [ ] **YouTube live embed** — needs real UC channel ID (not handle) for live stream
- [ ] **Formspree** — contact form not yet functional; needs endpoint URL
- [ ] **VBS Sign-Up link** — placeholder `#` in Quick Links FAB on home page
- [ ] **Slush Booth Sign-Up link** — placeholder `#` in Quick Links FAB on home page
- [ ] **Domain cutover** — switch brookingsmethodist.org DNS to Cloudflare Pages when ready
- [ ] **API key domain restriction** — add real domain to Google Cloud API key restrictions before cutover
- [ ] **Mobile nav** — no hamburger menu on small screens yet; nav links hidden below 900px

---

## Known Issues / Watch-Outs

- **Google Fonts link** — was corrupted once by a bad sed find/replace. Always edit this line carefully. The correct single line is shown above.
- **Inline styles override CSS** — learned the hard way with the FAB button. If something isn't responding to a CSS class change, check for inline `style=""` attributes on the element.
- **YouTube live embed** — `live_stream?channel=` requires the `UC...` channel ID, not the `@handle`. The handle works for regular video embeds but not live streams.
- **API key visibility** — the Google Calendar API key is visible in events.html source. This is acceptable because it's restricted to the church's domain in Google Cloud Console. Confirm domain restriction is set before going live.

---

## Style Conventions

- All headings use `text-transform: uppercase` via CSS — write them in normal case in HTML
- Card top borders use `--teal` (3px), not `--red`, except staff cards and feature cards which use `--red`
- Eyebrow labels (small uppercase text above headings) use `--teal` color on light backgrounds, `--gold` on dark backgrounds
- Buttons all use Oswald font, uppercase, `letter-spacing: 0.08em`
- Border radius is consistently `2px` (very subtle) throughout — not rounded
- The site uses no JavaScript frameworks — plain vanilla JS only
