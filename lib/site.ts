export const siteConfig = {
  name: "Alder & Stone Renovations",
  url: "https://alder-stone-renovations-demo.vercel.app",
  creator: "VCUK Web Services",
  creatorUrl: "https://vcukwebservices.co.uk",
  email: "hello@example.co.uk",
  phone: "01234 000000",
  area: "Cheshire and surrounding areas",
  strapline: "Kitchens · Bathrooms · Refurbishments",
  nav: [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

export const services = [
  {
    title: "Kitchen renovations",
    intro:
      "For kitchens that need a better layout, more storage, improved lighting or a full refit.",
    description:
      "We plan the work around how the room is actually used, then handle the preparation, fitting and finishing with the details agreed before work starts.",
    includes: [
      "Layout planning",
      "Removal and preparation",
      "Fitting and finishing",
      "Storage and joinery",
      "Lighting and final details",
    ],
    cta: "Discuss a kitchen project",
  },
  {
    title: "Bathroom fitting",
    intro:
      "Clean, practical bathrooms, en-suites and shower rooms with a proper finish.",
    description:
      "From strip-out to tiling and final fittings, the focus is on keeping the work tidy, the specification clear and the finished room easy to live with.",
    includes: [
      "Strip-out and preparation",
      "Tiling",
      "Shower areas",
      "Vanity units",
      "Lighting",
      "Finishing details",
    ],
    cta: "Discuss a bathroom project",
  },
  {
    title: "Property refurbishments",
    intro:
      "For homes that need several rooms updated and the work properly coordinated.",
    description:
      "Refurbishment work can become messy without a plan. We agree the order of work, keep you updated and make sure each stage is finished properly before moving on.",
    includes: [
      "Room updates",
      "Flooring and finishing",
      "Joinery",
      "Decorating coordination",
      "Project management",
    ],
    cta: "Discuss a refurbishment",
  },
  {
    title: "Garage conversions",
    intro:
      "Turn unused garage space into a room that feels warm, useful and part of the home.",
    description:
      "Whether it becomes an office, gym, utility or extra living space, the work starts with comfort, insulation, access and a practical layout.",
    includes: [
      "Insulation",
      "Internal finishing",
      "Storage",
      "Lighting",
      "Practical layout",
    ],
    cta: "Discuss a conversion",
  },
  {
    title: "Bespoke joinery",
    intro:
      "Fitted storage and finishing details made around the space, not forced into it.",
    description:
      "Useful for boot rooms, alcoves, media walls, utility areas and awkward spaces where off-the-shelf furniture does not quite work.",
    includes: [
      "Fitted storage",
      "Utility and boot room details",
      "Media walls",
      "Alcove units",
      "Finishing trims",
    ],
    cta: "Discuss joinery work",
  },
  {
    title: "Project management",
    intro:
      "A clearer route through larger jobs, from first visit to final walkthrough.",
    description:
      "You get a written scope, agreed stages and regular updates, so you know what is happening and when decisions need to be made.",
    includes: [
      "Scope planning",
      "Written quotes",
      "Schedule coordination",
      "Progress updates",
      "Final walkthrough",
    ],
    cta: "Ask about project management",
  },
];

export const projects = [
  {
    title: "Oak & Limestone Kitchen Renovation",
    type: "Kitchens",
    location: "Cheshire",
    description:
      "A tired kitchen reworked with better storage, warmer materials and lighting that makes the room feel calmer in the evening.",
    features: ["Stone surfaces", "Oak details", "Lighting plan", "Improved storage"],
    palette: "from-limestone via-warm-stone to-olive/70",
  },
  {
    title: "Graphite Bathroom Suite",
    type: "Bathrooms",
    location: "Northwich",
    description:
      "A small bathroom redesigned around a walk-in shower, a neater vanity area and darker finishes for a more settled feel.",
    features: ["Walk-in shower", "Large-format tiling", "Vanity unit", "Ambient lighting"],
    palette: "from-white via-limestone to-graphite/35",
  },
  {
    title: "Garage to Studio Conversion",
    type: "Conversions",
    location: "Warrington",
    description:
      "A cold garage turned into a useful studio space with insulation, storage and lighting suitable for everyday use.",
    features: ["Insulation", "Studio layout", "Utility storage", "Task lighting"],
    palette: "from-graphite/20 via-warm-stone to-sage/70",
  },
  {
    title: "Period Home Refurbishment",
    type: "Refurbishments",
    location: "Chester",
    description:
      "A careful update to an older home, keeping the character while making the rooms easier to use day to day.",
    features: ["Joinery", "Decoration", "Room updates", "Character details"],
    palette: "from-soft-taupe via-white to-olive/30",
  },
  {
    title: "Utility Room & Boot Room",
    type: "Joinery",
    location: "Knutsford",
    description:
      "A practical family space with fitted storage, durable finishes and somewhere for coats, shoes and laundry to live properly.",
    features: ["Fitted storage", "Durable materials", "Family layout", "Practical finish"],
    palette: "from-warm-stone via-limestone to-olive/55",
  },
];

export const processSteps = [
  { title: "Project enquiry", description: "The customer sends a short message with the type of project, location and rough timescale." },
  { title: "Initial call", description: "A quick call checks the basics and confirms whether the project is a good fit." },
  { title: "Home visit", description: "The business visits the property, looks at the space and discusses ideas, access and requirements." },
  { title: "Written quote", description: "A clear written quote is provided so the homeowner understands the scope, assumptions and next steps." },
  { title: "Schedule and preparation", description: "Dates, preparation and home protection are discussed before work starts." },
  { title: "Build phase", description: "The project is completed with regular updates and attention to keeping the work area as tidy and safe as possible." },
  { title: "Final walkthrough", description: "The finished work is reviewed with the customer before handover." },
];

export const trustCards = [
  {
    title: "Tell us about the job",
    description:
      "Send a few details about the room, the work you have in mind and where you are based.",
  },
  {
    title: "Quick call",
    description:
      "We check the basics, answer early questions and decide whether a home visit is the right next step.",
  },
  {
    title: "Home visit",
    description:
      "We look at the space, talk through ideas, measure up and discuss access, timescales and practical details.",
  },
  {
    title: "Written quote",
    description:
      "You receive a clear written quote so you know what is included, what is assumed and what happens next.",
  },
];

export const accreditationPlaceholders = ["FMB", "TrustMark", "Insurance"];

export const demoPhotoGallery = [
  {
    title: "Dates and preparation",
    description:
      "We agree dates, order materials where needed and talk through how the home will be protected while work is underway.",
  },
  {
    title: "Work begins",
    description:
      "The job is carried out with regular updates, tidy working habits and decisions raised before they become problems.",
  },
  {
    title: "Final walkthrough",
    description:
      "We walk through the finished work together, check the details and make sure everything is left clean and ready to use.",
  },
];

export const sampleReviews = [
  {
    title: "Clear communication",
    description:
      "You should know what is happening, when it is happening and what decisions are needed from you.",
  },
  {
    title: "Protected work areas",
    description:
      "Dust, access and daily tidy-up routines are discussed before work starts, not after the disruption begins.",
  },
  {
    title: "Reliable schedules",
    description:
      "Renovation work can change, but the plan should still be clear, realistic and updated when needed.",
  },
  {
    title: "Quality finishing",
    description:
      "The final details matter: trims, joins, lighting, storage and how the room feels once it is back in use.",
  },
];

export const accreditationPlaceholders = [
  "FMB",
  "TrustMark",
  "Insurance",
];
