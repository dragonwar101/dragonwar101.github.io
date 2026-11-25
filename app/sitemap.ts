import { MetadataRoute } from "next";

import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/skills", "/projects", "/experience", "/contact"];

  return [
    ...pages.map((path) => ({
      url:
        path === "/"
          ? siteConfig.url
          : new URL(path, siteConfig.url).toString(),
    })),
    ...Projects.map((project) => ({
      url: new URL(
        `/projects/${encodeURIComponent(project.id)}`,
        siteConfig.url
      ).toString(),
    })),
    ...experiences.map((experience) => ({
      url: new URL(
        `/experience/${encodeURIComponent(experience.id)}`,
        siteConfig.url
      ).toString(),
    })),
    {
      url: new URL("/Mohamed-Tarek-Azab-CV.pdf", siteConfig.url).toString(),
    },
  ];
}
