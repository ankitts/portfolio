import { ProjectCard, ProjectCardProps } from "@/components/ProjectCard";
import { Topbar } from "@/components/Topbar";

export default function Projects() {

  const Projects: ProjectCardProps[] = [
    {
      title: "Medium Clone",
      description: "Blogging Website built using NextJS.",
      url: "https://medium-next-two.vercel.app/",
      stackUsed: ["ts", "next", "postgres"],
    },
    {
      title: "Payments App",
      description: "Payment App made to transfer P2P money using transactions using the MERN stack",
      stackUsed: ["js", "react", "express", "mongo"],
    },
    {
      title: "Computer Vision Based Web App",
      description: "Web app to detect objects from live webcam stream using the YOLOv5 model for detection.",
      stackUsed: ["python", "django"],
    },
    {
      title: "Portfolio Website",
      description: "Portfolio website built using NextJS.",
      url: "https://ankit-portfolio-one-gamma.vercel.app/",
      stackUsed: ["ts", "next"],
    },
  ];

  return (
    <div className="bg-black h-full justify-center text-white">
      <Topbar />
      <div className="text-6xl font-extrabold text-white pt-20 text-center">
        Projects
      </div>
      <div className="grid grid-cols-2 mx-52">
        {Projects.map((project, index) => (
          <div className="mt-20 mx-20">
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
              stackUsed={project.stackUsed}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
