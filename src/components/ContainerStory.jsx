import PropTypes from 'prop-types';

export default function ContainerStory({image, title, text, date, morestyle}){
    return(
        <div className={`text-undangan-400 ${morestyle}`}>
            <h1 className='font-bold text-xl laptop:text-2xl desktop:text-3xl'>{title}</h1>
            <img src={image} alt="" className='laptop:w-2/3 laptop:m-auto'/>
            <p className='text-xs laptop:text-base desktop:text-xl'>{text}</p>
            <p className='text-lg laptop:text-2xl desktop:text-3xl'>{date}</p>
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