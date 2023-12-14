import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "NextShopAPI",
    description:
      "A mock online store that fetches data from fakeapistore.com. Nextjs is used to bundle the project, tailwindCSS to style, and useContext to manage state.",
    image: "/images/nextshop.jpg",
    gitUrl: "https://github.com/norristown/nextshop",
    previewUrl: "https://nextshop-theta.vercel.app/",
  },
  {
    id: 2,
    title: "Project 2 title",
    description: "Project 2 description",
    image: "/images/computer.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3 title",
    description: "Project 3 description",
    image: "/images/computer.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
];
function ProjectSection() {
  return (
    <section id="projects" className="">
      <h2 className="text-center text-5xl font-bold mt-4 mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
