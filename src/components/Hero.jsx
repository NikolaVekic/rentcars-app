import React, { useState } from "react";
import carImg from "../assets/car.png";
import phoneIcon from "../assets/call.svg";
import carIcon from "../assets/car.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row gap-[50px] lg:gap-[100px] mt-[100px]">
      <div className="w-full max-w-[390px] flex flex-col gap-[18px] lg:gap-[30px] text-center lg:text-left">
        <h1 className="font-semibold text-[38px]  lg:text-[46px] text-[#242424]">
          Find, book and rent a car{" "}
          <span className="text-[#1572D3]">Easily</span>
        </h1>
        <p className="text-[16px] lg:text-[18px] text-[#242424]">
          Get a car whereever and whenever you need it by checking out our
          available rental deals.
        </p>
        <div className="flex gap-4">
          <Link
            to="/contact"
            className="hero-btn w-full flex items-center justify-center gap-3 cursor-pointer hover:bg-[#242424]"
          >
            <img src={phoneIcon} alt="Contact Icon" className="w-5 h-5" />
            Contact Us
          </Link>
          <Link
            to="/browse"
            className="hero-btn w-full flex items-center justify-center gap-3 cursor-pointer hover:bg-[#242424]"
          >
            <img src={carIcon} alt="Car Icon" className="w-5 h-5" />
            Search Cars
          </Link>
        </div>
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

export default Hero;
