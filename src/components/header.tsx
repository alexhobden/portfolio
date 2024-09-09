const Header: React.FC = () => {
  return (
    <div className="relative -z-20 mt-8 mx-auto w-[90%] p-8 h-40 bg-[#f6cd3b] yellobox font-roboto font-bold flex">
      {/* <div className="bg-black text-white inline-block p-2 px-4 text-2xl">
        Hi. I AM ALEX HOBDEN
      </div> */}
      <div className="flex-auto"></div>
      <div className="bg-black h-24 w-24 p-4 flex items-center">
        <div>
          <div className="bg-white h-2 w-16 mb-3"></div>
          <div className="bg-white h-2 w-16 mb-3"></div>
          <div className="bg-white h-2 w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
