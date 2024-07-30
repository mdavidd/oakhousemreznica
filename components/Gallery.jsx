import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={`/${src}`}
              alt={`Image ${index}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
              className="rounded"
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={`/${photos[photoIndex]}`}
          nextSrc={`/${photos[(photoIndex + 1) % photos.length]}`}
          prevSrc={`/${
            photos[(photoIndex + photos.length - 1) % photos.length]
          }`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photos.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
