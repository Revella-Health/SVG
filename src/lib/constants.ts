/* ═══════════════════════════════════════════
   SVG Association of Montreal - Constants
   ═══════════════════════════════════════════ */

// TODO: Replace with real social media URLs when available
export const SOCIAL_LINKS = {
  facebook: "#",
  instagram: "#",
  youtube: "#",
} as const;

/** Height of the TopBar in px — used by Navigation for sticky offset */
export const TOPBAR_HEIGHT = 33;

export const C = {
  navy: "#002B5C",
  deepNavy: "#001631",
  blue: "#0052A5",
  gold: "#FCD116",
  goldDark: "#D4A800",
  green: "#009739",
  greenLight: "#E8F5ED",
  sand: "#FAF7F2",
  cream: "#FFFDF7",
  white: "#FFFFFF",
  charcoal: "#1C1C28",
  slate: "#4A4A5A",
  muted: "#8A8A9A",
  border: "#E8E6E1",
  cardShadow: "0 2px 12px rgba(0,43,92,0.06)",
  cardHover: "0 12px 40px rgba(0,43,92,0.1)",
} as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "about",
    label: "About",
    href: "/about",
    sub: [
      { label: "Our Story", href: "/about#story" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Mission & Vision", href: "/about#mission" },
    ],
  },
  { id: "events", label: "Events", href: "/events" },
  {
    id: "membership",
    label: "Membership",
    href: "/membership",
    sub: [
      { label: "Why Join?", href: "/membership#why-join" },
      { label: "Membership Plans", href: "/membership#plans" },
      { label: "Member Benefits", href: "/membership#benefits" },
    ],
  },
  { id: "resources", label: "Resources", href: "/resources" },
  { id: "news", label: "News & Blog", href: "/news" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { num: "500+", label: "Community Members", value: 500 },
  { num: "30+", label: "Events Per Year", value: 30 },
  { num: "20+", label: "Years of Service", value: 20 },
  { num: "5", label: "Active Programs", value: 5 },
] as const;

export const EVENTS = [
  {
    month: "MAR",
    day: "15",
    title: "Community Potluck Dinner",
    location: "NDG Community Centre",
    tag: "Social" as const,
    desc: "A warm evening of home-cooked Caribbean dishes and community connection.",
  },
  {
    month: "APR",
    day: "20",
    title: "Youth Mentorship Workshop",
    location: "Côte-des-Neiges Library",
    tag: "Education" as const,
    desc: "Connecting young Vincentians with mentors for academic and career guidance.",
  },
  {
    month: "JUN",
    day: "08",
    title: "Caribbean Culture Festival",
    location: "Parc Jean-Drapeau",
    tag: "Cultural" as const,
    desc: "Celebrating Caribbean heritage with music, food, dance, and family fun.",
  },
  {
    month: "OCT",
    day: "27",
    title: "Independence Day Celebration",
    location: "Plaza Centre-Ville",
    tag: "National" as const,
    desc: "Commemorating SVG Independence with our annual gala and cultural program.",
  },
] as const;

export const TAG_COLORS = {
  Social: { bg: "#F0F4FF", text: "#0052A5" },
  Education: { bg: "#E8F5ED", text: "#009739" },
  Cultural: { bg: "#FFF8E8", text: "#D4A800" },
  National: { bg: "rgba(252,209,22,0.19)", text: "#002B5C" },
} as const;

export const MEMBERSHIP_PLANS = [
  {
    name: "Individual",
    price: "$25",
    period: "year",
    features: [
      "All event access",
      "Newsletter & updates",
      "Voting rights",
      "Community directory",
    ],
    color: C.navy,
    featured: false,
  },
  {
    name: "Family",
    price: "$40",
    period: "year",
    features: [
      "Household coverage",
      "Youth program access",
      "Priority event seating",
      "All individual benefits",
    ],
    color: C.green,
    featured: true,
  },
  {
    name: "Senior (65+)",
    price: "$15",
    period: "year",
    features: [
      "Full member benefits",
      "Social programs",
      "Transportation help",
      "Community support",
    ],
    color: C.blue,
    featured: false,
  },
] as const;

export const RESOURCES = [
  { icon: "newcomer" as const, title: "Newcomer Services", desc: "Immigration help, housing, French classes, employment support" },
  { icon: "health" as const, title: "Health & Social", desc: "RAMQ, CLSC info, mental health, community health programs" },
  { icon: "education" as const, title: "Education & Youth", desc: "School enrollment, tutoring, scholarships, youth programs" },
  { icon: "business" as const, title: "Business Directory", desc: "Vincentian-owned businesses, networking, career workshops" },
  { icon: "heritage" as const, title: "SVG Heritage", desc: "History, traditions, cuisine, music, diaspora connections" },
  { icon: "legal" as const, title: "Government & Legal", desc: "Consular services, citizenship, residency, tax help" },
] as const;

export const NEWS_ARTICLES = [
  {
    date: "Feb 12, 2026",
    tag: "Announcement",
    title: "New Community Partnership Announced",
    excerpt:
      "We're excited to share our new partnership with local organizations to better serve Vincentian newcomers arriving in Montreal.",
  },
  {
    date: "Jan 28, 2026",
    tag: "Community",
    title: "2025 Year in Review",
    excerpt:
      "A look back at the milestones, events, and achievements our association accomplished together this past year.",
  },
  {
    date: "Dec 15, 2025",
    tag: "Events",
    title: "Holiday Food Drive Success",
    excerpt:
      "Thanks to generous donations from our members, we delivered over 200 food baskets to families across Montreal.",
  },
  {
    date: "Nov 20, 2025",
    tag: "Culture",
    title: "Independence Day Gala Highlights",
    excerpt:
      "Relive the memorable moments from our annual celebration of St. Vincent and the Grenadines' Independence.",
  },
] as const;

// TODO: Replace placeholder names with real board member names
export const BOARD_MEMBERS = [
  { name: "President Name", role: "President" },
  { name: "VP Name", role: "Vice President" },
  { name: "Secretary Name", role: "Secretary" },
  { name: "Treasurer Name", role: "Treasurer" },
  { name: "Director Name", role: "Director" },
] as const;

export const CONTACT_INFO = [
  {
    icon: "location" as const,
    title: "Office & Meetings",
    lines: ["Community Centre", "Montreal, QC", "Saturday: 10am - 2pm"],
  },
  // TODO: Replace placeholder phone number with real number
  { icon: "phone" as const, title: "Phone", lines: ["(514) 000-0000"] },
  { icon: "email" as const, title: "Email", lines: ["info@svgmontreal.ca"] },
] as const;

export const FOOTER_LINKS = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about#story" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Membership",
    links: [
      { label: "Why Join?", href: "/membership#why-join" },
      { label: "Individual", href: "/membership#plans" },
      { label: "Family", href: "/membership#plans" },
      { label: "Senior", href: "/membership#plans" },
      { label: "Business Partners", href: "/membership#plans" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Events Calendar", href: "/events" },
      { label: "News & Blog", href: "/news" },
      { label: "Resources", href: "/resources" },
      { label: "Newcomer Guide", href: "/resources" },
      { label: "Business Directory", href: "/resources" },
    ],
  },
] as const;
