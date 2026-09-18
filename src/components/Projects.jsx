import { useTranslation } from 'react-i18next';
import React, { useRef, useState } from "react";
import data from "../constants/data";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Project = (props) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  
  return (
    <div className="project-card flex-shrink-0 px-8 py-6 transition-all duration-300 transform border rounded-xl hover:border-transparent group border-gray-200 hover:shadow-2xl feature-card w-[320px] sm:w-[400px] md:w-[450px] snap-center bg-white/60 backdrop-blur-md">
      <div className="flex flex-col items-start">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 rounded-full ring-4 ring-gray-100 shadow-sm"
          src={props.image}
          alt={props.title}
        />

        <div className="mt-5 w-full">
          <h1 className="text-xl font-semibold font-poppins text-gray-800 capitalize md:text-2xl leading-tight break-words">
            {props.title}
          </h1>
          <p className="font-poppins font-normal text-cyan-600 mt-2 mb-3 text-sm font-semibold uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="text-gray-500 capitalize group-hover:text-gray-700">
            <div className="flex flex-wrap gap-4">
              {props.stack.map((tech) => (
                <div
                  key={tech.id}
                  className="text-[24px] tooltip transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
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

      <p className="mt-6 text-gray-600 font-poppins break-words leading-relaxed text-[15px]">
        {props.content}
      </p>

      <div className="flex mt-6 gap-4">
        {props.github && (
          <a href={props.github} target="_blank" rel="noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-cyan-100 transition-colors">
            <AiFillGithub
              size="1.5rem"
              className="text-gray-700 hover:text-cyan-600 transition-colors"
            />
          </a>
        )}
        {props.link && (
          <a href={props.link} target="_blank" rel="noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-cyan-100 transition-colors">
            <BsLink45Deg
              size="1.5rem"
              className="text-gray-700 hover:text-cyan-600 transition-colors"
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth > 768 ? 474 : 344; // Card width + gap
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth > 768 ? 474 : 344;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  // Mouse drag logic for PC
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section id="projects" className="w-full py-10">
      <h1 className="font-poppins font-bold text-[36px] sm:text-[48px] text-gray-800 leading-tight mb-10">
        {lang === 'es' ? 'Proyectos' : 'Projects'}
      </h1>

      <div className="relative w-full group">
        {/* Floating Navigation Buttons for PC */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 hidden md:flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all shadow-xl opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Previous project"
        >
          <BsChevronLeft size={20} strokeWidth={1} />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 hidden md:flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all shadow-xl opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Next project"
        >
          <BsChevronRight size={20} strokeWidth={1} />
        </button>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={`flex overflow-x-auto gap-6 pb-10 pt-4 px-2 custom-scrollbar ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'}`}
        >
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Beautiful Custom Scrollbar for PC */
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #00b4d8;
        }
      `}</style>
    </section>
  );
};

export default Projects;
