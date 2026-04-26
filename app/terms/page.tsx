import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Jiya",
  description: "JIYA Terms of Service - Read our terms and conditions for using the platform.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-[var(--text-secondary)] mb-12">Last updated: 2025</p>

      <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none space-y-8">
        <section>
          <h2>1. Introduction and Acceptance of Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement between you and the operator of the JIYA mobile application. By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </section>

        <section>
          <h2>2. Nature of the Platform</h2>
          <p>
            JIYA is a technology intermediary platform that facilitates connections between users for private, non-commercial ride-sharing and cost-sharing arrangements. JIYA does not provide transportation services, operate vehicles, or employ drivers.
          </p>
        </section>

        <section>
          <h2>3. Prohibition of Commercial Use</h2>
          <p>
            Users agree that the Platform shall not be used for commercial passenger transport services. Any payments must be limited to cost-sharing contributions.
          </p>
        </section>

        <section>
          <h2>4. User Obligations</h2>
          <p>
            Users shall provide accurate information, comply with applicable laws, and act in good faith. Drivers warrant their vehicles are roadworthy with valid insurance.
          </p>
        </section>

        <section>
          <h2>5. Booking and Payments</h2>
          <p>
            JIYA may facilitate booking confirmations but all ride arrangements remain non-binding agreements between Users. Posting fees are separate and non-refundable.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            JIYA shall not be liable for any injury, death, or damage arising from a ride. The Platform is provided &quot;as is&quot; without warranties.
          </p>
        </section>

        <section>
          <h2>7. Indemnity</h2>
          <p>
            Users agree to indemnify JIYA from any claims arising from use of the Platform.
          </p>
        </section>

        <section>
          <h2>8. Suspension and Termination</h2>
          <p>
            JIYA reserves the right to suspend or terminate access for breaches.
          </p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the Republic of Malawi.
          </p>
        </section>
      </div>
    </main>
  );
}