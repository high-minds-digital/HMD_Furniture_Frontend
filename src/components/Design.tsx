import React from 'react'

const Design = () => {
  return  <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full h-64 object-cover rounded-2xl"
                alt="Interior Design 1"
                src="/mask-group-1.png"
              />
              <div className="space-y-4">
                <img
                  className="w-full h-32 object-cover rounded-2xl"
                  alt="Interior Design 2"
                  src="/mask-group-2.png"
                />
                <img
                  className="w-full h-28 object-cover rounded-2xl"
                  alt="Interior Design 3"
                  src="/mask-group-3.png"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-[#2f2f2f] mb-6">
                We help you make<br />
                Modern Interior Design
              </h2>
              <p className="text-[#6a6a6a] text-sm leading-6 mb-8">
                Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
                vivethe as it was for us to know what was to be done. This is a
                long post for the text. This small text has to be placed here,
                since this is a placeholder. You can also change it.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full border-2 border-[#3b5d50]" />
                  <span className="text-[#6a6a6a] text-sm">
                    Donec nibh magna, interdum quis massa sed
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full border-2 border-[#3b5d50]" />
                  <span className="text-[#6a6a6a] text-sm">
                    Donec nibh magna, interdum quis massa sed
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full border-2 border-[#3b5d50]" />
                  <span className="text-[#6a6a6a] text-sm">
                    Donec nibh magna, interdum quis massa sed
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full border-2 border-[#3b5d50]" />
                  <span className="text-[#6a6a6a] text-sm">
                    Donec nibh magna, interdum quis massa sed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
}

export default Design