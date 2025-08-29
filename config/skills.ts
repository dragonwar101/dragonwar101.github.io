import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "GraphQL",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 3,
    icon: Icons.graphql,
  },
  {
    name: "Nest.js",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 3,
    icon: Icons.nestjs,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 3,
    icon: Icons.react,
  },
  {
    name: "Angular",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 3,
    icon: Icons.angular,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "Netlify",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.netlify,
  },
  {
    name: "Vercel",
    description:
      "Deploy and manage web applications with a fast and reliable platform.",
    rating: 4,
    icon: Icons.vercel,
  },
  {
    name: "Vue.js",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 5,
    icon: Icons.vue,
  },
  {
    name: "Vuetify",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 5,
    icon: Icons.vuetify,
  },
  {
    name: "DigitalOcean",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 4,
    icon: Icons.digitalocean,
  },
  {
    name: "Nuxt.js",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 5,
    icon: Icons.nuxt,
  },
  {
    name: "SQLite",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 4,
    icon: Icons.sqlite,
  },
  {
    name: "SQL Server",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 4,
    icon: Icons.sqlserver,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
