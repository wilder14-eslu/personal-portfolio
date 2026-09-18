import { useTranslation } from 'react-i18next';
import React, { useRef } from "react";
import data from "../constants/data";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

const Project = (props) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  
  return (
    <div className="project-card flex-shrink-0 px-8 py-6 transition-colors duration-300 transform border rounded-xl hover:border-transparent group border-gray-200 hover:shadow-utopia feature-card w-[300px] sm:w-[400px] md:w-[450px] snap-center bg-white/50 backdrop-blur-sm">
      <div className="flex flex-col items-start">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 rounded-full ring-4 ring-gray-100"
          src={props.image}
          alt=""
        />

        <div className="mt-4 w-full">
          <h1 className="text-xl font-semibold font-poppins text-gray-800 capitalize md:text-2xl text-gradient leading-tight break-words">
            {props.title}
          </h1>
          <p className="font-poppins font-normal text-dimWhite mt-3 mb-2">
            Tech Stack
          </p>
          <div className="text-gray-500 capitalize group-hover:text-gray-700">
            <div className="flex flex-wrap gap-4">
              {props.stack.map((tech) => (
                <div
                  key={tech.id}
                  className="text-[20px] tooltip transition-transform duration-300 hover:scale-125"
                  style={{ color: tech.color || "#4b5563" }}
                >
                  {React.createElement(tech.icon)}
                  <span className="tooltiptext">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-gray-600 font-poppins break-words leading-relaxed">
        {props.content}
      </p>

      <div className="flex mt-6 gap-4">
        {props.github && (
          <a href={props.github} target="_blank" rel="noreferrer">
            <AiFillGithub
              size="2rem"
              className="text-gray-700 hover:text-[#00b4d8] transition-colors"
            />
          </a>
        )}
        {props.link && (
          <a href={props.link} target="_blank" rel="noreferrer">
            <BsLink45Deg
              size="2rem"
              className="text-gray-700 hover:text-[#00b4d8] transition-colors"
            />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  const currentData = data[lang] || data.en;
  const { projects } = currentData;
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="w-full">
      <h1 className="flex-1 font-poppins font-light ss:text-[55px] text-[45px] text-gray-800 ss:leading-[80px] leading-[80px] mb-8">
        {lang === 'es' ? 'Proyectos' : 'Projects'}
      </h1>

      <div className="relative w-full mb-16">
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-2 pr-4">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-[#00b4d8] hover:text-white hover:border-[#00b4d8] transition-all shadow-sm"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-[#00b4d8] hover:text-white hover:border-[#00b4d8] transition-all shadow-sm"
          >
            &gt;
          </button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
