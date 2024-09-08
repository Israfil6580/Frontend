import PropTypes from "prop-types";

const TransparentButton = ({ text, icon }) => {
  return (
    <button
      type="button"
      className="flex justify-center items-center gap-2 lg:py-4 py-3 lg:px-9 px-6 rounded-full border border-semi-transparent-white bg-light-transparent-white text-white hover:bg-light-transparent-white-forhover transition-all duration-300"
    >
      <span className="text-lg lg:text-xl font-normal leading-8 tracking-wide">
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
