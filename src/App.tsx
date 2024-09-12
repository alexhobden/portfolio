import React, { useState } from "react";
import "./App.css";
import "./fonts.css";
import Portrait from "./components/portrait";
import Header from "./components/header";
import InfoBox from "./components/infoBox";
import SkillBox from "./components/skillBox";

function App() {
  const [currentSkill, setCurrentSkill] = useState<string>();

  const handleSkillChange = (skill: string) => {
    setCurrentSkill(skill);
  };

  return (
    <>
      <Header />
      <div className="fixed bottom-8 right-8">
        <img src="./icons/downarrow.svg" alt="" className="w-8 h-8" />
      </div>
      <div className="h-[100vh] ">
        {/* <div
          className="absolute
         font-roboto font-bold text-[20rem] -z-20 ml-20"
        >
          <p>WEB</p>
          <p className="text-shadow-btext">DESIGNER</p>
        </div> */}
        {/* <div className="-z-40 absolute bg-[#1b0b06] w-full h-fullflex"></div> */}
        {/* <div className="-z-50 border-b-2 border-custom-opacity absolute w-[50%] h-[62%] shadow-lamp"></div> */}

        <div className="flex">
          <div className="h-[40rem] flex items-center justify-start">
            <InfoBox></InfoBox>
          </div>
          <Portrait></Portrait>
        </div>
        <div></div>
      </div>
      <div className="w-full  h-[100vh]">
        <div className="h-[45vh] flex flex-col items-center justify-center">
          <div className="text-xl rounded-3xl font-comfortaa font-bold  mb-16 text-[#ffd8d3]">
            These are the Skills I work with
          </div>
          <div className="text-5xl rounded-3xl font-comfortaa font-extrabold text-shadow-textr text-[#ffd8d3]">
            {currentSkill
              ? currentSkill.charAt(0).toUpperCase() + currentSkill.slice(1)
              : ""}
          </div>
        </div>
        <div className="flex justify-center">
          <SkillBox changeSkill={handleSkillChange} skill="react"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="angular"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="python"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="java"></SkillBox>
          <SkillBox
            changeSkill={handleSkillChange}
            skill="javascript"
          ></SkillBox>
          <SkillBox
            changeSkill={handleSkillChange}
            skill="typescript"
          ></SkillBox>
        </div>
        <div className="flex justify-center">
          <SkillBox changeSkill={handleSkillChange} skill="threejs"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="tailwind"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="visjs"></SkillBox>
          <SkillBox
            changeSkill={handleSkillChange}
            skill="framermotion"
          ></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="nodejs"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="css"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="daisyUI"></SkillBox>
        </div>
        <div className="flex justify-center">
          <SkillBox changeSkill={handleSkillChange} skill="figma"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="neo4J"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="nodejs"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="graphQL"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="blender"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="unity"></SkillBox>
        </div>
      </div>
    </>
  );
}

export default App;
