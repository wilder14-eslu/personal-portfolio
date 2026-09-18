import { useTranslation } from 'react-i18next';
import styles from "../style";
import LetsConnect from "./LetsConnect";
import data from "../constants/data";
import { motion } from "framer-motion";
import HeroNetwork from "./HeroNetwork";

const Hero = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  const currentData = data[lang] || data.en;
  const { aboutMe } = currentData;

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} relative`}
    >
      {/* Left Side: Text Content */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}
      >
        <div className="flex flex-row justify-between items-center w-full text-gray-800">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gray-800 ss:leading-[80px] leading-[80px]">
            {lang === 'es' ? '¡Hola!' : 'Hi there!'}
            <br className="sm:block hidden" /> {lang === 'es' ? 'Soy' : 'I am'}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <h1 className="font-poppins font-bold ss:text-[68px] text-[52px] text-gray-900 ss:leading-[80px] leading-[80px] w-full">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0077b6] drop-shadow-md">{aboutMe.name}</span>
        </h1>
        <p className={`font-poppins font-normal text-gray-600 text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
          {aboutMe.intro}
        </p>
      </div>

      {/* Right Side: 4D Multidimensional Neural Network Design */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-16 relative z-10`}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-cyan-100 to-blue-200 rounded-full blur-[80px] opacity-60 z-0"></div>
        
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center bg-white/40 backdrop-blur-md border border-white/60 rounded-[3rem] shadow-[0_20px_50px_rgba(0,180,216,0.15)] overflow-hidden">
          
          {/* Geometric Element 1: Background grid/tech pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* HTML5 Canvas 4D Random Neural Network */}
          <HeroNetwork />
          
          {/* Floating Geometric Elements (Asymmetric accents) */}
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute -top-6 -right-6 w-16 h-16 border-2 border-cyan-400/30 border-dashed rounded-full z-20"></motion.div>
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-blue-500/20 rounded-lg z-20"></motion.div>
          
        </div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
