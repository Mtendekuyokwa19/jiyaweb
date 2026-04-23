"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StepCardProps {
  number: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export function StepCard({ number, icon, title, description }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white">
          {icon}
        </div>
        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-secondary)] text-[var(--text-primary)] font-bold flex items-center justify-center text-sm">
          {number}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{title}</h3>
      <p className="text-[var(--text-secondary)] max-w-xs">{description}</p>
    </motion.div>
  );
}