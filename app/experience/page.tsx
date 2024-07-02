import { ExpCard } from "@/components/ExpCard";
import { Topbar } from "@/components/Topbar";
import { Divider } from "@nextui-org/react";
import { color } from "framer-motion";

export default function Experience(){
    return(
        <div className="bg-black h-full justify-center text-white">
            <Topbar />
            <div className="text-6xl font-extrabold text-white pt-20 text-center">Experience</div>
            <div className="flex">
            <div className=" ml-48 mt-20 w-2/5">
                <ExpCard className={""}/>
                <ExpCard className={"mt-80"}/>
            </div>
            <div className="-ml-10 mb-40">
                <Divider orientation="vertical" className="fill-white h-36 w-0.5 mt-20 bg-white"/>
                <svg className="feather feather-briefcase my-4 -mx-3" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <Divider orientation="vertical" className="fill-white h-64 w-0.5 bg-white"/>
                <svg className="feather feather-briefcase my-4 -mx-3" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <Divider orientation="vertical" className="fill-white h-64 w-0.5 bg-white"/>
                <svg className="feather feather-briefcase my-4 -mx-3" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <Divider orientation="vertical" className="fill-white h-64 w-0.5 bg-white"/>
                <svg className="feather feather-briefcase my-4 -mx-3" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <Divider orientation="vertical" className="fill-white h-36 w-0.5 bg-white"/>
            </div>
            <div className=" ml-40 my-20 w-2/5">
                <ExpCard className={"mt-80"}/>
                <ExpCard className={"mt-80"}/>
            </div>
            </div>
            
        </div>
    )
}

