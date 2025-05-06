// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import AIBackground from "../components/AIBackground";
import TopRightNav from "../components/TopRightNav";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <AIBackground />
      <main className="h-screen text-white relative px-6 py-6 flex flex-col items-center justify-center">
        <TopRightNav />

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">{"Let's Connect"}</h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
            {"I'd love to hear from you — whether it's about a collaboration, opportunity, or just to say hi! 😊"}
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            <Link href="https://github.com/TimurMMD" target="_blank" aria-label="GitHub" className="flex flex-col items-center group">
              <Github size={44} className="text-cyan-300 group-hover:text-white transition-transform group-hover:scale-110" />
              <span className="mt-2 text-white/90 text-lg">GitHub</span>
            </Link>

            <Link href="https://linkedin.com/in/timurmamadaliyev/" target="_blank" aria-label="LinkedIn" className="flex flex-col items-center group">
              <Linkedin size={44} className="text-cyan-300 group-hover:text-white transition-transform group-hover:scale-110" />
              <span className="mt-2 text-white/90 text-lg">LinkedIn</span>
            </Link>

            <Link href="mailto:mamadaliyevtv@gmail.com" target="_blank" aria-label="Email" className="flex flex-col items-center group">
              <Mail size={44} className="text-cyan-300 group-hover:text-white transition-transform group-hover:scale-110" />
              <span className="mt-2 text-white/90 text-lg">Email</span>
            </Link>

            <Link href="https://instagram.com/timurmmd" target="_blank" aria-label="Instagram" className="flex flex-col items-center group">
              <Instagram size={44} className="text-cyan-300 group-hover:text-white transition-transform group-hover:scale-110" />
              <span className="mt-2 text-white/90 text-lg">Instagram</span>
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
