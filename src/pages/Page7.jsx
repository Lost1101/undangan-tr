import flower from '../assets/pembatas3w.png';

export default function Page7(){
    return(
        <div className="text-undangan-100 text-center">
            <div className="h-full p-5">
                <div className="py-16 laptop:w-3/5 m-auto">
                    <h1 className='text-4xl'>Terima Kasih</h1>
                    <p className="my-10 text-xs laptop:text-base">Doa dan dukungan Anda adalah anugerah terbesar bagi kami. Kami sangat berterima kasih dan berharap bisa merayakan hari istimewa ini bersama Anda. Sampai jumpa di hari kebahagiaan kami.</p>
                    <h1 className="text-3xl mb-5">Tiya & Rizal</h1>
                    <img src={flower} alt="" className='w-1/2 m-auto laptop:w-2/5' />
                    <span className='my-10 block laptop:text-xl'>Invitation By &#169;Lost/Kamii | 2024</span>
                </div>
            </div>
        </div>
    )
}