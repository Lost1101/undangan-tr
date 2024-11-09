import Cdown from "../components/Countdown";
import Title from "../components/Title";
import border from '../assets/Border.png';
import pembatas from '../assets/pembatas2w.png';
import { useRef, useEffect, useState } from 'react';

export default function Page3(){
    const targetDate = new Date('2024-12-14T00:00:00');
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
        <div id="date" className="text-undangan-100 min-h-screen py-20 laptop:w-2/3 laptop:m-auto">
            <div className="my-10 laptop:my-20">
                <img src={border} alt="" className='m-auto w-1/2 laptop:w-2/5'/>
                <div className="my-10 w-3/4 m-auto">
                    <Title subcontent={'Hitung Mundur'} content={'Hari Bahagia'} color={'undangan-100'}/>
                    <div ref={containerRef} className={`${ isVisible ? 'animate-fadeinfast' : 'opacity-0'}`}>
                        <div className="text-center text-sm my-5 laptop:text-lg">
                            <p>Sabtu, 14 Desember 2024</p>
                        </div>
                        <div className="my-10 w-2/3 m-auto full text-3xl">
                            <Cdown targetDate={targetDate}/>
                        </div>
                        <div className="text-center text-xs laptop:text-base">
                            <p>Dengan penuh kebahagiaan, kami mengundang Anda untuk bersama-sama menyaksikan momen istimewa kami. Ayo hitung mundur bersama menuju hari penuh cinta dan kebahagiaan ini, karena kami ingin berbagi kebahagiaan ini dengan Anda.</p>
                        </div>
                    </div>
                    <img src={pembatas} alt="" className="w-1/3 m-auto mt-7 laptop:w-1/5"/>
                </div>
                <img src={border} alt="" className='m-auto w-1/2 rotate-180 laptop:w-2/5'/>
            </div>
        </div>
    )
}