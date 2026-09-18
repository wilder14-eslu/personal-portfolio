import { useTranslation } from 'react-i18next';
import styles from "../style";
import LetsConnect from "./LetsConnect";
import data from "../constants/data";
import { professional_ml_engineer } from "../assets"; 
import { motion } from "framer-motion";

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

      {/* Right Side: Professional Geometric Profile Design */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-16 relative z-10`}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-cyan-100 to-blue-200 rounded-full blur-[80px] opacity-60 z-0"></div>
        
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
          
          {/* Geometric Element 1: Rotating Dashed Ring (Symmetric) */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-cyan-400/40 border-dashed z-0"
          />
          
          {/* Geometric Element 2: Rotating Rounded Square (Symmetric) */}
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute inset-4 border-[1.5px] border-blue-500/20 rounded-[3rem] z-0"
          />

          {/* Geometric Element 3: Floating Triangle (Asymmetric) */}
          <motion.div 
            animate={{ y: [-15, 15, -15], rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-4 -left-2 sm:-left-8 w-12 h-12 z-20"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-cyan-400/80 drop-shadow-lg">
              <polygon points="50,10 100,90 0,90" />
            </svg>
          </motion.div>

          {/* Geometric Element 4: Floating Dots Pattern (Asymmetric offset) */}
          <motion.div 
            animate={{ y: [15, -15, 15], x: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-8 -right-6 sm:-right-12 z-20 grid grid-cols-3 gap-2 opacity-70"
          >
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-sm"></div>
            ))}
          </motion.div>

          {/* Geometric Element 5: Static Abstract Accents */}
          <div className="absolute top-10 right-2 sm:right-6 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)] z-20"></div>
          <div className="absolute bottom-4 left-10 w-4 h-4 border-2 border-cyan-500 rotate-45 z-20"></div>

          {/* Main Profile Picture */}
          <div className="relative w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-10 bg-gray-50">
            <img 
              src={professional_ml_engineer} 
              alt="Professional ML Engineer" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
