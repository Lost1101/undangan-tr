import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function BGPhoto({ path }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % path.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [path.length]);

    return (
        <div className='block m-auto w-full py-0 laptop:py-10'>
            <div className="relative w-80 h-72 laptop:w-72 laptop:h-72 top-0">
            {path.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`carousel-image-${index}`}
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 rounded-t-full laptop:w-4/5 desktop:w-3/4 transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
            </div>
        </div>
    );
}

BGPhoto.propTypes = {
    path: PropTypes.arrayOf(PropTypes.string).isRequired, // Specify path should be an array of strings
};