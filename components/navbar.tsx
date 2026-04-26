import { Logo } from "@/components/logo";
import { TwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ThemeToggle } from "./theme-toggle";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border)]">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <Logo />
        <div className="flex items-center gap-4">
          <a
            href="/data-deletion"
            className="text-[var(--text-primary)] hover:text-[var(--color-primary)]"
          >
            Data
          </a>
          <ThemeToggle />
          <a
            href="https://x.com/mtende_kuyokwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:text-[var(--color-primary)]"
          >
            <HugeiconsIcon icon={TwitterIcon} size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};