# Navbar cleanup + EmailJS on the contact form

## 1. Navbar

Remove the "Contact" link from the top nav list. The orange "Let's Talk" pill stays and keeps scrolling to `#contact`. Remaining links: About, Work, Privacy.

## 2. Contact form sends real email via EmailJS

Install `@emailjs/browser` and wire the existing themed contact form to your EmailJS account, matching the behaviour of your current site's component:

- On submit: keep the current zod validation and inline errors, then send to EmailJS with the same payload fields your template already expects — `from_name` (first + last), `from_email`, `subject` (the selected service, defaulting to "General Inquiry"), `message`.
- Button becomes a live status: "Send Message →" → "Sending..." (disabled) → "Message Sent! We'll be in touch ✓" for ~3s → back to default. Failure shows "Something went wrong. Try again." Toasts stay for success/error too.
- Form clears on success.

## 3. Credentials

Using the values you provided: service `service_plfcof8`, template `template_dflznqq`, public key `qFDXdhy93M1ewLp4f`. These are Vite `VITE_*` client-side values that ship in the browser bundle — normal and expected for EmailJS (the public key is designed to be public).

They'll be read as `import.meta.env.VITE_EMAILJS_*` with the above as fallbacks so the form works in preview and published builds without extra setup.

## Technical notes

- Edits: `src/components/site/Navbar.tsx` (drop one link), `src/components/site/Contact.tsx` (async submit, EmailJS call, button state).
- New dependency: `@emailjs/browser`.
- No backend, no database, no server function — the send happens client-side exactly like your current site.
