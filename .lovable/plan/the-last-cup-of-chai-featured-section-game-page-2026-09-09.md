# The Last Cup of Chai — featured section + game page

## 1. New featured section on the homepage

Sits between "Small Team. Big Worlds." (About) and "Games & Apps We're Proud Of".

A full-width, cinematic spotlight band — distinct from the game cards so it reads as a headline announcement:

- Small eyebrow line "Brewing something new" with a pulsing dot.
- Big title "THE LAST CUP OF CHAI" with "CHAI" in the warm orange, plus the tagline "Know the Odds. Trust No One."
- Short pitch: a fast, social bluffing game where every cup could be your last.
- Tag pills: SOCIAL BLUFFING · PARTY GAME · 2–8 PLAYERS, and a "Coming Soon / In Development" badge.
- Right side: the chai-adda key art in a bordered, glowing frame, warm amber light bleeding behind it.
- Button "Explore the game" linking to the new page.
- Fades in on scroll, respects reduced motion; stacks to one column on mobile.

## 2. New page `/games/the-last-cup-of-chai`

Same structure and theme as the Planked! and Word Cross pages (ambient background, crest header, footer, back link).

Top to bottom:

1. Back link to the homepage.
2. Hero — eyebrow "Social Bluffing · Party Game", title "The Last Cup of Chai", tagline, pitch paragraph, tag pills, "In Development" status.
3. Trailer — the first uploaded clip in a 16:9 glowing frame, autoplaying muted on load, looping, with controls.
4. Two more clips shown side by side (stacked on mobile) in matching frames, muted/loop, click to play.
5. Key art gallery — the tall poster and the wide banner in bordered frames with a soft hover zoom.
6. "About the game" — the trust-nobody/drink-carefully copy split into short paragraphs.
7. Feature grid, matching the poster: Multiplayer (2–8 players), Bluff & Strategy, Indian Vibes, Unpredictable.
8. "Currently in development" closing note with the follow-us social links, then the footer.

## 3. Games section

Unchanged — Planked! and Word Cross stay as the two cards. The chai game lives in its own spotlight above them.

## Technical notes

- The three uploaded videos and three images become Lovable Assets pointers in `src/assets/` (no binaries committed). The rainy chai-stall image is used as the video poster frame.
- New files: `src/components/site/ChaiSpotlight.tsx`, `src/routes/games.the-last-cup-of-chai.tsx`.
- Edited: `src/routes/index.tsx` (insert the spotlight between About and Games).
- Route gets its own `head()` with title, description, og/twitter tags and the poster art as og:image.
- No backend changes.
