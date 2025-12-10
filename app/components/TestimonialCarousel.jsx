"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";

import Randy from "@/public/images/Randy.png";
import Sandy from "@/public/images/Alfredo.png";
import Angel from "@/public/images/Angel.png";
import Jordan from "@/public/images/Alfredo.png";
import Sammy from "@/public/images/Angel.png";

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Alfonda Lubin", rating: 5, text: "...", image: Randy },
    { id: 2, name: "Sandy Leon", rating: 5, text: "...", image: Sandy },
    { id: 3, name: "Angel Mango", rating: 5, text: "...", image: Angel },
    { id: 4, name: "Jordan Smith", rating: 5, text: "...", image: Jordan },
    { id: 5, name: "Maria Garcia", rating: 5, text: "...", image: Sammy },
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-6xl mx-auto text-center">

        <Badge className="mb-3 bg-[#171F05] border border-[#364C09] text-[#A3DC2F]">
          <MessageSquare className="mr-1 w-4 h-4" />
          Testimonials
        </Badge>

        <h2 className="text-white text-4xl font-bold mb-6">
          What are people saying
        </h2>

        <Carousel className="relative">

          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full md:basis-1/3 flex justify-center"
              >
                <TestimonialCard testimonial={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />

        </Carousel>

      </div>
    </section>
  );
}
