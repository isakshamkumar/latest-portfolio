"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
const[mount,setmount]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY - 3010;
      setScrollPosition(position);
    };
    setmount(true)

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
if(mount){
  return (
    <section suppressHydrationWarning
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative overflow-hidden"
    >
      <SectionHeading>My experience</SectionHeading>
      <div style={{ position: "relative" }}>
        {/* Vertical line */}
 
        <VerticalTimeline className="relative" lineColor="">
        <div
          className="absolute top-0 left-[20px] md:left-[20px] xl:left-1/2 dark:bg-white  bg-black"
          style={{
            width:'2px',
            transform: `translateX(-50%)`,
            height: `${scrollPosition}px`,
            zIndex: 1, 
            opacity: 0.5,
          }}
        ></div>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light"
                      ? "#f3f4f6"
                      : "rgba(255, 255, 255, 0.05)",
                      boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light"
                      ? "white"
                      : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                 {item.description.title}
                 {item.description.content.map((con,index)=><a target={`${con.startsWith("https")?'_blank':'_self'}`} className={`${con.startsWith("https")?'hover:underline':''}`} key={index}  href={`${con.startsWith("https") ? con : '/#experience'}`}><li >{con}</li></a>)}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
 
}
