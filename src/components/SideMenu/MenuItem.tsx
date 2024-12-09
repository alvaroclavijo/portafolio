import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem: React.FC<any> = ({ item, index }) => {
  const style = { color: `${colors[index]}` };
  return (
    <Link href={item.link} className="no-underline">
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="list-none mb-5 flex items-center justify-start cursor-pointer"
      >
        <div 
          className="w-[40px] h-[40px] rounded-full mr-5 flex items-center justify-center" 
          style={style}
        >
          {item.icon}
        </div>
        <div 
          className="rounded-[5px] h-[20px] flex items-center" 
          style={style}
        >
          {item.label}
        </div>
      </motion.li>
    </Link>
  );
};
