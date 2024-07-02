import { ExpCard } from "@/components/ExpCard";
import { Topbar } from "@/components/Topbar";
import { Divider } from "@nextui-org/react";
import { color } from "framer-motion";

export default function Experience() {
  return (
    <div className="bg-black h-full justify-center text-white">
      <Topbar />
      <div className="text-6xl font-extrabold text-white pt-20 text-center">
        Experience
      </div>
      <div className="flex">
        <div className=" ml-48 mt-20 w-2/5">
          <div className="mb-20">
            <ExpCard
              role={"Open Source Contributor"}
              logoSrc="/open-source-logo.png"
              description={
                "Contributed with 3 Pull Requests to an UI Library named NextUI."
              }
              stackUsed={["ts", "react"]}
              duration="May'24-Present"
            />
          </div>
          <div className="mt-80">
            <ExpCard
              role={"Backend Development Intern"}
              logoSrc="/analogy-plus-logo.png"
              organization="Analogy Plus LLC"
              description={
                "Built an Inventory System for tracking supplies to impact region during natural disaster. Developed an API backend system on Django performing CRUD operations on stock data"
              }
              stackUsed={["python", "django"]}
              duration="Jul'22-Sep'22"
            />
          </div>
        </div>
        <div className="-ml-10 mb-40">
          <Divider
            orientation="vertical"
            className="fill-white h-36 w-0.5 mt-20 bg-white"
          />
          <svg
            className="feather feather-briefcase my-4 -mx-3"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="14" rx="2" ry="2" width="20" x="2" y="7" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <Divider
            orientation="vertical"
            className="fill-white h-60 w-0.5 bg-white"
          />
          <svg
            className="feather feather-briefcase my-4 -mx-3"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="14" rx="2" ry="2" width="20" x="2" y="7" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <Divider
            orientation="vertical"
            className="fill-white h-60 w-0.5 bg-white"
          />
          <svg
            className="feather feather-briefcase my-4 -mx-3"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="14" rx="2" ry="2" width="20" x="2" y="7" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <Divider
            orientation="vertical"
            className="fill-white h-40 w-0.5 bg-white"
          />
        </div>
        <div className=" ml-40 my-20 w-2/5">
          <div className="mt-80">
            <ExpCard
              role="Software Development Intern"
              logoSrc="/knoct-id-logo.jpeg"
              organization="Knoct ID"
              description="Developed backend to implement the ABHA API milestones for user auth in the healthcare application. Utilised Nest.js & MongoDB to develop the backend, integrating terminologies for doctor prescriptions"
              stackUsed={["ts", "react"]}
              duration="Jan'24-Mar'24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
