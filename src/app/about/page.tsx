"use client";

import AIBackground from "../components/AIBackground";
import Link from "next/link";
import { motion } from "framer-motion";
import TopRightNav from "../components/TopRightNav";

export default function AboutPage() {
  return (
    <>
      <AIBackground />
      <main className="min-h-screen text-white relative px-6 py-6">
        <TopRightNav />

        <div className="max-w-7xl mx-auto flex flex-col gap-16 py-12 px-4 sm:px-6 lg:px-8">

          {/* About Me Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-4 text-center md:text-left"
            >
              <h2 className="text-4xl font-bold text-center text-cyan-400">About Me</h2>
              <p className="text-lg leading-relaxed text-justify">
              As a Master of Science in Computer Science graduate, I specialize in Machine Learning, 
Artificial Intelligence, and Data Science, with expertise in Python, pandas, and deep 
learning frameworks like TensorFlow and PyTorch. I have led multiple projects in 
predictive modeling, data analysis, and visualization using tools such as Tableau and 
Power BI. Known for my adaptability, leadership, and critical thinking, I excel in 
bridging technical insights with business solutions. Passionate about solving complex 
problems, I’m eager to contribute to innovative projects in data science and AI.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div 

              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center md:justify-end md:mr-20"
            >
              <img
                src="/me_bookstore.jpg"
                alt="Timur Mamadaliyev"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2"></h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "Machine Learning", "Deep Learning", "Pandas", "TensorFlow", "Sklearn", "PyTorch", "MatplotLib", "Plotly/Dash","React", "SQL", "Next.js"].map(skill => (
                <span key={skill} className="bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-400/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>

           {/* Timeline & Hobbies - 2 Column Grid */}
            <div className="grid md:grid-cols-2 gap-12 mt-10">
              {/* Timeline */}
              <div>
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">My Journey</h3>
                <div className="border-l-2 border-cyan-400/30 pl-6 space-y-6">
                  <div>
                    <p className="text-cyan-400 font-medium">2024 - 2025</p>
                    <p>Master's in Computer Science – Singapore</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-medium">2021 - 2023</p>
                    <p>Worked in Nanoelectronics' design center</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-medium">2018 - 2022</p>
                    <p>Bachelor’s Degree in Electronics and Nanoelectronics – Novosibirsk </p>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div className="md:ml-60">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Hobbies & Interests</h3>
                <ul className="list-disc list-inside text-white/80 space-y-5">
                  <li>Exploring AI tools & models 🤖📈</li>
                  <li>Reading different literature 📚</li>
                  <li>Watching and playing sports 🏀 ⚽ 🏒</li>
                  <li>Gardening 🪴</li>
                  <li>Trying different cuisines 🌶️</li>
                  <li>Playing video games 💻</li>
                </ul>
              </div>
            </div>





          {/* Quote */}
          <div className="italic text-center text-white/80 text-lg">
            "All models are wrong, but some are useful." – George E.P. Box
          </div>

          


        </div>
      </main>
    </>
  );
}
