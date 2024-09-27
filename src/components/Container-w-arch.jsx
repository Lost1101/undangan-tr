import PropTypes from 'prop-types';

export default function ContainerWArch({children}){
    return(
        <div className='rounded-t-full bg-undangan-100 p-5 shadow-xl' >
            <div className='border rounded-t-full border-dashed border-undangan-300 p-5 pt-20'>
                {children}
            </div>
        </div>
    )
}

ContainerWArch.propTypes={
    children: PropTypes.node
}