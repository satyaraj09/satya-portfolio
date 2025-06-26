import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  const project = {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia omnis nesciunt impedit quam ullam voluptatem praesentium sapiente veniam odio. Nihil.",
  };
  return (
    <div className="p-6 shadow transition-all duration-500 ease-in-out hover:shadow-[0px_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1 rounded-xl">
      <Image
        width={450}
        height={200}
        src="/test.jpg"
        alt="Project"
        className="rounded-xl"
      />
      <div className="mt-5 md:mt-10 space-y-5">
        <h3 className="text-2xl text-[#00CAFF] font-semibold">{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
