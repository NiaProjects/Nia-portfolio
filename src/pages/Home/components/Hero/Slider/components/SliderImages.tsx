import { useEffect, useRef, useState } from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { slider1, slider2 } from "../../../../../../assets";
import { customIcon } from "../../../../../../assets/icons/customIcons";

const images = [
  {
    src: slider1,
    text: "We have created all the solutions and designs through",
    delay: 7000,
  },
  {
    src: slider2,
    text: "We have created all the solutions and designs through",
    delay: 5000,
  },
];

const SliderImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
  const firstImage = useRef(true);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const currentImageDelay = images[currentImageIndex].delay;
    let interval = setInterval(() => {
      // handleNextImage();
    }, currentImageDelay);
    // handle active class
    if (prevButtonRef.current && nextButtonRef.current) {
      if (currentImageIndex === 0) {
        prevButtonRef.current.classList.add("active");
        nextButtonRef.current.classList.remove("active");
      } else {
        prevButtonRef.current.classList.remove("active");
        nextButtonRef.current.classList.add("active");
      }
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

  return (
    <div className="image-slider relative">
      <img
        src={images[currentImageIndex].src}
        alt="slider"
        className={`w-full h-auto object-cover ${fadeProp.fade} transition-opacity duration-1000 ease-in-out`}
      />

      {currentImageIndex === 0 ? (
        <>
          {" "}
          <div className="absolute z-10 top-[45%] md:top-[45%] lg:top-[45%] w-[240px] md:w-[352px] lg:w-[517px] text-white capitalize ms-[18px] md:ms-[40px] lg:ms-[100px] text-start h-auto whitespace-pre-wrap">
            <p className="text-[24px] md:text-[36px] lg:text-[48px] font-bold">
              {images[currentImageIndex].text.split(" ").slice(0, -1).join(" ")}
              <span className="text-primary text-[24px] md:text-[32px] lg:text-[48px] font-bold">
                {` ${images[currentImageIndex].text.split(" ").slice(-1)}`}{" "}
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="absolute z-10 top-[45%] md:top-[45%] lg:top-[45%] w-[240px] md:w-[352px] lg:w-[517px] text-white capitalize ms-[18px] md:ms-[40px] lg:ms-[100px] text-start h-auto whitespace-pre-wrap">
            <p className="text-[24px] md:text-[36px] lg:text-[48px] font-bold">
              {images[currentImageIndex].text.split(" ").slice(0, -1).join(" ")}
              <span className="text-primary text-[24px] md:text-[32px] lg:text-[48px] font-bold">
                {` ${images[currentImageIndex].text.split(" ").slice(-1)}`}{" "}
              </span>
            </p>
          </div>
        </>
      )}
      {/* flex-col gap-7 justify-between h-[70px] lg:h-[120px] absolute z-40 top-[50%] right-6 -translate-x-[18px] md:-translate-x-[40px] lg:-translate-x-[100px] */}
      <div className="flex absolute left-1/2 right-1/2 gap-10 bottom-0 p-4 bg-stone-500 w-[34px]">
        <button
          className="prev  "
          ref={prevButtonRef}
          onClick={() => {
            handlePrevImage();
          }}
        ></button>
        <button
          className="next"
          ref={nextButtonRef}
          onClick={() => {
            handleNextImage();
          }}
        ></button>
      </div>
    </div>
  );
};

export default SliderImages;
