import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 mt-10">
      <div className="flex items-center border border-[#E63F3A80] rounded-2xl ps-1 py-1 pr-2 md:bg-white bg-[#F9F5FF] ">
        <span className="border border-[#E63F3A80] rounded-2xl text-[#E63F3A] sm:text-sm text-xs font-medium sm:px-2 px-1 py-[2px]">
          New feature
        </span>
        <span className="text-[#E63F3A] sm:text-sm text-xs font-medium ps-2 py-[2px]">
          Check out the team dashboard
        </span>
        <span className="">
          <TiArrowRight className="md:text-[#E63F3A99] text-[#9E77ED] text-xl" />
        </span>
      </div>
      <h1 className="text-[#101828] font-semibold sm:text-5xl text-4xl text-center mt-4">
        Beautiful analytics to grow smarter
      </h1>
      <p className="font-normal sm:text-xl text-lg text-[#475467] text-center md:w-[60%] w-full">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="flex flex-col-reverse sm:flex-row gap-3 w-full sm:w-auto">
        <button className="w-full sm:w-auto px-5 py-3 flex gap-2 items-center justify-center border border-[#D0D5DD] text-[#344054] font-semibold text-base rounded-full shadow-custom">
          <AiOutlinePlayCircle /> Demo
        </button>
        <button className="w-full sm:w-auto px-5 py-3 bg-[#E63F3A] text-white font-semibold text-base rounded-full border border-[#E63F3A] shadow-custom">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Hero;
