import ContainerFade from "../components/Container-fade";
import ContainerWArch from "../components/Container-w-arch";
import { IoLocationOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import Button from "../components/Button";
import ring from "../assets/ring.png"
import Title from "../components/Title";

export default function Page4(){
    return(
        <div className="min-h-screen">
            <ContainerFade>
                <ContainerWArch>
                    <Title subcontent={'Waktu & Tempat'} colorsub={'undangan-400'} content={'Acara Pernikahan'} color={'undangan-400'}/>
                    <div className="my-5">
                        <img src={ring} alt="" className="w-1/2 m-auto my-10 laptop:w-2/5"/>
                        <div className="text-center my-10">
                            <h1 className="font-bold text-xl laptop:text-2xl desktop:text-3xl">Akad</h1>
                            <div className="text-sm">
                                <span className="block laptop:text-lg desktop:text-2xl">Sabtu, 14 Desember 2024</span>
                                <span className="block laptop:text-lg desktop:text-2xl">08.00 WIB</span>
                            </div>
                            <span className="block font-bold text-sm laptop:text-base laptop:mt-5 desktop:text-xl"><IoLocationOutline className="inline-block"/>Graha HT Sumantri</span>
                            <span className="block text-xs w-4/5 m-auto text-slate-500 desktop:text-base">Jl. Ir. H. Juanda Komplek Ruko HT Sumantri No.Kav.15, Panyingkiran, Kec. Cipedes, Kota Tasikmalaya, Jawa Barat 46151</span>
                            <div className="w-fit m-auto mt-3">
                                <a href="https://maps.app.goo.gl/ki6JWW8HxzXagc1i7">
                                    <Button icon={<CiLocationArrow1 />} content={'Lihat Lokasi'} morestyle={'border border-black text-sm hover:bg-undangan-200 laptop:text-lg'}/>
                                </a>
                            </div>
                        </div>
                        <div className="text-center my-10">
                            <h1 className="font-bold text-xl laptop:text-2xl desktop:text-3xl">Resepsi</h1>
                            <div className="text-sm">
                                <span className="block laptop:text-lg desktop:text-2xl">Sabtu, 14 Desember 2024</span>
                                <span className="block laptop:text-lg desktop:text-2xl">11.00 - 14.00 WIB</span>
                            </div>
                            <span className="block font-bold text-sm laptop:text-base laptop:mt-5"><IoLocationOutline className="inline-block desktop:text-xl"/>Graha HT Sumantri</span>
                            <span className="block text-xs w-4/5 m-auto text-slate-500 desktop:text-base">Jl. Ir. H. Juanda Komplek Ruko HT Sumantri No.Kav.15, Panyingkiran, Kec. Cipedes, Kota Tasikmalaya, Jawa Barat 46151</span>
                            <div className="w-fit m-auto mt-3">
                                <a href="https://maps.app.goo.gl/ki6JWW8HxzXagc1i7">
                                    <Button icon={<CiLocationArrow1 />} content={'Lihat Lokasi'} morestyle={'border border-black text-sm hover:bg-undangan-200 laptop:text-lg'}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </ContainerWArch>
            </ContainerFade>
        </div>
    )
}