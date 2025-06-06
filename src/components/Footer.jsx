import React,{useState} from "react";
import Inputs from "./Inputs";
import sendEmail from "./SendEmail";
import { BiEnvelope, BiHeart, BiLogoDiscord, BiLogoDiscordAlt, BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter, BiLogoUpwork, BiLogoWhatsapp, BiLogoYoutube, BiSolidEnvelope } from "react-icons/bi";

const Footer = () => {

const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
    setLoading(true);

    try {
      await sendEmail({ fullName, email, message });
      setError("");
      setSuccess("Email Sent Successfully.");

      // Reset form fields
      setFullName("");
      setEmail("");
      setMessage("");
      
    } catch {
      setError("Failed to send email.");
      setSuccess("");
    }
    setLoading(false);
  };


  
  return (
    <div className="min-[850px]:mx-[150px] sm:p-0 p-6  mx-auto  " id="blog">
      <div className="sm:text-7xl min-[700px]:ml-6 text-5xl font-bold text-web-orange-500 pb-4  ">
        Connect With Me
      </div>
      <form onSubmit={handleSubmit} className=" sm:w-[80%] w-full mx-auto " action="">
        <div>
          <Inputs
            label="Full name"
            type={"text"}
            onChange={(e)=>{setFullName(e.target.value);setSuccess("");setError("");}}
            placeholder={"Enter your full name....."}
          />
        </div>
        <div>
          <Inputs
            label="Email"
            type={"email"}
            onChange={(e)=>{setEmail(e.target.value); setSuccess("");setError("");}}
            placeholder={"Enter your email....."}
          />
        </div>
        <div className="sm:max-w-[500px] sm:mx-auto max-w-[300px]">
          <label className=" text-xl ml-4 font-bold " htmlFor="text-area">
            Message*
          </label>
          <textarea
            className=" outline-none border-none p-3 max-h-[300px] w-[100%] mx-auto h-60 bg-opacity-10 bg-blue-stone-500 rounded-xl "
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e)=>{setMessage(e.target.value);setSuccess("");setError("");}}
          ></textarea>
        </div>
        <div className="w-[100%] sm:w-[30%] mx-auto my-10 " >
        <button type="submit" className="primary-btn text-2xl   "  >{loading ? "Sending..." : "Send Email"}</button></div>
        <div className="text-sm my-2 text-[red]" >{error}</div>
          
            <div className="text-sm my-2 text-[green]" >{success}</div>
      
      </form>
      <div className="flex flex-col justify-start sm:flex-row"  >
      <a className="text-lg  mx-2 pt-2 " href="mailto:excellenceay33@gmail.com">
        <div className=" flex flex-col sm:flex-row py-10 " >
          
        <BiSolidEnvelope className="w-10 h-10  mx-1 text-[#878787] hover:text-web-orange-500 dark:hover:text-[#eeeeee] " />
        <p className="text-lg  mx-2 pt-2" >excellenceay33@gmail.com</p>
        </div>
        </a>
        <div className="grid grid-cols-3 gap-4 text-[#878787] relative right-6 sm:left-[40%]  sm:py-6 " >
          <a href="#">
        <BiLogoDiscordAlt className="w-10 h-10 mx-1 hover:text-web-orange-500 dark:hover:text-[#eeeeee] " />
        </a>
          <a href="https://www.linkedin.com/in/excellence-favours-98bbb3228">
        <BiLogoLinkedin className="w-10 h-10 mx-1 hover:text-web-orange-500 dark:hover:text-[#eeeeee] " />
        </a>
          <a href="https://twitter.com/ExcellenceAy">
        <BiLogoTwitter className="w-10 h-10 mx-1 hover:text-web-orange-500 dark:hover:text-[#eeeeee] " />
        </a>
          <a href="https://instagram.com/exxcell_encxxy">
        <BiLogoInstagram className="w-10 h-10 mx-1 hover:text-web-orange-500 dark:hover:text-[#eeeeee] " />
        </a>
          <a href="https://www.facebook.com/profile.php?id=100071525263561">
        <BiLogoFacebook className="w-10 h-10 mx-1 hover:text-web-orange-500 dark:hover:text-[#eeeeee]  " />
        </a>
          <a href="https://www.upwork.com/freelancers/~091ea1fc675945dc5f">
        <BiLogoUpwork className="w-10 h-10 mx-1 hover:text-web-orange-500 dark:hover:text-[#eeeeee] " />
        </a>
          <a href="https://wa.me/+2347015388599">
        <BiLogoWhatsapp className="w-10 h-10 mx-1 hover:text-web-orange-500 dark:hover:text-[#eeeeee] " />
        </a>
          <a href="https://www.youtube.com/@excellenceay">
        <BiLogoYoutube className="w-10 h-10 mx-1 hover:text-web-orange-500 dark:hover:text-[#eeeeee] " />
        </a>
          <a href="https://github.com/excellar-BX">
        <BiLogoGithub className="w-10 h-10 mx-1 hover:text-web-orange-500 dark:hover:text-[#eeeeee] " />
        </a>
        </div>
      </div>
      <div className="text-center py-10 w-[100%] " >Made With ❤ By <a href="https://github.com/excellar-BX" className=" underline " >Excellence</a> </div>
      <div> </div>
    </div>
  );
};

export default Footer;
