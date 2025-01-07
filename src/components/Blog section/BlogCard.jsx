import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const BlogCard = ({ category, title, description, author, image }) => {
  return (
    <div className="  w-full h-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover "
      />
      <div className="flex flex-col items-start gap-4 mt-3">
        <div className="text-[#E63F3A] text-sm font-semibold">{category}</div>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-2xl text-[#101828] font-semibold">{title}</h3>
          <MdOutlineArrowOutward className="text-2xl font-semibold" />
        </div>
        <p className="text-base text-[#475467] font-normal">{description}</p>
        <div className="flex gap-2">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full border-[.80px] border-[#101828] border-opacity-[0.08%] overflow-hidden"
          />
          <div>
            <div className="text-sm text-[#344054] font-semibold">
              {author.name}
            </div>
            <div className="text-sm text-[#475467] font-normal">
              {author.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
