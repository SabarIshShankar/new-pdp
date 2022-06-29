import React from "react";
import "./styles.css";
import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";

export default function CTA() {
  return (
    <div className="bg-white App mb-24">
      <div className="max-w-2xl mx-auto py-5 px-2 sm:py-5 sm:px-3 lg:max-w-3xl lg:px-8">
        <div className="flex fixed1 bg-white shadow-top pt-3 max-w-2xl mx-auto px-2  lg:max-w-3xl lg:px-8">
          <button
            type="button"
            className="mx-1 w-1/2 text-sm border-gray text-white flex items-center justify-center h-12 rounded-lg bg-red-700 outline-none focus:outline-none"
          >
            Visit Shop
            <ShoppingOutlined />
          </button>
          <button className="mx-2 w-1/2 text-sm flex h-12 items-center justify-center rounded-lg bg-save text-white outline-none focus:outline-none">
            Save for Later
            <HeartOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}
