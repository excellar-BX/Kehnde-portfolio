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
import CountUp from "react-countup";
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
   <div> <div className=" bg-blue-stone-800 pb-20 ">
   <Header />
   <div className="blueShape hidden sm:block bg-white absolute w-[320px]  h-[320px] left-1 blur-[400px]    rounded-full "></div>
   <div className="blueShape hidden sm:block bg-white absolute w-[250px]  h-[250px] right-1 bottom-[20%] blur-[180px]   rounded-full "></div>

   <div className=" w-[60px] right-0 fixed z-10 top-20  max-[800px]:top-16 ">
     <ul className="flex flex-col opacity-60 hover:opacity-100  ">
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
             <div className="text-[#707070] m-4 nav-icons text-2xl hover:text-web-orange-500 hover:-translate-x-2  transition-all duration-2s delay-1s ease-out   ">
               {nav.icon}
             </div>
           </Link>
         ))}
       </Fade>
     </ul>
   </div>

   <div className=" flex flex-row max-[1024px]:flex-col ">
     <div className=" w-[70%] min-w-[300px] m-20 max-[500px]:mx-3">
       <Fade cascade damping={0.2} direction="left" triggerOnce={true}>
         <div>
           <p className="text-white text-xl max-[460px]:text-sm mx-2 my-5 ">
             Hello I'm
           </p>
         </div>
         <div>
           <p className=" text-8xl mx-6 my-5 font-thin text-web-orange-500 max-[460px]:text-6xl ">
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
                   "Coach",
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
         <div className="w-[90%] m-3 overflow-y-hidden  text-sm max-[460px]:text-[12px] text-white ">
           <span className=" ">As a seasoned frontend web and mobile developer, I specialize in React JS, Tailwind CSS, and React Native, delivering high-quality, responsive, and scalable solutions. Passionate about cutting-edge technologies, I create exceptional user experiences and excel in collaborative environments, staying current with industry trends to craft impactful digital experiences.
           </span>
         </div>
       </Fade>

           <div className=" w-[60%] sm:w-[30%] mt-10 " >
         <Fade direction="left" triggerOnce={true} delay={1000}>
             <a href="https://www.linkedin.com/in/excellence-favours-98bbb3228">
               <div  className="primary-btn shadow-xl " >
                 Hire me
               </div>
             </a>
         </Fade>
           </div>
     </div>
       <div className="side-img w-full sm:w-[60%] mx-4  ">
     <Fade direction="right" triggerOnce={true} duration={2000}>
         <img src={pic} className="w-full relative right-10 scale-90 sm:scale-125 " alt="me" />
     </Fade>
       </div>
   </div>
 </div>
 <Fade direction="right" triggerOnce={true} duration={2000}>
 <div className="overlay sha shadow-xl w-[90%] justify-evenly sm:flex-row py-10 sm:p-0 flex flex-col items-center sm:h-40 relative text-white mx-auto -top-16 bg-blue-stone-950 ">
  <div className="flex flex-col-reverse justify-center  items-center sm:my-0 my-10 ">
    <span  className=" text-3xl  "  >Projects </span>
    <div className="text-6xl text-web-orange-500" >
    <CountUp duration={10} start={1}  end={14}  />{'+'}
    </div>
  </div>
  <div className="flex flex-col-reverse justify-center items-center sm:my-0 my-10 ">
    <span  className=" text-3xl  " >Skills </span>
    <div className="text-6xl text-web-orange-500" >
  <CountUp duration={10} start={1}  end={22}  />{'+'}
    </div>
  </div>
  <div className="flex flex-col-reverse justify-center items-center sm:my-0 my-10 ">
    <span  className=" text-3xl  " >Experience </span>
    <div className="text-6xl text-web-orange-500" >
  <CountUp duration={10} start={1}  end={4}  />{'+'}
    </div>
  </div>
  <div className="flex flex-col-reverse justify-center items-center sm:my-0 my-10 ">
    <span  className=" text-3xl  " > Hours </span>
    <div className="text-6xl text-web-orange-500" >
  <CountUp duration={10} start={1}  end={15000}  />{'+'}
    </div>
  </div>
 </div>
 </Fade>
 </div>
  );
};

export default Hero;
