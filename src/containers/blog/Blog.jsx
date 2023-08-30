import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <div className="gradient__text">
          <h1>A lot is happening, we are blogging about it.</h1>
        </div>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2022"
            title="GPT3 and OpenAI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2022"
            title="GPT3 and OpenAI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2022"
            title="GPT3 and OpenAI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2022"
            title="GPT3 and OpenAI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2022"
            title="GPT3 and OpenAI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
