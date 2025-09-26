import React from "react";
import { Button } from "./ui/button";
import { selector } from "@/utils/selectors/HeroSelector";


const Hero = () => {
  return (
    <section className={selector.section}>
      <div className={selector.gradient} />

      <div className={selector.container}>
        <div className={selector.grid}>
          {/* Left Text */}
          <div className={selector.textBox}>
            <h1 className={selector.heading}>
              Modern Interior <br />
              Design Studio
            </h1>
            <p className={selector.paragraph}>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done.
            </p>

            <div className={selector.buttonWrapper}>
              <Button className={selector.primaryBtn}>Shop Now</Button>
              <Button variant="outline" className={selector.outlineBtn}>
                Explore
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className={selector.rightImageBox}>
            <img
              className={selector.couchImg}
              alt="Modern Couch"
              src="/couch-1.png"
            />
            <div className={selector.dottedWrapper}>
              <img
                src="/dotted.png"
                alt="Decoration"
                className={selector.dottedImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
