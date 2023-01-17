import { motion } from "framer-motion";
import React from "react";
import Layout from "../Layout/Layout";
import Resume from "../Resume/Resume";
import Title from "../Title/Title";
import classes from "./Intro.module.css";

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
      <Title title="About me" number={1} />
      <motion.h1
        variants={variant}
        initial="initial"
        animate="animate"
        className="text-3xl md:text-6xl md:my-4 "
        style={{
          color: "var(--text-primary)",
        }}
      >
      <b>Hello, myself Shyam Makwana </b><span className={classes.wave}>👋</span>
      </motion.h1>
      <motion.h2
        variants={variant}
        initial="initial"
        animate="animate"
        className="text-2xl md:text-xl font-bold my-2 md:my-4"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {/* Competitive Programmer */}
        {/* <BlinkingCursorTextBuilder
        timeout={50}
        >  </BlinkingCursorTextBuilder> */}
        “ Exercising the power of 0's and 1's to make a positive impact on the world ”
      </motion.h2>
      <motion.div
        variants={variant}
        initial="initial"
        animate="animate"
        className="my-2 md:my4 text-xl text-gray-300 text-justify"
        style={{
          color: "var(--text-info)",
        }}
      >
        <p className="my-4">
        A dedicated and extremely enthusiastic individual who works with tenacity and is very enthusiastic about mastering new Technologies. Actively looking for new opportunities to learn more and gain experience in my domain. I am a quick learner and passionate about learning something new every day.
        </p>
        <p className="my-4">
        I am currently pursuing my Master of Science in Computer Science from Indiana University Bloomington and am currently looking for an SDE Summer'23 internship.
        </p>
        <p>
        I like playing with data and gaining powerful insights from them. I have a strong inclination toward Competitive Programming, Software Engineering, Data Science, Machine Learning, and Artificial Intelligence. I like to spend most of my time with competitive programming and problem-solving. Moreover, I love creating beautiful web interfaces that can interact with the backend and database.
        </p>
      </motion.div>
      <div className="flex">
        <button
          onClick={() => props.history.push("/experience")}
          className="mr-3 p-2 border-2 border-black text-black font-bold bg-none rounded-md transition-all duration-300 
          hover:bg-white hover:text-black"
        >
          Know More
        </button>
        <Resume />
      </div>
    </Layout>
  );
};

export default Intro;
