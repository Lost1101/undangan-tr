import PropTypes from 'prop-types';

export default function BGPhoto({path}){
    return(
        <div>
            <img src={path} alt="" className='w-60 h-80 rounded-t-full'/>
        </div>
    )
}

BGPhoto.propTypes = {
    path: PropTypes.any,
  };