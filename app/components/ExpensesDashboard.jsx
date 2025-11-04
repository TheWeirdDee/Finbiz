"use client";
import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Users, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import analyticsGraph from "@/public/images/analyticsGraph.png";
import graph from "@/public/images/graph.png";
import people from "@/public/images/people.png";

const chartData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 60 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 70 },
  { name: "May", value: 50 },
  { name: "Jun", value: 80 },
];

const ExpenseDashboard = () => {
  return (
    <section className="min-h-screen text-white py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto space-y-8">

        {/* ===== TOP ROW ===== */}
        <div
          className="
            grid gap-5
            grid-cols-1
            lg:grid-cols-[300px_620px_300px]
            justify-center
            auto-rows-[420px]
          "
        >

          {/* Card 1 */}
          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-5 flex flex-col">
            <h3 className="text-base font-medium mt-5">Simple analytics</h3>
            <p className="text-sm text-gray-400 mt-4">
              Make informed decisions backed by data through our analytics tools.
            </p>

            <div className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col space-y-3 mt-15">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#236456] border border-[#33C6AB]">
                  <ArrowUpRight className="w-4 h-4 text-[#33C6AB]" />
                </div>
                <span className="text-sm font-semibold text-[#33C6AB]">14.12%</span>
              </div>

              <div className="w-full h-[120px] relative">
                <Image
                  src={analyticsGraph}
                  alt="Analytics Growth Graph"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-5 flex flex-col">
            <h3 className="text-lg font-semibold mt-5 text-center">
              Boosting Business.<br />Today and Tomorrow.
            </h3>
            <p className="text-sm text-gray-400 text-center mt-4">
              Bring harmony to team expenses with budget limits and real-time monitoring.
              Freedom for your staff. Peace of mind for you.
            </p>

            {/* Graph section */}
            <div className="bg-[#1A1A1A] rounded-xl p-4 flex justify-center items-center mt-10">
              <div className="w-full h-[140px] relative">
                <Image
                  src={graph}
                  alt="Business Growth Graph"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-5 flex flex-col items-center text-center">
            <h3 className="text-base font-medium mt-5">Easy collaboration</h3>
            <p className="text-sm text-gray-400 mt-4">
              Seamlessly collaborate with your team members for faster workflow.
            </p>

            {/* People Image with layered outline */}
            <div className="relative flex items-center justify-center mt-20">
              {/* Outer outline ring */}
              <div className="absolute w-[160px] h-[160px] rounded-full bg-[#171717] border border-[#242424]" />

              {/* Inner circle with bg and image */}
              <div className="relative w-[120px] h-[120px] rounded-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
                <Image
                  src={people}
                  alt="Team collaboration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

        </div> {/* ✅ <-- FIXED: properly closed top grid div */}

        {/* ===== BOTTOM ROW ===== */}
        <div
          className="
            grid gap-5
            grid-cols-1
            lg:grid-cols-[620px_620px]
            justify-center
            auto-rows-[420px]
          "
        >
          {/* Card 4 */}
          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-5 flex flex-col justify-between">
            <h3 className="text-base font-semibold mb-2">
              Real-time accounting at your fingertips.
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Take the pain out of bookkeeping! Wave goodbye to paperwork and endless email reminders.
            </p>

            <div className="bg-[#0E0E0E] rounded-xl p-4 mt-4">
              <h4 className="text-sm font-semibold mb-2">Monthly Invoices</h4>
              <ul className="space-y-2 text-sm">
                {["John Clark", "Michael Lens", "John Smith"].map((name, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span className="text-gray-300">{name}</span>
                    <span className="text-gray-500">download.pdf</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 text-right text-xl font-bold">$3453.00</div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-6 flex flex-col justify-center text-center">
            <h3 className="text-lg font-semibold mb-3">Optimise expense Management as a team</h3>
            <p className="text-sm text-gray-400 mb-6">
              Bring harmony to team expenses with budget limits and real-time monitoring.
              Freedom for your staff. Peace of mind for you.
            </p>
           <div className="flex justify-center">
  <button className="px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300">
    Explore more
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpenseDashboard;
