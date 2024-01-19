import Image from 'next/image'
import imgBg from '@/assets/personalImg/angel.png'
import ContactForm from '../../ui/contact/contact-form'
import { ButtonDownload } from '../../ui/components/button-download'
import CardContact from '../../ui/contact/card-contact'

export default function Contact() {
  return (
    <main className="flex  min-h-[90vh] max-w-screen-xl lg:px-2 my-auto mx-auto  text-gray-400/90 ">
      <section className=" bg-[#202024] h-[80vh] sm:my-5 mt-20 w-full border-blue-300/20 bg-opacity-10 border rounded-xl mx-auto snap-both scroll-smooth overflow-y-scroll  bg-gradient-to-tr from-[#38a2d7]/90 lg:to-[#561139]/30 to-[#561139]/50 " >

        <h1 className=" font-bold lg:text-5xl border hidden text-3xl xm:flex p-8 gap-3 px-10 lg:px-20 ">
          Contatct
          <div className=" lg:flex rounded-full mt-2 h-1 place-self-center w-72 bg-gradient-to-tr from-sky-400 to-purple-500  hidden "></div>
        </h1>


        <div className=' flex  lg:mt-10 p-5 '>

          <div className='container mx-auto lg:w-6/12 md:w-4/6 '>
            <ContactForm />
            <span className='block lg:hidden'> 
              <ButtonDownload />
            </span>
            <div className='block lg:hidden shadow-[0px_10px_10px_rgba(0,119,182,0.8)] mb-8 rounded-lg bg-[#202024]/90'>
              <CardContact />
            </div>
          </div>

          <div className='hidden lg:-mt-5  lg:flex flex-col justify-end mx-auto'>
            <div className='shadow-[0px_15px_40px_rgba(0,119,182,0.8)] rounded-lg bg-[#202024]/80'>
              <CardContact />
            </div>

            <div className=' -mb-10'>
              <Image src={imgBg} alt='' className='w-52  px-1 mx-auto bg-transparent drop-shadow-[0px_-20px_40px_rgba(0,119,182,0.9)]' priority quality={100} />
            </div>
            <ButtonDownload />
          </div>
        </div>



      </section>
    </main >

  )
}
