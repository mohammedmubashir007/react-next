"use client";

import axios from "axios";
import React, { useState,useEffect } from "react";

const page = () => {
  const [images, setImages] = useState([]);

useEffect(() => {
  getImages()
}, [])


  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error("error fetching images");
    }
  };

  return (
    <div>
      <button
        onClick={getImages}
        className="px-5 py-3 bg-green-800 text-white font-bold"
      >
        Get an image
      </button>
      <div className="p-10">
        {images.map((image, i) => {
          return (
            <img
              key={i}
              src={image.download_url}
              width={300}
              height={300}
              className="m-10 rounded inline-block"
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
