import React from "react";
import { EXPERIENCES } from "../constants";

function Experiences() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="text-4xl text-center my-20">Experiences</h2>
      {
        EXPERIENCES.map((item, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{item.year}</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {item.role} - {" "}
                        <span className="text-sm text-purple-300">{item.company}</span>
                    </h6>
                    <p className="text-neutral-400 mb-4">{item.description}</p>
                    {
                        item.technologies.map((item, index)=>(
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
                                {item}

                            </span>
                        ))
                    }
                </div>


            </div>
        ))
      }
    </div>
  );
}

export default Experiences;
