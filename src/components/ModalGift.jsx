import PropTypes from 'prop-types';
import ContainerWSquare from './Container-w-square';

export default function ModalGift({children, setshow}){
    const handleClose = () => {
        setshow(false)
    }

    return(
        <div className='fixed z-30 top-0 left-0 w-full h-screen'>
            <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-75 z-0" />
            <div className='relative h-screen p-10'>
                <button className='absolute text-undangan-100 text-2xl w-10 h-10 right-0' onClick={handleClose}>&#10006;</button>
                <ContainerWSquare>
                    {children}
                </ContainerWSquare>
            </div>
        </div>
    )
}

ModalGift.propTypes = {
    children: PropTypes.node,
    setshow: PropTypes.func
}