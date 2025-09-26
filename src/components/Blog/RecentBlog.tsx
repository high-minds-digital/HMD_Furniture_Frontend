import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { blogPosts } from "./BlogData";
import {  selector } from "@/utils/selectors/RecentSelector";


export const RecentBlogSection = () => {
  return (
    <div className={selector.wrapper}>
      {/* Header */}
      <div className={selector.header}>
        <h2 className={selector.title}>Recent Blog</h2>

        <div className="flex flex-col items-end">
          <Button variant="ghost" className={selector.button}>
            View All Posts
          </Button>
          <img className={selector.line} alt="Line" src="/line-1.svg" />
        </div>
      </div>

      {/* Blog Cards */}
      <div className={selector.grid}>
        {blogPosts.map((post, index) => (
          <Card key={index} className={selector.card}>
            <CardContent className={selector.cardContent}>
              <img
                className={selector.cardImage}
                alt={post.title}
                src={post.image}
              />

              <div className={selector.cardBody}>
                <h3 className={selector.postTitle}>{post.title}</h3>
                <p className={selector.postMeta}>
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
