import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "afp",
    position: "Senior Full-Stack Developer",
    company: "Alexandria for Programming",
    location: "Alexandria, Egypt",
    startDate: new Date("2019-07-01"),
    endDate: "Present",
    description: [
      "Full-time through September 2024, part-time since.",
      "Migrated two desktop apps (quality-control app, manufacturing ERP) to live web products for Alexseeds, integrated with PLCs and factory data pipelines (Django, Vue.js, SQL Server, IIS).",
    ],
    achievements: [
      "Migrated two factory desktop systems to live web products for Alexseeds.",
      "Mentored 2 junior developers (2024 onwards).",
    ],
    skills: ["Django", "Vue", "Laravel", "SQLServer", "MySQL", "Typescript", "React"],
  },
  {
    id: "alexapps",
    position: "Full-Stack Developer (hourly)",
    company: "AlexApps",
    location: "Alexandria, Egypt",
    startDate: new Date("2022-01-01"),
    endDate: "Present",
    description: [
      "Hourly role alongside Alexandria for Programming after the company split.",
      "Built APIs, admin panels and web apps for Gulf e-commerce clients, with payments, notifications and Firebase.",
    ],
    achievements: [
      "Delivered API, admin-panel and web-app projects for Gulf e-commerce clients.",
      "Mentored 4 junior developers (2024 onwards).",
    ],
    skills: ["Laravel", "Django", "MySQL", "Vue", "Javascript", "Typescript"],
    companyUrl: "https://www.alexapps.com",
    logo: "/experience/alexapps-logo.png",
  },
  {
    id: "freelance",
    position: "Freelance Developer",
    company: "Self-employed (Freelance)",
    location: "Alexandria, Egypt",
    startDate: new Date("2019-07-01"),
    endDate: "Present",
    description: [
      "Occasional after-hours freelance work alongside employment.",
      "Built Python e-invoice integrations for e-invoicing companies, APIs connecting an offline POS to an online e-commerce website, and a Laravel/Blade e-commerce site on a CodeCanyon CMS.",
    ],
    achievements: [
      "Delivered e-invoicing, payments and e-commerce integration work for clients.",
    ],
    skills: ["Django", "Laravel", "MySQL", "Vue", "Javascript", "Typescript"],
  },
  {
    id: "osarh",
    position: "Full-Stack Developer",
    company: "Osarh",
    location: "Riyadh, Saudi Arabia",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Supported the product suite with the tech team, improved the infrastructure of the product theme, and built introduction sites and portals.",
    ],
    achievements: [],
    skills: ["PHP", "Laravel", "Vue", "Typescript", "MySQL", "Laravel Blade", "Jquery", "Bootstrap"],
    companyUrl: "https://osarh.com",
    logo: "/experience/osarh-logo.svg",
  },
];
