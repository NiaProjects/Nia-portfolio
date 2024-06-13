// src/components/NewsCard.tsx

import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ReadMore from "../../../../components/ReadMore";

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
    <article className="  w-full  gap-4 mx-auto flex flex-col text-center justify-center mb-4 md:mb-3.5">
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
        <div className="flex items-center gap-2 ms-auto">
          <ReadMore classes="pt-4 pt-10" />
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
