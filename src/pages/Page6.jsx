import { useState } from "react";
import { PiGiftThin } from "react-icons/pi";
import ContainerWSquare from "../components/Container-w-square";
import Title from "../components/Title";
import Button from "../components/Button";
import gift from "../assets/gift.png";
import ModalGift from "../components/ModalGift";
import { FaRegCopy } from "react-icons/fa6";
import ContainerFade from "../components/Container-fade";
import BCA from '../assets/bca.png';
import BRI from '../assets/bri.png';

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
            <ContainerFade>
            <div className="p-5 laptop:w-3/5 laptop:m-auto desktop:mt-52">
                <ContainerWSquare animation={'duration-1000 opacity-100'}>
                    <Title content={'Hadiah Digital'} color={'undangan-400'}/>
                    <div className="my-5 text-xs text-center laptop:text-base">
                        <img src={gift} alt="" className="w-1/2 m-auto"/>
                        <p className="mt-5">Kami sangat berterima kasih atas doa dan dukungan yang telah diberikan. Setiap bentuk perhatian dari Bapak/Ibu/Saudara sangat berarti bagi kami dalam merayakan hari istimewa ini.</p>
                        <Button onClick={handleModal} icon={<PiGiftThin/>} content={'Klik disini'} morestyle={'bg-undangan-400 text-undangan-100 m-auto mt-5 hover:bg-undangan-300'}/>
                    </div>
                </ContainerWSquare>
                {show && 
                    <ModalGift setshow={setshow}>
                        <div className="laptop:flex laptop:m-auto laptop:w-fit">
                            <div className="text-center my-3 mx-5">
                                <h1 className="font-bold text-lg">A.N. Tiya Fathonah</h1>
                                <img src={BCA} alt="" className="w-72 m-auto my-5"/>
                                <p>NoRek. 0542128583</p>
                                <Button onClick={() => handleCopy('0542128583')} icon={<FaRegCopy />} content={'Copy'} morestyle={'border border-black m-auto mt-5 hover:bg-undangan-200'}/>
                            </div>
                            <div className="text-center my-3 mx-5">
                                <h1 className="font-bold text-lg">A.N. Rizal Gusdinar</h1>
                                <img src={BRI} alt="" className="w-56 m-auto my-5"/>
                                <p>NoRek. 059501026030507</p>
                                <Button onClick={() => handleCopy('059501026030507')} icon={<FaRegCopy />} content={'Copy'} morestyle={'border border-black m-auto mt-5 hover:bg-undangan-200'}/>
                            </div>
                        </div>
                    </ModalGift>
                }
            </div>
            </ContainerFade>
        </div>
    )
}