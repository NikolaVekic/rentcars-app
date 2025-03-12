import React from "react";
import { Link } from "react-router-dom";
import mileage from "../assets/mileage.svg";
import fuel from "../assets/fuel.svg";
import speed from "../assets/speed.svg";
import transmission from "../assets/transmission.svg";
import { urlFor } from "../sanity/imageBuilder";

function convertKwToHp(kW) {
  if (!kW) return 0;
  return Math.round(kW * 1.34102);
}

const Card = ({ car }) => {
  const firstPhoto = car.photos && car.photos[0];
  // Build the image URL if you have an image builder; otherwise, skip
  const imageUrl = firstPhoto
    ? urlFor(firstPhoto).width(240).height(120).url()
    : "https://via.placeholder.com/240x120?text=No+Image";

  return (
    <div className="bg-white w-[280px] min-h-[470px] rounded-xl shadow-lg p-4 flex flex-col">
      {/* Car Image */}
      <div className="flex justify-center">
        <img
          src={imageUrl}
          alt={car.title}
          className="max-w-[240px] max-h-[120px] object-cover rounded-lg"
        />
      </div>

      <h3 className="text-[18px] text-[#262626] font-semibold mt-4">
        {car.title}
      </h3>

      <p className="mt-1 text-sm text-[#959595]">
        Reg Date: {car.registrationDate}
      </p>

      {/* Four Key Stats */}
      <div className="mt-3 flex flex-col gap-x-4 gap-y-2 text-sm text-[#959595]">
        {/* Power (kW + HP) */}
        <div className="flex items-center gap-2">
          <img src={speed} alt="Speed icon" className="w-5 h-5" />
          <p>
            {car.powerKW} kW ({convertKwToHp(car.powerKW)} hp)
          </p>
        </div>

        {/* Fuel Type */}
        <div className="flex items-center gap-2">
          <img src={fuel} alt="Fuel icon" className="w-5 h-5" />
          <p>{car.fuelType || "N/A"}</p>
        </div>

        {/* Transmission */}
        <div className="flex items-center gap-2">
          <img src={transmission} alt="Transmission icon" className="w-5 h-5" />
          <p>{car.transmission || "N/A"}</p>
        </div>

        {/* Mileage */}
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <img src={mileage} alt="Mileage icon" className="w-5 h-5" />
            <p>{car.mileage} km</p>
          </div>
        </div>
      </div>

      {/* Price & Rent Button */}
      <div className="mt-auto border-t pt-4">
        {/* Price */}
        <div className="flex justify-between items-center pb-[12px]">
          <p className="text-[#959595] text-sm">Price</p>
          <p className="text-lg font-semibold text-[#262626]">
            €{car.price || "N/A"}
          </p>
        </div>
        {/* Link to Car Detail Page */}
        <div className="w-full">
          <Link
            to={`/car/${car._id}`}
            className="bg-[#1572D3] text-white py-2 px-4 rounded-lg block w-full text-center hover:bg-[#2680dc] transition-colors"
          >
            Buy Now &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
