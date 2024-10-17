"use client";
import React from "react";

const Skills = () => {
  return (
    <main className="h-screen flex flex-col items-center bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] p-6">
      <h1 className="text-4xl text-white text-center mt-24 mb-10 border border-green-200 p-2 shadow-md shadow-green-500 rounded-xl">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4">
        {[
          {
            title: "HTML/CSS",
            description:
              "Proficient in creating structured, semantic markup and styling with CSS.",
          },
          {
            title: "TypeScript",
            description:
              "Strong understanding of TypeScript for dynamic functionality and interactivity.",
          },
          {
            title: "Next.js",
            description:
              "Experience working with React, Next.js, and various other popular frameworks and libraries.",
          },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col h-[300px] w-full sm:w-[30%] bg-[#00696d4f] rounded-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#007B7D] hover:shadow-2xl"
          >
            <h1 className="text-[#1fceb1] text-2xl text-center mb-4 transition-transform duration-300 ease-in-out hover:translate-y-[-2px] hover:text-white">
              {skill.title}
            </h1>
            <p className="text-[#a1d4cc] text-lg tracking-widest text-start font-extralight transition-colors duration-300 ease-in-out hover:text-[#a1d4cc]">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
