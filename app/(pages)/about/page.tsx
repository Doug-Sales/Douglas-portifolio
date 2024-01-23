import AboutMeSession from '../../ui/about/aboutme';
import PersonalInfo from '../../ui/about/personal-info';
import WhatIDoSection from '../../ui/about/what-i-do';



export default function About() {
  return (
    <main className="flex relative container mx-auto p-4 h-[95vh] max-w-screen-2xl text-gray-400/90  ">


      <section className="gap-5 flex-col w-full  backdrop-opacity-100  bg-gradient-to-bl from-[#38a2d7]/70 to-[#561139]/20 overflow-y-auto max-h-[85vh] flex-wrap rounded-lg">
        <article className="w-full ">

          <h1 className=" font-bold text-white/95  text-4xl flex p-8 gap-3 px-16 lg:px-20 ">Sobre
            <div className=" xl:flex rounded-full mt-2 h-1 place-self-center w-72 bg-gradient-to-tr from-sky-400 to-purple-500  hidden "></div>
          </h1>

          <div className=" items-center  container gap-3 pl-6 py-6 ">
            <AboutMeSession />

            <PersonalInfo />
          </div>

        </article>

        <WhatIDoSection />

      </section >

    </main>
  );
}
