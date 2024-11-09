import PropTypes from 'prop-types';
import { GiLinkedRings } from "react-icons/gi";
import { ImImages } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { ImGift } from "react-icons/im";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import Sound from './audio.mp3';

export default function Navbar({visible}){ 
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMusicOn, setIsMusicOn] = useState(true);
    const audioRef = useRef(null);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
                .then(() => setIsFullscreen(true))
                .catch((err) => console.error(`Error trying to enable fullscreen: ${err}`));
        } else {
            document.exitFullscreen()
                .then(() => setIsFullscreen(false))
                .catch((err) => console.error(`Error trying to exit fullscreen: ${err}`));
        }
    };

    useEffect(() => {
        // Buat objek audio hanya sekali
        audioRef.current = new Audio(Sound);
        return () => {
            // Bersihkan audio saat komponen di-unmount
            audioRef.current.pause();
            audioRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (visible && isMusicOn) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [visible, isMusicOn]);

    useEffect(() => {
        // Fungsi untuk menangani perubahan visibilitas tab
        const handleVisibilityChange = () => {
            if (document.hidden) {
                audioRef.current.pause();
            } else if (visible && isMusicOn) {
                audioRef.current.play();
            }
        };

        // Pasang event listener untuk 'visibilitychange'
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Hapus event listener saat komponen di-unmount
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [visible, isMusicOn]);

    const toggleMusic = () => {
        setIsMusicOn((prevState) => !prevState);
    };

    return(
        <div>
            <div>
                <button className={"fixed z-10 top-5 right-2 bg-white rounded-full px-0 w-10 h-10 desktop:w-20 desktop:h-20"} onClick={toggleFullscreen}><span className='mt-1 mr-2'>{isFullscreen ? <MdFullscreenExit className="text-2xl my-2 mx-2 desktop:text-5xl desktop:my-4 desktop:mx-4"/> : <MdFullscreen className="text-2xl my-2 mx-2 desktop:text-5xl desktop:my-4 desktop:mx-4"/>}</span></button>
                <button className={"fixed z-10 top-20 right-2 bg-white rounded-full px-0 w-10 h-10 desktop:w-20 desktop:h-20 desktop:top-32"} onClick={toggleMusic}><span className='mt-1 mr-2'>{isMusicOn ? <FaVolumeHigh className="my-3 mx-3 desktop:text-5xl desktop:my-4 desktop:mx-4"/> : <FaVolumeXmark className="my-3 mx-3 desktop:text-5xl desktop:my-4 desktop:mx-4"/>}</span></button>
            </div>
            <div className="fixed z-10 bottom-0 left-0 right-0 flex justify-center">
                <div className="bg-white w-full p-3 rounded-t-xl laptop:w-2/3">
                    <ul className="flex justify-evenly text-xl desktop:text-4xl">
                        <li><a href="#home"><IoHomeOutline /></a></li>
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

Navbar.propTypes = {
    visible : PropTypes.bool
}