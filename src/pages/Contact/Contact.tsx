import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const validate = (): Partial<FormState> => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    // message is optional
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setErrorMessage(null);

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        PUBLIC_KEY
      );      

      setSuccess("Thanks! We’ll be in touch soon.");
      setForm(initialState);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>BETTER YET, SEE US IN PERSON!</h1>
        <hr />
        <h3>NexTribe Studios</h3>
        <p>Coming Soon</p>

        <p className="contact-email">info@nextribestudios.com</p>

        <p>Have a question or a story to share? Send us a message and we'll get back to you soon.</p>

        {/* <div className="socials">
          <span>follow us on:</span>
          <div className="icons">
            <i className="fab fa-youtube" aria-hidden />
            <i className="fab fa-instagram" aria-hidden />
            <i className="fab fa-linkedin" aria-hidden />
          </div>
        </div> */}
      </div>

      <div className="contact-right">
        {success ? (
          <div className="thankyou">{success}</div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <label>Your name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <small className="err">{errors.name}</small>}

            <label>Your email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <small className="err">{errors.email}</small>}

            <label>Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={errors.subject ? "error" : ""}
            />
            {errors.subject && <small className="err">{errors.subject}</small>}

            <label>Your message (optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
            />

            {errorMessage && <div className="submit-error">{errorMessage}</div>}

            <button type="submit" disabled={loading}>
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
          </form>

        )}
      </div>
    </div>
  );
};

export default Contact;
