import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ContainerWSquare({children, animation}){

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return(
        <div ref={containerRef} className={`bg-undangan-100 rounded-lg p-5 shadow-xl transition-opacity overflow-hidden ${
            isVisible ? animation : 'opacity-0'
        }`}>
            <div className='border border-dashed border-undangan-300 p-5 laptop:border-2'>
                {children}
            </div>
        </div>
    )
}

ContainerWSquare.propTypes={
    children: PropTypes.node,
    animation: PropTypes.string
}