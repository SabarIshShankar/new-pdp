import React from "react";
import "./styles.css";
import {
  HeartOutlined,
  ShareAltOutlined,
  RightOutlined
} from "@ant-design/icons";

export default function Header() {
  return (
    <div className="header">
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
      <div className="flex underlined mb-5">
        <div className="text-sm">Home</div>
        <span className="px-3">{'>'} </span>
        <div className="text-sm">Product Name</div>
      </div>
    </div>
  );
}
