import React, { useEffect, useLayoutEffect } from 'react'

const videos = [
    {
        url: "http://localhost:8000/static/videos/video.mp4",
        title: "Nos compétences à votre service",
        text: "Nos concepteurs, architectes, développeurs et analystes de qualité excellent dans toutes les technologies permettant le développement de votre entreprise.",
        active: true    
    },
    {
        url: "http://localhost:8000/static/videos/video1.mp4",
        title: "Programmer c'est s'amuser",
        text: "C'est la première des motivations ! S'amuser en apprenant à programmer, c'est possible. La programmation créative, c'est tout simplement apprendre à programmer de façon ludique, pour s'amuser, et pour créer.",
        active: false     
    },
    {
        url: "http://localhost:8000/static/videos/video2.mp4",
        title: "Donnez l'essence meme du bussines",
        text: "C'est une évidence, la donnée peut être utilisée par les organisation pour créer un avantage compétitif. Généralement sans changer les fonctions et processus au coeur des organisations",
        active: false    
    },
];



export default function VideoSlide() {

    let index = 0;
    useEffect(() =>{
        setInterval(()=>{
            videos[index].active = false;
            index = (index + 1) % videos.length;
            videos[index].active = true;
        }, 8000)
        
    }, []);

   

  return (
    
      
            <div class="shadow-lg  w-full h-full rounded-lg overflow-hidden relative items-center justify-center ">
                {videos.map((video) =>(
                    <>
                    {video.active?
                   ( <>
                 
                    <video
                    
                  class="h-full w-full object-fill absolute"
                  src={video.url}
                  controls={false}
                  autoPlay={true}
                  loop={false}
                  
                    />
                <div class="absolute bg-gray-900/60 bg-opacity-75 inset-0 top-0"></div>
                <div class="m-auto mt-16 max-w-sm sm:max-w-xl text-center relative">
                  <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                  {video.title}
                  <span class="text-brand-600">{}</span>
                    
                  </h1>
                  <p class="mt-3 text-base text-gray-200 sm:text-lg md:mt-5">
                   {video.text}
                  </p>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center sm:items-center">
                    <div class="rounded-md shadow">
                      <a
                        href="about.html"
                        class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:border-brand-700 focus:shadow-outline-brand transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        En savoir plus
                      </a>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="portoflio.html"
                        class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-brand-700 bg-brand-100 hover:text-brand-600 hover:bg-brand-50 focus:outline-none focus:shadow-outline-brand focus:border-brand-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        Nos réalisations
                        <svg
                          class="w-5 h-5 ml-1.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  </div>
                    </>) : (<></>)
                    }
                    </>
                ))
                }
               
               
               
            </div>
   
  )
}
