import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Project 1 title",
    description: "Project 1 description",
    image: "/images/computer.jpg",
    gitUrl: "/",
    previewUrl: "/",
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
    <>
      <h2 className="text-center text-4xl font-bold mt-4 mb-4">My Projects</h2>
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
    </>
  );
}

export default ProjectSection;
