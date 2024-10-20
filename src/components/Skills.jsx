import React, { useState } from "react";

import {
  AttentionSeeker,
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Reveal,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const Skills = () => {
  const Data = [
    { stack: "Html", level: "Advanced", rangeNumber: 100 },
    { stack: "CSS", level: "Advanced", rangeNumber: 90 },
    { stack: "Javascript", level: "Advanced", rangeNumber: 70 },
    { stack: "Tailwind", level: "Advanced", rangeNumber: 80 },
    { stack: "Node Js", level: "Intermediate", rangeNumber: 50 },
  ];
  const otherSkills = [
    { stack: "Express js" },
    { stack: "Git" },
    { stack: "Restful APIs" },
    { stack: "Mongo DB" },
    { stack: "WordPress" },
    { stack: "Figma" },
    { stack: "Teamwork" },
    { stack: "Engaged learning" },
    { stack: "Leadership" },
    { stack: "Accountability" },
  ];

  return (
    <div
      className="min-[850px]:mx-[150px] min-[700px]:mx-6 sm:p-0 p-4 my-20 "
      id="skills"
    >
      <div className="text-5xl font-bold text-web-orange-500 min-[850px]:mx-6 my-10 ">
        My Skills
      </div>
      {Data.map((data) => {
        return (
          <div className="w-[80%]">
            <div className="mx-3 inline-block relative top-5 ">
              {data.stack}
            </div>
            <div className="text-right block mx-3 ">
              {data.level}
              <div className={`    `}></div>
            </div>
            <div className={` my-2  w-[${data.rangeNumber}%] `}>
              <div className={`range hover:animate-pulse h-3 rounded-full w-[100%]`}></div>
            </div>
          </div>
        );
      })}
<div>
  
<div className="w-[80%]">
        <div className="mx-3 inline-block relative top-5  ">React Js</div>
        <div className="text-right block mx-3 ">
          Intermediate
          <div className={`    `}></div>
        </div>
        <div className={` my-2  w-[60%] `}>
          <div className={`range h-3 rounded-full w-[100%] hover:animate-pulse `}></div>
        </div>
      </div>
<div className="w-[80%]">
        <div className="mx-3 inline-block relative top-5  ">React Native</div>
        <div className="text-right block mx-3 ">
        Beginner
          <div className={`    `}></div>
        </div>
        <div className={` my-2  w-[30%] `}>
          <div className={`range h-3 rounded-full w-[100%] hover:animate-pulse `}></div>
        </div>
      </div>
<div className="w-[80%]">
        <div className="mx-3 inline-block relative top-5  ">Mongo DB</div>
        <div className="text-right block mx-3 ">
          Intermediate
          <div className={`    `}></div>
        </div>
        <div className={` my-2  w-[60%] `}>
          <div className={`range h-3 rounded-full w-[100%] hover:animate-pulse `}></div>
        </div>
      </div>
</div>
      <div className="grid sm:grid-cols-3 sm:gap-0 gap-2 grid-cols-2">
        {otherSkills.map((data) => {
          return (
            <div className="w-[80%] ">
              <div className="mx-5 text-sm inline-block relative top-5 ">
                {data.stack}
              </div>
              <div className="menu-range h-3 rounded-full w-3"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
