// styles is a prop
import React from "react";
const Button = ({ styles, text, icon }) => {
  const classNames = `py-3 px-6 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] font-poppins font-medium text-[14px] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all outline-none ${styles ?? ''} rounded-full`

  return (
    icon ? (
      <button
        type="button"
        className={classNames}
      >
        {React.createElement(icon)}&nbsp;{text}
      </button>
    ) : (
      <button
        type="button"
        className={classNames}
      >
        {text}
      </button>
    )
  )
};

export default Button;
