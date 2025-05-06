"use client";

import { motion } from "framer-motion";
import AIBackground from "./components/AIBackground";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
import TopRightNav from "./components/TopRightNav";
import TypingText from "./components/TypingText";


export default function Home() {
  return (
    <>
      <AIBackground />


      <main className="h-screen flex flex-col items-center justify-center text-center text-white px-4">

      <TopRightNav />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypingText text="Hi, I'm Timur Mamadaliyev" className="text-5xl font-bold text-cyan-400 mb-10" />

          <p className="text-lg font-light text-white mb-10">
            And this is my Personal portfolio showcasing my work and projects
          </p>


          <TypingText
              text={[
                "Machine Learning Engineer",
                "AI Engineer",
                "Data Scientist",
                "Data Enthusiast",
              ]}
              className="text-md font-normal text-white mb-5"
              speed={80}
              loop
              delayBetween={2000}
            />



        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex space-x-6 mt-10 text-3xl"
        >
          <a
            href="https://github.com/TimurMMD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/timurmamadaliyev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="/Timur_Mamadaliyev_-_ML_engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition duration-300"
          >
            <HiOutlineDocument />
          </a>
        </motion.div>
      

      

      </main> 
    </>
  );
}
