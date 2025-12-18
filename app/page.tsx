import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Notification03Icon,
  Rocket02FreeIcons,
  RocketIcon,
} from "@hugeicons/core-free-icons";
export default function Home() {
  return (
    <div className="flex min-h-screen   bg-zinc-50 font-sans dark:bg-black">
      <main className="flex md:flex-row sm:flex-col    items-center justify-evenly   px-16 bg-white dark:bg-black sm:items-start">
        <section className="flex flex-col gap-4 justify-center h-full">
          <div className="border-solid border-2 border-gray-400 rounded-xl flex w-fit p-2 gap-2">
            <p className="">Lauching Soon !!</p>
          </div>
          <h1 className="font-bold text-4xl">
            Find rides. Fill seats. Move faster
          </h1>
          <p className="text-md">
            Jiya makes ridesharing simple and safe. Join a community of verified
            commuters turning empty seats into shared journeys at affordable
            costs.
          </p>
          <div>
            <form>
              <input type="text" className="border-solid" />
              <button>Join Waitlist</button>
            </form>
          </div>
        </section>
        <section>
          <Image
            src={"/hero_appshot.png"}
            width={1500}
            height={1500}
            alt="app shot"
          />
        </section>
      </main>
    </div>
  );
}
