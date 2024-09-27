import { useState } from "react";
import { PiGiftThin } from "react-icons/pi";
import ContainerWSquare from "../components/Container-w-square";
import Title from "../components/title";
import Button from "../components/Button";
import gift from "../assets/gift.png";
import ModalGift from "../components/ModalGift";
import { FaRegCopy } from "react-icons/fa6";

export default function Page6(){
    const [show, setshow] = useState(false)

    const handleModal = () =>{
        setshow(true)
    }

    const handleCopy = (content) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(content).then(() => {
            }).catch(err => {
                alert('Failed to copy: ', err);
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = content;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    };

    return(
        <div id="gift" className="min-h-screen">
            <div className="p-5">
                <ContainerWSquare>
                    <Title content={'Hadiah Digital'} color={'undangan-400'}/>
                    <div className="my-5 text-xs text-center">
                        <img src={gift} alt="" className="w-1/2 m-auto"/>
                        <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, eum veniam. Similique ipsa voluptatum nisi, neque magni provident suscipit quas officiis consequatur minima mollitia, illum nam praesentium. Maxime, doloremque impedit!</p>
                        <Button onClick={handleModal} icon={<PiGiftThin/>} content={'Klik disini'} morestyle={'bg-undangan-400 text-undangan-100 m-auto mt-5'}/>
                    </div>
                </ContainerWSquare>
                {show && 
                    <ModalGift setshow={setshow}>
                        <div className="text-center my-5">
                            <h1 className="font-bold text-lg">A.N. Klajiknyanya</h1>
                            <img src="https://dummyimage.com/400x400/000/fff" alt="" className="w-1/2 m-auto"/>
                            <p>No. 101010100110</p>
                            <Button onClick={() => handleCopy('101010100110')} icon={<FaRegCopy />} content={'Copy'} morestyle={'border border-black m-auto mt-5'}/>
                        </div>
                        <div className="text-center my-5">
                            <h1 className="font-bold text-lg">A.N. Klajiknyanya</h1>
                            <img src="https://dummyimage.com/400x400/000/fff" alt="" className="w-1/2 m-auto"/>
                            <p>No. 101010100110</p>
                            <Button icon={<FaRegCopy />} content={'Copy'} morestyle={'border border-black m-auto mt-5'}/>
                        </div>
                    </ModalGift>
                }
            </div>
        </div>
    )
}