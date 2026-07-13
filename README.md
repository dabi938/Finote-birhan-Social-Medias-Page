# Fnote Berhan Media — Link Page

A single-page React (Vite) site that mirrors the reference design: a gradient
hero with logo + title, a stack of social-link cards, a newsletter field, and
a contact/donate footer. On phones it fills the screen; on tablets/desktop it
renders as a centered "phone" card on a white background, matching the
reference screenshot.

## File structure

```
fnote-berhan-media/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── logo-placeholder.svg      ← swap this for your real logo
└── src/
    ├── main.jsx                  ← React entry point
    ├── App.jsx                   ← page layout / phone frame
    ├── index.css                 ← all styling (tokens + responsive rules)
    ├── data/
    │   └── siteData.js           ← EDIT HERE: logo, titles, links, contact
    └── components/
        ├── Header.jsx            ← gradient hero, logo, titles
        ├── LinkList.jsx          ← renders the link cards
        ├── LinkCard.jsx          ← a single link row
        ├── Newsletter.jsx        ← email subscribe form
        ├── Footer.jsx            ← email / WhatsApp / donate + credit
        └── icons.jsx             ← inline SVG icon set
```

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. Run `npm run build` when you're ready to
deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages,
your own server, etc).

## Customize

Everything you're likely to change lives in **`src/data/siteData.js`**:

- `logoSrc` — put your logo file in `public/` and point to it here
  (e.g. `/logo.png`). Until you do, a placeholder emblem is shown.
- `titleAmharic` / `titleEnglish` — the two headline lines.
- `descriptionEnglish` / `descriptionAmharic` — the subtitle text.
- `links` — the array of buttons. Add, remove, or reorder entries; each
  needs an `id`, `label`, `icon` (must match a key in `icons.jsx`) and `url`.
- `contact` — email, WhatsApp, and donate links used in the footer.

To add a brand new social platform, add an SVG icon function to
`src/components/icons.jsx`, register it in the `icons` map at the bottom of
that file, then reference its key from a new entry in `links`.

## Notes

- Fonts: Poppins (Latin) + Noto Sans Ethiopic (Amharic), loaded from Google
  Fonts in `index.html`.
- No UI framework/build dependency beyond React + Vite — easy to eject into
  Next.js or any other setup later if needed.
- The newsletter form currently just logs the submitted email to the
  console — wire `Newsletter.jsx`'s `handleSubmit` up to your provider
  (Mailchimp, ConvertKit, Firebase, your own API, etc).
# Finote-birhan-Social-Medias-Page
# Finote-birhan-Social-Medias-Page
