import React from "react";
import { features } from "../../config/featureData"; 

const FeatureCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {features.map((feature, index) => (
        <section
          key={index}
          className="w-[300px] sm:w-[350px] md:w-[384px] h-[178px]  flex flex-col justify-center items-center gap-3 p-4 rounded-lg text-center"
        >
          <div className="border border-[#EAECF0] w-12 h-12 py-3 flex items-center justify-center rounded-lg">
          <img src={feature.icon} alt={feature.title} className="w-5 h-5" />
          </div>
          <h4 className="text-lg font-semibold text-[#101828]">{feature.title}</h4>
          <p className="text-sm text-[#475467]">{feature.description}</p>
        </section>
      ))}
    </div>
  );
};

export default FeatureCard;
