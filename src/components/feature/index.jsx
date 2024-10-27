import Heading from '../heading/index';
import Text from '../text/index';
import './index.css'

/**
 * A small container with an icon, heading, and short paragraph of text.
 * @param {string} icon - The name of the icon to be displayed. Refer to the "map" object in the "Icon" component.
 * @param {string} heading - The heading of the feature.
 * @param {string} text - The short paragraph of text describing the feature.
 * @returns {JSX.Element} - The rendered Feature component.
 */
const Feature = ({ img, heading, text }) => {

  return (
    <div className="feature">
      <img src={img} alt={heading} />
      <Heading level={3}>{heading}</Heading>
      <Text>{text}</Text>
    </div>
  );
};

export default Feature;
