import { PropTypes } from "prop-types";
import './Image.css';

export default function Image({ src, alt }) {
  return <img src={src} alt={alt} className="image-atom" />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
