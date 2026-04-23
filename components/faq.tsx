"use client";

import { FaqItem } from "./ui/faq-item";

const faqs = [
  {
    question: "How does Jiya work?",
    answer: "Jiya connects drivers with empty seats to passengers traveling the same route. Simply search for your destination, book a seat, and travel together at a fraction of the cost.",
  },
  {
    question: "Is Jiya safe?",
    answer: "Safety is our top priority. All users undergo identity verification, rides are tracked in real-time, and our community rating system ensures transparency. We also have 24/7 support for any concerns.",
  },
  {
    question: "How do payments work?",
    answer: "Payments are processed securely through the app. Passengers pay when booking, and drivers receive their earnings after the ride is completed. We support multiple payment methods including mobile money.",
  },
  {
    question: "Can I cancel a booking?",
    answer: "Yes, you can cancel a booking up to 2 hours before the scheduled departure. Cancellation policies are clearly displayed before you confirm your booking.",
  },
  {
    question: "How do I become a driver?",
    answer: "To become a driver, download the app, complete your profile verification, and submit your vehicle documents. Once approved, you can start offering rides and earning.",
  },
];

export function Faq() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Frequently asked questions
        </h2>
        <p className="text-[var(--text-secondary)]">
          Everything you need to know about Jiya
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}