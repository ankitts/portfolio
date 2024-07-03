import SkillsCard from "@/components/SkillsCard";
import { SocialHandles } from "@/components/SocialHandles";
import { Topbar } from "@/components/Topbar";
import { Image } from "@nextui-org/image";

export default function Home() {

  const skills = [{
    name: "JavaScript",
    src: "/js-logo.png"
  },{
    name: "TypeScript",
    src: "/ts-logo.png"
  },{
    name: "Python",
    src: "/python-logo.png"
  },{
    name: "React",
    src: "/react-logo.png"
  },{
    name: "Next",
    src: "/nextjs-logo.png"
  },{
    name: "Express",
    src: "/express-logo.png"
  },{
    name: "Django",
    src: "/django-logo.png"
  },{
    name: "Docker",
    src: "/docker-logo.png"
  },{
    name: "Git",
    src: "/git-logo.png"
  },{
    name: "Mongo",
    src: "/mongo-logo.png"
  },{
    name: "Postgres",
    src: "/postgres-logo.png"
  }]

  return (
    <div className="bg-black h-screen text-white">
      <Topbar />
      <div className="flex flex-col p-40">
        <div className="flex ml-28 mr-10">
          <div className="w-3/5">
            <div className="font-extrabold text-6xl">Ankit Somani</div>
            <div className="font-thin text-lg">
              21, Full stack developer from India. Bachelor in Technology from IIT Bombay. Passionate about contributing to open source. Javascript Wiz. Love travelling & football.
            </div>
            <SocialHandles />
          </div>
          <div className="w-3/10 ml-40">
            <Image
              width={250}
              alt="NextUI hero Image"
              src="/profile.jpg"
              radius="lg"
            />
          </div>
        </div>
      </div>
      <div className="ml-72 mr-60 pb-20 grid grid-cols-4 gap-1 justify-center">
        {skills.map((skill)=>(
            <SkillsCard key={skill.name} name={skill.name} src={skill.src} />
        ))}
      </div>
    </div>
  );
}
