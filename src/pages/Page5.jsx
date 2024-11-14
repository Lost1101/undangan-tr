import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../addCSS/swiper.css';
import { Autoplay } from 'swiper/modules';
import ContainerWSquare from "../components/Container-w-square";
import ContainerStory from "../components/ContainerStory";
import Title from "../components/Title";
import img1 from "../assets/photos/img1.jpg";
import img2 from "../assets/photos/img2.jpg";
import img3 from "../assets/photos/img3.jpg";
import img4 from "../assets/photos/img4.jpg";
import img5 from "../assets/photos/img5.jpg";
import img6 from "../assets/photos/img6.jpg";
import img7 from "../assets/photos/img7.jpg";
import img8 from "../assets/photos/img8.jpg";
import story1 from "../assets/story1.jpg";
import story2 from "../assets/story2.jpg";
import story3 from "../assets/story3.jpg";
import story4 from "../assets/story4.jpg";

export default function Page5(){
    const images =[
        img1, img2, img3, img4, img5, img6, img7, img8
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    return(
        <div id="story" className="min-h-screen my-28 laptop:w-1/2 m-auto">
            <Title subcontent={'Let us tell you'} colorsub={'undangan-100'} content={'Our Story'} color={'undangan-100'}/>
                <div className="my-10 p-5">
                    <div className="mb-16">
                        <ContainerWSquare animation={'animate-fadeInRight'}>
                            <ContainerStory image={story1} title={'Perkenalan'} date={'2003 —'} morestyle={'text-right laptop:text-center'}/>
                        </ContainerWSquare>
                    </div>
                    <div className="mb-16">
                        <ContainerWSquare animation={'animate-fadeInLeft'}>
                            <ContainerStory image={story2} title={'Bertemu Kembali'} date={'— 2023'} morestyle={'text-left laptop:text-center'}/>
                        </ContainerWSquare>
                    </div>
                    <div className="mb-16">
                        <ContainerWSquare animation={'animate-fadeInRight'}>
                            <ContainerStory image={story3} title={'Berkomitmen'} date={'2023 —'} morestyle={'text-right laptop:text-center'}/>
                        </ContainerWSquare>
                    </div>
                    <div>
                        <ContainerWSquare animation={'animate-fadeInLeft'}>
                            <ContainerStory image={story4} title={'Satu Tuju'} date={'— 2024'} morestyle={'text-left laptop:text-center'}/>
                        </ContainerWSquare>
                    </div>
            </div>
            <div>
                <div className="text-undangan-100 text-center p-5">
                    <p className="text-xs laptop:text-base desktop:text-xl">Menikah bukan soal cepat atau lambat. Namun, siapa yang siap mengemban amanah yang besar. Kami berharap kebahagiaan ini dapat menjadi awal dari cerita yang lebih indah, penuh cinta dan doa.</p>
                </div>
                <div className="my-16">
                    <Swiper
                    slidesPerView={1.5}
                    centeredSlides={true}
                    spaceBetween={10}
                    loop={true}
                    grabCursor={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    >
                        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}