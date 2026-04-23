"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  CarIcon,
  StoreVerifiedIcon,
  WalletIcon,
  ChatIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { FeatureCard } from "./ui/feature-card";

const features = [
  {
    icon: <HugeiconsIcon icon={Search01Icon} size={24} />,
    title: "Search Rides",
    description: "Find available rides near you with real-time search and filters.",
  },
  {
    icon: <HugeiconsIcon icon={CarIcon} size={24} />,
    title: "Offer Rides",
    description: "Share your journey and earn money by filling empty seats.",
  },
  {
    icon: <HugeiconsIcon icon={StoreVerifiedIcon} size={24} />,
    title: "Verified Users",
    description: "Trusted community members with verified identities.",
  },
  {
    icon: <HugeiconsIcon icon={WalletIcon} size={24} />,
    title: "Secure Payments",
    description: "Safe and instant transactions with multiple payment options.",
  },
  {
    icon: <HugeiconsIcon icon={ChatIcon} size={24} />,
    title: "Real-time Chat",
    description: "Communicate with riders directly through in-app messaging.",
  },
  {
    icon: <HugeiconsIcon icon={StarIcon} size={24} />,
    title: "Community Ratings",
    description: "Transparent reviews to help you choose trustworthy rides.",
  },
];

export function Features() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Everything you need for smooth ridesharing
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          Powerful features designed to make every journey comfortable, safe, and affordable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}