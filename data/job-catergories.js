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
        rating: 4.5,
        description: "Rose Bliss incense sticks offer a soothing aroma with a delicate rose fragrance, perfect for creating a calming and serene atmosphere in any space.",

      },
      {
        name: "Jasmine Delight",
        price: "₹140 per pack",
        logo: "/images/icons/demo.webp",
        stock: 75,
        sku: "FLR-JD-140",
        rating: 4.3,
        description: "Jasmine Delight incense sticks offer a soothing floral aroma, perfect for creating a calm and serene atmosphere, enhancing relaxation and meditation experiences.",

      },
      {
        name: "Lavender Serenity",
        logo: "/images/icons/demo.webp",
        price: "₹160 per pack",
        stock: 30,
        sku: "FLR-LS-160",
        rating: 4.7,
        description: "Lavender Serenity incense sticks offer a calming, aromatic experience, filling your space with a soothing lavender scent that promotes relaxation and inner peace.",

      },
      {
        name: "Marigold Magic",
        price: "₹130 per pack",
        logo: "/images/icons/demo.webp",
        stock: 45,
        sku: "FLR-MM-130",
        rating: 4.2,
        description: "Marigold Magic incense sticks offer a vibrant floral fragrance, filling your space with uplifting, calming scents that inspire positivity and a sense of tranquility.",

      },
      {
        name: "Lotus Harmony",
        logo: "/images/icons/demo.webp",
        price: "₹170 per pack",
        stock: 20,
        sku: "FLR-LH-170",
        rating: 4.8,
        description: "Lotus Harmony incense sticks bring a serene, calming aroma that enhances meditation and relaxation. Crafted with natural ingredients, they create a peaceful, uplifting atmosphere.",

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
        rating: 4.6,
        description: "Tulsi Purity Incense Sticks offer a soothing aroma, crafted with natural ingredients, creating a serene ambiance that enhances relaxation and spiritual well-being. Perfect for daily rituals.",

      },
      {
        name: "Neem Calm",
        logo: "/images/icons/demo.webp",

        price: "₹140 per pack",
        stock: 70,
        sku: "HRB-NC-140",
        rating: 4.4,
        description: "Neem Calm incense sticks offer a soothing blend of neem's natural essence, promoting relaxation and a peaceful atmosphere, perfect for unwinding after a long day.",

      },
      {
        name: "Sandalwood Essence",
        logo: "/images/icons/demo.webp",

        price: "₹180 per pack",
        stock: 40,
        sku: "HRB-SE-180",
        rating: 4.9,
        description: "Experience the rich, calming aroma of Sandalwood Essence incense sticks, crafted to create a serene and peaceful ambiance in any space. Perfect for meditation.",

      },
      {
        name: "Patchouli Earth",
        logo: "/images/icons/demo.webp",

        price: "₹160 per pack",
        stock: 35,
        sku: "HRB-PE-160",
        rating: 4.5,
        description: "Patchouli Earth Incense Sticks offer a grounding, earthy aroma that enhances relaxation and focus. Their natural, rich scent transforms any space into a serene sanctuary.",

      },
      {
        name: "Basil Freshness",
        logo: "/images/icons/demo.webp",

        price: "₹150 per pack",
        stock: 55,
        sku: "HRB-BF-150",
        rating: 4.7,
        description: "Experience a breath of nature with Basil Freshness Incense Stick—its aromatic blend of basil and herbs revitalizes your space, fostering calmness and purity in every moment.",

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
        rating: 4.4,
        description: "Mango Melody Incense Sticks offer a tropical escape with their rich, fruity aroma. Perfect for creating a serene, exotic atmosphere, these sticks infuse any space with vibrant freshness.",

      },
      {
        name: "Citrus Zest",
        logo: "/images/icons/demo.webp",

        price: "₹130 per pack",
        stock: 90,
        sku: "FRT-CZ-130",
        rating: 4.3,
        description: "Citrus Zest Incense Stick invigorates your space with a refreshing burst of zesty lemon and lime, creating an uplifting, vibrant atmosphere that's perfect for revitalizing your mood.",

      },
      {
        name: "Apple Blossom",
        logo: "/images/icons/demo.webp",

        price: "₹150 per pack",
        stock: 60,
        sku: "FRT-AB-150",
        rating: 4.6,
        description: "Apple Blossom Incense Stick offers a refreshing fragrance that blends crisp apple notes with delicate floral hints, creating a soothing, aromatic atmosphere perfect for relaxation and meditation.",

      },
      {
        name: "Berry Bliss",
        logo: "/images/icons/demo.webp",

        price: "₹160 per pack",
        stock: 70,
        sku: "FRT-BB-160",
        rating: 4.5,
        description: "Berry Bliss Incense Sticks offer a delightful blend of sweet berry aromas, creating a soothing and invigorating atmosphere. Perfect for relaxation and enhancing any space.",

      },
      {
        name: "Coconut Dream",
        price: "₹170 per pack",
        logo: "/images/icons/demo.webp",

        stock: 50,
        sku: "FRT-CD-170",
        rating: 4.7,
        description: "Coconut Dream Incense Sticks offer a serene escape with their calming coconut scent. Perfect for relaxation, meditation, or simply enhancing your space with a tropical touch.",

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
        rating: 4.9,
        description: "Discover inner peace with Meditation Bliss incense sticks—crafted for tranquility. Each stick offers calming scents that enhance meditation, relaxation, and mindfulness. Elevate your spiritual journey today.",

      },
      {
        name: "Temple Aura",
        logo: "/images/icons/demo.webp",

        price: "₹170 per pack",
        stock: 55,
        sku: "SPR-TA-170",
        rating: 4.8,
        description: "Temple Aura Incense Sticks offer a captivating blend of natural fragrances, enhancing meditation and relaxation with every burn. Elevate your spiritual space with their soothing aromas.",

      },
      {
        name: "Divine Prayer",
        price: "₹190 per pack",
        logo: "/images/icons/demo.webp",

        stock: 30,
        sku: "SPR-DP-190",
        rating: 4.9,
        description: "Divine Prayer Incense Sticks offer a serene aroma, enhancing meditation and creating a tranquil atmosphere. Perfect for daily rituals, they uplift spirits with every soothing, fragrant burn.",

      },
      {
        name: "Mystic Saffron",
        price: "₹160 per pack",
        logo: "/images/icons/demo.webp",

        stock: 40,
        sku: "SPR-MS-160",
        rating: 4.7,
        description: "Mystic Saffron Incense Sticks blend exotic saffron aromas with calming notes, creating a serene and luxurious atmosphere. Perfect for relaxation, meditation, and enhancing any space's ambiance.",

      },
      {
        name: "Holy Chandan",
        price: "₹200 per pack",
        logo: "/images/icons/demo.webp",

        stock: 25,
        sku: "SPR-HC-200",
        rating: 5.0,
        description: "Experience the soothing aroma of Holy Chandan Incense Sticks. Crafted from pure sandalwood, they offer a calming, earthy fragrance that enhances relaxation and spiritual serenity.",

      },
    ],
  },
];

module.exports = productCategories;
