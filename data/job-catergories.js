// module.exports = [
//   {
//     id: 1,
//     icon: "flaticon-money",
//     catTitle: "Developer",
//     jobNumber: "2",
//   },
//   {
//     id: 2,
//     icon: "flaticon-promotion",
//     catTitle: "Marketing",
//     jobNumber: "86",
//   },
//   { id: 3, icon: "flaticon-vector", catTitle: "Interior Designing", jobNumber: "43" },
//   {
//     id: 4,
//     icon: "flaticon-web-programming",
//     catTitle: "Developers",
//     jobNumber: "12",
//   },
//   {
//     id: 5,
//     icon: "flaticon-headhunting",
//     catTitle: "Builders & Developers",
//     jobNumber: "3",
//   },
//   {
//     id: 6,
//     icon: "flaticon-graph",
//     catTitle: "Architects",
//     jobNumber: "2",
//   },
//   {
//     id: 7,
//     icon: "flaticon-money-1",
//     catTitle: "Infrastucture Companies",
//     jobNumber: "2",
//   },
//   {
//     id: 8,
//     icon: "flaticon-first-aid-kit-1",
//     catTitle: "Channel Partner",
//     jobNumber: "25",
//   },

// ];


const productCategories = [
  {
    catTitle: "Floral Incense Sticks",
    icon: "flaticon-star-1",
    description: "A collection of aromatic floral incense sticks to elevate your senses.",
    jobNumber: "5",
    products: [
      {
        name: "Rose Bliss",
        logo: "/images/icons/demo.webp",
        price: "₹150 per pack",
        stock: 50,
        sku: "FLR-RB-150",
        rating: 4.5
      },
      {
        name: "Jasmine Delight",
        price: "₹140 per pack",
        logo: "/images/icons/demo.webp",
        stock: 75,
        sku: "FLR-JD-140",
        rating: 4.3
      },
      {
        name: "Lavender Serenity",
        logo: "/images/icons/demo.webp",
        price: "₹160 per pack",
        stock: 30,
        sku: "FLR-LS-160",
        rating: 4.7
      },
      {
        name: "Marigold Magic",
        price: "₹130 per pack",
        logo: "/images/icons/demo.webp",
        stock: 45,
        sku: "FLR-MM-130",
        rating: 4.2
      },
      {
        name: "Lotus Harmony",
        logo: "/images/icons/demo.webp",
        price: "₹170 per pack",
        stock: 20,
        sku: "FLR-LH-170",
        rating: 4.8
      },
    ],
  },
  {
    catTitle: "Herbal Incense Sticks",
    icon: "flaticon-star-1",
    description: "Herbal incense sticks made with natural ingredients for a refreshing experience.",
    jobNumber: "5",
    products: [
      {
        name: "Tulsi Purity",
        logo: "/images/icons/demo.webp",

        price: "₹150 per pack",
        stock: 60,
        sku: "HRB-TP-150",
        rating: 4.6
      },
      {
        name: "Neem Calm",
        logo: "/images/icons/demo.webp",

        price: "₹140 per pack",
        stock: 70,
        sku: "HRB-NC-140",
        rating: 4.4
      },
      {
        name: "Sandalwood Essence",
        logo: "/images/icons/demo.webp",

        price: "₹180 per pack",
        stock: 40,
        sku: "HRB-SE-180",
        rating: 4.9
      },
      {
        name: "Patchouli Earth",
        logo: "/images/icons/demo.webp",

        price: "₹160 per pack",
        stock: 35,
        sku: "HRB-PE-160",
        rating: 4.5
      },
      {
        name: "Basil Freshness",
        logo: "/images/icons/demo.webp",

        price: "₹150 per pack",
        stock: 55,
        sku: "HRB-BF-150",
        rating: 4.7
      },
    ],
  },
  {
    catTitle: "Fruit-Inspired Incense Sticks",
    icon: "flaticon-star-1",
    description: "Deliciously scented incense sticks inspired by your favorite fruits.",
    jobNumber: "5",
    products: [
      {
        name: "Mango Melody",
        price: "₹140 per pack",
        logo: "/images/icons/demo.webp",

        stock: 80,
        sku: "FRT-MM-140",
        rating: 4.4
      },
      {
        name: "Citrus Zest",
        logo: "/images/icons/demo.webp",

        price: "₹130 per pack",
        stock: 90,
        sku: "FRT-CZ-130",
        rating: 4.3
      },
      {
        name: "Apple Blossom",
        logo: "/images/icons/demo.webp",

        price: "₹150 per pack",
        stock: 60,
        sku: "FRT-AB-150",
        rating: 4.6
      },
      {
        name: "Berry Bliss",
        logo: "/images/icons/demo.webp",

        price: "₹160 per pack",
        stock: 70,
        sku: "FRT-BB-160",
        rating: 4.5
      },
      {
        name: "Coconut Dream",
        price: "₹170 per pack",
        logo: "/images/icons/demo.webp",

        stock: 50,
        sku: "FRT-CD-170",
        rating: 4.7
      },
    ],
  },
  {
    catTitle: "Spiritual Incense Sticks",
    icon: "flaticon-star-1",
    description: "Spiritual incense sticks to enhance your meditation and prayer practices.",
    jobNumber: "5",
    products: [
      {
        name: "Meditation Bliss",
        price: "₹180 per pack",
        logo: "/images/icons/demo.webp",
        stock: 65,
        sku: "SPR-MB-180",
        rating: 4.9
      },
      {
        name: "Temple Aura",
        logo: "/images/icons/demo.webp",

        price: "₹170 per pack",
        stock: 55,
        sku: "SPR-TA-170",
        rating: 4.8
      },
      {
        name: "Divine Prayer",
        price: "₹190 per pack",
        logo: "/images/icons/demo.webp",

        stock: 30,
        sku: "SPR-DP-190",
        rating: 4.9
      },
      {
        name: "Mystic Saffron",
        price: "₹160 per pack",
        logo: "/images/icons/demo.webp",

        stock: 40,
        sku: "SPR-MS-160",
        rating: 4.7
      },
      {
        name: "Holy Chandan",
        price: "₹200 per pack",
        logo: "/images/icons/demo.webp",

        stock: 25,
        sku: "SPR-HC-200",
        rating: 5.0
      },
    ],
  },
];

module.exports = productCategories;
