import React from "react";
import { Button } from "../ui/button";
import { products } from "./ProductData";
import { productSelector as s } from "@/utils/selectors/ProductSelector";

const Product = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.gridWrapper}>
          <div className={s.leftContent}>
            <h2 className={s.title}>
              Crafted with <br />
              excellent <br />
              material.
            </h2>
            <p className={s.description}>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            </p>
            <Button className={s.exploreButton}>Explore</Button>
          </div>

          <div className={s.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={s.productCard}>
                <img
                  className={s.productImage}
                  alt={product.name}
                  src={product.image}
                />
                <h3 className={s.productName}>{product.name}</h3>
                <p className={s.productPrice}>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
