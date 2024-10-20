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
      info: "During my secondary school days at Badagry Grammar School, Lagos Nigeria. I developed a strong passion for computer and robotics skills. I actively participated in various competitions, showcasing my expertise and innovative ideas. This foundation laid the groundwork for my future endeavors in technology. My achievements in secondary school instilled in me the confidence to pursue a career in tech, and I am proud to have started my journey in this field at such a young age.",
    },
    {
      year: "2020",
      post: "Freelance at Web development",
      location: " Lagos Nigeria.",
      info: "As a freelance web developer in Lagos, Nigeria, I honed my skills in UI maintenance and design. I collaborated with various companies to enhance their online presence through captivating web advertisements. My expertise in creating engaging designs helped businesses attract more clients, driving growth and success. This experience taught me the importance of user-centered design and effective web development strategies. I successfully delivered projects that met clients' expectations, solidifying my reputation as a skilled freelance web developer.",
    },
    {
      year: "2023",
      post: "Bournvita Boot Camp",
      location: "Bournvita NG",
      info: "The Bournvita Boot Camp was a transformative experience that expanded my skill set in cutting-edge technologies. I learned Python, Swift XR, Augmented Reality, and Google Earth, gaining hands-on experience in emerging tech fields. The boot camp provided a comprehensive understanding of these technologies, enabling me to approach complex problems with innovative solutions. Upon completion, I received a certificate, validating my expertise and commitment to staying up-to-date with industry advancements."
    },
    {
      year: "2024",
      post: "Introduction to frontend development, Certificate",
      location: "Meta",
      info: "Completing the 'Introduction to Frontend Development' course on Coursera, offered by Meta, marked a significant milestone in my journey. This course deepened my understanding of frontend development principles, best practices, and industry standards. I gained a solid foundation in building responsive, user-friendly interfaces and web applications. With this knowledge, I am confident in my ability to create exceptional digital experiences that meet the evolving needs of users and businesses alike.",
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
                <Fade direction="down" cascade damping={0.05} duration={2000} triggerOnce >
                  <div className=" font-semibold rounded-s-full scale-75 sm:scale-100  bg-[#7c7c7c] sm:m-0 ml-1 pl-4 inline-flex py-0.5  h-[29px] ">
                    <p className="text-xl ">{data.year}</p>
                    <div className="text-[#7c7c7c] text-[34px] bottom-1 left-[26px] relative rounded ">
                      <BiSolidRightArrow />
                    </div> 
                  </div>
                </Fade>
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
