import React, { useState, useEffect, ReactNode } from "react";
import { getSkills } from "@/services/user";
import ImageRenderer from "./UI/ImageRenderer";
import Marquee from "react-fast-marquee";
import FixedWidthContainer from "./UI/FixedWidthContainer";

const SkillsCarousel: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async (): Promise<void> => {
    try {
      const res = (await getSkills("clavibaldi91")) as Skill[];
      setSkills(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FixedWidthContainer id="skills" className="p-4">
      <h2 className="text-3xl font-semibold mb-4">Skills and Tools</h2>
      <Marquee>
        <div className="flex overflow-x-auto gap-8 items-center">
          {skills.length > 0 &&
            skills.map((skill) => <ImageRenderer svg={skill.svg} />)}
        </div>
      </Marquee>
    </FixedWidthContainer>
  );
};

export default SkillsCarousel;
