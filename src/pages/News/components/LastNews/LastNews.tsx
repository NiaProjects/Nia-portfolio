import React from "react";
import HeroImage from "../../../Services/components/HeroImage";
import { NewsCover, newsHeader, topNews } from "../../../../assets";
import ReadMore from "../../../../components/ReadMore";
import NewsCard from "../NewsCard";

interface IProps {}
const NEWSCARDDATA = {
  newsCardImg: topNews,
  title: "Lorem ipsum dolor sit amet",
  description:
    "Lorem ipsum dolor sit amet consectetur. Natoque lobortis adipiscing id dignissim malesuada pretium mattis ut.",
  date: "10 Jun. 2024",
};

const LastNews = ({}: IProps) => {
  return (
    <>
      <section
        id="top-stories"
        className="container w-[90.66%] lg:w-[86.2%]  mb-[32px] md:mb-[59px] lg:mb-[80px] mt-10 "
      >
        <header className="text-[30px]  font-bold  mb-6 md:mb-[32px] lg:mb-[40px]">
          <h2 className="capitalize">latest news</h2>
          <div className=" border-b border-orange-500 w-[189px] "></div>
        </header>
        <div className="news-cover gap-5 flex max-lg:flex-col lg:justify-between  lg:flex-row-reverse  max-lg:mx-auto">
          <div className="right-side-news lg:w-[67.8%]  relative mb-[32px] lg:mb-[56px] ">
            <article className=" flex flex-col justify-between ">
              <figure className="relative  rounded-[20px]  flex   lg:h-[350px] max-xs:h-auto  ">
                <img src={NewsCover} className="object-fill  w-full	" />

                <figcaption className="absolute bottom-0 bg-white  py-[6.5px] px-1 rounded-[10px] m-5 text-base lg:text-lg">
                  20/3/2022
                </figcaption>
              </figure>
              <div className=" mt-4 ">
                <h3 className=" font-semibold text-xl lg:text-[22px]">
                  Lorem ipsum dolor sit
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-[#737373]">
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur Lorem ipsum dolor sit amet consectetur.Lorem
                  ipsum dolor sit Lorem ipsum dolor sit amet consectetur.Lorem
                  ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
                  consectetur.Lorem ipsum dolor sit{" "}
                </p>
              </div>

              <ReadMore classes="pt-4 pt-10" />
            </article>
          </div>
          <div className="left-side-news  w-full md:w-full gap-4 justify-center   lg:w-[33.1%] flex flex-col lg:flex-col md:flex-row  items-start m-0 p-0 ">
            <article className="xl:mb-[32px] xl:w-full m-auto">
              <figure className="topNews w-full	 rounded-[20px] h-[13.125rem] relative flex items-end overflow-hidden max-xs:h-auto">
                <img src={topNews} className=" object-fill w-full	" />

                <figcaption className="absolute bg-white  pt-[6.5px] px-1 rounded-[10px] m-5 text-lg">
                  20/3/2022
                </figcaption>
              </figure>
              <p className="flex mt-4 font-semibold text-xl lg:text-[22px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </article>
            <article className="xl:mb-[32px] xl:w-full  m-auto">
              <figure className="topNews rounded-[20px] h-[13.125rem]  relative flex items-end overflow-hidden">
                <img src={topNews} className=" object-fill w-full	" />

                <figcaption className="absolute bg-white  pt-[6.5px] px-1 rounded-[10px] m-5 text-lg">
                  20/3/2022
                </figcaption>
              </figure>
              <p className="flex mt-4   font-semibold text-xl lg:text-[22px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="container mx-auto   w-[90.66%] lg:w-[86.2%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <NewsCard {...NEWSCARDDATA} />
          <NewsCard {...NEWSCARDDATA} />
          <NewsCard {...NEWSCARDDATA} />
        </div>
      </section>
    </>
  );
};

export default LastNews;
