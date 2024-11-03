import { useState } from "react";
import ContainerWSquare from "../components/Container-w-square";
import ContainerStory from "../components/ContainerStory";
import image from "../assets/image2.png";
import Title from "../components/Title";
import ImageCarousel from "../components/ImageCarousel";
import video from "../assets/video.mp4";
import img1 from "../assets/photos/img1.jpg";
import img2 from "../assets/photos/img2.jpg";
import img3 from "../assets/photos/img3.jpg";
import img4 from "../assets/photos/img4.jpg";
import img5 from "../assets/photos/img5.jpg";
import img6 from "../assets/photos/img6.jpg";
import img7 from "../assets/photos/img7.jpg";
import img8 from "../assets/photos/img8.jpg";

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
        <div id="story" className="min-h-screen my-28 p-5 laptop:w-1/2 m-auto">
            <Title subcontent={'Let us tell you'} colorsub={'undangan-100'} content={'Our Story'} color={'undangan-100'}/>
                <div className="my-10">
                    <div className="mb-16">
                        <ContainerWSquare animation={'animate-fadeInRight'}>
                            <ContainerStory image={image} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit, amet, consectetur elit.'} date={'11.11.11—'} morestyle={'text-right laptop:text-center'}/>
                        </ContainerWSquare>
                    </div>
                    <div className="mb-16">
                        <ContainerWSquare animation={'animate-fadeInLeft'}>
                            <ContainerStory image={image} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit, amet, consectetur elit.'} date={'—11.11.11'} morestyle={'text-left laptop:text-center'}/>
                        </ContainerWSquare>
                    </div>
                    <div className="mb-16">
                        <ContainerWSquare animation={'animate-fadeInRight'}>
                            <ContainerStory image={image} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit, amet, consectetur elit.'} date={'11.11.11—'} morestyle={'text-right laptop:text-center'}/>
                        </ContainerWSquare>
                    </div>
                    <div className="mb-16">
                        <ContainerWSquare animation={'animate-fadeInLeft'}>
                            <ContainerStory image={image} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit, amet, consectetur elit.'} date={'—11.11.11'} morestyle={'text-left laptop:text-center'}/>
                        </ContainerWSquare>
                    </div>
            </div>
            <div>
                <div className="text-undangan-100 text-center">
                    <p className="text-xs laptop:text-base desktop:text-xl">&#34;Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero soluta accusamus voluptate tempora repellat maiores aut quas numquam ea repudiandae dolorem amet exercitationem dolore architecto consectetur, id totam dolorum! &#34;</p>
                </div>
                <div className="my-16">
                <video className="w-full" muted controls autoPlay loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                    <div className="flex flex-wrap my-10 justify-center">
                    {images.map((img, index) => <img className="w-1/3 m-3 rounded-xl duration-300 cursor-pointer hover:grayscale hover:scale-110 laptop:w-1/4" key={index} src={img} onClick={() => openModal(index)}></img>)}
                    {isModalOpen && (
                        <div>
                            <ImageCarousel setshow={setIsModalOpen} images={images} initialIndex={selectedImageIndex} setCurrentIndex={setSelectedImageIndex} />
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}