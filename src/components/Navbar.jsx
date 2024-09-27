import { GiLinkedRings } from "react-icons/gi";
import { ImImages } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { ImGift } from "react-icons/im";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";
import klajik from "../assets/klajik.jpeg";
import Button from "./button";

export default function Navbar(){  
    return(
        <div>
            <div>
                <Button icon={<FaArrowsUpDownLeftRight className="ml-3"/>} morestyle={'fixed top-5 right-2 bg-white rounded-full px-0 w-10 h-10'}/>
                <Button icon={<FaVolumeHigh className="ml-3"/>} morestyle={'fixed top-16 right-2 bg-white rounded-full px-0 w-10 h-10'}/>
            </div>
            <div className="fixed z-10 bottom-0 left-0 right-0 flex justify-center">
                <div className="bg-white w-5/6 p-3 rounded-t-xl">
                    <ul className="flex justify-evenly text-xl">
                        <li><a href="#home"><img src={klajik} alt="" className="w-6 h-6 rounded-full"/></a></li>
                        <li><a href="#prayer"><GiLinkedRings /></a></li>
                        <li><a href="#date"><ImCalendar /></a></li>
                        <li><a href="#story"><ImImages /></a></li>
                        <li><a href="#gift"><ImGift /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}