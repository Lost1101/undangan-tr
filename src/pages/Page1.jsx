import border from '../assets/Border.png';
import logo from '../assets/Logo.png';
import Title from '../components/Title';
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Page1(){
    return(
            <div id='home' className='min-h-screen relative top-32 font-pwdisplay laptop:top-10 laptop:w-1/2 laptop:m-auto desktop:w-2/3 desktop:top-28'>
                <div className='text-white text-center'>
                    <img src={border} alt="" className='m-auto w-1/2'/>
                        <div className='m-auto my-10'>
                            <Title subcontent={'The Wedding of'}/>
                            <img src={logo} alt="" className='w-1/2 m-auto my-5 laptop:w-1/3'/>
                            <p className='laptop:text-lg desktop:text-3xl'>14.12.2024</p>
                        </div>
                    <img src={border} alt="" className='m-auto w-1/2 rotate-180'/>
                    <div className='animate-bounce w-fit m-auto py-32 laptop:text-lg desktop:text-2xl'>
                        <a href="#prayer">
                            <p>Swipe Up</p>
                            <FaAngleDoubleUp className='m-auto'/>
                        </a>
                    </div>
                </div>
            </div>
    )
}