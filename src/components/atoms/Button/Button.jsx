import PropTypes from "prop-types";
import "./Button.css";

function Button({ children, primary, isBlock }) {
  const typeClass = primary ? "button-primary" : "button-secondary";
  const isBlockClass = isBlock ? "button-block" : "";
  return <button className={`${typeClass} ${isBlockClass}`}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  isBlock: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};

export default Button;
