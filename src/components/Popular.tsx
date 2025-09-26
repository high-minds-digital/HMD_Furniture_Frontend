import React from 'react'
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
const blogPosts = [
  {
    title: "Nordic Chair",
    description: "Donec mattis porta eros, aliquet finibus risus in. Donecd",
    image: "/product-1-1.png",
  },
  {
    title: "Kruzi Aero",
    description: "Donec mattis porta eros, aliquet finibus risus in. Donecd",
    image: "/product-2-1.png",
  },
  {
    title: "Ergonomic Chair",
    description: "Donec mattis porta eros, aliquet finibus risus in. Donecd",
    image: "/product-3-1.png",
  },
];


const Popular = () => {
  return     <section className="py-20 bg-[#eff2f1]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-[#2f2f2f] text-center mb-16">
            Popular Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-[#35736e4c] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-16 h-16 object-cover"
                        alt={post.title}
                        src={post.image}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-black text-sm mb-2">
                        {post.title}
                      </h3>
                      <p className="text-[#6a6a6a] text-sm leading-5 mb-3">
                        {post.description}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-[#6a6a6a] text-xs font-bold">
                        Read more
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

}

export default Popular