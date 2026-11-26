import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { createPageMetadata } from "@/lib/metadata";
import ChipContainer from "@/components/ui/chip-container";

export const metadata = createPageMetadata({
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
  path: "/projects",
});

const renderContent = (tabVal: string) => {
  let projectArr = Projects;
  if (tabVal === "personal") {
    projectArr = projectArr.filter((val) => val.type === "Personal");
  } else if (tabVal === "professional") {
    projectArr = projectArr.filter((val) => val.type === "Professional");
  }

  const groups = [
    {
      involvement: "Long-term product",
      label: "Long-term products",
    },
    {
      involvement: "Maintained & improved",
      label: "Maintained & improved",
    },
    {
      involvement: "Scoped delivery",
      label: "Scoped deliveries",
    },
    {
      involvement: undefined,
      label: "Other contributions",
    },
  ] as const;

  return (
    <div className="mx-auto my-4 space-y-8">
      {groups.map(({ involvement, label }) => {
        const groupProjects = projectArr.filter(
          (project) => project.involvement === involvement
        );

        return groupProjects.length > 0 ? (
          <section key={label}>
            <h2 className="mb-3 font-heading text-2xl">{label}</h2>
            <div className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
              {groupProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </section>
        ) : null;
      })}
    </div>
  );
};

export default function ProjectsPage() {
  const tabItems = [
    {
      value: "all",
      label: "All",
      content: renderContent("all"),
    },
    ...(["personal", "professional"] as const)
      .filter((category) =>
        Projects.some(
          (project) =>
            project.type ===
            (category === "personal" ? "Personal" : "Professional")
        )
      )
      .map((category) => ({
        value: category,
        label: category === "personal" ? "Personal" : "Professional",
        content: renderContent(category),
      })),
  ];

  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
      <section className="mx-auto mt-10 max-w-3xl">
        <h2 className="font-heading text-2xl">Smaller scoped deliveries</h2>
        <ChipContainer textArr={["Scoped delivery"]} />
        <p className="text-muted-foreground">
          I have also done small, defined jobs such as APIs for e-commerce
          mobile apps, and payment and bank integrations with providers I use:
          HyperPay, Tap, Paymob, Fawry.
        </p>
      </section>
    </PageContainer>
  );
}
