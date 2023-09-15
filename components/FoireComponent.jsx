import React, {useState} from 'react'

import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";





const FoireComponent = ({question, reponse}) => {
  const [hasShow, sethasShow] = useState(false)

    const handleClick = () =>{
      if(hasShow){
        sethasShow(false)
      }
      else{
        sethasShow(true);
      }
    } 

    return (
      <>
        <div onClick={() => handleClick()}>
          <dt class="text-lg leading-7">
            <button class="text-left w-full flex justify-between items-start text-brand-600 focus:outline-none focus:text-brand-900">
              <span class="font-medium text-gray-900">{question}</span>
              <span class="ml-6 h-7 flex items-center">
                {hasShow ? (
                  <MinusIcon className="h-4" />
                ) : (
                  <PlusIcon className="h-4" />
                )}
              </span>
            </button>
          </dt>

          <dd class="my-4 pr-14">
            {hasShow ? (
              <p class="text-base leading-6 text-gray-500">{reponse}</p>
            ) : (
              <></>
            )}
          </dd>
        </div>
      </>
    );
}
 
export default FoireComponent;