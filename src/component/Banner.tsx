// import React from "react";
import banner from "./banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Build Your Ideal <br/><span className="text-5xl font-extrabold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
          <span className="bg-liner-to-r from-[#FF5E36] via-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent"></span>
        </h1>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed"></p>

        <div className="flex items-center gap-4 pt-2">
          <button className="bg-linear-to-r from-[#FF5E36] to-[#E91E63] text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:opacity-95 transition-opacity">Explore Technologies</button>

          <button className="border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">Learn more</button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={banner}
          alt="Development Stack Illustration"
          className="max-w-full h-auto object-contain max-h-100"
        />
      </div>
    </div>
  );
};

export default Banner;
