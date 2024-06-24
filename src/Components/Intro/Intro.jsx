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
		<Layout className='justify-start lg:justify-center mt-24 lg:mt-0 mb-8 md:mb-0'>
			<Title title='About me' number={1} />
			<motion.h1
				variants={variant}
				initial='initial'
				animate='animate'
				className='text-xl md:text-xl'
				style={{
					color: "var(--text-info)",
				}}
			>
				<p>Hello, my name is</p>
			</motion.h1>
			<motion.h1
				variants={variant}
				initial='initial'
				animate='animate'
				className='text-3xl md:text-6xl md:my-4 '
				style={{
					color: "var(--text-info)",
				}}
			>
				<b>Shyam Makwana </b>
				<span className={classes.wave}>
					<div
						style={{
							color: "transparent",
							textShadow: "0 0 0 var(--text-info)",
						}}
					>
						👋
					</div>
				</span>
			</motion.h1>
			{/* <motion.h2
        variants={variant}
        initial="initial"
        animate="animate"
        className="text-2xl md:text-xl font-bold my-2 md:my-4"
        style={{
          color: "var(--text-secondary)",
        }}
      > */}
			{/* Competitive Programmer */}
			{/* <BlinkingCursorTextBuilder
        timeout={50}
        >  </BlinkingCursorTextBuilder> */}
			{/* “ Exercising the power of 0's and 1's to make a positive impact on the world! ” */}
			{/* </motion.h2> */}
			<motion.div
				variants={variant}
				initial='initial'
				animate='animate'
				className='my-2 md:my4 text-xl text-gray-300 text-justify'
				style={{
					color: "var(--text-3)",
				}}
			>
				<p className='my-4'>
					Shyam Makwana is a passionate and innovative Full-stack Software
					Engineer who has completed his Master of Science in Computer Science
					at Indiana University Bloomington. He is currently working as a
					Software Engineer at Bolster AI. He has a strong educational
					foundation in computer engineering and a diverse skill set in various
					languages, tools, and technologies.
				</p>
				<p className='my-4'>
					Shyam's projects, such as the Role-based CyberSecurity Banking System,
					ML-based Loan Default Prediction, Network Protocol, and Hotel Booking
					System, demonstrate his innovation and problem-solving skills. He is
					motivated to learn new technologies and create impactful solutions.
				</p>
				{/* <p>
        I like playing with data and gaining powerful insights from them. I have a strong inclination toward Competitive Programming, Software Engineering, Data Science, Machine Learning, and Artificial Intelligence. I like to spend most of my time with competitive programming and problem-solving. Moreover, I love creating beautiful web interfaces that can interact with the backend and database.
        </p> */}
			</motion.div>
			<div className='flex'>
				<button
					onClick={() => props.history.push("/experience")}
					className='mr-3 p-2 border-2 bg-none rounded-md transition-all duration-300'
					style={{
						borderColor: "var(--text-info)",
						color: "var(--text-info)",
					}}
				>
					Know More
				</button>
				<Resume />
			</div>
		</Layout>
	);
};

export default Intro;
