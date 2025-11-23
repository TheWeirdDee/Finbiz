"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D0D0D] text-gray-300 py-16 px-10 md:px-26">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <div>
           <div className="flex items-center gap-3">
          <Image src={logo} alt="FinBiz Logo" width={28} height={28} />
          <h1 className="text-2xl font-bold text-gray-100">FinBiz</h1>
        </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs mt-6">
            Data analysis software is a type of software tool used
            for data analysis and reporting.
          </p>

          <div className="flex gap-4 mt-5">
            <a className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#A7FF56] hover:text-black transition">
              <FaFacebookF size={14} />
            </a>
            <a className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#A7FF56] hover:text-black transition">
              <FaTwitter size={14} />
            </a>
            <a className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#A7FF56] hover:text-black transition">
              <FaInstagram size={14} />
            </a>
            <a className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#A7FF56] hover:text-black transition">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400 mt-2 md:mt-6">
            <li className="hover:text-white transition cursor-pointer">Service</li>
            <li className="hover:text-white transition cursor-pointer">Resources</li>
            <li className="hover:text-white transition cursor-pointer">About us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-3 text-gray-400 mt-2 md:mt-6">
            <li className="hover:text-white transition cursor-pointer">Customer Support</li>
            <li className="hover:text-white transition cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 bg-[#1A1A1A] rounded-l-full focus:outline-none text-sm text-gray-300 placeholder-gray-500"
            />
            <button className="bg-[#A3DC2F] text-black px-6 py-2 rounded-r-full font-medium hover:bg-[#c1ff78] transition">
              Join
            </button>
          </div>
        </div>
      </div>

    
      <div className="w-full border-t border-[#333333] mt-12 pt-6 text-center text-white text-sm">
        © Copyright 2024. All Rights Reserved by FinBiz
      </div>
    </footer>
  );
}
