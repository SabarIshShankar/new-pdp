import React, { useState } from "react";
import "./styles.css";
import {
  ShoppingOutlined,
  HeartOutlined,
  CloseOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import InputModal from "./InputModal";
import { animated, useTransition } from "react-spring";
import { RWebShare } from "react-web-share";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


export default function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('')

  return (
    <div className="bg-white App mb-24 shadow-t">
      <div className="max-w-2xl mx-auto py-5 px-2 sm:py-5 sm:px-3 lg:max-w-xl lg:px-8">
        <div className="flex text-xl justify-between mb-3 header shadow-sm fixed-top max-w-2xl mx-auto py-5 px-5 sm:py-5 sm:px-3 lg:max-w-xl lg:px-8">
          <h1 className="tracking-tight text-2xl">glimpse</h1>
          <div className="flex text-2xl">
            <div className="px-3">
              <button className=" " onClick={() => setShowModal(true)}>
                <HeartOutlined />
              </button>
            </div>
            <div className="pl-3">
              <RWebShare
                data={{
                  text: "Share this Guest Experience",
                  url: "http://vip.tryglimpse.com/3189",
                  title: "VIP",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button>
                  <ShareAltOutlined />
                </button>
              </RWebShare>
            </div>
          </div>
        </div>

        <div className="flex fixed1 bg-white shadow-md pt-3 max-w-2xl mx-auto px-2  lg:max-w-xl lg:px-8">
         
          <button
            onClick={() => setShowModal(true)}
            className="mx-2 w-full pr-2 text-sm flex h-12 items-center spread-8 border border-gray-200 justify-center rounded-2xl bg-yellow-600 text-white outline-none focus:outline-none"
          >
            <span className="px-2">Save for Later</span>
            <HeartOutlined />
          </button>
        </div>
      </div>

      <InputModal visible={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-white w-full p-5 rounded-2xl-top fixed-modal box max-w-2xl mx-auto py-5 px-5 sm:py-5 sm:px-3 lg:max-w-3xl lg:px-8">
          <div className="flex justify-between">
            <h1 className="text-xl">Bearaby</h1>
            <button onClick={() => setShowModal(false)} className="text-2xl">
              <CloseOutlined />
            </button>
          </div>

          <p className="py-1 px-2 text-gray-500">
            Where should we send the discount code to.
          </p>
      <PhoneInput
        international={false}
        placeholder="Enter phone number"
        value={phone}
        defaultCountry={'US'}
        className="h-12 w-full rounded-2xl text-md text-center border-2 px-2 focus:outline-none"
        type="tel"
        name="phone"
        id="phone"
        required
        onChange={setPhone as never}
      />
          <input
            placeholder="example@email.com"
            type="email"
            className=" w-full px-2 border border-gray-200 p-1 mt-1 h-12 rounded-2xl focus:outline-none text-md"
          />
          <button className="w-full mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-2xl bg-yellow-600 text-white outline-none focus:outline-none">
            Get discount
          </button>
        </div>
      </InputModal>
    </div>
  );
}
