# Rizwan Portfolio (React + Vite + Tailwind + Framer Motion)

## Run
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build in /dist

## Customize (all placeholders are marked PLACEHOLDER)
- `src/data/site.js`: name, email, social links, resume path, contact endpoint
- `src/data/projects.js`: projects. Set a link to `''` to hide that button
- `src/data/skills.js`: skills and tools
- `src/data/videos.js`: videos. Copy the file into `public/videos/`, add an entry; thumbnails go in `public/images/`
- `public/resume.pdf`: add your resume (currently missing)
- `index.html`: add og:image and og:url after deploying
- Colors and fonts: `tailwind.config.js`

## Contact form
It validates input but sends nothing until you set `contactEndpoint` in `src/data/site.js`
(e.g. create a free Formspree form and paste its URL). Without it, the form says sending is not set up.

## Deploy
Run `npm run build`, then upload `dist/` to Netlify, Vercel or GitHub Pages.
