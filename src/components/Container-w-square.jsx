import PropTypes from 'prop-types';

export default function ContainerWSquare({children}){
    return(
        <div className='bg-undangan-100 p-5 shadow-xl'>
            <div className='border border-dashed border-undangan-300 p-5'>
                {children}
            </div>
        </div>
    )
}

ContainerWSquare.propTypes={
    children: PropTypes.node
}