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
    intro: "For kitchens that need a better layout, more storage, improved lighting or a full refit.",
    description: "We plan the work around how the room is actually used, then handle the preparation, fitting and finishing with the details agreed before work starts.",
    includes: ["Layout planning", "Removal and preparation", "Fitting and finishing", "Storage and joinery", "Lighting and final details"],
    cta: "Discuss a kitchen project",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern kitchen renovation with timber cabinetry, worktops and warm lighting",
  },
  {
    title: "Bathroom fitting",
    intro: "Clean, practical bathrooms, en-suites and shower rooms with a proper finish.",
    description: "From strip-out to tiling and final fittings, the focus is on keeping the work tidy, the specification clear and the finished room easy to live with.",
    includes: ["Strip-out and preparation", "Tiling", "Shower areas", "Vanity units", "Lighting", "Finishing details"],
    cta: "Discuss a bathroom project",
    imageUrl: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern bathroom renovation with vanity, shower area and clean tiling",
  },
  {
    title: "Property refurbishments",
    intro: "For homes that need several rooms updated and the work properly coordinated.",
    description: "Refurbishment work can become messy without a plan. We agree the order of work, keep you updated and make sure each stage is finished properly before moving on.",
    includes: ["Room updates", "Flooring and finishing", "Joinery", "Decorating coordination", "Project management"],
    cta: "Discuss a refurbishment",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Refurbished home interior with warm materials and a calm finished living space",
  },
  {
    title: "Garage conversions",
    intro: "Turn unused garage space into a room that feels warm, useful and part of the home.",
    description: "Whether it becomes an office, gym, utility or extra living space, the work starts with comfort, insulation, access and a practical layout.",
    includes: ["Insulation", "Internal finishing", "Storage", "Lighting", "Practical layout"],
    cta: "Discuss a conversion",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Converted home office space with desk, storage and natural light",
  },
  {
    title: "Bespoke joinery",
    intro: "Fitted storage and finishing details made around the space, not forced into it.",
    description: "Useful for boot rooms, alcoves, media walls, utility areas and awkward spaces where off-the-shelf furniture does not quite work.",
    includes: ["Fitted storage", "Utility and boot room details", "Media walls", "Alcove units", "Finishing trims"],
    cta: "Discuss joinery work",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Bespoke fitted joinery and shelving in a warm renovated home interior",
  },
  {
    title: "Project management",
    intro: "A clearer route through larger jobs, from first visit to final walkthrough.",
    description: "You get a written scope, agreed stages and regular updates, so you know what is happening and when decisions need to be made.",
    includes: ["Scope planning", "Written quotes", "Schedule coordination", "Progress updates", "Final walkthrough"],
    cta: "Ask about project management",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Renovation planning materials, drawings and construction tools on a work surface",
  },
];

export const projects = [
  {
    title: "Oak & Limestone Kitchen Renovation",
    type: "Kitchens",
    location: "Cheshire",
    description: "A tired kitchen reworked with better storage, warmer materials and lighting that makes the room feel calmer in the evening.",
    features: ["Stone surfaces", "Oak details", "Lighting plan", "Improved storage"],
    palette: "from-limestone via-warm-stone to-olive/70",
    imageUrl: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Completed kitchen renovation with stone surfaces, oak details and warm lighting",
  },
  {
    title: "Graphite Bathroom Suite",
    type: "Bathrooms",
    location: "Northwich",
    description: "A small bathroom redesigned around a walk-in shower, a neater vanity area and darker finishes for a more settled feel.",
    features: ["Walk-in shower", "Large-format tiling", "Vanity unit", "Ambient lighting"],
    palette: "from-white via-limestone to-graphite/35",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern graphite bathroom with walk-in shower, vanity and large-format tiles",
  },
  {
    title: "Garage to Studio Conversion",
    type: "Conversions",
    location: "Warrington",
    description: "A cold garage turned into a useful studio space with insulation, storage and lighting suitable for everyday use.",
    features: ["Insulation", "Studio layout", "Utility storage", "Task lighting"],
    palette: "from-graphite/20 via-warm-stone to-sage/70",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Converted studio or home office space with desk, storage and natural daylight",
  },
  {
    title: "Period Home Refurbishment",
    type: "Refurbishments",
    location: "Chester",
    description: "A careful update to an older home, keeping the character while making the rooms easier to use day to day.",
    features: ["Joinery", "Decoration", "Room updates", "Character details"],
    palette: "from-soft-taupe via-white to-olive/30",
    imageUrl: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Refurbished period home interior with character details and modern finishes",
  },
  {
    title: "Utility Room & Boot Room",
    type: "Joinery",
    location: "Knutsford",
    description: "A practical family space with fitted storage, durable finishes and somewhere for coats, shoes and laundry to live properly.",
    features: ["Fitted storage", "Durable materials", "Family layout", "Practical finish"],
    palette: "from-warm-stone via-limestone to-olive/55",
    imageUrl: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Utility and boot room with fitted storage, durable surfaces and a practical family layout",
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
  { title: "Tell us about the job", description: "Send a few details about the room, the work you have in mind and where you are based." },
  { title: "Quick call", description: "We check the basics, answer early questions and decide whether a home visit is the right next step." },
  { title: "Home visit", description: "We look at the space, talk through ideas, measure up and discuss access, timescales and practical details." },
  { title: "Written quote", description: "You receive a clear written quote so you know what is included, what is assumed and what happens next." },
];

export const accreditationPlaceholders = ["FMB", "TrustMark", "Insurance"];

export const demoPhotoGallery = [
  {
    label: "Kitchen demo",
    title: "Warm kitchen finish",
    caption: "A premium trades site benefits from close-up material shots, wide room views and practical details like storage, lighting and worktops.",
    alt: "Demo kitchen renovation photography showing warm cabinetry, stone finishes and soft lighting",
    imageUrl: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Bathroom demo",
    title: "Calm bathroom detail",
    caption: "Bathroom pages feel more trustworthy when visitors can see tiling, fittings, lighting and the quality of finishing up close.",
    alt: "Demo bathroom renovation photography showing modern tiles, vanity detail and calm lighting",
    imageUrl: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Joinery demo",
    title: "Built-in storage detail",
    caption: "Joinery and refurbishment work needs detail-led photos so homeowners can understand the craftsmanship before enquiring.",
    alt: "Demo fitted joinery photography showing bespoke shelving and warm home renovation detail",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
  },
];

export const sampleReviews = [
  {
    name: "Sample homeowner, Cheshire",
    project: "Kitchen renovation layout",
    quote: "The review area would show how the team communicated, protected the house and handled the details from first quote to final walkthrough.",
  },
  {
    name: "Sample homeowner, Northwich",
    project: "Bathroom fitting project",
    quote: "This is where a real customer could mention tidy working, clear updates and whether the finished room matched the agreed plan.",
  },
  {
    name: "Sample homeowner, Warrington",
    project: "Garage conversion",
    quote: "For a live site, this block would be replaced with approved feedback from a genuine client and linked to the project where possible.",
  },
];
