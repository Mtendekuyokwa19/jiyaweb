import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Notification03Icon,
  Rocket02FreeIcons,
  RocketIcon,
  SentIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Avatars from "@/components/avatar";
import { Feature } from "@/components/section";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col    font-sans ">
      <div className="flex     items-center justify-evenly   px-16  ">
        <section className="flex flex-col gap-4  justify-center h-full">
          <div className="border-solid backdrop-blur-2xl border-1 border-gray-400 rounded-xl flex w-fit p-2 gap-2">
            <p className="">🚀Lauching Soon !!</p>
          </div>
          <h1 className="font-bold text-6xl">
            Find rides. Fill seats. Move faster
          </h1>
          <p className="text-md">
            Jiya makes ridesharing simple and safe. Join a community of verified
            commuters turning empty seats into shared journeys at affordable
            costs.
          </p>
          <div className="flex flex-col gap-2">
            <form className="flex gap-2 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-solid border-1 border-gray-400 rounded-xl flex  p-2 gap-2"
              />
              <button className="flex gap-2 bg-blue-800 p-2 rounded-xl">
                <p>Join the waitlist</p>
                <HugeiconsIcon icon={SentIcon} />
              </button>
            </form>
            <Avatars />
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
      </div>
    </div>
  );
}
