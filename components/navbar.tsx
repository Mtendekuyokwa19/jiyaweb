import { Logo } from "@/components/logo";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Logo />
      <li className="font-bold text-2xl list-none">Jiya</li>
      <ol className="flex font-bold font-medium gap-10">
        <li className="font-bold">FAQ</li>
        <li>
          <button className="font-bold">Join Waitlist</button>
        </li>
      </ol>
    </nav>
  );
};
