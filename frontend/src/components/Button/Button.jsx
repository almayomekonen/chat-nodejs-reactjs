import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      log out
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
