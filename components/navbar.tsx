import { Logo } from "@/components/logo";
import { GithubIcon, TwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between  items-center p-2 md:p-4">
      <Logo />
      <ol className="flex font-bold font-medium gap-10">
        <li className="flex gap-2 md:gap-4">
          <a href="https://x.com/mtende_kuyokwa" target="_blank">
            <HugeiconsIcon icon={TwitterIcon} />
          </a>
        </li>
      </ol>
    </nav>
  );
};
