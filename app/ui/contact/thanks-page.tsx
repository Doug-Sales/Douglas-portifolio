import Image from "next/image";
import astronaut from "@/assets/astronautas/astronautas1.png"
import { syne } from "../fonts";
export default function ThanksPageContact() {
  return (
      <section className=" bg-[#202024] h-[80vh] sm:my-5 mt-20 w-full border-blue-300/20 px-20 bg-opacity-10 border rounded-xl mx-auto snap-both scroll-smooth overflow-y-scroll  bg-gradient-to-tr from-[#38a2d7]/90 lg:to-[#561139]/30 " >
        <a href="/" className="text-white/90 border border-sky-500 py-3 px-6 text-lg font-semibold inline-flex rounded-xl mt-5 hover:bg-sky-700">Inicio</a>
        <h2 className={`lg:text-6xl text-lg container font-medium ${syne.variable} bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-emerald-500 to-white/50   p-6 rounded-xl border-green-100/70 backdrop-blur-2xl border shadow-sm border-opacity-90 font-syne text-center mt-12`} >
          Agradeço pelo contato !!
        </h2>
        <div className="container flex items-center justify-center mt-2 backdrop-blur-xl ">
          <Image src={astronaut} alt="astronaut image" className="w-8/12 max-w-[450px] drop-shadow-[0px_15px_50px_rgba(0,359,209,1)]" />
        </div>
      </section>
  )
}