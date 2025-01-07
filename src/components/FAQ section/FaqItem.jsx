import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-7 w-full">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-[#101828] text-lg font-medium">{question}</h4>
        <span className="text-2xl text-[#98A2B3]">
          {isOpen ? <CiCircleMinus /> : <CiCirclePlus />}
        </span>
      </div>
      {isOpen && (
        <p className="text-[#475467] text-base font-normal mt-2">{answer}</p>
      )}
    </div>
  );
};

export default FaqItem;
