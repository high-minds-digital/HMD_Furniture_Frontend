import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const RecentBlogSection = () => {
  const blogPosts = [
    {
      image: "/mask-group-5.png",
      title: "First Time Home Owner Ideas",
      author: "Nana Ama",
      date: "Nov 18th, 2022",
    },
    {
      image: "/mask-group-6.png",
      title: "First Time Home Owner Ideas",
      author: "Nana Ama",
      date: "Nov 18th, 2022",
    },
    {
      image: "/mask-group-7.png",
      title: "First Time Home Owner Ideas",
      author: "Nana Ama",
      date: "Nov 18th, 2022",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-start mb-[77px]">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#2f2f2f] text-[34px] tracking-[0] leading-[41px]">
          Recent Blog
        </h2>

        <div className="flex flex-col items-end">
          <Button
            variant="ghost"
            className="[font-family:'Inter',Helvetica] font-semibold text-[#2f2f2f] text-base tracking-[0] leading-[41px] p-0 h-auto hover:bg-transparent"
          >
            View All Posts
          </Button>
          <img
            className="w-[110px] h-[3px] mt-[12px]"
            alt="Line"
            src="/line-1.svg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="w-full border-none shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg overflow-hidden"
          >
            <CardContent className="p-0 flex flex-col">
              <img
                className="w-full h-[200px] object-cover"
                alt="Mask group"
                src={post.image}
              />

              <div className="p-6">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#2f2f2f] text-lg tracking-[0] leading-[normal] mb-3">
                  {post.title}
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-normal text-[#2f2f2f] text-sm tracking-[0] leading-[normal]">
                  <span className="italic">by</span>
                  <span className="font-semibold"> {post.author} </span>
                  <span className="italic">on</span>
                  <span className="font-semibold"> {post.date}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
