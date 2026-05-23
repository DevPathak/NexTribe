import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
};

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [btnText, setBtnText] = useState("Send Message →");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) {
      setBtnText("Please fill all required fields");
      setStatus("error");
      setTimeout(() => {
        setBtnText("Send Message →");
        setStatus("idle");
      }, 2500);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${form.firstName} ${form.lastName}`.trim(),
          from_email: form.email,
          subject: form.service || "General Inquiry",
          message: form.message,
        },
        PUBLIC_KEY
      );
      setBtnText("Message Sent! We'll be in touch ✓");
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error("EmailJS error:", err);
      setBtnText("Something went wrong. Try again.");
      setStatus("error");
      setTimeout(() => {
        setBtnText("Send Message →");
        setStatus("idle");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="ct-glow"></div>
      <span className="stag reveal">Get In Touch</span>
      <h2 className="stitle reveal rd1">
        Let's Build<br />
        <span className="t">Something Great.</span>
      </h2>
      <div className="ct-grid">
        <div className="reveal">
          <p className="ct-desc">
            Got a game idea, an app you want to launch, or looking for a studio partner? We respond to every message — usually within 24 hours.
          </p>
          <div className="ct-detail">
            <div className="ct-dicon">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <span className="ct-dlbl">Email</span>
              <span className="ct-dval">info@nextribe.in</span>
            </div>
          </div>
          <div className="ct-detail">
            <div className="ct-dicon">
              <svg viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <span className="ct-dlbl">Location</span>
              <span className="ct-dval">Hyderabad, Telangana, India</span>
            </div>
          </div>
          <div className="ct-detail">
            <div className="ct-dicon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <span className="ct-dlbl">Response Time</span>
              <span className="ct-dval">Within 48 hours</span>
            </div>
          </div>
        </div>
        <div className="ct-form reveal rd1">
          <div className="ct-ftitle">Send Us A Message</div>
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="frow">
              <div className="fg">
                <label htmlFor="fn">First Name</label>
                <input
                  type="text"
                  id="fn"
                  name="firstName"
                  placeholder="Arjun"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="fg">
                <label htmlFor="ln">Last Name</label>
                <input
                  type="text"
                  id="ln"
                  name="lastName"
                  placeholder="Sharma"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="em">Email</label>
              <input
                type="email"
                id="em"
                name="email"
                placeholder="arjun@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="fg">
              <label htmlFor="sv">I'm Interested In</label>
              <select
                id="sv"
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a service...
                </option>
                <option>Game Development</option>
                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>UI / UX Design</option>
                <option>Game Design Consulting</option>
                <option>Publishing Support</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="fg">
              <label htmlFor="mg">Message</label>
              <textarea
                id="mg"
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="fsub"
              disabled={loading || status === "success"}
              style={
                status === "error"
                  ? { background: "linear-gradient(135deg,#7a2020,#5a1010)" }
                  : status === "success"
                    ? { background: "linear-gradient(135deg,#1a7a8a,#0e5060)" }
                    : undefined
              }
            >
              {loading ? "Sending..." : btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
