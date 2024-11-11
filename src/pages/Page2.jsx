import ContainerFade from '../components/Container-fade';
import bismillah from '../assets/bismillah.svg';
import pembatas from '../assets/pembatas3.png'
import Title from '../components/Title';
import ContainerWArch from '../components/Container-w-arch';
import ContainerBG from '../components/Container-BG';
import Groom1 from '../assets/profile1.jpg';
import Groom2 from '../assets/profile3.jpg';
import Bride1 from '../assets/profile2.jpg';
import Bride2 from '../assets/profile4.jpg';
import { useRef, useEffect, useState } from 'react';

export default function Page2(){
    const Groom = [
        Groom1, Groom2
    ];

    const Bride = [
        Bride1, Bride2
    ];

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
        <div className="min-h-screen" id='prayer'>
            <ContainerFade>
                <ContainerWArch>
                    <Title content={'Ucapan Doa'} color={'undangan-400'}/>
                    <div className='my-10'>
                        <img src={bismillah} alt="" className='w-2/3 m-auto laptop:w-3/5 desktop:w-2/3'/>
                        <div className='my-5 text-center text-xs laptop:text-sm desktop:text-xl'>
                            <p>&#34; Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir &#34;</p>
                            <p className='mt-5 text-base text-undangan-400 laptop:text-xl desktop:text-3xl'>— Q.s. Ar-Rum : 21 —</p>
                        </div>
                    </div>
                    <img src={pembatas} alt="" className='w-1/2 m-auto laptop:w-2/5 desktop:w-1/2'/>
                </ContainerWArch>
                <div className='my-20 laptop:w-1/2 m-auto'>
                    <Title subcontent={'Pasangan'} colorsub={'undangan-100'} content={'Mempelai'} color={'undangan-100'}/>
                    <div ref={containerRef} className={`text-white mt-10 ${ isVisible ? 'animate-fadeinfast' : 'opacity-0'}`}>
                        <p className='text-xs text-center laptop:text-base desktop:text-xl'>Di bawah langit yang sama, kami dipertemukan. Bersama kami melangkah dengan penuh harap dan doa, menyatukan hati dan impian untuk masa depan yang indah.</p>
                        <div className='mt-10 laptop:flex laptop:justify-between'>
                            <ContainerBG image={Bride} name={'Tiya Fathonah, S.Pd'} childth={'Putri dari'} parent1={'Bpk. Agus Suryana, BE &'} parent2={'Ibu Enung Noorwasliyah, S.E'} uname={'tiyafathonah'} insta={'https://www.instagram.com/tiyafathonah/'}/>
                            <span className='block text-4xl text-center text-white my-10 laptop:mt-28 laptop:text-6xl desktop:mt-40'>&</span>
                            <ContainerBG image={Groom} name={'drh. Rizal Gusdinar'} childth={'Putra dari'} parent1={'Bpk. H. Sutardi, S.Pd &'} parent2={'Ibu Hj. Nani, S.Pd'} uname={'rizalgusdinar'} insta={'https://www.instagram.com/rizalgusdinar/'}/>
                        </div>
                    </div>
                </div>
            </ContainerFade>
        </div>
    )
}