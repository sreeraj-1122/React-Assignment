import React from "react";
import Button from "../common/Button";
import BlogCard from "./BlogCard";
import blogData from "../../config/blogData";

const BlogPage = () => {
  return (
    <div className="md:my-32 my-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
        <div className="flex flex-col gap-5 items-start">
          <div className="text-base font-semibold text-[#E63F3A]">Our blog</div>
          <h1 className="text-[#101828] text-4xl font-semibold">
            Latest blog posts
          </h1>
          <p className="text-xl text-[#475467] font-normal">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <div className="hidden md:block">
          <Button
            onClick={() => alert("Chat with our team!")}
            variant="primary"
          >
            View all posts
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-10 mt-16 flex-wrap">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            category={blog.category}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            image={blog.image}
          />
        ))}
        <div className="block md:hidden col-span-full">
          <Button
            variant="primary"
          >
            View all posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
