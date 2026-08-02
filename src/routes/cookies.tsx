import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — NexTribe Studios" },
      {
        name: "description",
        content:
          "How NexTribe Studios uses cookies and similar technologies across our website, games and apps.",
      },
      { property: "og:title", content: "Cookie Policy — NexTribe Studios" },
      {
        property: "og:description",
        content: "How NexTribe Studios uses cookies and similar technologies.",
      },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesRoute,
});

function CookiesRoute() {
  return (
    <LegalPage title="Cookie Policy" updated="May 2025">
      <LegalSection heading="What Cookies Are">
        <p>
          Cookies are small text files stored on your device by your browser. They help
          websites remember your preferences and understand how a site is being used.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Them">
        <p>
          Our website keeps cookie use to a minimum. We use essential storage to remember
          interface state — for example, whether you have already seen the intro animation in
          this session — and anonymised analytics to count page views and country of origin.
          We do not use advertising or cross-site tracking cookies.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Services">
        <p>
          Some pages may embed content from third parties such as YouTube or the Google Play
          Store. Those providers may set their own cookies, which are governed by their
          respective privacy policies.
        </p>
      </LegalSection>

      <LegalSection heading="Managing Cookies">
        <p>
          You can delete or block cookies at any time through your browser settings. Some
          parts of the site may not function as intended if essential storage is blocked.
        </p>
      </LegalSection>

      <LegalSection heading="Questions">
        <p>
          For anything cookie related, write to{" "}
          <a className="text-cyan hover:underline" href="mailto:info@nextribe.in">
            info@nextribe.in
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
