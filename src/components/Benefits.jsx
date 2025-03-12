import React, { useState, useRef, useEffect } from "react";
import audi from "../assets/audi.png";
import location from "../assets/location-tick.svg";

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // If you only want the animation once, unobserve after it appears
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } //  0.1 = 10% of the image in view
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center w-full gap-[50px] mt-[90px] lg:mt-[180px] lg:pb-[60px]">
      <div className="lg:w-1/2 max-w-[320px] lg:max-w-full flex justify-center items-center">
        <img
          ref={imageRef}
          src={audi}
          alt="Audi Car"
          className={`
             mt-0 lg:mt-[48px]
            transition-opacity duration-1200 ease-in-out
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>
      <div className="text-center flex flex-col items-center lg:items-start  lg:text-left  lg:w-1/2">
        <div className="bg-[rgba(21,114,211,0.1)] text-[#1572D3] w-full max-w-[180px] rounded-lg px-[32px] py-[16px] text-[14px] mb-[32px]">
          WHY CHOOSE US
        </div>
        <h2 className="text-[28px] text-center lg:text-left  lg:text-[36px] text-[#333333]">
          We offer the best experience with our rental deals
        </h2>
        <div className="flex flex-col gap-[32px] mt-[32px]">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[24px]">
            <div className="bg-[rgba(21,114,211,0.1)] rounded-xl w-full max-w-[64px] h-[64px] flex justify-center items-center">
              <img
                src={location}
                alt="Location Icon"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left  gap-[16px]">
              <h3 className="text-[20px] font-semibold">
                Bespoke Car Ordering
              </h3>
              <p className="text-[#6D6D6D]">
                Tailor your ride with custom add-ons and features, ensuring
                every journey is truly yours.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[24px]">
            <div className="bg-[rgba(21,114,211,0.1)] rounded-xl w-full max-w-[64px] h-[64px] flex justify-center items-center">
              <img
                src={location}
                alt="Location Icon"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left  gap-[16px]">
              <h3 className="text-[20px] font-semibold">Expert Assistance</h3>
              <p className="text-[#6D6D6D]">
                Our dedicated team is on hand to guide you, from choosing the
                right model to finalizing paperwork.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[24px]">
            <div className="bg-[rgba(21,114,211,0.1)] rounded-xl w-full max-w-[64px] h-[64px] flex justify-center items-center">
              <img
                src={location}
                alt="Location Icon"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left  gap-[16px]">
              <h3 className="text-[20px] font-semibold">Quality Guarantee</h3>
              <p className="text-[#6D6D6D]">
                Each vehicle undergoes thorough checks for performance,
                cleanliness, and safety before every rental.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[24px]">
            <div className="bg-[rgba(21,114,211,0.1)] rounded-xl w-full max-w-[64px] h-[64px] flex justify-center items-center">
              <img
                src={location}
                alt="Location Icon"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex flex-col text-center lg:text-left  gap-[16px]">
              <h3 className="text-[20px] font-semibold">
                Comprehensive Insurance.
              </h3>
              <p className="text-[#6D6D6D]">
                Simplify your coverage with our integrated insurance solutions,
                so you can drive with peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
