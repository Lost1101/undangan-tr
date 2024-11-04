import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';

export default function Title({subcontent, content, colorsub, color}){
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
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
        <div>
            <h1 ref={containerRef} className={`font-nanumgoth block text-center text-sm text-${colorsub} laptop:text-base desktop:text-2xl transition-opacity ${
                isVisible ? 'animate-fadeInTop' : 'opacity-0'
            }`}>{subcontent}</h1>
            <h1 ref={containerRef} className={`block text-center text-4xl text-${color} laptop:text-4xl desktop:text-5xl transition-opacity ${
                isVisible ? 'animate-fadeInTopLong' : 'opacity-0'
            }`}>{content}</h1>
        </div>
    )
}

Title.propTypes = {
    subcontent: PropTypes.string,
    content: PropTypes.string,
    colorsub: PropTypes.string,
    color: PropTypes.string
}