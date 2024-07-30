"use client";

import React, { useEffect, useState } from "react";
import PhotoGallery from "@/components/Gallery";

const GalleryPage = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images");

        setPhotos(data);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Failed to load images");
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto pt-24">
      {photos.length > 0 ? <PhotoGallery photos={photos} /> : <p>Loading...</p>}
    </div>
  );
};

export default GalleryPage;
