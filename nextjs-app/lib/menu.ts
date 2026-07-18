/**
 * Full menu, transcribed from the restaurant's printed menu.
 * Item codes and prices are kept exactly as printed (including repeated
 * codes like A5/BB1) so the site matches the menu customers order from.
 */

export type MenuItem = {
  code?: string;
  name: string;
  /** Portion or upcharge note, e.g. "3 pcs" or "proteins add $3". */
  note?: string;
  price: string;
};

export type MenuSection = {
  title: string;
  /** Creole / French name as printed alongside the English heading. */
  subtitle?: string;
  note?: string;
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    title: "Appetizers",
    subtitle: "Amuse Bouche",
    items: [
      { code: "A1", name: "Pâté Chicken / Beef / Bacalao / Herring", price: "$3.00" },
      { code: "A5", name: "Pâté Onion", price: "$3.00" },
      { code: "A5", name: "Pâté Fondant", price: "$3.00" },
      { code: "A6", name: "Jamaican Patties Beef", price: "$3.00" },
      { code: "A7", name: "Jamaican Patties Chicken", price: "$3.00" },
      { code: "A8", name: "Pâté Cordé La Rue", price: "$10.00" },
      { code: "A9", name: "Veggie Fritters Marinade", note: "4 pcs", price: "$5.00" },
      { code: "A10", name: "Veggie Fritter Accra", note: "4 pcs", price: "$6.00" },
      { code: "A11", name: "Conch Fritters", note: "4 pcs", price: "$10.00" },
      { code: "A12", name: "Gumbo Soup", note: "proteins add $3", price: "$10.00" },
      { code: "A13", name: "Bouillon Soup", note: "proteins add $3", price: "$10.00" },
      { code: "A14", name: "Squash / Joumou", note: "meat add $3", price: "$10.00" },
    ],
  },
  {
    title: "Small Bites",
    subtitle: "Ti Bouchés Banan",
    note: "Served over a small bed of fresh muffaletta salad.",
    items: [
      { code: "SB1", name: "Pezés & Smoked Herring", note: "3 pcs", price: "$12.00" },
      { code: "SB2", name: "Pezés & Smoked Salmon", note: "3 pcs", price: "$10.00" },
      { code: "SB3", name: "Pezés & Spinach", note: "3 pcs", price: "$10.00" },
      { code: "SB4", name: "Chop Chop Fried Chicken", note: "3 pcs", price: "$10.00" },
      { code: "SB5", name: "Chop Chop Goat Tassot", note: "3 pcs", price: "$14.00" },
      { code: "SB6", name: "Chop Chop Pork Griot", note: "3 pcs", price: "$10.00" },
      { code: "SB7", name: "Chop Chop Turkey Griot", note: "3 pcs", price: "$10.00" },
      { code: "SB8", name: "Chop Chop Pork Griot", note: "3 pcs", price: "$12.00" },
      { code: "SB9", name: "Po Boy Pork Sandwich", price: "$10.00" },
      { code: "SB10", name: "Po Boy Shrimp Sandwich", price: "$10.00" },
    ],
  },
  {
    title: "Arozé Bowls",
    subtitle: "Lunch",
    items: [
      { code: "AB1", name: "Griot Red Beans & Rice", price: "$17.00" },
      { code: "AB2", name: "Tassot Red Beans & Rice", price: "$17.00" },
      { code: "AB3", name: "Penne Pasta", price: "$17.00" },
      { code: "AB4", name: "Penne Lalo", price: "$17.00" },
      { code: "AB5", name: "Fritaille", price: "$17.00" },
      { code: "AB6", name: "Creole DjonDjon Fried Rice / Pork", price: "$17.00" },
      { code: "AB7", name: "Creole DjonDjon Fried Rice / Goat", price: "$17.00" },
      { code: "AB8", name: "Creole DjonDjon Fried Rice / Chicken", price: "$17.00" },
      { code: "AB9", name: "Foie Dur / Egg Ak Banan Pezé", price: "$17.00" },
      { code: "AB10", name: "Foie Dur / Egg Ak Manioc Bouillie", price: "$17.00" },
      { code: "AB11", name: "Shrimp & Polenta Grits", price: "$17.00" },
      { code: "AB12", name: "Maïs Ak Feuille", price: "$17.00" },
    ],
  },
  {
    title: "Mama Creole Dinners",
    items: [
      { code: "MC1", name: "Griots Mangé", price: "$24.00" },
      { code: "MC2", name: "Tassot Mangé", price: "$29.00" },
      { code: "MC3", name: "Poule Mangé", price: "$26.00" },
      { code: "MC4", name: "Salmon Mangé", price: "$27.00" },
      { code: "MC5", name: "Beef Stew Mangé", price: "$27.00" },
      { code: "MC6", name: "Red Snapper Mangé", price: "$31.00" },
      { code: "MC7", name: "King Fish Grosel Mangé", price: "$28.00" },
      { code: "MC8", name: "Légume Beef Mangé", price: "$27.00" },
      { code: "MC9", name: "Légume Pork Mangé", price: "$27.00" },
      { code: "MC10", name: "Légume Goat Mangé", price: "$27.00" },
      { code: "MC11", name: "Légume Shrimp and Crab Mangé", price: "$27.00" },
      { code: "MC12", name: "Lalo Mangé Beef", price: "$27.00" },
      { code: "MC13", name: "Légume Lalo Mangé Pork", price: "$27.00" },
      { code: "MC14", name: "Légume Lalo Mangé Chicken", price: "$27.00" },
      { code: "MC15", name: "Légume Lalo Shrimp & Crab", price: "$27.00" },
    ],
  },
  {
    title: "Sides",
    subtitle: "Akoté",
    items: [
      { code: "SA1", name: "White Jasmine Rice", price: "$6.00" },
      { code: "SA2", name: "Rice and Beans", price: "$7.00" },
      { code: "SA3", name: "Djondjon Blackened Rice", price: "$10.00" },
      { code: "SA4", name: "Penne Pasta Gratiné", price: "$7.00" },
      { code: "SA5", name: "Vegetable Du Jour", price: "$3.00" },
      { code: "SA6", name: "Black Bean Purée", price: "$3.00" },
      { code: "SA7", name: "Red Bean Purée", price: "$3.00" },
      { code: "SA8", name: "White Bean Purée", price: "$3.00" },
    ],
  },
  {
    title: "Beverages",
    subtitle: "Bwè",
    items: [
      { code: "BB1", name: "Citronade", price: "$3.50" },
      { code: "BB1", name: "Mango Passion", price: "$3.50" },
      { code: "BB1", name: "Haitian Iced Tea", price: "$3.50" },
      { name: "Coffee", price: "$2.50" },
      { name: "Tea", price: "$2.50" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { code: "D1", name: "Sweet Potato", note: "half", price: "$10.00" },
      { code: "D2", name: "Crème Brûlée", price: "$10.00" },
      { code: "D3", name: "Carrot or Red Velvet Cake", price: "$10.00" },
    ],
  },
];
