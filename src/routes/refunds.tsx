import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: "Refund Policy — NexTribe Studios" },
      {
        name: "description",
        content:
          "Refund terms for NexTribe Studios games, in-app purchases and studio development services.",
      },
      { property: "og:title", content: "Refund Policy — NexTribe Studios" },
      {
        property: "og:description",
        content: "Refund terms for NexTribe Studios games, purchases and services.",
      },
      { property: "og:url", content: "/refunds" },
    ],
    links: [{ rel: "canonical", href: "/refunds" }],
  }),
  component: RefundsRoute,
});

function RefundsRoute() {
  return (
    <LegalPage title="Refund Policy" updated="May 2025">
      <LegalSection heading="Games and In-App Purchases">
        <p>
          Purchases made through the Google Play Store, the Apple App Store or any other
          storefront are handled by that platform. Refund requests for those purchases must be
          raised with the storefront directly, and are subject to its refund window and rules.
        </p>
      </LegalSection>

      <LegalSection heading="Studio Services">
        <p>
          Development, design and consulting engagements are billed against the milestones set
          out in the signed agreement. Deposits reserve production capacity and are
          non-refundable once work on a milestone has started. Any unstarted, prepaid milestone
          is refundable in full.
        </p>
      </LegalSection>

      <LegalSection heading="Cancellations">
        <p>
          Either party may end an engagement in writing. On cancellation you are invoiced for
          work completed and in progress up to that date; anything already paid beyond that
          amount is returned within 14 business days.
        </p>
      </LegalSection>

      <LegalSection heading="How to Request a Refund">
        <p>
          Email{" "}
          <a className="text-cyan hover:underline" href="mailto:info@nextribe.in">
            info@nextribe.in
          </a>{" "}
          with your order or project reference and a short description of the issue. We
          respond to every request, usually within 48 hours.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
