import React, {useState} from "react";
import "./styles.css";
import { ShoppingOutlined, HeartOutlined, CloseOutlined } from "@ant-design/icons";
import InputModal from "./InputModal";

export default function CTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white App mb-24 shadow-t">
      <div className="max-w-2xl mx-auto py-5 px-2 sm:py-5 sm:px-3 lg:max-w-3xl lg:px-8">
        <div className="flex fixed1 bg-white shadow-md pt-3 max-w-2xl mx-auto px-2  lg:max-w-3xl lg:px-8">
          <button
            type="button"
            className="mx-1 w-1/2 text-sm pr-2 border-gray text-white flex items-center justify-center h-12 rounded-2xl bg-black outline-none focus:outline-none"
          >
            Visit Shop - 
            <ShoppingOutlined />
          </button>
          <button onClick={() => setShowModal(true)} className="mx-2 w-1/2 pr-2 text-sm flex h-12 items-center justify-center rounded-2xl bg-orange-600 text-white outline-none focus:outline-none">
            Save for Later
            <HeartOutlined />
          </button>
        </div>
      </div>

      <InputModal visible={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-white w-full p-5 rounded-2xl-top fixed-modal max-w-2xl mx-auto py-5 px-5 sm:py-5 sm:px-3 lg:max-w-3xl lg:px-8">
          <div className="flex justify-between">
            <h1 className="text-xl">
            Luxome
          </h1>
          <button onClick={() => setShowModal(false)} className="text-2xl"><CloseOutlined/></button></div>
          
          <p className="py-1 px-2 text-gray-500">
          Where should we send the discount code to.
          </p>
          <input
            placeholder="example@email.com"
            type="email"
            className="w-full px-2 border border-gray-200 p-1 mt-1 h-12 rounded-2xl focus:outline-none"
          />
          <button className="w-full mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-2xl bg-orange-600 text-white outline-none focus:outline-none">
            Get discount
          </button>
        </div>
      </InputModal>
    </div>
  );
}
