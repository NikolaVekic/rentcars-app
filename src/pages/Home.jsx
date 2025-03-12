import React from "react";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Benefits from "../components/Benefits";
import Showcase from "../components/Showcase";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      <main className="container">
        <Hero />
        <Steps />
        <Benefits />
        <Showcase />
        <CTA />
      </main>
    </>
  );
};

export default Home;
