import React from "react";
import Image from "next/image";

const Footer = () => {
    return ( 
        <>
        <footer class="bg-gray-100">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <Image width='200'
            height='64'
            objectFit='contain' src={`http://localhost:8000/static/images/logo.png`} alt="ISDEV Experts" />
            <p class="text-gray-400 text-base leading-6">
              Une solution à votre problème, une expérience pour votre entreprise. Nous construisons le futur pour votre entreprise tout simplement.
            </p>
            <div class="mt-5 space-y-4">
              <p class="flex items-center space-x-3 text-gray-400 leading-6 text-sm">
                <span class="flex-shrink-0">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </span>
                <span>(+237) 653 560 861 / 656 252 388</span>
              </p>
              <p class="flex items-center space-x-3 text-gray-400 leading-6 text-sm">
                <span class="flex-shrink-0">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </span>
                <span>contact_group@isdevexperts.com</span>
              </p>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-8 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div class="mt-12 lg:mt-0">
                <h4 class="text-sm leading-5 font-semibold text-gray-500 tracking-wider uppercase">
                  Liens Rapides
                </h4>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      Système d’information
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      IT Consulting
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      Développement logiciel
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      Analyse & Gestion de données
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      SIG
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      Les coming soon
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 lg:mt-0">
                <h4 class="text-sm leading-5 font-semibold text-gray-500 tracking-wider uppercase">
                  L’Entreprise
                </h4>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      A propos
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      Carrière
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      Chronologie Tech
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      Equipe
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-base leading-6 text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-12 lg:mt-0">
              <h4 class="text-sm leading-5 font-semibold text-gray-500 tracking-wider uppercase">
                S&apos;enregistrer pour la Newsletter
              </h4>
              <p class="mt-4 text-base leading-6 text-gray-400">
                Souscrivez à notre Newsletter pour rester informé pour nos coming soon.
              </p>
              <form class="mt-4 sm:flex sm:max-w-md">
                <label for="emailAddress" class="sr-only">Entrer votre email</label>
                <input type="email" id="emailAddress" required class="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base leading-6 text-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline-gray focus:placeholder-gray-400 transition duration-150 ease-in-out" placeholder="Entrer votre email" />
                <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button type="submit" class="w-full bg-brand-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base leading-6 font-medium text-white hover:bg-brand-400 focus:outline-none focus:border-brand-600 focus:shadow-outline-brand active:bg-brand-600 transition duration-150 ease-in-out">
                    S’inscrire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-400 pt-8 md:flex md:items-center md:justify-between">
          <div class="flex space-x-4 md:order-2">
            <a href="#" class="text-brand-400 hover:text-brand-300">
              <span class="sr-only">Facebook</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.6 4.433h1.567v-2.65a21.758 21.758 0 0 0-2.283-.116c-2.267 0-3.817 1.383-3.817 3.916v2.184H5.51v2.966h2.558v7.6h3.067v-7.6h2.55l.383-2.966h-2.933V5.875c0-.875.233-1.442 1.466-1.442z" />
              </svg>
            </a>
            <a href="#" class="text-brand-400 hover:text-brand-300">
              <span class="sr-only">LinkedIn</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.17 5.833h-.024a1.862 1.862 0 1 1 .047-3.714 1.863 1.863 0 1 1-.023 3.714zM5.848 8.334H2.515v10h3.333v-10zM14.598 8.334a3.727 3.727 0 0 0-2.917 1.419v-1.42H8.348v10h3.333V13.75a1.667 1.667 0 1 1 3.333 0v4.584h3.334v-6.25a3.75 3.75 0 0 0-3.75-3.75z" />
              </svg>
            </a>
          </div>
          <p class="mt-8 text-base leading-6 text-gray-900 md:mt-0 md:order-1">
            &copy; 2020 <span class="font-semibold text-gray-900">IS DEV Experts S.A.S</span>. Tous droits reservés.
          </p>
        </div>
      </div>
    </footer>
        </>
     );
}
 
export default Footer;