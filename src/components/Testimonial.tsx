import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export const ClientTestimonialsSection = () => {
  return (
    <section className="w-full relative py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#2f2f2f] text-[34px] text-center tracking-[0] leading-[41px] mb-12">
          Testimonials
        </h2>

        <div className="relative flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 w-[58px] h-[58px] bg-gray-400 rounded-full opacity-10 hover:opacity-20 transition-opacity"
            disabled
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <div className="max-w-[759px] mx-16 [font-family:'Inter',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-8">
            &quot;Donec nibh magna, interdum quis massa sed, rhoncus laoreet
            quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante
            augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel
            nibh tellus. Pellentesque in risus non dui venenatis sollicitudin
            sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan
            non. Pellentesque ma&quot;
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 w-[58px] h-[58px] bg-green-600 rounded-full hover:bg-green-700 transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};
