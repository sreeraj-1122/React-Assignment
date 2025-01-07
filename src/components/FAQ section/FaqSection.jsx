import React from "react";
import faqData from "../../config/faqData";
import FaqItem from "./FaqItem";
import Questions from "./Questions";

const FaqSection = () => {
  return (
    <div className="flex flex-col gap-5 md:my-24 my-18">
      <div className="text-center">
        <h1 className="text-center font-semibold md:text-4xl text-3xl text-[#101828]">
          Frequently Asked Questions
        </h1>
        <p className="font-normal md:text-xl text-base text-[#475467] mt-4 ">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="flex flex-col  items-center">
        <div className="w-full max-w-3xl ">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#F9FAFB] flex items-center justify-center mt-5">
        <Questions/>
      </div>
    </div>
  );
};

export default FaqSection;
