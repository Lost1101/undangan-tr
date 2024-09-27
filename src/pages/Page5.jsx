import { useState } from "react";
import ContainerWSquare from "../components/Container-w-square";
import ContainerStory from "../components/ContainerStory";
import image from "../assets/image2.png";
import Title from "../components/Title";
import ImageCarousel from "../components/ImageCarousel";

export default function Page5(){
    const images =[
        '/src/assets/photos/img1.png', 
        '/src/assets/photos/img2.png',
        '/src/assets/photos/img3.png',
        '/src/assets/photos/img4.png',
        '/src/assets/photos/img5.png',
        '/src/assets/photos/img6.png',
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    return(
        <div id="story" className="min-h-screen my-28 p-5">
            <Title subcontent={'Let us tell you'} colorsub={'undangan-100'} content={'Our Story'} color={'undangan-100'}/>
                <div className="my-10">
                    <div className="mb-16">
                        <ContainerWSquare>
                            <ContainerStory image={image} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit, amet, consectetur elit.'} date={'11.11.11—'} morestyle={'text-right'}/>
                        </ContainerWSquare>
                    </div>
                    <div className="mb-16">
                        <ContainerWSquare>
                            <ContainerStory image={image} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit, amet, consectetur elit.'} date={'—11.11.11'} morestyle={'text-left'}/>
                        </ContainerWSquare>
                    </div>
                    <div className="mb-16">
                        <ContainerWSquare>
                            <ContainerStory image={image} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit, amet, consectetur elit.'} date={'11.11.11—'} morestyle={'text-right'}/>
                        </ContainerWSquare>
                    </div>
                    <div className="mb-16">
                        <ContainerWSquare>
                            <ContainerStory image={image} title={'Lorem Ipsum'} text={'Lorem ipsum dolor sit, amet, consectetur elit.'} date={'—11.11.11'} morestyle={'text-left'}/>
                        </ContainerWSquare>
                    </div>
            </div>
            <div>
                <div className="text-undangan-100 text-center">
                    <p className="text-xs">&#34;Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero soluta accusamus voluptate tempora repellat maiores aut quas numquam ea repudiandae dolorem amet exercitationem dolore architecto consectetur, id totam dolorum! &#34;</p>
                </div>
                <div className="my-16">
                <video className="w-full" muted controls autoPlay loop>
                    <source src="/src/assets/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                    <div className="flex flex-wrap my-10 justify-center">
                    {images.map((img, index) => <img className="w-1/3 m-3" key={index} src={img} onClick={() => openModal(index)}></img>)}
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