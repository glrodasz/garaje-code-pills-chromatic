import PropTypes from 'prop-types';
import "./Title.css";

function Title({ children }) {
  return <h2 className="title">{children}</h2>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
