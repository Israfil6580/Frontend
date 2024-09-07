import PropTypes from "prop-types";

const Highlight = ({ icon, text }) => {
  return (
    <span className="inline-flex justify-center items-center gap-2.5 p-3 px-6 bg-semi-transparent-white-dark rounded-custom">
      <img className="h-5 w-5 object-cover" src={icon} alt="highlight icon" />
      <span className="text-white font-red-hat text-base font-normal leading-custom tracking-custom uppercase">
        {text}
      </span>
    </span>
  );
};

Highlight.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Highlight;
