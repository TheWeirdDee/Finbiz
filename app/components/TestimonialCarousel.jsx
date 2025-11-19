"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = React.useState(3);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alfonda Lubin",
      rating: 5,
      text: "I really like this system at this management. I love recommending this system to you guys",
      image: "AB",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Sandy Leon",
      rating: 5,
      text: "We align our successes with the success of our customers, which is why we offer transcosmic our software",
      image: "SL",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Angel Mango",
      rating: 5,
      text: "I really like this system at this management. I love recommending this system to you guys",
      image: "AM",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      name: "Jordan Smith",
      rating: 5,
      text: "Outstanding experience! This platform has transformed how we manage our operations and increased our productivity significantly.",
      image: "JS",
      color: "bg-green-500",
    },
    {
      id: 5,
      name: "Maria Garcia",
      rating: 5,
      text: "The support team is amazing and always ready to help. Best investment we made for our business this year.",
      image: "MG",
      color: "bg-pink-500",
    },
  ];
 
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);
 
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const TestimonialCard = ({ testimonial }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] rounded-lg p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-colors h-full"
    >
      
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-gray-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.417-2-7-2s-7 .75-7 2v10c0 1 0 7 7 7z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4-2-7-2s-7 .75-7 2v10c0 1 0 7 7 7z" />
        </svg>
      </div>

    
      <p className="text-gray-300 text-sm sm:text-base mb-6">
        {testimonial.text}
      </p>

    
      <div className="flex items-center gap-3">
        <div
          className={`${testimonial.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm`}
        >
          {testimonial.image}
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-sm sm:text-base">
            {testimonial.name}
          </h4>
         
          <div className="flex gap-1 mt-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What are people saying
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            &quot;Thank you for your kind words and for your for our feedback and are committed to providing the best solutions
            services delivered right now and others have to see about their experience with us.&quot;
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <AnimatePresence mode="wait" custom={direction}>
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${currentIndex}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </AnimatePresence>
          </div>

         
          <div className="flex items-center justify-center gap-4">
             
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </motion.button>

            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`rounded-full transition-colors ${
                    index === currentIndex ? "bg-green-400" : "bg-gray-600"
                  }`}
                  style={{
                    width: index === currentIndex ? 12 : 8,
                    height: index === currentIndex ? 12 : 8,
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;