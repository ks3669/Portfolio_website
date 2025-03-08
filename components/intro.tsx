"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { BsCloudDownload } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa"; // Or use FaMedium if you want the filled version
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import githubdp from "@/public/Karthik.png";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={githubdp}
              alt="Karthik portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Karthik Srivathsan Sekar.</span> I'm a{" "}
        <span className="font-bold">Master's Student, Student System Admin, Research Assitant and Graduate Teaching Assistant at </span> at{" "}
        <span className="font-bold">NAU</span> in Flagstaff, Arizona.
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
<a
  className="group bg-white dark:bg-gray-700 p-3 rounded-full outline-none focus:scale-110 hover:scale-105 
             active:scale-105 transition cursor-pointer borderBlack flex items-center justify-center"
  href="https://github.com/ks3669"
  target="_blank"
  rel="noopener noreferrer"
  title="GitHub"
>
  <FaGithub className="opacity-70 dark:text-white h-6 w-6" />
</a>

<a
  className="group bg-white dark:bg-gray-700 p-3 rounded-full outline-none focus:scale-110 hover:scale-105 
             active:scale-105 transition cursor-pointer borderBlack flex items-center justify-center"
  href="https://www.linkedin.com/in/karthik-srivathsan-89a731181/"
  target="_blank"
  rel="noopener noreferrer"
  title="LinkedIn"
>
  <BsLinkedin className="opacity-70 dark:text-white h-6 w-6" />
</a>

<a
  className="group bg-white dark:bg-gray-700 p-3 rounded-full outline-none focus:scale-110 hover:scale-105 
             active:scale-105 transition cursor-pointer borderBlack flex items-center justify-center"
  href="https://medium.com/@karthiksri2023"
  target="_blank"
  rel="noopener noreferrer"
  title="Medium"
>
  <FaMediumM className="opacity-70 dark:text-white h-6 w-6" />
</a>

<a
  className="group bg-white dark:bg-gray-700 px-3 py-3 w-25 flex items-center gap-2 rounded-full outline-none 
             focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
  href="/Karthik_Sekar_Resume.pdf"
  download="Karthik_Sekar_Resume.pdf"
  title="Download My Resume!"
>
  <span className="opacity-70 dark:text-white">Resume</span>
  <BsCloudDownload className="opacity-70 dark:text-white" /> 
</a>


      </motion.div>
    </section>
  );
}
