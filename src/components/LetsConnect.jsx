import { useTranslation } from 'react-i18next';
import { AiFillLinkedin } from "react-icons/ai";
import styles from "../style";
import data from "../constants/data";

// Botón circular que lleva a mi LinkedIn
const LetsConnect = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'es';
  const currentData = data[lang] || data.es;
  const { callToAction } = currentData;
  const label = lang === 'es' ? 'Contáctame' : 'Contact me';

  return (
    <a
      href={callToAction}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === 'es' ? 'Contáctame en LinkedIn' : 'Contact me on LinkedIn'}
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-[#ff9e00] to-[#ff006e] p-[4px] cursor-pointer hover:scale-[1.2] transition-transform duration-300 animate-pop-out group relative z-10`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-white w-[100%] h-[100%] rounded-full group-hover:bg-transparent transition-colors duration-300`}
      >
        <AiFillLinkedin className="text-[30px] text-[#ff4d4d] group-hover:text-white transition-colors duration-300" />
        <p className="font-poppins font-bold text-[17px] leading-[22px] mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9e00] to-[#ff006e] group-hover:text-white group-hover:!bg-none transition-all duration-300">
            {label}
          </span>
        </p>
      </div>
    </a>
  );
};

export default LetsConnect;
