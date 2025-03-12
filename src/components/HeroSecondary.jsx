import React, { useState } from "react";
import carImg from "../assets/multiple-cars.png";
import phoneIcon from "../assets/call.svg";
import carIcon from "../assets/car.svg";
import { Link } from "react-router-dom";

const HeroSecondary = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row gap-[50px] lg:gap-[100px] my-[80px]">
      <div className="w-full lg:max-w-3/7 flex flex-col gap-[18px] text-center lg:text-left">
        <h1 className="font-semibold text-[38px]  lg:text-[46px] text-[#242424]">
          Discover a World of Cars That{" "}
          <span className="text-[#1572D3]">Fit Your Lifestyle</span>
        </h1>
        <p className="text-[16px] lg:text-[18px] text-[#242424]">
          Browse through our curated selection of cars. Filter by brand,
          mileage, warranty, and price to discover the vehicle that fits your
          style and budget.
        </p>
      </div>
      <div className="w-full max-w-[320px] lg:max-w-full">
        <img
          src={carImg}
          alt="Blue Car Image"
          onLoad={() => setLoaded(true)}
          className={`
            w-full mt-6
            text-white
            transition-opacity duration-1200 ease-in-out
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>
    </div>
  );
};

export default HeroSecondary;
