import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Clock } from "lucide-react";

const SERVICE_ID =
  (import.meta.env['VITE_EMAILJS_SERVICE_ID'] as string) || "service_plfcof8";
const TEMPLATE_ID =
  (import.meta.env['VITE_EMAILJS_TEMPLATE_ID'] as string) || "template_dflznqq";
const PUBLIC_KEY =
  (import.meta.env['VITE_EMAILJS_PUBLIC_KEY'] as string) || "qFDXdhy93M1ewLp4f";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60, "Too long"),
  lastName: z.string().trim().max(60, "Too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email")
    .max(255, "Too long"),
  service: z.string().trim().min(1, "Please pick a service"),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (10+ characters)")
    .max(2000, "Keep it under 2000 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const SERVICES = [
  "Game Development",
  "Website Development",
  "Mobile App Development",
  "UI / UX Design",
  "Game Design Consulting",
  "Publishing Support",
  "Something else",
];

const INFO = [
  { Icon: Mail, label: "Email", value: "info@nextribe.in", href: "mailto:info@nextribe.in" },
  { Icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
  { Icon: Clock, label: "Response Time", value: "Within 48 hours" },
];

const fieldClass =
  "w-full rounded-xl border border-border/70 bg-card/40 px-4 py-3 font-mono-ui text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-cyan/70 focus:ring-1 focus:ring-cyan/40";

const DEFAULT_BTN = "Send Message →";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [btnText, setBtnText] = useState(DEFAULT_BTN);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setLoading(true);
    setBtnText("Sending...");

    const v = parsed.data;
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${v.firstName} ${v.lastName}`.trim(),
          from_email: v.email,
          subject: v.service || "General Inquiry",
          message: v.message,
        },
        PUBLIC_KEY,
      );
      form.reset();
      setBtnText("Message Sent! We'll be in touch ✓");
      toast.success("Message sent — we'll get back to you within 48 hours.");
    } catch (err) {
      console.error("EmailJS error:", err);
      setBtnText("Something went wrong. Try again.");
      toast.error("Message failed to send. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setBtnText(DEFAULT_BTN), 3000);
    }
  }


  return (
    <section id="contact" className="relative z-10 w-full scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <motion.p
          className="font-mono-ui text-[0.7rem] uppercase tracking-[0.42em] text-orange"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.p>

        <motion.h2
          className="mt-4 font-display text-[clamp(1.9rem,5.5vw,3.6rem)] font-bold uppercase leading-[1.02] tracking-tight text-foreground"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let's Build <span className="text-cyan">Something Great</span>.
        </motion.h2>

        <motion.p
          className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Got a game idea, an app you want to launch, or looking for a studio partner? We
          respond to every message — usually within 24 hours.
        </motion.p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
          <div className="flex flex-col gap-4">
            {INFO.map(({ Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{
                  y: -4,
                  rotate: [0, -0.8, 0.6, 0],
                  transition: { rotate: { duration: 0.45 }, y: { duration: 0.2 } },
                }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-cyan">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono-ui text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block truncate text-sm text-foreground transition-colors hover:text-cyan sm:text-base"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="mt-1 block text-sm text-foreground sm:text-base">
                      {value}
                    </span>
                  )}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <h3 className="font-display text-xl font-bold uppercase tracking-[0.16em] text-foreground sm:text-2xl">
              Send Us A Message
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="First Name" error={errors.firstName}>
                <input name="firstName" className={fieldClass} placeholder="Aarav" />
              </Field>
              <Field label="Last Name" error={errors.lastName}>
                <input name="lastName" className={fieldClass} placeholder="Sharma" />
              </Field>
            </div>

            <div className="mt-4 grid gap-4">
              <Field label="Email" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  className={fieldClass}
                  placeholder="you@studio.com"
                />
              </Field>

              <Field label="I'm Interested In" error={errors.service}>
                <select name="service" defaultValue="" className={fieldClass}>
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  name="message"
                  rows={5}
                  className={`${fieldClass} resize-y`}
                  placeholder="Tell us about your project..."
                />
              </Field>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-full bg-orange px-6 py-3 font-mono-ui text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground disabled:opacity-70 sm:w-auto"
              whileHover={
                loading
                  ? undefined
                  : {
                      scale: 1.05,
                      rotate: [0, -2, 1.6, -0.8, 0],
                      transition: {
                        rotate: { duration: 0.5 },
                        scale: { duration: 0.22 },
                      },
                    }
              }
              whileTap={loading ? undefined : { scale: 0.96 }}
            >
              {btnText}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono-ui text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1.5 block font-mono-ui text-[0.7rem] text-destructive">
          {error}
        </span>
      ) : null}
    </label>
  );
}
