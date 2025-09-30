import React from "react";
import { Button } from "../ui/button";
import { HeroSelectors as selectors } from "@/utils/selectors/HeroSelectors";

const Hero = () => {
  return (
    <section className={selectors.section}>
      {/* Gradient Overlay */}
      <div className={selectors.gradient} />

      <div className={selectors.container}>
        {/* Header / Title */}
        <div className={selectors.header}>
          <h1 className={selectors.title}>
            Modern Interior <br /> Design Studio
          </h1>
          <p className={selectors.subtitle}>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done.
          </p>
        </div>

        {/* Grid / Content */}
        <div className={selectors.grid}>
          {/* Left: Buttons */}
          <div className={selectors.left}>
            <Button className={selectors.btnPrimary}>Shop Now</Button>
            <Button className={selectors.btnOutline}>Explore</Button>
          </div>

          {/* Right: Image */}
          <div className={selectors.right}>
            <img
              className={selectors.image}
              src="/couch-1.png"
              alt="Modern Couch"
            />
            <div className={selectors.decor}>
              <img src="/dotted.png" alt="Decoration" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
