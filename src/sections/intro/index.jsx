import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';

const Intro = () => {
  return (
    <div className="intro">
      <div className='container'>
        <Heading color="white" level={1} className="heading">
          CLOUDBUDGET
        </Heading>
        <Text size='2.4rem' color="white" className="text">
          Cloud budget management for everyone. Only €69.95 a Month After a 7 Day Trial of <br/>Up to €4.99
        </Text>
        <a href="#" className="btn">SIGN UP</a>
      </div>
    </div>
  )
};

export default Intro;
