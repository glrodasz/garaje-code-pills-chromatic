import PropTypes from 'prop-types';
import "./Text.css";

function Text({ children }) {
  return <p className="text">{children}</p>;
}

Text.propTypes = {
  children: PropTypes.node.isRequired
};

export default Text;
