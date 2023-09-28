import React from "react";

const SkillsCarousel: React.FC = () => {
  return (
    <section id="skills" className="p-4">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex overflow-x-auto">
        {/* Add your skill images in a scrollable container */}
        <img src="/images/skill1.png" alt="Skill 1" className="w-32 h-32 m-2" />
        <img src="/images/skill2.png" alt="Skill 2" className="w-32 h-32 m-2" />
        {/* Add more skill images */}
      </div>
    </section>
  );
};

export default SkillsCarousel;
