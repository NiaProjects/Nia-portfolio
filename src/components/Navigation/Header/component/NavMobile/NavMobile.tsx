import React, { FC } from "react";

interface NavMobileProps {}

const NavMobile: FC<NavMobileProps> = () => (
  <nav className="md:hidden">NavMobile Component</nav>
);

export default NavMobile;
