"use client";
import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Users, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import analyticsGraph from "@/public/images/analyticsGraph.png";
import graph from "@/public/images/graph.png";
import people from "@/public/images/people.png";
import monthlyInvoiceOne from "@/public/images/MonthlyInvoiceOne.png";
import monthlyInvoiceTwo from "@/public/images/MonthlyInvoiceTwo.png";
import monthlyInvoiceThree from "@/public/images/MonthlyInvoiceThree.png";

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
        <div
          className="
           grid gap-5
    grid-cols-1
    sm:grid-cols-1
    lg:grid-cols-2
    xl:grid-cols-[300px_620px_300px]
    auto-rows-[420px]
    justify-center
  "
        >
          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-5 flex flex-col">
            <h3 className="text-base font-medium mt-5">Simple analytics</h3>
            <p className="text-sm text-gray-400 mt-4">
              Make informed decisions backed by data through our analytics
              tools.
            </p>

            <div className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col space-y-3 mt-15">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#236456] border border-[#33C6AB]">
                  <ArrowUpRight className="w-4 h-4 text-[#33C6AB]" />
                </div>
                <span className="text-sm font-semibold text-[#33C6AB]">
                  14.12%
                </span>
              </div>

              <div className="w-full h-[120px] relative">
                <Image
                  src={analyticsGraph}
                  alt="Analytics Growth Graph"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100px, (max-width: 1024px) 200px, 400px"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-5 flex flex-col">
            <h3 className="text-lg font-semibold mt-5 text-center">
              Boosting Business.
              <br />
              Today and Tomorrow.
            </h3>
            <p className="text-sm text-gray-400 text-center mt-4">
              Bring harmony to team expenses with budget limits and real-time
              monitoring. Freedom for your staff. Peace of mind for you.
            </p>

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

          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-5 flex flex-col items-center text-center">
            <h3 className="text-base font-medium mt-5">Easy collaboration</h3>
            <p className="text-sm text-gray-400 mt-4">
              Seamlessly collaborate with your team members for faster workflow.
            </p>

            <div className="relative flex items-center justify-center mt-20">
              <div className="absolute w-[160px] h-[160px] rounded-full bg-[#171717] border border-[#242424]" />

              <div className="relative w-[120px] h-[120px] rounded-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
                <Image
                  src={people}
                  alt="Team collaboration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 160px"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            grid gap-5
            grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-[620px_620px]
            justify-center
            auto-rows-[420px]
          "
        >
          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-6">
            <div className="w-full mb-6">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
                Real-time accounting at your fingertips.
              </h3>

              <p className="text-sm text-gray-400">
                Take the pain out of book keeping! Wave goodbye to mountains of
                paperwork and endless email reminders. There’s now a new way of
                accounting.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-6 md:mt-20 mt-0">
              <div className="hidden lg:block flex-1 mt-16">
                <div className="bg-[#0E0E0E] rounded-xl p-5 w-full">
                  <h4 className="text-gray-400 text-sm mb-1">Total Balance</h4>
                  <p className="text-3xl font-bold text-white">$3453.00</p>
                  <div className="mt-2 h-[4px] w-full bg-[#2A2A2A] rounded-full"></div>
                  <div className="mt-1 h-[4px] w-35 bg-[#2A2A2A] rounded-full"></div>
                  <div className="mt-1 h-[4px] w-20 bg-[#2A2A2A] rounded-full"></div>
                </div>
              </div>

              <div className="hidden md:block flex-1">
                <div className="bg-[#0E0E0E] rounded-xl p-5 w-full">
                  <h4 className="text-white text-sm font-semibold mb-3">
                    Monthly Invoice
                  </h4>

                  <ul className="space-y-3">
                    {[
                      { name: "John Client", img: monthlyInvoiceOne },
                      { name: "Michele Leas", img: monthlyInvoiceTwo },
                      { name: "John Smith", img: monthlyInvoiceThree },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full overflow-hidden">
                              <Image
                                src={item.img}
                                alt={item.name}
                                width={24}
                                height={24}
                                className="object-cover"
                              />
                            </div>
                            <span className="text-gray-200 text-sm">
                              {item.name}_download.Pdf
                            </span>
                          </div>

                          <div className="mt-1 ml-9 h-[6px] w-35 max-w-[300px] bg-[#2A2A2A] rounded-full"></div>
                        </div>

                        <span className="text-gray-500 text-lg font-semibold">
                          ⋮
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex  md:hidden gap-4 w-full">
                 

                <div className="bg-[#0E0E0E] rounded-xl p-3 w-1/1">
                  <h4 className="text-white text-sm font-semibold mb-3">
                    Monthly Invoice
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { name: "John Client", img: monthlyInvoiceOne },
                      { name: "Michele Leas", img: monthlyInvoiceTwo },
                      { name: "John Smith", img: monthlyInvoiceThree },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full overflow-hidden">
                              <Image
                                src={item.img}
                                alt={item.name}
                                width={24}
                                height={24}
                                className="object-cover"
                              />
                            </div>
                            <span className="text-gray-200 text-sm">
                              {item.name}_download.Pdf
                            </span>
                          </div>

                          <div className="mt-1 ml-9 h-[4px] w-35 max-w-[300px] bg-[#2A2A2A] rounded-full"></div>
                        </div>

                        <span className="text-gray-500 text-lg font-semibold">
                          ⋮
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#161616] rounded-[24px] border border-[#333333] p-6 flex flex-col justify-center text-center">
            <h3 className="text-lg font-semibold mb-3">
              Optimise expense Management as a team
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Bring harmony to team expenses with budget limits and real-time
              monitoring. Freedom for your staff. Peace of mind for you.
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
