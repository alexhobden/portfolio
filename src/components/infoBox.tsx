const InfoBox: React.FC = () => {
  return (
    <div className=" h-96 ml-40 -mt-4 w-[50rem] font-inria text-[40px] p-8 text-white">
      <div className="pl-8 pr-16 pt-6">
        <p>I'M A WEB</p>
        <div className="flex items-end">
          <h2 className="text-9xl">DESIGNER</h2>
          <p className="ml-3">&</p>
        </div>
        <div className="text-9xl rounded-3xl text-shadow-textr text-[#ffd8d3]">
          DEVELOPER
        </div>
        <div className="w-full flex justify-end">
          <p>BASED IN STUTTGART</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
