import Image from "next/image"
import KnowledgesCard from "../box-knowledges"
import silhuetReading from '@/assets/astronautas/silhuetReading.png'

export default function ResumeEducationExperience() {
  const dataKnowledges = [
    'Back-end',
    'Node.js',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Docker',
    'Linux',
    'Git',
    'PrismaORM',
    'Front-end',
    'HTML5',
    'CSS',
    'React',
    'Axios',
    'Mobile',
    'React-Native',
    'NativeBase',
    'RealmDB',
    'API',
    'Desenvolvimento Web',
    'API REST',
    'Design Patterns',
    'Testes E2E',
    'Testes Unitários',
    'CI/CD',
    'GitHub',
    'JWT',
    'RBAC',
    'NPM Scripts',
    'Front-end Frameworks',
    'Bibliotecas',
    'TailwindCSS',
    'Sass',
    'Next.js',
    'SPAs',
    'Server-Side Rendering',
    'Static-Site Generation',
    'Kubernetes',
    'Estudando',
    'Linguagens de Programação',
    'Básico',
    'Python',
    'Bash',
    'C',
    'Intermediário',
    'Javascript',
    'Typescript',
    'Idiomas',
    'Inglês',
    'Pré-intermediário',
    'Estudando',
  ]


  return (
    <section className=" p-4 gap-5  mx-auto  w-full overflow-y-auto max-h-[80vh] flex-wrap rounded-lg bg-gradient-to-tr from-[#38a2d7]/80 lg:to-[#561139]/30 to-[#561139]/50 " >

      <h1 className=" font-bold text-4xl text-white flex p-8 gap-3 px-10 lg:px-20 ">
        Resumo
        <div className=" lg:flex rounded-full mt-2 h-1 place-self-center w-72 bg-gradient-to-tr from-sky-400 to-purple-500  hidden "></div>
      </h1>


      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-x-6 gap-y-6 ">
        <div>
          <div className="flex items-center pl-4 space-x-4 mb-4 lg:justify-start justify-center">
            <div className="text-4xl text-[#F95054]">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path>
              </svg>
            </div>

            <h4 className="text-3xl text-white font-medium">
              Formação
            </h4>
          </div>

          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425]  border-2 bg-[#202024]/85">
            <span className=" text-[#b7b7b7]">
              2022 - Em andamento
            </span>
            <h3 className="text-xl text-white">
              Sistemas de Informação
            </h3>
            <p className="text-[#b7b7b7]">
              Universidade UniMetrocamp - Wyden, Campinas, SP
            </p>
          </div>

          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2 bg-[#202024]/85" >
            <span className=" text-[#b7b7b7]">
              2016
            </span>
            <h3 className="text-xl text-white">
              FTTx & Gpon
            </h3>
            <p className="text-[#b7b7b7]">
              Telefônica SA.
            </p>
          </div>

          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2 bg-[#202024]/85">
            <span className=" text-[#b7b7b7]">
              2014
            </span>
            <h3 className="text-xl text-white">
              Inglês - Idiomas
            </h3>
            <p className="text-[#b7b7b7]">
              Michigan, Valinhos, SP
            </p>
          </div>

        </div>

        <div>

          <div className="flex items-center space-x-2 mb-4 lg:justify-start justify-center">
            <div className="text-4xl text-[#F95054]">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 128.000000 128.000000" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                  fill="currentColor" stroke="0">
                  <path d="M409 1214 c-11 -13 -6 -30 34 -110 l47 -94 -75 0 c-81 0 -108 -14
                    -120 -62 -3 -13 -4 -209 -3 -435 l3 -412 23 -23 c22 -23 24 -23 322 -23 298 0
                    300 0 322 23 l23 23 3 412 c1 226 0 422 -3 435 -12 48 -39 62 -120 62 l-75 0
                    47 94 c57 114 53 126 -37 126 -68 0 -76 -8 -124 -108 -16 -34 -33 -62 -36 -62
                    -3 0 -20 28 -36 62 -48 100 -56 108 -124 108 -40 0 -61 -5 -71 -16z m176 -174
                    c64 -128 65 -130 40 -130 -22 0 -33 15 -90 130 -64 128 -65 130 -40 130 22 0
                    33 -15 90 -130z m185 50 c-30 -60 -45 -80 -60 -80 -27 0 -26 10 15 90 30 59
                    39 70 60 70 l25 0 -40 -80z m-240 -160 c27 -66 46 -80 110 -80 75 0 91 16 67
                    66 -10 19 -17 37 -17 40 0 2 53 3 118 2 l117 -3 0 -420 0 -420 -287 -3 -288
                    -2 0 418 c0 230 3 422 7 425 3 4 41 7 83 7 77 0 78 0 90 -30z"></path>
                  <path d="M613 743 c-31 -6 -70 -48 -77 -84 -6 -33 18 -99 37 -99 5 0 -11 -19
                    -36 -42 -46 -44 -63 -86 -55 -139 l3 -24 155 0 155 0 3 37 c4 48 -22 102 -65
                    135 l-34 26 23 24 c41 44 19 143 -35 158 -36 11 -51 12 -74 8z m65 -65 c7 -7
                    12 -24 12 -38 0 -33 -17 -50 -50 -50 -14 0 -31 5 -38 12 -7 7 -12 24 -12 38 0
                    14 5 31 12 38 15 15 61 15 76 0z m7 -184 c28 -13 65 -63 65 -88 0 -3 -49 -6
                    -110 -6 -60 0 -110 3 -110 6 0 24 37 75 63 88 40 20 51 20 92 0z"></path>
                  <path d="M432 268 c3 -23 3 -23 208 -23 205 0 205 0 208 23 l3 22 -211 0 -211
                    0 3 -22z"/>
                </g>
              </svg>
            </div>
            <h4 className="text-3xl text-white font-medium">
              Experiência
            </h4>
          </div>

          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2 bg-[#202024]/70">
            <div className="  text-[#b7b7b7]">
              2016 - 2023
              <span className="ml-2 text-xs">6 anos e 8 meses</span>
            </div>
            <div>
              <h3 className="text-xl py-2  text-white">
                FTT{"'"}x
              </h3>
              <ul className="text-[#b7b7b7] *:tracking-normal *:my-2 *:rounded-lg *:border-[#212425] *:border *:bg-[#202024]/80 *:py-2 *:pl-4 *:pr-4 *:space-y-2 *:leading-relaxed">
                <li>
                  <strong>Instalador:</strong> Realização da instalação de fibra óptica de ponta a ponta, assegurando o pleno funcionamento dos equipamentos e serviços contratados pelo cliente final. Cumprimento de metas quantitativas, incluindo a satisfação do cliente, prazos de garantia e qualidade.
                </li>
                <li>
                  <strong>Reparador:</strong> Análise sistêmica dos serviços de VoIP, IPTV e banda larga. Avaliação precisa do problema que originou o chamado. Emissão de relatórios diários para a coordenação, visando uma atuação direta na solução do problema.
                </li>
                <li>
                  <strong>Fiscal:</strong> Supervisão na atuação da empresa terceirizada Telemont nos serviços prestados à Vivo. Responsável, também, pela elaboração de relatórios diários referentes a instalações, reparos, manutenções preventivas ou reincidentes. Inclui o uso adequado das ferramentas exigidas (EPI e softwares) e supervisão das atividades dos funcionários na implementação e manutenção da infraestrutura da rede Vivo.
                </li>
              </ul>
            </div>
            <p className="text-lg text-[#aaa17a]">
              VIVO - Telefônica Brasil SA.
            </p>
          </div>

        </div>
      </div>


      <div className="container rounded-xl mx-auto bg-color-810 bg-[#202024]/40 py-12 px-4 sm:px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h4 className="text-5xl dark:text-white font-medium mb-6">Habilidades</h4>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                  Backend
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  75%
                </span>
              </div>
              <svg className="" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path className="" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                <path
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#5185D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: '70.05px, 100px',
                    strokeDashoffset: '0px',
                    transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
                  }}
                ></path>
              </svg>
            </div>


            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                  Front-end
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  55%
                </span>
              </div>
              <svg className="" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path className="" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                <path
                  className=""
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#CA56F2"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: '55.05px, 100px',
                    strokeDashoffset: '0px',
                    transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                  Web Design
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  55%
                </span>
              </div>
              <svg className="" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path className="" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                <path
                  className=""
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: '55.50px, 100px',
                    strokeDashoffset: '0px',
                    transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
                  }}
                ></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                  Mobile App
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  45%
                </span>
              </div>
              <svg className="" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path className="" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                <path
                  className=""
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"
                  style={{
                    strokeDasharray: '40.05px, 100px',
                    strokeDashoffset: '0px',
                    transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
                  }}
                ></path>
              </svg>
            </div>

            <div className=" bg-transparent mx-auto lg:mb-0 -mb-14 items-center justify-center w-80 lg:-p-32 lg:h-[350px] lg:w-[400px] ">
              <Image src={silhuetReading} alt="image boy reading" className="w-full object-cover drop-shadow-[1px_2px_45px_rgba(900,590,929,0.7)] " priority />
            </div>

          </div>


          <div className="col-span-1">
            <h4 className="text-5xl dark:text-white font-medium mb-8">Conhecimentos</h4>
            <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
              {dataKnowledges.map(data => {
                return <KnowledgesCard key={data} text={data} />
              })}
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}