import React from "react";
import "./styles.css";
import {
  HeartOutlined,
  ShareAltOutlined,
  RightOutlined
} from "@ant-design/icons";

export default function Header() {
  return (
    <div className="header shadow-sm bg-white fixed-top max-w-2xl mx-auto py-5 px-5 sm:py-5 sm:px-3 lg:max-w-xl lg:px-8">
      <div className="flex text-xl justify-between mb-3">
        <h1 className="tracking-tight text-2xl">glimpse</h1>
        <div className="flex text-2xl">
          <div className="px-3">
            <HeartOutlined />
          </div>
          <div className="pl-3">
            <ShareAltOutlined />
          </div>
        </div>
      </div>
      {/**/}
    </div>
  );
}
