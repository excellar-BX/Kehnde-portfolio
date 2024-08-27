import React from "react";
import pic1 from "../assets/blog1.png";
import pic2 from "../assets/blog2.png";
import pic3 from "../assets/blog3.png";
import pic4 from "../assets/blog4.png";
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
    image: pic1,
    title: "10 Essential React Hooks You Need to Know",
    description:
      "React Hooks are functions that let you hook into React state and lifecycle features from function components. They're essential for managing state, side effects, and context in a functional component-based architecture. Understanding the top 10 Hooks is crucial for building robust and maintainable React applications.",
    Link: "https://excellenceblog/article1",
  },
  {
    image: pic2,
    title: "Optimizing React App Performance: Best Practices and Tools",
    description:
      "React app performance can be slow due to unnecessary re-renders, large bundle sizes, and inefficient data fetching. Optimizing performance involves using best practices like code splitting, lazy loading, and memoization, as well as tools like Webpack, React DevTools, and Chrome DevTools.",
    Link: "https://excellenceblog/article2",
  },
  {
    image: pic3,
    title: "Building Reusable UI Components with React",
    description:
      "Reusable UI components are the building blocks of maintainable React applications. They help reduce code duplication, improve consistency, and make development faster. To build reusable components, focus on props, children, and separation of concerns.",
    Link: "https://excellenceblog/article3",
  },
  {
    image: pic4,
    title: "React State Management: Redux vs. Context API",
    description:
      "State management is critical in React applications. Redux and Context API are two popular approaches, each with pros and cons. Redux offers predictability and debugging ease, while Context API provides simplicity and ease of use. Choose the best approach based on your app's complexity and team experience.",
    Link: "https://excellenceblog/article4",
  },
];

const Blog = () => {
  return (
    <div className="min-[850px]:mx-[150px] sm:p-0 p-6 md:mx-6 mx-auto my-20 " id="blog">
      <div className="text-5xl font-bold text-[#f49504] my-10 ">My Blog</div>

      <div className="grid sm:grid-cols-2 grid-cols-1 ">
        {Stories.map((data, index) => {
          return (
            <div key={index} className="mx-auto mx-auto max-w-xl sm:w-[300px] sm:mx-0 mx-auto ">
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
