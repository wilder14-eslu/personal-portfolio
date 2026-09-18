import { useTranslation } from 'react-i18next';
import styles from "../style";
import { arrowUp } from "../assets";
import data from "../constants/data";

const LetsConnect = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  const currentData = data[lang] || data.en;
  const { callToAction } = currentData;

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-[#ff9e00] to-[#ff006e] p-[4px] cursor-pointer hover:scale-[1.2] transition-transform duration-300 animate-pop-out group relative z-10`}
      onClick={() => window.open(callToAction)}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-white w-[100%] h-[100%] rounded-full group-hover:bg-transparent transition-colors duration-300`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-bold text-[20px] leading-[23px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9e00] to-[#ff006e] group-hover:text-white group-hover:!bg-none transition-all duration-300">
              {lang === 'es' ? 'Hable-' : "Let's"}
            </span>
          </p>
          <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] ml-1 opacity-70 group-hover:brightness-0 group-hover:invert group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className={`${styles.flexStart} flex-row mt-1`}>
          <p className="font-poppins font-bold text-[20px] leading-[23px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9e00] to-[#ff006e] group-hover:text-white group-hover:!bg-none transition-all duration-300">
              {lang === 'es' ? 'mos' : 'Connect'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
