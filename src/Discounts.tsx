import React from "react";
import "./styles.css";


export default function Discounts() {
  return (
    <div className="App font">
      <div className="bg-white">
      <div className="border-8 border-yellow-500 lg:max-w-2xl mx-auto"></div>
        <div className="max-w-2xl mx-auto py-5 px-2 sm:py-5u sm:px-6 lg:max-w-2xl lg:px-8">
          <div className="flex justify-between items-center mb-5">
            <span className="text-xl tracking-tight animate__animated">glimpse</span>

            <span className="flex text-sm autolayout">
              Claim a free $10
              <button className="bg-black text-white p-2 ml-3 rounded">
                Claim
              </button>
            </span>
          </div>
          <div className="border-b"></div>
          <h2 className="text-1xl my-4">
            Claim Exclusive Discounts for products around you
          </h2>
          <div className="grid grid-flow-col gap-1 pb-2">
            <div className="col-span-1 box2">
              <div className="hover:bg-gray-50 p-1 rounded-2xl transition ease-in-out">
                <div className="relative  overflow-hidden">
                  <img
                    className="h-48 lg:h-60 w-full object-cover rounded-2xl mb-2"
                    src="https://glimpse-public-images.s3.us-east-2.amazonaws.com/Lyric+Terracotta+SOLO+Undocked.jpg"
                  />
                  <div className="absolute py-4 w-fit bottom-0 inset-x-0  text-white text-xs text-center leading-4">
                    <div className="bg-red-600 mx-2 text-white rounded-full px-2 py-1">
                      15% OFF
                    </div>
                  </div>
                </div>
                <h1 className="text-md">Lyric Massager</h1>
                <div className="mb-1 text-md font-medium flex">
                  $330.00
                  <span className="line-through px-2 text-gray-500">
                    $350.00
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="hover:bg-gray-50 p-1 rounded-2xl transition ease-in-out">
                <div className="relative  overflow-hidden">
                  <img
                    className="h-48 lg:h-60 w-full object-cover rounded-2xl mb-2"
                    src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/minky-minky-grey-rc-2_1080x.png?v=1640931533"
                  />
                  <div className="absolute py-4 w-fit bottom-0 inset-x-0  text-white text-xs text-center leading-4">
                    <div className="bg-red-600 mx-2 text-white rounded-full px-2 py-1">
                      20% OFF
                    </div>
                  </div>
                </div>
                <h1 className="text-md">Lyric Massager</h1>
                <div className="mb-1 text-md font-medium flex">
                  $330.00
                  <span className="line-through px-2 text-gray-500">
                    $350.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-col gap-1 pb-2">
            <div className="col-span-1">
              <div className="hover:bg-gray-50 p-1 rounded-2xl transition ease-in-out">
                <div className="relative  overflow-hidden">
                  <img
                    className="h-48 lg:h-60 w-full object-cover rounded-2xl mb-2"
                    src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/Luxome-LAYRPillow-Lightbox_768x.png?v=1642777005"
                  />
                  <div className="absolute py-4 w-fit bottom-0 inset-x-0  text-white text-xs text-center leading-4">
                    <div className="bg-red-600 mx-2 text-white rounded-full px-2 py-1">
                      20% OFF
                    </div>
                  </div>
                </div>
                <h1 className="text-md">Lyric Massager</h1>
                <div className="mb-1 text-md font-medium flex">
                  $330.00
                  <span className="line-through px-2 text-gray-500">
                    $350.00
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="hover:bg-gray-50 p-1 rounded-2xl transition ease-in-out">
                <div className="relative  overflow-hidden">
                  <img
                    className="h-48 lg:h-60 w-full object-cover rounded-2xl mb-2"
                    src="https://cdn.shopify.com/s/files/1/0047/8121/1761/products/Centium_Sheets_and_Duvet_Grey_Grey_320490ae-60b4-430f-a696-f13c64eace16-903196_650x.jpg"
                  />
                  <div className="absolute py-4 w-fit bottom-0 inset-x-0  text-white text-xs text-center leading-4">
                    <div className="bg-red-600 mx-2 text-white rounded-full px-2 py-1">
                      15% OFF
                    </div>
                  </div>
                </div>
                <h1 className="text-md">Lyric Massager</h1>
                <div className="mb-1 text-md font-medium flex">
                  $330.00
                  <span className="line-through px-2 text-gray-500">
                    $350.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
