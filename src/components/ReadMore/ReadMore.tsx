import React, { FC } from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/icons/Icons";
import { customIcon } from "../../assets/icons/customIcons";

interface ReadMoreProps {
  classes: string;
}

const ReadMore: FC<ReadMoreProps> = ({ classes }) => (
  <div
    className={`${classes} read-more mt-auto  right-4 flex justify-end  items-center mb-2 ms-auto`}
  >
    <Link to="" className={`text-[20px] me-3 font-medium text-xl`}>
      read more
    </Link>
    <span className="">
      {/* <Icon name="MoveRight" color="white"  rounded-full bg-black p-1/> */}
      {customIcon.readMoreArrow}
    </span>
  </div>
);

export default ReadMore;
