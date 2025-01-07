import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="md:my-32 my-20 ">
      <div className="flex flex-col justify-center items-center  gap-5 text-center">
        <h4 className="text-base font-semibold text-[#E63F3A]">Features</h4>
        <h2 className="text-[#101828] font-semibold sm:text-4xl text-3xl">
          Analytics that feels like it’s from the future
        </h2>
        <p className="text-[#475467] text-lg font-normal lg:w-[56%] md:w-[40%]  text-center">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="mt-12" >
        <FeatureCard />
      </div>
    </section>
  );
};

export default Features;
