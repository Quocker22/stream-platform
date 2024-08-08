import React from "react";
import { Carousel } from "antd";
import "@/styles/banner.css";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "270px",
  color: "#fff",
  borderRadius: "16px",
  textAlign: "center",
  background: "linear-gradient(to right, rgb(253, 34, 92), rgb(253, 144, 4))",
};

const Banner: React.FC = () => (
  <section className="bg-white antialiased">
    <div className="max-w-screen-2xl px-4 py-2 mx-auto lg:px-6">
      <Carousel
        arrows
        autoplay
        draggable
        infinite
      >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  </section>
);

export { Banner };
