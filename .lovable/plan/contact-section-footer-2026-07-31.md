# Contact Section + Footer

Add the final two blocks of the single-page site, styled in the current dark teal/orange NexTribe theme.

## Contact section ("Get In Touch")

Placed after the Games section, anchor `#contact`.

- Eyebrow "Get In Touch", headline "Let's Build Something Great." with the same gradient/typography treatment as the other sections.
- Intro line: "Got a game idea, an app you want to launch, or looking for a studio partner? We respond to every message — usually within 24 hours."
- Left column: three info cards with crest-accented icons — Email `info@nextribe.in`, Location `Hyderabad, Telangana, India`, Response Time `Within 48 hours`. Cards get the same hover lift/wiggle as the game cards.
- Right column: "Send Us A Message" form card — First Name, Last Name, Email, "I'm Interested In" select (Game Development, Website Development, Mobile App Development, UI/UX Design, Game Design Consulting, Publishing Support, Something else), Message textarea, and a "Send Message →" button with the wiggle hover.
- Front-end only: inputs are validated with zod (trim, required, email format, length limits) and inline error messages. On valid submit the form clears and a success toast appears. No data is stored or sent anywhere.
- Ambient background particles continue behind the section; fields animate in on scroll.

## Footer

Full-width footer below contact.

- Brand column: crest logo + wordmark, one-line studio description, "Hyderabad, India".
- Link columns: Studio (About, Games, Contact) and Legal (Privacy Policy, Terms of Service, Cookie Policy, Refund Policy).
- Social row with icon buttons, each with a glow/wiggle hover:
  - YouTube — https://www.youtube.com/@NextribeStudios
  - Play Store — https://play.google.com/store/apps/dev?id=5254004012582833225&hl=en_IN
  - Discord — https://discord.com/invite/yWfrc2Fb9d
  - Instagram — https://www.instagram.com/nextribes_studios
  - LinkedIn — https://www.linkedin.com/company/nextribe-studios
  - Twitter/X placeholder link, easy to swap once you have the handle.
- Bottom bar: "© 2026 NexTribe Studios. All rights reserved." + "Made in India".

## Legal pages

The Legal links need real destinations, so add lightweight routes `/privacy`, `/terms`, `/cookies`, `/refunds` using the Privacy Policy text from your current site as the Privacy content and standard studio boilerplate for the others, each in the same theme with its own SEO metadata.

## Technical notes

- New: `src/components/site/Contact.tsx`, `src/components/site/Footer.tsx`, `src/components/site/SocialLinks.tsx`, and route files under `src/routes/`.
- Reuse existing shadcn `input`, `textarea`, `select`, `button`, plus `sonner` for the toast (Toaster mounted once in `__root.tsx`).
- Social icons from `lucide-react`; Play Store gets a small inline SVG since lucide has no brand mark for it.
- `src/routes/index.tsx` gains the Contact and Footer sections; navbar `Contact` link scrolls to `#contact`.
- No backend, no new dependencies beyond what's installed.
