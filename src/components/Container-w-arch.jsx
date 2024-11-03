import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ContainerWArch({ children }) {
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

    return (
        <div
            ref={containerRef}
            className={`rounded-t-full bg-undangan-100 p-5 shadow-xl transition-opacity overflow-hidden laptop:w-1/3 laptop:m-auto desktop:w-1/3 desktop:p-7 ${
                isVisible ? 'animate-fadeInTop' : 'opacity-0'
            }`}
        >
            <div className='border rounded-t-full border-dashed border-undangan-300 p-5 pt-20 laptop:border-2'>
                {children}
            </div>
        </div>
    );
}

ContainerWArch.propTypes = {
    children: PropTypes.node,
};