import { useDimensions } from "@/hooks/useDimensions";
import {motion, useCycle} from "framer-motion";
import { useRef } from "react";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className="fixed top-0 left-0 bottom-0 z-50 w-[300px]"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div 
        className="fixed top-0 left-0 bottom-0 w-[300px] bg-white"
        variants={sidebar} 
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

export default SideMenu;