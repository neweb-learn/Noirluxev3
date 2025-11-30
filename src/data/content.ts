
export const siteContent = {
  seo: {
    title: "OBSIDIAN | Dining in the Shadows",
    metaDescription: "A culinary experience where shadow meets flavor. Low-key lighting, immersive textures, and an atmosphere of pure noir luxury.",
  },
  navigation: [
    { label: "Home", path: "/" },
    { label: "Philosophy", path: "/#philosophy" },
    { label: "Menu", path: "/menu" },
    { label: "Gallery", path: "/gallery" },
  ],
  hero: {
    headline: "Where Shadow Meets Flavor.",
    subhead: "An immersion into the darker side of culinary excellence. Silence, texture, and taste.",
    cta: { label: "Reserve Table", link: "#reservations" },
    image: {
      src: "https://images.unsplash.com/photo-1606194723822-13c0c92d912d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBsdXh1cnklMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBjaW5lbWF0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjQ0ODA1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Dimly lit dining room with velvet textures",
    },
  },
  philosophy: {
    heading: "The Philosophy.",
    body: "We believe that true luxury lies in what is hidden. Our cuisine is a study in contrast—ingredients sourced from the deep earth, prepared with a reverence for the unseen. We strip away the noise to reveal the essence.",
    cta: { label: "Our Story", link: "/about" },
    image: {
      src: "https://images.unsplash.com/photo-1719329466051-1a60a9dc1849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcGxhdGluZyUyMGZvb2QlMjBjaW5lbWF0aWMlMjBsaWdodGluZyUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzY0NDgwNTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Chef meticulously plating a dish in low light",
    },
  },
  menuHighlights: {
    heading: "Curated Selections.",
    categories: [
      {
        name: "Dinner",
        items: [
          {
            name: "Charred Octopus",
            price: "42",
            description: "Black garlic emulsion, fennel ash, preserved lemon.",
          },
          {
            name: "Wagyu A5 Striploin",
            price: "125",
            description: "Smoked bone marrow, truffle reduction, midnight pearl onions.",
          },
          {
            name: "Squid Ink Risotto",
            price: "38",
            description: "Uni butter, gold leaf, sea urchin, textures of parmesan.",
          },
        ],
      },
      {
        name: "Wine",
        items: [
          {
            name: "Château Margaux 2015",
            price: "1200",
            description: "Premier Grand Cru Classé. Deep, complex, velvet structure.",
          },
          {
            name: "Opus One 2018",
            price: "550",
            description: "Napa Valley. Dark fruit, espresso, hints of violet.",
          },
          {
            name: "Penfolds Grange 2016",
            price: "850",
            description: "South Australia. Intense shiraz, rich oak, enduring finish.",
          },
        ],
      },
      {
        name: "Cocktails",
        items: [
          {
            name: "The Void",
            price: "24",
            description: "Charcoal-infused gin, dry vermouth, lemon twist.",
          },
          {
            name: "Midnight in Paris",
            price: "26",
            description: "Cognac, absinthe, blackberry reduction, smoke.",
          },
          {
            name: "Obsidian Old Fashioned",
            price: "28",
            description: "Rye whiskey, smoked maple, angostura bitters, gold dust.",
          },
        ],
      },
    ],
    cta: { label: "View Full Menu", link: "/menu" },
  },
  galleryTeaser: {
    heading: "The Experience.",
    images: [
      "https://images.unsplash.com/photo-1759393098862-f2e98983e2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZmluZSUyMGRpbmluZyUyMGZvb2QlMjBkYXJrJTIwYmFja2dyb3VuZCUyMG1hY3JvfGVufDF8fHx8MTc2NDQ4MDUwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1650906175964-8c7e8c01a6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3VyaW5nJTIwcmVkJTIwd2luZSUyMGludG8lMjBnbGFzcyUyMGRhcmslMjBtb29keSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjQ0ODA1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1701541065394-ca57325e2420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhciUyMGRhcmslMjBhdG1vc3BoZXJlJTIwbm9pcnxlbnwxfHx8fDE3NjQ0ODA1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1761437855598-011cf89b2ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsYWNrJTIwYW5kJTIwZ29sZCUyMHRleHR1cmUlMjBsdXh1cnl8ZW58MXx8fHwxNzY0NDgwNTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    cta: { label: "Enter Gallery", link: "/gallery" },
  },
  footer: {
    address: "12 Midnight Avenue, New York, NY 10013",
    hours: "Wed-Sun: 6pm - Late",
    socials: ["Instagram", "Twitter"],
    contact: "reservations@obsidian.com",
  },
};
