import React from "react";
import Image from "next/image";

const PartenaireComponent = ({image, name}) => {
    return (
      <>
      <div className="boder w-full flex flex-col shadow shadow-black/20 rounded-lg">
      <div class="flex h-24 m-2 pb-3 items-center justify-around border-b">
          <Image
            width="56"
            height="56"
            objectFit="contain"
            src={`http://localhost:8000${image}`}
            alt="Logo"
          />
          <p class="text-lg font-bold tracking-wide uppercase ">{name}</p>
        </div>
        <p className="text-center text-brand-500">We help as Digital Factory And Banking Support</p>
      </div>
        
      </>
    );
}
 
export default PartenaireComponent;