'use client'
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";


export default function TableTechnologies() {
  const technologyCategories = [
    { category: 'Web development', technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'React', 'Tailwind', 'SaaS'] },
    { category: 'Database', technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma'] },
    { category: 'DevOps / Containers', technologies: ['Docker', 'Kubernetes'] },
    { category: 'IDEs', technologies: ['Visual Studio Code', 'Eclipse IDE'] },
    { category: 'Testing and Development Tools', technologies: ['Postman', 'Insomnia'] },
    { category: 'Backend / Frameworks', technologies: ['NestJS', 'Node.js'] },
    { category: 'Messaging', technologies: ['Kafka'] },
    { category: 'Version Control', technologies: ['GitHub'] },
    { category: 'Third-Party Services', technologies: ['Figma', 'Firebase', 'Expo', 'Salesforce'] },
  ];

  const [openCategory, setOpenCategory] = useState(technologyCategories[0].category);

  const toggleCategory = (category: any) => {
    setOpenCategory((prevCategory: any) => (prevCategory === category ? null : category));
  };

  return (
    <div className="">
      <table className=" container max-w-screen-md mx-auto border-separate *:border-spacing-y-0.5  rounded-xl">

        <caption className="text-xs text-start p-1 caption-top">
          Resumo das principais tecnologias  <span className="text-[0.625rem]">* Não todas</span>
        </caption>

        <thead className=" flex justify-center bg-slate-800 rounded-t-xl ">
          <tr className="" >
            <th className="  py-4">Technologies</th>
          </tr>
        </thead>

        <tbody >
          {technologyCategories.map(({ category, technologies }) => (
            <React.Fragment key={category}>
              <tr onClick={() => toggleCategory(category)} className="*:cursor-pointer *:text-center *:flex *:justify-between *:py-5 *:pl-6 *:pr-16 *:border *:even:bg-gray-300/40 *:odd:bg-gray-500/40 " >
                <th className={openCategory === category ? 'border-2 border-sky-400/30':` border-slate-700`}>
                  {category}
                {openCategory === category ? <ChevronDownIcon className="w-6 h-6 " /> : <ChevronRightIcon className="w-6 h-6 " />}
                </th>
              </tr>
              {openCategory === category && (
                <tr className=" grid grid-cols-2 mx-2 my-1  ">
                  {technologies.map((tech, index) => (
                    <td key={index} className=" rounded-md bg-gray-400/50  border m-0.5 text-md text-center py-2 border-slate-700">
                      {tech}
                    </td>
                  ))}
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}