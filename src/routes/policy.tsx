import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — NexTribe Studios" },
      {
        name: "description",
        content:
          "How NexTribe Studios collects, uses and protects the information you share with our game and app development studio.",
      },
      { property: "og:title", content: "Privacy Policy — NexTribe Studios" },
      {
        property: "og:description",
        content: "How NexTribe Studios collects, uses and protects your information.",
      },
      { property: "og:url", content: "/policy" },
    ],
    links: [{ rel: "canonical", href: "/policy" }],
  }),
  component: PrivacyRoute,
});

function PrivacyRoute() {
  return (
    <LegalPage title="Privacy Policy" updated="May 2025">
      <LegalSection heading="Overview">
        <p>
          At NexTribe Studios, one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains the types of information that is collected and
          recorded by NexTribe Studios and how we use it. If you have additional questions or
          require more information about our Privacy Policy, do not hesitate to contact us at{" "}
          <a className="text-cyan hover:underline" href="mailto:info@nextribe.in">
            info@nextribe.in
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Consent">
        <p>
          We collect only information you voluntarily provide — such as your name and email
          when filling in our contact form. We do not collect sensitive personal data, and we
          do not automatically track you beyond basic anonymised analytics (page views,
          country of origin).
        </p>
      </LegalSection>

      <LegalSection heading="Information We Collect">
        <p>
          The personal information that you are asked to provide, and the reasons why you are
          asked to provide it, will be made clear to you at the point we ask for it. If you
          contact us directly, we may receive additional information about you such as your
          name, email address, phone number, the contents of the message and/or attachments
          you may send us, and any other information you may choose to provide.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>We use the information we collect in various ways, including to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Provide, operate and maintain our website</li>
          <li>Improve, personalise and expand our website</li>
          <li>Understand and analyse how you use our website</li>
          <li>Develop new products, services, features and functionality</li>
          <li>Communicate with you, either directly or through one of our partners</li>
        </ul>
      </LegalSection>

      <LegalSection heading="GDPR Data Protection Rights">
        <p>
          We would like to make sure you are fully aware of all of your data protection
          rights. Every user is entitled to the following: the right to access, the right to
          rectification, the right to erasure, the right to restrict processing, the right to
          object to processing, and the right to data portability.
        </p>
      </LegalSection>

      <LegalSection heading="Children's Information">
        <p>
          We do not knowingly collect any personally identifiable information from children
          under 13. If you believe your child provided this kind of information on our
          website, please contact us immediately and we will remove it from our records.
        </p>
      </LegalSection>

      <LegalSection heading="Consent to Terms">
        <p className="text-foreground">
          By using our website, you hereby consent to our Terms and Conditions and agree to
          their terms.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
