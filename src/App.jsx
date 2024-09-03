import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BiArrowFromBottom, BiCommentDetail } from "react-icons/bi";
import pic from "../src/assets/boy.png";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader,
} from "react-spinners";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("loading Complete");
    }, 5000);
  }, [App]);

  return loading ? (
    <div className="bg-[#100315] h-screen bg-fixed  pt-[20%]  " >
      <h1><PuffLoader color="#ffffff" className=" flex mx-auto  "  /></h1>
    </div>

  ) : (
    <div className="App font-Montserrat dark:selection:text-[#39064e]   dark:selection:bg-white selection:text-white selection:bg-[#39064e]  dark:bg-[#241b28] dark:text-[#c3c1c1] ">
      <div
        id="toTopBtn" 
        className={`w-12 h-12 hidden bg-[#39064e] rounded-full fixed bottom-10 right-10 `}
      >
        <BiArrowFromBottom className="text-white relative top-2 text-3xl mx-auto" />
      </div>
      <Hero />
      <Counter />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Blog />
      {/* <ProductList /> */}
      <Footer />

      <Router>
        <Routes>
          <Route path="*" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
