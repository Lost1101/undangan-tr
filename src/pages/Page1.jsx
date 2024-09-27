import border from '../assets/Border.png';
import logo from '../assets/Logo.png';
import Title from '../components/title';
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Page1(){
    return(
            <div id='home' className='min-h-screen relative top-32 font-pwdisplay'>
                <div className='text-white text-center'>
                    <img src={border} alt="" className='m-auto w-1/2'/>
                        <div className='m-auto my-10'>
                            <Title subcontent={'The Wedding of'}/>
                            <img src={logo} alt="" className='w-1/2 m-auto my-5'/>
                            <p>12.12.2024</p>
                        </div>
                    <img src={border} alt="" className='m-auto w-1/2 rotate-180'/>
                    <div className='animate-bounce py-32'>
                        <p>Swipe Up</p>
                        <FaAngleDoubleUp className='m-auto'/>
                    </div>
                </div>
            </div>
    )
}