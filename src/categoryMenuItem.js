import categoryLogo from '../src/assets/categoryLogo.webp';

const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/"
  },

  {
    id: 2,
    name: "Soccer",
    menus: [
      {
        id: 21,
        title: "Products",
        submenus: [
          { id: 211, name: "Sublimated Shirts" },
          { id: 212, name: "Sublimated Shorts" },
          { id: 213, name: "Team Kits" },
          { id: 214, name: "Training Wear" }
        ]
      }
    ]
  },

  {
    id: 3,
    name: "Basketball",
    menus: [
      {
        id: 31,
        title: "Products",
        submenus: [
          { id: 311, name: "Sublimated Shirts" },
          { id: 312, name: "Sublimated Shorts" },
          { id: 313, name: "Warmup Jackets" },
          { id: 314, name: "Training Kits" }
        ]
      }
    ]
  },

  {
    id: 4,
    name: "Winter Wear",
    menus: [
      {
        id: 41,
        title: "Adult Winter Wear",
        submenus: [
          { id: 411, name: "Cotton Vest" },
          { id: 412, name: "Cotton Jacket" },
          { id: 413, name: "Soccer / Winter Wear / Long Cotton Coat" }
        ]
      },
      {
        id: 42,
        title: "Kid Winter Wear",
        submenus: [
          { id: 421, name: "Cotton Vest" },
          { id: 422, name: "Cotton Jacket" },
          { id: 423, name: "Long Cotton Coat" }
        ]
      }
    ]
  },

  {
    id: 5,
    name: "More Teamwear",
    menus: [
      {
        id: 51,
        title: "Baseball",
        submenus: [
          { id: 511, name: "Button Down Shirts" },
          { id: 512, name: "2-Button Shirts" },
          { id: 513, name: "Crewneck Shirts" },
          { id: 514, name: "Accessories" }
        ]
      },
      {
        id: 52,
        title: "Badminton Clothing",
        submenus: []
      },
      {
        id: 53,
        title: "Training",
        submenus: [
          { id: 531, name: "Bibs" },
          { id: 532, name: "1/4 Zip Jacket" },
          { id: 533, name: "Full Zip Jacket" },
          { id: 534, name: "Polos" },
          { id: 535, name: "Windbreaker" },
          { id: 536, name: "Shorts" },
          { id: 537, name: "Pants" }
        ]
      },
      {
        id: 54,
        title: "Kids",
        submenus: [
          { id: 541, name: "Bibs" },
          { id: 542, name: "1/4 Zip Jacket" },
          { id: 543, name: "Windbreaker" },
          { id: 544, name: "Shorts" },
          { id: 545, name: "Pants" }
        ]
      },
      {
        id: 55,
        title: "Xteamwear Basics",
        submenus: [
          { id: 551, name: "Bibs" },
          { id: 552, name: "1/4 Zip Jacket" },
          { id: 553, name: "Full Zip Jacket" },
          { id: 554, name: "Polos" },
          { id: 555, name: "Pants" }
        ]
      }
    ]
  },

  {
    id: 6,
    name: "Bespoke",
    link: "/bespoke"
  },

  {
    id: 7,
    image: categoryLogo,
    link: "/dtf-design"
  },
  {
    id: 8,
    name: "DTF Design",
    link: "/dtf-design"
  },

  {
    id: 9,
    name: "Sports Lab",
    menus: [
      {
        id: 81,
        title: "Services",
        submenus: [
          { id: 811, name: "Sublimated Shirts" },
          { id: 812, name: "Custom Design" },
          { id: 813, name: "Printing Service" },
          { id: 814, name: "Bulk Orders" }
        ]
      }
    ]
  },

  {
    id: 10,
    name: "Blogs",
    menus: [
      {
        id: 91,
        title: "Categories",
        submenus: [
          { id: 911, name: "Sublimated Shirts" },
          { id: 912, name: "Teamwear Trends" },
          { id: 913, name: "Fabric Guide" },
          { id: 914, name: "Design Tips" }
        ]
      }
    ]
  },

  {
    id: 11,
    name: "All Reviews",
    link: "/reviews"
  }
];

export default navItems;