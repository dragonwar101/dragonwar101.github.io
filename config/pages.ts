import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Full-Stack Developer Portfolio",
    description:
      "Full-stack developer with 7+ years of experience building web products with Python, Django, PHP, Laravel, Vue.js, and React.",
    metadata: {
      title: "Full-Stack Developer Portfolio",
      description:
        "Mohamed Tarek Azab is a full-stack developer in Alexandria, Egypt, specializing in Python, Django, PHP, Laravel, Vue.js, and React.",
    },
  },
  skills: {
    title: "Technical Skills",
    description:
      "Technologies Mohamed Tarek Azab uses to build and ship web products.",
    metadata: {
      title: "Technical Skills",
      description:
        "Python, Django, PHP, Laravel, Vue.js, React, databases, integrations, and deployment skills.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Web products and integrations built by Mohamed Tarek Azab.",
    metadata: {
      title: "Web Development Projects",
      description:
        "Selected web development projects by Mohamed Tarek Azab, including product work for Osarh.",
    },
  },
  contact: {
    title: "Contact",
    description: "Contact Mohamed Tarek Azab about full-stack development work.",
    metadata: {
      title: "Contact",
      description:
        "Get in touch with Mohamed Tarek Azab about web development opportunities and projects.",
    },
  },
  resume: {
    title: "Resume",
    description: "Mohamed Tarek Azab's full-stack developer resume.",
    metadata: {
      title: "Resume",
      description: "View or download Mohamed Tarek Azab's developer resume.",
    },
  },
  experience: {
    title: "Professional Experience",
    description:
      "Full-stack development experience across product teams, freelance work, and e-commerce projects.",
    metadata: {
      title: "Professional Experience",
      description:
        "Mohamed Tarek Azab's professional experience building full-stack web products in Egypt and Saudi Arabia.",
    },
  },
};
