import PropTypes from "prop-types";

const TransparentButton = ({ text, icon }) => {
  return (
    <button
      type="button"
      className="flex justify-center border border-semi-transparent-white items-center gap-[10px] py-4 px-9 rounded-[78px] bg-light-transparent-white text-white"
    >
      <span className="text-xl font-normal leading-[30px] tracking-wide">
        {text}
      </span>
      {icon && <img src={icon} alt="" className="w-6 h-6" />}
    </button>
  );
};

TransparentButton.propTypes = {
  text: PropTypes.string.isRequired, // 'text' is required and should be a string
  icon: PropTypes.string, // 'icon' is optional and should be a string
};

export default TransparentButton;
