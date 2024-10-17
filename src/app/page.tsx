"use client";
import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const Page: React.FC = () => {
  return (
    <main className="bg-gradient-to-t from-[#08090A] via-[#012635] to-[#000000]">
      <Hero />
    
      <section
        id="skills"
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] p-6"
      >
        <Skills />
      </section>
      <section
        id="projects"
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] p-6"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] p-6"
      >
        <Contact />
      </section>
    </main>
  );
};

export default Page;
