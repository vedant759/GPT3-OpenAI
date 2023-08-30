import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Generative Pre-trained Transformer 3 (GPT-3) is an autoregressive language model released by OpenAI in 2020. Like GPT-2, its architecture implements a deep neural network, specifically a decoder-only transformer model, which uses attention in place of previous recurrence- and convolution-based architectures. Attention mechanisms allow the model to selectively focus on segments of input text it predicts to be the most relevant."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="While building GPT-3 chatbots using a platform like OpenAI's GPT-3 engine, companies can train the program."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol"
        />
        <Feature
          title="Education"
          text="Enim blandit volutpat maecenas volutpat. Sed adipiscing diam donec adipiscing tristique risus. "
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
