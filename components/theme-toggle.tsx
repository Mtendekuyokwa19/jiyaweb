"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { SunIcon, MoonIcon } from "@hugeicons/core-free-icons";
import { useTheme } from "./theme-provider";
import { Button } from "@heroui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="light"
      isIconOnly
      onPress={toggleTheme}
      className="text-[var(--text-primary)] hover:text-[var(--color-primary)]"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <HugeiconsIcon
        icon={theme === "light" ? MoonIcon : SunIcon}
        size={20}
      />
    </Button>
  );
}