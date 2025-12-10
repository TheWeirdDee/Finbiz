import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="bg-[#161616] border-none text-white w-[340px]">
      <CardContent className="p-6 relative">
        <p className="text-gray-400 mb-4">{testimonial.text}</p>

        <div className="flex items-center gap-3">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={45}
            height={45}
            className="rounded-full"
          />

          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <div className="flex">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        <Quote className="absolute bottom-4 right-4 w-8 h-8 text-gray-600" />
      </CardContent>
    </Card>
  );
};
 