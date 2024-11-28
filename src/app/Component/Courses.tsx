import React from "react";
import Image from "next/image";
import fileimg from "../assets/file.png";
import analysis from "../assets/analysis.png";
import Ourmission from "./ourmission";

export const Courses: React.FC = () => {
  return (
    <section>
      <div id="service" className="flex flex-col bg-slate-200 items-center py-16 justify-between gap-5 shadow text-center px-6 sm:px-16 md:px-44">
        <div className="flex flex-col justify-between gap-3 items-center">
          <div className="flex flex-row">
            <div className="bg-orange-400 w-2 h-full"></div>
            <p className="ml-2 text-xl font-bold text-slate-800">
              Primal Solutions
            </p>
          </div>
          <p className="text-slate-400 w-full sm:w-3/5">
            Use tools like Google Analytics, social media insights, and surveys
            to gather data. Create buyer personas that define customer
            demographics, interests, and pain points to tailor campaigns
            effectively.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Card 1 */}
          <div className="flex items-start gap-x-4">
            <div className="p-4 rounded-full h-fit bg-white">
              <Image alt="mg" src={fileimg} width={90} height={110} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <div className="bg-orange-400 w-2 h-5"></div>
                <p className="font-semibold text-slate-600">Client Services</p>
              </div>
              <h1 className="text-slate-400 text-start">
                Get more leads, customers, and sales by taking your business
                online or improving your existing online solution.
              </h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-x-4">
            <div className="p-5 rounded-full h-fit bg-white">
              <Image alt="img" src={analysis} width={70} height={90} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <div className="bg-orange-400 w-2 h-5"></div>
                <p className="font-semibold text-slate-600">Client Services</p>
              </div>
              <h1 className="text-slate-400 text-start">
                Get all your web marketing work done while you concentrate on
                your business vision and product development.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Ourmission />
    </section>
  );
};
