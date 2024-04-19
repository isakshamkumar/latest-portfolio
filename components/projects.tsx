"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { ArticlesData, projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedTab, setSelectedTab] = useState("projects");

  const handleToggle = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="flex justify-center mb-10">
        <button
          className={`${
            selectedTab === "projects"
              ? "bg-gray-900 text-white"
              : "bg-gray-200 text-gray-900"
          } hover:bg-gray-800 hover:text-white px-6 py-2 rounded-tl-lg rounded-bl-lg focus:outline-none transition`}
          onClick={() => handleToggle("projects")}
        >
          My Projects
        </button>
        <button
          className={`${
            selectedTab === "articles"
              ? "bg-gray-900 text-white"
              : "bg-gray-200 text-gray-900"
          } hover:bg-gray-800 hover:text-white px-6 py-2 rounded-tr-lg rounded-br-lg focus:outline-none transition`}
          onClick={() => handleToggle("articles")}
        >
          My Articles
        </button>
      </div>
      <div className="flex flex-col justify-center">
        {selectedTab === "projects" &&
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Link className="my-4" target="_blank" href={project.link}>
              <Project {...project} />
              </Link>
            </React.Fragment>
          ))}
        {selectedTab === "articles" && (
        ArticlesData.map((project, index) => (
          
          <React.Fragment key={index}>
            <Link className="my-4" target="_blank" href={project.link}>
            <Project {...project} />
          </Link>
          </React.Fragment>
        ))
        )}
      </div>
    </section>
  );
}
