import React from "react";
import Button from "../common/Button";

const CtaPage = () => {
  return (
    <div className="md:py-24 py-20 flex flex-col gap-5 justify-center items-center w-full bg-[#F9FAFB] text-center">
      <h1 className="text-4xl text-[#101828] font-semibold">Start your free trial</h1>
      <p className="text-[#475467] text-xl font-normal">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div className="flex md:flex-row flex-col-reverse md:gap-3 gap-0 justify-center items-center w-full">
        <Button variant="secondary">Learn more</Button>
        <Button variant="primary">Get started</Button>
      </div>
    </div>
  );
};

export default CtaPage;
