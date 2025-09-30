import React from "react";
import { HeroSelectors as selectors } from "@/utils/selectors/HeroSelectors";
import HeroHeader from "./HeroHeader";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className={selectors.section}>
      <div className={selectors.gradient} />
      <div className={selectors.container}>
        <div className={selectors.grid}>
          
          <HeroHeader />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
