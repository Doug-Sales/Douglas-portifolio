import Image from "next/image";
import astronautCode from '@/assets/astronautas/astronautCode.png'


export default function AsideTable(){
  return(
    <aside className=" hidden lg:flex  items-center justify-end w-1/4">
    <div className="w-[15.625rem] absolute top-64 border border-sky-400/30 antialiased rounded-lg flex flex-col ">
      <span className='absolute -top-48 left-8 -right-8'>
        <Image src={astronautCode} alt='coffee icon' className='object-cover  min-w-40 drop-shadow-[0px_-1px_6px_rgba(0,119,182,1)] ' priority />
      </span>
      <p className='bg-slate-500/20 text-lg font-semibold border-b-sky-400/40 border-b rounded-t-lg tracking-wider  py-5 px-7'>
        Certificates
      </p>
      <ul className="flex-col mx-8 flex gap-4 py-6 font-medium marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400 ">
        <li>Rocketseat</li>
        <li>Alura</li>
        <li>Udemy</li>
        <li>Salesforce</li>
        <li>Bootcamp</li>
      </ul>
    </div>
  </aside>
  )
}