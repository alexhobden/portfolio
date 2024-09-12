import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Profile: React.FC = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeightMin = window.innerHeight * 0.78;
      const triggerHeightMax = window.innerHeight * 1.2;
      if (
        scrollPosition >= triggerHeightMin &&
        scrollPosition <= triggerHeightMax
      ) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showDiv && (
        <motion.div
          animate={{
            borderColor: "white", // The final border color
            borderWidth: "2px",
          }}
          initial={{ borderColor: "transparent", borderWidth: "0" }}
          transition={{
            duration: 2, // Animation duration
            ease: "easeInOut", // Easing function
          }}
          className="text-white fixed top-32 left-[36rem]  rounded-[4rem] h-[29rem] w-[56rem] shadow-innerboxglow "
        >
          Hello im Alex and I like React a lot
        </motion.div>
      )}
    </>
  );
};
export default Profile;
