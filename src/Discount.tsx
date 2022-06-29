import "./styles.css";
import { EyeOutlined } from "@ant-design/icons";

import React, { useState } from "react";

const Text = () => (
  <div className="bg-gray-100 text-xl w-full">
    <div className="text-lg my-4">
      <button className="w-full h-12 px-6 transition-colors duration-150 bg-yellow-g rounded-lg focus:shadow-outline">
        GLIMPSE-KPI
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
        className=" autolayout w-full p-2 my-4 bg-glimpse-blue content-center spread-8 text-white flex"
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
