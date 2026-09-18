import React from "react";
import Button from "./Button";
import { profilePic, peru_flag } from "../assets";
import { layout } from "../style";
import data from "../constants/data";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'en';
  const currentData = data[lang] || data.en;
  const { socialMedia, aboutMe, resumeLink, repoLink } = currentData;
  return (
  <footer id="contactMe" className="bg-white border-t border-gray-100 sm:px-16 px-6 relative z-10 shadow-sm mt-12">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
    >
      <div className={` ${layout.sectionInfo}`}>
        <h2 className="text-2xl font-bold text-gray-900 font-poppins">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-gray-600 text-[16px] leading-[30.8px] max-w-[470px] mt-4`}
        >
        {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-6 items-center">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-gray-600 mr-5 text-[25px] hover:text-[#00b4d8] hover:scale-110 transition-all flex items-center"
            >
              {social.img ? (
                <img src={social.img} alt={social.id} className="w-[28px] h-[28px] object-contain filter grayscale hover:grayscale-0 transition-all" />
              ) : (
                React.createElement(social.icon)
              )}
            </a>
          ))}
        </div>

        {/* Phone number with Peru flag */}
        {aboutMe.phone && (
          <a
            href={`tel:${aboutMe.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 mt-6 group w-fit bg-gray-50 px-4 py-2 rounded-full border border-gray-100 hover:border-[#00b4d8] hover:shadow-sm transition-all"
          >
            <img
              src={peru_flag}
              alt="Peru"
              className="w-5 h-5 object-cover rounded-full"
            />
            <FaPhoneAlt className="text-[#00b4d8] text-[14px]" />
            <span className="font-poppins text-gray-700 text-[15px] group-hover:text-[#0077b6] transition-colors">
              {aboutMe.phone}
            </span>
          </a>
        )}

        <div className="grid grid-cols-2">
          <a href={resumeLink} target="_blank">
            <Button
              styles="mt-8 mr-3 inline-flex items-center justify-center bg-[#00b4d8] text-white hover:bg-[#0077b6] shadow-md border-none"
              text={lang === 'es' ? 'Currículum' : 'Resume'}
              icon={AiFillFilePdf}
            />
          </a>
          
        </div>
      </div>

      <div className="md:ml-auto mt-10 md:mt-0 flex justify-center items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] rounded-full blur-lg opacity-20"></div>
          <img
            src={profilePic}
            alt={aboutMe.name}
            className="w-[220px] h-[220px] object-cover border-4 border-white shadow-xl relative z-[5] rounded-full"
          />
        </div>
      </div>
    </div>
    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
      
    </div>
  </footer>
);
};

export default Footer;
