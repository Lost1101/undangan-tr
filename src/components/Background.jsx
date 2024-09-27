import PropTypes from 'prop-types';
import image1 from '../assets/image1.jpeg';

export default function Background({ children }) {
  return (
    <div>
      <div style={{ backgroundImage: `url(${image1})` }} className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-0"/>
      <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-75 z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.node,
};