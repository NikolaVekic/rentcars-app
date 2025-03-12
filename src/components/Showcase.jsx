import React, { useEffect, useState } from "react";
import Card from "./Card";
import { client } from "../sanity/client";
import { Link } from "react-router-dom";

const Showcase = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // GROQ query for all car docs, including the new fields
    const query = `*[_type == "car"]{
      _id,
      title,
      mileage,
      registrationDate,
      warranty,
      features,
      price,
      photos,
      fuelType,
      transmission,
      powerKW
    }`;

    client.fetch(query).then((data) => {
      setCars(data);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-[80px] pb-[80px]">
      <div className="bg-[rgba(21,114,211,0.1)] text-[#1572D3] w-full max-w-[230px] rounded-lg px-[32px] py-[16px] text-[14px] mb-[32px]">
        POPULAR RENTAL DEALS
      </div>
      <h2 className="text-[28px] text-center lg:text-[36px] text-[#333333]">
        Most popular cars rental deals
      </h2>

      {/* Grid of dynamic cards */}
      <div className="grid grid-cols-1 gap-[32px] lg:gap-[100px] pt-[64px] lg:grid-cols-2 xl:grid-cols-4">
        {cars.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>

      <Link
        to="/browse"
        className="text-[#262626] p-[8px] mt-[64px] hover:bg-[#E2E2E2] cursor-pointer rounded-lg w-full max-w-[210px] text-center border-[#4E4E4E] border-1"
      >
        Show all vehicles &rarr;
      </Link>
    </div>
  );
};

export default Showcase;
