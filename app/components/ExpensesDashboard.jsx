"use client";
import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Users } from "lucide-react";

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
    <section className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)]">

        {/* Card 1 - Simple Analytics */}
        <div className="bg-[#141414] rounded-2xl p-6 flex flex-col justify-between shadow-md border border-[#1E1E1E]">
          <h3 className="text-base font-medium mb-2">Simple analytics</h3>
          <p className="text-sm text-gray-400 mb-4">
            Make informed decisions backed by data through our analytics tools.
          </p>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Line type="monotone" dataKey="value" stroke="#A3DC2F" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        
        <div className="bg-[#141414] rounded-2xl p-6 flex flex-col justify-between border border-[#1E1E1E]">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Boosting Business.<br />Today and Tomorrow.
          </h3>
          <p className="text-sm text-gray-400 text-center mb-6">
            Bring harmony to team expenses with budget limits and real-time monitoring.
            Freedom for your staff. Peace of mind for you.
          </p>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Line type="monotone" dataKey="value" stroke="#00ADEF" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="value" stroke="#2E2E2E" strokeWidth={1} strokeDasharray="3 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        
        <div className="bg-[#141414] rounded-2xl p-6 flex flex-col justify-between items-center border border-[#1E1E1E] text-center">
          <h3 className="text-base font-medium mb-2">Easy collaboration</h3>
          <p className="text-sm text-gray-400 mb-4">
            Seamlessly collaborate with your team members for faster workflow.
          </p>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-[#2B2B2B] border-2 border-[#0B0B0B] flex items-center justify-center"
              >
                <Users className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-[#141414] rounded-2xl p-6 flex flex-col justify-between border border-[#1E1E1E] sm:col-span-2 lg:col-span-1">
          <h3 className="text-base font-semibold mb-2">
            Real-time accounting at your fingertips.
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Take the pain out of bookkeeping! Wave goodbye to paperwork and endless email reminders.
          </p>

          <div className="bg-[#0E0E0E] rounded-xl p-4 mt-4">
            <h4 className="text-sm font-semibold mb-2">Monthly Invoices</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-300">John Clark</span>
                <span className="text-gray-500">download.pdf</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Michael Lens</span>
                <span className="text-gray-500">download.pdf</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">John Smith</span>
                <span className="text-gray-500">download.pdf</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 text-right text-xl font-bold">$3453.00</div>
        </div>

         
        <div className="bg-[#141414] rounded-2xl p-8 flex flex-col justify-center border border-[#1E1E1E] sm:col-span-2 lg:col-span-2 text-center">
          <h3 className="text-xl font-semibold mb-3">Optimise expense Management as a team</h3>
          <p className="text-sm text-gray-400 mb-6">
            Bring harmony to team expenses with budget limits and real-time monitoring.
            Freedom for your staff. Peace of mind for you.
          </p>
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300">
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpenseDashboard;
