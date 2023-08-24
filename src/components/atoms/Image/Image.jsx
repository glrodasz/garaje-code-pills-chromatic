import PropTypes from "prop-types";
import "./Image.css";

export default function Image({ src, alt, maxWidth }) {
  return (
    <img src={src} alt={alt} className="image" style={{ maxWidth: maxWidth }} />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
};
