import React, { useState } from "react";
import "./App.css";
import "./fonts.css";
import Portrait from "./components/portrait";
import Header from "./components/header";
import InfoBox from "./components/infoBox";
import SkillBox from "./components/skillBox";
import Profile from "./components/profile";

function App() {
  const [currentSkill, setCurrentSkill] = useState<string>();

  const handleSkillChange = (skill: string) => {
    setCurrentSkill(skill);
  };

  return (
    <>
      <Header />
      {/* <div className="fixed bottom-8 right-8">
        <img src="./icons/downarrow.svg" alt="" className="w-8 h-8" />
      </div> */}
      <div className="h-[200vh] flex w-full">
        <div className="flex">
          <div className=" flex flex-col items-center justify-start">
            <div className="h-[18vh]"></div>
            <InfoBox></InfoBox>
            <div className="h-[50vh] w-full"></div>
            <div id="about-me"></div>
          </div>
        </div>
        <div className="2xl:pl-32 pl-12  h-[180vh]">
          <Profile>
            <Portrait></Portrait>
          </Profile>
        </div>
      </div>
      <div className="w-full  h-[100vh]">
        <div
          id="skills"
          className="h-[45vh] flex flex-col items-center justify-center"
        >
          <div className="text-xl rounded-3xl font-comfortaa font-bold  mb-16 text-[#ffd8d3]">
            I work with
          </div>
          <div className="flex space-x-1 text-5xl rounded-3xl font-comfortaa font-extrabold text-shadow-textr text-[#ffd8d3]">
            {currentSkill
              ? (currentSkill.charAt(0).toUpperCase() + currentSkill.slice(1))
                  .split("")
                  .map((letter, index) => (
                    <span
                      key={`${letter}-${index}`}
                      className={`inline-block opacity-0 animate-fall`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {letter}
                    </span>
                  ))
              : ""}
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
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
          <SkillBox
            changeSkill={handleSkillChange}
            skill="shellscript"
          ></SkillBox>
        </div>
        <div className="flex flex-wrap justify-center">
          <SkillBox changeSkill={handleSkillChange} skill="threejs"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="tailwind"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="visjs"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="rxjs"></SkillBox>
          <SkillBox
            changeSkill={handleSkillChange}
            skill="framermotion"
          ></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="nodejs"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="css"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="daisyUI"></SkillBox>
        </div>
        <div className="flex flex-wrap justify-center">
          <SkillBox changeSkill={handleSkillChange} skill="figma"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="neo4J"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="axios"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="jest"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="graphQL"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="blender"></SkillBox>
          <SkillBox changeSkill={handleSkillChange} skill="unity"></SkillBox>
        </div>
      </div>
      <div id="contact" className="w-full h-[100vh]">
        <div className="w-full h-full flex flex-col items-center justify-center text-center font-comfortaa font-bold text-[#ffd8d3] text-xl">
          <div className="mb-20">
            The contact formular will come just right here. While it's being
            developed take a look at my other pages:
          </div>
          <div className="flex">
            <a
              href="www.wavy.hobden.one"
              className="text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr"
            >
              <p>Wavy (Work in Progress)</p>
            </a>
            <a
              href="www.linkedin.com/in/alexander-hobden-982a29204"
              className="text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr"
            >
              <p>Linked In</p>
            </a>
            <a
              href="https://github.com/alexhobden"
              className="text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr"
            >
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
