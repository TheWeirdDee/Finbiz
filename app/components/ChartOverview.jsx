"use client";
import React from "react";
import Image from "next/image";
import red from "@/public/images/Red.png";
import green from "@/public/images/Green.png";
import blue from "@/public/images/Blue.png";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartOverview = () => {
  const chartData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 60 },
    { name: "May", value: 50 },
    { name: "Jun", value: 70 },
    { name: "Jul", value: 55 },
    { name: "Aug", value: 75 },
    { name: "Sep", value: 65 },
  ];

  const StatCard = ({ title, value, change, isPositive, chartImage }) => (
    <div className="flex flex-col bg-[#242424]/70 backdrop-blur-md rounded-xl p-4 sm:p-5">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs sm:text-sm text-[#F5F5F5]">{title}</span>
        {change && (
          <span
            className={`text-xs font-semibold ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {change}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
          {value}
        </span>
        {chartImage && (
          <div className="w-8 sm:w-10 h-10 relative">
            <Image
              src={chartImage}
              alt={`${title} trend`}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* background layers */}
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-[#1D1C20] hidden sm:block" />
      <div className="absolute inset-0 sm:hidden bg-[#242424]/30 backdrop-blur-lg" />
       
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* main card */}
        
        <div className="bg-[#161616] rounded-2xl p-6 sm:p-8 relative">
          {/* stat cards */} 
          <div className="max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <StatCard
                title="Total Profit"
                value="$350.240"
                change="+89.1%"
                isPositive={true}
                chartImage={green}
              />
              <StatCard
                title="Total Revenue"
                value="$400.690"
                change="+36.3%"
                isPositive={false}
                chartImage={red}
              />
              <StatCard
                title="Products Sold"
                value="$200.000"
                change="+20.5%"
                isPositive={true}
                chartImage={blue}
              />
            </div>
          </div>

           
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            
            <div className="lg:col-span-3 space-y-5">
              <div className="bg-[#1A1A1A] rounded-xl p-5">
                <span className="text-xs sm:text-sm text-[#F5F5F5]">
                  Total Balance
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  $3500
                </h3>
                <button className="w-full mt-4 bg-white text-black py-2 rounded-lg text-sm font-semibold hover:bg-[#F5F5F5] transition-colors">
                  Transfer
                </button>
              </div>

              <div className="bg-[#1A1A1A] rounded-xl p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs sm:text-sm text-[#F5F5F5]">
                    Total Income
                  </span>
                  <span className="text-xs text-[#F5F5F5]">20%</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-white">
                  $320.0
                </span>
              </div>

              <div className="bg-[#1A1A1A] rounded-xl p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs sm:text-sm text-[#F5F5F5]">
                    Total Expense
                  </span>
                  <span className="text-xs text-[#F5F5F5]">60%</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-white">
                  $220.0
                </span>
              </div>
            </div>

           
            <div className="lg:col-span-6 bg-[#1D1C20] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  Spend Overview
                </h3>
                <div className="flex gap-2 text-xs sm:text-sm mr-6">
                  <button className="px-2 sm:px-3 py-1 text-[#707070] hover:text-white transition-colors">
                    Day
                  </button>
                  <button className="px-2 sm:px-3 py-1 text-[#707070] hover:text-white transition-colors">
                    Week
                  </button>
                  <button className="px-2 sm:px-3 py-1 text-[#707070] hover:text-white transition-colors">
                    Monthly
                  </button>
                  <button className="px-2 sm:px-3 py-1 text-white bg-[#707070] rounded-md">
                    Yearly
                  </button>
                </div>
              </div>

              <div className="h-56 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      dataKey="name"
                      stroke="#6B7280"
                      style={{ fontSize: "12px" }}
                    />
                    <YAxis stroke="#6B7280" style={{ fontSize: "12px" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      strokeWidth={2}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

        
            <div className="lg:col-span-3 space-y-4">
              <div>
                <h4 className="text-xs sm:text-sm text-[#F5F5F5]">Employees</h4>
              </div>

              {[
                { label: "Independent Contractor" },
                { label: "Commission Employee" },
                { label: "Shareholders" },
              ].map((item) => (
                <div key={item.label}>
                  <h5 className="text-sm text-[#F5F5F5] mb-3">{item.label}</h5>
                  <div className="space-y-4">
                    <div
                      className="h-3 rounded-full"
                      style={{ width: "50%", backgroundColor: "#1D1C20" }}
                    ></div>
                    <div
                      className="h-3 rounded-full"
                      style={{ width: "90%", backgroundColor: "#4F4F4F" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

    
         

         
<div className="relative mt-12 flex justify-center">
 
  <div className="relative z-20 bg-[#FFFFFF33] backdrop-blur-xl px-6 sm:px-6 py-2 rounded-xl flex items-center gap-4 sm:gap-4 text-sm text-white">
    <button className="hover:text-[#A3DC2F] transition-colors">Products</button>
    <button className="hover:text-[#A3DC2F] transition-colors">Integration</button>
    <button className="hover:text-[#A3DC2F] transition-colors">Demo</button>
    <button className="hover:text-[#A3DC2F] transition-colors">Pricing</button>
    <button className="hover:text-[#A3DC2F] transition-colors font-semibold">Login</button>
  </div>

  
  <div className="absolute md:-bottom-60 -bottom-40 left-1/2 -translate-x-1/2 z-10 w-[60%] sm:w-[45%] pointer-events-none">
    <Image
      src="/images/linear.png"
      alt="linear glow"
      width={800}
      height={200}
      className="w-full object-contain opacity-80"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default ChartOverview;
