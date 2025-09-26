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
export { navigationItems, iconItems };