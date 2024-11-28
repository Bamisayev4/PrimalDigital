import React from "react";

const Ourmission = () => {
  return (
    <section className="flex flex-col sm:flex-row">
      {/* Left Side Content */}
      <div className="sm:w-2/4 pl-14  bg-zinc-700 py-16 px-4">
        <div >
          <div className="flex flex-row gap-1 mb-10">
            <div className="bg-orange-400 w-1 top-0"></div>
            <p
              className="text-white font-semibold text-2xl"
              style={{ wordSpacing: "2.5px" }}
            >
              Our Mission is Clear
            </p>
          </div>
          <div>
            <p className="text-orange-400 font-semibold text-lg w-3/5">
              The highest quality marketing for every client, on every project.
            </p>
          </div>
          <p className="text-gray-400 w-full sm:w-56 mt-6">
            The overarching mission of a digital marketing department is to
            drive measurable business growth by leveraging digital channels and
            strategies. They focus on building a strong online presence,
            engaging customers, generating leads, and using data to continuously
            optimize marketing efforts for better results.
          </p>
        </div>
      </div>

      {/* Right Side Image or Content */}
      <div className="sm:w-2/4 w-full p-4 img-bg hidden sm:block"></div>
    </section>
  );
};

export default Ourmission;
