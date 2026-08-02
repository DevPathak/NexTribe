import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — NexTribe Studios" },
      {
        name: "description",
        content:
          "The terms that govern your use of the NexTribe Studios website, games and applications.",
      },
      { property: "og:title", content: "Terms of Service — NexTribe Studios" },
      {
        property: "og:description",
        content: "Terms governing your use of NexTribe Studios' website, games and apps.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsRoute,
});

function TermsRoute() {
  return (
    <LegalPage title="Terms of Service" updated="May 2025">
      <LegalSection heading="Acceptance of Terms">
        <p>
          By accessing this website, our games or our applications, you agree to be bound by
          these Terms of Service and all applicable laws and regulations. If you do not agree
          with any of these terms, please do not use our products.
        </p>
      </LegalSection>

      <LegalSection heading="Use Licence">
        <p>
          Permission is granted to temporarily view the materials on the NexTribe Studios
          website for personal, non-commercial use only. You may not modify or copy the
          materials, use them for any commercial purpose, attempt to reverse engineer any
          software, or remove any copyright or proprietary notations.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          All game titles, artwork, source code, trademarks, characters and brand assets shown
          on this site are the property of NexTribe Studios or its licensors, unless otherwise
          stated. Client work is governed by the individual agreement signed for that project.
        </p>
      </LegalSection>

      <LegalSection heading="Project Enquiries">
        <p>
          Submitting the contact form does not create a contract or a client relationship.
          Scope, timelines, deliverables and pricing are only binding once documented in a
          signed agreement between you and NexTribe Studios.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimer">
        <p>
          The materials on this website are provided on an "as is" basis. NexTribe Studios
          makes no warranties, expressed or implied, and disclaims all other warranties
          including, without limitation, implied warranties of merchantability or fitness for
          a particular purpose.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          In no event shall NexTribe Studios or its suppliers be liable for any damages
          arising out of the use or inability to use the materials on this website, even if we
          have been notified of the possibility of such damage.
        </p>
      </LegalSection>

      <LegalSection heading="Governing Law">
        <p>
          These terms are governed by the laws of India, and you irrevocably submit to the
          exclusive jurisdiction of the courts of Hyderabad, Telangana.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
