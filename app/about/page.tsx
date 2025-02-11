"use client";

import Skills from "@/app/ui/skills";
import Education from "@/app/ui/education";
import SoftSkills from "@/app/ui/softSkills";
import ExtraCurricular from "@/app/ui/extraCurricular";
import Languages from "@/app/ui/languages";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 xl:p-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="flex flex-col items-center xl:items-start rounded-lg"
        >
          <div className="text-2xl font-bold text-blue-300">Hard Skills</div>
          <Skills />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="flex flex-col items-center xl:items-start rounded-lg"
        >
          <div className="text-2xl font-bold text-blue-300 mb-3">Education</div>
          <Education />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="flex flex-col items-center xl:items-start rounded-lg"
        >
          <div className="text-2xl font-bold text-blue-300 mb-5">
            Soft Skills
          </div>
          <SoftSkills />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="flex flex-col items-center xl:items-start rounded-lg"
        >
          <div className="text-2xl font-bold text-blue-300 mb-4">
            Extra Curricular Activities
          </div>
          <ExtraCurricular />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className="flex flex-col items-center xl:items-start rounded-lg"
        >
          <div className="text-2xl font-bold text-blue-300 mb-5">Languages</div>
          <Languages />
        </motion.div>
      </div>
    </div>
  );
}
