import React from 'react'
import Image from 'next/image'
const Whatwedocard = ({imgsrc,topic,Content}) => {
  return (
    <div className="flex flex-row gap-3 w-fit items-center justify-center">
      <div className="flex items-start justify-center rounded-full p-4 bg-slate-400">
        <Image style={{maxHeight:'55px' ,maxWidth:'40px'}} alt="img" src={imgsrc}/>
      </div>
      <div className='flex h-52 flex-col gap-4' >
        <h3 className='text-gray-700 font-semibold'>{topic}</h3>
        <p className='text-gray-500'>{Content}</p>
      </div>
    </div>
  );
}

export default Whatwedocard