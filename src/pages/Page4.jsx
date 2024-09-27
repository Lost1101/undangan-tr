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
                        <img src={ring} alt="" className="w-1/2 m-auto my-10"/>
                        <div className="text-center my-10">
                            <h1 className="font-bold text-xl">Akad</h1>
                            <div className="text-sm">
                                <span className="block">Minggu, 14 Desember 2024</span>
                                <span className="block">00.00 WIB</span>
                            </div>
                            <span className="block font-bold text-sm"><IoLocationOutline className="inline-block"/> Masjid Al-Qadri</span>
                            <span className="block text-xs w-4/5 m-auto text-slate-500">Jl.Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span>
                            <div className="w-fit m-auto mt-3">
                                <a href="https://maps.app.goo.gl/qY4sADQQqNgYdbgY7">
                                    <Button icon={<CiLocationArrow1 />} content={'Lihat Lokasi'} morestyle={'border border-black text-sm'}/>
                                </a>
                            </div>
                        </div>
                        <div className="text-center my-10">
                            <h1 className="font-bold text-xl">Resepsi</h1>
                            <div className="text-sm">
                                <span className="block">Minggu, 14 Desember 2024</span>
                                <span className="block">00.00 WIB</span>
                            </div>
                            <span className="block font-bold text-sm"><IoLocationOutline className="inline-block"/>Gedung Acumalaka</span>
                            <span className="block text-xs w-4/5 m-auto text-slate-500">Jl.Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span>
                            <div className="w-fit m-auto mt-3">
                                <a href="https://maps.app.goo.gl/qY4sADQQqNgYdbgY7">
                                    <Button icon={<CiLocationArrow1 />} content={'Lihat Lokasi'} morestyle={'border border-black text-sm'}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </ContainerWArch>
            </ContainerFade>
        </div>
    )
}