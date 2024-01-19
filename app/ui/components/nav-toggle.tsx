'use client'
import * as React from "react";
import { SVGMotionProps } from "framer-motion";
import { MotionsImports } from "./Motion-Imports";
import Link from "next/link";

const variants1 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


type PropsMenu = {
  name: string;
  href: string | any;
  toggle: () => void;
}

export const MenuItem = ({ name, href, toggle }: PropsMenu) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <MotionsImports.li
      variants={variants1}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`flex m-0 p-0 mb-5 font-medium text-md dark:text-gray-50 text-gray-100/90 font-syne antialiased items-center rounded-l-full rounded-r-full bg-[#0077B6] border border-[#0077B6] bg-opacity-25 hover:bg-opacity-45 gap-4`}
    >
      <Link href={href} className={`w-44 h-12 flex justify-normal items-center rounded-r-md`} onClick={handleClick}>
      <div className={`w-12 h-12 bg-[#0077B6] mr-6 rounded-full`} />
        {name}
      </Link>
    </MotionsImports.li>
  );
};


type PropsToggle = {
  toggle: () => void;
}

const linksNav = [
  { href: '/', name: 'Inicio' },
  { href: '/about', name: 'Sobre' },
  { href: '/projects', name: 'Projetos' },
  { href: '/resume', name: 'Resumo' },
  { href: '/technologies', name: 'Tecnologias' },
  { href: '/contact', name: 'Contato' }
];
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.07, staggerDirection: 0 }
  }
};


export const Navigation = ({ toggle }: PropsToggle) => {
  return (
    <MotionsImports.ul variants={variants} className="absolute top-24 left-12">
      {linksNav.map((links) => (
        <div key={links.name} className={`flex list-none mb-3 mr-0 items-center cursor-pointer`} >
          <MenuItem href={links.href} name={links.name} toggle={toggle} />
        </div>
      ))}
    </MotionsImports.ul>
  )
};



const Path = (props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <MotionsImports.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 70%)"
    strokeLinecap="round"
    {...props}
  />
);

export function MenuToggle({ toggle }: PropsToggle) {
  return (
    <button onClick={toggle} className=" px-2 py-1 absolute top-6 left-4 bg-transparent outline-none border-none ">
      <svg width="30" height="28" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  )
};



