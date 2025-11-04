"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import User1 from "@/public/images/User1.png";
import User2 from "@/public/images/User2.png";
import User3 from "@/public/images/User3.png";
import User4 from "@/public/images/User4.png";

export default function Home() {
  return (
    <section className="bg-[#1D1C20] text-white flex flex-col items-center justify-center   px-6">
      {/* Tag */}
      <div className="bg-[#171F05] md:mt-25 mt-23 flex items-center gap-2 border border-[#364C09] text-[#A3DC2F] text-sm px-4 py-1 rounded-full mb-4">
        <span className="bg-[#A3DC2F] text-[#0f0f0f] font-medium text-xs px-2 py-0.5 rounded-full">
          NEW
        </span>
        <span className="flex items-center gap-1 text-[#A3DC2F]">
          Introducing AI Automation
          <ArrowRight size={14} className="text-[#A3DC2F]" />
        </span>
      </div>

     
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-4">
        The Finance Solutions <br /> For Your Business
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mb-8">
        Empower your finance team. The one-stop platform for all financial
        management of small and medium-sized businesses.
      </p>

      <div className="flex items-center w-full max-w-md mb-10 bg-[#242424] rounded-full">
  <input
    type="email"
    placeholder="Enter your email address"
    className="flex-1 bg-transparent text-sm text-gray-300 px-5 py-4 focus:outline-none placeholder-gray-500"
  />
  <button className="bg-white text-black font-medium text-sm px-6 py-3 m-1 rounded-full hover:bg-gray-200 transition">
    Book a Demo
  </button>
</div>


      <div className="flex flex-col items-center gap-2">
        <div className="flex -space-x-3">
          {[User1, User2, User3, User4].map((user, index) => (
            <Image
              key={index}
              src={user}
              alt={`User ${index + 1}`}
              width={40}
              height={40}
              className="rounded-full border-2 border-[#0f0f0f]"
            />
          ))}
        </div>

        <p className="text-[#9B9CA1] text-sm mb-5">
          1,200+ reviews (4.9 of 5)
        </p>
      </div>
    </section>
  );
}
