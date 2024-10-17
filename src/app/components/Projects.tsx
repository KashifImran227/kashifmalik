import React from "react";

const projectsData = [
  {
    title: "Fashion",
    description:
      "This project was about clothing fashion. I used HTML, CSS, and JavaScript.",
    image: "/pr1.png",
  },
  {
    title: "Food",
    description:
      "A Sweet Shop website. I used HTML, CSS, and JavaScript with JS libraries.",
    image: "/pr4.png",
  },
  {
    title: "Rides",
    description:
      "This is a car showroom web application I created with the help of Next.js.",
    image: "/pr5.png",
  },
];

const Projects = () => {
  return (
    <main className="h-screen flex flex-col items-center bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606] p-6">
      <h1 className="text-4xl text-white text-center mb-10 border border-green-200 p-2 shadow-md shadow-green-500 rounded-xl">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[25%] bg-[#00696d4f] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#007B7D] hover:shadow-2xl"
          >
            <img
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              src={project.image}
              alt={project.title}
            />
            <div className="p-4">
              <h2 className="text-[#1fceb1] text-2xl mb-2 transition-colors duration-300 ease-in-out hover:text-white">
                {project.title}
              </h2>
              <p className="text-[#a1d4cc] text-lg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
