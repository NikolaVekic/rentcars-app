import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanity/client";
import { urlFor } from "../sanity/imageBuilder";
import CTA from "../components/CTA";
import mileage from "../assets/mileage.svg";
import fuel from "../assets/fuel.svg";
import warranty from "../assets/warranty.svg";
import calendar from "../assets/calendar-2.svg";
import speed from "../assets/speed.svg";
import transmission from "../assets/transmission.svg";

export default function CarDetail() {
  const { carId } = useParams();
  const [car, setCar] = useState(null);

  function convertKwToHp(kW) {
    if (!kW) return 0;
    return Math.round(kW * 1.34102);
  }

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Toggles for the two big forms
  const [showInquiry, setShowInquiry] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  // Inquiry Form (from first screenshot, in English)
  const [inquiryData, setInquiryData] = useState({
    // Example fields (translate from your screenshot)
    vehicleBrand: "",
    vehicleModel: "",
    yearOfProduction: "",
    mileage: "",
    fuelType: "",
    engineCapacity: "",
    transmission: "",
    bodyType: "",
    numberOfDoors: "",
    condition: "",
    equipment: "",
    yourName: "",
    phoneNumber: "",
    email: "",
    additionalNotes: "",
  });

  // Credit Calculator Form (second screenshot, in English)
  const [calculatorData, setCalculatorData] = useState({
    carPrice: "",
    interestRate: "",
    downPayment: "",
    numberOfInstallments: "",
    numberOfYears: "",
    monthlyRate: "", // purely display or placeholder
  });

  // Fetch car doc
  useEffect(() => {
    const query = `*[_type == "car" && _id == $id][0]{
      _id,
      title,
      mileage,
      registrationDate,
      warranty,
      features,
      transmission,
      fuelType,
      powerKW,
      photos
    }`;

    client.fetch(query, { id: carId }).then((data) => {
      setCar(data);
      if (data?.photos?.length) {
        setCurrentIndex(0);
      }
    });
  }, [carId]);

  // Carousel logic
  const handleNext = () => {
    if (!car?.photos) return;
    setCurrentIndex((prev) => (prev + 1) % car.photos.length);
  };

  const handlePrev = () => {
    if (!car?.photos) return;
    setCurrentIndex(
      (prev) => (prev - 1 + car.photos.length) % car.photos.length
    );
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Inquiry Form handlers
  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted:", inquiryData, "Car:", car);
    alert("Your inquiry has been sent!");
  };

  // Credit Calculator Form handlers
  const handleCalculatorChange = (e) => {
    const { name, value } = e.target;
    setCalculatorData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculatorSubmit = (e) => {
    e.preventDefault();
    console.log("Credit calculation data:", calculatorData);
    alert("Calculation done (no actual logic yet)!");
  };

  if (!car) {
    return <div className="p-8">Loading car details...</div>;
  }

  // Build main photo URL
  const mainPhoto = car.photos && car.photos[currentIndex];
  const mainPhotoUrl = mainPhoto
    ? urlFor(mainPhoto).width(1000).height(600).url()
    : "https://via.placeholder.com/1000x600?text=No+Image";

  return (
    <div className="container mx-auto px-4 pt-8">
      {/* Car Title */}
      <h1 className="text-3xl lg:text-5xl font-bold mb-6">{car.title}</h1>

      {/* Carousel (full width) */}
      <div className="w-full border rounded overflow-hidden relative mb-8">
        <img
          src={mainPhotoUrl}
          alt={car.title}
          className="w-full h-auto object-cover cursor-pointer"
          onClick={openModal}
        />
        {car.photos && car.photos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded hover:bg-opacity-70 cursor-pointer"
            >
              &larr;
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded hover:bg-opacity-70 cursor-pointer"
            >
              &rarr;
            </button>
          </>
        )}
      </div>

      {/* Thumbnails (optional) */}
      {car.photos && car.photos.length > 1 && (
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {car.photos.map((photo, i) => {
            const thumbUrl = urlFor(photo).width(120).height(80).url();
            return (
              <img
                key={i}
                src={thumbUrl}
                alt={`${car.title} - Photo ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={`cursor-pointer border rounded object-cover w-[120px] h-[80px] hover:opacity-80 ${
                  i === currentIndex ? "border-blue-500" : "border-gray-300"
                }`}
              />
            );
          })}
        </div>
      )}

      {/* Two side-by-side buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => {
            setShowInquiry(!showInquiry);
            setShowCalculator(false); // close the other if open
          }}
          className="nav-btn"
        >
          {showInquiry ? "Hide Inquiry" : "Open Inquiry"}
        </button>
        <button
          onClick={() => {
            setShowCalculator(!showCalculator);
            setShowInquiry(false); // close the other if open
          }}
          className="nav-btn"
        >
          {showCalculator ? "Hide Calculator" : "Credit Calculator"}
        </button>
      </div>

      {/* Inquiry Form (from your first screenshot, in English) */}
      {showInquiry && (
        <div className="mb-8 bg-white border rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Vehicle Inquiry</h2>
          <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
            {/* Example fields from the screenshot, in English */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="vehicleBrand">
                Vehicle Brand
              </label>
              <input
                id="vehicleBrand"
                name="vehicleBrand"
                type="text"
                value={inquiryData.vehicleBrand}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="vehicleModel">
                Vehicle Model
              </label>
              <input
                id="vehicleModel"
                name="vehicleModel"
                type="text"
                value={inquiryData.vehicleModel}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label
                className="block mb-1 font-medium"
                htmlFor="yearOfProduction"
              >
                Year of Production
              </label>
              <input
                id="yearOfProduction"
                name="yearOfProduction"
                type="text"
                value={inquiryData.yearOfProduction}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="mileage">
                Mileage
              </label>
              <input
                id="mileage"
                name="mileage"
                type="text"
                value={inquiryData.mileage}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="fuelType">
                Fuel Type
              </label>
              <input
                id="fuelType"
                name="fuelType"
                type="text"
                value={inquiryData.fuelType}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label
                className="block mb-1 font-medium"
                htmlFor="engineCapacity"
              >
                Engine Capacity
              </label>
              <input
                id="engineCapacity"
                name="engineCapacity"
                type="text"
                value={inquiryData.engineCapacity}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="transmission">
                Transmission
              </label>
              <input
                id="transmission"
                name="transmission"
                type="text"
                value={inquiryData.transmission}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="bodyType">
                Body Type
              </label>
              <input
                id="bodyType"
                name="bodyType"
                type="text"
                value={inquiryData.bodyType}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="numberOfDoors">
                Number of Doors
              </label>
              <input
                id="numberOfDoors"
                name="numberOfDoors"
                type="text"
                value={inquiryData.numberOfDoors}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="condition">
                Condition
              </label>
              <input
                id="condition"
                name="condition"
                type="text"
                value={inquiryData.condition}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="equipment">
                Equipment
              </label>
              <textarea
                id="equipment"
                name="equipment"
                rows={2}
                value={inquiryData.equipment}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="yourName">
                Your Name
              </label>
              <input
                id="yourName"
                name="yourName"
                type="text"
                value={inquiryData.yourName}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={inquiryData.phoneNumber}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={inquiryData.email}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label
                className="block mb-1 font-medium"
                htmlFor="additionalNotes"
              >
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={3}
                value={inquiryData.additionalNotes}
                onChange={handleInquiryChange}
                className="border p-2 rounded w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Credit Calculator Form */}
      {showCalculator && (
        <div className="mb-8 bg-white border rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Credit Calculator</h2>
          <form
            onSubmit={handleCalculatorSubmit}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block mb-1 font-medium" htmlFor="carPrice">
                Car Price
              </label>
              <input
                id="carPrice"
                name="carPrice"
                type="number"
                value={calculatorData.carPrice}
                onChange={handleCalculatorChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="interestRate">
                Interest Rate (%)
              </label>
              <input
                id="interestRate"
                name="interestRate"
                type="number"
                step="0.01"
                value={calculatorData.interestRate}
                onChange={handleCalculatorChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="downPayment">
                Down Payment
              </label>
              <input
                id="downPayment"
                name="downPayment"
                type="number"
                value={calculatorData.downPayment}
                onChange={handleCalculatorChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label
                className="block mb-1 font-medium"
                htmlFor="numberOfInstallments"
              >
                Number of Installments
              </label>
              <input
                id="numberOfInstallments"
                name="numberOfInstallments"
                type="number"
                value={calculatorData.numberOfInstallments}
                onChange={handleCalculatorChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="numberOfYears">
                Or Number of Years
              </label>
              <input
                id="numberOfYears"
                name="numberOfYears"
                type="number"
                value={calculatorData.numberOfYears}
                onChange={handleCalculatorChange}
                className="border p-2 rounded w-full"
              />
            </div>

            {/* Example placeholder for monthly rate (read-only) */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="monthlyRate">
                Monthly Rate (approx)
              </label>
              <input
                id="monthlyRate"
                name="monthlyRate"
                type="text"
                value={calculatorData.monthlyRate}
                readOnly
                className="border p-2 rounded w-full bg-gray-100"
              />
              <p className="text-sm text-gray-500 mt-1">
                Note: This calculation is for informational purposes only. For
                an exact quote, please contact us.
              </p>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors mt-2"
            >
              Calculate
            </button>
          </form>
        </div>
      )}

      {/* Specs Section */}
      <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Specs</h2>
        <div className="flex flex-wrap gap-6">
          {/* Transmission */}
          <div className="flex items-center gap-2">
            <img src={transmission} alt="Transmission" className="w-5 h-5" />
            <p className="text-gray-700">{car.transmission || "N/A"}</p>
          </div>

          {/* Fuel Type */}
          <div className="flex items-center gap-2">
            <img src={fuel} alt="Fuel Type" className="w-5 h-5" />
            <p className="text-gray-700">{car.fuelType || "N/A"}</p>
          </div>

          {/* KW*/}
          <div className="flex items-center gap-2">
            <img src={speed} alt="Fuel Type" className="w-5 h-5" />
            <p className="text-gray-700">
              {car.powerKW} kW ({convertKwToHp(car.powerKW)} hp)
            </p>
          </div>

          {/* Mileage */}
          <div className="flex items-center gap-2">
            <img src={mileage} alt="Mileage" className="w-5 h-5" />
            <p className="text-gray-700">{car.mileage} km</p>
          </div>

          {/* Registration Date */}
          <div className="flex items-center gap-2">
            <img src={calendar} alt="Registration Date" className="w-5 h-5" />
            <p className="text-gray-700">{car.registrationDate}</p>
          </div>

          {/* Warranty */}
          <div className="flex items-center gap-2">
            <img src={warranty} alt="Warranty" className="w-5 h-5" />
            <p className="text-gray-700">{car.warranty || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="columns-2 list-disc list-inside space-y-1 text-gray-700">
          {car.features?.length ? (
            car.features.map((feature, idx) => (
              <li className="text-[14px] lg:text-[16ppx]" key={idx}>
                {feature}
              </li>
            ))
          ) : (
            <li>No features listed</li>
          )}
        </ul>
      </div>

      {/* CTA or other sections */}
      <CTA />

      {/* MODAL for enlarged carousel */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute modal-close top-4 right-8 z-10 text-white text-3xl font-bold leading-none cursor-pointer"
            >
              &times;
            </button>
            {/* Carousel in Modal */}
            <div className="relative">
              <img
                src={mainPhotoUrl}
                alt={car.title}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              {car.photos && car.photos.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-70 cursor-pointer"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-70 cursor-pointer"
                  >
                    &rarr;
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
