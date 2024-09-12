interface SkillBoxProps {
  skill: string;
  changeSkill: (skill: string) => void;
}

const SkillBox: React.FC<SkillBoxProps> = ({ skill, changeSkill }) => {
  const setSkill = () => {
    changeSkill(skill);
  };

  return (
    <div
      onMouseEnter={setSkill}
      className="w-24 h-24 m-4 p-4 rounded-3xl border-2 flex items-center justify-center border-[#ffd8d3] border-opacity-60 shadow-boxglow backdrop-blur-md"
    >
      <div
        className="before-glow"
        style={{
          backgroundImage: `url(./skills/${skill}.png)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={`./skills/${skill}.png`}
          alt=""
          className="max-h-14 object-contain"
        />
      </div>
    </div>
  );
};

export default SkillBox;
