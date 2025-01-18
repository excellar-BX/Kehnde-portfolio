import React from "react";
import pic from "../assets/me2.png";
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
        <div className="relative text-sm  sm:text-lg top-[20%] text-black font-extrabold my-2 dark:text-[#eeeeee] ">As a frontend web and mobile developer, I combine technical expertise with creative vision to deliver seamless user experiences. Proficient in React JS, Tailwind CSS, HTML, CSS3, JavaScript, React Native, and Next JS, I specialize in building responsive web applications and mobile apps that adapt effortlessly to any screen size.

Passionate about innovation and industry trends, I collaborate with designers and product teams to bring ideas to life, crafting clean, efficient, and high-quality code. Whether optimizing user interfaces or solving complex challenges, I approach every project with a solutions-driven mindset and a dedication to excellence.  </div>
        <div className="primary-btn font-semibold rounded-full border-2 text-semibold text-white  border-[#f9bd64] dark:border-white my-10 w-[60%] sm:w-[40%] flex items-center justify-center  ">
          <a href="https://drive.google.com/file/d/1kv6NUBYLutACe_lcdAcRc6dHpadjX4Wf/view?usp=drivesdk" download>Download CV</a> 
        </div>
        </Fade>
      </div>
    </div>
  )
};

export default About;
