import React from "react";
import pic from "../assets/palette.png";
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

const Stories = [
  {
    image: pic,
    title: "React Suspense and React.lazy by Example",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil quod molestias et dicta adipisci quo, ullam placeat consequuntur in harum similique tempora ex facere nemo deserunt, cumque maiores suscipit.",
    Link: "https://excellenceblog/article1",
  },
  {
    image: pic,
    title: "React Suspense and React.lazy by Example",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil quod molestias et dicta adipisci quo, ullam placeat consequuntur in harum similique tempora ex facere nemo deserunt, cumque maiores suscipit.",
    Link: "https://excellenceblog/article1",
  },
  {
    image: pic,
    title: "React Suspense and React.lazy by Example",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil quod molestias et dicta adipisci quo, ullam placeat consequuntur in harum similique tempora ex facere nemo deserunt, cumque maiores suscipit.",
    Link: "https://excellenceblog/article1",
  },
  {
    image: pic,
    title: "React Suspense and React.lazy by Example",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nihil quod molestias et dicta adipisci quo, ullam placeat consequuntur in harum similique tempora ex facere nemo deserunt, cumque maiores suscipit.",
    Link: "https://excellenceblog/article1",
  },
];

const Blog = () => {
  return (
    <div className="min-[768px]:mx-[250px] sm:p-0 p-6  mx-auto my-20 " id="blog">
      <div className="text-5xl font-bold text-[#f49504] my-10 ">My Blog</div>

      <div className="grid sm:grid-cols-2 grid-cols-1 ">
        {Stories.map((data, index) => {
          return (
            <div key={index} className="w-[300px] sm:mx-0 mx-auto ">
              <div>
                <img
                  src={data.image}
                  className="w-[100%] my-2 h-[200px] rounded-xl "
                  alt={data.title}
                />
              </div>
              <div className="font-extrabold text-xl w-full my-2 "  >{data.title}</div>
              <div className="text-xs my-2 " >{data.description}</div>
              <a className="text-sm my-4 text-[#f49504]  " href={data.Link}>
                <div>{"Read more >>"}</div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
