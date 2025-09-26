"use client";
import { User, ShoppingCart } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "#", active: true },
  { label: "Shop", href: "#shop", active: false },
  { label: "About", href: "#about", active: false },
  { label: "Contact", href: "#contact", active: false },
];

const iconItems = [
  { name: "User", icon: User },
  { name: "Cart", icon: ShoppingCart },
];

export default function Navbar({ navItems = navigationItems, icons = iconItems }) {
  return (
    <header className="relative z-10  mx-auto px-4 py-6 bg-[#3b5d50]">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-white text-3xl font-medium">
          Furni<span className="text-white/30">.</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-white font-medium transition-opacity hover:opacity-100 ${
                item.active ? "opacity-100" : "opacity-70"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {icons.map((iconItem, index) => {
            const IconComponent = iconItem.icon;
            return (
              <button
                key={index}
                aria-label={iconItem.name}
                className="text-white hover:text-white/80 transition-colors"
              >
                <IconComponent className="w-6 h-6" />
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
