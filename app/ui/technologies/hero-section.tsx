import Image from "next/image";
import astronautMoon from '@/assets/personalImg/coffeeAst.png'
import spaceBg from '@/assets/spaceBg.jpg'

export default function HeroSection(){
  return (
    <section className='relative mt-0  items-center mx-auto h-full grid sm:grid-cols-3 px-0 sm:px-6  w-full '>
          <div className='absolute top-0 left-0 right-0 bottom-0  backdrop-blur'>
            <Image src={spaceBg} alt='image space background' className='w-full h-full   object-cover' priority />
          </div>
          <div className=' cursor-default col-start-1  col-span-2 p-10 lg:py-14 sm:rounded-2xl  backdrop-blur-3xl backdrop-opacity-90 backdrop-brightness-50 lg:m-5 text-base  h-fit border-sky-300/20 sm:border-2 border-0 text-left sm:leading-relaxed leading-loose sm:text-justify indent-4 '>

            Explore algumas das tecnologias essenciais que integro em meus projetos pessoais e profissionais. Iniciei recentemente minha jornada de aprendizado em Java, enriquecendo meu repertório com mais uma linguagem. Esta página é dedicada à exploração das tecnologias que compõem meu conjunto de habilidades em constante expansão, refletindo meu compromisso com o aprendizado contínuo e a busca por novos desafios.
            <br />

            <p className='indent-4'>
              Embora essas tecnologias representem apenas uma parte do meu conjunto de habilidades, a busca pelo conhecimento é uma jornada constante. Conheça minhas habilidades em constante evolução e os projetos em andamento, enquanto me dedico à obtenção de certificações oficiais em AWS e Linux, fortalecendo minha expertise em DevOps. Este portfólio não é apenas uma vitrine; é um testemunho do crescimento contínuo por meio de experiências práticas e exploração de tecnologias emergentes.
            </p>
          </div>
          <div className='container sm:block hidden backdrop-blur-sm backdrop-opacity-50 '>
            <Image src={astronautMoon} alt='astronaut image' className='lg:min-w-52 object-cover object-top lg:object-scale-down  h-4/5 bg-transparent drop-shadow-[0px_-2px_8px_rgba(19,557,982,0.9)] ' priority />
          </div>
        </section>
  )
}