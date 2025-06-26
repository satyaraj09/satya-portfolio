import Image from "next/image";
import { Button } from "@/components/ui/button";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import ServicesCard from "@/components/ServicesCard";

export default function Home() {
  return (
    <main className="w-full px-6 md:px-20 py-10">
      {/* Hero Section or Top level page  */}
      <section
        id="hero"
        className="py-5 min-h-screen flex flex-col md:flex-row gap-6 items-center justify-between"
      >
        <div className="text-center md:text-left space-y-10 z-50 md:z-0">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hello <br />
            I&apos;m <span className="text-[#00CAFF]">Satya</span>
            <br />
            <span className="text-gray-400">a Software Developer</span>
          </h1>

          <Button className="mx-auto md:mx-0 w-full sm:w-1/2 md:w-1/4 h-12 text-xl bg-[#00CAFF] hover:bg-[#00C4FF]">
            Hire Me.
          </Button>
        </div>

        <div className="mb-10 md:mb-0 relative">
          <Image
            src="/satya.png"
            alt="Satya Rajbhar"
            width={500}
            height={600}
            className="rounded-xl z-10 relative shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rotate-45 z-0 bg-[#00CAFF] blur-2xl opacity-50 shadow-[0_0_50px_25px_#00CAFF] rounded-xl"></div>
        </div>
      </section>
      {/* About Section */}
      <section className="min-h-screen py-10" id="about">
        <h1 className="text-5xl font-semibold text-center mb-10">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EducationCard />
          <ExperienceCard />
        </div>
      </section>

      <section className="min-h-screen py-10" id="projects">
        <h1 className="text-5xl font-semibold text-center mb-10">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>

      <section className="min-h-screen px-6 py-10" id="services">
        <h1 className="text-5xl font-semibold text-center mb-10">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </section>

      <section className="min-h-screen px-6 py-10" id="contacts">
        <h1 className="text-5xl font-semibold text-center mb-10">Contacts</h1>
      </section>
    </main>
  );
}
