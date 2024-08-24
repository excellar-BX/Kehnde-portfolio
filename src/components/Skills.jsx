import React from "react";

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
    { stack: "React Js", level: "Intermediate", rangeNumber: 60 },
    { stack: "React Native", level: "Beginner", rangeNumber: 30 },
    { stack: "Node Js", level: "Intermediate", rangeNumber: 50 },
    { stack: "Mongo DB", level: "Intermediate", rangeNumber: 60 },
  ];
  const otherSkills = [
    { stack: "Express js", },
    { stack: "Git", },
    { stack: "Restful APIs", },
    { stack: "Mongo DB", },
    { stack: "WordPress", },
    { stack: "Figma", },
    { stack: "Teamwork",  },
    { stack: "Engaged learning", },
    { stack: "Leadership", },
    { stack: "Accountability", },
  ];

  return (
    <div className="min-[768px]:mx-[250px] mx-auto sm:p-0 p-4 my-20 " id="skills" >
      <div className="text-5xl font-bold text-[#f49504] my-10 ">My Skills</div>
      {Data.map((data) => {
        return (
          <div className="w-[80%]">
            <div className="mx-3 inline-block relative top-5 ">
              {data.stack}
            </div>
            <div className="text-right block mx-3 " >{data.level} 
            <div className={`    `} ></div></div>
            <div className={` my-2  w-[${data.rangeNumber}%]  `}>
              <div
                className={`range h-3 rounded-full w-[100%]`} 
              ></div>
            </div>
          </div>
        );
      })}
<div className="grid sm:grid-cols-3 sm:gap-0 gap-2 grid-cols-2">
      {otherSkills.map((data) => {
        return (
          <div className="w-[80%] ">
            <div className="mx-5 inline-block relative top-5 ">
              {data.stack}
            </div>
              <div
                className="menu-range h-3 rounded-full w-3"
              ></div>
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default Skills;
