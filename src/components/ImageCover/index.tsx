"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageCoverProps {
  url: string;
  alt: string;
  imageHash: string;
  priority: boolean;
}

const ImageCover = ({ url, alt, imageHash, priority }: ImageCoverProps) => {
  const [error, setError] = useState<boolean>(false);

  return (
    <>
      {!error ? (
        <Image
          src={url}
          alt={alt}
          fill
          placeholder="blur"
          priority={priority}
          blurDataURL={imageHash}
          onError={() => setError(true)}
        />
      ) : (
        <div className="h-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="50"
            fill="none"
            viewBox="0 0 51 50"
          >
            <mask
              id="mask0_16_5"
              style={{ maskType: "luminance" }}
              width="51"
              height="50"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <path fill="#fff" d="M51 0H0v50h51V0z"></path>
            </mask>
            <g mask="url(#mask0_16_5)">
              <path
                fill="#A8AEBF"
                d="M46.537 45.625L33.575 32.917l-5.717-5.605-17.233-16.895-2.996-2.938-3.167-3.104-2.996 2.937 4.909 4.834v27.437c0 2.292 1.912 4.167 4.25 4.167H38.61l4.909 4.813 3.017-2.938zm-35.912-6.042v-23.27l14.535 14.25-1.785 2.187-4.25-5.667-6.375 8.334H30.11l4.25 4.166H10.625zm6.014-29.166l-4.25-4.167h27.986c2.337 0 4.25 1.875 4.25 4.167v27.437l-4.25-4.166V10.416H16.639z"
              ></path>
            </g>
          </svg>
        </div>
      )}
    </>
  );
};

export default ImageCover;
