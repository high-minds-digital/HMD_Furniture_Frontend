import React from 'react'
import { FeaturedProductsSection } from './Feature'

const Footer = () => {
  return    <footer className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="text-black text-3xl font-medium mb-6">
                Furni<span className="text-[#2f2f2f]">.</span>
              </div>
              <p className="text-[#6a6a6a] text-sm leading-6 max-w-md">
                Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
                vivethe as it was for us to know what was to be done. This is a
                long post for the text. This small text has to be placed here,
                since this is a placeholder.
              </p>
            </div>

        
            <FeaturedProductsSection/>
          </div>

          <div className="flex items-center justify-center mb-8">
            <img
              className="w-48 h-auto"
              alt="Social Media Icons"
              src="/social-media-icon.png"
            />
          </div>

          <hr className="border-[#6a6a6a]/20 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#6a6a6a]">
            <div className="mb-4 md:mb-0">
              Copyright 2022 degraft87@gmail.com. All Rights Reserved.
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-[#2f2f2f] transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-[#2f2f2f] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
}

export default Footer