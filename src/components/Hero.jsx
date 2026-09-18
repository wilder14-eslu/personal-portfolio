import { useTranslation } from 'react-i18next';
import styles from "../style";
import LetsConnect from "./LetsConnect";
import data from "../constants/data";
import { mlops_utopian } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  const currentData = data[lang] || data.en;
  const { aboutMe } = currentData;

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero text */}
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
        <p className={`font-poppins font-normal text-gray-600 text-[18px] leading-[30.8px] max-w-[470px] mt-5 relative z-10`}>
          {aboutMe.intro}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <motion.div 
          className="relative z-[5] w-[90%] sm:w-[80%] h-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60"
          animate={{ 
            y: [0, -15, 0], 
            boxShadow: ["0px 10px 30px rgba(0, 180, 216, 0.15)", "0px 20px 50px rgba(0, 180, 216, 0.4)", "0px 10px 30px rgba(0, 180, 216, 0.15)"] 
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img 
            src={mlops_utopian} 
            alt="MLOps Engineer Utopian Scene" 
            className="w-full h-full object-cover rounded-[20px]"
          />
        </motion.div>
        
        {/* Background glowing blobs for Utopian vibe */}
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute z-[0] w-[65%] h-[65%] rounded-full right-5 top-10 bg-gradient-to-r from-cyan-300/40 to-blue-400/40 blur-[80px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1.15, 1, 1.15], rotate: [0, -90, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
          className="absolute z-[0] w-[55%] h-[55%] rounded-full left-5 bottom-10 bg-gradient-to-r from-blue-300/40 to-indigo-400/40 blur-[80px] mix-blend-multiply" 
        />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
