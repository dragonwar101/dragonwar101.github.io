import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const socialTitle = `${title} | ${siteConfig.authorName}`;
  const image = {
    url: siteConfig.ogImage,
    alt: `Portrait of ${siteConfig.authorName}`,
  };

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      creator: siteConfig.twitterHandle,
      images: [image.url],
    },
  };
}
