"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ProjectsBtn from "@/app/ui/ProjectsBtn";

export default function Home() {
  return (
    <div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="fixed mt-3 right-0"
      >
        <Image
          src="/Harshamal.svg"
          alt="Harshamal"
          width={450}
          height={500}
          className="drop-shadow-[0_0_1px_white]"
        />
      </motion.div>
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl xl:text-6xl font-bold mb-4 xl:mb-8"
          >
            Harshamal <br />
            <span className="text-blue-300">Gunathilaka</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Innovative undergraduate software developer with a strong foundation
            in Information Technology. Proficient in Next-js, MERN stack, Java,
            HTML, CSS, JS, MS SQL, Python, C, C++, and Figma. Known for creative
            problem-solving. leadership, and effective project management.
            Skilled in teamwork, time management, and critical thinking. Seeking
            opportunities to leverage skills and knowledge in a dynamic,
            challenging software engineering environment.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
