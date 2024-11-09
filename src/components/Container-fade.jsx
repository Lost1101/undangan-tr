import PropTypes from 'prop-types';

export default function ContainerFade({children}){
    return(
        <div>
            <div className="bg-undangan-300 p-5 py-20">
                {children}
            </div>
        </div>
    )
}

ContainerFade.propTypes={
    children: PropTypes.node
}