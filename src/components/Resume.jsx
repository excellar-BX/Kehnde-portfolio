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
      endYear:"2023",
      post: "Secondary school education",
      location: "Badagry Grammar School, Lagos Nigeria.",
      info: "During my time at Badagry Grammar School, I developed a passion for computers and robotics, actively participating in competitions to showcase my innovative ideas. These experiences laid the foundation for my career in technology."
    },
    {
      year: "2020",
      endYear:"Present",
      post: "Freelance at Web development",
      location: " Lagos Nigeria.",
      info: "As a freelance web developer, I specialized in UI design and maintenance, collaborating with companies to enhance their online presence through engaging web advertisements. My ability to deliver high-quality projects earned me a solid reputation in the field."
    },
    {
      year: "2023",
      endYear:"2023",
      post: "Bournvita Boot Camp",
      location: "Bournvita NG",
      info: "At the Bournvita Boot Camp, I gained hands-on experience with emerging technologies, including Python, Swift XR, Augmented Reality, and Google Earth, expanding my skill set in innovative tech fields." 
    },
    {
      year: "2024",
      endYear:"2024",
      post: "Introduction to Frontend development, Certificate",
      location: "Meta(Coursera)",
      info: "This course deepened my understanding of frontend development principles, equipping me to build responsive and user-friendly web applications. It solidified my expertise in delivering exceptional digital experiences aligned with industry standards." ,
    },
    {
      year: "2024",
      endYear:"2025",
      post: "Internship at Slaty Ltd",
      location: "Remote",
      info: "During my internship at Slaty Ltd, I worked on the company’s landing page using technologies like React JS, Tailwind CSS, JavaScript, and APIs. This opportunity allowed me to enhance my skills in building dynamic, responsive, and user-centric interfaces.",
    },
    {
      year: "2025",
      endYear:"Present",
      post: "Frontend Developer- Medscan security",
      location: "Remote",
      info: "At MedScan Security, I work on API integration, dashboard development, and the main website. I help display manufacturers, products, and recent scans while ensuring a seamless user experience. My role involves optimizing the platform for efficiency and real-time data updates.",
    },
  ];
  return (
    <div className="min-[850px]:mx-[150px] min-[700px]:mx-6 ">
      <div className="text-web-orange-500 sm:text-7xl text-5xl font-bold m-10">Resume</div>
      <div className="resume">
        {data.map((data, index) => {
          return (
            <div className=" " key={index}>
              <div className=" flex-row sm:mx-0 mr-2 flex">
                
                <div >
                  <div className="indicator before:scale-75 sm:before:scale-100 sm:before:mx-[40px] before:mx-[10px] before:flex before:justify-center before:w-[30px] before:h-[30px] before:rounded-full before:bg-web-orange-500
                  after:mx-auto after:flex after:justify-center after:w-[3px] after:h-full after:bottom-2 after:relative after:rounded-e-full after:bg-web-orange-500 
                  h-full
                  "></div>
                </div>
                <div>
                  <Fade duration={2000} direction="up" cascade triggerOnce damping={0.2} >
                    <div className="sm:text-3xl text-2xl sm:my-2 my-1  font-bold">{data.post}</div>
                    <div className="sm:text-lg text-md sm:my-2 my-1 font-semibold">{data.location}</div>
                    <div className="sm:text-[12px] text-md sm:my-2 my-1 italic ">{data.year} - {data.endYear}</div>
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
