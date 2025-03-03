"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import nauLogo from "@/public/NAU.png";
import sastraLogo from "@/public/sastra.png";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={nauLogo} alt="QUT" width="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Master's in Computer Science
          </p>
          <p>Northern Arizona University</p>
          <p className="mt-1">Graduating in 2025 May</p>
          <p className="my-1">GPA 4.0/4.0</p>
          <ul className="list-disc pl-6">
            <li>Major in Computer Science</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={sastraLogo} alt="QUT" width="150" />
        </div>

        <div>
          <p className="text-lg font-medium">
            Bachloer's in Computer Science
          </p>
          <p>Sastra Deemed University</p>
          <p className="mt-1">Graduated in 2020 June</p>
          <p className="my-1">GPA 7.0/10.0</p>
          <ul className="list-disc pl-6">
            <li>Major in Computer Science</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
