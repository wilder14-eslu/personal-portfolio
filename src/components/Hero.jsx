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

      {/* Right Side: Geometric Neural Network Design */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-16 relative z-10`}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-cyan-100 to-blue-200 rounded-full blur-[80px] opacity-60 z-0"></div>
        
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center bg-white/40 backdrop-blur-sm border border-white/60 rounded-[3rem] shadow-[0_20px_50px_rgba(0,180,216,0.15)] overflow-hidden">
          
          {/* Geometric Element 1: Background grid/tech pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* SVG Neural Network Representation */}
          <div className="relative w-full h-full p-8 z-10">
            <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0077b6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.5" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Input Layer to Hidden Layer 1 */}
              {[75, 150, 225].map((y1, i) =>
                [45, 115, 185, 255].map((y2, j) => (
                  <motion.line key={`L1-${i}-${j}`} x1="50" y1={y1} x2="150" y2={y2} stroke="url(#lineGrad)" strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                ))
              )}

              {/* Hidden Layer 1 to Hidden Layer 2 */}
              {[45, 115, 185, 255].map((y1, i) =>
                [75, 150, 225].map((y2, j) => (
                  <motion.line key={`L2-${i}-${j}`} x1="150" y1={y1} x2="250" y2={y2} stroke="url(#lineGrad)" strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                ))
              )}

              {/* Hidden Layer 2 to Output Layer */}
              {[75, 150, 225].map((y1, i) =>
                [115, 185].map((y2, j) => (
                  <motion.line key={`L3-${i}-${j}`} x1="250" y1={y1} x2="350" y2={y2} stroke="url(#lineGrad)" strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                ))
              )}

              {/* Nodes rendering with precise geometry */}
              {/* Input Layer */}
              {[75, 150, 225].map((y, i) => (
                <motion.circle key={`in-${i}`} cx="50" cy={y} r="8" fill="#023e8a" stroke="#fff" strokeWidth="2" filter="url(#glow)"
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0 }}
                />
              ))}

              {/* Hidden Layer 1 */}
              {[45, 115, 185, 255].map((y, i) => (
                <motion.circle key={`h1-${i}`} cx="150" cy={y} r="7" fill="#0077b6" stroke="#fff" strokeWidth="2" filter="url(#glow)"
                  animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
                />
              ))}

              {/* Hidden Layer 2 */}
              {[75, 150, 225].map((y, i) => (
                <motion.circle key={`h2-${i}`} cx="250" cy={y} r="7" fill="#0096c7" stroke="#fff" strokeWidth="2" filter="url(#glow)"
                  animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
                />
              ))}

              {/* Output Layer */}
              {[115, 185].map((y, i) => (
                <motion.circle key={`out-${i}`} cx="350" cy={y} r="10" fill="#00b4d8" stroke="#fff" strokeWidth="3" filter="url(#glow)"
                  animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                />
              ))}
            </svg>
          </div>

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
