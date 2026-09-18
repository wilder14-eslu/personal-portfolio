import { useTranslation } from 'react-i18next';
import styles from "../style";
import LetsConnect from "./LetsConnect";
import data from "../constants/data";
import { profilePic } from "../assets"; 
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
        <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-cyan-100 to-blue-200 rounded-full blur-[80px] opacity-60"></div>
        
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
          
          {/* Geometric Element 1: Rotating Dashed Ring */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-cyan-400/40 border-dashed"
          />
          
          {/* Geometric Element 2: Rotating Rounded Square */}
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute inset-6 border-[1.5px] border-blue-400/30 rounded-[3rem]"
          />

          {/* Geometric Element 3: Static Abstract Accents */}
          <div className="absolute top-0 right-10 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute bottom-10 left-4 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>

          {/* Floating Tech/Success Badges */}
          <motion.div 
            animate={{ y: [-8, 8, -8] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 -left-4 sm:-left-10 bg-white/90 backdrop-blur shadow-xl rounded-xl px-4 py-2.5 border border-gray-100 flex items-center gap-3 z-20"
          >
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            <span className="font-poppins font-bold text-xs sm:text-sm text-gray-700 tracking-wide">Model Deployed</span>
          </motion.div>

          <motion.div 
            animate={{ y: [8, -8, 8] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 -right-4 sm:-right-8 bg-white/90 backdrop-blur shadow-xl rounded-xl px-4 py-2.5 border border-gray-100 flex items-center gap-2 z-20"
          >
            <span className="font-poppins font-bold text-sm sm:text-base text-cyan-600">ROI</span>
            <div className="w-[1px] h-4 bg-gray-300 mx-1"></div>
            <span className="font-poppins font-semibold text-xs sm:text-sm text-gray-600">Optimized</span>
          </motion.div>

          {/* Actual Profile Picture */}
          <div className="relative w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-10 bg-gray-50">
            <img 
              src={profilePic} 
              alt="Wilder - ML Engineer" 
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
