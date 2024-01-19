import * as React from "react";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import { MotionsImports } from "./Motion-Imports";
import { MenuToggle, Navigation } from "./nav-toggle";
import { useDimensions } from "./use-dimensions";


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export function SideBarNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <MotionsImports.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`left-0 absolute `}
    >
      <MotionsImports.div className={isOpen ? `w-80  bg-[#023E8A] bg-opacity-35 backdrop-blur-3xl h-screen trasition z-10 ` : ' z-10 w-80 h-20 trasition delay-1000 bg-[#023E8A] bg-opacity-35 backdrop-blur-3xl'} variants={sidebar} />
      <div className={isOpen ? `block` : `hidden`}>
        <Navigation toggle={() => toggleOpen()} />
      </div>
      <MenuToggle toggle={() => toggleOpen()} />
    </MotionsImports.nav>
  );
};
