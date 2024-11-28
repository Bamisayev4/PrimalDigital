import React from "react";
import Link from "next/link";

const Interested = () => {
  return (
    <div className="intrer flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center absolute z-20 gap-2">
        {/* Increased z-index */}
        <div className="flex flex-row gap-2">
          <div className=" bg-orange-400 w-2"></div>
          <p className="z-20 text-white text-3xl font-semibold">Intrested?</p>
        </div>
        {/* Increased z-index for the text */}
        <p className="text-slate-100 text-center text-xl">Join Us Now</p>
        <Link
          href="/signup"
          
        >
          <button
            className="mt-5 border-solid rounded-lg transition-all duration-700 ease-in-out 
          hover:bg-white hover:text-orange-400 hover:scale-105 hover:shadow-red-950 hover:shadow-2xl border-white border-2 text-white px-2 py-2"
          >
            GET STARTED
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Interested;
