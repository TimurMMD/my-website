// app/projects/page.tsx
"use client";

import { motion } from "framer-motion";
import TopRightNav from "../components/TopRightNav";
import AIBackground from "../components/AIBackground";
import Link from "next/link";

const projects = [
  {
    title: "Investment Dashboard",
    description: "An interactive dashboard for predicting stock returns using machine learning and visualization tools.",
    tech: ["Python", "TabNet", "Plotly Dash"],
    link: "https://github.com/TimurMMD/Dissertation_Thesis"
  },
  {
    title: "Machine Learning Projects",
    description: "Implementations of different ML models for classification and regression problems.",
    tech: ["XGBoost", "RandomForest", "KNN", "SVM", "LogisiticRegresion"],
    link: "https://github.com/TimurMMD/ML_projects"
  },
  {
    title: "Image Classification with Neural Networks",
    description: "The project investigates the performance of convolutional neural networks (CNNs) with ResNet18, a custom neural network for regression, and Random Forest for comparison.",
    tech: ["Tensorflow", "RandomForest", "Pytorch"],
    link: "https://github.com/TimurMMD/AI_LSBF-UEL_project"
  },
  {
    title: "Big Data Analytics Project",
    description: "The project explores predictive capabilities of machine learning algorithms in forecasting term deposit subscriptions within the banking sector.",
    tech: ["PySpark", "Scikit-learn", "Matplotlib", "XGBoost"],
    link: "https://github.com/TimurMMD/AI_LSBF-UEL_project"
  }
  // Add more projects here...
];

export default function ProjectsPage() {
  return (
    <>
      <AIBackground />
      <main className="relative px-6 py-6 min-h-screen text-white">

        <TopRightNav />

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-cyan-400 text-center mb-8"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-white/80 max-w-3xl mx-auto mb-10"
        >
          Here are some of the personal and academic projects I've worked on, focused on machine learning, data science, and real-world applications.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-cyan-400/20 rounded-xl p-6 shadow-md hover:shadow-cyan-400/30 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{proj.title}</h3>
              <p className="text-white/80 mb-3">{proj.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-cyan-200 mb-4">
                {proj.tech.map((t) => (
                  <span key={t} className="bg-cyan-400/10 border border-cyan-300/20 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <Link href={proj.link} target="_blank" className="text-cyan-400 hover:underline text-sm">
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
