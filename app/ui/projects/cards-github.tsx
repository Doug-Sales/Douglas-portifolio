'use client'
import { useEffect, useState } from "react";
import { AnimatePresenImports, MotionsImports } from "../components/Motion-Imports";
import codeBg from '@/assets/codeBg.jpg'
import Image from "next/image";

type ProjectProps = {
  id: string;
  name: string;
  title: string;
  description?: string;
  imgUrl?: string;
  repoUrl?: string;
};

export default function CardsGithub() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/users/Doug-Sales/repos");
      const data = await res.json();
      setProjects(data);
    }

    fetchData();
  }, []);

  function handleModal(id: string) {
    setSelectedId(id);
  }

  function handleCloseModal() {
    setSelectedId(null);
  }

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 ">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleModal(project.id)}
            className="py-4 px-0.5 overflow-x-clip  bg-gray-800  rounded-lg cursor-pointer hover:shadow-lg transition duration-300 relative  "
          >
            <Image
              src={codeBg}
              alt={project.name}
              className="w-full animate-fade-in  h-48 object-cover mb-2"
            />
            <h5 className="text-white text-md font-bold absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-2">
              {project.name.toUpperCase()}
            </h5>
          </div>
        ))}
      </div>

      <AnimatePresenImports>
        {selectedId && (
          <MotionsImports.div layoutId={selectedId} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-90 ">
            <MotionsImports.div className="p-8 rounded-lg text-center min-w-[350px] max-w-[600px] bg-[#212121]">
              <Image
                src={codeBg}
                alt={`${projects.find((project) => project.id === selectedId)?.name}`}
                height={400}
                width={400}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-white text-xl mb-4">{projects.find((project) => project.id === selectedId)?.title || 'Descrição'}</h2>
              <h5 className="text-white text-lg  font-bold mb-2">{projects.find((project) => project.id === selectedId)?.name || 'Código'}</h5>
              <p className="text-white text-base mb-4">{projects.find((project) => project.id === selectedId)?.description || 'Descrição...'}</p>
              <hr className="my-4" />
              <a
                href={projects.find((project) => project.id === selectedId)?.repoUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline underline-offset-4 decoration-blu-500 decoration-2 text-lg font-medium  block mb-4"
              >
                Link Github 
              </a>
              <button onClick={handleCloseModal} className="mt-4 hover:bg-sky-500 bg-blue-600 text-white font-semibold text-base px-8 py-2 rounded-lg mr-4">
                Fechar
              </button>
            </MotionsImports.div>
          </MotionsImports.div>
        )}
      </AnimatePresenImports>
    </>
  );
}