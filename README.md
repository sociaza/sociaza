# Sociaza — Official Public Website

The official, production-ready static website for **Sociaza** (`https://sociaza.online`), a social publishing platform currently in development.

Designed with a restrained, confident aesthetic inspired by modern craft-focused product websites (Linear, Raycast, Framer), avoiding generic SaaS tropes, purple gradient backgrounds, or exaggerated animations.

---

## 1. Project Overview & Architecture

- **Domain:** `https://sociaza.online`
- **Hosting Target:** GitHub Pages via repository `sociaza/sociaza` (published from `main` branch, `/(root)` directory)
- **Tech Stack:**
  - Semantic HTML5
  - Modern, responsive CSS3 (custom properties, fluid clamp scales, CSS Grid, Flexbox)
  - Vanilla JavaScript (accessible mobile drawer, keyboard traps, smooth navigation)
  - Zero build steps, zero node_modules, zero external runtime dependencies

---

## 2. Directory Structure

```
/
├── index.html                   # Main homepage (Hero, Mockup, Product Pillars, Status, About, Footer)
├── privacy/
│   └── index.html               # Privacy Policy (Single-user local SQLite architecture, Etsy API v3, Pinterest API v5)
├── assets/
│   ├── css/
│   │   └── styles.css           # Complete design system & responsive styling
│   ├── js/
│   │   └── main.js              # Accessible mobile menu, smooth scroll, intersection observer
│   └── images/
│       ├── sociaza-logo.svg     # Vector wordmark
│       └── sociaza-mark.svg     # Brand emblem / mark
├── favicon.svg                  # SVG favicon with signature mark & forest green accent
├── CNAME                        # GitHub Pages custom domain configuration (`sociaza.online`)
├── robots.txt                   # Search crawler directives referencing sitemap
├── sitemap.xml                  # Canonical XML sitemap for Google/Bing indexing
└── README.md                    # Documentation & deployment guide
```

---

## 3. Design Decisions & Visual Language

- **Palette:**
  - Background: Warm off-white (`#F7F7F4`), creating a soft, editorial canvas.
  - Surface: Pure white (`#FFFFFF`) for crisp interface cards and elevated layers.
  - Typography: Deep charcoal (`#1F201E`) for sharp legibility without the harshness of pure black.
  - Secondary Text: Refined muted slate (`#5F615D` / `#8A8C87`).
  - Accent: Restrained forest green (`#234E38`), giving an organic, grounded character.
  - Borders: Subtle warm grey (`#E6E5DF`), avoiding heavy drop shadows.
- **Typography:**
  - Primary font: `Manrope` (with `Inter` and system-ui fallbacks: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).
  - Generous line heights (1.55 – 1.7) and structured hierarchy with negative letter-spacing for modern editorial balance.
- **Wordmark:**
  - All lowercase `sociaza.` with an intentional geometric rhythm and an accent dot in forest green.
  - Reusable as an SVG mark, favicon, and navbar/footer brand signature.
- **Interactive UI Preview Mockup:**
  - Built purely in semantic CSS and SVG.
  - Authentic visualization of Sociaza's 3 core pillars (Plan, Organize, Publish) featuring a local SQLite catalog explorer, content composer, timeline cadence preview, and pre-flight checklist.

---

## 4. Privacy Policy & Compliance Boundaries

The privacy document at `/privacy/index.html` has been written specifically to support the **Pinterest Developer Application Review** while maintaining strict truthfulness:

- **Single-User & Local Storage:** Affirms that Sociaza is a locally hosted web application running in a browser, storing data in SQLite on the user's hard drive.
- **No Cloud Servers:** Explicitly clarifies that no centralized cloud database, remote sync service, or SaaS multi-tenancy exists.
- **Etsy Integration:** Discloses the use of official Etsy Open API v3 with read-only scopes (`shops_r`, `listings_r`). Explicitly notes that buyer personal information and order transactions are **never** retrieved.
- **Pinterest Integration:** Accurately distinguishes current state (in development) from future live publishing. Clarifies that real Pinterest accounts are not yet connected, and OAuth tokens are designed to be encrypted at rest on the local device.
- **No Independent Security Audit:** Honestly discloses that the software has not undergone independent third-party audits.

---

## 5. Contact & Operator Information

- **Official Inquiries:** All project, technical, and privacy correspondence is directed to:
  `contact@sociaza.online`
- **Development Status:** The project is operated by the independent Sociaza Development Team.
- **Legal Entity / Jurisdiction:** Sociaza is currently in private, early-stage development and is not yet registered as a formal corporate entity. If commercial registration occurs, the entity name and registered address will be appended to Section 9 of the Privacy Policy.

---

## 6. How to Publish to GitHub Pages

### Step 1: Push to Repository `sociaza/sociaza`
Push this website directory's contents directly to the `main` branch of your existing repository:
```bash
# Example git commands within this folder
git init
git remote add origin https://github.com/sociaza/sociaza.git
git add .
git commit -m "Build official Sociaza website"
git branch -M main
git push -u origin main
```

### Step 2: Configure GitHub Pages in Repository Settings
1. Open your repository on GitHub: `https://github.com/sociaza/sociaza`
2. Navigate to **Settings** > **Pages** (in the left-hand menu).
3. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` and keep folder set to `/(root)`.
   - Click **Save**.
4. Under **Custom domain**:
   - Verify that `sociaza.online` is detected (the root [`CNAME`](file:///c:/Users/User/OneDrive/Masaüstü/sociaza-website/CNAME) file automatically configures this).
   - Once DNS propagation completes, check **Enforce HTTPS** (GitHub will automatically provision an SSL certificate).

### Step 3: DNS Records for `sociaza.online`
Ensure your domain registrar or DNS management service (e.g. Cloudflare, Namecheap, GoDaddy) has the following standard GitHub Pages DNS records:

- **Apex Domain (`sociaza.online`) A Records:**
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **Subdomain (`www.sociaza.online`) CNAME Record:**
  - `sociaza.github.io.` (or your organization apex pointer)
