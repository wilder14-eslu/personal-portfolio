import { useTranslation } from 'react-i18next';
import styles, { layout } from "../style";
import data from "../constants/data";
import { motion } from "framer-motion";

const Node = ({ title, subtitle, top, color, delay }) => (
  <motion.div
    className="absolute -translate-y-1/2 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/50 p-3 sm:p-4 w-[130px] sm:w-[150px] z-10 group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
    style={{ right: '2%', top }}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
  >
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: color }}></div>
    
    <div className="w-8 h-8 rounded-full mb-2 flex items-center justify-center shadow-inner" style={{ backgroundColor: `${color}20` }}>
      <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: color }}></div>
    </div>
    <span className="font-poppins font-bold text-gray-800 text-[12px] sm:text-[13px] text-center leading-tight group-hover:text-cyan-600 transition-colors">{title}</span>
    <span className="font-poppins font-medium text-gray-500 text-[10px] sm:text-[11px] text-center mt-1">{subtitle}</span>
  </motion.div>
);

const MLOpsPipelineGraph = () => {
  return (
    <div className="relative w-full h-full min-h-[450px] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-[2rem] border border-white overflow-hidden shadow-[0_10px_40px_rgba(0,180,216,0.1)] group">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* SVG Flow Lines */}
      <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradML" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="gradData" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="gradOps" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Base Lines */}
        <path d="M 25,50 C 50,50 50,20 80,20" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
        <path d="M 25,50 L 80,50" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
        <path d="M 25,50 C 50,50 50,80 80,80" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />

        {/* Animated Data Flow (Marching Ants) */}
        <motion.path 
          d="M 25,50 C 50,50 50,20 80,20" 
          stroke="url(#gradML)" strokeWidth="2.5" fill="none" 
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: -24 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        <motion.path 
          d="M 25,50 L 80,50" 
          stroke="url(#gradData)" strokeWidth="2.5" fill="none" 
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: -24 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        <motion.path 
          d="M 25,50 C 50,50 50,80 80,80" 
          stroke="url(#gradOps)" strokeWidth="2.5" fill="none" 
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: -24 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </svg>

      {/* Main Core Node (Statistics) */}
      <motion.div
        className="absolute left-[5%] top-[50%] -translate-y-1/2 flex flex-col items-center justify-center bg-white rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] p-4 w-[120px] h-[120px] z-10 border-4 border-blue-500/20 group cursor-pointer"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-dashed animate-spin-slow opacity-50"></div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 mb-2 shadow-inner flex items-center justify-center text-white font-bold font-poppins text-lg">
          ∑
        </div>
        <span className="font-poppins font-bold text-center text-gray-800 text-[12px] leading-tight group-hover:text-blue-600 transition-colors">Statistics<br/>Core</span>
      </motion.div>

      {/* Output Pipeline Nodes */}
      <Node title="Machine Learning" subtitle="Predictive Modeling" top="20%" color="#06b6d4" delay={0.6} />
      <Node title="Data Engineering" subtitle="Scalable Pipelines" top="50%" color="#f59e0b" delay={0.8} />
      <Node title="MLOps & Deploy" subtitle="CI/CD & Docker" top="80%" color="#ec4899" delay={1.0} />
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
    className="flex flex-row p-6 rounded-3xl mb-6 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,180,216,0.12)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
  >
    {/* Subtle gradient hover effect inside the card */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/50 transition-colors duration-300"></div>

    <div className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center bg-blue-50 border border-blue-100/50 group-hover:bg-cyan-100/50 group-hover:scale-105 transition-all duration-300 shrink-0 z-10 shadow-sm">
      <img src={icon} alt="institution logo" className="w-[60%] h-[60%] object-contain" />
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
  const lang = i18n.language?.split('-')[0] || 'en';
  const currentData = data[lang] || data.en;
  const { educationList } = currentData;

  return (
    <section id="education" className="py-12 sm:py-20 relative">
      <div className="mb-14 text-center md:text-left relative z-10">
        <h2 className="font-poppins font-extrabold text-[36px] sm:text-[48px] text-gray-800 leading-tight tracking-tight">
          Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Foundation</span>
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
            <MLOpsPipelineGraph />
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
