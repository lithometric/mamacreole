/**
 * Photo provenance: every file in /public/photos is a still frame extracted
 * from Mama Creole's OWN public TikTok videos (@mama.creole), i.e. the
 * business's own promotional footage of its dishes and dining room.
 * Used and re-hosted with the owner's permission (relayed by the client,
 * July 2026). No Google Maps, reviewer-uploaded, or third-party directory
 * photos are used anywhere on this site.
 */

export const PHOTOS = {
  griot: {
    src: "/photos/griot-plate.jpg",
    width: 720,
    height: 700,
    alt: "Plated griot with rice djon djon, tostones and macaroni salad from Mama Creole's kitchen",
  },
  friedFish: {
    src: "/photos/fried-fish.jpg",
    width: 720,
    height: 680,
    alt: "Whole fried fish with lime, green beans and carrots at Mama Creole",
  },
  legume: {
    src: "/photos/legume-rice.jpg",
    width: 700,
    height: 530,
    alt: "Haitian legume with white rice and sauce pois from Mama Creole's kitchen",
  },
  tostones: {
    src: "/photos/tostones.jpg",
    width: 720,
    height: 412,
    alt: "Topped tostones served at Mama Creole",
  },
  platter: {
    src: "/photos/appetizer-platter.jpg",
    width: 720,
    height: 425,
    alt: "Appetizer platter with fritters and fried plantains from Mama Creole's kitchen",
  },
  diningRoom: {
    src: "/photos/dining-room.jpg",
    width: 720,
    height: 818,
    alt: "Mama Creole's dining room with its 'it's time to eat' mural",
  },
} as const;

export type Photo = (typeof PHOTOS)[keyof typeof PHOTOS];
