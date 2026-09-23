# 🌍 My TourBee — Luxury Tour Company Website

Official responsive web application for **My TourBee** featuring domestic and international tour packages, full day-by-day itineraries, transparent rates in INR, interactive booking inquiry form, and complete contact details.

---

## 📁 Project Structure

```text
Mytourbee/
├── index.html              # Main HTML entry point for web deployment
├── index-standalone.html   # 100% self-contained single-file HTML (inlined CSS + JS)
├── css/
│   └── style.css           # Luxury dark-theme styling, animations, responsiveness
├── js/
│   └── main.js             # Interactive itinerary data, modals, validation, sliders
├── images/
│   ├── logo.png            # Official My TourBee Logo
│   ├── golden-triangle.jpg # Delhi - Agra - Jaipur Tour
│   ├── kerala.jpg          # Kerala Backwaters & Hills
│   ├── goa.jpg             # Goa Beach Holiday
│   ├── rajasthan.jpg       # Rajasthan Royal Heritage
│   ├── thailand.jpg        # Thailand Explorer
│   ├── bali.jpg            # Bali Paradise
│   ├── europe.jpg          # Europe Highlights
│   └── dubai.jpg           # Dubai & Abu Dhabi
├── robots.txt              # Production search engine crawler rules
├── sitemap.xml             # XML sitemap for SEO indexing
├── .htaccess               # Caching, gzip compression & security for Apache / cPanel
├── _headers                # HTTP caching headers for Cloudflare / Netlify
├── netlify.toml            # Netlify deployment configuration
├── vercel.json             # Vercel deployment configuration
└── README.md               # This deployment guide
```

---

## 🚀 How to Deploy

Because this website is built with clean, zero-dependency static HTML5, CSS3, and JavaScript, it can be deployed **instantly** to any platform:

### 1. Netlify (Fastest & Free)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `Mytourbee` folder into the browser window.
3. Your website will be live with free SSL in less than 30 seconds!

### 2. Vercel (Free)
1. Install Vercel CLI with `npm i -g vercel` or go to [vercel.com](https://vercel.com)
2. Import this directory or run `vercel` in terminal.
3. `vercel.json` is already configured for headers and caching.

### 3. cPanel / Hostinger / GoDaddy / Bluehost (Traditional Web Hosting)
1. Log into your hosting **cPanel**.
2. Open **File Manager** and navigate to `public_html` (or your domain's document root).
3. Zip all files in `Mytourbee/` and upload, then click **Extract**.
4. `.htaccess` will automatically handle gzip compression and browser caching.

### 4. GitHub Pages (Free)
1. Push this folder to a GitHub repository.
2. In repository settings, go to **Pages** → Source: **Deploy from a branch** → select `main` / `root`.
3. Your site will be published at `https://<username>.github.io/<repo-name>/`.

---

## 💼 Business & Contact Details Included

- **Brand Name**: My TourBee
- **Tagline**: Luxury Travel Experiences
- **Phone Numbers**: 
  - `+91 94422 94888` (with one-click call & WhatsApp)
  - `+91 94870 07583`
- **Email Addresses**:
  - `mytourbee@gmail.com`
  - `info@mytourbee.com`
- **Office Address**: RS Puram, Coimbatore, Tamil Nadu, India — 641002
- **Currency**: All package prices listed clearly in **INR (₹)**

---

## 📦 Standalone Version
If you ever need to send a single HTML file to a client or upload to a platform that only accepts a single file:
- Open or distribute `index-standalone.html` (all styles, itineraries, and scripts are embedded).
