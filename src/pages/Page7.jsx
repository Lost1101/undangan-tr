import Title from '../components/Title';
import logo from '../assets/Logo.png';
import flower from '../assets/pembatas3w.png';

export default function Page7(){
    return(
        <div className="text-undangan-100 text-center">
            <div className="bg-gradient-to-t from-undangan-300 h-32 w-full"></div>
            <div className="h-full bg-undangan-300 p-5">
                <div className="py-16 laptop:w-3/5 m-auto">
                    <Title content={'Terima kasih'} />
                    <p className="my-10 text-xs laptop:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa dolorum pariatur at autem hic? Vel deleniti adipisci ducimus distinctio nisi laborum cupiditate quam, nesciunt commodi, quibusdam dolores placeat tenetur?</p>
                    <img src={logo} alt="" className='w-1/2 m-auto my-5 laptop:w-1/3 laptop:my-0 laptop:mt-20 laptop:mb-7'/>
                    <img src={flower} alt="" className='w-1/2 m-auto laptop:w-2/5' />
                    <span className='my-10 block laptop:text-xl'>Invitation By &#169;Lost/Kamii | 2024</span>
                </div>
            </div>
        </div>
    )
}