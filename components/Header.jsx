import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const router = useRouter()
  const [showHeader, setShowHeader] = useState(false);
  const handleShowHeader = ()=>{
    const nav = document.getElementById('nav')
    if(showHeader){
        setShowHeader(false)
        nav.classList.remove('top-0')
        nav.classList.add('top-[-1000px]')
    }else{
        setShowHeader(true)
        nav.classList.add('top-0')
        nav.classList.remove('top-[-1000px]')
    }
  }
  const contact = () => {
    router.push({
      pathname: "/contact",
    });
  };
  const service = () => {
    router.push({
      pathname: "/service",
    });
  };
  const accueil = () => {
    router.push({
      pathname: "/",
    });
  };
  const realisation = () => {
    router.push({
      pathname: "/realisation",
    });
  };
  const porfolio = () => {
    router.push({
      pathname: "/porfolio",
    });
  };
  const team = () => {
    router.push({
      pathname: "/team",
    });
  };
 
  const Url = "http://localhost:8000"
    return (
      
      <div>
        <div class="bg-brand-100 py-2">
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-1">
                <button
                  type="button"
                  class="outline-none focus:outline-none text-sm leading-5 bg-transparent text-brand-600 hover:text-brand-800 focus:text-brand-700"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span class="text-sm leading-5 text-brand-600 font-medium">
                  Votre vision, notre mission. Nous grandissons avec votre
                  succès
                </span>
                <button
                  type="button"
                  class="outline-none focus:outline-none text-sm leading-5 bg-transparent text-brand-600 hover:text-brand-800 focus:text-brand-700"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex items-center space-x-4">
                <a
                  href="#"
                  class="inline-flex items-center text-brand-800 hover:text-brand-700 active:text-brand-600 transition duration-150 ease-in-out"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.6 4.433h1.567v-2.65a21.758 21.758 0 0 0-2.283-.116c-2.267 0-3.817 1.383-3.817 3.916v2.184H5.51v2.966h2.558v7.6h3.067v-7.6h2.55l.383-2.966h-2.933V5.875c0-.875.233-1.442 1.466-1.442z" />
                  </svg>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center text-brand-800 hover:text-brand-700 active:text-brand-600 transition duration-150 ease-in-out"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.17 5.833h-.024a1.862 1.862 0 1 1 .047-3.714 1.863 1.863 0 1 1-.023 3.714zM5.848 8.334H2.515v10h3.333v-10zM14.598 8.334a3.727 3.727 0 0 0-2.917 1.419v-1.42H8.348v10h3.333V13.75a1.667 1.667 0 1 1 3.333 0v4.584h3.334v-6.25a3.75 3.75 0 0 0-3.75-3.75z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          x-data="{ open: false }"
          class="relative py-6 bg-white shadow-md z-10"
        >
          <nav class="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-auto md:w-auto">
                <a href="#" aria-label="Home">
                  <Image
                    class="h-8"
                    width="100"
                    height="50"
                    src={`http://localhost:8000/static/images/logo.png`}
                    alt="Logo"
                  />
                </a>
                <div class="-mr-2 flex items-center md:hidden"></div>
              </div>
              <div class="hidden space-x-6 md:flex md:ml-20">
                <a
                  onClick={accueil}
                  class="font-medium cursor-pointer text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out"
                >
                  Accueil
                </a>
                <a
                  onClick={service}
                  class="font-medium cursor-pointer text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out"
                >
                  Services
                </a>
                <a
                  onClick={realisation}
                  class="font-medium cursor-pointer text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out"
                >
                  Réalisations
                </a>
                <a
                  onClick={team}
                  class="font-medium cursor-pointer text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out"
                >
                  Équipe
                </a>
                <a
                  onClick={contact}
                  class="font-medium cursor-pointer text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out"
                >
                  Contact
                </a>
              </div>
            </div>
            <div class="hidden md:flex">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:shadow-outline-brand focus:border-brand-700 active:bg-brand-700 transition duration-150 ease-in-out"
              >
                Demander un devis
              </a>
            </div>
            <div className="flex md:hidden">
              <Bars3BottomRightIcon className="w-10 h-10" onClick={()=>handleShowHeader()} />
            </div>
          </nav>
          <div id='nav' class="absolute top-[-1000px] duration-500 inset-x-0 z-10 p-2 transition-all transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg">
              <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5 space-y-6">
                  <div class="flex items-center justify-between">
                    <div>
                      <Image
                        class="h-10 w-auto sm:h-10"
                        width="150"
                        height="32"
                        src={`http://localhost:8000/static/images/logo.png`}
                        alt="Logo"
                      />
                    </div>
                    <div class="-mr-2"><XMarkIcon className="w-10 h-10" onClick={()=>handleShowHeader()} /></div>
                  </div>
                  <div>
                    <nav class="grid gap-y-8 ">
                      <a
                        href="#"
                        class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-brand-600"
                          x-description="Heroicon name: chart-bar"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div
                          class="text-base leading-6 font-medium text-gray-900"
                          onClick={contact}
                        >
                          Accueil
                        </div>
                      </a>
                      <a  href="#" class="-m-3 p-3 flex cursor-pointer items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg
                        class="flex-shrink-0 h-6 w-6 text-brand-600"
                        x-description="Heroicon name: cursor-click"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        ></path>
                      </svg>
                      <div
                        class="text-base leading-6 font-medium text-gray-900"
                        onClick={service}
                      >
                        Services
                      </div>
                      </a>
                      <a  href="#" class="-m-3 p-3 flex cursor-pointer items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg
                        class="flex-shrink-0 h-6 w-6 text-brand-600"
                        x-description="Heroicon name: shield-check"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div
                        class="text-base leading-6 font-medium text-gray-900"
                        onClick={realisation}
                      >
                        Réalisations
                      </div>
                      </a>
                      

                      
                    <a  href="#" class="-m-3 p-3 flex cursor-pointer items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                    <svg
                        class="flex-shrink-0 h-6 w-6 text-brand-600"
                        x-description="Heroicon name: view-grid"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <div
                        class="text-base leading-6 font-medium text-gray-900"
                        onClick={team}
                      >
                        Équipe
                      </div>
                    </a>
                     

                      <a
                        href="#"
                        class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-brand-600"
                          x-description="Heroicon name: refresh"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <div
                          class="text-base leading-6 font-medium text-gray-900"
                          onClick={contact}
                        >
                          Contact
                        </div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div class="py-6 px-5 space-y-6">
                  <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Carrière
                    </a>
                    <a
                      href="#"
                      class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Chronologie Tech
                    </a>
                    <a
                      href="#"
                      class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Les coming soon
                    </a>
                    <a
                      href="#"
                      class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Blog
                    </a>
                  </div>
                  <div class="space-y-6">
                    <span class="w-full flex rounded-md shadow-sm">
                      <a
                        href="#"
                        class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:border-brand-700 focus:shadow-outline-brand active:bg-brand-700 transition ease-in-out duration-150"
                      >
                        Demander un devis
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Header;