import CardsGithub from "@/app/ui/projects/cards-github";
import astronauStrike from '@/assets/astronautas/astronautas5.png'
import Image from "next/image";



export default function Projects() {

  return (
    <main className="  mx-auto p-4 h-[90vh] max-w-screen-2xl ">

      <section className="rounded-lg scroll-smooth overflow-y-auto max-h-[85vh] bg-gradient-to-tr from-[#38a2d7]/90 lg:to-[#561139]/30 to-[#561139]/50">
        <div className="sm:flex gap-2 pt-16  text-white/90 text-base m-6 ">
          <div className="w-52 -mb-10 sm:m-0 ">
            <Image src={astronauStrike} alt=" " className="object-cover w-full drop-shadow-[1px_5px_15px_rgba(3,999,999,1)] " />
          </div>
          <p className="indent-1 tracking-wide mx-auto lg:w-7/12 sm:w-9/12 py-2 lg:p-8 rounded-2xl border-transparent lg:text-justify   sm:backdrop-brightness-75 backdrop-brightness-50 backdrop-blur-md  leading-relaxed font-medium flex items-center justify-center p-4">
            No meu repositório GitHub, você encontrará uma variedade de projetos que abrangem desde o básico até soluções mais avançadas. Cada commit e pull request representa um passo em direção ao meu constante aprimoramento como desenvolvedor.
          </p>

        </div>

          <CardsGithub />
      </section>



    </main>
  );
}