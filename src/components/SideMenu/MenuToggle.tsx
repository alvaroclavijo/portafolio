import * as React from "react";
import { motion } from "framer-motion";

const Path: React.FC<any> = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props.isOpen ? "white" : "hsl(0, 0%, 18%)"}
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle: React.FC<{toggle: any, isOpen: boolean}> = ({ toggle, isOpen }) => (
  <button onClick={toggle} className="outline-none border-0 select-none cursor-pointer absolute top-3 left-3 w-14 h-14 rounded-full bg-transparent flex items-center justify-center">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        isOpen={isOpen}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
