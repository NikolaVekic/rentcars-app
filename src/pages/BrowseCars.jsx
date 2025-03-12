import React, { useState, useEffect } from "react";
import { client } from "../sanity/client";
import { urlFor } from "../sanity/imageBuilder";
import Card from "../components/Card"; // Import your Card component
import { Link } from "react-router-dom";
import HeroSecondary from "../components/HeroSecondary";

export default function BrowseCars() {
  // State for all cars from Sanity
  const [cars, setCars] = useState([]);

  // State for filters
  const [brandFilter, setBrandFilter] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [warrantyFilter, setWarrantyFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  // Fetch all cars on mount
  useEffect(() => {
    const query = `*[_type == "car"]{
      _id,
      title,
      mileage,
      registrationDate,
      warranty,
      features,
      photos,
      price,
      powerKW,
      transmission,
      fuelType
    }`;

    client.fetch(query).then((data) => {
      setCars(data);
    });
  }, []);

  // ---- FILTER LOGIC (client-side) ----
  const filteredCars = cars.filter((car) => {
    // Brand filter
    if (
      brandFilter &&
      !car.title.toLowerCase().includes(brandFilter.toLowerCase())
    ) {
      return false;
    }

    // Warranty filter
    if (warrantyFilter && warrantyFilter !== car.warranty) {
      return false;
    }

    // Mileage range
    const mileage = car.mileage || 0;
    const minM = minMileage ? parseInt(minMileage, 10) : 0;
    const maxM = maxMileage ? parseInt(maxMileage, 10) : Infinity;
    if (mileage < minM || mileage > maxM) {
      return false;
    }

    // Price range
    const price = car.price || 0;
    const minP = minPrice ? parseInt(minPrice, 10) : 0;
    const maxP = maxPrice ? parseInt(maxPrice, 10) : Infinity;
    if (price < minP || price > maxP) {
      return false;
    }

    return true;
  });

  // ---- PAGINATION LOGIC ----
  const totalCars = filteredCars.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const carsToDisplay = filteredCars.slice(startIndex, endIndex);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // Generate page buttons
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`px-3 py-1 rounded ${
          i === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-[100vh]">
      <HeroSecondary />

      <div className="py-8">
        <h1 className="text-3xl font-bold mb-6">Browse Cars</h1>

        {/* FILTERS */}
        <div className="mb-8 p-6 rounded-md shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Brand */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Brand
              </label>
              <input
                type="text"
                placeholder="e.g. BMW"
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            {/* Mileage range */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Min Mileage
              </label>
              <input
                type="number"
                placeholder="0"
                value={minMileage}
                onChange={(e) => setMinMileage(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Max Mileage
              </label>
              <input
                type="number"
                placeholder="100000"
                value={maxMileage}
                onChange={(e) => setMaxMileage(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            {/* Warranty */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Warranty
              </label>
              <select
                value={warrantyFilter}
                onChange={(e) => setWarrantyFilter(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="">Any</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="12 months">12 months</option>
                <option value="N/A">No Warranty</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Min Price
              </label>
              <input
                type="number"
                placeholder="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Max Price
              </label>
              <input
                type="number"
                placeholder="999999"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>
        </div>

        {/* CAR LIST */}
        {carsToDisplay.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {carsToDisplay.map((car) => (
              <Card key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No cars match your filters.</p>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex gap-2 justify-center mt-6">{pageButtons}</div>
        )}
      </div>
    </div>
  );
}
