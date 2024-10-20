import React from "react";
import pic from "../assets/me2.png";
import Resume from "../assets/FAVOURS_EXCELLENCE_CV.pdf";
import { AttentionSeeker, Bounce, Fade, Flip, Hinge, JackInTheBox, Reveal, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";
import { BiHeart } from "react-icons/bi";
const About = () => {
  return (
         
    <div id="about" className=" flex my-20 flex-row max-lg:flex-col min-[850px]:mx-[150px] mx-4 " >
      <div className="w-[50%] max-lg:w-[100%] " >
        <img src={pic} alt="me" />
      </div>
      <div className=" w-[50%] max-lg:w-[100%] " >
        <Fade direction="up" cascade triggerOnce={true} damping={0.1} duration={2000} >
        <div className="sm:text-7xl text-5xl my-4  relative top-[20%] text-web-orange-500 font-bold " >About me</div>
        <div className="relative text-sm  sm:text-lg top-[20%] text-black font-extrabold my-2 dark:text-[#eeeeee] ">As a highly skilled frontend web and mobile developer, I bring a unique combination of technical expertise and creative vision to the table. With a strong foundation in React JS, Tailwind CSS, HTML, CSS3, JavaScript, React Native, and Next JS, I craft seamless user experiences that drive engagement and growth.
        With a passion for staying at the forefront of industry trends and best practices, I excel in collaborative environments, working closely with designers, product managers, and other stakeholders to bring innovative ideas to life.
        My expertise spans building dynamic web applications, mobile apps, and responsive interfaces that adapt to any device or screen size. I am dedicated to writing clean, efficient, and well-documented code that meets the highest standards of quality and performance.
        Whether it's developing complex web applications, optimizing user interfaces, or troubleshooting issues, I approach each project with a solutions-focused mindset and a commitment to delivering exceptional results. With a keen eye for detail and a passion for innovation, I am always looking for new ways to push the boundaries of what is possible in the world of frontend development. </div>
        <div className="primary-btn font-semibold rounded-full border-2 text-semibold text-white  border-[#f9bd64] dark:border-white my-10 w-[60%] sm:w-[40%] flex items-center justify-center  ">
          <a href={Resume} download>Download CV</a> 
        </div>
        </Fade>
      </div>
    </div>
  )
};

export default About;
