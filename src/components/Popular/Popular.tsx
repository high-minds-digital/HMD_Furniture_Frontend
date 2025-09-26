import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { blogPosts } from "./PopularData";
import { popularSelector as s } from "@/utils/selectors/PopularSelector";

const Popular = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>Popular Products</h2>

        <div className={s.grid}>
          {blogPosts.map((post, index) => (
            <Card key={index} className={s.card}>
              <CardContent className={s.cardContent}>
                <div className={s.cardInner}>
                  <div className={s.imageWrapper}>
                    <img className={s.image} alt={post.title} src={post.image} />
                  </div>
                  <div className={s.infoWrapper}>
                    <h3 className={s.postTitle}>{post.title}</h3>
                    <p className={s.postDescription}>{post.description}</p>
                    <Button variant="link" className={s.readMoreButton}>
                      Read more
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
