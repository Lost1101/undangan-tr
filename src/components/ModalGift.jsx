import PropTypes from 'prop-types';

export default function ModalGift({children, setshow}){
    const handleClose = () => {
        setshow(false)
    }

    return(
        <div className='fixed z-30 top-0 left-0 w-full h-screen'>
            <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-75 z-0" />
            <button className='absolute text-undangan-100 text-2xl w-10 h-10 right-0 z-10' onClick={handleClose}>&#10006;</button>
            <div className='relative h-screen p-10 desktop:top-40'>
                <div className={`bg-undangan-100 p-5 shadow-xl transition-opacity overflow-hidden`}>
                    <div className='border border-dashed border-undangan-300 p-5 laptop:border-2'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalGift.propTypes = {
    children: PropTypes.node,
    setshow: PropTypes.func
}