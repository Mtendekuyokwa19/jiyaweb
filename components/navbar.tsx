import { Logo } from "@/components/logo";
import { TwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Logo />
      <ol className="flex font-bold font-medium gap-10">
        <li className="font-bold">FAQ</li>
        <li className="flex gap-4">
          <button className="font-bold">Join Waitlist</button>
          <button className="">
          <HugeiconsIcon icon={TwitterIcon} />
          </button>
        </li>
      </ol>
    </nav>
  );
};
