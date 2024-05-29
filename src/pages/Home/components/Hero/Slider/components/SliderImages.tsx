import { useEffect, useRef, useState } from "react";
import {
  VectorSlider1,
  VectorSlider2,
  slider1,
  slider2,
} from "../../../../../../assets";
import { Text } from "@chakra-ui/react";

const images = [
  {
    src: slider1,
    text: "we have created all the solution and designs",
    delay: 7000,
  },
  {
    src: slider2,
    text: "Lorem ipsum dolor sit amet consectetur. Sed nunc varius varius laoreet quisque Lorem ipsum dolor sit amet consectetur. Sed nunc varius varius laoreet quisque..marco ",

    delay: 5000,
  },
];

const SliderImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
  const firstImage = useRef(true);

  useEffect(() => {
    const currentImageDelay = images[currentImageIndex].delay;
    let interval;

    if (currentImageIndex === 0) {
      console.log(currentImageDelay);
      interval = setInterval(() => {
        // handleNextImage();
      }, currentImageDelay);
    } else {
      interval = setInterval(() => {
        console.log(currentImageDelay);
        // handleNextImage();
      }, currentImageDelay);
    }

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleNextImage = () => {
    setFadeProp({ fade: "fade-out" });

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        if (firstImage.current) {
          firstImage.current = false;
        }
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      });
      setFadeProp({ fade: "fade-in" });
    }, 1000);
  };

  const handlePrevImage = () => {
    setFadeProp({ fade: "fade-out" });

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFadeProp({ fade: "fade-in" });
    }, 1000);
  };
  // const textStyle =
  //   " top-[40%] bottom-[50%] left-[100px] md:text-[48px] w-[517px] capitalize";
  // py-6 px-[40px] sm:px-10 lg:px-[100px]
  return (
    <>
      <div className="image-slider relative  ">
        {/* py-6 px-[40px] sm:px-10 lg:px-[100px] */}
        <img src={slider1} />
        <div className=" absolute z-50 top-[45%] md:top-[45%] lg:top-[45%] w-[240px] md:w-[352px] lg:w-[517px]  text-white capitalize  ms-[40px]  text-start h-auto  whitespace-pre-wrap ">
          <p className="text-[24px] md:text-[32px] lg:text-[48px] font-bold ">
            we have created all the solution and<br></br>designs{" "}
            <span className="text-primary text-[24px] md:text-[32px] lg:text-[48px] font-bold">
              through
            </span>
          </p>
        </div>
        <div className="flex flex-col  gap-7 justify-between bg-slate-700 h-[70px] lg:h-[120px] absolute z-40 top-[50%] right-10">
          <button className="prev " onClick={handlePrevImage}>
            <img src={VectorSlider1} className="" />
          </button>
          <button className="next" onClick={handleNextImage}>
            <img src={VectorSlider2} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderImages;
