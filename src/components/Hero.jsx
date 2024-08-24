import React from "react";
import pic from "../assets/me1.png";
import Header from "./Header";
import {
  BiBookReader,
  BiConversation,
  BiFile,
  BiFolder,
  BiHeart,
  BiSolidPen,
  BiUser,
} from "react-icons/bi";
import { Link } from "react-scroll";
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
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  
  const Nav = [
    {
      name: "About",
      route: "about",
      icon: <BiUser />,
    },
    {
      name: "Resume",
      route: "resume",
      icon: <BiFile />,
    },
    {
      name: "Skills",
      route: "skills",
      icon: <BiSolidPen />,
    },
    {
      name: "Projects",
      route: "projects",
      icon: <BiFolder />,
    },
    {
      name: "Blog",
      route: "blog",
      icon: <BiBookReader />,
    },
  ];

  return (
    <div className=" bg-[#100315]">
      <Header />
      <div className="blueShape bg-white absolute w-[320px]  h-[320px] left-1 blur-[400px]    rounded-full "></div>
      <div className="blueShape bg-white absolute w-[250px]  h-[250px] right-1 bottom-[20%] blur-[180px]   rounded-full "></div>

      <div className=" w-[60px] right-0 fixed z-10 top-20  max-[800px]:top-16 ">
        <ul className="flex flex-col opacity-40 hover:opacity-100  ">
          <Fade direction="down" cascade triggerOnce={true} damping={0.1}>
            {Nav.map((nav, index) => (
              <Link
                className=""
                activeClass="active"
                smooth={true}
                spy={true}
                key={index}
                to={nav.route}
              >
                <div className="text-[#707070] m-4 nav-icons text-2xl hover:text-[#f49504] hover:-translate-x-2  transition-all duration-2s delay-1s ease-out   ">
                  {nav.icon}
                </div>
              </Link>
            ))}
          </Fade>
        </ul>
      </div>

      <div className=" flex flex-row max-[800px]:flex-col ">
        <div className=" w-[70%] min-w-[300px] m-20 max-[500px]:mx-3">
          <Fade cascade damping={0.2} direction="left" triggerOnce={true}>
            <div>
              <p className="text-white text-xl max-[460px]:text-sm mx-2 my-5 ">
                Hello I'm
              </p>
            </div>
            <div>
              <p className=" text-8xl mx-6 my-5 font-thin text-[#f49504] max-[460px]:text-6xl ">
                Kehnde
              </p>
            </div>
            <div className=" my-5 ">
              <span className="text-white text-2xl max-[460px]:text-xl mx-4">
                a
                <span className="text-white text-4xl max-[460px]:text-3xl ">
                  <TypeAnimation
                    sequence={[
                      "Frontend Web Developer",
                      1000,
                      "Gospel Keyboardist",
                      1000,
                      "Lifestyle Coach",
                      1000,
                      "Computer Scientist",
                      1000,
                      "Backend Enthusiast",
                      1000,
                      "Believer",
                      1000,
                      "Lia's Paddy",
                      1000,
                    ]}
                    wrapper="span"
                    speed={10}
                    deletionSpeed={10}
                    repeat={Infinity}
                    style={{ marginLeft: "10px" }}
                  />
                </span>
              </span>
            </div>
            <div className="w-[90%] m-3 overflow-y-hidden h-24 text-sm max-[460px]:text-[12px] text-white ">
              <span className=" ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, consequatur? Dolores amet aspernatur suscipit
                deserunt .libero. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aliquam, doloremque at, delectus quod commodi
                autem, distinctio repellendus esse error voluptatum praesentium
                ullam facere assumenda. Asperiores beatae totam unde explicabo
                sapiente.
              </span>
            </div>
          </Fade>

          <div className="buttons mt-10 flex ">
            <Fade direction="left" triggerOnce={true} delay={1000}>
              <div>
                <a href="#">
                  <span className="max-[460px]:border-1 border-2 border-[#f49504] hover:bg-[#f49504] hover:text-white rounded max-[460px]:px-6 px-10 max-[460px]:py-2 py-3 max-[460px]:text-sm text-[#ffbc26] mx-2 max-[460px]:font-[3px]  ">
                    Hire me
                  </span>
                </a>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce={true} delay={1000}>
              <div>
                <a href="#">
                  <span className="max-[460px]:border-1 hover:border-2 hover:border-[#f49504] max-[460px]:px-6 rounded px-8 max-[460px]:py-2 py-3 text-[#f49504] max-[460px]:font-[3px] ">
                    About me
                  </span>
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <Fade direction="right" triggerOnce={true} duration={2000}>
          <div className="side-img w-46% mx-4 min-w-[300px]   ">
            <img src={pic} className="w-" alt="me" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
