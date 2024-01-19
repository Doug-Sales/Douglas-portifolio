import React from 'react';

import TableTechnologies from '../../ui/technologies/table-technologies';
import TechnoLogoList from '../../ui/technologies/techno-logos';
import HeroSection from '../../ui/technologies/hero-section';

import * as logoIcons from '@/assets/logoIcons/@index'
import AsideTable from '@/app/ui/technologies/aside-table';



export default function Technologies() {
  const imgLogos = logoIcons

  return (
    <main className="flex min-h-[90vh] max-w-screen-2xl  px-12  mx-auto mt-5 text-gray-200">

      <section className=" bg-[#202024] w-full h-[90vh] py-10  bg-opacity-60 border-blue-300/20 rounded-xl snap-both scroll-smooth overflow-y-auto mx-auto bg-gradient-to-tr from-[#38a2d7]/80 lg:to-[#561139]/30 to-[#561139]/50" >
        <h2 className=" font-bold lg:text-5xl text-4xl flex p-8 gap-3 px-10 lg:px-20 mb-5 ">
          Tecnologias
          <div className=" lg:flex rounded-full mt-2 h-1 place-self-center w-72 bg-gradient-to-tr from-sky-400 to-purple-500  hidden "></div>
        </h2>

        <div>
          <HeroSection />
        </div>

        <div className='flex relative lg:p-8 py-8 mx-auto justify-center '>

          <AsideTable />

          <div className='w-5/6 '>
            <TableTechnologies />
          </div>
        </div>

        <div className="mx-auto container max-w-3xl mt-16 px-6 py-8">
          <TechnoLogoList />
        </div>

      </section>
    </main>
  );
}
