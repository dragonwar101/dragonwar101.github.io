import {
  ProjectContribution,
  ProjectInvolvement,
  ValidCategory,
  ValidExpType,
  ValidSkills,
} from "./constants";

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
  company?: string;
  client?: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate?: Date;
  endDate?: Date;
  companyLogoImg?: string;
  involvement?: ProjectInvolvement;
  contributions?: ProjectContribution[];
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  // TODO(confirm mapping)
  {
    id: "Alexseeds Maintenance System",
    companyName: "Alexseeds Maintenance System",
    company: "Alexandria for Programming",
    client: "Alexseeds",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "I built most of this private system's early version and continue part-time work on scaling and planning.",
    techStack: ["Laravel", "Next.js", "SQLServer"],
    involvement: "Long-term product",
    contributions: [
      "Backend",
      "Frontend",
      "Sensor monitoring integration",
      "Mobile alerts",
      "Scaling & planning",
    ],
    descriptionDetails: {
      paragraphs: [
        "I built most of the system's early version before the team grew. I continue to contribute part-time on scaling and planning.",
        "I integrated sensor monitoring through the database and background workers, with OneSignal alerts notifying technicians so they can address problems before production stops.",
      ],
      bullets: [
        "Integrated sensor monitoring with the application through the database and background workers.",
        "Set up OneSignal mobile alerts for technicians.",
        "Continue part-time scaling and planning work on this ongoing product.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "Alexseeds ElRazy",
    companyName: "Alexseeds ElRazy",
    company: "Alexandria for Programming",
    client: "Alexseeds",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "I built most of this ongoing product's early version and now contribute part-time to scaling and planning.",
    techStack: ["Django", "Vue.js", "SQLServer"],
    involvement: "Long-term product",
    contributions: ["Backend", "Frontend", "Scaling & planning"],
    descriptionDetails: {
      paragraphs: [
        "I built most of the product's early version before the team grew and continue part-time work on scaling and planning.",
      ],
      bullets: [
        "Worked on the early build of this ongoing product.",
        "Continue part-time scaling and planning work.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "Osarh Pro",
    companyName: "Osarh",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Osarh's main SaaS project for educational content which I maintained and optimized working with their team.",
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
    involvement: "Maintained & improved",
    contributions: ["Backend", "Frontend", "Bug fixing & optimization"],
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
          "Comprehensive client portal made with Vue.js to allow clients to make sub academies for their own academy.",
        imgArr: [],
      },
      {
        title: "Admin Dashboard",
        description:
          "Multi Client Admin Dashboard to manage each academy's courses and content.",
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
        "Developed and optimized a high-performing website, dashboard and landing pages.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage clients academies.",
        "Leveraged Laravel Blade, Jquery, Vue.js, TypeScript for captivating front-end experiences.",
        "Utilized PHP, Laravel, Redis, MySQL to design and manage databases.",
      ],
    },
  },
  {
    id: "Arab Takting",
    companyName: "Arab Takting",
    company: "AlexApps / Alexandria for Programming group",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "I assisted on this contract and task management project with app structure, Blazor frontend integration, and design implementation.",
    techStack: ["Blazor"],
    // TODO(involvement): confirm long-term vs scoped
    contributions: ["App structure", "Frontend integration", "Design implementation"],
    descriptionDetails: {
      paragraphs: [
        "I assisted on this contract and task management project.",
      ],
      bullets: [
        "Worked on the app structure.",
        "Integrated the Blazor frontend.",
        "Implemented the design.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "Moola",
    companyName: "Moola",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "I assisted on this Saudi finance platform during the integration phase and with admin-panel management across the back end and front end.",
    websiteLink: "https://moola.sa/",
    techStack: [],
    // TODO(involvement): confirm long-term vs scoped
    contributions: ["Admin panel", "Backend", "Frontend", "Integration phase"],
    descriptionDetails: {
      paragraphs: [
        "I assisted on this Saudi finance platform during its integration phase and with admin-panel management across the back end and front end.",
      ],
      bullets: [
        "Contributed during the integration phase.",
        "Worked on admin-panel management.",
        "Contributed to both backend and frontend work.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "OnlyCard KSA",
    companyName: "OnlyCard KSA",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "I assisted on this AngularJS project, building the frontend and the admin-panel frontend.",
    websiteLink: "https://onlycardksa.com",
    techStack: ["AngularJS"],
    // TODO(involvement): confirm long-term vs scoped
    contributions: ["Frontend", "Admin panel"],
    descriptionDetails: {
      paragraphs: [
        "I assisted on this project, which was built with AngularJS.",
      ],
      bullets: [
        "Built the frontend.",
        "Built the admin-panel frontend.",
      ],
    },
    pagesInfoArr: [],
  },
];

export const featuredProjects = Projects.slice(0, 3);
