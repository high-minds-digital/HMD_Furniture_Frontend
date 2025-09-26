import React from "react";

export const FeaturedProductsSection = () => {
  const navigationColumns = [
    {
      title: "About",
      links: ["About us", "Services", "Blog", "Contact us"],
    },
    {
      title: "Support",
      links: ["Support", "Knowledge base", "Live chat"],
    },
    {
      title: "Company",
      links: ["Jobs", "Our team", "Leadership", "Privacy Policy"],
    },
  ];

  return (
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
      {navigationColumns.map((column, index) => (
        <div
          key={index}
        >
          <h4 className="font-semibold text-[#2f2f2f] text-sm mb-4">
            {column.title}
          </h4>
          <nav className="space-y-2">
          {column.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className="block text-[#6a6a6a] text-sm hover:text-[#2f2f2f] transition-colors"
              >
              {link}
              </a>
          ))}
          </nav>
        </div>
      ))}
    </div>
  );
};
