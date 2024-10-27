import './index.css';
import Heading from '../../components/heading';
import Feature from '../../components/feature';
import tech01 from '/tech-01.png';
import tech02 from '/tech-02.png';
import tech03 from '/tech-03.png';
import tech04 from '/tech-04.png';

const Technology = () => {

  const features = [
    {
      heading: 'Cloud Storage',
      text: 'Access your account from anywhere in the world on any device',
      img: tech01,
    },
    {
      heading: 'Secure',
      text: 'All your information is stored on secure cloud servers',
      img: tech02,
    },
    {
      heading: 'PDF Download',
      text: 'Download any of your reports in PDF format',
      img: tech03,
    },
    {
      heading: 'CSV Download',
      text: 'All your information is stored on secure cloud servers',
      img: tech04,
    },
  ];

  return (
    <div className="technology">
      <div className="container">
        <Heading level={2}>
          Technology
        </Heading>
        <div className="features">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Technology;
