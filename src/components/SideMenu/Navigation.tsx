import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { BiHomeAlt2 } from "react-icons/bi";
import { GrTasks } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { ROUTES } from "@/constants/routes";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
    <motion.ul
      variants={variants}
      className="m-0 p-6 absolute top-[100px] w-[230px]"
    >
      {sideMenuItems.map((item, index) => (
        <MenuItem item={item} index={index} key={item.id}/>
      ))}
    </motion.ul>
);

const sideMenuItems = [
  {
    id: 0,
    icon: <BiHomeAlt2 />,
    label: "Home",
    link: ROUTES.HOME,
  },
  {
    id: 1,
    icon: <GrTasks />,
    label: "Projects",
    link: ROUTES.PROJECTS,
  },
  {
    id: 2,
    icon: <GiSkills />,
    label: "Skills",
    link: ROUTES.SKILLS,
  },
  {
    id: 3,
    icon: <RiContactsBook2Fill />,
    label: "Contact",
    link: ROUTES.CONTACT,
  },
];
