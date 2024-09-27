import { useState } from "react"
import Logo from '../assets/Logo.png';
import Button from './Button';
import Flower from '../assets/Flower.png'
import { IoMdMail } from "react-icons/io";
import PropTypes from 'prop-types';

export default function Cover({trigger}){
    const [class1, setClass1] = useState(false);
    const [class2, setClass2] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    const handleButtonClick = () =>{
        setClass1(true)
        trigger(true)
        setTimeout(() => {
            setClass2(true);
            setIsRemoved(true);
        }, 1500); 
    }

    if (isRemoved) {
        return null;
    }

    return(
        <div className={`bg-undangan-300 w-full h-full fixed z-20 top-0 left-0 font-pwdisplay text-undangan-100 text-sm ${class1? 'animate-fade' : ''} ${class2? 'hidden' : 'block'}`}>
            <img src={Flower} alt="" className="w-2/5 absolute -top-10 -left-10 animate-flower"/>
            <div className="border-2 border-undangan-100 w-fit m-auto p-12 mt-20 relative rounded-t-full">
                <div className='text-center text-sm'>
                    <p>The Wedding of</p>
                    <img src={Logo} alt="" className=' w-44 m-auto py-10'/>
                    <p>Sabtu, 14 Desember 2024</p>
                </div>
                <div className='mt-5 text-center text-xs'>
                    <p className='block'>Kepada Yth.</p>
                    <p className='block'>Bapak/Ibu/Saudara/i</p>
                    <p className='block font-bold mt-2 text-lg'>Klajik</p>
                </div>
                <div className='mt-8 m-auto w-fit'>
                    <Button morestyle={'bg-white text-undangan-400'} icon={<IoMdMail />} content={'Buka Undangan'} onClick={handleButtonClick}/>
                </div>
            </div>
            <img src={Flower} alt="" className="w-2/5 absolute -bottom-10 -right-10 animate-flower"/>
        </div>
    )
}

Cover.propTypes={
    trigger : PropTypes.any
}