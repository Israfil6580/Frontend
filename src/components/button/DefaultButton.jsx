import PropTypes from "prop-types";
import "../../index.css"; // Import custom CSS file

const DefaultButton = ({ text, icon }) => {
  return (
    <button className="relative flex justify-center items-center gap-[10px] lg:py-4 py-3 lg:px-9 px-6 rounded-[78px] bg-gradient-to-r from-[#1692DC] to-[#231DDF] text-white">
      <span className="text-lg lg:text-xl font-semibold leading-[30px] tracking-wide">
        {text}
      </span>
      {icon && <img src={icon} alt="" className="w-6 h-6" />}
    </button>
  );
};

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default DefaultButton;
