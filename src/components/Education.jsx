import { useTranslation } from 'react-i18next';
import data from "../constants/data";
import { motion } from "framer-motion";
import Math4D from "./Math4D";

const FeatureCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  index,
}) => (
  <motion.div
    className="flex flex-col p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
  >
    <div className="flex flex-row items-center mb-5">
      <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0">
        <img src={icon} alt="icon" className="w-[55%] h-[55%] object-contain" />
      </div>
      <div className="ml-4 flex-1">
        <h4 className="font-poppins font-bold text-gray-800 text-[18px] sm:text-[20px] leading-tight mb-2">
          {title}
        </h4>
        <div className="inline-block bg-blue-50 text-blue-600 text-[11px] font-bold px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider">
          {duration}
        </div>
      </div>
    </div>
    
    <div className="flex flex-col flex-1">
      <p className="font-poppins font-semibold text-blue-600 text-[15px] sm:text-[16px] leading-[24px] mb-4 bg-blue-50/50 p-2 rounded-lg border-l-4 border-blue-400">
        {degree}
      </p>
      <div className="font-poppins font-normal text-gray-600 text-[14px] leading-[24px] flex items-start mb-2">   
        <span className="text-blue-500 mr-2 mt-0.5 text-lg leading-none">•</span> 
        <span>{content1}</span>
      </div>
      {content2 && (
        <div className="font-poppins font-normal text-gray-600 text-[14px] leading-[24px] flex items-start">     
          <span className="text-blue-500 mr-2 mt-0.5 text-lg leading-none">•</span> 
          <span>{content2}</span>
        </div>
      )}
    </div>
  </motion.div>
);

const Education = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  const currentData = data[lang] || data.en;
  const { educationList } = currentData;

  return (
    <section id="education" className="py-16 sm:py-24 flex flex-col items-center">
      <div className="mb-12 text-center w-full">
        <h2 className="font-poppins font-bold text-[36px] sm:text-[48px] text-gray-800 leading-tight">
          Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Foundation</span>
        </h2>
        <p className="font-poppins text-gray-500 max-w-2xl mx-auto mt-5 text-[16px] sm:text-[18px]">
          {lang === 'es' 
            ? 'Mi formación académica en Estadística es la base matemática que me permite comprender a profundidad los algoritmos de Machine Learning y llevarlos a producción.' 
            : 'My academic background in Statistics provides the mathematical foundation necessary to deeply understand Machine Learning algorithms and deploy them into production.'}
        </p>
      </div>

      {/* Symmetrical Layout: 4D Animation at top (full width), Grid below */}
      <motion.div 
        className="w-full max-w-6xl mb-16 h-[450px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Math4D />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {educationList.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Education;
