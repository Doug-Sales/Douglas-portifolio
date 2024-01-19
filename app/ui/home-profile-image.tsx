import Image from "next/image";
import douglasImg from '@/assets/personalImg/perfil-douglas.jpg'
import LinksNetwork from "./components/links-network";
import { ButtonDownload } from "./components/button-download";

export default function HomeProfileImage() {
  return (
    <div className="  backdrop-blur-lg animate-fade-in bg-sky-600/20 backdrop-opacity-10 container rounded-xl ">

      <div className="flex  justify-center  lg:h-[550px] h-[350px]  lg:rounded-xl rounded-t-xl lg:mt-44  place-items-center  border-x lg:border  border-sky-400/40 border-t">
        <div className="z-20 rounded-[30px] lg:rounded-[40px]   shadow-[#0077B6] shadow-lg drop-shadow-xl lg:-top-1/4 -top-28  absolute overflow-hidden lg:h-5/6 h-4/6 ">
          <div className=" relative -top-28  ">
            <Image
              alt="Foto perfil Douglas"
              width={380}
              height={300}
              src={douglasImg}
              className="object-top object-cover lg:w-[400px] z-10 backdrop-brightness-90 backdrop-blur "
              priority
            />
            <span className="w-full font-sans absolute h-40 bottom-7 flex flex-col text-center justify-center items-center  text-white/95 text-3xl font-semibold  bg-gradient-to-t from-black  gap-3 via-gray-900/90 to-transparent pb-10 ">
              Douglas Medeiros
              <div className="text-base font-normal tracking-wide leading-loose ">
                Desenvolvedor fullstack
              </div>
            </span>

          </div>

        </div>

      </div>
      <div className=" border-x border-sky-400/40 lg:absolute lg:top-3/4 lg:w-full lg:border-none ">
        <LinksNetwork />
      </div>

      <div className="lg:hidden block border-x rounded-b-lg border-b border-sky-400/40">
        <ButtonDownload />
      </div>
    </div>
  )
}