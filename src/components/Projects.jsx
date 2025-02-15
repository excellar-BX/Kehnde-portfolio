import React, { useState } from "react";
import pic from "/pending.png";
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

const ProjectsDetails = [
  {
    image: "/todolist1.png",
    title: "Todo list app",
    description:
      "Simple task management tool for organizing and tracking daily tasks.",
    githubLink: "https://github.com/excellar-BX/Todo-list",
    previewLink: "https://excellence-todo.vercel.app",
    languages: ["#Html", "#Css", "#Javascript"],
  },
  {
    image: "/stopwatch1.png",
    title: "My Stopwatch",
    description:
      "A simple stopwatch app with JavaScript.",
    githubLink: "https://github.com/excellar-BX/PRODIGY_WD_02",
    previewLink: "https://excellence-stopwatch.vercel.app",
    languages: ["#Html", "#Css", "#Javascript"],
  },
  {
    image: "/weather1.png",
    title: "Weather app",
    description:
      "Weather app for checking realtime weather conditions for a particular city.",
    githubLink: "https://github.com/excellar-BX/weather-app",
    previewLink: "https://excellence-weather-app.vercel.app/",
    languages: ["#NextJs", "#ReactJs","#Tailwind", "#Typescript"],
  },
  {
    image: "/oxyvit1.png",
    title: "Oxyvit",
    description:
      "Landing page for Oxyvit Multivitamins.",
    githubLink: "https://github.com/excellar-BX/",
    previewLink: "https://excellencecom.vercel.app/",
    languages: ["#NextJs", "#ReactJs","#Tailwind", "#Typescript"],
  },
    {
    image: "/travel1.png",
    title: "Travel Landing Page",
    description:
      "Travel guide and planning tool for exploring new destinations.",
    githubLink: "https://github.com/excellar-BX/TravelCompanionLanding",
    previewLink: "https://travelcompanionpage.vercel.app",
    languages: ["#ReactJs", "#Tailwind"],
  },
  {
    image: pic,
    title: "Quiz app",
    description:
      "Interactive quiz platform for testing knowledge and learning new concepts.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.vercel.app",
    languages: ["#ReactJs", "#Tailwind"],
  },
  {
    image: "/slaty1.pic",
    title: "Slaty",
    description:
      "Discover how slaty can help you get better grades.",
    githubLink: "https://github.com/excellar-BX/slaty",
    previewLink: "https://slaty.vercel.app",
    languages: ["#ReactJs", "#Tailwind"],
  },
  {
    image: pic,
    title: "AfriBuy",
    description:
      "Online shopping platform for discovering and purchasing products.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.vercel.app",
    languages: ["#ReactJs", "#Tailwind", "#Expressjs", "#MongoDB"],
  },
  {
    image: pic,
    title: "Fitness app",
    description:
      "Personalized fitness tracker for monitoring progress and achieving goals.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.vercel.app",
    languages: ["#ReactJs", "#Tailwind"],
  },
  {
    image: pic,
    title: "Travel companion",
    description:
      "Travel guide and planning tool for exploring new destinations.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.vercel.app",
    languages: ["#ReactJs", "#Tailwind", "#Expressjs", "#MongoDB"],
  },
  {
    image: pic,
    title: "Diet plan app",
    description:
      " Customizable nutrition planning tool for healthy eating and weight management.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.vercel.app",
    languages: ["#ReactJs", "#Tailwind", "#Redux"],
  },
  {
    image: "/calculator1.png",
    title: "Calculator",
    description:
      "A simple online Calculator for simple computations.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://mywebcalculator.pages.dev",
    languages: ["#Css", "#Html", "#Javascript"],
  },
  {
    image: pic,
    title: "SwiftCash",
    description:
      "A Tool for handling online transactions.",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://excellencecom.vercel.app",
    languages: ["#ReactJs", "#Tailwind"],
  },
{
    image: "/raven1.png",
    title: "Raven reads",
    description:
      " A tool for reading online ebooks written by the Author Raven, which you could also download the book",
    githubLink: "https://github.com/excellar-BX",
    previewLink: "https://ravenreads.vercel.app",
    languages: ["#ReactJs", "#Tailwind", "#Css"],
  },
];

const languages = [
  "All",
  "#ReactJs",
  "#Tailwind",
  "#Html",
  "#Css",
  '#NextJs',
  '#Typescript',
  "#Javascript",
  "#ReactNative",
  "#Redux",
  "#MongoDB",
];

const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const filteredByLanguage =
    selectedLanguage === "All"
      ? ProjectsDetails
      : ProjectsDetails.filter((product) =>
          product.languages.includes(selectedLanguage)
        );

  return (
    <div
      className="min-[850px]:mx-[50px] sm:p-0 p-6 mx-auto my-20 "
      id="projects"
    >
      <div className="text-5xl font-bold text-web-orange-500 my-10 min-[700px]:ml-6 ">
        {" "}
        Projects
      </div>
      <div className=" flex flex-row flex-wrap justify-center ">
        {languages.map((language) => (
          <div
            className={`${
              selectedLanguage === language ? "bg-web-orange-800" : ""
            } cursor-pointer bg-web-orange-500 py-1 px-3 my-2 rounded-full text-white mx-2 `}
            key={language}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </div>
        ))}
      </div>

      <div className="project-card grid xl:grid-cols-3 sm:grid-cols-2 xl:gap-x-4 grid-cols-1 mx-auto max-w-5xl ">
        {filteredByLanguage.map((data) => {
          return (
            <div className="">
              <Fade
                direction="up"
                cascade
                triggerOnce={true}
                duration={3000}
                damping={0.1}
              >
                <div className=" m-4 xl:w-[300px] w-[250px] mx-auto h-[400px] border-web-orange-500 border-[3px] rounded-xl px-2 py-3 ">
                  <div className="overflow-hidden w-[95%] mx-auto my-1 rounded-lg ">
                    <img
                      className="hover:scale-110 transition-all ease-in duration-300 object-cover w-full h-[150px]  "
                      src={data.image}
                      alt={data.title}
                    />
                  </div>
                  <Fade
                    direction="up"
                    cascade
                    triggerOnce={true}
                    duration={3000}
                    damping={0.1}
                  >
                    <div className=" text-[16px] mt-2 mx-2 font-bold ">
                      {data.title}
                    </div>
                    <div className="text-[12px] ml-2 my-1 ">{data.description}</div>
                    <div className="flex flex-row flex-wrap my-1 px-2 w-[95%] text-xs ">
                      {data.languages.map((languages) => (
                        <div className="bg-[#eee] dark:bg-opacity-30 w-fit bg-opacity-70 p-1 rounded-full mx-1  my-1">
                          {languages}
                        </div>
                      ))}
                    </div>
                  </Fade>
                  <div className="flex flex-row justify-center items-center absolute bottom-5 left-0 right-0 my-2 ">
                    <a href={data.previewLink}>
                      <div className="preview-1  py-2 px-3 rounded-full text-white text-[12px] ">
                        Use preview
                      </div>
                    </a>
                    <a href={data.githubLink}>
                      <div className="preview-2 text-[12px] border-2 border-web-orange-500 relative rounded-full left-1 text-center py-2 px-3  ">
                        Check on Github
                      </div>
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
