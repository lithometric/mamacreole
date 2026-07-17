/**
 * Single source of truth for business facts (NAP consistency).
 * All values verified from the business's public Google listing and
 * public directory listings — do not edit one place without the others.
 */

export const BUSINESS = {
  name: "Mama Creole",
  category: "Haitian & Caribbean Restaurant",
  address: {
    street: "1029 Stuyvesant Ave.",
    city: "Union",
    state: "NJ",
    zip: "07083",
    full: "1029 Stuyvesant Ave., Union, NJ 07083",
  },
  phone: {
    display: "(908) 258-8714",
    tel: "+19082588714",
  },
  geo: {
    lat: 40.6966458,
    lng: -74.2692201,
  },
  // Google Maps place link from the source listing (README)
  mapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJU4DUfdGtw4kRhGfL552zG34",
  placeId: "ChIJU4DUfdGtw4kRhGfL552zG34",
} as const;

export const HOURS: { day: string; hours: string; closed?: boolean }[] = [
  { day: "Monday", hours: "Closed", closed: true },
  { day: "Tuesday", hours: "11:00 AM – 10:00 PM" },
  { day: "Wednesday", hours: "11:00 AM – 10:00 PM" },
  { day: "Thursday", hours: "11:00 AM – 10:00 PM" },
  { day: "Friday", hours: "11:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "11:00 AM – 10:00 PM" },
  { day: "Sunday", hours: "11:00 AM – 8:00 PM" },
];

// Schema.org openingHoursSpecification, matching HOURS above
export const HOURS_SCHEMA = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "11:00",
    closes: "22:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "11:00",
    closes: "20:00",
  },
];

// Short, real review snippets from the business's public reviews.
export const REVIEWS = [
  {
    quote: "The food here is amazing and delicious.",
    source: "Verified Google review",
  },
  {
    quote: "I love their authentic Haitian Caribbean food.",
    source: "Verified Google review",
  },
] as const;

// Dishes the restaurant itself has publicized (social posts + delivery menus).
export const DISHES = [
  {
    name: "Griot",
    description:
      "Haiti's beloved crispy-tender fried pork — a true classic of the island table.",
  },
  {
    name: "Legume",
    description:
      "A hearty, slow-simmered Haitian vegetable stew, rich with deep Creole flavor.",
  },
  {
    name: "Soup Joumou",
    description:
      "The celebrated Haitian squash soup — a dish steeped in history and pride.",
  },
  {
    name: "Pikliz",
    description:
      "Fiery pickled cabbage and Scotch bonnet slaw — the essential Haitian condiment.",
  },
  {
    name: "Conch Fritters",
    description:
      "Golden, crispy fritters — a Caribbean favorite made for sharing.",
  },
  {
    name: "Bouillon",
    description:
      "A comforting, generous Haitian soup brimming with vegetables and flavor.",
  },
] as const;

export const SERVICES = ["Dine-in", "Takeout", "Delivery"] as const;
