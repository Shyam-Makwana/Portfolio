import { motion } from "framer-motion";
import React from "react";
import Layout from "../Layout/Layout";
import Resume from "../Resume/Resume";
import Title from "../Title/Title";

const Intro = (props) => {
  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <Layout className="justify-start lg:justify-center mt-24 lg:mt-0 mb-8 md:mb-0">
      <Title title="About" number={1} />
      <motion.h1
        variants={variant}
        initial="initial"
        animate="animate"
        className="text-3xl md:text-6xl font-semibold md:my-4"
      >
        Hello, Myself Shyam Makwana 👋
      </motion.h1>
      <motion.h2
        variants={variant}
        initial="initial"
        animate="animate"
        className="text-2xl md:text-4xl font-bold my-2 md:my-4"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Technology Enthusiast
      </motion.h2>
      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        className="my-2 md:my4 text-xl text-gray-300 text-justify"
      >
        <p className="my-4">
          Howdy Pals, I am Shyam Makwana. I am an Information & Technology student,  exercising the power of 0's and 1's to make a positive impact on the world. I love creating beautiful web interfaces that can interact with the backend and database. I started my programming journey with one of the most loved programming language C. Eventually, I learned other programming languages like C++, Java, Javascript, and Python.
I like to spend most of my time with competitive programming and problem-solving. I am a 4-star coder of Codechef, a popular coding platform, and have solved more than 500 various problems of other platforms as well.
        </p>
        <p>
          Besides this, I like playing with data and gaining powerful insights from them. I have a strong inclination towards Data Science, Machine Learning, and Artificial Intelligence.
        </p>
      </motion.div>
      <div className="flex">
        <button
          onClick={() => props.history.push("/experience")}
          className="mr-2 p-2 border-2 border-white text-white bg-none rounded-md transition-all duration-300 hover:bg-white hover:text-black"
        >
          Know More
        </button>
        <Resume />
      </div>
    </Layout>
  );
};

export default Intro;
