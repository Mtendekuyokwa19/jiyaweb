import { TwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="px-4 md:px-8 py-12 border-t border-[var(--border)] bg-[var(--bg-card)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          © 2025 Jiya Inc. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://x.com/mtende_kuyokwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--color-primary)]"
          >
            <HugeiconsIcon icon={TwitterIcon} size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}