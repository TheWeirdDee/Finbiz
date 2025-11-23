"use client";
import React, { useState, useEffect } from "react";
import { Star, Quote, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Randy from "@/public/images/Randy.png";
import Sandy from "@/public/images/Alfredo.png";
import Angel from "@/public/images/Angel.png";
import Jordan from "@/public/images/Alfredo.png";
import Sammy from "@/public/images/Angel.png";


const TestimonialCarousel = () => {
   const testimonials = [
  { id: 1, name: "Alfonda Lubin", rating: 5, text: "I really like this system at this management. I love recommending this system to you guys", image: Randy, color: "bg-blue-500" },
  { id: 2, name: "Sandy Leon", rating: 5, text: "We align our successes with the success of our customers, which is why we offer transcosmic our software", image: Sandy, color: "bg-purple-500" },
  { id: 3, name: "Angel Mango", rating: 5, text: "I really like this system at this management. I love recommending this system to you guys", image: Angel, color: "bg-yellow-500" },
  { id: 4, name: "Jordan Smith", rating: 5, text: "Outstanding experience! This platform has transformed how we manage our operations and increased our productivity significantly.", image: Jordan, color: "bg-green-500" },
  { id: 5, name: "Maria Garcia", rating: 5, text: "The support team is amazing and always ready to help. Best investment we made for our business this year.", image: Sammy, color: "bg-pink-500" },
];


  const loopTestimonials = [...testimonials, ...testimonials];

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-[#161616] rounded-lg p-9 sm:p-8 flex-shrink-0 w-[350px] md:w-[350px] relative">
    <p className="text-gray-300 text-sm sm:text-base mb-6">{testimonial.text}</p>

    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h4 className="text-white font-semibold text-sm sm:text-base">
          {testimonial.name}
        </h4>
        <div className="flex gap-1 mt-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>

    <Quote className="absolute bottom-4 right-4 w-10 h-10 text-gray-600" />
  </div>
);


  
  const [autoX, setAutoX] = useState(0);
 useEffect(() => {
  if (isDragging) return;

  const interval = setInterval(() => {
    setAutoX(prev => (prev - 1) % (loopTestimonials.length * 350));
  }, 20);

  return () => clearInterval(interval);
}, [isDragging, loopTestimonials.length]);

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#171F05] mt-4 flex items-center gap-2 border border-[#364C09] text-[#A3DC2F] text-sm px-4 py-1 rounded-full w-40 m-auto mb-3">
  <span className="px-2 py-0.5">
    <MessageSquare size={14} className="text-[#A3DC2F]" />
  </span>
  <span className="flex items-center gap-1 text-[#A3DC2F]">
    Testimonials
  </span>
</div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What are people saying
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            &quot;Thank you for your kind words and feedback. We are committed to providing the best solutions, and here’s what others have to say about their experience with us.&quot;
          </p>
        </div>

        
        <div className="hidden md:block overflow-hidden">
          <motion.div
            className="flex gap-6 cursor-grab"
            drag="x"
            dragConstraints={{ left: -loopTestimonials.length * 350, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={{ x: autoX }}
            transition={{ ease: "linear" }}
          >
            {loopTestimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        
        <div className="md:hidden overflow-hidden h-[400px] flex justify-center">
          <motion.div
            className="flex flex-col gap-6 items-center cursor-grab"
            drag="y"
            dragConstraints={{ top: -loopTestimonials.length * 250, bottom: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={{ y: isDragging ? 0 : ["0%", "-50%"] }}
            transition={{ y: { repeat: Infinity, repeatType: "loop", duration: loopTestimonials.length * 2, ease: "linear" } }}
          >
            {loopTestimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
