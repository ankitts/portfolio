import { SocialHandles } from "@/components/SocialHandles";
import { Topbar } from "@/components/Topbar";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <div className="bg-black h-screen text-white">
      <Topbar />
      <div className="flex-col p-40">
        <div className="flex m-10">
          <div className="w-3/5">
            <div className="font-extrabold text-6xl">Ankit Somani</div>
            <div className="font-thin text-lg">
              21, Full stack developer from India. Bachelor in Technology from IIT Bombay. Passionate about contributing to open source. Javascript Wiz. Love travelling & football.
            </div>
            <SocialHandles />
          </div>
          <div className="w-3/10 ml-20">
            <Image
              width={250}
              alt="NextUI hero Image"
              src="/profile.jpg"
              radius="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
