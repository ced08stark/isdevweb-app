import React from "react";
import Image from "next/image";
import PartenaireComponent from "./PartenaireComponent.jsx"
import MemberComponent from "./MemberComponent.jsx";
import ProductComponent from "./ProductComponent.jsx"
import FoireComponent from "./FoireComponent.jsx"
import { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components"
import { Wrapper } from "@googlemaps/react-wrapper";
import VideoSlide from "./VideoSlide.jsx"



const Main = () => {
  const [partenaires, setPartenaire] = useState([])
  const [products, setProduct] = useState([]);
  const [members, setMember] = useState([]);
  const [foires, setFoire] = useState([]);

  const actionPartenaire = async () => {
      await fetch("http://localhost:8000/partenaire")
      .then((res) => res.json())
      .then((data) => setPartenaire(data));
  }
  const actionFoire  = async () => {
    await fetch("http://localhost:8000/foire")
      .then((res) => res.json())
      .then((data) => setFoire(data));
  }
  const actionMember = async () => {
    await fetch("http://localhost:8000/member")
      .then((res) => res.json())
      .then((data) => setMember(data));
  };
  const actionProduct = async () => {
      await fetch("http://localhost:8000/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  
  useEffect(() => {
    actionPartenaire();
    actionProduct();
    actionMember();
    actionFoire();
    //console.log(foires)
    
  }, [partenaires, products, members, foires]);
 
    return (
      <>
        <main>
          <div class="bg-gray-50 relative overflow-hidden">
            <div class="hidden sm:block sm:absolute sm:inset-0">
              <svg
                class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-200 lg:top-0 lg:mt-14 lg:mb-0 xl:transform-none xl:translate-x-0"
                width="164"
                height="184"
                viewBox="0 0 164 184"
                fill="none"
              >
                <defs>
                  <pattern
                    id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
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
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="164"
                  height="184"
                  fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
                ></rect>
              </svg>
            </div>
            <svg
              class="hidden lg:block absolute left-12 bottom-0 transform translate-y-4"
              width="204"
              height="284"
              fill="none"
              viewBox="0 0 204 284"
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
                    class="text-brand-50"
                    fill="currentColor"
                  ></rect>
                </pattern>
              </defs>
              <rect
                width="204"
                height="284"
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              ></rect>
            </svg>
            <div class=" w-screen mx-auto px-4 sm:px-6 h-[550px] lg:px-8 relative pt-8 pb-10">
              {
                <VideoSlide />
              }
            </div>
          </div>

          <div class="bg-gray-50 py-12 lg:py-14">
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div >
                <p class="mt-2 text-3xl text-center cursor-default leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                  Les entreprise qui nous font confiance
                </p>
                <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                  {partenaires.map((partenaire) => (
                    <>
                      <PartenaireComponent
                        image={partenaire.image}
                        name={partenaire.name}
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white relative">
            <div class="relative">
              <div class="absolute inset-0 flex flex-col">
                <div class="flex-1 py-5"></div>
                <div class="flex-1 w-full bg-brand-50"></div>
              </div>
              <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="pt-24 pb-16">
                  <h4 class="text-sm uppercase tracking-wide text-brand-600 font-semibold leading-4">
                    Qui sommes nous
                  </h4>
                  <div class="mt-4 grid gap-6 sm:grid-cols-2 sm:gap-10 lg:gap-14">
                    <h3 class="text-2xl font-semibold text-gray-900 leading-6 sm:text-3xl sm:leading-8">
                      Cabinet de prestation de services, de conseil et
                      formations en ingenierie des systemes d&apos;informations.
                    </h3>
                    <p class="text-base leading-6 sm:text-lg text-gray-500">
                      Nous avons une equipe de développeurs complémentaires pour
                      vous servir, un menu d&apos;expertise pour vos metiers
                      d&apos;entreprise et vos visions strategiques, nous sommes
                      un ensemble de professionnels des systèmes
                      d&apos;informations.
                    </p>
                  </div>
                </div>
                <Image
                  class="relative rounded-lg shadow-lg object-cover object-center h-91 w-full"
                  width={2000}
                  height={2000}
                  objectFit="contain"
                  src={`http://localhost:8000/static/images/14.jpg`}
                  alt="Expert Team"
                />
              </div>
              <div class="bg-brand-50 relative">
                <div class="max-w-screen-xl mx-auto sm:px-6 lg:px-8 pt-12 pb-14 px-4 md:pt-14 md:pb-16">
                  <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:col-gap-6 sm:row-gap-12 lg:grid-cols-3 lg:col-gap-8">
                    <div class="flex items-start space-x-3">
                      <div class="relative flex items-center justify-center mt-2">
                        <span class="absolute w-3 h-3 p-px flex">
                          <span class="w-full h-full rounded-full bg-brand-200"></span>
                        </span>
                        <span class="relative block w-1.5 h-1.5 bg-brand-600 rounded-full"></span>
                      </div>
                      <div class="space-y-2">
                        <dt class="text-lg leading-6 font-medium text-gray-600">
                          Indices & Performances
                        </dt>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="relative flex items-center justify-center mt-2">
                        <span class="absolute w-3 h-3 p-px flex">
                          <span class="w-full h-full rounded-full bg-brand-200"></span>
                        </span>
                        <span class="relative block w-1.5 h-1.5 bg-brand-600 rounded-full"></span>
                      </div>
                      <div class="space-y-2">
                        <dt class="text-lg leading-6 font-medium text-gray-600">
                          Gestion de projets Informatiques
                        </dt>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="relative flex items-center justify-center mt-2">
                        <span class="absolute w-3 h-3 p-px flex">
                          <span class="w-full h-full rounded-full bg-brand-200"></span>
                        </span>
                        <span class="relative block w-1.5 h-1.5 bg-brand-600 rounded-full"></span>
                      </div>
                      <div class="space-y-2">
                        <dt class="text-lg leading-6 font-medium text-gray-600">
                          Assistance à maitrise d&apos;oeuvre et ouvrage
                        </dt>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="relative flex items-center justify-center mt-2">
                        <span class="absolute w-3 h-3 p-px flex">
                          <span class="w-full h-full rounded-full bg-brand-200"></span>
                        </span>
                        <span class="relative block w-1.5 h-1.5 bg-brand-600 rounded-full"></span>
                      </div>
                      <div class="space-y-2">
                        <dt class="text-lg leading-6 font-medium text-gray-600">
                          Formations professionnelles (Développement, Gestion
                          SGBD, etc)
                        </dt>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="relative flex items-center justify-center mt-2">
                        <span class="absolute w-3 h-3 p-px flex">
                          <span class="w-full h-full rounded-full bg-brand-200"></span>
                        </span>
                        <span class="relative block w-1.5 h-1.5 bg-brand-600 rounded-full"></span>
                      </div>
                      <div class="space-y-2">
                        <dt class="text-lg leading-6 font-medium text-gray-600">
                          Conseil, accompagnement & mise en place des SI
                        </dt>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="relative flex items-center justify-center mt-2">
                        <span class="absolute w-3 h-3 p-px flex">
                          <span class="w-full h-full rounded-full bg-brand-200"></span>
                        </span>
                        <span class="relative block w-1.5 h-1.5 bg-brand-600 rounded-full"></span>
                      </div>
                      <div class="space-y-2">
                        <dt class="text-lg leading-6 font-medium text-gray-600">
                          Développement de progiciels et applications (mobiles,
                          web, desktop)
                        </dt>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="relative py-20">
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="lg:text-center">
                <p class="text-base leading-6 text-brand-600 font-semibold tracking-wide uppercase">
                  Services
                </p>
                <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                  Nos services
                </h3>
                <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto lg:max-w-3xl">
                  Parceque l&apos;tteinte de vos objectifs reste votre priorité,
                  nous vous proposons des outils et solutions simples et
                  efficaces pour vos problématiques régulières
                  d&apos;entreprises.
                </p>
              </div>
            </div>
            <div class="mt-10 grid sm:grid-cols-3">
              <div class="px-4 py-10 sm:px-16 sm:py-15 bg-brand-50">
                <div class="flex-shrink-0">
                  <Image
                    class="h-21 w-auto"
                    width="100"
                    height="56"
                    objectFit="contain"
                    src={`http://localhost:8000/static/icons/icon-si.svg`}
                    alt="Expert Team"
                  />
                  <div class="mt-4">
                    <h4 class="text-lg text-brand-800 leading-6 font-medium">
                      SI, Indices & Performances
                    </h4>
                    <p class="mt-5 text-gray-600 leading-6">
                      Votre metier grandi et votre système d&apos;informations
                      n&apos;y correspond Plus? Urbanisez votre système
                      d&apos;informations. Optimisez...
                    </p>
                    <a
                      href="services.html"
                      class="mt-8 inline-flex items-center text-gray-900 leading-6 text-base font-medium hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      En savoir plus →
                    </a>
                  </div>
                </div>
              </div>
              <div class="px-4 py-10 sm:px-16 sm:py-15 bg-pink-50">
                <div class="flex-shrink-0">
                  <Image
                    class="h-21 w-auto"
                    width="100"
                    height="56"
                    objectFit="contain"
                    src={`http://localhost:8000/static/icons/icon-software.svg`}
                    alt="Expert Team"
                  />
                  <div class="mt-4">
                    <h4 class="text-lg text-pink-800 leading-6 font-medium">
                      Developpement logiciel
                    </h4>
                    <p class="mt-5 text-gray-600 leading-6">
                      Nous developpons des logiciels de bureau, des applications
                      web et mobiles adaptés aux mesures de vos activités prise
                      de décisions...
                    </p>
                    <a
                      href="services.html"
                      class="mt-8 inline-flex items-center text-gray-900 leading-6 text-base font-medium hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      En savoir plus →
                    </a>
                  </div>
                </div>
              </div>
              <div class="px-4 py-10 sm:px-16 sm:py-15 bg-purple-50">
                <div class="flex-shrink-0">
                  <Image
                    class="h-21 w-auto"
                    width="100"
                    height="56"
                    objectFit="contain"
                    src={`http://localhost:8000/static/icons/icon-data-analytics.svg`}
                    alt="Expert Team"
                  />
                  <div class="mt-4">
                    <h4 class="text-lg text-purple-800 leading-6 font-medium">
                      Analyse et Gestion de données
                    </h4>
                    <p class="mt-5 text-gray-600 leading-6">
                      Vos données representent vos activités. Pour vous, nous
                      élaborons des bases de données personnalisées robustes
                      et...
                    </p>
                    <a
                      href="services.html"
                      class="mt-8 inline-flex items-center text-gray-900 leading-6 text-base font-medium hover:text-gray-700 transition duration-150 ease-in-out"
                    >
                      En savoir plus →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white">
            <div class="max-w-screen-xl mx-auto pb-12 px-4 sm:pb-16 sm:px-6 lg:px-8">
              <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                  Plus de 30 applications réalisées
                </h2>
                <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
                  Nous avons réalisés à ce jour un peu plus de 30 Applications
                  Web, mobile (Android & iOs) et Desktop pour plusieurs clients.
                </p>
              </div>
              <dl class="mt-10 sm:mt-16 sm:mx-auto sm:max-w-7xl sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
                <div class="flex items-start space-x-3">
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
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                  <div class="flex flex-col">
                    <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      App Web
                    </dt>
                    <dd class="order-1 text-4xl leading-none font-semibold text-brand-600">
                      11
                    </dd>
                  </div>
                </div>
                <div class="flex items-start space-x-3 mt-10 sm:mt-0">
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
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                  <div class="flex flex-col">
                    <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      App Mobile
                    </dt>
                    <dd class="order-1 text-4xl leading-none font-semibold text-brand-600">
                      14
                    </dd>
                  </div>
                </div>
                <div class="flex items-start space-x-3 mt-10 sm:mt-0">
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
                  <div class="flex flex-col">
                    <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      App PC
                    </dt>
                    <dd class="order-1 text-4xl leading-none font-semibold text-brand-600">
                      18
                    </dd>
                  </div>
                </div>
                <div class="flex items-start space-x-3 mt-10 sm:mt-0">
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
                        stroke-width="2"
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      ></path>
                    </svg>
                  </span>
                  <div class="flex flex-col">
                    <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Refontes & Urbanisations
                    </dt>
                    <dd class="order-1 text-4xl leading-none font-semibold text-brand-600">
                      3
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <div class="bg-gray-50 pt-20 pb-12">
            <div class="max-w-screen-xl relative mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex items-start justify-between">
                <div class="max-w-lg lg:max-w-2xl">
                  <p class="text-sm leading-4 text-brand-600 font-semibold tracking-wide uppercase">
                    Portfolio
                  </p>
                  <h3 class="mt-3 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Nos dernières réalisations
                  </h3>
                  <p class="mt-3 text-lg leading-6 text-gray-500">
                    Nos clients sont satisfait de la qualité de nos services.
                    Ci-dessous les dernières prestations effectuées et livrées
                    pour nos clients.
                  </p>
                </div>
                <div class="flex items-center space-x-8">
                  <button
                    type="button"
                    class="inline-flex items-center bg-transparent border-none outline-none focus:outline-none text-gray-400 hover:text-gray-300 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center bg-transparent border-none outline-none focus:outline-none text-gray-600 hover:text-gray-500 focus:text-gray-700 transition duration-150 ease-in-out"
                  >
                    <svg
                      class="w-6 h-6"
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
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-12 grid gap-5 max-w-lg mx-auto sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:max-w-none">
                {products.map(({ name, image, productType, description }) => (
                  <>
                    <ProductComponent
                      name={name}
                      image={image}
                      productType={productType}
                      description={description}
                    />
                  </>
                ))}
              </div>
            </div>
          </div>

          <div class="bg-gray-50 py-12 lg:py-20 relative">
            <div class="absolute inset-0 flex flex-col">
              <div class="flex-1 py-5"></div>
              <div class="flex-1 w-full bg-white"></div>
            </div>
            <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-2xl text-center">
                <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
                  Notre Équipe
                </h2>
                <p class="text-lg leading-7 text-gray-500">
                  Ils constituent le dynamisme de notre environnement
                  professionnel et garantissent votre satisfaction.
                </p>
              </div>
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
          </div>

          <div class="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
            <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <svg
                class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                role="img"
                aria-labelledby="svg-workcation"
              >
                <defs>
                  <pattern
                    id="ad119f34-7694-4c31-947f-5c9d249b21f3"
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
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="404"
                  fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
                />
              </svg>

              <div class="relative">
                <blockquote>
                  <div class="relative max-w-2xl mx-auto text-center text-2xl leading-9 font-semibold text-gray-900 lg:text-3xl">
                    <svg
                      class="absolute top-0 left-0 transform -translate-x-8 -translate-y-20 h-36 w-36 text-brand-200 opacity-50"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 144 144"
                    >
                      <path
                        stroke-width="2"
                        d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                      ></path>
                    </svg>
                    <p class="relative">
                      La productivité n&apos;est pas seulement la quantité de
                      travail effectué. C&apos;est aussi la qualité.
                    </p>
                  </div>
                  <footer class="mt-8">
                    <div class="md:flex md:items-center md:justify-center">
                      <div class="md:flex-shrink-0">
                        <Image
                          class="rounded-full"
                          width="60"
                          height="80"
                          objectFit="contain"
                          src={`https://daily-voice-res.cloudinary.com/image/upload/c_fill,dpr_auto,f_auto,q_auto:eco,w_640/newsnet-photo-fid-1671607`}
                          alt="Expert Team"
                        />
                      </div>
                      <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                        <div class="text-base leading-6 font-medium text-brand-600">
                          Kenneth Hartley Blanchard
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div class="bg-gray-50">
            <div class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div class="max-w-3xl mx-auto">
                <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                  Foire aux questions
                </h2>
                <div class="mt-6 border-t-2 border-gray-200 pt-6">
                  <dl>
                    {
                        foires.map(({question, reponse}) => (
                          <>
                            <FoireComponent question={question} reponse={reponse}  />
                          </>
                         ) )
                    }
                    
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:8000/partenaire')
  const posts = await res.json()
  

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}




const animation = keyframes`
  0% {opacity: 0;}
  25% {opacity: 1;}
  75% {opacity: 1;}
  100% {opacity: 1;}
`

const wrappers = styled.span`
  opacity: 0;
  animation-name: ${animation}
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`
 
export default Main;