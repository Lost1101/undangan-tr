import Cdown from "../components/Countdown";
import Title from "../components/Title";
import border from '../assets/Border.png';
import pembatas from '../assets/pembatas2w.png'

export default function Page3(){
    const targetDate = new Date('2024-12-14T00:00:00');

    return(
        <div id="date" className="text-undangan-100 min-h-screen relative my-20">
            <div className="relative top-16">
                <img src={border} alt="" className='m-auto w-1/2'/>
                <div className="my-10 w-3/4 m-auto">
                    <Title subcontent={'Hitung Mundur'} content={'Hari Bahagia'} color={'undangan-100'}/>
                    <div className="text-center text-sm my-5">
                        <p>Minggu, 14 Desember 2024</p>
                    </div>
                    <div className="my-10 w-2/3 m-auto full text-3xl">
                        <Cdown targetDate={targetDate}/>
                    </div>
                    <div className="text-center text-xs">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a excepturi voluptates, dolore explicabo doloribus assumenda accusamus. Adipisci labore, tempore fuga mollitia, sint voluptatibus dolorem voluptatem repudiandae qui voluptas aut?</p>
                    </div>
                    <img src={pembatas} alt="" className="w-1/3 m-auto mt-7"/>
                </div>
                <img src={border} alt="" className='m-auto w-1/2'/>
            </div>
        </div>
    )
}