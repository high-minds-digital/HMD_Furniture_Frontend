import React from "react";
import { Footerselectors as s } from "@/utils/selectors/FooterSelector";
import { navigationColumns } from "./Feature/FeatureData";


const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.topGrid}>
          <div className={s.brandSection}>
            <div className={s.brandTitle}>
              Furni<span className={s.brandDot}>.</span>
            </div>
            <p className={s.brandDescription}>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done. This is a
              long post for the text. This small text has to be placed here as
              a placeholder.
            </p>
          </div>

          {/* Featured Products Section */}
          <div className={s.featuredContainer}>
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
        </div>


        <div className={s.socialIcons}>
          <img
            className={s.socialImage}
            alt="Social Media Icons"
            src="/social-media-icon.png"
          />
        </div>

        {/* Divider */}
        <hr className={s.divider} />

        {/* Bottom */}
        <div className={s.bottom}>
          <div className={s.copyright}>
            © 2022 Furni. All Rights Reserved.
          </div>
          <div className={s.policyLinks}>
            <a href="#" className={s.policyLink}>
              Terms & Conditions
            </a>
            <a href="#" className={s.policyLink}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
