import Image from "next/image";
export const Logo = () => {
  return (
    <div className="flex  items-center">
      <Image src="/logo.png" alt="Jiya Logo" width={90} height={50} />

      <li className="font-bold text-2xl list-none">Jiya</li>
    </div>
  );
};
