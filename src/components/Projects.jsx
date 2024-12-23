import React from "react";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="text-center my-20 text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="mx-auto pb-3 lg:w-1/4">
              <img src={item.image} width={250} height={250} alt={item.title} />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{item.title}</h6>
                <p className="mb-4 text-neutral-400">{item.description}</p>
                {item.technologies.map((tech, index)=>(
                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{tech}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
