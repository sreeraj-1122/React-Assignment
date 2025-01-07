import React from "react";
import avatar2 from "../../assets/avatar2.png";
import avatar from "../../assets/avatar.png";
import avatar3 from "../../assets/avatar3.png";
import Button from "../common/Button";

const Questions = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center text-center  bg-[#F9FAFB] py-6">
      <div className="relative flex items-center justify-center">
        <img
          className="w-12 h-12 bg-[#E0E0E0] rounded-full border-[1.5px] border-[#FFFFFF] absolute left-10 z-0"
          src={avatar3}
          alt="Avatar 2"
        />
        <img
          className="w-14 h-14 bg-[#E0E0E0] rounded-full border-[2px] border-[#FFFFFF] z-10"
          src={avatar}
          alt="Avatar"
        />
        <img
          className="w-12 h-12 bg-[#E0E0E0] rounded-full border-[1.5px] border-[#FFFFFF] absolute right-10 z-0"
          src={avatar2}
          alt="Avatar 3"
        />
      </div>
      <div className="text-center">
        <h4 className="text-[#101828] font-semibold text-xl">
          Still have questions?
        </h4>
        <p className="text-lg text-[#475467] font-normal mt-3">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
      </div>

      <div className="md:w-full w-40">
      <Button onClick={() => alert("Chat with our team!")} variant="primary">Get in touch</Button>
      </div>
    </div>
  );
};

export default Questions;
