import React from "react";
import Image from "next/image";

type WhatwedocardProps = {
  imgsrc: string;
  topic: string;
  Content: string;
};

const Whatwedocard: React.FC<WhatwedocardProps> = ({
  imgsrc,
  topic,
  Content,
}) => {
  return (
    <div className="flex flex-row gap-3 w-fit items-center justify-center">
      <div className="flex items-start justify-center rounded-full p-4 bg-slate-400">
        <Image
          src={imgsrc}
          alt={topic} // Better alt text for accessibility
          width={40}
          height={55}
          className="object-contain"
        />
      </div>
      <div className="flex h-52 flex-col gap-4">
        <h3 className="text-gray-700 font-semibold">{topic}</h3>
        <p className="text-gray-500">{Content}</p>
      </div>
    </div>
  );
};

export default Whatwedocard;
