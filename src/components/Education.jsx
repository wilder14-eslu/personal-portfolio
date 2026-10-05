import { useTranslation } from 'react-i18next';
import styles, { layout } from "../style";
import data from "../constants/data";
import { motion } from "framer-motion";
import ProjectPipeline from "./ProjectPipeline";

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
    className="flex flex-row p-6 rounded-3xl mb-6 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,180,216,0.12)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
  >
    {/* Subtle gradient hover effect inside the card */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/50 transition-colors duration-300"></div>

    <div className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center bg-blue-50 border border-blue-100/50 group-hover:bg-cyan-100/50 group-hover:scale-105 transition-all duration-300 shrink-0 z-10 shadow-sm">
      <img src={icon} alt="Logo de la institución" className="w-[60%] h-[60%] object-contain" />
    </div>
    
    <div className="flex-1 flex flex-col ml-5 z-10">
      <h4 className="font-poppins font-bold text-gray-800 text-[19px] leading-[26px] mb-1 group-hover:text-cyan-700 transition-colors">
        {title}
      </h4>
      <p className="font-poppins font-semibold text-blue-600 text-[15px] leading-[22px] mb-2">
        {degree}
      </p>
      <div className="inline-block bg-gray-50 text-gray-500 group-hover:bg-cyan-50 group-hover:text-cyan-600 text-[11px] font-bold px-3 py-1 rounded-full mb-4 self-start border border-gray-200 group-hover:border-cyan-200 transition-colors uppercase tracking-wider">
        {duration}
      </div>
      <div className="font-poppins font-normal text-gray-600 text-[14px] leading-[24px] flex items-start mb-2">   
        <span className="text-cyan-500 mr-3 mt-1 text-xs">◆</span> 
        <span>{content1}</span>
      </div>
      {content2 && (
        <div className="font-poppins font-normal text-gray-600 text-[14px] leading-[24px] flex items-start">     
          <span className="text-cyan-500 mr-3 mt-1 text-xs">◆</span> 
          <span>{content2}</span>
        </div>
      )}
    </div>
  </motion.div>
);

const Education = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'es';
  const currentData = data[lang] || data.es;
  const { educationList } = currentData;

  return (
    <section id="education" className="py-12 sm:py-20 relative">
      <div className="mb-14 text-center md:text-left relative z-10">
        <h2 className="font-poppins font-extrabold text-[36px] sm:text-[48px] text-gray-800 leading-tight tracking-tight">
          {lang === 'en' ? 'Education & ' : 'Educación y '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{lang === 'en' ? 'Foundation' : 'Fundamentos'}</span>
        </h2>
        <p className="font-poppins text-gray-500 max-w-2xl mt-4 text-[16px] mx-auto md:mx-0">
          {lang === 'es' 
            ? 'Mi formación académica en Estadística es la base matemática que me permite comprender a profundidad los algoritmos de Machine Learning y llevarlos a producción de forma escalable.' 
            : 'My academic background in Statistics provides the mathematical foundation necessary to deeply understand Machine Learning algorithms and deploy them into production.'}
        </p>
      </div>

      <div className={`${layout.sectionReverse} items-center gap-12 lg:gap-16 relative z-10`}>
        <div className={layout.sectionImgReverse}>
          <div className="w-[100%] h-[100%] max-w-[550px]">
            <ProjectPipeline />
          </div>
        </div>

        <div className={`${layout.sectionInfo} flex-col`}>
          {educationList.map((feature, index) => (
            <FeatureCard key={feature.id} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
