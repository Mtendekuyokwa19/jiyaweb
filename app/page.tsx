"use client";
import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { SentIcon } from "@hugeicons/core-free-icons";
import Avatars from "@/components/avatar";
import { addToast } from "@heroui/toast";
export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      addToast({
        title: "Success!",
        description: "You've been added to the waitlist.",
        color: "success",
      });
      setEmail("");
    } else {
      const errorData = await response.json();
      let description = "Failed to join waitlist. Please try again.";

      if (response.status === 409) {
        description = "This email is already registered.";
      } else if (response.status === 400 && errorData.error === 'Invalid email format') {
        description = "Please enter a valid email address.";
      }

      addToast({
        title: "Error",
        description,
        color: "danger",
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col    font-sans ">
      <div className="flex sm:flex-col md:flex-row     items-center justify-evenly   px-16  ">
        <section className="flex flex-col gap-4 sm:justify-center md:justify-center h-full">
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
             <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
               <input
                 type="email"
                 placeholder="Enter your email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="border-solid border-1 border-gray-400 rounded-xl flex  p-2 gap-2"
                 required
               />
               <button
                 type="submit"
                 className="flex gap-2 bg-blue-800 p-2 rounded-xl"
               >
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
