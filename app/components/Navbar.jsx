"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/public/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Product", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <nav className="w-full bg-black text-gray-200 fixed top-0 left-0 z-50">
      <div
        className="
          max-w-6xl mx-auto 
          flex items-center justify-between 
          py-4 px-6 lg:px-12
        "
      >
        
        <div className="flex items-center gap-3">
          <Image src={logo} alt="FinBiz Logo" width={28} height={28} />
          <h1 className="text-lg font-semibold text-gray-100">FinBiz</h1>
        </div>

        
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

         
        <div className="flex items-center gap-4">
          <button className="hidden lg:block bg-gray-100 text-black text-sm rounded-full px-5 py-1.5 hover:bg-white transition">
            Get Started
          </button>
 
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-200 text-2xl lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

     
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-black text-gray-200 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col p-6 space-y-6">
        
          <button
            onClick={() => setOpen(false)}
            className="text-gray-200 text-2xl self-end"
          >
            <X size={26} />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button className="bg-gray-100 text-black text-sm rounded-full px-4 py-1 w-max">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
