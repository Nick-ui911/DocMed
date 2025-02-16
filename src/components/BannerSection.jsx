import React from "react";
import banner from "../assets/banner.jpg";

const BannerSection = () => {
  return (
    <section className="relative flex items-center justify-between mb-10 px-12 py-10 w-full rounded-lg bg-[#E3F3F9] overflow-hidden">
      {/* Left Section - Text */}
      <div className="relative z-10 w-1/3">
        <h2 className="text-2xl font-bold text-gray-800">Manage Diabetes with DocMeds</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Track Glucose, Blood Pressure and get instant insights regularly
        </p>
      </div>

      {/* Background Image (Positioned Behind Content) */}
      <div 
        className="absolute top-0 left-1/3 w-2/3 h-full bg-no-repeat bg-contain bg-center z-0 max-w-[60%]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>

      {/* Right Section - Button */}
      <div className="relative z-10">
        <button className=" bg-[#0c556d] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-800">
          Try It Now
        </button>
      </div>
    </section>
  );
};

export default BannerSection;
