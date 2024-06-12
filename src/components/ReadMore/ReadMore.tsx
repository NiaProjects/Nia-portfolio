import React, { FC } from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/icons/Icons";

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
    <span className="rounded-full bg-black p-1">
      <Icon name="MoveRight" color="white" />
    </span>
  </div>
);

export default ReadMore;
