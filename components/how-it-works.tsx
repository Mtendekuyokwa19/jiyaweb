"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  RouteIcon,
  CalendarIcon,
  SteeringWheelIcon,
} from "@hugeicons/core-free-icons";
import { StepCard } from "./ui/step-card";

const steps = [
  {
    number: 1,
    icon: <HugeiconsIcon icon={RouteIcon} size={28} />,
    title: "Search & Connect",
    description: "Enter your route and find matching rides from verified drivers in your area.",
  },
  {
    number: 2,
    icon: <HugeiconsIcon icon={CalendarIcon} size={28} />,
    title: "Book & Pay",
    description: "Secure your seat with instant in-app payment and receive confirmation.",
  },
  {
    number: 3,
    icon: <HugeiconsIcon icon={SteeringWheelIcon} size={28} />,
    title: "Ride & Share",
    description: "Enjoy your journey, meet new people, and rate your experience.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 bg-[var(--bg-card)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            How it works
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Get started with Jiya in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 border-dashed border-[var(--border)]" />

          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}