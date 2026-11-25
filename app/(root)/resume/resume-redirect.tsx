"use client";

import { useEffect } from "react";

export default function ResumeRedirect() {
  useEffect(() => {
    window.location.replace("/Mohamed-Tarek-Azab-CV.pdf");
  }, []);

  return (
    <p>
      Redirecting to the resume. If you are not redirected,{" "}
      <a
        href="/Mohamed-Tarek-Azab-CV.pdf"
        className="text-primary underline underline-offset-4"
      >
        open my CV (PDF)
      </a>
      .
    </p>
  );
}
