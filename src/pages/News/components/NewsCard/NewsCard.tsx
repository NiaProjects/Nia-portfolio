// src/components/NewsCard.tsx

import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface NewsCardProps {
  newsCardImg: string;
  title: string;
  description: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  newsCardImg,
  title,
  description,
  date,
}) => {
  return (
    <article className="bg-stone-500  w-full  gap-4 mx-auto flex flex-col text-center justify-center mb-4 md:mb-3.5">
      <div className="text-start ">
        <img
          src={newsCardImg}
          alt="News image"
          className="w-full rounded-t-xl"
        />
        <h2 className=" font-semibold text-xl lg:text-[22px] my-4 ">{title}</h2>
        <p className="text-base md:text-lg pt-2 lg:pt-5 px-4 capitalize">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center pb-4 px-4">
        <p className="text-sm md:text-base font-normal">{date}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm lg:text-base font-medium capitalize">
            read more
          </span>
          <div className="mx-auto  p-1 rounded-full">
            <FaArrowAltCircleRight size={20} color="white" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
