import type { Metadata } from "next";

import { pagesConfig } from "@/config/pages";
import ResumeRedirect from "./resume-redirect";

export const metadata: Metadata = {
  title: pagesConfig.resume.metadata.title,
  description: pagesConfig.resume.metadata.description,
  robots: {
    index: false,
    follow: true,
  },
};

export default function ResumePage() {
  return <ResumeRedirect />;
}
