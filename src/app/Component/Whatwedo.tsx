import React from "react";
import Whatwedocard from "./whatwedocard";
import mes from "../assets/mes.png";
import net from "../assets/net.png";
import smartph from "../assets/smartphone.png";
import doc from "../assets/doc.png";
import file from "../assets/file.png";
import arch from "../assets/arch.png";

const Whatwedo = () => {
  return (
    <div id="what-we-do" className="px-4 sm:px-44 py-14 bg-slate-200">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-2 flex-row">
          <div className="w-2 bg-orange-600"></div>
          <h2 className="text-3xl">What We Do</h2>
        </div>
        <p className="pt-2">Know More About Our Service</p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center py-14">
          <Whatwedocard
            topic={"Search Engine Marketing"}
            imgsrc={arch}
            Content="Our SEM marketing department mission in our company is to drive high-quality traffic, generate leads and sales, and maximize ROI through targeted paid advertising on search engines."
          />
          <Whatwedocard
            topic={"Data science & Analytics"}
            imgsrc={net}
            Content="The mission our Data Science & Analytics in a company is to empower decision-makers, optimize operations, and drive innovation through the strategic use of data."
          />
          <Whatwedocard
            topic={"Mobile Marketing"}
            imgsrc={smartph}
            Content="The mission of our Mobile Marketing in a company is to harness the power of mobile technology to reach customers effectively, build relationships, and drive business outcomes."
          />
          <Whatwedocard
            topic={"Content Marketing"}
            imgsrc={doc}
            Content="The mission of our Content Marketing within a company is to create a consistent flow of valuable, relevant, and informative content that serves the target audience, builds trust, and fosters long-term relationships."
          />
          <Whatwedocard
            topic={"Engagement Marketing"}
            imgsrc={mes}
            Content="The mission of our Engagement Marketing in a company is to build strong, lasting relationships with customers by fostering meaningful, two-way interactions."
          />
          <Whatwedocard
            topic={"Social Media Marketing"}
            imgsrc={file}
            Content="The mission of our Social Media Marketing in a company is to strategically engage with audiences across various platforms to boost brand awareness, drive engagement, build lasting relationships, and achieve measurable business goals."
          />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
