import WelcomeAssidePage from "./ui/home-asside";
import HomeProfileImage from "./ui/home-profile-image";



export default async function Home() {



  return (
    <main className="flex max-h-[90vh] w-full relative h-screen items-end lg:items-start overflow-hidden place-content-center px-1 mx-auto  text-gray-400/90">

      <section className=" w-full max-w-xl  flex-col lg:relative absolute lg:top-0 rounded-xl ">
        <HomeProfileImage />
      </section>

      <div>
        <WelcomeAssidePage />
      </div>

    </main >
  )
}


