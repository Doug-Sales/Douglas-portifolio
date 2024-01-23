'use client'
import Image from 'next/image';
import aboutMe from '@/assets/personalImg/about-me.png'
import astronautIcon from '@/assets/astronaut.png'
import { MotionsImports } from '../components/Motion-Imports';
import { rockSalt } from '../fonts';



export default function AboutMeSession() {
  return (
    <MotionsImports.div
      initial={{ y: 50, opacity: 0,  }}      
      animate={{ y: 1, opacity: 1,  }}
      whileInView='visible'
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        type: 'tween',        
        ease:'easeIn'
      }}
      className=" xl:w-11/12 mx-auto grid xl:flex container rounded-xl  "
    >

      <div className='flex xl:h-4/6 xl:rounded-l-xl xl:mb-0 mb-4 overflow-hidden items-center justify-center '>
        <Image src={aboutMe} alt="foto perfil" className=" max-w-[37.5rem] xl:w-full w-[22.5rem] rounded-xl object-top object-cover " priority prefix='Image Douglas' />
      </div>

      <section className='flex-col flex xl:w-5/6 w-5/5 mx-auto px-2 text-wrap '>

        <h3 className={`text-4xl overflow-clip flex items-center justify-center ${rockSalt.variable} font-rock xl:gap-6  xl:text-5xl bg-clip-text text-transparent pl-5 dark:text-white   bg-gradient-to-r from-indigo-500 from-20% via-emerald-500 via-50% to-sky-500 to-80% `}>
          Sobre Mim
          <div className=' w-36 h-3w-36 '>
            <Image src={astronautIcon} alt='Icon astronaut'  />
          </div>
        </h3>

        <div className="whitespace-pre-wrap indent-4 p-3 leading-relaxed  tracking-wide text-pretty text-justify text-gray-100 bg-gray-700/60 shadow-lg font-sans rounded-xl h-full overflow-hidden  px-5 space-y-4">
          <div>
            <p>
              Olá, meu nome é <span className="font-bold">Douglas Medeiros</span>. Sou de Valinhos-SP e estudante do curso de Sistemas de Informação, com conclusão prevista para o 2º semestre de 2025.
            </p>
            <p>
              Sempre tive interesse em pesquisa e desenvolvimento, mas minha curiosidade sempre esteve voltada para entender como a internet funcionava &quot; debaixo dos panos &rdquo;  &#128514;.
            </p>
          </div>
          <p>
            Na primeira oportunidade encontrada após alguns anos de estruturação familiar, mergulhei de forma autodidata no desenvolvimento web e suas tecnologias, utilizando diversas plataformas, como Rocketseat, Udemy, Alura, YouTube, entre outras. Posso afirmar que sou um entusiasta da tecnologia e testemunhei muitas barreiras sendo superadas à medida que a paciência e a disciplina no aprendizado trouxeram resultados.
          </p>
          <p>
            Possuo habilidades de comunicação desenvolvidas ao longo de 7 anos trabalhando diretamente com clientes finais. Estou em constante movimento, buscando aprender e aplicar conhecimentos em desafios, também aprimorando as habilidades necessárias para me tornar um profissional dinâmico e consciente dos desafios e necessidades do mundo real.
          </p>
          <p>
            Atualmente, estou disposto a agregar valor sendo parte da solução para suas necessidades.
          </p>
        </div>


        <blockquote className="font-semibold italic text-center xl:text-xl sm:text-sm  text-xs text-gray-200/60 py-8">
          &quot;O quanto você
          <span className="relative mx-2 ">
            <span className="block absolute -inset-1  rounded-se-2xl shadow-sky-300 shadow-md  rounded-es-2xl -skew-y-6 bg-sky-500/50 " aria-hidden="true"></span>
            <span className="relative text-white px-1">QUER</span>
          </span>
          é refletido nas ações que você toma&rdquo;
          <footer></footer>
        </blockquote>
      </section >

    </MotionsImports.div >
  )
} 