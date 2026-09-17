
import type { Ijob } from "../component/types/Type";
import { use } from "react";
import AllProject from "./AllProject";
// import AllProject from "./AllProject";

export interface ProjectProps {
  PromiseProject: Promise<Ijob[]>;
}

export default function Project({ PromiseProject }: ProjectProps) {
  const projects = use(PromiseProject);

  return (
    <>
      
      <div className="col-span-3 grid grid-cols-3 gap-5">
        {projects.map((singlebook, index) => (
          <AllProject key={index} singlebook={singlebook}></AllProject>
        ))}
      </div>
    </>
  );
}