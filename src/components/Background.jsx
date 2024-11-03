import PropTypes from 'prop-types';
import bg from '../assets/bg.jpg';

export default function Background({ children }) {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }} className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-0"/>
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