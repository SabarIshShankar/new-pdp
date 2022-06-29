import React, { useRef, useState } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StarFilled } from "@ant-design/icons";

export default function Reviews() {
  const responsive = {
    Mx: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    Lg: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5
    },
    Md: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    Sm: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
    VrSm: {
      breakpoint: { max: 280, min: 0 },
      items: 1.3
    }
  };
  return (
    <>
      <div className="App">
        <Carousel
          responsive={responsive}
          minimumTouchDrag={50}
          arrows={false}
          autoPlay={true}
          infinite
        >
          <div className="tracking-tight">
            <div className="w-full mr-2">
              <div className="border border-gray-200 rounded">
                <div className="mt-2">
                  <h1 className="mb-1 px-2 text-sm">Username</h1>

                  <p className="mb-1 px-2 text-lg font-medium pr-2 flex text-red-700">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </p>
                  <div className="text-md px-2 blue-navy py-2">
                    I absolutely love this blanket! At first, I was a little
                    skeptical because I didn’t want to spend a lot of money on a
                    blanket, and I wasn’t sure if the bamboo would really keep
                    me cool at night, but I’m glad I purchased!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-48 mr-2">
              <div className="">
                <img
                  src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/minky-minky-grey-rc-2_1080x.png?v=1640931533"
                  alt="123"
                  className="w-full rounded h-44 object-center object-cover group-hover:opacity-75"
                />
                <div className="mt-2">
                  <h1 className="mb-1 px-2 text-sm">Lyric Massager</h1>

                  <p className="mb-1 px-2 text-lg font-medium pr-2">
                    $150
                    <span className="line-through text-gray-500 px-2">
                      $180
                    </span>
                  </p>
                  <div className="text-md px-2 blue-navy py-2">20% OFF</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-48 mr-2">
              <div className="">
                <img
                  src="https://cdn.shopify.com/s/files/1/2034/5801/products/GRV.OriginalWeighted.Grey.PDP1_1800x1800.jpg"
                  alt="123"
                  className="w-full rounded h-44 object-center object-cover group-hover:opacity-75"
                />
                <div className="mt-2">
                  <h1 className="mb-1 px-2 text-sm">Lyric Massager</h1>

                  <p className="mb-1 px-2 text-md font-medium pr-2">
                    $150
                    <span className="line-through text-gray-500 px-2">
                      $180
                    </span>
                  </p>
                  <div className="text-md px-2 blue-navy py-2">20% OFF</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-48 mr-2">
              <div className="">
                <img
                  src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/Luxome-LAYRPillow-Lightbox_768x.png?v=1642777005"
                  alt="123"
                  className="w-full rounded h-44 object-center object-cover group-hover:opacity-75"
                />
                <div className="mt-2">
                  <h1 className="mb-1 px-2 text-sm">Lyric Massager</h1>

                  <p className="mb-1 text-md px-2 font-medium pr-2">
                    $150
                    <span className="line-through text-gray-500 px-2">
                      $180
                    </span>
                  </p>
                  <div className="text-md px-2 blue-navy py-2">20% OFF</div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
