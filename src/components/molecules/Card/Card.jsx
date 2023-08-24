import PropTypes from "prop-types";
import Image from "../../atoms/Image";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import "./Card.css";

function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}) {
  return (
    <div className="card">
      <Image src={imageSrc} alt={imageAlt} maxWidth="500px" />
      <Title>{title}</Title>
      <Text>{description}</Text>
      <div className="card-buttons">
        <Button primary isBlock>{primaryButtonText}</Button>
        <Button isBlock>{secondaryButtonText}</Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
};

export default Card;
