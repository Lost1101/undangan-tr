import Title from '../components/Title';
import logo from '../assets/Logo.png';
import flower from '../assets/pembatas3w.png';

export default function Page7(){
    return(
        <div className="text-undangan-100 text-center">
            <div className="bg-gradient-to-t from-undangan-300 h-32 w-full"></div>
            <div className="h-full bg-undangan-300 p-5">
                <div className="py-16">
                    <Title content={'Terima kasih'} />
                    <p className="my-10 text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa dolorum pariatur at autem hic? Vel deleniti adipisci ducimus distinctio nisi laborum cupiditate quam, nesciunt commodi, quibusdam dolores placeat tenetur?</p>
                    <img src={logo} alt="" className='w-1/2 m-auto my-5'/>
                    <img src={flower} alt="" className='w-1/2 m-auto' />
                    <span className='my-10 block'>Invitation By &#169;Lost/Kamii | 2024</span>
                </div>
            </div>
        </div>
    )
}