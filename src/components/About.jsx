import React from "react";
import pic from "../assets/me2.png";
import Resume from "../assets/resume.pdf";
import { AttentionSeeker, Bounce, Fade, Flip, Hinge, JackInTheBox, Reveal, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";
import { BiHeart } from "react-icons/bi";
const About = () => {
  const Range = [
    { name: "Frontend Development", percentage: 90 },
    { name: "Ui/UX Design", percentage: 50 },
    { name: "Backend Development", percentage: 40 },
    { name: "Technical Writing", percentage: 70 },
  ];
  return (
         
    <div id="about" className=" flex my-20 flex-row max-lg:flex-col min-[768px]:mx-[250px] mx-4 " >
      <div className="w-[50%] max-lg:w-[100%] " >
        <img src={pic} alt="me" />
      </div>
      <div className=" w-[50%] max-lg:w-[100%] " >
        <Fade direction="up" cascade triggerOnce={true} damping={0.1} duration={3000} >
        <div className="text-7xl relative top-[20%] text-[#f49504] font-bold " >About me</div>
        <div className="relative top-[20%] text-black font-extrabold my-2 dark:text-[#eeeeee] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus nostrum, tempore est minus ad suscipit nobis labore magnam explicabo cumque sunt necessitatibus eaque omnis provident deserunt amet repellat. Perferendis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eaque placeat vitae nisi? Eveniet mollitia dignissimos eum modi obcaecati voluptatibus voluptatem qui, porro nihil? Nihil saepe architecto cum autem earum. </div>
        <div className="cv-button dark:text-[#1e1e1e] relative top-[20%] font-semibold rounded-full border-2 text-extrabold  border-[#f9bd64] dark:border-white my-10 ">
          <a href={Resume} download>Download CV</a>
        </div>
        </Fade>
      </div>
    </div>
  )
};

export default About;
