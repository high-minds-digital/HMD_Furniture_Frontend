import React from "react";
import { features } from "./AboutData";
import { Aboutselector as selector } from "@/utils/selectors/AboutSelector";

const About = () => {
  return (
    <section className={selector.section}>
      <div className={selector.container}>
        <div className={selector.grid}>
          
          {/* Left Content */}
          <div>
            <h2 className={selector.title}>Why Choose Us</h2>
            <p className={selector.subtitle}>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done.
            </p>

            <div className={selector.featureGrid}>
              {features.map((feature, index) => (
                <div key={index} className={selector.featureItem}>
                  <div className={selector.featureIcon}>
                    <img
                      className={selector.featureImg}
                      alt={feature.title}
                      src={feature.icon}
                    />
                  </div>
                  <div>
                    <h3 className={selector.featureTitle}>{feature.title}</h3>
                    <p className={selector.featureDesc}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={selector.imageWrapper}>
            <img
              className={selector.image}
              alt="Interior Design"
              src="/mask-group.png"
            />
            <div className={selector.decoration}>
              <img src="/dot-1.png" alt="Decoration" className="w-full h-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
