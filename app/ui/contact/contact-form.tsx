import Image from "next/image";
import starBg from '@/assets/blueParticles.jpg'

export default function ContactForm() {
  return (
    <div className=" p-5 relative flex flex-col  border border-[#0077B6] text-white mix-blend-screen rounded-xl  overflow-hidden  container  ">
      <div className="absolute left-0 right-0 top-0 bottom-0 -z-10   ">
        <Image src={starBg} alt=" " className="object-cover " quality={100} priority/>
      </div>
      <div className=" lg:flex lg:pt-6  backdrop-blur-2xl rounded-t-xl">
        <h2 className="text-3xl px-5 font-semibold">
          Fale Comigo
        </h2>
        <p className='lg:text-base text-sm text-justify text-wrap m-4 pt-1  font-normal '>
        Estou aberto a novas oportunidades e desafios. Se meu perfil despertou seu interesse, ficarei feliz em discutir possíveis colaborações. Envie-me uma mensagem e vamos explorar juntos as opções disponíveis.
        </p>
      </div>

      <form id="myForm" className=" p-4 py-10 rounded-b-xl backdrop-blur-2xl  " action="https://formsubmit.co/douglasmsales28@outlook.com" method="POST">
        
        <div className="relative z-0 lg:w-full mb-8 group">
          <input type="text" name="name" className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-[#CAF0F8] bg-transparent border-0 border-b-[2px] border-gray-300 appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer" placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Name *
          </label>
        </div>
        <div className="relative z-0 lg:w-full mb-8 group">
          <input type="email" name="user_email" className="block autofill:text-red-900 py-2.5 px-0 w-full text-sm text-[#CAF0F8] bg-transparent border-0 border-b-[2px] border-gray-300 appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " id="user_email" required />
          <label htmlFor="user_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Email *
          </label>
        </div>
        <div className="relative z-0 lg:w-full mb-8 group ">
          <input type="text" name="message" className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-[#CAF0F8] bg-transparent border-0 border-b-[2px] border-gray-300 appearance-none dark:text-white  dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " id="message" required />
          <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Message *
          </label>
        </div>

        

        <div className=" inline-flex  transition-all duration-300 ease-in-out hover:bg-gradient-to-l from-sky-400/90 to-sky-800/80 box-decoration-clone rounded-lg mt-3">
          <input type="submit" className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-10 py-2 rounded-lg border hover:text-white dark:text-white " value="Submit" />
          <input type="hidden" name="_subject" value={'Novo Contato!'} />
          <input type="text" name="_honey" className={"hidden"} />
          <input type="hidden" name="_captcha" value={'false'} />

        </div>

      </form>


    </div>
  )
}