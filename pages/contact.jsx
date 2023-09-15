import React, { useState } from "react";
//import { SupportData } from "../Data/Data";
import { useRouter } from "next/router";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MapComponent from "../components/MapComponant.jsx";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";


const Contact = () => {
const router = useRouter();
//const [coordinates, setCoordinates] = useState({lat: 10, lng: 10});
const { isLoaded } = useJsApiLoader({
  googleMapsApiKey: "AIzaSyD1GAOdaHfo83h1sfrjI9ORRZXvT4_kC0w",
});
const center = { lat: 4.0809241, lng: 9.7710213 };

  if(!isLoaded){
    return <div></div>
  }


  return (
  
    <div>
      <Header />
      <main class="bg-gray-50">
        <div class="relative bg-brand-50 py-20 sm:py-24">
          <div class="absolute inset-0 flex flex-col">
            <div class="flex-1 relative pb-32">
              <svg
                class="hidden lg:block absolute left-1/6 bottom-1/5"
                width="156"
                height="180"
                fill="none"
                viewBox="0 0 156 180"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-brand-100"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="156"
                  height="180"
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                ></rect>
              </svg>
            </div>
            <div class="flex-1 w-full bg-gray-50"></div>
          </div>
          <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-sm sm:max-w-xl text-center relative">
              <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Contact
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:text-lg md:mt-5">
                Vous avez une question, un besoin ou vous souhaitez juste dire
                bonjour? Contactez nous
              </p>
            </div>
            <div class="pt-20 relative">
              <div class="relative bg-white rounded-lg shadow-lg px-6 lg:px-8 py-5 sm:py-6 max-w-4xl mx-auto">
                <form action="#">
                  <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-1">
                      <div>
                        <label
                          for="name"
                          class="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Nom complet
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                          <input
                            id="name"
                            type="text"
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm font-medium leading-5 focus:outline-none focus:shadow-outline"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sm:col-span-1">
                      <div>
                        <label
                          for="email"
                          class="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Adresse e-mail
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                          <input
                            id="email"
                            type="email"
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm font-medium leading-5 focus:outline-none focus:shadow-outline"
                            placeholder="monadresse@gmail.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sm:col-span-2">
                      <div>
                        <label
                          for="sujet"
                          class="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Sujet
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                          <input
                            id="sujet"
                            type="text"
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm font-medium leading-5 focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="sm:col-span-2">
                      <div>
                        <div class="flex items-center justify-between">
                          <label
                            for="message"
                            class="block text-sm font-medium leading-5 text-gray-700"
                          >
                            Votre message
                          </label>
                          <span class="text-gray-500 text-sm leading-5">
                            Max. 500 caractères
                          </span>
                        </div>
                        <div class="mt-1 relative rounded-md shadow-sm">
                          <textarea
                            id="message"
                            rows="4"
                            class="appearance-none border rounded block w-full py-2 px-3 sm:text-sm sm:leading-5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="sm:col-span-2">
                      <div class="flex px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="grid grid-cols-3 gap-10">
                          <div class="flex-shrink-0">
                            <svg
                              class="h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div class="col-span-2 flex items-center space-x-1">
                            <p class="text-sm text-gray-600">
                              <button
                                type="button"
                                class="font-medium text-brand-600 hover:text-brand-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                              >
                                Upload a file
                              </button>
                              or drag and drop
                            </p>
                            <p class="text-sm text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6">
                    <div class="flex justify-end">
                      <span class="ml-3 inline-flex rounded-md shadow-sm">
                        <button
                          type="submit"
                          class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:border-brand-700 focus:shadow-outline-brand active:bg-brand-700 transition duration-150 ease-in-out"
                        >
                          Envoyer
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white h-84 w-full">
          <div id="map" class="h-84 w-full">
            {
              <GoogleMap
                center={center}
                zoom={17}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false
                }}
              >
                <Marker position={center} />
              </GoogleMap>
            }
          </div>
        </div>
        <div class="max-w-screen-xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
