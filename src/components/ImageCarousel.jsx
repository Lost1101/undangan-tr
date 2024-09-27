import PropTypes from 'prop-types';

export default function ImageCarousel({ setshow, images, initialIndex, setCurrentIndex }){
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleClose = () => {
        setshow(false)
    }

    return (
        <div className="fixed z-30 top-0 left-0 w-full h-screen">
            <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-75 z-0" />
            <div className='relative h-screen'>
                <button className='w-fit absolute text-white p-5 text-2xl right-0' onClick={handleClose}>&#10006;</button>
                <div className='block'>
                    <img src={images[initialIndex]} alt="" className='w-5/6 m-auto pt-20'/>
                </div>
                <div className='block text-4xl mt-10 w-fit m-auto'>
                    <button className='text-white mx-10' onClick={handlePrev}>&#10094;</button>
                    <button className='text-white mx-10' onClick={handleNext}>&#10095;</button>
                </div>
            </div>
        </div>
    );
};

ImageCarousel.propTypes = {
    images: PropTypes.array,
    setshow: PropTypes.func,
    initialIndex: PropTypes.number,
    setCurrentIndex: PropTypes.func,
  };
