import React from "react";
import phone from "../assets/phone.png";
import phoneIcon from "../assets/call.svg";
import carIcon from "../assets/car.svg";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="flex flex-col  lg:flex-row gap-[32px] items-center lg:gap-[100px]  lg:mt-[100px]">
      <div className="w-full px-4 lg:px-0 flex flex-col gap-[18px] lg:gap-[30px] text-center lg:text-left">
        <h1 className="font-semibold text-[32px]  lg:text-[46px] text-[#242424]">
          Browse Our Best Assortment of Cars{" "}
        </h1>
        <p className="text-[16px] lg:text-[18px] text-[#242424]">
          Explore thousands of vehicles—from budget-friendly rides to luxury
          SUVs— all in one place. Whether you’re commuting or planning a weekend
          escape, we have the perfect car for you.
        </p>
        <div className="flex lg:justify-start justify-center gap-4">
          <Link
            to="/browse"
            className="bg-[rgba(21,114,211,0.1)] cursor-pointer text-[#1572D3] rounded-lg px-[32px] py-[16px] text-[14px] mb-[32px]"
          >
            {" "}
            SEARCH CAR &rarr;
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[320px] lg:max-w-[500px]">
        <img src={phone} alt="Iphone" />
      </div>
    </div>
  );
};

export default CTA;
