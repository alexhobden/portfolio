import { useEffect, useState } from "react";

const InfoBox: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const maxTranslation = 300;
      // Change this multiplier to adjust how fast the text moves
      setScrollX(Math.min(scrollPosition * 0.5, maxTranslation));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" h-96 ml-40 -mt-4 w-[50rem] font-inria text-[40px] p-8 text-white">
      <div className="pl-8 pr-16 pt-6">
        <p
          style={{
            transform: `translateX(${scrollX * 3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          I'M A WEB
        </p>
        <div
          className="flex items-end"
          style={{
            transform: `translateX(${scrollX * -2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <h2 className="text-9xl">DESIGNER</h2>
          <p className="ml-3">&</p>
        </div>
        <div
          className="text-9xl rounded-3xl text-shadow-textr text-[#ffd8d3]"
          style={{
            transform: `translateX(${scrollX * 2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          DEVELOPER
        </div>
        <div
          className=" w-full flex justify-end"
          style={{
            transform: `translateX(${scrollX * -4}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <p>BASED IN STUTTGART</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
