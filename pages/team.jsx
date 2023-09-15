import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import MemberComponent from "../components/MemberComponent.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Team = () => {
const [members, setMember] = useState([]);
const actionMember = async () => {
  await fetch("http://localhost:8000/member")
    .then((res) => res.json())
    .then((data) => setMember(data));
};
useEffect(() => {
  actionMember();
}, [members]);
  return (
    <div>
      <Header />
      <main class="bg-gray-50">
        <div class="relative overflow-hidden items-center justify-center">
          <Image
            className="absolute w-full"
            width="1000"
            height="1000"
            objectFit="cover"
            src={`http://localhost:8000/static/images/10.jpg`}
            alt="Logo"
          />
          <div class="absolute bg-gray-900 bg-opacity-75 inset-0 top-0"></div>
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-8 pb-10">
            <div class="mx-auto max-w-sm sm:max-w-xl text-center relative">
              <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                Notre Équipe
              </h1>
              <p class="mt-3 text-base text-gray-200 sm:text-lg md:mt-5">
                08 jeunes amis , 08 Ingenieurs, 08 cultures, 04 régions, 01 but.
                Vous satisfaire !
              </p>
            </div>
          </div>
        </div>
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20 lg:py-24">
          <ul
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
            x-max="1"
          >
            {members.map(({ image, name, poste }) => (
              <>
                <MemberComponent image={image} name={name} poste={poste} />
              </>
            ))}
          </ul>
        </div>
        <div class="relative bg-white">
          <div class="relative h-56 bg-brand-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-2/5">
            <Image
              class="absolute inset-0 object-cover w-full h-full"
              width="1000"
              height="700"
              objectFit="contain"
              src={`http://localhost:8000/static/images/13-app.jpg`}
              alt="Logo"
            />
            <div class="absolute bg-gray-900 bg-opacity-50 inset-0 top-0"></div>
          </div>
          <div class="relative max-w-screen-xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
            <div class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-3/5 lg:pl-10">
              <h2 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                Plus de 30 applications réalisées
              </h2>
              <p class="mt-6 text-lg leading-7 text-gray-500">
                Nous avons réalisés à ce jour un peu plus de 30 Applications
                Web, mobile (Android & iOs) et Desktop pour plusieurs clients.
              </p>
              <div class="mt-8 overflow-hidden">
                <dl class="-mx-8 -mt-8 flex flex-wrap">
                  <div class="flex flex-col px-8 pt-8">
                    <dt class="order-2 text-base leading-6 font-medium text-gray-500">
                      Apps Web
                    </dt>
                    <dd class="order-1 leading-8 font-extrabold sm:text-3xl sm:leading-9">
                      <span class="flex-shrink-0">
                        <svg
                          class="w-10 h-10 text-brand-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </span>
                    </dd>
                  </div>
                  <div class="flex flex-col px-8 pt-8">
                    <dt class="order-2 text-base leading-6 font-medium text-gray-500">
                      Apps Mobile
                    </dt>
                    <dd class="order-1 leading-8 font-extrabold sm:text-3xl sm:leading-9">
                      <span class="flex-shrink-0">
                        <svg
                          class="w-10 h-10 text-brand-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </span>
                    </dd>
                  </div>
                  <div class="flex flex-col px-8 pt-8">
                    <dt class="order-2 text-base leading-6 font-medium text-gray-500">
                      Apps PC
                    </dt>
                    <dd class="order-1 leading-8 font-extrabold sm:text-3xl sm:leading-9">
                      <span class="flex-shrink-0">
                        <svg
                          class="h-10 w-10 text-brand-600"
                          fill="currentColor"
                          viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.333 16.96a.507.507 0 0 0 .36-.147l2.026-2.027a.509.509 0 0 0-.72-.72l-2.026 2.027a.507.507 0 0 0 .36.867zM7.333 20a.507.507 0 0 0 .36-.147l5.066-5.067a.509.509 0 0 0-.72-.72l-5.066 5.067a.507.507 0 0 0 .36.867z" />
                          <path d="M33.68 4.8H20.506c-.839 0-1.52.68-1.52 1.52v5.573H7.333A2.533 2.533 0 0 0 4.8 14.427V27.6c0 1.399 1.134 2.533 2.533 2.533h5.573v2.027h-1.52a1.52 1.52 0 1 0 0 3.04H33.68c.84 0 1.52-.68 1.52-1.52V6.32c0-.84-.68-1.52-1.52-1.52zM7.333 12.907h18.24c.84 0 1.52.68 1.52 1.52v12.16H5.813v-12.16c0-.84.68-1.52 1.52-1.52zM5.813 27.6h21.28c0 .84-.68 1.52-1.52 1.52H7.333c-.84 0-1.52-.68-1.52-1.52zm8.107 2.533h5.066v2.027H13.92v-2.027zm6.586 4.054h-9.12a.507.507 0 1 1 0-1.014H21.52a.507.507 0 0 1 0 1.014h-1.014zm13.68-.507c0 .28-.226.507-.506.507H22.949a1.52 1.52 0 0 0-1.43-2.027H20v-2.027h5.574c1.4 0 2.534-1.134 2.534-2.533V14.426c0-1.399-1.135-2.533-2.534-2.533H20V6.32c0-.28.227-.507.506-.507H33.68c.28 0 .507.227.507.507v27.36z" />
                          <path d="M32.16 7.333H22.025c-.56 0-1.013.454-1.013 1.013V9.36c0 .56.453 1.013 1.013 1.013h10.133c.56 0 1.014-.454 1.014-1.013V8.346c0-.56-.454-1.013-1.014-1.013zM22.025 9.36V8.346h10.133V9.36H22.026zM31.147 14.933a1.52 1.52 0 1 0 0-3.04 1.52 1.52 0 0 0 0 3.04zm0-2.027a.507.507 0 1 1 0 1.014.507.507 0 0 1 0-1.014zM32.667 17.466a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0zm-1.52.507a.507.507 0 1 1 0-1.013.507.507 0 0 1 0 1.013zM24.56 31.146a.507.507 0 0 0-.507.507v1.014a.507.507 0 0 0 1.013 0v-1.014a.507.507 0 0 0-.507-.506zM26.587 31.146a.507.507 0 0 0-.507.507v1.014a.507.507 0 1 0 1.013 0v-1.014a.507.507 0 0 0-.506-.506zM28.613 31.146a.507.507 0 0 0-.507.507v1.014a.507.507 0 0 0 1.014 0v-1.014a.507.507 0 0 0-.507-.506zM30.64 31.146a.507.507 0 0 0-.507.507v1.014a.507.507 0 0 0 1.013 0v-1.014a.507.507 0 0 0-.506-.506zM32.667 31.146a.507.507 0 0 0-.507.507v1.014a.507.507 0 1 0 1.014 0v-1.014a.507.507 0 0 0-.507-.506z" />
                        </svg>
                      </span>
                    </dd>
                  </div>
                  <div class="flex flex-col px-8 pt-8">
                    <dt class="order-2 text-base leading-6 font-medium text-gray-500">
                      Refontes & Urbanisations
                    </dt>
                    <dd class="order-1 leading-8 font-extrabold sm:text-3xl sm:leading-9">
                      <span class="flex-shrink-0">
                        <svg
                          class="w-10 h-10 text-brand-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                          ></path>
                        </svg>
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20 lg:py-28">
          <div class="lg:max-w-4xl lg:mx-auto flex items-center justify-center">
            <div class="relative lg:flex lg:items-center">
              <div class="hidden lg:block lg:flex-shrink-0">
                <Image
                  class="rounded-full"
                  width="60"
                  height="80"
                  objectFit="contain"
                  src={`https://daily-voice-res.cloudinary.com/image/upload/c_fill,dpr_auto,f_auto,q_auto:eco,w_640/newsnet-photo-fid-1671607`}
                  alt="Logo"
                />
              </div>

              <div class="relative lg:ml-14">
                <svg
                  class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-brand-200 opacity-50"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 144 144"
                >
                  <path
                    stroke-width="2"
                    d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                  />
                </svg>
                <blockquote class="relative">
                  <div class="text-2xl leading-9 font-medium lg:text-3xl text-gray-900">
                    <p>
                      La productivité n est pas seulement la quantité de travail
                      effectué. C est aussi la qualité.
                    </p>
                  </div>
                  <footer class="mt-8">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 lg:hidden">
                        <Image
                          class="rounded-full"
                          width="60"
                          height="80"
                          objectFit="contain"
                          src={`https://daily-voice-res.cloudinary.com/image/upload/c_fill,dpr_auto,f_auto,q_auto:eco,w_640/newsnet-photo-fid-1671607`}
                          alt="Logo"
                        />
                      </div>
                      <div class="ml-4 lg:ml-0">
                        <div class="text-base leading-6 lg:text-lg font-medium text-brand-600">
                          Kenneth Hartley Blanchard
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-brand-50">
          <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Vous avez un nouveau projet ?
              </h2>
              <p class="mt-3 text-base leading-6 sm:text-lg text-gray-500">
                Nous serons ravis de vous apportez notre exprérience pour
                l’accomplissement de votre projet.
              </p>
            </div>
            <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
              <div class="inline-flex rounded-md shadow">
                <a
                  href="contact.html"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
