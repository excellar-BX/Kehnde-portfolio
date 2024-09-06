import React from "react";
import pic from "../assets/blog5.png";
import { AttentionSeeker, Bounce, Fade, Flip, Hinge, JackInTheBox, Reveal, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

const ProjectsDetails = [
  {
    image: pic,
    title: "Todo list app",
    description: "Simple task management tool for organizing and tracking daily tasks.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.pages.dev",
    languages: ["#ReactJs", " #Tailwind"],
  },
  {
    image: pic,
    title: "Quiz app",
    description: "Interactive quiz platform for testing knowledge and learning new concepts.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.pages.dev",
    languages: ["#ReactJs", " #Tailwind"],
  },
  {
    image: pic,
    title: "Nima stores ",
    description: "Online shopping platform for discovering and purchasing products.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.pages.dev",
    languages: ["#ReactJs", " #Tailwind", " #Expressjs", " #MongoDB"],
  },
  {
    image: pic,
    title: "Fitness app",
    description: "Personalized fitness tracker for monitoring progress and achieving goals.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.pages.dev",
    languages: ["#ReactJs", " #Tailwind"],
  },
  {
    image: pic,
    title: "Travel companion",
    description: "Travel guide and planning tool for exploring new destinations.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.pages.dev",
    languages: ["#ReactJs", " #Tailwind", " #Expressjs", " #MongoDB"],
  },
  {
    image: pic,
    title: "Diet plan app",
    description: " Customizable nutrition planning tool for healthy eating and weight management.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.pages.dev",
    languages: ["#ReactJs", " #Tailwind", " #Redux"],
  },
];

const Projects = () => {
  return (
    <div className="min-[850px]:mx-[50px] sm:p-0 p-6 mx-auto my-20 " id="projects">
      <div className="text-5xl font-bold text-[#f49504] my-10 min-[700px]:ml-6 "> Projects</div>
      <div className=" grid xl:grid-cols-3 sm:grid-cols-2 xl:gap-x-4 grid-cols-1 mx-auto max-w-5xl ">
      <Fade direction="up" cascade triggerOnce={true} duration={3000} damping={0.1}>
        {ProjectsDetails.map((data) => {
          return (
            
            <div className=" m-4 xl:w-[300px] w-[250px] mx-auto h-[350px] hover:scale-110 border-[#f49504] border-[3px] rounded-xl px-2 py-3 ">
              <div>
                <img
                  className=" w-[210px] h-[100px] my-2 rounded-lg mx-auto "
                  src={data.image}
                  alt={data.title}
                />
              </div>
      <Fade direction="up" cascade triggerOnce={true} duration={3000} damping={0.1}>
              <div className=" text-[16px] mt-2 mx-2 font-bold ">
                {data.title}
              </div> 
              <div className="text-[12px] ml-2 ">{data.description}</div>
              <div className=" px-2 text-xs py-2 " >{data.languages}</div>
      </Fade>
              <div className="flex flex-row relative top-10 ">
                <a href={data.previewLink}>
                  <div className="preview-1  py-2 px-3 rounded-full text-white text-[12px] ">
                    Use preview
                  </div>
                </a>
                <a href={data.githubLink}>
                  <div className="preview-2 text-[12px] border-2 border-[#f49504] relative rounded-full left-1 text-center py-2 px-3  ">
                    Check on Github
                  </div>
                </a>
              </div>
            </div>
          );
        })}
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
