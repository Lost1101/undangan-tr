import PropTypes from 'prop-types';

export default function Title({subcontent, content, colorsub, color}){
    return(
        <div>
            <h1 className={`font-nanumgoth block text-center text-sm text-${colorsub}`}>{subcontent}</h1>
            <h1 className={`block text-center text-4xl text-${color}`}>{content}</h1>
        </div>
    )
}

Title.propTypes = {
    subcontent: PropTypes.string,
    content: PropTypes.string,
    colorsub: PropTypes.string,
    color: PropTypes.string
}