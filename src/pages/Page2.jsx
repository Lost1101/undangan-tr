import ContainerFade from '../components/Container-fade';
import bismillah from '../assets/bismillah.svg';
import pembatas from '../assets/pembatas3.png'
import bride from '../assets/bride.png'
import Title from '../components/Title';
import ContainerWArch from '../components/Container-w-arch';
import ContainerBG from '../components/Container-BG';

export default function Page2(){
    return(
        <div className="min-h-screen" id='prayer'>
            <ContainerFade>
                <ContainerWArch>
                    <Title content={'Ucapan Doa'} color={'undangan-400'}/>
                    <div className='my-10'>
                        <img src={bismillah} alt="" className='w-2/3 m-auto'/>
                        <div className='my-5 text-center text-xs'>
                            <p>&#34; Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir &#34;</p>
                            <p className='mt-5 text-base text-undangan-400'>— Q.s. Ar-Rum : 21 —</p>
                        </div>
                    </div>
                    <img src={pembatas} alt="" className='w-1/2 m-auto'/>
                </ContainerWArch>
                <div className='my-20'>
                    <Title subcontent={'Pasangan'} colorsub={'undangan-100'} content={'Mempelai'} color={'undangan-100'}/>
                    <div className='text-white mt-10'>
                        <p className='text-xs text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, corrupti non saepe asperiores officiis amet beatae architecto odio at, cupiditate molestiae pariatur voluptatem consequatur id consequuntur, nobis animi vitae temporibus.</p>
                        <div className='mt-10'>
                            <ContainerBG image={bride} name={'Tiya Fathonah S.Pd'} childth={'Putri Ke-1 dari'} parent1={'Bpk. Agus Suryana &'} parent2={'Ibu Enung Noorwasliyah'} insta={'https://www.w3.org/Provider/Style/dummy.html'}/>
                            <span className='block text-4xl text-center text-white my-10'>&</span>
                            <ContainerBG image={bride} name={'Tiya Fathonah S.Pd'} childth={'Putri Ke-1 dari'} parent1={'Bpk. Agus Suryana &'} parent2={'Ibu Enung Noorwasliyah'} insta={'https://www.w3.org/Provider/Style/dummy.html'}/>
                        </div>
                    </div>
                </div>
            </ContainerFade>
        </div>
    )
}