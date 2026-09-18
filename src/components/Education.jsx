import { useTranslation } from 'react-i18next';
import styles, { layout } from "../style";
import data from "../constants/data";
import { motion } from "framer-motion";

const Node = ({ title, subtitle, top, color, delay }) => (
  <motion.div
    className="absolute -translate-y-1/2 flex flex-col items-center justify-center bg-white border-b-4 rounded-xl shadow-lg p-2 sm:p-3 w-[120px] sm:w-[130px] z-10"
    style={{ right: '5%', top, borderColor: color }}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
  >
    <span className="font-poppins font-bold text-gray-800 text-[11px] sm:text-[12px] text-center leading-tight">{title}</span>
    <span className="font-poppins font-medium text-gray-500 text-[9px] text-center mt-1">{subtitle}</span>
  </motion.div>
);

const TheoryToPracticeGraph = () => {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({
      pathLength: 1,
      opacity: 0.6,
      transition: { delay: custom * 0.2 + 0.3, duration: 0.8, ease: "easeInOut" }
    })
  };

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-blue-50/40 rounded-3xl border border-blue-100 overflow-hidden shadow-inner">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>

      <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
        <motion.path d="M 20,50 C 50,50 50,20 80,20" stroke="#00b4d8" strokeWidth="0.5" fill="none" strokeDasharray="1.5 1.5" variants={lineVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.path d="M 20,50 L 80,50" stroke="#FF9900" strokeWidth="0.5" fill="none" strokeDasharray="1.5 1.5" variants={lineVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.path d="M 20,50 C 50,50 50,80 80,80" stroke="#ff006e" strokeWidth="0.5" fill="none" strokeDasharray="1.5 1.5" variants={lineVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} />
      </svg>

      {/* Base Node (Statistics) */}
      <motion.div
        className="absolute left-[5%] top-[50%] -translate-y-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full shadow-xl shadow-blue-500/30 p-3 sm:p-4 w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] z-10 border-4 border-white"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        <span className="font-poppins font-bold text-center text-[13px] leading-tight">Statistics<br/>Degree</span>
        <span className="font-poppins text-[10px] text-blue-100 mt-1 tracking-wider uppercase">Foundation</span>
      </motion.div>

      {/* Target Nodes */}
      <Node title="Machine Learning" subtitle="Predictive Models" top="20%" color="#00b4d8" delay={0.6} />
      <Node title="Data Engineering" subtitle="Pipelines & SQL" top="50%" color="#FF9900" delay={0.8} />
      <Node title="MLOps" subtitle="Docker, CI/CD" top="80%" color="#ff006e" delay={1.0} />
    </div>
  );
};

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
    className="flex flex-row p-6 rounded-2xl mb-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
  >
    <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-blue-50 border border-blue-100 group-hover:scale-110 transition-transform duration-300 shrink-0">
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain opacity-80" />
    </div>
    <div className="flex-1 flex flex-col ml-5">
      <h4 className="font-poppins font-bold text-gray-800 text-[18px] leading-[26px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-semibold text-blue-600 text-[15px] leading-[22px] mb-2">
        {degree}
      </p>
      <div className="inline-block bg-blue-50/80 text-blue-600 text-[11px] font-bold px-3 py-1 rounded-full mb-3 self-start border border-blue-100 uppercase tracking-wide">
        {duration}
      </div>
      <div className="font-poppins font-normal text-gray-600 text-[14px] leading-[24px] flex items-start mb-1">   
        <span className="text-blue-400 mr-2 mt-0.5">●</span> 
        <span>{content1}</span>
      </div>
      {content2 && (
        <div className="font-poppins font-normal text-gray-600 text-[14px] leading-[24px] flex items-start">     
          <span className="text-blue-400 mr-2 mt-0.5">●</span> 
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
    <section id="education" className="py-12 sm:py-20">
      <div className="mb-12">
        <h2 className="font-poppins font-bold text-[32px] sm:text-[45px] text-gray-800 leading-tight">
          Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Foundation</span>
        </h2>
        <p className="font-poppins text-gray-500 max-w-2xl mt-4 text-[16px]">
          {lang === 'es' 
            ? 'Mi formación académica en Estadística es la base matemática que me permite comprender a profundidad los algoritmos de Machine Learning y llevarlos a producción.' 
            : 'My academic background in Statistics provides the mathematical foundation necessary to deeply understand Machine Learning algorithms and deploy them into production.'}
        </p>
      </div>

      <div className={`${layout.sectionReverse} items-center gap-10`}>
        <div className={layout.sectionImgReverse}>
          <div className="w-[100%] h-[100%] max-w-[500px]">
            <TheoryToPracticeGraph />
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
