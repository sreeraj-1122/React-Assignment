import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

const SubBanner = () => {

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <section className="flex flex-col items-center gap-7 w-full ">
      <div className="text-base text-[#475467] font-medium text-center">
        Join 4,000+ companies already growing
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Company ${index + 1}`}
            className="w-1/3 sm:w-1/4 md:w-[13%] lg:w-[14%] object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default SubBanner;
