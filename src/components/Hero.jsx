import { useTranslation } from 'react-i18next';
import styles from "../style";
import LetsConnect from "./LetsConnect";
import data from "../constants/data";

const Hero = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'es';
  const currentData = data[lang] || data.es;
  const { aboutMe } = currentData;

  return (
    <section
      id="home"
      className={`flex flex-col ${styles.paddingY} relative`}
    >
      {/* Presentación a todo el ancho */}
      <div className={`w-full ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}>
        <div className="flex flex-row justify-between items-center w-full text-gray-800">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gray-800 ss:leading-[80px] leading-[80px]">
            {lang === 'es' ? '¡Hola!' : 'Hi there!'}
            <br className="sm:block hidden" /> {lang === 'es' ? 'Soy' : 'I am'}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <h1 className="font-poppins font-bold ss:text-[68px] text-[52px] text-gray-900 ss:leading-[80px] leading-[64px] w-full">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0077b6] drop-shadow-md">{aboutMe.name}</span>
        </h1>
        <p className="font-poppins font-normal text-gray-600 sm:text-[20px] text-[17px] sm:leading-[34px] leading-[30px] max-w-[1000px] mt-6">
          {aboutMe.intro}
        </p>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
