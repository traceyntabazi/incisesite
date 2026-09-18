export interface Applicator {
  slug: string;
  name: string;
  company: string;
  tier: string;
  intake: string;
  city: string;
  country: string;
  yearsCertified: number;
  projectsCompleted: number;
  specialties: string[];
  bio: string;
  availability: "Available" | "Limited Availability" | "Booked — Waitlist";
  phone: string;
  email: string;
  notableProjects: { name: string; scope: string }[];
  testimonial?: string;
}

// NOTE: Placeholder roster — replace names, contacts and project details with your
// real licensed applicator records before publishing.
export const applicators: Applicator[] = [
  {
    slug: "david-kasule",
    name: "David Kasule",
    company: "Kasule Surface Works",
    tier: "TIER IV — Master Applicator",
    intake: "Intake 7",
    city: "Kampala",
    country: "Uganda",
    yearsCertified: 5,
    projectsCompleted: 86,
    specialties: ["Microtopping", "Metallic Finishes", "Seamless Bathrooms"],
    bio: "Runs a four-person crew specialising in high-traffic residential and boutique hospitality interiors. Signed off on all three QA gates on every INCISE project since 2022.",
    availability: "Limited Availability",
    phone: "+256700000001",
    email: "applicators@incise.co.ug",
    notableProjects: [
      { name: "Kololo Residence", scope: "310 m² Microtopping floors and wet-room walls" },
      { name: "Nakasero Boutique Hotel", scope: "Lobby and 14 en-suite bathrooms" },
      { name: "Graite Interiors Showroom", scope: "Metallic feature walls" },
    ],
    testimonial:
      "Before the Academy I was doing general plastering. Now I run my own certified applicator business. The training didn't just teach me how to apply — it taught me how to build something.",
  },
  {
    slug: "sarah-nakayima",
    name: "Sarah Nakayima",
    company: "Nakayima Finishes",
    tier: "TIER III — Lead Applicator",
    intake: "Intake 5",
    city: "Entebbe",
    country: "Uganda",
    yearsCertified: 6,
    projectsCompleted: 71,
    specialties: ["Wallcrete", "Cemwash", "Colour Matching"],
    bio: "Texture specialist working closely with interior designers on bespoke colour development. Leads INCISE colour consistency workshops for newer cohorts.",
    availability: "Available",
    phone: "+256700000002",
    email: "applicators@incise.co.ug",
    notableProjects: [
      { name: "Lake View Villa, Entebbe", scope: "Full-house Cemwash walls" },
      { name: "Restaurant Sesa", scope: "Wallcrete textured interior" },
    ],
    testimonial:
      "The QA Gate system changed how I think about every project. I used to rush. Now I check. The difference in results — and in client satisfaction — is enormous.",
  },
  {
    slug: "michael-otieno",
    name: "Michael Otieno",
    company: "Otieno Applied Surfaces",
    tier: "TIER II — Senior Applicator",
    intake: "Intake 9",
    city: "Nairobi",
    country: "Kenya",
    yearsCertified: 3,
    projectsCompleted: 44,
    specialties: ["Microtopping", "Patio System", "Colour Hardener"],
    bio: "Outdoor systems specialist covering Nairobi and the Rift Valley corridor. Strong record on pool surrounds, terraces and driveways in high-UV conditions.",
    availability: "Available",
    phone: "+254700000003",
    email: "applicators@incise.co.ug",
    notableProjects: [
      { name: "Karen Pool Terrace", scope: "420 m² Patio System" },
      { name: "Westlands Office Fit-out", scope: "Microtopping floors across two levels" },
    ],
    testimonial:
      "I came in knowing nothing about microcement. Twelve weeks later I was on live projects. The pace is demanding — and exactly right. Nothing was wasted.",
  },
  {
    slug: "brian-mugisha",
    name: "Brian Mugisha",
    company: "Mugisha & Sons Coatings",
    tier: "TIER III — Lead Applicator",
    intake: "Intake 6",
    city: "Mbarara",
    country: "Uganda",
    yearsCertified: 5,
    projectsCompleted: 58,
    specialties: ["Industrial Floors", "Densifiers", "Sealers"],
    bio: "Focused on warehouse, clinic and institutional floors in western Uganda. Certified on the full INCISE sealer and densifier range.",
    availability: "Booked — Waitlist",
    phone: "+256700000004",
    email: "applicators@incise.co.ug",
    notableProjects: [
      { name: "Mbarara Medical Centre", scope: "900 m² sealed screed floors" },
      { name: "Western Logistics Depot", scope: "Densified and sealed industrial slab" },
    ],
  },
  {
    slug: "grace-atim",
    name: "Grace Atim",
    company: "Atim Studio",
    tier: "TIER II — Senior Applicator",
    intake: "Intake 10",
    city: "Gulu",
    country: "Uganda",
    yearsCertified: 2,
    projectsCompleted: 27,
    specialties: ["Microtek", "Feature Walls", "Small-Scale Residential"],
    bio: "Detail-driven applicator working on compact residential interiors and retail spaces across northern Uganda.",
    availability: "Available",
    phone: "+256700000005",
    email: "applicators@incise.co.ug",
    notableProjects: [
      { name: "Gulu Coffee House", scope: "Counter, walls and seating nooks" },
      { name: "Private Apartment, Layibi", scope: "Microtek floors" },
    ],
    testimonial:
      "Being licensed changed how clients see me. I am not quoting as a contractor anymore — I am quoting as a specialist, and the work follows.",
  },
  {
    slug: "peter-wanyama",
    name: "Peter Wanyama",
    company: "Wanyama Surface Co.",
    tier: "TIER V — Certified Trainer",
    intake: "Intake 3",
    city: "Kampala",
    country: "Uganda",
    yearsCertified: 7,
    projectsCompleted: 130,
    specialties: ["All INCISE Systems", "Large Commercial", "Team Supervision"],
    bio: "One of the first INCISE-certified applicators and now an Academy trainer. Handles multi-team commercial deployments and complex hospitality specifications.",
    availability: "Limited Availability",
    phone: "+256700000006",
    email: "applicators@incise.co.ug",
    notableProjects: [
      { name: "St Charles Lwanga Church", scope: "Interior floors and altar surround" },
      { name: "Luzira Corporate HQ", scope: "1,200 m² Microtopping across four floors" },
    ],
    testimonial:
      "I have trained crews who now run their own businesses. The licence is not a certificate on a wall — it is a standard you defend on every site.",
  },
];
