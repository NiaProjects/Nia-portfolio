import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { NewsCover, newsHeader, topNews } from "../../assets";
import ReadMore from "../../components/ReadMore";
import "./NewsStyle.scss";
import NewsCard from "./components/NewsCard/NewsCard";
import HeroImage from "../Services/components/HeroImage";
import LastNews from "./components/LastNews";
import Tabs from "../../components/Tabs/Tabs";
import TabContent from "../../components/Tabs/components/TabContent";
import TabButtons from "../../components/Tabs/components/TabButtons";
import { useMediaQuery } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

const newsCardData = {
  newsCardImg: topNews,
  title: "Lorem ipsum dolor sit amet",
  description:
    "Lorem ipsum dolor sit amet consectetur. Natoque lobortis adipiscing id dignissim malesuada pretium mattis ut.",
  date: "10 Jun. 2024",
};

const tabHeaders = [
  "latest news",
  "software",
  "advertising",
  "digital marketing",
];

interface NewsProps {}

const News: FC<NewsProps> = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const isSmallScreen = useMediaQuery("(max-width: 375px)");

  const handleOnClick = useCallback((index: number) => {
    setSelectedTabIndex(index);
    console.log(index);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const data = [{ imgSection: { img: newsHeader, alt: "contact us Image" } }];

  return (
    <div className="">
      <HeroImage imageSection={data[0].imgSection} headerText={"news"} />

      <Tabs type="location" selectedTabIndex={selectedTabIndex}>
        {tabHeaders.map((header, index) => (
          <TabContent key={index}>
            {!isSmallScreen ? (
              <Swiper spaceBetween={10} slidesPerView={3.25} loop={false}>
                <SwiperSlide key={index}>
                  {tabHeaders.map((header, index) => (
                    <TabButtons
                      tabHeader={tabHeaders}
                      types={"news"}
                      selectedTabIndex={selectedTabIndex}
                      handleOnClick={handleOnClick}
                    />
                  ))}
                </SwiperSlide>
              </Swiper>
            ) : (
              <TabButtons
                tabHeader={tabHeaders}
                types={"news"}
                selectedTabIndex={selectedTabIndex}
                handleOnClick={handleOnClick}
              />
            )}

            {/* //   {tabHeaders.map((header, index) => (
        //     <SwiperSlide key={index}>
        //       <div onClick={() => handleOnClick(index)}>{header}</div>
        //       {selectedTabIndex === index && renderContent(index)}
        //     </SwiperSlide>
        //   ))}
           */}

            {header === "latest news" ? (
              <LastNews />
            ) : (
              <section
                id="top-stories"
                className="container w-[90.66%] lg:w-[86.2%]  mb-[32px] md:mb-[59px] lg:mb-[80px]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                aperiam fuga facilis commodi expedita placeat omnis harum.
                Dignissimos, ad rerum.
              </section>
            )}
          </TabContent>
        ))}
      </Tabs>
    </div>
  );
};

export default News;
