import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohamed Tarek Azab | Full-Stack Developer",
    short_name: "Mohamed Tarek Azab",
    description:
      "Portfolio of Mohamed Tarek Azab, a full-stack developer in Alexandria, Egypt.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "1024x1024",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["portfolio", "developer", "web development"],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
