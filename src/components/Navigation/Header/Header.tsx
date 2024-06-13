import { motion } from "framer-motion";
import NavDeskTop from "./component/NavDeskTop";
import NavMobile from "./component/NavMobile/NavMobile";
import React from "react";
// interface IProps {}
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
const Header = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const controlNavbar = () => {
    if (window.scrollY > window.innerHeight - 50) {
      // If scrolling down
      setIsVisible(false);
      setOpen(false);
    } else {
      // If scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <>
      {" "}
      <motion.header
        variants={headerAnimation}
        initial="initial"
        animate="animate"
        className=" text-center max-w-screen  "
      >
        <NavDeskTop isVisible={isVisible} />
        
        <NavMobile isVisible={isVisible} setOpen={setOpen} isOpen={isOpen} />
      </motion.header>
    </>
  );
};

export default Header;
