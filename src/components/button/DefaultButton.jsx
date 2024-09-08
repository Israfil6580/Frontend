import PropTypes from "prop-types";

const DefaultButton = ({ text, icon }) => {
  return (
    <button
      type="button"
      className="flex justify-center items-center gap-[10px] lg:py-4 py-3 lg:px-9 px-6 rounded-[78px] bg-gradient-to-r from-[#1692DC] to-[#231DDF] text-white"
    >
      <span className="text-lg lg:text-xl font-semibold leading-[30px] tracking-wide">
        {text}
      </span>
      {icon && <img src={icon} alt="" className="w-6 h-6" />}
    </button>
  );
};

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired, // 'text' is required and should be a string
  icon: PropTypes.string, // 'icon' is optional and should be a string
};

export default DefaultButton;
