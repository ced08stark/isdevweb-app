import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Image from "next/image";

const Service = () => {
  return (
    <>
      <Header />

      <div class="py-8 mx-auto max-w-screen-xl px-4 sm:py-10 sm:px-6 lg:px-8 md:py-12">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mt-20">
            <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none lg:text-5xl">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-brand-600 to-brand-500">
                Découvrez Nos Services
              </span>
            </h1>
            <p class="mt-6 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Parceque l atteinte de vos objectifs reste votre priorité, nous
              vous proposons des outils et solutions simples et efficaces pour
              vos problématiques régulières d entreprises.
            </p>
          </div>
          <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div class="relative mx-auto w-full lg:max-w-lg lg:ml-12">
              <Image
                className="absolute w-full"
                width="1000"
                height="1000"
                objectFit="cover"
                src={`http://localhost:8000/static/icons/services.svg`}
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="py-10 mx-auto max-w-screen-xl px-4 sm:py-14 sm:px-6 lg:px-8 md:py-18">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:gap-y-12">
          <div class="col-span-1">
            <div class="flex-shrink-0">
              <div class="mt-4">
                <h4 class="text-lg text-gray-900 leading-6 font-medium">
                  SI, Indices & Performances
                </h4>
                <p class="mt-5 text-base text-gray-600 leading-6">
                  Votre metier grandi et votre système d informations n y
                  correspond Plus? Urbanisez votre système d informations.
                  Optimisez...
                </p>
                <a
                  href="services.html"
                  class="mt-4 inline-flex items-center text-gray-600 leading-6 text-base font-medium hover:text-gray-700 transition duration-150 ease-in-out"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex-shrink-0">
              <div class="mt-4">
                <h4 class="text-lg text-gray-900 leading-6 font-medium">
                  Developpement logiciel
                </h4>
                <p class="mt-5 text-base text-gray-600 leading-6">
                  Nous developpons des logiciels de bureau, des applications web
                  et mobiles adaptés aux mesures de vos activités (prise de
                  décisions...
                </p>
                <a
                  href="services.html"
                  class="mt-4 inline-flex items-center text-gray-600 leading-6 text-base font-medium hover:text-gray-700 transition duration-150 ease-in-out"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex-shrink-0">
              <div class="mt-4">
                <h4 class="text-lg text-gray-900 leading-6 font-medium">
                  Analyse et Gestion de données
                </h4>
                <p class="mt-5 text-base text-gray-600 leading-6">
                  Vos données representent vos activités. Pour vous, nous
                  élaborons des bases de données personnalisées robustes et
                  securisées...
                </p>
                <a
                  href="services.html"
                  class="mt-4 inline-flex items-center text-gray-600 leading-6 text-base font-medium hover:text-gray-700 transition duration-150 ease-in-out"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex-shrink-0">
              <div class="mt-4">
                <h4 class="text-lg text-gray-900 leading-6 font-medium">
                  SIG (ArcGIS Desktop & Server)
                </h4>
                <p class="mt-5 text-base text-gray-600 leading-6">
                  Nos experts vous aident dans l acquisition, l integration des
                  logiciels ESRI , développent des solutions SIG pour une
                  meilleure analyse...
                </p>
                <a
                  href="services.html"
                  class="mt-4 inline-flex items-center text-gray-600 leading-6 text-base font-medium hover:text-gray-700 transition duration-150 ease-in-out"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex-shrink-0">
              <div class="mt-4">
                <h4 class="text-lg text-gray-900 leading-6 font-medium">
                  IT Consulting
                </h4>
                <p class="mt-5 text-base text-gray-600 leading-6">
                  IS Dev Experts vous accompagne les ESN dans leurs projets
                  informatiques à travers l analyse de faisabilité, l assistance
                  , le conseil.
                </p>
                <a
                  href="services.html"
                  class="mt-4 inline-flex items-center text-gray-600 leading-6 text-base font-medium hover:text-gray-700 transition duration-150 ease-in-out"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex-shrink-0">
              <div class="mt-4">
                <h4 class="text-lg text-gray-900 leading-6 font-medium">
                  Formations
                </h4>
                <p class="mt-5 text-base text-gray-600 leading-6">
                  Nous faisons pour les entreprise et particuliers des remises à
                  niveau à travers de formations professionnalisantes dans le
                  domaine...
                </p>
                <a
                  href="services.html"
                  class="mt-4 inline-flex items-center text-gray-600 leading-6 text-base font-medium hover:text-gray-700 transition duration-150 ease-in-out"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="py-12 lg:pb-14 lg:pt-20">
          <p class="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">
            Les entreprise qui nous font confiance
          </p>
          {}
        </div>
      </div>

      <div class="bg-gray-900">
        <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
          <div class="text-center">
            <h2 class="text-lg leading-6 font-semibold text-brand-600 uppercase tracking-wider">
              Tarification
            </h2>
            <p class="mt- text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
              Nos meilleurs prix
            </p>
            <p class="mt-3 max-w-4xl mx-auto text-xl leading-7 text-gray-300 sm:mt-5 sm:text-2xl sm:leading-8">
              Nous vous proposons nos services à des charges financières
              réduites pour vous amener à nous classer parmi vos options.
            </p>
          </div>
        </div>

        <div class="mt-16 bg-gray-50 pb-12 lg:mt-20 lg:pb-20">
          <div class="relative z-0">
            <div class="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div>
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="relative lg:grid lg:grid-cols-7">
                <div class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                  <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                    <div class="flex-1 flex flex-col">
                      <div class="bg-white px-6 py-10">
                        <div class="flex-shrink-0">
                          <svg
                            width="55"
                            height="52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clipConseil)">
                              <path
                                d="M31.72 17.015h-8.018a8.871 8.871 0 0 0-6.239 2.566 8.713 8.713 0 0 0-2.583 6.186v1.39a8.701 8.701 0 0 0 2.294 5.868 8.851 8.851 0 0 0 5.675 2.821l2.256 5.688 1.275-5.53c.574 0 1.267-.047 2.009-.118h3.331c2.337 0 4.579-.92 6.233-2.556a8.705 8.705 0 0 0 2.59-6.173v-1.39c0-2.32-.93-4.545-2.584-6.186a8.871 8.871 0 0 0-6.239-2.566z"
                                fill="#FFECB0"
                              />
                              <path
                                d="M39.92 48.642h-5.737v-1.177h5.738a6.358 6.358 0 0 0 3.132-1.037 6.281 6.281 0 0 0 2.176-2.462l.16-.395a294.392 294.392 0 0 0 1.593-3.862v-.048h1.172v.134c0 .119 0 .245-1.666 4.227l-.167.394a7.452 7.452 0 0 1-2.612 2.988 7.544 7.544 0 0 1-3.788 1.238zM25.759 0a20.079 20.079 0 0 0-14.104 5.836 19.722 19.722 0 0 0-5.821 14.007v3.333h2.933v-3.333a16.851 16.851 0 0 1 4.96-11.96 17.156 17.156 0 0 1 12.032-5h1.737V0h-1.737z"
                                fill="#15BAAC"
                              />
                              <path
                                d="M29.233 0h-1.737v2.883h1.737a17.164 17.164 0 0 1 12.03 5.002 16.86 16.86 0 0 1 4.962 11.958v3.333h2.893v-3.333A19.722 19.722 0 0 0 43.312 5.85 20.078 20.078 0 0 0 29.233 0z"
                                fill="#0A9B86"
                              />
                              <path
                                d="M53.876 23.532a6.092 6.092 0 0 0-3.985-2.015 4.823 4.823 0 0 0-2.454 0V43.17c.804.211 1.65.211 2.454 0a6.14 6.14 0 0 0 3.985-2.015c1.498-1.856 1.498-15.766 0-17.623z"
                                fill="#375560"
                              />
                              <path
                                d="M44.448 25.758v13.168a4.136 4.136 0 0 0 .752 2.64 4.199 4.199 0 0 0 2.244 1.602V21.517a4.19 4.19 0 0 0-2.246 1.601 4.128 4.128 0 0 0-.75 2.64z"
                                fill="#0E2D38"
                              />
                              <path
                                d="M5.093 21.517a6.067 6.067 0 0 0-3.985 2.014c-1.499 1.857-1.499 15.798 0 17.623a6.108 6.108 0 0 0 3.985 2.014c.804.214 1.65.214 2.454 0V21.517a4.775 4.775 0 0 0-2.454 0z"
                                fill="#415B66"
                              />
                              <path
                                d="M7.547 21.517v21.651a4.19 4.19 0 0 0 2.247-1.602c.544-.77.809-1.7.75-2.64V25.758a4.12 4.12 0 0 0-.748-2.641 4.183 4.183 0 0 0-2.249-1.6zM34.86 24.171H20.937A.592.592 0 0 1 20.52 24a.582.582 0 0 1 .417-.998H34.86c.157 0 .307.062.417.171a.582.582 0 0 1-.417.998zM34.86 27.362H20.937a.592.592 0 0 1-.417-.17.582.582 0 0 1 .417-.999H34.86a.594.594 0 0 1 .545.361.579.579 0 0 1-.128.637.59.59 0 0 1-.417.171zM34.86 30.562H20.937a.592.592 0 0 1-.417-.172.582.582 0 0 1 0-.829.6.6 0 0 1 .417-.176H34.86a.6.6 0 0 1 .418.176.582.582 0 0 1 0 .83.592.592 0 0 1-.418.17z"
                                fill="#113240"
                              />
                              <path
                                d="M27.05 52h4.128a4.29 4.29 0 0 0 3.02-1.24 4.215 4.215 0 0 0 1.252-2.993H22.778c0 1.122.45 2.2 1.251 2.993a4.291 4.291 0 0 0 3.02 1.24z"
                                fill="#0BAF9B"
                              />
                              <path
                                d="M31.178 43.524H27.05a4.304 4.304 0 0 0-3.024 1.243 4.231 4.231 0 0 0-1.248 3H35.45a4.2 4.2 0 0 0-1.248-3 4.305 4.305 0 0 0-3.023-1.243z"
                                fill="#15BAAC"
                              />
                            </g>
                            <defs>
                              <clipPath id="clipConseil">
                                <path fill="#fff" d="M0 0h55v52H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div class="mt-6">
                          <h3
                            class="text-2xl leading-8 font-medium text-gray-900"
                            id="tier-hobby"
                          >
                            Assistance & Conseils
                          </h3>
                          <p class="mt-3 text-gray-500 text-sm flex items-center justify-center">
                            Une formation complète sur la gestion des bases de
                            données avec MySQL.
                          </p>
                        </div>
                      </div>
                      <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-5 xl:p-6">
                        <ul>
                          <li class="flex items-start">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                              <svg
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <p class="ml-3 text-base leading-6 text-gray-500">
                              Notions théoriques
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                              <svg
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <p class="ml-3 text-base leading-6 text-gray-500">
                              Les fondamentaux du SQL
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                              <svg
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <p class="ml-3 text-base leading-6 text-gray-500">
                              Administrer les Bases de données MySQL
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                              <svg
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <p class="ml-3 text-base leading-6 text-gray-500">
                              Haute disponibilité (Cluster & Réplication)
                            </p>
                          </li>
                        </ul>
                        <div class="mt-8">
                          <div class="rounded-lg shadow-md">
                            <a
                              href="#"
                              class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-2 text-base leading-6 font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                              aria-describedby="tier-hobby"
                            >
                              Demandez une cotation
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                  <div class="relative z-10 rounded-lg shadow-xl">
                    <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-brand-600"></div>
                    <div class="absolute inset-x-0 top-0 transform translate-y-px">
                      <div class="flex justify-center transform -translate-y-1/2">
                        <span class="inline-flex rounded-full bg-brand-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                          Populaire
                        </span>
                      </div>
                    </div>
                    <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                      <div class="flex-shrink-0">
                        <svg
                          width="60"
                          height="60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M31.29 58.71C47.145 58.71 60 45.858 60 30 60 14.143 47.146 1.29 31.29 1.29 15.431 1.29 2.577 14.142 2.577 30c0 15.857 12.854 28.71 28.711 28.71z"
                            fill="#69CDFF"
                          />
                          <path
                            d="M30.988 42.016h-9.224v4.831h9.224v-4.831z"
                            fill="#445EA0"
                          />
                          <path
                            d="M24.09 42.016h-2.326v4.831h2.325v-4.831z"
                            fill="#2E4C89"
                          />
                          <path
                            d="M37.132 46.73H14.949a.6.6 0 0 0-.598.598v2.997a.6.6 0 0 0 .597.598h22.184V46.73z"
                            fill="#293D7C"
                          />
                          <path
                            d="M16.676 50.325v-2.997a.6.6 0 0 1 .598-.598h-2.326a.6.6 0 0 0-.597.598v2.997a.6.6 0 0 0 .597.598h2.326a.6.6 0 0 1-.598-.598z"
                            fill="#1A2B63"
                          />
                          <path
                            d="M52.155 6.91H.598A.6.6 0 0 0 0 7.508v34.027a.6.6 0 0 0 .598.598h36.534V24.231c0-.452.367-.82.82-.82h14.8V7.508a.6.6 0 0 0-.597-.598z"
                            fill="#293D7C"
                          />
                          <path
                            d="M2.625 36.154a.36.36 0 0 0 .358.359h34.148V24.23c0-.452.368-.82.82-.82h12.177V12.772H2.625v23.381z"
                            fill="#fff"
                          />
                          <path
                            d="M4.95 36.154v-23.38H2.625v23.38a.36.36 0 0 0 .358.359H5.31a.36.36 0 0 1-.36-.359z"
                            fill="#D9EAFC"
                          />
                          <path
                            d="M26.377 40.926a1.614 1.614 0 1 0 0-3.228 1.614 1.614 0 0 0 0 3.228z"
                            fill="#445EA0"
                          />
                          <path
                            d="M37.132 26.15H30.87a.353.353 0 0 0-.352.351v6.989c0 .193.159.352.352.352h6.26v-7.693z"
                            fill="#C3DDF4"
                          />
                          <path
                            d="M32.845 33.49V26.5c0-.193.158-.352.351-.352h-2.325a.353.353 0 0 0-.352.352v6.989c0 .193.159.352.352.352h2.325a.353.353 0 0 1-.351-.352z"
                            fill="#AEC1ED"
                          />
                          <path
                            d="M37.952 23.41h5.463v-7.662a.588.588 0 0 0-.586-.586H9.924a.588.588 0 0 0-.586.586v7.796c0 .322.263.586.586.586h27.215a.821.821 0 0 1 .813-.72z"
                            fill="#C3DDF4"
                          />
                          <path
                            d="M11.663 23.544v-7.796c0-.322.264-.586.586-.586H9.924a.588.588 0 0 0-.586.586v7.796c0 .322.263.586.586.586h2.325a.588.588 0 0 1-.586-.586z"
                            fill="#AEC1ED"
                          />
                          <path
                            d="M49.77 9.959H2.982a.36.36 0 0 0-.358.359v2.572h47.503v-2.572a.36.36 0 0 0-.359-.359z"
                            fill="#FFAF10"
                          />
                          <path
                            d="M5.309 9.959H2.983a.36.36 0 0 0-.358.359v2.572H4.95v-2.572a.36.36 0 0 1 .359-.359z"
                            fill="#FF9518"
                          />
                          <path
                            d="M20.098 28.006h-9.863a.879.879 0 1 1 0-1.758h9.863a.879.879 0 1 1 0 1.758zM20.098 30.875h-9.863a.879.879 0 1 1 0-1.758h9.863a.879.879 0 1 1 0 1.758zM20.098 33.745h-9.863a.879.879 0 1 1 0-1.758h9.863a.879.879 0 1 1 0 1.758zM27.84 28.006h-5.078a.879.879 0 0 1 0-1.758h5.077a.879.879 0 1 1 0 1.758zM27.84 30.875h-5.078a.879.879 0 0 1 0-1.758h5.077a.879.879 0 1 1 0 1.758zM27.84 33.745h-5.078a.879.879 0 0 1 0-1.758h5.077a.879.879 0 1 1 0 1.758z"
                            fill="#5DC1D8"
                          />
                          <path
                            d="M59.063 23.293a.94.94 0 0 1 .937.938v28.332a.94.94 0 0 1-.938.937h-21.11a.94.94 0 0 1-.938-.937V24.23a.94.94 0 0 1 .938-.937h21.11z"
                            fill="#445EA0"
                          />
                          <path
                            d="M39.559 49.82a.588.588 0 0 1-.586-.586V25.685c0-.322.263-.585.586-.585h17.897c.322 0 .586.263.586.585v23.549a.588.588 0 0 1-.586.586H39.559z"
                            fill="#fff"
                          />
                          <path
                            d="M41.298 49.234V25.685c0-.322.264-.585.586-.585h-2.325a.588.588 0 0 0-.586.585v23.549c0 .322.263.586.586.586h2.325a.588.588 0 0 1-.586-.586z"
                            fill="#D9EAFC"
                          />
                          <path
                            d="M47.41 52.163a.588.588 0 0 1-.586-.585v-.228c0-.323.264-.586.586-.586h2.194c.322 0 .586.263.586.586v.227a.588.588 0 0 1-.586.587H47.41z"
                            fill="#445EA0"
                          />
                          <path
                            d="M58.042 27.36v-1.674a.588.588 0 0 0-.586-.586H39.559a.588.588 0 0 0-.586.585v1.675h19.069z"
                            fill="#FFAF10"
                          />
                          <path
                            d="M41.884 25.1h-2.325a.588.588 0 0 0-.586.585v1.675h2.325v-1.674c0-.323.264-.586.586-.586z"
                            fill="#FF9518"
                          />
                          <path
                            d="M52.502 38.078h-7.99a.879.879 0 1 1 0-1.758h7.99a.879.879 0 1 1 0 1.758zM52.502 40.788h-7.99a.879.879 0 1 1 0-1.758h7.99a.879.879 0 0 1 0 1.758zM52.502 43.498h-7.99a.879.879 0 1 1 0-1.758h7.99a.879.879 0 0 1 0 1.758z"
                            fill="#5DC1D8"
                          />
                          <path
                            d="M56.221 34.25a.588.588 0 0 1-.585.585H41.379a.588.588 0 0 1-.586-.586v-4.833c0-.322.264-.586.586-.586h14.257c.322 0 .585.264.585.586v4.833z"
                            fill="#C3DDF4"
                          />
                          <path
                            d="M43.118 34.25v-4.834c0-.322.264-.586.586-.586H41.38a.588.588 0 0 0-.586.586v4.833c0 .323.264.586.586.586h2.325a.588.588 0 0 1-.586-.586z"
                            fill="#AEC1ED"
                          />
                          <path
                            d="M54.112 47.979a.588.588 0 0 1-.586.586H43.488a.588.588 0 0 1-.586-.586v-1.982c0-.322.264-.586.586-.586h10.038c.322 0 .586.264.586.586v1.982z"
                            fill="#C3DDF4"
                          />
                          <path
                            d="M45.228 47.979v-1.982c0-.322.263-.586.585-.586h-2.325a.588.588 0 0 0-.586.586v1.982c0 .322.264.586.586.586h2.325a.588.588 0 0 1-.585-.586z"
                            fill="#AEC1ED"
                          />
                        </svg>
                      </div>
                      <div class="mt-6">
                        <h3
                          class="text-2xl leading-8 font-bold text-gray-900 sm:text-4xl"
                          id="tier-hobby"
                        >
                          Site web Corporate
                        </h3>
                        <p class="mt-3 text-gray-500 text-base flex items-center justify-center">
                          Une formation complète sur la gestion des bases de
                          données avec MySQL.
                        </p>
                      </div>
                    </div>
                    <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-8 sm:py-10">
                      <ul>
                        <li class="flex items-start">
                          <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                            <svg
                              class="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                            Site de présentation
                          </p>
                        </li>
                        <li class="mt-4 flex items-start">
                          <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                            <svg
                              class="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                            Ergonomie et images d entreprise
                          </p>
                        </li>
                        <li class="mt-4 flex items-start">
                          <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                            <svg
                              class="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                            Site multilingue
                          </p>
                        </li>
                        <li class="mt-4 flex items-start">
                          <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                            <svg
                              class="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                            Référencement SEO
                          </p>
                        </li>
                      </ul>
                      <div class="mt-10">
                        <div class="rounded-lg shadow-md">
                          <a
                            href="#"
                            class="block w-full text-center rounded-lg border border-transparent bg-brand-600 px-6 py-3 text-xl leading-6 font-medium text-white hover:bg-brand-500 focus:outline-none focus:border-brand-700 focus:shadow-outline-brand transition ease-in-out duration-150"
                            aria-describedby="tier-growth"
                          >
                            Demandez une cotation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                  <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                    <div class="flex-1 flex flex-col">
                      <div class="bg-white px-6 py-10">
                        <div class="flex-shrink-0">
                          <svg
                            width="75"
                            height="52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clipMySQL)">
                              <path
                                d="M22.958 41.995h-2.03c-.072-3.428-.27-6.65-.593-9.67h-.018l-3.092 9.67H15.68l-3.073-9.67h-.017c-.228 2.899-.372 6.122-.432 9.67h-1.85c.119-4.314.419-8.358.898-12.134h2.516l2.93 8.916h.017l2.947-8.916h2.408c.528 4.422.84 8.467.935 12.134zm8.806-8.952c-.827 4.487-1.918 7.747-3.271 9.782-1.055 1.567-2.21 2.351-3.469 2.351-.335 0-.75-.101-1.24-.302v-1.082c.24.035.521.054.845.054.587 0 1.06-.161 1.42-.486.43-.395.646-.838.646-1.33 0-.336-.168-1.024-.503-2.067l-2.228-6.92h1.995l1.599 5.176c.36 1.175.51 1.996.45 2.463.874-2.336 1.485-4.884 1.833-7.64h1.923z"
                                fill="#5D87A1"
                              />
                              <path
                                d="M58.791 41.995h-5.767V29.86h1.94v10.64h3.827v1.494zm-7.277.293l-2.23-1.1c.197-.163.386-.339.557-.543.948-1.113 1.42-2.76 1.42-4.942 0-4.014-1.575-6.022-4.726-6.022-1.545 0-2.75.509-3.612 1.528-.947 1.115-1.42 2.756-1.42 4.926 0 2.133.42 3.697 1.258 4.69.767.899 1.923 1.349 3.47 1.349a5.59 5.59 0 0 0 1.587-.213l2.904 1.69.792-1.363zm-7.225-2.721c-.491-.79-.737-2.06-.737-3.81 0-3.055.928-4.584 2.786-4.584.971 0 1.683.366 2.138 1.096.49.791.737 2.05.737 3.775 0 3.08-.928 4.62-2.785 4.62-.972 0-1.683-.364-2.139-1.097zm-3.632-.935c0 1.029-.377 1.873-1.131 2.534-.755.659-1.767.989-3.036.989-1.186 0-2.337-.38-3.45-1.134l.521-1.042c.958.48 1.826.719 2.605.719.73 0 1.302-.162 1.716-.484.414-.322.661-.775.661-1.347 0-.72-.503-1.337-1.425-1.853-.85-.467-2.55-1.443-2.55-1.443-.922-.672-1.383-1.393-1.383-2.582 0-.983.344-1.777 1.032-2.381.69-.606 1.58-.909 2.67-.909 1.126 0 2.15.302 3.071.9l-.467 1.042c-.789-.335-1.568-.503-2.335-.503-.622 0-1.102.15-1.436.45-.337.299-.545.682-.545 1.15 0 .718.514 1.342 1.46 1.868.862.468 2.605 1.462 2.605 1.462.945.67 1.417 1.385 1.417 2.564"
                                fill="#F8981D"
                              />
                              <path
                                d="M61.227 25.797c-1.173-.03-2.081.088-2.844.41-.22.089-.57.089-.6.367.118.118.132.308.235.47.176.293.483.688.762.893.307.236.616.469.94.674.57.353 1.215.558 1.771.91.324.204.645.469.97.689.159.117.26.308.468.381v-.045c-.104-.132-.133-.322-.235-.47l-.44-.424a6.976 6.976 0 0 0-1.524-1.48c-.47-.323-1.496-.762-1.686-1.303l-.03-.03c.323-.03.705-.147 1.012-.237.498-.132.953-.102 1.465-.233.235-.06.468-.133.705-.206v-.132c-.265-.264-.455-.615-.734-.864a19.527 19.527 0 0 0-2.418-1.804c-.455-.293-1.04-.483-1.525-.733-.175-.088-.47-.131-.572-.278-.263-.323-.41-.747-.601-1.13-.424-.805-.836-1.699-1.201-2.55-.265-.572-.426-1.143-.748-1.671-1.51-2.492-3.151-4.002-5.673-5.483-.541-.309-1.186-.44-1.875-.602l-1.1-.058c-.234-.103-.47-.382-.674-.514-.837-.527-2.99-1.67-3.605-.16-.397.953.586 1.891.923 2.375.25.336.572.718.746 1.1.104.249.133.513.236.777.234.645.454 1.363.762 1.965.161.306.337.629.542.907.118.162.323.234.367.499-.204.292-.22.733-.337 1.1-.528 1.656-.322 3.708.426 4.925.233.367.791 1.174 1.538.864.66-.264.514-1.099.704-1.832.044-.177.015-.293.103-.409v.029c.204.41.41.805.6 1.216.455.718 1.247 1.466 1.906 1.963.351.265.63.72 1.07.881V26.5h-.03c-.089-.131-.219-.19-.336-.292a7.128 7.128 0 0 1-.762-.88 18.883 18.883 0 0 1-1.641-2.668c-.236-.456-.44-.953-.63-1.408-.089-.175-.089-.44-.236-.528-.22.322-.542.601-.703.996-.279.631-.308 1.408-.411 2.216l-.058.028c-.467-.117-.63-.6-.807-1.01-.439-1.042-.513-2.714-.132-3.916.102-.307.544-1.275.368-1.567-.089-.28-.382-.44-.543-.662a5.962 5.962 0 0 1-.528-.938c-.352-.82-.529-1.73-.907-2.55-.177-.382-.484-.777-.733-1.13-.28-.395-.587-.674-.808-1.143-.073-.16-.175-.425-.058-.6.029-.118.089-.162.206-.191.19-.16.732.043.922.132.544.22.998.425 1.452.732.205.148.425.426.688.5h.309c.468.102.995.028 1.436.16.777.25 1.48.616 2.111 1.011a13.006 13.006 0 0 1 4.572 5.015c.175.337.25.645.41.996.309.72.69 1.452.997 2.156.308.689.601 1.392 1.041 1.964.22.308 1.1.47 1.496.63.292.132.747.249 1.011.41.499.307.995.66 1.464.998.234.176.967.543 1.011.836zm-14.951-12.74a2.286 2.286 0 0 0-.6.074v.03h.028c.118.234.323.396.47.6.118.236.22.469.336.703l.028-.029c.207-.146.31-.38.31-.733-.09-.104-.103-.205-.177-.307-.087-.147-.277-.22-.395-.338"
                                fill="#5D87A1"
                              />
                              <path
                                d="M62.623 41.993h.304v-1.487h-.456l-.371 1.015-.404-1.015h-.439v1.487h.287v-1.131h.016l.423 1.13h.219l.42-1.13v1.13zm-2.447 0h.322v-1.235h.42v-.252h-1.18v.252h.438v1.235z"
                                fill="#F8981D"
                              />
                            </g>
                            <defs>
                              <clipPath id="clipMySQL">
                                <path fill="#fff" d="M0 0h75v52H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div class="mt-6">
                          <h3
                            class="text-2xl leading-8 font-medium text-gray-900"
                            id="tier-hobby"
                          >
                            Assistance & Conseils
                          </h3>
                          <p class="mt-3 text-gray-500 text-sm flex items-center justify-center">
                            Une formation complète sur la gestion des bases de
                            données avec MySQL.
                          </p>
                        </div>
                      </div>
                      <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-5 xl:p-6">
                        <ul>
                          <li class="flex items-start">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                              <svg
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <p class="ml-3 text-base leading-6 text-gray-500">
                              Notions théoriques
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                              <svg
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <p class="ml-3 text-base leading-6 text-gray-500">
                              Les fondamentaux du SQL
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                              <svg
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <p class="ml-3 text-base leading-6 text-gray-500">
                              Administrer les Bases de données MySQL
                            </p>
                          </li>
                          <li class="mt-4 flex items-start">
                            <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800">
                              <svg
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <p class="ml-3 text-base leading-6 text-gray-500">
                              Haute disponibilité (Cluster & Réplication)
                            </p>
                          </li>
                        </ul>
                        <div class="mt-8">
                          <div class="rounded-lg shadow-md">
                            <a
                              href="#"
                              class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-2 text-base leading-6 font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                              aria-describedby="tier-scale"
                            >
                              Demandez une cotation
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="max-w-screen-xl mx-auto py-12 pb-18 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="space-y-4">
              <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
                Questions récurentes
              </h2>
              <p class="text-base leading-6 text-gray-500">
                Avez-vous reçu les réponses que vous esperiez? Si ce n’est pas
                le cas vous pouvez nous{" "}
                <a
                  href="#"
                  class="font-medium text-brand-600 hover:text-brand-500 transition duration-150 ease-in-out"
                >
                  contactez
                </a>{" "}
                directement via la section ci-dessous.
              </p>
            </div>
            <div class="mt-12 lg:mt-0 lg:col-span-2">
              <h4 class="pb-6 border-b-2 border-gray-200 text-gray-500 leading-5 text-base sm:text-xl">
                Utilisateurs
              </h4>
              <dl class="mt-6 space-y-12">
                <div class="space-y-2">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Quand commence la formation pour MySQL ?
                  </dt>
                  <dd class="text-base leading-6 text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </dd>
                </div>
                <div class="space-y-2">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Est-ce que dans votre offre site corporate l’hebergement est
                    compris?
                  </dt>
                  <dd class="text-base leading-6 text-gray-500">
                    I don t know, but the flag is a big plus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quas cupiditate
                    laboriosam fugiat.
                  </dd>
                </div>
                <div class="space-y-2">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    L’assistance se fait dans vos locaux ou dans les locaux du
                    client qui vous contacte ?
                  </dt>
                  <dd class="text-base leading-6 text-gray-500">
                    Nobody knows. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>
                <div class="space-y-2">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Ses offres sont flexibles pour les startups ?
                  </dt>
                  <dd class="text-base leading-6 text-gray-500">
                    Because they re so good at it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-brand-50">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 md:text-4xl md:leading-10">
            <span class="block">
              Nous nous assurons que vous ayez le meilleur guidage et les
              meilleures solutions informatiques pour votre stratégie d
              entreprise.
            </span>
          </h2>
          <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div class="inline-flex rounded-md shadow">
              <a
                href="contact.html"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 transition duration-150 ease-in-out"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Service;
