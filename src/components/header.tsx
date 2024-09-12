import HeaderButton from "./headerButton";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-20 items-center mx-auto w-full p-8 h-20 backdrop-blur-md  font-comfortaa font-bold flex">
      <div className="text-[#ffd8d3] font-inria text-shadow-text inline-block p-2 px-4 text-2xl">
        Hi. I AM ALEX HOBDEN
      </div>
      <div className="flex-auto"></div>
      <HeaderButton title="Projects"></HeaderButton>
      <HeaderButton title="About Me"></HeaderButton>
      <HeaderButton title="Contact Me"></HeaderButton>
    </div>
  );
};

export default Header;
