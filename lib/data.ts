import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import article1 from "@/public/article1.png";
import article2 from "@/public/article2.png";
import article3 from "@/public/article3.png";
import rmtdevImg from "@/public/rmtdev.png";
import proj1 from "@/public/proj1.png";
import proj2 from "@/public/proj2.jpeg";
// import proj3 from "@/public/proj3.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Writer - Inkxpert",
    location: "Remote",
    description: {
      title:
        "I was a technical writer at Inkxpert, a leading digital marketing agency.",
      content:[
        "My responsibilities included writing and editing technical content for clients, ensuring accuracy and clarity, and maintaining a consistent voice and style across all content",]
    },

    icon: React.createElement(CgWorkAlt),
    date: "Sept 2022",
  },
  {
    title: "Contributor and Technical Writer - GeeksforGeeks",
    location: "Remote",
    description: {
      title: "Published Articles:",
      content: [
        "https://www.geeksforgeeks.org/solving-the-multicollinearity-problem-with-decision-tree/",
        "https://www.geeksforgeeks.org/important-npm-commands/.",
        "https://www.geeksforgeeks.org/what-are-docker-runc-vulnerabilities/",
      ],
    },
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
  {
    title: "Technical Writer -ApplyHigh",
    location: "Remote",
    description: {
      title: "I was a technical writer at ApplyHigh, a AI/ML Based Startup.",
      content:[
        "My responsibilities included writing and editing technical content for Website, ensuring clarity,User Retention and SEO, and maintaining a consistent voice and style across all content.",]
    },
    icon: React.createElement(FaReact),
    date: "April 2024 - present",
  },
];

export const projectsData = [
  {
    title: "Safe Escape",
    description:
      "A Platform to empower and help Refugees. Facilitates Transactions from Government Authorities to Refugess Via BlockChain Using MetaMask.",
    tags: ["React", "Solidity", "Express Js", "MongoDb"],
    imageUrl: proj1,
    link: "https://github.com/VanshikaKumar1910/Safe_Escape",
  },
  {
    title: "Career Website",
    description:
      "Job board for recruiters to post job listings and candidates to apply for jobs. It's build with Python And Django. It's also a full stack project with a responsive front-end. It includes features like Pagination.",
    tags: ["Python", "Django", "SQLAlchemy", "Bootsrap", "Html", "CSS"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/VanshikaKumar1910/career_website",
  },
  {
    title: "URL Shortner",
    description:
      "This Flask project implements a URL shortener service. It allows users to input long URLs and generate shorter, more manageable URLs. Additionally, it provides functionality to track the number of visits to each shortened URL..",
    tags: ["Python", "Flask", "HTML/CSS", "Jinja2"],
    imageUrl: proj2,
    link: "https://github.com/VanshikaKumar1910/url_shortener",
  },
] as const;
export const ArticlesData = [
  {
    title: "Solving the Multicollinearity Problem with Decision Tree",
    description:
      "Multicollinearity is a common issue in data science, affecting various types of models, including decision trees. This article explores about multicollinearity.",
    imageUrl: article1,
    link: "https://www.geeksforgeeks.org/solving-the-multicollinearity-problem-with-decision-tree",
  },
  {
    title: "Important npm Commands",
    description:
      "Node Package Manager (npm) stands at the core of JavaScript development, serving as a robust package manager for handling dependencies, project initialization, and script execution. Understanding the essential npm commands.",
    imageUrl: article2,
    link: "https://www.geeksforgeeks.org/important-npm-commands",
  },
  {
    title: "What Are Docker Runc Vulnerabilities?",
    description:
      "Docker, a leading containerization platform, employs container runtimes like runc to execute containers. However, vulnerabilities in runC can expose systems to security threats. This article meticulously explores Docker runc vulnerabilities.",
    imageUrl: article3,
    link: "https://www.geeksforgeeks.org/what-are-docker-runc-vulnerabilities",
  },
];

export const skillsData = [
  "Python",
  "Flask",
  "Django",
  "R",
  "Solidity",
  "C++",
  "Java",
  "Html",
  "CSS",
] as const;
