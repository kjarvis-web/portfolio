import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Reddit Lite (Full Stack)',
    description:
      'Reddit clone that has some of the features associated with the website reddit such as nested comments, voting, basic user authentication (jwt), and search. MongoDB is used to store data, Express and node js is used to model the back end with react for the front end. Redux is used for state management and tailwind css for styling.',
    image: '/images/reddit.png',
    gitUrl: 'https://github.com/kjarvis-web/reddit_frontend',
    previewUrl: 'https://reddit-3map.onrender.com/',
  },
  {
    id: 2,
    title: 'Discord Lite (Full Stack)',
    description: 'Coming soon',
    image: '/images/nextshop.jpg',
    gitUrl: 'https://github.com/kjarvis-web/discord_frontend',
    previewUrl: 'https://github.com/kjarvis-web/discord',
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
