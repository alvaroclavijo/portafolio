// components/Navbar.tsx

import React from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div></div>
      <ul className="flex space-x-4">
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="hover:text-blue-500 hover:cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
