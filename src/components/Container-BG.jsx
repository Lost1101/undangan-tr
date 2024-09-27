import PropTypes from 'prop-types';
import BGPhoto from './B&Gphoto';
import { FaInstagram } from "react-icons/fa";

export default function ContainerBG({image, name, childth, parent1, parent2, insta}){
    return(
        <div className='text-white text-center'>
            <div className='w-fit m-auto'>
                <BGPhoto path={image}/>
            </div>
            <div className='mt-5'>
                <span className='block text-xl'>{name}</span>
                <div className='text-xs mt-3'>
                    <span className='block'>{childth}</span>
                    <span className='block'>{parent1}</span>
                    <span className='block'>{parent2}</span>
                </div>
            </div>
            <div className='mt-5 text-sm'>
                <a href={insta} className='underline'><FaInstagram className='m-auto inline-block'/>@Klajiknyanya</a>
            </div>
        </div>
    )
}

ContainerBG.propTypes={
    image: PropTypes.any,
    name: PropTypes.string,
    childth: PropTypes.string,
    parent1: PropTypes.string,
    parent2: PropTypes.string,
    insta: PropTypes.string
}