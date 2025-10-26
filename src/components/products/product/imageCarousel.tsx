"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="flex-1 flex flex-col gap-[3%] aspect-[0.85]">
      <div className="relative flex h-[75%] shadow-text shadow-[0_5px_16px_-10px] rounded-sm overflow-hidden">
        <Image
          src={images[selectedImageIndex]}
          alt={`product-image-` + selectedImageIndex}
          fill
          priority
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="flex h-max gap-[2%]">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative w-[23.5%] aspect-square shadow-text shadow-[0_5px_16px_-10px] rounded-sm overflow-hidden ${
              selectedImageIndex === index ? "ring-2 ring-primary/50" : ""
            } duration-500`}
            onClick={() => setSelectedImageIndex(index)}
          >
            <Image
              src={image}
              alt={`product-image-` + index}
              fill
              priority
              sizes="100%"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
