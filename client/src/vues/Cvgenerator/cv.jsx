import React, { useEffect, useState } from "react";
import Contact from "../../components/Cvgenerator/contact.jsx";
import Education from "../../components/Cvgenerator/education.jsx";
import Experience from "../../components/Cvgenerator/experience.jsx";
import Resume from "../../components/Cvgenerator/resume.jsx";
import avatar from "../../assets/imgs/face.jpg";
import Header from "../../components/Cvgenerator/header.jsx";
import Profile from "../../components/Cvgenerator/Profile.jsx"
import ReactDOM from "react-dom";

import { Route, Routes, Router } from "react-router-dom";
import { Link } from "react-router-dom";

const cv = () => {
 
  const [experiences, setexperiences] = useState([]);
  const [contacts, setcontacts] = useState([]);
  const [educations, seteducations] = useState([]);
  const [profil, setProfil] = useState([]);
  const [resume, setResume] = useState({
    experiences,
    contacts,
    educations,
    profil
  });
  useEffect(() => {
    setResume({ experiences, contacts, educations,profil });
  }, [experiences, contacts, educations,profil]);
  return (
    
    <div>
      <aside
        id="cta-button-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="divavatar  my-0">
          <img class=" avatar w-32 h-32 mx-11  rounded-full" src={avatar} />
        </div>
        <div class="  h-full px-3 py-4 overflow-y-auto side dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
            <Link to="/contact" >
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-white hover:text-gray-900 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 fill-yellow-400 "
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12.5 15h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0 3h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-6h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-8-1c-.822 0-1.5.678-1.5 1.5v6c0 .822.678 1.5 1.5 1.5h4c.822 0 1.5-.678 1.5-1.5v-6c0-.822-.678-1.5-1.5-1.5zm0 1h4c.286 0 .5.214.5.5v6c0 .286-.214.5-.5.5h-4c-.286 0-.5-.214-.5-.5v-6c0-.286.214-.5.5-.5zm2-10c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5S6 6.777 6 6.5v-4c0-.277.223-.5.5-.5zm17 0c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-4c0-.277.223-.5.5-.5zm-22 2C.678 4 0 4.678 0 5.5v20c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-20c0-.822-.678-1.5-1.5-1.5h-3c-.66 0-.664 1 0 1h3c.286 0 .5.214.5.5v20c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-20c0-.286.214-.5.5-.5h3c.67 0 .654-1 0-1zm7 0c-.63 0-.683 1 0 1h13c.66 0 .66-1 0-1z"></path>
                  </g>
                </svg>
               
                <span class="ml-3">Contact</span>
               
              </a> </Link>
            </li>
            <li>
            <Link to="/education" >
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-white hover:text-gray-900 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 fill-yellow-400 "
                  viewBox="0 0 48 48"
                  id="Layer_1"
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css"></style>
                    <path
                      class="st0"
                      d="M14.302,41.5h19.385c1.551,0,2.813-1.262,2.813-2.813V34.37c0-4.822-3.654-8.77-8.38-9.197v-3.964 c2.291-1.412,3.71-3.917,3.71-6.628V11.5h0.67c0.276,0,0.5-0.224,0.5-0.5V7.585h2.5v2.625c0,0.276,0.224,0.5,0.5,0.5 s0.5-0.224,0.5-0.5V7.085c0-0.276-0.224-0.5-0.5-0.5h-3.5h-17H12c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h3V11 c0,0.276,0.224,0.5,0.5,0.5h0.67v3.08c0,2.711,1.418,5.217,3.7,6.629v3.965c-4.735,0.436-8.38,4.381-8.38,9.197v4.317 C11.49,40.238,12.751,41.5,14.302,41.5z M25.732,25.12h-3.464H20.87v-3.377c0.98,0.432,2.045,0.667,3.13,0.667 c1.081,0,2.143-0.235,3.12-0.667v3.377H25.732z M25.098,26.12L24,30.692l-1.098-4.572H25.098z M16,7.585h16V10.5h-0.67H16.67H16 V7.585z M17.17,14.58V11.5h13.66v3.08c0,2.454-1.324,4.724-3.46,5.927c-2.045,1.185-4.712,1.181-6.753-0.002 C18.491,19.302,17.17,17.032,17.17,14.58z M12.49,34.37c0-4.44,3.47-8.06,7.921-8.242c0.107-0.009,0.221-0.009,0.329-0.008h1.134 l1.64,6.83c0.054,0.225,0.255,0.383,0.486,0.383s0.432-0.159,0.486-0.383l1.64-6.83h1.124c0.111,0.002,0.223,0,0.35,0.009 c4.43,0.181,7.9,3.8,7.9,8.241v4.317c0,1-0.813,1.813-1.813,1.813H14.302c-1,0-1.813-0.813-1.813-1.813V34.37z"
                    ></path>
                    <path
                      class="st0"
                      d="M16.083,33.81h4.287c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-4.287c-0.276,0-0.5,0.224-0.5,0.5 S15.807,33.81,16.083,33.81z"
                    ></path>
                  </g>
                </svg>
               
                <span class="flex-1 ml-3 whitespace-nowrap">Education</span>
                
             </a></Link>
            </li>
            <li>
            <Link to="/experience" >
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-white hover:text-gray-900 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 "
                  viewBox="0 0 60 60"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>job-laptop</title> <desc>Created with Sketch.</desc>{" "}
                    <defs> </defs>{" "}
                    <g
                      id="People"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g id="Icon-12" class="w-6 h-6 fill-yellow-400 ">
                        {" "}
                        <path
                          d="M32,27 L32,22 L28,22 L28,27 L28,30 L32,30 L32,27 Z M34,26 L51,26 C51.552,26 52,26.448 52,27 C52,27.552 51.552,28 51,28 L34,28 L34,30 C34,31.103 33.103,32 32,32 L28,32 C26.897,32 26,31.103 26,30 L26,28 L9,28 C8.448,28 8,27.552 8,27 C8,26.448 8.448,26 9,26 L26,26 L26,22 C26,20.897 26.897,20 28,20 L32,20 C33.103,20 34,20.897 34,22 L34,26 Z M30.03,27 L30.02,27 C29.468,27 29.025,27.448 29.025,28 C29.025,28.552 29.478,29 30.03,29 C30.583,29 31.03,28.552 31.03,28 C31.03,27.448 30.583,27 30.03,27 L30.03,27 Z M13,52 L11,52 C10.448,52 10,52.448 10,53 C10,53.552 10.448,54 11,54 L13,54 C13.552,54 14,53.552 14,53 C14,52.448 13.552,52 13,52 L13,52 Z M13,48 L11,48 C10.448,48 10,48.448 10,49 C10,49.552 10.448,50 11,50 L13,50 C13.552,50 14,49.552 14,49 C14,48.448 13.552,48 13,48 L13,48 Z M19,52 L17,52 C16.448,52 16,52.448 16,53 C16,53.552 16.448,54 17,54 L19,54 C19.552,54 20,53.552 20,53 C20,52.448 19.552,52 19,52 L19,52 Z M19,48 L17,48 C16.448,48 16,48.448 16,49 C16,49.552 16.448,50 17,50 L19,50 C19.552,50 20,49.552 20,49 C20,48.448 19.552,48 19,48 L19,48 Z M25,52 L23,52 C22.448,52 22,52.448 22,53 C22,53.552 22.448,54 23,54 L25,54 C25.552,54 26,53.552 26,53 C26,52.448 25.552,52 25,52 L25,52 Z M25,48 L23,48 C22.448,48 22,48.448 22,49 C22,49.552 22.448,50 23,50 L25,50 C25.552,50 26,49.552 26,49 C26,48.448 25.552,48 25,48 L25,48 Z M31,52 L29,52 C28.448,52 28,52.448 28,53 C28,53.552 28.448,54 29,54 L31,54 C31.552,54 32,53.552 32,53 C32,52.448 31.552,52 31,52 L31,52 Z M31,48 L29,48 C28.448,48 28,48.448 28,49 C28,49.552 28.448,50 29,50 L31,50 C31.552,50 32,49.552 32,49 C32,48.448 31.552,48 31,48 L31,48 Z M37,52 L35,52 C34.448,52 34,52.448 34,53 C34,53.552 34.448,54 35,54 L37,54 C37.552,54 38,53.552 38,53 C38,52.448 37.552,52 37,52 L37,52 Z M37,48 L35,48 C34.448,48 34,48.448 34,49 C34,49.552 34.448,50 35,50 L37,50 C37.552,50 38,49.552 38,49 C38,48.448 37.552,48 37,48 L37,48 Z M43,52 L41,52 C40.448,52 40,52.448 40,53 C40,53.552 40.448,54 41,54 L43,54 C43.552,54 44,53.552 44,53 C44,52.448 43.552,52 43,52 L43,52 Z M43,48 L41,48 C40.448,48 40,48.448 40,49 C40,49.552 40.448,50 41,50 L43,50 C43.552,50 44,49.552 44,49 C44,48.448 43.552,48 43,48 L43,48 Z M49,52 L47,52 C46.448,52 46,52.448 46,53 C46,53.552 46.448,54 47,54 L49,54 C49.552,54 50,53.552 50,53 C50,52.448 49.552,52 49,52 L49,52 Z M49,48 L47,48 C46.448,48 46,48.448 46,49 C46,49.552 46.448,50 47,50 L49,50 C49.552,50 50,49.552 50,49 C50,48.448 49.552,48 49,48 L49,48 Z M22,8 L24,8 L24,5 C24,4.448 24.448,4 25,4 L35,4 C35.552,4 36,4.448 36,5 L36,8 L38,8 L38,3 C38,2.449 37.551,2 37,2 L23,2 C22.449,2 22,2.449 22,3 L22,8 Z M26,8 L34,8 L34,6 L26,6 L26,8 Z M53,10 L8,10 C7.357,10 6.117,10.699 5.994,11.051 L6,40 L54,40 L54,11 C54,10.551 53.449,10 53,10 L53,10 Z M20,8 L20,3 C20,1.346 21.346,0 23,0 L37,0 C38.654,0 40,1.346 40,3 L40,8 L53,8 C54.542,8 56,9.458 56,11 L56,41 C56,41.552 55.552,42 55,42 L5,42 C4.448,42 4,41.552 4,41 L4,11 C4,9.267 6.631,8 8,8 L20,8 Z M55,4 L42.833,4 C42.281,4 41.833,4.448 41.833,5 C41.833,5.552 42.281,6 42.833,6 L55,6 C56.458,6 58,7.542 58,9 L58,55 C58,56.458 56.458,58 55,58 L5,58 C3.542,58 2,56.458 2,55 L2,46 L55,46 C55.552,46 56,45.552 56,45 C56,44.448 55.552,44 55,44 L1,44 C0.448,44 0,44.448 0,45 L0,55 C0,57.57 2.43,60 5,60 L55,60 C57.57,60 60,57.57 60,55 L60,9 C60,6.43 57.57,4 55,4 L55,4 Z M0,41 L0,9 C0,6.43 2.43,4 5,4 L17,4 C17.552,4 18,4.448 18,5 C18,5.552 17.552,6 17,6 L5,6 C3.542,6 2,7.542 2,9 L2,41 C2,41.552 1.552,42 1,42 C0.448,42 0,41.552 0,41 L0,41 Z"
                          id="job-laptop"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Experience</span>
             </a>
              </Link>
            </li>
            <li>
           
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-white hover:text-gray-900 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 fill-yellow-400 "
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M268.18,162.303l-2.993,21.876c-0.55,4.023,1.157,8.023,4.441,10.41c1.918,1.393,4.191,2.105,6.479,2.105 c1.631,0,3.272-0.363,4.794-1.098l19.88-9.605l19.88,9.605c3.656,1.767,7.985,1.38,11.272-1.007 c3.284-2.387,4.991-6.386,4.441-10.408l-2.992-21.876l15.278-15.94c2.81-2.931,3.781-7.17,2.526-11.031 c-1.255-3.861-4.531-6.72-8.527-7.44l-21.729-3.914l-10.439-19.457c-1.919-3.578-5.65-5.81-9.711-5.81 c-4.061,0-7.791,2.233-9.711,5.81l-10.439,19.457l-21.729,3.914c-3.995,0.72-7.272,3.579-8.526,7.44 c-1.255,3.861-0.284,8.101,2.526,11.031L268.18,162.303z M289.779,144.725c3.31-0.597,6.168-2.672,7.757-5.636l3.244-6.047 l3.244,6.047c1.589,2.963,4.447,5.039,7.757,5.636l6.753,1.217l-4.749,4.954c-2.327,2.429-3.419,5.787-2.963,9.119l0.93,6.798 l-6.178-2.985c-1.514-0.732-3.154-1.098-4.795-1.098s-3.281,0.366-4.795,1.098l-6.178,2.984l0.931-6.797 c0.455-3.333-0.636-6.691-2.963-9.119l-4.749-4.955L289.779,144.725z"></path>{" "}
                          <path d="M171.294,136.681h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02S165.209,136.681,171.294,136.681z"></path>{" "}
                          <path d="M171.294,180.762h51.244c6.085,0,11.02-4.934,11.02-11.02c0-6.086-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02C160.274,175.828,165.209,180.762,171.294,180.762z"></path>{" "}
                          <path d="M268.18,276.814l-2.993,21.876c-0.55,4.022,1.157,8.023,4.441,10.409c3.285,2.388,7.615,2.774,11.273,1.007l19.88-9.605 l19.88,9.605c1.523,0.735,3.161,1.098,4.794,1.098c2.288,0,4.562-0.712,6.479-2.105c3.284-2.387,4.991-6.386,4.441-10.409 l-2.992-21.876l15.278-15.94c2.81-2.931,3.781-7.17,2.526-11.031c-1.255-3.861-4.531-6.72-8.527-7.44l-21.729-3.914 l-10.439-19.457c-1.919-3.578-5.65-5.81-9.711-5.81c-4.061,0-7.791,2.233-9.711,5.81l-10.439,19.457l-21.729,3.914 c-3.995,0.72-7.272,3.579-8.526,7.44c-1.255,3.861-0.284,8.101,2.526,11.031L268.18,276.814z M289.779,259.237 c3.31-0.597,6.168-2.672,7.757-5.636l3.244-6.047l3.244,6.047c1.589,2.963,4.447,5.04,7.757,5.636l6.753,1.217l-4.749,4.954 c-2.327,2.429-3.419,5.787-2.963,9.119l0.93,6.799l-6.178-2.985c-1.514-0.732-3.154-1.098-4.795-1.098s-3.281,0.366-4.795,1.098 l-6.178,2.984l0.931-6.798c0.455-3.332-0.636-6.691-2.963-9.119l-4.749-4.955L289.779,259.237z"></path>{" "}
                          <path d="M171.294,251.194h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02S165.209,251.194,171.294,251.194z"></path>{" "}
                          <path d="M171.294,295.274h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02C160.274,290.34,165.209,295.274,171.294,295.274z"></path>{" "}
                          <path d="M268.18,391.328l-2.993,21.875c-0.55,4.022,1.157,8.023,4.441,10.409c1.918,1.394,4.191,2.105,6.479,2.105 c1.631,0,3.272-0.363,4.794-1.098l19.88-9.605l19.88,9.605c3.656,1.767,7.987,1.379,11.272-1.007s4.991-6.386,4.441-10.409 l-2.992-21.876l15.278-15.939c2.81-2.931,3.781-7.17,2.526-11.031c-1.255-3.861-4.53-6.721-8.526-7.44l-21.731-3.915 l-10.439-19.457c-1.919-3.578-5.65-5.81-9.711-5.81c-4.061,0-7.791,2.233-9.711,5.81l-10.439,19.457l-21.729,3.915 c-3.996,0.72-7.272,3.578-8.526,7.44c-1.255,3.861-0.284,8.1,2.526,11.031L268.18,391.328z M289.781,373.748 c3.31-0.596,6.167-2.671,7.756-5.636l3.244-6.047l3.244,6.047c1.589,2.963,4.445,5.039,7.756,5.636l6.754,1.217l-4.749,4.953 c-2.327,2.428-3.419,5.786-2.963,9.119l0.93,6.799l-6.178-2.985c-1.514-0.732-3.154-1.098-4.795-1.098s-3.281,0.366-4.795,1.098 l-6.178,2.985l0.931-6.798c0.455-3.332-0.636-6.691-2.963-9.119l-4.749-4.954L289.781,373.748z"></path>{" "}
                          <path d="M171.294,365.706h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02S165.209,365.706,171.294,365.706z"></path>{" "}
                          <path d="M171.294,409.786h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02S165.209,409.786,171.294,409.786z"></path>{" "}
                          <path d="M424.509,16.53h-77.593v-5.51c0-6.086-4.935-11.02-11.02-11.02H176.105c-6.085,0-11.02,4.934-11.02,11.02v5.51H87.491 c-6.085,0-11.02,4.934-11.02,11.02v473.43c0,6.086,4.935,11.02,11.02,11.02h337.018c6.085,0,11.02-4.934,11.02-11.02V27.55 C435.529,21.464,430.596,16.53,424.509,16.53z M187.125,22.04h137.751v38.57H187.125V22.04z M369.409,82.651v363.228H142.591 V82.651H369.409z M413.489,489.96H98.511V38.57h66.574v22.04h-33.513c-6.085,0-11.02,4.934-11.02,11.02v385.269 c0,6.086,4.935,11.02,11.02,11.02h248.857c6.085,0,11.02-4.934,11.02-11.02V71.631c0-6.086-4.935-11.02-11.02-11.02h-33.512 V38.57h66.573V489.96z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Skills</span>
              </a>
            </li>
            <li>
            <Link to="/profil" >
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-white hover:text-gray-900 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 fill-yellow-400 "
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M256,0c-45.616,0-82.72,37.104-82.72,82.72c0,45.616,37.104,82.736,82.72,82.736c45.616,0,82.72-37.104,82.72-82.72 C338.72,37.12,301.616,0,256,0z M256,149.456c-36.784,0-66.72-29.936-66.72-66.72S219.216,16,256,16 c36.8,0,66.72,29.936,66.72,66.72S292.8,149.456,256,149.456z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M336.72,187.84l-6.352-1.92L256,241.984l-74.352-56.064l-6.352,1.92C72.32,218.704,72.416,323.776,72.416,324.832 l0.16,12.96H439.44l0.16-12.96C439.6,323.776,439.696,218.704,336.72,187.84z M88.512,321.792c0.8-16.512,8.976-93.072,90-118.208 l67.856,51.168l9.632,7.264l9.632-7.264l67.856-51.168c81.248,25.184,89.232,102.128,90.016,118.208H88.512z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <rect
                          x="19.968"
                          y="417.28"
                          width="472.064"
                          height="16"
                        ></rect>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <rect
                          x="19.968"
                          y="496"
                          width="472.064"
                          height="16"
                        ></rect>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Profil</span>
              </a></Link>
            </li>
          </ul>
        </div>
      </aside>
     
<div class="header">
      <Header  />
</div>
<Routes>

 <Route path="/contact" element={<div class="contact"><Contact setcontacts={setcontacts} /></div>} />
 <Route path="/education" element={<div class="contact"><Education seteducations={seteducations} /></div> } />
 <Route path="/experience" element={<div class="contact"><Experience setexperiences={setexperiences} /></div> } />
 <Route path="/profil" element={<div class="contact"><Profile setProfil={setProfil} /></div> } />

</Routes>

    
    <div class="contact">
        <Resume resume={resume} />
      </div>
    </div>
  );
};

export default cv;