# Planked! detail page + trimmed Games section

## 1. Games section (homepage)

- Keep only two titles: **Planked!** (left) and **Word Cross** (right), in that order.
- Remove Tribal Tycoon and Circuit Crusher from the data list.
- The Planked! card becomes clickable and links to `/games/planked` (whole card is a link, with hover lift/glow as today, plus a small "View project" cue). Word Cross stays a static card with no link.

## 2. New page: `/games/planked`

Same dark theme, ambient background, navbar-style header and footer as the rest of the site.

Layout top to bottom:

1. **Back link** to the homepage games section.
2. **Hero block** — eyebrow "Puzzle Platformer · Unity", big title "Planked!", short intro line, platform icons and tag pills, plus Play Store / contact buttons.
3. **Gameplay trailer** — the uploaded 10s clip (1280x720) in a rounded, bordered 16:9 frame with a teal glow, muted + loop + playsInline, poster from the first screenshot, with visible controls.
4. **Screenshots** — the two uploaded gameplay images side by side (stacked on mobile) in matching bordered frames, with soft captions ("Screw-and-plank contraptions", "Limited moves challenge") and a hover zoom.
5. **About the game** — two or three short paragraphs on the concept plus a small feature list (physics puzzles, hand-drawn art, limited-move levels, mobile-first).
6. **Footer** (existing component).

Motion: sections fade/slide in on scroll, matching existing site behaviour, disabled under reduced motion.

## Technical notes

- Video and screenshots go through Lovable Assets pointers in `src/assets/` (no binaries committed).
- New files: `src/routes/games.planked.tsx`, plus a small `src/components/site/GameDetail*` piece if it keeps the route tidy.
- Edited: `src/data/games.ts` (two entries, add optional `href`), `src/components/site/GameCard.tsx` (optional link wrapper).
- Route gets its own `head()` with Planked-specific title, description, og/twitter tags and the screenshot as og:image.
- Games grid stays 2-column on desktop, 1-column on mobile. No backend changes.
