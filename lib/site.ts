export const siteConfig = {
  name: "Alder & Stone Renovations",
  url: "https://alder-stone-renovations-demo.example.com",
  creator: "VCUK Web Services",
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
      "For homeowners planning a better layout, more storage, improved lighting or a complete kitchen transformation.",
    description:
      "A considered kitchen service page should show how planning, preparation, fitting and finishing are handled as one joined-up project.",
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
      "For homeowners who want a clean, practical and well-finished bathroom, en-suite or shower room.",
    description:
      "Bathroom content is written around specification, waterproofing considerations, tiling detail and a tidy installation experience.",
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
      "For larger updates where multiple rooms or areas need careful coordination.",
    description:
      "A refurbishment page helps homeowners understand how sequencing, finishes, communication and disruption can be managed.",
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
      "For turning unused garage space into a home office, utility space, gym or additional living area.",
    description:
      "Conversion content focuses on comfort, insulation, practical layouts and a finished room that feels part of the home.",
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
      "For fitted storage, utility areas, media walls, boot rooms and tailored finishing touches.",
    description:
      "Joinery sections add craft-led detail and show how tailored storage can raise the perceived value of renovation work.",
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
      "For homeowners who want a clearer schedule, better communication and one organised route through the project.",
    description:
      "Project management messaging reassures visitors that larger work can be planned, explained and progressed with clarity.",
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
    title: "Oak & Quartz Kitchen Renovation",
    type: "Kitchens",
    location: "Cheshire",
    description:
      "A complete kitchen refit concept with layout improvements, custom storage and warm lighting.",
    features: [
      "Quartz surfaces",
      "Oak details",
      "Lighting plan",
      "Improved storage",
    ],
    palette: "from-stone-200 via-warm-stone to-bronze/70",
    image: {
      src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
      alt: "Stock photo of a warm modern kitchen with timber cabinetry and stone worktops",
    },
  },
  {
    title: "Marble-Effect Bathroom Suite",
    type: "Bathrooms",
    location: "Northwich",
    description:
      "A full bathroom transformation concept with walk-in shower, vanity, tiling and lighting.",
    features: ["Walk-in shower", "Tiling", "Vanity unit", "Ambient lighting"],
    palette: "from-white via-soft-taupe to-charcoal/30",
    image: {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      alt: "Stock photo of a bright bathroom with a vanity unit and walk-in shower styling",
    },
  },
  {
    title: "Garage to Home Office Conversion",
    type: "Conversions",
    location: "Warrington",
    description:
      "An unused garage converted in concept into a warm, clean home office and utility space.",
    features: ["Insulation", "Office layout", "Utility storage", "Lighting"],
    palette: "from-charcoal/20 via-warm-stone to-bronze/60",
    image: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      alt: "Stock photo of a calm home office space suitable for a garage conversion concept",
    },
  },
  {
    title: "Period Home Refurbishment",
    type: "Refurbishments",
    location: "Chester",
    description:
      "A careful refurbishment concept balancing modern usability with existing character.",
    features: ["Joinery", "Decoration", "Room updates", "Character details"],
    palette: "from-soft-taupe via-white to-charcoal/20",
    image: {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      alt: "Stock photo of a refined living space used to represent a period home refurbishment",
    },
  },
  {
    title: "Utility Room & Boot Room",
    type: "Joinery",
    location: "Knutsford",
    description:
      "A functional upgrade concept for a busy family home with durable finishes and fitted storage.",
    features: [
      "Fitted storage",
      "Durable materials",
      "Family layout",
      "Practical finish",
    ],
    palette: "from-warm-stone via-soft-taupe to-bronze/50",
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      alt: "Stock photo of a practical fitted interior used to represent utility and boot room joinery",
    },
  },
];

export const processSteps = [
  {
    title: "Project enquiry",
    description:
      "The customer sends a short message with the type of project, location and rough timescale.",
  },
  {
    title: "Initial call",
    description:
      "A quick call checks the basics and confirms whether the project is a good fit.",
  },
  {
    title: "Home visit",
    description:
      "The business visits the property, looks at the space and discusses ideas, access and requirements.",
  },
  {
    title: "Written quote",
    description:
      "A clear written quote is provided so the homeowner understands the scope, assumptions and next steps.",
  },
  {
    title: "Schedule and preparation",
    description:
      "Dates, preparation and home protection are discussed before work starts.",
  },
  {
    title: "Build phase",
    description:
      "The project is completed with regular updates and attention to keeping the work area as tidy and safe as possible.",
  },
  {
    title: "Final walkthrough",
    description:
      "The finished work is reviewed with the customer before handover.",
  },
];

export const trustCards = [
  {
    title: "Clear communication",
    description:
      "Plain-English next steps, written scope notes and regular updates are positioned as part of the service experience.",
  },
  {
    title: "Protected work areas",
    description:
      "The design explains how a real renovation company could reassure homeowners about dust, access and daily tidy-down routines.",
  },
  {
    title: "Reliable schedules",
    description:
      "Process-led content helps visitors understand timing, preparation and what happens before work starts.",
  },
  {
    title: "Quality finishing",
    description:
      "Large project cards and detail-led copy place the focus on workmanship, finishing touches and handover quality.",
  },
];

export const liveProofItems = [
  {
    label: "Verified reviews",
    title: "Google reviews feed",
    description:
      "A live client version would connect to verified Google Business Profile reviews rather than using copied or invented testimonials.",
  },
  {
    label: "Trade proof",
    title: "Accreditations and insurance",
    description:
      "Memberships, insurance notes, guarantees and qualification logos should be shown only when supplied and verified by the real business.",
  },
  {
    label: "Project evidence",
    title: "Before-and-after library",
    description:
      "Premium renovation enquiries are easier to win when homeowners can see real rooms, real sequencing and detailed finish photography.",
  },
  {
    label: "Performance",
    title: "Fast image handling",
    description:
      "A high-value build should use carefully sized images, stable layouts and restrained features so the site feels smooth instead of cluttered.",
  },
];

export const accreditationPlaceholders = ["FMB", "TrustMark", "Insurance"];

export const photographyWorkflow = [
  "Crop for composition",
  "Colour-match finishes",
  "Sequence before/after sets",
];

export const mockReviews = [
  {
    name: "Example homeowner",
    location: "Cheshire",
    project: "Kitchen renovation",
    quote:
      "The layout makes space for a verified Google review that mentions planning, tidy work and the final handover experience.",
  },
  {
    name: "Example homeowner",
    location: "Northwich",
    project: "Bathroom fitting",
    quote:
      "This mock review demonstrates how a live site could pair homeowner feedback with project photography and proof of workmanship.",
  },
  {
    name: "Example homeowner",
    location: "Warrington",
    project: "Garage conversion",
    quote:
      "On a real client build, this copy would be replaced by a verified review pulled from Google or supplied with permission.",
  },
];
