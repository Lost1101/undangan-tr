import PropTypes from 'prop-types';

export default function ContainerFade({children}){
    return(
        <div>
            <div className="bg-gradient-to-t from-undangan-300 h-32 w-full"></div>
            <div className="bg-undangan-300 p-5 py-20">
                {children}
            </div>
            <div className="bg-gradient-to-b from-undangan-300 h-32 w-full"></div>
        </div>
    )
}

ContainerFade.propTypes={
    children: PropTypes.node
}