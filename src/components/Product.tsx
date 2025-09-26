import React from "react";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "Nordic CHAIR",
    price: "$50.00",
    image: "/product-1-1.png",
  },
  {
    id: 2,
    name: "Kruzo Aero Chair",
    price: "$78.00",
    image: "/product-2-1.png",
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    price: "$43.00",
    image: "/product-3-1.png",
  },
];

const Product = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        
          <div>
            <h2 className="text-4xl font-semibold text-[#2f2f2f] mb-6">
              Crafted with <br />
              excellent <br />
              material.
            </h2>
            <p className="text-[#6a6a6a] text-sm leading-6 mb-8">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              
            </p>
            <Button className="bg-[#2f2f2f] text-white hover:bg-[#2f2f2f]/90 px-8 py-3 rounded-full">
              Explore
            </Button>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#f9f9f9] rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center"
              >
                <img
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  alt={product.name}
                  src={product.image}
                />
                <h3 className="font-semibold text-[#2f2f2f] text-sm mb-1">
                  {product.name}
                </h3>
                <p className="font-bold text-[#2f2f2f] text-lg">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
