import { motion } from "framer-motion";
import { logo, navBg } from "../../../assets";

// interface IProps {}
const Heder = () => {
  const headerAnimation = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        satisfies: 120,
        delay: 0.5,
      },
    },
  };

  return (
    <>
      {" "}
      <motion.header
        variants={headerAnimation}
        initial="initial"
        animate="animate"
        className=" text-center max-w-[100%] "
      >
        <div className="   relative ">
          <img src={navBg} className="w-full min-h-[80px] absolute  " alt="" />
          <div className="absolute w-[99px] h-[80px]  translate-x-[-50%]  translate-y-[13px]  left-1/2	top-2">
            <img src={logo} className="" alt="" />
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Heder;
