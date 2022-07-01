import "./styles.css";
import { EyeOutlined, CopyOutlined } from "@ant-design/icons";

import React, { useState } from "react";

const Text = () => (
  <div className="text-xl w-full">
    <div className="text-lg my-4">
      <button className="w-full autolayout h-12 px-6 transition-colors duration-150 bg-yellow-g rounded-2xl focus:shadow-outline">
        GLIMPSE-KPI
        <CopyOutlined/>
      </button>
    </div>
  </div>
);

function Discount() {
  const [showText, setShowText] = useState(false);
  const onClick = () => {
    if (showText === false) setShowText(true);
    else setShowText(false);
  };
  return (
    <div>
      <button
        className=" autolayout w-full p-2 my-4 bg-neutral-100 content-center rounded-2xl text-black flex border border-neutral-300"
        onClick={onClick}
      >
        <EyeOutlined />
        <span className="px-1">Click to view discount code</span>
      </button>
      {showText ? <Text /> : null}
    </div>
  );
}

export default Discount;
