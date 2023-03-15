
import React, { useState } from "react";
import avatar from "../../assets/imgs/face.jpg";
import "../../components/Company/company.css";
import Offers from "./Offers";

import Postes from "./Profile/Postes";
import Profilecard from "./Profile/Profilecard";
import { Route, Routes, Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "./Profile/Profile";
import Asideprofilecard from "./Profile/Asideprofilecard";
const Campany = () => {
  const [offers, setOffers] = useState([]);
  return (
    <div>

      <nav
        class="fixed -no-wrap flex w-full items-center justify-between bg-neutral-100 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-6">
          <button
            class="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <a
              class="mt-0 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
              href="#"
            >
              <img
                src="https://tecdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png"
                alt=""
                loading="lazy"
              />
            </a>

            <ul
              class=" list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li class="lg:pr-2 " data-te-nav-item-ref>
                <div class="relative searchbar mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="search"
                    class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1"
                  />
                  <button
                    class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li class="lg:pr-2 homeicon" data-te-nav-item-ref>
                <a
                  class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Home
                </a>
              </li>
              <li class="lg:pr-2 interview" data-te-nav-item-ref>
                <a
                  class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Interview
                </a>
              </li>
              <li class="lg:pr-2 notif" data-te-nav-item-ref>
                <a
                  class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                >
                  Notification
                </a>
              </li>
              <li class="lg:pr-2 notif" data-te-nav-item-ref>
                <img
                  src={avatar}
                  class="avatarnav shadow-xl rounded-full align-middle border-none absolute mt-8 m-16 ml-60 lg:ml-60 max-w-[150px]"
                />
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <div class="profilecard fixed">
        <Profilecard />
      </div>

      <div class="Asideprofilecard fixed">
        <Asideprofilecard />
      </div>

      <Offers setOffers={setOffers} />
      
      <Postes offers={offers}/>


    
    </div>
  );
};

export default Campany;
