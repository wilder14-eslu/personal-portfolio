import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { close, parthmittal, menu } from "../assets";
import data from "../constants/data";
import { scrollToSection } from "../lib/helperFunctions";
import { motion } from "framer-motion";

const Navbar = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  const currentData = data[lang] || data.en;
  const { navLinks } = currentData;

  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleLang = () => {
    i18n.changeLanguage(lang === 'en' ? 'es' : 'en');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="nav-styles sm:px-16 px-6"
    >
      {/* Logo */}
      <a href="#home">
        <img
          src={parthmittal}
          alt="Wilder Espinoza"
          className="w-[80px] h-[80px] rounded-full object-cover"
        />
      </a>

      {/* List of links - desktop */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 p-4">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            text-white hover:text-teal-200`}
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.title}
          </li>
        ))}
        {/* Language toggle desktop */}
        <li className="ml-10">
          <button
            onClick={toggleLang}
            className="font-poppins font-normal text-[14px] px-3 py-1 border border-teal-200 rounded-full text-teal-200 hover:bg-teal-200 hover:text-primary transition-colors duration-200"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </li>
      </ul>

      {/* Mobile menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
        {/* Language toggle mobile */}
        <button
          onClick={toggleLang}
          className="font-poppins font-normal text-[13px] px-2 py-1 border border-teal-200 rounded-full text-teal-200 hover:bg-teal-200 hover:text-primary transition-colors duration-200"
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
          absolute top-20 right-0 mx-4 my-2
          min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
