import { MailIcon, SendIcon } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


export const NewsletterSubscriptionSection = () => {
  return (
    <section className="py-20 bg-[#eff2f1] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MailIcon className="w-6 h-6 text-[#2f2f2f]" />
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#2f2f2f] text-2xl tracking-[0] leading-[normal]">
              Subscribe to Newsletter
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto">
            <Input
              placeholder="Enter your name"
              className="flex-1 h-12 rounded-lg border border-solid border-[#c4c4c4] px-4 [font-family:'Inter',Helvetica] font-normal text-[#2f2f2f] text-sm"
            />

            <Input
              placeholder="Enter your e-mail"
              type="email"
              className="flex-1 h-12 rounded-lg border border-solid border-[#c4c4c4] px-4 [font-family:'Inter',Helvetica] font-normal text-[#2f2f2f] text-sm"
            />

            <Button className="w-12 h-12 bg-[#35736e] rounded-lg hover:bg-[#35736e]/90 flex items-center justify-center">
              <SendIcon className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-96 h-80 opacity-50">
          <img
            className="w-full h-full object-cover"
            alt="Sofa"
            src="/sofa-1.png"
          />
        </div>
      </div>
    </section>
  );
};
