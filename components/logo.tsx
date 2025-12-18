import Image from "next/image";
export const Logo = () => {
  return (
    <div className="flex  items-center">
      <Image src="/logo.png" alt="Jiya Logo" width={90} height={50} />
    </div>
  );
};
