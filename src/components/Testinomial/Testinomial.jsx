import React from "react";
import image from "../../assets/test.png";
import avatar from "../../assets/avatar1.png";
const Testinomial = () => {
  return (
    <section className="flex flex-col gap-6 items-center justify-center text-center md:mb-24 mb-20  bg-[#F9FAFB] p-4">
      <img src={image} alt="" className="w-[140px] h-10 " />
      <div className="md:text-5xl text-3xl font-medium text-[#101828]">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-3">
        <img
          src={avatar}
          alt=""
          className="w-16 h-16 rounded-full bg-[#E0E0E0]"
        />
        <span className="text-lg font-semibold text-[#101828] mt-2">
          Candice Wu
        </span>
        <span className="text-base font-normal text-[#475467]">
          Product Manager, Sisyphus
        </span>
      </div>
    </section>
  );
};

export default Testinomial;
