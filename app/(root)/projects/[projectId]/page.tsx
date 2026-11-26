import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import CustomTooltip from "@/components/ui/custom-tooltip";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { cn, formatDateFromObj } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const projectId = decodeURIComponent(params.projectId);
  const project = Projects.find((value) => value.id === projectId);

  if (!project) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    title: `${project.id} project`,
    description: project.shortDescription,
    path: `/projects/${encodeURIComponent(project.id)}`,
  });
}

export async function generateStaticParams() {
  return Projects.map((project) => ({
    projectId: project.id,
  }))
}

export default function Project({ params }: ProjectPageProps) {
  const projectId = decodeURIComponent(params.projectId);
  const project = Projects.find((val) => val.id === projectId);
  if (!project) {
    redirect("/projects");
  }

  const projectTags = [
    ...project.category,
    ...(project.involvement ? [project.involvement] : []),
    ...(project.contributions ?? []),
  ];
  const hasDescription =
    project.descriptionDetails.paragraphs.length > 0 ||
    project.descriptionDetails.bullets.length > 0;

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>
      <div>
        {project.startDate && project.endDate && (
          <time
            dateTime={project.startDate.toISOString()}
            className="block text-sm text-muted-foreground"
          >
            {formatDateFromObj(project.startDate)} -{" "}
            {formatDateFromObj(project.endDate)}
          </time>
        )}
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {project.companyName}
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        {(project.company || project.client) && (
          <p className="mt-2 text-sm text-muted-foreground">
            {project.company && <>Company: {project.company}</>}
            {project.company && project.client && " · "}
            {project.client && <>Client: {project.client}</>}
          </p>
        )}
        <ChipContainer textArr={projectTags} />
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt={`${siteConfig.authorName} profile`}
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{siteConfig.authorName}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      {project.companyLogoImg && (
        <Image
          src={project.companyLogoImg}
          alt={project.companyName}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}

      {project.techStack.length > 0 && (
        <div className="mb-7 ">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
            Tech Stack
          </h2>
          <ChipContainer textArr={project.techStack} />
        </div>
      )}

      {hasDescription && (
        <div className="mb-7 ">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
            Description
          </h2>
          <ProjectDescription
            paragraphs={project.descriptionDetails.paragraphs}
            bullets={project.descriptionDetails.bullets}
          />
        </div>
      )}

      {project.pagesInfoArr.length > 0 && (
        <div className="mb-7 ">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
            Page Info
          </h2>
          {project.pagesInfoArr.map((page, ind) => (
            <div key={ind}>
              <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
                <Icons.star className="h-5 w-5 mr-2" /> {page.title}
              </h3>
              {page.description && <p>{page.description}</p>}
              {page.imgArr.length > 0 && (
                <div>
                  {page.imgArr.map((img, ind) => (
                    <Image
                      src={img}
                      key={ind}
                      alt={img}
                      width={720}
                      height={405}
                      className="my-4 rounded-md border bg-muted transition-colors"
                      priority
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
