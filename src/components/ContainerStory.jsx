import PropTypes from 'prop-types';

export default function ContainerStory({image, title, text, date, morestyle}){
    return(
        <div className={`text-undangan-400 ${morestyle}`}>
            <h1 className='font-bold text-xl'>{title}</h1>
            <img src={image} alt="" />
            <p className='text-xs'>{text}</p>
            <p className='text-lg'>{date}</p>
        </div>
    )
}

ContainerStory.propTypes = {
    image: PropTypes.any,
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    morestyle: PropTypes.string
  };