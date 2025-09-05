import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "Osarh Pro",
    companyName: "Osarh",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Osarh's main SASS project for educational content which I maintained and optimized working with their team.",
    websiteLink: "https://osarh.pro",
    techStack: [
      "PHP",
      "Laravel",
      "Bootstrap",
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Jquery",
    ],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-09-01"),
    companyLogoImg: "/projects/osarh/osarh-logo.svg",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing product services",
        imgArr: [],
      },
      {
        title: "Clients Dashboard",
        description:
          "Comprehensive client portal made with Vue.js to allow clients to make sub acadimies for thier own academy.",
        imgArr: [],
      },
      {
        title: "Admin Dashboard",
        description:
          "Multi Client Admin Dashboard to manage each acadmey courses and contents.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my time at Osarh, I had the opportunity to work on optimizing the project. My role as a full-stack web developer was to ensure all critical bugs are fixed in time so clients can use the project without any issues.",
        "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Vue.js with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the race for ai creating a dynamic website builder for customizing each client's homepage with just a prompt.",
        "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Jquery libraries and Laravel Blade, as well as backend technologies including PHP, Laravel, Redis and MySQL.",
      ],
      bullets: [
        "Developed and optimized a high-performing website, dashbaord and landing pages.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage clients academies.",
        "Leveraged Laravel Blade, Jquery, Vue.js, TypeScript for captivating front-end experiences.",
        "Utilized PHP, Laravel, Redis, MySQL to design and manage databases.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
