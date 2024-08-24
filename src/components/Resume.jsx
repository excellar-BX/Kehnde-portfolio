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
import { BiArrowToRight, BiSolidRightArrow } from "react-icons/bi";

const Resume = () => {
  const data = [
    {
      year: "2017",
      post: "Secondary school education",
      location: "University of Lagos, Lagos Nigeria",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam vero eius doloremque rerum minima quod dolore unde dolorum nostrum non nemo magni aliquid minus sunt harum, iure nulla repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla, maiores doloribus dolore ratione impedit, commodi accusantium laborum sint minima tempore, unde dicta reiciendis aspernatur dolores amet quis harum libero?",
    },
    {
      year: "2017",
      post: "Secondary school education",
      location: "University of Lagos, Lagos Nigeria",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam vero eius doloremque rerum minima quod dolore unde dolorum nostrum non nemo magni aliquid minus sunt harum, iure nulla repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla, maiores doloribus dolore ratione impedit, commodi accusantium laborum sint minima tempore, unde dicta reiciendis aspernatur dolores amet quis harum libero?",
    },
    {
      year: "2017",
      post: "Secondary school education",
      location: "University of Lagos, Lagos Nigeria",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam vero eius doloremque rerum minima quod dolore unde dolorum nostrum non nemo magni aliquid minus sunt harum, iure nulla repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla, maiores doloribus dolore ratione impedit, commodi accusantium laborum sint minima tempore, unde dicta reiciendis aspernatur dolores amet quis harum libero?",
    },
  ];
  return (
    <div className="min-[768px]:mx-[250px] ">
      <div className="text-[#f49504] text-7xl font-bold m-10">Resume</div>
      <div className="resume">
        {data.map((data, index) => {
          return (
            <div className=" " key={index}>
              <div className=" flex-row flex">
                <Fade direction="down" cascade damping={0.05} duration={2000} triggerOnce >
                  <div className="year font-semibold rounded-s-full bg-[#7c7c7c] pl-4 inline-flex py-0.5 h-[29px] ">
                    {data.year}
                    <div className="text-[#7c7c7c] text-[34px] bottom-1 left-[26px] relative rounded ">
                      <BiSolidRightArrow />
                    </div>
                  </div>
                </Fade>
                <Fade duration={2000} direction="down" cascade triggerOnce damping={0.05} >
                  <div className="indicator "></div>
                </Fade>
                <div>
                  <Fade duration={2000} direction="up" cascade triggerOnce damping={0.2} >
                    <div className="text-3xl my-2 font-bold">{data.post}</div>
                    <div className="text-xl my-2 font-semibold">{data.location}</div>
                    <div className="text-lg ">{data.info}</div>
                  </Fade>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
