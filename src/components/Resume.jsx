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
      location: "Badagry Grammar School, Lagos Nigeria.",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam vero eius doloremque rerum minima quod dolore unde dolorum nostrum non nemo magni aliquid minus sunt harum, iure nulla repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla, maiores doloribus dolore ratione impedit, commodi accusantium laborum sint minima tempore, unde dicta reiciendis aspernatur dolores amet quis harum libero?",
    },
    {
      year: "2020",
      post: "Freelance at Web development",
      location: " Lagos Nigeria.",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam vero eius doloremque rerum minima quod dolore unde dolorum nostrum non nemo magni aliquid minus sunt harum, iure nulla repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla, maiores doloribus dolore ratione impedit, commodi accusantium laborum sint minima tempore, unde dicta reiciendis aspernatur dolores amet quis harum libero?",
    },
    {
      year: "2024",
      post: "Introduction to frontend development, Certificate",
      location: "Meta",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam vero eius doloremque rerum minima quod dolore unde dolorum nostrum non nemo magni aliquid minus sunt harum, iure nulla repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla, maiores doloribus dolore ratione impedit, commodi accusantium laborum sint minima tempore, unde dicta reiciendis aspernatur dolores amet quis harum libero?",
    },
  ];
  return (
    <div className="min-[850px]:mx-[250px] min-[700px]:mx-6 ">
      <div className="text-[#f49504] sm:text-7xl text-5xl font-bold m-10">Resume</div>
      <div className="resume">
        {data.map((data, index) => {
          return (
            <div className=" " key={index}>
              <div className=" flex-row sm:mx-0 mr-2 flex">
                <Fade direction="down" cascade damping={0.05} duration={2000} triggerOnce >
                  <div className=" font-semibold rounded-s-full scale-75 sm:scale-100  bg-[#7c7c7c] sm:m-0 ml-1 pl-4 inline-flex py-0.5  h-[29px] ">
                    <p className="text-xl ">{data.year}</p>
                    <div className="text-[#7c7c7c] text-[34px] bottom-1 left-[26px] relative rounded ">
                      <BiSolidRightArrow />
                    </div> 
                  </div>
                </Fade>
                <div >
                  <div className="indicator before:scale-75 sm:before:scale-100 sm:before:mx-[40px] before:mx-[10px] before:flex before:justify-center before:w-[30px] before:h-[30px] before:rounded-full before:bg-[#f49504]
                  after:mx-auto after:flex after:justify-center after:w-[3px] after:h-full after:bottom-2 after:relative after:rounded-e-full after:bg-[#f49504] 
                  h-full
                  "></div>
                </div>
                <div>
                  <Fade duration={2000} direction="up" cascade triggerOnce damping={0.2} >
                    <div className="sm:text-3xl text-2xl sm:my-2 my-1  font-bold">{data.post}</div>
                    <div className="sm:text-lg text-md sm:my-2 my-1 font-semibold">{data.location}</div>
                    <div className="sm:text-lg text-sm ">{data.info}</div>
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
