"use client"
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const refAbout = useRef(null);
const refAchievements = useRef(null);

  
  const [borderAbout, setBorderAbout] = useState(false);
  const [borderAchievements, setBorderAchievements] = useState(false);

  const{ref}=useSectionInView("About")
  useEffect(() => {
    const checkScroll = () => {
      if (!refAbout.current || !refAchievements.current) return;
//@ts-ignore
      const rectAbout = refAbout.current.getBoundingClientRect();
      //@ts-ignore
      const rectAchievements = refAchievements.current.getBoundingClientRect();

      if (rectAbout.top <= (window.innerHeight / 2 - 100)) {
        setBorderAbout(true);
        setBorderAchievements(false);
      }  else {
        setBorderAbout(false);
        setBorderAchievements(false);
      }
       if (rectAchievements.top <= (window.innerHeight / 2 - 150)) {
        setBorderAbout(false);
        setBorderAchievements(true);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  return (
    <motion.section
    ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      <div ref={refAbout  } style={{transition:'all 0.2s ease-in-out'}} className={` md:w-full m-auto w-5/6 lg:w-full ${borderAbout ? "scale-110 mb-16 " : ""}`}>
        <SectionHeading>About Me</SectionHeading>
        <p  className="mb-3">
          I am a dedicated professional with a strong passion for technology and a penchant for problem-solving. With a background in Computer Science & AI, pursuing a B. Tech degree, I have consistently demonstrated excellence in academic achievements, maintaining a current CGPA of 8.415. I have honed my skills through practical experience, contributing to projects that require creative solutions to complex problems.
        </p>
        <p className="mb-6">
          My expertise spans across various domains including programming languages such as R, C++, C, Java, and Python. Additionally, I am skilled in graphic design, proficient in content creation, and possess strong technical writing abilities. My communication skills, both written and verbal, are exemplary, enabling effective collaboration and presentation of ideas.
        </p>
      </div>

      <div ref={refAchievements} style={{transition:'all 0.2s ease-in-out'}} className={`md:w-full m-auto w-5/6 lg:w-full ${borderAchievements ? "scale-110 mt-12" : ""}`}>
        <SectionHeading>Achievements</SectionHeading>
        <p className="mb-3 -mt-3">
          My commitment to excellence is evident in my track record of achievements. I have been recognized as the 3rd Prize Winner at HackwithMAIT 4.0, where I developed an Interactive Game aimed at creating legal awareness among children. Furthermore, my participation in FINXTHON(Hackathon) and Geeks for Geeks Hackathon 2024 yielded innovative web portal solutions, integrating Blockchain and Smart contracts for various social causes.
        </p>
        <p className="mb-3">
          In addition to my technical accomplishments, I have secured 1st positions in prestigious inter-college competitions, demonstrating my leadership and problem-solving abilities. My participation in events like SIH 2023 further showcases my capability to excel in competitive environments, being part of the top 30 teams.
        </p>
        <p className="mb-3">
          In conclusion, I am driven by a relentless pursuit of innovation and excellence. I believe in the power of creativity to overcome challenges and bring about meaningful change. With a forward-thinking mindset, I am eager to leverage my skills and expertise to tackle the dynamic challenges of the tech industry.
        </p>
      </div>
    </motion.section>
  );
}
