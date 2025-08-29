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
    id: "Alexapps",
    position: "Full Stack Engineer",
    company: "Alexapps",
    location: "Alexandria, Egypt",
    startDate: new Date("2019-08-01"),
    endDate: "Present",
    description: [
      "Contributing and developing numerous projects involving dashboards, sites, and applications used by businesses and governments.",
      "Leading the training of new comers to the team.",
      "Optimizing ongoing projects and building new ones.",
    ],
    achievements: [
      "Optimized ongoing project and migrated to vue3 and typescript.",
      "Learned alot about software development cycle and team management.",
      "Collaborated closely with product owners and designers for user-centric features, improving usability.",
    ],
    skills: ["Vue", "Django", "Laravel", "MySQL", "SQLServer", "Typescript", "React", "Next.js", "Nuxt.js", "Tailwind CSS"],
    companyUrl: "https://www.alexapps.com",
    logo: "/experience/alexapps-logo.png",
  },
  {
    id: "osarh",
    position: "Software Development Intern",
    company: "Osarh",
    location: "Riyadh, Saudi Arabia",
    startDate: new Date("2024-8-01"),
    endDate: "Present",
    description: [
      "Utilzing AI to enchance our productivity.",
      "Built UX/UI for our products and optimized the codebase.",
      "Worked on Jira to handle customer support tasks and resolve them.",
    ],
    achievements: [
      "Built tools and integrated them into the ui of the current software products.",
      "Developed Pixel Perfect UI for our product websites.",
      "Learned alot about time management and team management.",
    ],
    skills: ["Laravel", "Jquery", "Owl Carousel", "Bootstrap", "Tailwind CSS", "Laravel Blade", "HTML 5", "CSS 3", "Javascript", "Typescript", "React", "Next.js", "Nuxt.js"],
    companyUrl: "https://osarh.com",
    logo: "/experience/osarh-logo.svg",
  }
];
