import React from "react";

interface IProps {
  url: string;
  id: string;
}

const ServicesCardSVG = ({ url, id }: IProps) => {
  return (
    <>
      <svg
        width="100%"
        viewBox="0 0 376 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={id}
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              href={url}
              x="0"
              y="0"
              width="376"
              height="224"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <path
          d="M0 25C0 11.1929 11.1929 0 25 0L351 0C364.807 0 376 11.1929 376 25V116.951C376 127.996 367.046 136.951 356 136.951H343.666C319.831 136.951 299.283 153.712 294.494 177.061L293.624 181.307L292.005 205.344C291.297 215.844 282.574 224 272.05 224H25C11.1929 224 0 212.807 0 199L0 25Z"
          fill="#FDF1E3"
        />
        <path
          d="M0 25C0 11.1929 11.1929 0 25 0L351 0C364.807 0 376 11.1929 376 25V116.951C376 127.996 367.046 136.951 356 136.951H343.666C319.831 136.951 299.283 153.712 294.494 177.061L293.624 181.307L292.005 205.344C291.297 215.844 282.574 224 272.05 224H25C11.1929 224 0 212.807 0 199L0 25Z"
          fill={`url(#${id})`}
        />
      </svg>
    </>
  );
};

export default ServicesCardSVG;
