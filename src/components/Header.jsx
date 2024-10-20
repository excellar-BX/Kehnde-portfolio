import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import {
  BiBookReader,
  BiConversation,
  BiFile,
  BiFolder,
  BiUpArrow,
  BiArrowFromBottom,
  BiHeart,
  BiUser,
  BiSolidPen,
  BiSun,
  BiMoon,
  BiDesktop,
} from "react-icons/bi";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const themeInfo = [
  {
    icon: <BiSun />,
    text: "light",
  },
  {
    icon: <BiMoon />,
    text: "dark",
  },
  {
    icon: <BiDesktop />,
    text: "system",
  
  },
];

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;

  const onWindowMatch = ()=> {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches) ) {
      element.classList.add("dark")
    }else{
      element.classList.remove("dark")
    }
  }
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', "dark" )
        break;
        case "light":
          element.classList.remove('dark')
          localStorage.setItem("theme", "light")
          break;
    
      default:
        localStorage.removeItem("theme")
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e)=> {
    if (!("theme" in localStorage)) {
      if(e.matches){
        element.classList.add("dark")
      }else{
        element.classList.remove("dark")
      }
    }
  })

  //   var toTopBtn = document.querySelector("#toTopBtn");
  // console.log(toTopBtn);
  // console.log("ellllllo")

  //   const scrollFunction = () => {
  //     if (document.body.scrollTop > 300 ||
  //       document.documentElement.scrollTop > 300
  //     ) {
  //       toTopBtn.style.display = "block";
  //     } else {
  //       toTopBtn.style.display = "none";
  //     }
  //   };

  //   window.onscroll = scrollFunction()

  //   const scrollTop = () => {
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  //   };

  return (
    <div className=" bg-blue-stone-800  ">
      <div className="flex flex-row pl-2 pt-2 ">
        <img src={logo} className=" w-[60px] m-4 " alt="logo" />
      </div>
      <div className="theme-btn z-50 flex rounded-xl   text-white fixed top-2 p-2 right-2 mr-4 bg-blue-stone-950 shadow-xl w-fit ">
        {themeInfo.map((data) => (
          <div key={data.text} >
            <div
            onClick={ ()=> setTheme(data.text)}
              className={` w-10 bg-blue-stone-900 ${
                theme === data.text && "text-blue-stone-400"
              }  rounded-xl p-3 mx-1  h-10`}
            >
              {data.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
