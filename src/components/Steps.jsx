import React from "react";
import calendar from "../assets/calendar.svg";
import car from "../assets/car-2.svg";
import location from "../assets/location-tick.svg";

const Steps = () => {
  return (
    <div className="mt-[100px] lg:mt-[200px] flex flex-col justify-center items-center">
      <div className="bg-[rgba(21,114,211,0.1)] text-[#1572D3] rounded-lg px-[32px] py-[16px] text-[14px] mb-[32px]">
        HOW TO RENT?
      </div>
      <h2 className="text-[28px] lg:text-[36px] text-[#333333] text-center">
        Rent a car by following 3 simple steps
      </h2>
      <div className="flex flex-col lg:flex-row gap-[64px] lg:gap-[200px] justify-center items-center mt-[32px] lg:mt-[64px]">
        <div className="flex flex-col justify-center items-center gap-[32px]">
          <div className="bg-[rgba(21,114,211,0.1)] rounded-xl w-[80px] lg:w-[112px] lg:h-[112px] h-[80px] flex justify-center items-center">
            <img
              src={location}
              alt="Location Icon"
              className="w-[48px] h-[48px]"
            />
          </div>
          <div className="flex flex-col text-center gap-[16px]">
            <h3 className="text-[20px] font-semibold">Select Your Car</h3>
            <p className="text-[#6D6D6D]">
              Choose from our diverse fleet, filtering by brand, price, and
              features to find your perfect match.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[32px]">
          <div className="bg-[rgba(21,114,211,0.1)] rounded-xl w-[80px] lg:w-[112px] lg:h-[112px] h-[80px] flex justify-center items-center">
            <img
              src={calendar}
              alt="Calendar Icon"
              className="w-[48px] h-[48px]"
            />
          </div>
          <div className="flex flex-col text-center gap-[16px]">
            <h3 className="text-[20px] font-semibold">Book & Pay.</h3>
            <p className="text-[#6D6D6D]">
              Complete your reservation online in minutes with secure payment
              options and clear terms.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[32px]">
          <div className="bg-[rgba(21,114,211,0.1)] rounded-xl w-[80px] lg:w-[112px] lg:h-[112px] h-[80px] flex justify-center items-center">
            <img src={car} alt="Car Icon" className="w-[48px] h-[48px]" />
          </div>
          <div className="flex flex-col text-center gap-[16px]">
            <h3 className="text-[20px] font-semibold">Hit the Road</h3>
            <p className="text-[#6D6D6D]">
              Pick up your vehicle or have it delivered—then enjoy a smooth,
              worry-free journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
