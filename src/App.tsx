import React, { useState } from "react";
import "./App.css";
import "./fonts.css";
import Portrait from "./components/portrait";
import Header from "./components/header";
import InfoBox from "./components/infoBox";
import SkillBox from "./components/skillBox";
import Profile from "./components/profile";
import Frame from "./components/frame";
import SkillSet from "./components/skillset";
import SkillSetMobile from "./components/skillsetMobile";

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
      <div className="md:h-[250vh] flex md:flex-row flex-col w-full">
        <div className="block md:hidden relative h-80">
          <div className="flex justify-center mt-8">
            <Frame>
              <Portrait></Portrait>
            </Frame>
          </div>
        </div>
        <div className="flex w-full overflow-hidden md:overflow-visible md:w-[50%]">
          <div className=" flex flex-col items-center justify-start">
            <div className="h-[18vh]"></div>
            <InfoBox></InfoBox>
            <div className="h-[50vh] md:block hidden w-full"></div>
            <div id="about-me"></div>
          </div>
        </div>
        <div className="md:block hidden w-full h-[180vh]">
          <div className="sticky flex justify-end top-40">
            <div className="relative">
              <Profile>
                <Portrait></Portrait>
              </Profile>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  md:h-[100vh]">
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
        <div></div>
        <div className="block md:hidden">
          <SkillSetMobile
            handleSkillChange={handleSkillChange}
          ></SkillSetMobile>
        </div>
        <div className="md:block hidden">
          <SkillSet handleSkillChange={handleSkillChange}></SkillSet>
        </div>
      </div>
      <div
        id="contact"
        className="w-full overflow-hidden md:overflow-visible h-[100vh]"
      >
        <div className="w-full p-8 h-full flex flex-col items-center justify-center text-center font-comfortaa font-bold text-[#ffd8d3] text-xl">
          <div className="mb-20">
            The contact formular will go just right here. While it's being
            developed take a look at my other pages:
          </div>
          <div className="flex md:flex-row flex-col">
            <a
              href="https://wavy.hobden.one"
              className="text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr my-8 mx-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Wavy (Work in Progress)</p>
            </a>
            <a
              href="https://linkedin.com/in/alexander-hobden-982a29204"
              className="text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr my-8 mx-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Linked In</p>
            </a>
            <a
              href="https://github.com/alexhobden"
              className="text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr my-8 mx-12"
              target="_blank"
              rel="noopener noreferrer"
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
