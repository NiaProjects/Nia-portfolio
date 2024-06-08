import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

/**
 * SwiperWrapper component renders a container for Swiper slide elements.
 * @param {object} props - Component props.
 * @returns {JSX.Element} SwiperWrapper component.
 */
export default function SwiperWrapper(props) {
  const {
    items = [],
    slidesPerViewCount = [],
    smallScreenViewCount = 1,
    setActiveIndex = null,
    isAutoplay = false,
    autoplayDelay = 3000,
    isLooped = false,
    includePagination = false,
    includeNavigation = false,
    className = "",
  } = props;
  return (
    <Swiper
      spaceBetween={4}
      loop={isLooped}
      navigation={includeNavigation}
      autoplay={
        isAutoplay
          ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
            }
          : false
      }
      pagination={includePagination ? { clickable: true } : false}
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={(e) => setActiveIndex && setActiveIndex(e.activeIndex)}
      breakpoints={{
        300: {
          slidesPerView: smallScreenViewCount,
          spaceBetween: 10,
        },
        550: {
          slidesPerView: slidesPerViewCount[0],
          spaceBetween: 15,
        },
        768: {
          slidesPerView: slidesPerViewCount[1],
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: slidesPerViewCount[2],
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: slidesPerViewCount[3],
          spaceBetween: 20,
        },
      }}
      className={`mySwiper ${className}`}
    >
      {items.map((item, index) => (
        <SwiperSlide key={uuidv4()}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}

SwiperWrapper.propTypes = {
  items: PropTypes.array,
  slidesPerViewCount: PropTypes.array,
  autoplayDelay: PropTypes.number,
  isLooped: PropTypes.bool,
  includePagination: PropTypes.bool,
  includeNavigation: PropTypes.bool,
  isAutoplay: PropTypes.bool,
  setActiveIndex: PropTypes.func,
  smallScreenViewCount: PropTypes.number,
  className: PropTypes.string,
};
