# Ishwari Salunkhe — Portfolio Website

A clean, responsive, dependency-free personal portfolio built with **HTML5, CSS3, and vanilla JavaScript**. It's designed to help recruiters and internship coordinators quickly understand who I am, what I can do, and how to reach me. The site is ready to publish for free on **GitHub Pages** with no build step, no frameworks, and no API keys required.

## Live Preview / Publish

If you publish this repository to GitHub Pages (see below), your site will be available at something like:
`https://<your-username>.github.io/<repo-name>/`

The code uses relative paths (`index.html`, `style.css`, `script.js`), so it works under a repository subpath without changes.

## Project Structure

```
.
├── index.html    # Main HTML with all sections (Hero, About, Skills, Projects, Education, Contact)
├── style.css     # Styles, responsive layout, accessibility, and motion preferences
├── script.js     # Mobile nav, active link tracking, scroll reveals, copy-email
├── favicon.svg   # Simple initials-based favicon
└── og-image.png  # Social sharing preview image (1200x630)
```

## Features

- **Clean, modern design** — Light background, white surfaces, dark charcoal text, violet/blue accent.
- **Fully responsive** — Works on desktop, tablet, and mobile. Includes a collapsible mobile navigation menu.
- **Accessible** — Semantic HTML, visible focus states, good color contrast, reduced-motion support, skip link, ARIA where helpful.
- **Interactive** — Smooth section navigation, scroll-reveal animations, copy email to clipboard.
- **Student-focused** — Honest about skills (clearly marks learning areas), showcases the ongoing **QUEIFY** project with live/demo links, no inflated claims.
- **Static & free to host** — No backend, no Node.js, no frameworks, no tracking scripts required.

## Local Development

To view the site locally:

1. Clone/download this folder.
2. Open `index.html` directly in your browser, or use a simple local server (recommended for some browsers/extensions). For example:
   - **VS Code:** Right-click `index.html` → *Open with Live Server*
   - **Python 3:** `python -m http.server 8000` (then open `http://localhost:8000`)
   - **Node.js (http-server):** `npx http-server .`

## Publish on GitHub Pages (Free)

1. Create a new repository on GitHub (e.g. `portfolio` or `ishwari-portfolio`).
2. Upload all files from this folder to the repository root (`index.html`, `style.css`, `script.js`, `favicon.svg`, `og-image.png`).
3. Go to **Settings → Pages** in your repo.
4. Under *Build and deployment*, set **Source** to `Deploy from a branch`.
5. Set **Branch** to `main` (or `master`) and folder to `/ (root)`, then click **Save**.
6. Wait a minute or two for deployment. GitHub will give you a URL like `https://<username>.github.io/<repo-name>/`.

**Note:** If your repo name is different, the site still works thanks to relative paths. No changes are needed.

## How to Update Later

| What to change | File(s) | Notes |
|---|---|---|
| Name, intro, or hero text | `index.html` | Edit the Hero and About sections. Keep wording honest (no fabricated experience). |
| Skills & learning areas | `index.html` | Update the Skills section; use the `is-learning` class to mark areas you're strengthening. |
| Projects | `index.html` | Update the Projects section. Replace QUEIFY links if needed, or add new real projects later. Don't fabricate screenshots. |
| Education | `index.html` | Update the Education section if details change. |
| Contact details | `index.html` | Update email, LinkedIn, and GitHub URLs. The copy button uses `data-copy` on the button. |
| Colors & styling | `style.css` | Tweak CSS custom properties under `:root` (e.g., `--accent`, `--bg`). |
| Interactions (nav/reveal/copy) | `script.js` | Edit behavior if needed; it's small and readable. |
| Favicon / social image | `favicon.svg`, `og-image.png` | Replace with your own if desired. |

## Notes

- **QUEIFY** is an ongoing project; the site states that explicitly and doesn't claim all features are complete.
- **August Paints** has been omitted per the requirements (marked incomplete/not ready to feature).
- No profile photo is used — an initials-based avatar and simple CSS illustration are used instead, as requested.
- External links open in a new tab where appropriate with `rel="noopener noreferrer"`.
- The contact section provides a mailto link and copy button; there's no fake backend contact form.
- This is a student portfolio intended for internships and entry-level opportunities.

## Credits

Built from scratch with care for clarity, accessibility, and easy maintenance.
