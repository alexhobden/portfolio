import React from "react";
import "./App.css";
import Portrait from "./components/portrait";
import Header from "./components/header";
import InfoBox from "./components/infoBox";
import SkillBox from "./components/skillBox";

function App() {
  return (
    <>
      <div className="h-[100vh] ">
        <div className="absolute  font-roboto font-bold text-[20rem] -z-10 ml-20">
          WEB DESIGNER
        </div>

        <Header />
        <div className="flex">
          <div className="flex-1 h-[40rem] flex items-center justify-center">
            <InfoBox></InfoBox>
          </div>
          <Portrait></Portrait>
        </div>
        <div></div>
      </div>
      <div className="h-[100vh]">
        <div className="flex pl-32">
          <SkillBox></SkillBox>
        </div>
      </div>
    </>
  );
}

export default App;
