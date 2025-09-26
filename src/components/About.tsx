import React from 'react'
const features = [
  {
    title: "Fast & Free Shipping",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
    icon: "/truck.png",
  },
  {
    title: "Easy to Shop",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
    icon: "/shop-bag.png",
  },
  {
    title: "24/7 Support",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
    icon: "/support.png",
  },
  {
    title: "Hassle Free Returns",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
    icon: "/return.png",
  },
];
const About = () => {
  return  <section className="py-20 bg-[#eff2f1]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#2f2f2f] mb-6">
                Why Choose Us
              </h2>
              <p className="text-[#6a6a6a] text-sm leading-6 mb-12">
                Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
                vivethe as it was for us to know what was to be done.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#34736e33] rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-5 h-5"
                        alt={feature.title}
                        src={feature.icon}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2f2f2f] text-sm mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#6a6a6a] text-sm leading-5">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                className="w-full h-auto object-cover rounded-2xl"
                alt="Interior Design"
                src="/mask-group.png"
              />
              <div className="absolute -top-8 -left-8 w-32 h-32 opacity-20">
                <img src="/dot-1.png" alt="Decoration" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

}

export default About