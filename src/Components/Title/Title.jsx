import { motion } from "framer-motion";
import React from "react";
import classes from "./Title.module.css";

const Title = ({ title, number }) => {
  if(number === 1){
    return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className={[
          "flex items-center relative mb-8 mt-5 overflow-hidden",
          classes.Title,
        ].join(" ")}
        id="about"
      >
        {/* <span
          className="mr-6 w-1/6 bg-gray-600 hidden md:block md:mt-20"
          style={{
            height: "1px",
          }}
        /> */}
        <p className="text-xl mr-2 md:mt-20"
          style={{
            color: "var(--text-info)",
          }}
        >0{number}.</p>
        <h1 className="text-2xl md:mt-20" style={{
            color: "var(--text-primary)",
          }}>{title}</h1>
        <span
          className="ml-4 w-1/3 bg-gray-600 hidden md:block md:mt-20"
          style={{
            height: "1px",
            backgroundColor: "#64ffda",
          }}
        />
      </motion.div>
    );
  }
  else{
    return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className={[
          "flex items-center relative mb-8 mt-5 overflow-hidden",
          classes.Title,
        ].join(" ")}
        id="about"
      >
        {/* <span
          className="mr-6 w-1/6 bg-gray-600 hidden md:block"
          style={{
            height: "1px",
          }}
        /> */}
        <p className="text-xl mr-2"
          style={{
            color: "var(--text-info)",
          }}
        >0{number}.</p>
        <h1 className="text-2xl" style={{
            color: "var(--text-primary)",
          }}>{title}</h1>
        <span
          className="ml-4 w-1/3 bg-gray-600 hidden md:block mt-1"
          style={{
            height: "1px",
            backgroundColor: "#64ffda",
          }}
        />
      </motion.div>
    );
  }
};

export default Title;
