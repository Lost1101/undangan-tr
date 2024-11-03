import PropTypes from 'prop-types';

export default function Button ({icon, content, morestyle, ...props}){
    return(
        <button {...props} className={`rounded-lg p-2 px-5 flex duration-300 ${morestyle}`}><span className='mt-1 mr-2'>{icon}</span> {content}</button>
    )
}

Button.propTypes={
    icon: PropTypes.any,
    content: PropTypes.string,
    morestyle: PropTypes.string
}