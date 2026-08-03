import { SITE } from "@/lib/site";

export const MENU = [
  { n: "01", label: "About", to: "/about" },
  { n: "02", label: "Services", to: "/services" },
  { n: "03", label: "Service Areas", to: "/service-areas" },
  { n: "04", label: "Team", to: "/about#team" },
  { n: "05", label: "Blog", to: "/blog" },
  { n: "06", label: "Contact", to: "/contact" },
  { n: "07", label: "Career", to: "/career" },
  { n: "08", label: "FAQs", to: "/faqs" },
] as const;

export const SERVICES = [
  {
    title: "Residential Moving",
    href: "/residential",
    desc: "Apartments, houses, and condos across Austin — careful handling from the first box to the last.",
    points: ["Friendly, professional crews", "Fully licensed and insured", "Furniture protection & placement"],
  },
  {
    title: "Commercial Moving",
    href: "/commercial",
    desc: "Office and warehouse moves scheduled around your business so Monday stays productive.",
    points: ["After-hours & weekend options", "Desk, IT, and equipment moves", "Efficient packing and logistics"],
  },
  {
    title: "Packing Services",
    href: "/packing",
    desc: "Full packing, partial packing, or supplies — fragile items wrapped the right way.",
    points: ["Kitchen & fragile packing", "Pro-grade materials", "Labeling that makes unpacking easy"],
  },
  {
    title: "Specialty Moving",
    href: "/specialty",
    desc: "Pianos, antiques, safes, gym equipment, and oversized pieces handled with the right gear.",
    points: ["Piano & antique specialists", "Custom padding and crating", "Trained specialty crews"],
  },
  {
    title: "Long-Distance Moving",
    href: "/long-distance",
    desc: "Across Texas or out of state — clear timelines and careful transport wherever you're headed.",
    points: ["Interstate-ready crews", "Transparent pricing", "Full-service packing available"],
  },
];

export type LocationArea = {
  slug: string;
  name: string;
  state: string;
  label: string;
  blurb: string;
  featured?: boolean;
  image: "residential" | "commercial" | "movers" | "truck" | "packing" | "long-distance";
  intro: string;
};

export const LOCATIONS: LocationArea[] = [
  {
    slug: "austin-tx",
    name: "Austin",
    state: "TX",
    label: "Austin, TX",
    blurb: "Downtown, East Austin, South Congress, Domain & everywhere in between.",
    featured: true,
    image: "residential",
    intro:
      "Moving Day Heroes is a professional moving company in Austin, TX delivering organized relocation services for residential and commercial properties throughout the city. From urban apartment complexes to family homes, we provide careful packing coordination, dependable transportation planning, and structured moving support for efficient local relocations across Austin communities.",
  },
  {
    slug: "pflugerville-tx",
    name: "Pflugerville",
    state: "TX",
    label: "Pflugerville, TX",
    blurb: "Apartments and houses moved with the same careful standard.",
    featured: true,
    image: "movers",
    intro:
      "Moving Day Heroes provides professional moving services in Pflugerville, TX for homes, apartments, and local businesses. Our crews handle packing coordination, furniture protection, and dependable transportation for smooth relocations across Pflugerville and nearby Travis County neighborhoods.",
  },
  {
    slug: "round-rock-tx",
    name: "Round Rock",
    state: "TX",
    label: "Round Rock, TX",
    blurb: "Family homes and new builds with reliable local crews.",
    featured: true,
    image: "truck",
    intro:
      "Moving Day Heroes is a trusted moving company in Round Rock, TX offering residential and commercial relocation support. From new builds to established neighborhoods, we deliver careful packing, organized loading, and on-time local moving throughout Round Rock and North Austin.",
  },
  {
    slug: "lakeway-tx",
    name: "Lakeway",
    state: "TX",
    label: "Lakeway, TX",
    blurb: "West Austin lake communities — stairs, docks, and all.",
    featured: true,
    image: "long-distance",
    intro:
      "Moving Day Heroes serves Lakeway, TX with professional movers experienced in hillside homes, lake-area access, and careful furniture handling. We provide packing support, structured transportation planning, and reliable crews for residential and specialty moves in Lakeway.",
  },
  {
    slug: "bee-cave-tx",
    name: "Bee Cave",
    state: "TX",
    label: "Bee Cave, TX",
    blurb: "Hill Country homes with clear communication and careful crews.",
    featured: true,
    image: "packing",
    intro:
      "Moving Day Heroes offers professional moving services in Bee Cave, TX for family homes, townhomes, and offices. Our team coordinates packing, protective wrapping, and dependable transportation designed for efficient local moves across Bee Cave and western Travis County.",
  },
  {
    slug: "west-lake-hills-tx",
    name: "West Lake Hills",
    state: "TX",
    label: "West Lake Hills, TX",
    blurb: "Careful handling for hillside homes and premium properties.",
    featured: true,
    image: "commercial",
    intro:
      "Moving Day Heroes provides careful, organized moving services in West Lake Hills, TX. From hillside residences to estate properties, we focus on furniture protection, access planning, and structured relocation support for homeowners throughout West Lake Hills.",
  },
  {
    slug: "cedar-park-tx",
    name: "Cedar Park",
    state: "TX",
    label: "Cedar Park, TX",
    blurb: "North Austin suburbs — on-time, careful residential moves.",
    image: "residential",
    intro:
      "Moving Day Heroes delivers professional moving services in Cedar Park, TX for apartments, houses, and local businesses. Enjoy clear quotes, careful packing options, and reliable crews for stress-free relocations across Cedar Park and surrounding communities.",
  },
  {
    slug: "georgetown-tx",
    name: "Georgetown",
    state: "TX",
    label: "Georgetown, TX",
    blurb: "Hill Country living without the moving-day stress.",
    image: "truck",
    intro:
      "Moving Day Heroes is a professional moving company serving Georgetown, TX with residential and commercial relocation services. We provide packing coordination, protective furniture handling, and dependable transportation for local moves throughout Georgetown.",
  },
  {
    slug: "leander-tx",
    name: "Leander",
    state: "TX",
    label: "Leander, TX",
    blurb: "Growing neighborhoods, flexible scheduling, honest quotes.",
    image: "movers",
    intro:
      "Moving Day Heroes offers moving services in Leander, TX with flexible scheduling and honest pricing. Our crews support home and apartment moves with careful packing, organized loading, and reliable transportation across Leander and North Travis County.",
  },
  {
    slug: "dripping-springs-tx",
    name: "Dripping Springs",
    state: "TX",
    label: "Dripping Springs, TX",
    blurb: "Hill Country homes handled with care and clear communication.",
    image: "long-distance",
    intro:
      "Moving Day Heroes provides Hill Country moving services in Dripping Springs, TX. From ranch-style homes to new developments, we deliver careful packing support, furniture protection, and structured relocation planning for local moves.",
  },
  {
    slug: "kyle-tx",
    name: "Kyle",
    state: "TX",
    label: "Kyle, TX",
    blurb: "South metro moves with crews who know the corridors.",
    image: "packing",
    intro:
      "Moving Day Heroes serves Kyle, TX with professional residential and commercial movers. We help families and businesses relocate with organized packing, careful loading, and dependable transportation throughout Kyle and South Austin metro.",
  },
  {
    slug: "travis-county-tx",
    name: "Travis County",
    state: "TX",
    label: "Travis County, TX",
    blurb: "County-wide local moving for homes, offices, and specialty items.",
    image: "commercial",
    intro:
      "Moving Day Heroes is a professional moving company in Travis County, TX delivering organized relocation services for residential and commercial properties throughout the region. From urban apartment complexes to suburban family homes, we provide careful packing coordination, dependable transportation planning, and structured moving support designed for efficient local relocations across Travis County communities.",
  },
];

/** @deprecated use LOCATIONS */
export const SERVICE_AREAS = LOCATIONS.map((l) => ({
  name: l.name,
  blurb: l.blurb,
  slug: l.slug,
  label: l.label,
}));

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}

export const FEATURED_LOCATIONS = LOCATIONS.filter((l) => l.featured);

export const TEAM = [
  {
    name: "Founding Crew",
    role: "Owners & Operators",
    bio: `Local Austin movers building ${SITE.name} on honest pricing, reliable crews, and neighbors helping neighbors.`,
  },
  {
    name: "Moving Consultants",
    role: "Quotes & Planning",
    bio: "Clear estimates, timeline planning, and answers before moving day — so you know exactly what to expect.",
  },
  {
    name: "Field Crews",
    role: "Movers",
    bio: "Trained, background-aware teams who wrap carefully, lift safely, and treat your home with respect.",
  },
  {
    name: "Operations",
    role: "Dispatch & Logistics",
    bio: "Trucks, timing, and crew coordination so your move stays on schedule from load to unload.",
  },
];

export const PAGE_FAQS: { q: string; a: string }[] = [
  {
    q: "What services does Moving Day Heroes offer?",
    a: "Local and long-distance moving, residential and commercial moves, packing and unpacking, loading and unloading, and specialty item moving for pianos, antiques, safes, and more — all from our Austin base.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Moving Day Heroes is fully licensed and insured so your belongings are protected from pickup to delivery.",
  },
  {
    q: "How do I get a quote?",
    a: "Use our free online quote wizard or call us. We'll ask about home size, distance, date, and any specialty items to give an accurate, transparent estimate.",
  },
  {
    q: "How far in advance should I book?",
    a: "For best availability book 2–4 weeks ahead. Peak season (May–September) and month-end weekends fill faster. Last-minute moves are often possible — call us.",
  },
  {
    q: "Do you offer packing services?",
    a: "Yes — full packing, partial packing, and packing supplies. Fragile items get professional wrapping and labeling.",
  },
  {
    q: "Can I pack my own belongings?",
    a: "Absolutely. You're welcome to pack yourself. We can also supply boxes, tape, and bubble wrap if you need them.",
  },
  {
    q: "How do you protect furniture during the move?",
    a: "We use moving blankets, shrink wrap, and protective materials. Crews are trained to pad doorways, floors, and high-touch surfaces.",
  },
  {
    q: "What areas do you serve?",
    a: `We're based in Austin and serve ${SITE.serviceArea}`,
  },
  {
    q: "How is the cost of my move determined?",
    a: "Local moves are typically based on crew size, truck, and time. Long-distance depends on distance and volume. Specialty items and packing add to the quote — we explain everything upfront.",
  },
  {
    q: "Do you move pianos, safes, or gym equipment?",
    a: "Yes. Tell us in advance so we bring the right crew and equipment for pianos, safes, antiques, treadmills, and other specialty pieces.",
  },
  {
    q: "What if something is damaged?",
    a: "Damage is rare. When it happens, our insurance covers eligible claims and we work with you quickly to resolve it.",
  },
  {
    q: "Do you provide storage?",
    a: "Ask us about short-term and longer storage options when you request a quote — we can coordinate storage with your move timeline.",
  },
  {
    q: "Can I change my moving date after booking?",
    a: "Yes — contact us as soon as plans change and we'll do our best to reschedule.",
  },
  {
    q: "How long does a move usually take?",
    a: "Most local Austin moves finish in a day. Long-distance timelines depend on mileage and schedule — we'll give you a clear window in your quote.",
  },
  {
    q: "What day is cheapest to hire movers?",
    a: "Weekdays (Monday–Thursday) and mid-month dates are usually more affordable than weekends and month-end.",
  },
  {
    q: "Should I tip movers?",
    a: "Tipping is customary for good service. Many customers tip about $20–$40 per mover for a half or full day, or roughly 10–15% of the job.",
  },
  {
    q: "How can I save money on my move?",
    a: "Move mid-week or mid-month, declutter before packing, pack non-fragile items yourself, and get a clear free quote so you can compare apples to apples.",
  },
  {
    q: "How much should I budget for an Austin move?",
    a: "Local moves often range roughly $500–$1,500 depending on size and services. Long-distance varies more widely — request a free quote for numbers specific to your move.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  tags: string[];
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-movers-in-austin",
    title: "How to Choose a Moving Company in Austin",
    excerpt: "Licensing, reviews, quotes, and red flags — what Austin movers should check before booking.",
    date: "2026-07-12",
    readMinutes: 6,
    tags: ["Austin", "Tips"],
    body: [
      "Austin moves fast — and so does peak moving season. Picking the right crew matters as much as picking the right neighborhood.",
      "Start with licensing and insurance. Ask for proof and make sure the company name on the paperwork matches who shows up on moving day.",
      "Get a written quote that lists crew size, truck, hourly or flat rate, and what's included (pads, disassembly, travel time). Vague estimates are a red flag.",
      "Read recent Google reviews for mentions of communication, care with furniture, and whether the final price matched the quote.",
      "Finally, book early for weekends and end-of-month dates. Austin's rental calendar makes those days the busiest of the year.",
    ],
  },
  {
    slug: "pack-dishes-for-moving-austin",
    title: "How to Pack Dishes for Moving: Austin Edition",
    excerpt: "A step-by-step dish packing method that survives bumping over MoPac.",
    date: "2026-06-28",
    readMinutes: 5,
    tags: ["Packing"],
    body: [
      "Dishes break when boxes are under-padded or overstuffed. Use small, sturdy boxes — heavy dishware belongs in boxes you can still lift safely.",
      "Line the bottom with crumpled paper. Wrap each plate individually and stack them on edge (like records), not flat. Fill every gap so nothing shifts.",
      "Mark boxes FRAGILE and THIS SIDE UP. Keep a kitchen essentials box separate so you're not hunting for coffee cups on night one.",
      "Short on time? Our Austin packing crew can handle kitchens and fragile rooms while you focus on everything else.",
    ],
  },
  {
    slug: "cheapest-day-to-move-austin",
    title: "Cheapest Days to Move in Austin, TX",
    excerpt: "Weekdays, mid-month timing, and how Austin's lease calendar affects price.",
    date: "2026-06-10",
    readMinutes: 4,
    tags: ["Austin", "Costs"],
    body: [
      "In Austin, demand spikes at month-end and on Saturdays — especially near UT move-in and apartment turnover weekends.",
      "Monday through Thursday mid-month is usually your best shot at lower hourly rates and better crew availability.",
      "If your lease locks you into a weekend, book as early as you can and ask about a two-day split (pack Friday, load Saturday) to reduce overtime risk.",
      "Flexible on dates? Tell us when you request a quote — we'll help you find the most cost-effective window.",
    ],
  },
  {
    slug: "how-to-pack-a-moving-pod",
    title: "How to Pack a Moving Pod Like a Pro",
    excerpt: "Weight distribution, stacking order, and what not to put in a portable container.",
    date: "2026-05-22",
    readMinutes: 7,
    tags: ["Packing", "DIY"],
    body: [
      "Pods reward planning. Heavy items go on the floor along the walls; lighter boxes stack toward the top and center.",
      "Build stable rows, fill voids, and strap furniture so nothing walks during transit. Mattresses and TVs need proper covers.",
      "Don't load propane, paints, or other hazardous materials. Keep an essentials bag with you — not in the container.",
      "Want us to load the pod for you? Moving Day Heroes can handle packing and loading so the container arrives the way it left.",
    ],
  },
  {
    slug: "long-distance-from-austin-checklist",
    title: "Long-Distance Moving From Austin: Checklist",
    excerpt: "Utilities, address changes, and timing for interstate moves out of Central Texas.",
    date: "2026-05-02",
    readMinutes: 6,
    tags: ["Long Distance", "Checklist"],
    body: [
      "Interstate moves need earlier planning than a hop to Round Rock. Confirm delivery windows, inventory lists, and what's going on the truck vs. in the car.",
      "Schedule utilities shutdown and startup, update your USPS address, and keep documents (IDs, leases, medical records) with you.",
      "Photograph high-value items before load day. Declutter — shipping unused stuff across state lines is expensive.",
      "Request your free long-distance quote early so we can lock trucks and timelines around your preferred arrival date.",
    ],
  },
  {
    slug: "apartment-moving-tips-austin",
    title: "Apartment Moving Tips for Austin Renters",
    excerpt: "Elevators, HOA rules, parking permits, and deposit-day survival tips.",
    date: "2026-04-18",
    readMinutes: 5,
    tags: ["Austin", "Apartments"],
    body: [
      "Many Austin complexes require move-in reservations, elevator pads, and COI paperwork. Ask your property manager a week ahead.",
      "Measure sofas and mattresses against stairwells and elevators before moving day — East Side walk-ups surprise people every weekend.",
      "Protect floors and door frames; it's good manners and helps your deposit. Keep cleaning supplies handy for a final walkthrough.",
      "Our apartment crews handle COI requests and tight-space moves regularly — mention your building when you book.",
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
