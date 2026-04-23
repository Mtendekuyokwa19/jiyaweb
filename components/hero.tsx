"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { SentIcon } from "@hugeicons/core-free-icons";
import { AvatarStack } from "./avatar-stack";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";

export function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      addToast({
        title: "Success!",
        description: "You've been added to the waitlist.",
        color: "success",
      });
      setEmail("");
    } else {
      const errorData = await response.json();
      let description = "Failed to join waitlist. Please try again.";

      if (response.status === 409) {
        description = "This email is already registered.";
      } else if (response.status === 400 && errorData.error === "Invalid email format") {
        description = "Please enter a valid email address.";
      }

      addToast({
        title: "Error",
        description,
        color: "danger",
      });
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:justify-evenly px-4 md:px-16 py-12 md:py-20 gap-12">
      <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start justify-center max-w-xl">
        <div className="border border-[var(--border)] rounded-full px-4 py-1.5 flex items-center gap-2">
          <span className="text-sm">🚀</span>
          <span className="text-sm text-[var(--text-secondary)]">Launching Soon</span>
        </div>

        <h1 className="font-bold text-center md:text-left text-3xl md:text-5xl lg:text-6xl text-[var(--text-primary)]">
          Find rides. Fill seats. Move faster
        </h1>

        <p className="text-center md:text-left text-[var(--text-secondary)] text-lg max-w-lg">
          Jiya makes ridesharing simple and safe. Join a community of verified
          commuters turning empty seats into shared journeys at affordable costs.
        </p>

        <div className="flex flex-col md:flex-row gap-3 items-center md:items-start w-full max-w-md">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--color-primary)]"
              required
            />
            <Button
              type="submit"
              className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:opacity-90 flex items-center gap-2"
            >
              <span>Join waitlist</span>
              <HugeiconsIcon icon={SentIcon} size={18} />
            </Button>
          </form>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <AvatarStack />
          <p className="text-sm text-[var(--text-secondary)]">
            Join <span className="font-semibold text-[var(--color-primary)]">2,500+</span> early adopters
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-2/5">
        <Image
          src="/hero_appshot.png"
          width={600}
          height={1200}
          alt="Jiya app preview"
          className="hidden md:block w-full h-auto"
          priority
        />
        <Image
          src="/mobile_shot.png"
          width={400}
          height={800}
          alt="Jiya app preview"
          className="block md:hidden w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}