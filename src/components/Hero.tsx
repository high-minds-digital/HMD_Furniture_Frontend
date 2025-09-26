import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#3b5d50] relative flex items-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b5d50] to-[#2d4a3f]" />

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Modern Interior <br />
              Design Studio
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done.
            </p>

        
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-[#f9bf29] text-[#2f2f2f] hover:bg-[#f9bf29]/90 px-6 sm:px-8 py-3 rounded-full font-medium"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-black hover:bg-white/10 px-6 sm:px-8 py-3 rounded-full font-medium"
              >
                Explore
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-full mx-auto object-cover rounded-lg"
              alt="Modern Couch"
              src="/couch-1.png"
            />
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 opacity-20">
              <img
                src="/dotted.png"
                alt="Decoration"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
