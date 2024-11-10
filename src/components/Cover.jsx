import { useState } from "react"
import Button from './Button';
import { IoMdMail } from "react-icons/io";
import PropTypes from 'prop-types';
import DisplayName from './DisplayName';
import BgCover from '../assets/bgcover.jpg';

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
        <div className={`w-full h-full fixed z-20 top-0 left-0 font-pwdisplay text-undangan-100 bg-cover text-sm ${class1? 'animate-fade' : ''} ${class2? 'hidden' : 'block'} laptop:bg-50`} style={{ backgroundImage: `url(${BgCover})` }}>
            <div></div>
            <div className="fixed top-0 left-0 w-full h-screen opacity-75 z-0 bg-undangan-500"></div>
            <div className="w-fit m-auto p-12 relative top-36 laptop:p-16 laptop:mt-7 desktop:mt-32 desktop:p-28">
                <div className='text-center text-sm laptop:text-xl desktop:text-3xl'>
                    <p className="mt-7 text-lg">Wedding Invitation</p>
                    <h1 className="text-4xl mb-5">Tiya & Rizal</h1>
                </div>
                <div className='mt-5 text-center text-xs laptop:text-base desktop:text-xl'>
                    <p className='block'>Kepada Yth.</p>
                    <p className='block'>Bapak/Ibu/Saudara/i</p>
                    <DisplayName/>
                </div>
                <div className='mt-4 m-auto w-fit'>
                    <Button morestyle={'bg-white text-undangan-400 desktop:text-xl desktop:p-3 hover:bg-undangan-200'} icon={<IoMdMail />} content={'Buka Undangan'} onClick={handleButtonClick}/>
                </div>
            </div>
        </div>
    )
}

Cover.propTypes={
    trigger : PropTypes.any
}