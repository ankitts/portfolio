import { ProjectCard } from "@/components/ProjectCard";
import { Topbar } from "@/components/Topbar";

export default function Projects(){
    return(
        <div className="bg-black h-full justify-center text-white">
            <Topbar />
            <div className="text-6xl font-extrabold text-white pt-20 text-center">Projects</div>
            <div className="flex justify-center">
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="flex justify-center">
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}