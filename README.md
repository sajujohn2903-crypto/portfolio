# Portfolio Website

A single-file, self-contained portfolio site (HTML/CSS/JS all in `index.html`,
no build step, no dependencies to install). The only external resource it
loads is a Google Fonts stylesheet (Bebas Neue + Nunito).

## Deploy to GitHub Pages

1. Create a new repository on GitHub (or use an existing one).
2. Add `index.html` to the **root** of the repository (this matters — GitHub
   Pages looks for `index.html` at the root by default).
   - Via the GitHub website: click **Add file → Upload files**, drag in
     `index.html`, then commit.
   - Via git:
     ```bash
     git init
     git add index.html
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

Everything on the site — your name, the award copy, projects, skills, tools,
and contact details — lives in one place: the `CONFIG` object near the top
of the `<script>` tag in `index.html`. Open the file in any text editor,
find `const CONFIG = {`, and edit the values directly. No other code needs
to change for content updates.

Colors and fonts are similarly grouped as CSS variables at the very top of
the `<style>` tag if you want to retheme the site.

After editing, just commit and push the updated `index.html` — GitHub Pages
will redeploy automatically.
