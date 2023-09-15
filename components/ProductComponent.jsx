import React from "react";
import Image from "next/image";


const ProductComponent = ({name, image, productType, description}) => {
    return (
      <>
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <Image
              width={1000}
              height={100}
              objectFit="contain"
              src={image}
              alt="Logo"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm leading-5 font-medium text-brand-600 uppercase tracking-wide">
                <a href="#" class="hover:underline">
                  {productType}
                </a>
              </p>
              <a href="#" class="block">
                <h3 class="mt-3 text-lg leading-7 font-medium text-gray-900">
                  {name}
                </h3>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  {description}
                </p>
              </a>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default ProductComponent;