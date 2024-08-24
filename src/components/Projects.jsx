import React from "react";
import pic from "../assets/palette.png";
import { AttentionSeeker, Bounce, Fade, Flip, Hinge, JackInTheBox, Reveal, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

const ProjectsDetails = [
  {
    image: pic,
    title: "Todo list app",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    githubLink: "https://github.com/favours123",
    previewLink: "https://excellenceportfolio2.pages.dev",
    languages: ["ReactJs", "Tailwind"],
  },
  {
    image: pic,
    title: "Quiz app",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    githubLink: "https://github.com/favours123",
    previewLink: "https://excellenceportfolio2.pages.dev",
    languages: ["ReactJs", "Tailwind"],
  },
  {
    image: pic,
    title: "Nima stores ",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    githubLink: "https://github.com/favours123",
    previewLink: "https://excellenceportfolio2.pages.dev",
    languages: ["ReactJs", "Tailwind", "Expressjs", "MongoDB"],
  },
  {
    image: pic,
    title: "Fitness app",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    githubLink: "https://github.com/favours123",
    previewLink: "https://excellenceportfolio2.pages.dev",
    languages: ["ReactJs", "Tailwind"],
  },
  {
    image: pic,
    title: "Travel companion",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    githubLink: "https://github.com/favours123",
    previewLink: "https://excellenceportfolio2.pages.dev",
    languages: ["ReactJs", "Tailwind", "Expressjs", "MongoDB"],
  },
  {
    image: pic,
    title: "Diet plan app",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    githubLink: "https://github.com/favours123",
    previewLink: "https://excellenceportfolio2.pages.dev",
    languages: ["ReactJs", "Tailwind", "Redux"],
  },
];

const Projects = () => {
  return (
    <div className="min-[768px]:mx-[250px] sm:p-0 p-6 mx-auto my-20 " id="projects">
      <div className="text-5xl font-bold text-[#f49504] my-10 "> Projects</div>
      <div className=" grid sm:grid-cols-2  grid-cols-1 mx-auto max-w-xl ">
      <Fade direction="up" cascade triggerOnce={true} duration={3000} damping={0.1}>
        {ProjectsDetails.map((data) => {
          return (
            
            <div className=" m-4 w-[250px] mx-auto h-[300px] border-[#f49504] border-[3px] rounded-xl px-2 py-3 ">
              <div>
                <img
                  className=" w-[210px] h-[100px] my-2 rounded-sm mx-auto "
                  src={data.image}
                  alt={data.title}
                />
              </div>
              <div className=" text-[16px] mt-2 mx-2 font-bold ">
                {data.title}
              </div> 
              <div className="text-[12px] ml-2 ">{data.description}</div>
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
