import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ContactForm />
          <a
            href="/Mohamed-Tarek-Azab-CV.pdf"
            download
            className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
          >
            Download CV
          </a>
        </div>
        <div className="flex-1 flex justify-center ">
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
