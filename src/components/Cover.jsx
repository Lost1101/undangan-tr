import { useState } from "react"
import Logo from '../assets/Logo.png';
import Button from './Button';
import Flower from '../assets/Flower.png'
import { IoMdMail } from "react-icons/io";
import PropTypes from 'prop-types';
import DisplayName from "./DisplayName";

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
            <img src={Flower} alt="" className="w-2/5 absolute -top-10 -left-10 animate-flower laptop:-top-40 laptop:-left-40 laptop:w-1/3"/>
            <div className="border-2 border-undangan-100 w-fit m-auto p-12 mt-20 relative rounded-t-full laptop:p-16 laptop:mt-7 desktop:mt-32 desktop:p-28">
                <div className='text-center text-sm laptop:text-xl desktop:text-3xl'>
                    <p>The Wedding of</p>
                    <img src={Logo} alt="" className=' w-44 m-auto py-10 laptop:w-56 desktop:w-72'/>
                    <p>Sabtu, 14 Desember 2024</p>
                </div>
                <div className='mt-5 text-center text-xs laptop:text-base desktop:text-xl'>
                    <p className='block'>Kepada Yth.</p>
                    <p className='block'>Bapak/Ibu/Saudara/i</p>
                    <DisplayName/>
                </div>
                <div className='mt-8 m-auto w-fit'>
                    <Button morestyle={'bg-white text-undangan-400 desktop:text-xl desktop:p-3 hover:bg-undangan-200'} icon={<IoMdMail />} content={'Buka Undangan'} onClick={handleButtonClick}/>
                </div>
            </div>
            <img src={Flower} alt="" className="w-2/5 absolute -bottom-10 -right-10 animate-flower laptop:-absolute-40 laptop:-right-40 laptop:w-1/3"/>
        </div>
    )
}

Cover.propTypes={
    trigger : PropTypes.any
}