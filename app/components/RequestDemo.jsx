"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RequestDemoimg from "@/public/images/RequestDemo.png";

export default function RequestDemo() {
  return (
    <div className="w-full bg-[#1A1A1A] py-10 px-4 flex justify-center">
     <div className="
  bg-[#0E0E0E] w-full max-w-6xl rounded-3xl p-6 md:p-10 
  flex flex-col md:flex-row 
  items-start md:items-center   
  gap-10
">

       
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left w-full"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-6 md:mt-0">
            Let’s Upgrade your <br />
            finances experience <br />
            by using FinBiz
          </h1>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#A7FF56] text-black px-6 py-3 rounded-full font-medium"
            >
              Request Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-3 rounded-full font-medium"
            >
              Watch Video
            </motion.button>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.03, y: -5 }}
         className="
            w-full md:flex-1 
            flex justify-center md:justify-end 
            "

        >
          <Image
            src={RequestDemoimg}
            alt="FinBiz Video"
            className="rounded-2xl object-cover w-full h-auto cursor-pointer"
          />
        </motion.div>

      </div>
    </div>
  );
}
