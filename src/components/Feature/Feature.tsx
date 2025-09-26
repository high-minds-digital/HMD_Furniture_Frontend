import React from "react";
import { navigationColumns } from "./FeatureData";
import { Featureselectors as s } from "@/utils/selectors/FeatureSelector";  

export const FeaturedProductsSection = () => {
  return (
    <div className={s.container}>
      {navigationColumns.map((column, index) => (
        <div key={index}>
          <h4 className={s.columnTitle}>{column.title}</h4>
          <nav>
            {column.links.map((link, linkIndex) => (
              <a key={linkIndex} href="#" className={s.link}>
                {link}
              </a>
            ))}
          </nav>
        </div>
      ))}
    </div>
  );
};
