import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";

const AboutBrand: React.FC = () => {

  return (
    <div className="border-gray-200 overflow-hidden my-8 rounded-2xl spread-8">
     


  	<img className="object-cover w-full h-36" src="https://media-exp1.licdn.com/dms/image/C561BAQHwlKS8yZAPrw/company-background_10000/0/1587846535448?e=2147483647&v=beta&t=Kleaoso4-IRW47zOMu_r4XDPpVKyAavf3ce7Rmz7FkU" alt="head" />
    <div className="flex ml-3 -mt-8">
        <img className="rounded-full border-solid border-white border-2 -mt-3 h-16" src="https://pbs.twimg.com/profile_images/1270398175178874880/OgLcWk8w_400x400.jpg"/>		
    </div>
	<div className="text-left px-3 pb-6 pt-4">
    <h1 className="text-xl">Bearaby</h1>
    <h1 className="text-sm">The natural way to sleep well. Soft, breathable, chunky knit that looks as good as it feels</h1>
	</div>
    <div className="text-center px-3 py-2 border-t">
    <h1 className="text-md">Visit</h1>
	</div>

    
    </div>
  );
};

export default AboutBrand;
