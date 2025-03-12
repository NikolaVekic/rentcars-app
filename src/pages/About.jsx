// src/pages/About.jsx
import React from "react";
import aboutHeroImg from "../assets/about-hero-image.png"; // Example hero image
import aboutBoxImg from "../assets/car-2.svg"; // Example icon
import CTA from "../components/CTA";

// Define 4 items with a title + paragraph
const boxData = [
  {
    title: "Flexible Financing",
    description:
      "We provide straightforward payment plans so you can drive away with confidence. Enjoy custom terms tailored to your needs.",
  },
  {
    title: "No Hidden Costs",
    description:
      "Count on transparent pricing and clear contracts. With us, there are no unexpected fees or last-minute surprises.",
  },
  {
    title: "Fast & Easy Process",
    description:
      "Spend less time on paperwork and more time on the road. Our streamlined approach keeps things simple from start to finish.",
  },
  {
    title: "Nationwide Support",
    description:
      "Wherever you are, our dedicated team is ready to assist with insurance, registration, and any other queries you might have.",
  },
];

const About = () => {
  return (
    <div className="container flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center gap-8 lg:gap-16 mt-12 lg:mt-24 px-4 lg:px-0">
        {/* Left Text */}
        <div className="flex flex-col gap-6 max-w-2xl text-center">
          <h1 className="text-3xl lg:text-5xl font-semibold leading-tight text-gray-800">
            Discover Our Story
          </h1>
          <p className="text-base lg:text-lg text-gray-600">
            Learn how our mission, values, and dedicated team have shaped the
            way we offer the best car rental services. From humble beginnings to
            nationwide reach, we’re committed to making your journey as smooth
            as possible.
          </p>
        </div>
        {/* Right Image */}
        <div className="w-full max-w-md flex justify-center">
          <img
            src={aboutHeroImg}
            alt="About Hero"
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* 4-BOX SECTION */}
      <section className="my-16 lg:mt-24 px-4 lg:px-0">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800">
            Explore Our Advantages
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mt-4">
            We pride ourselves on delivering exceptional service—from financing
            to convenient insurance solutions—ensuring you find the perfect car
            for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {boxData.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={aboutBoxImg}
                alt="Box Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default About;
