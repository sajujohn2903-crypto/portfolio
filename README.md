# Portfolio Website

A small, dependency-free static site — plain HTML/CSS/JS, no build step,
no npm install. It's made of four files that all need to sit together in
the same folder:

- **`index.html`** — the home page (hero, award, works intro, about, tools, contact)
- **`works.html`** — a dedicated page listing every project in a grid
- **`styles.css`** — all shared styling for both pages
- **`config.js`** — all editable content (name, copy, projects, skills, contact
  details) for both pages, in one place

The only external resource either page loads is a Google Fonts stylesheet
(Bebas Neue + Nunito).

## Deploy to GitHub Pages

1. Create a new repository on GitHub (or use an existing one).
2. Add all four files — `index.html`, `works.html`, `styles.css`, `config.js`
   — to the **root** of the repository, all together (this matters: they
   reference each other by relative path, and GitHub Pages looks for
   `index.html` at the root by default).
   - Via the GitHub website: click **Add file → Upload files**, drag in all
     four files at once, then commit.
   - Via git:
     ```bash
     git init
     git add index.html works.html styles.css config.js
     git commit -m "Add portfolio site"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<your-repo>.git
     git push -u origin main
     ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
6. GitHub will give you a URL (usually `https://<your-username>.github.io/<your-repo>/`
   — for a *user/organization* site named `<your-username>.github.io`, it's
   `https://<your-username>.github.io/` instead). It can take a minute or two
   to go live after the first deploy.

## Editing the content

Everything — your name, the award copy, the "Works" intro, all six projects,
skills, tools, and contact details — lives in one place: the `CONFIG` object
in `config.js`. Open that file in any text editor and edit the values
directly. Both `index.html` and `works.html` read from this same file, so a
change there (e.g. adding a seventh project) shows up on both pages
automatically. No other code needs to change for content updates.

Colors and fonts are grouped as CSS variables at the very top of
`styles.css` if you want to retheme the site — that also applies to both
pages at once.

After editing, just commit and push the changed file(s) — GitHub Pages will
redeploy automatically.

## How the "Works" flow works

On the home page, the Works section is a single article card (headline,
short blurb, a big image, and a "Read More" link) — clicking **Read More**
takes visitors to `works.html`, which lists all six projects as a grid,
with a link back to the home page.
