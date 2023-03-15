import React,{useState} from 'react'
import "../Profile/profile.css"

const UpdateProfile = () => {
const [companyname,setCompanyname]=useState("");
const [introduction,setIntroduction]=useState("");
const [website,setWebsite]=useState("");
const [industry,setIndustry]=useState("");
const [companysize,setCompanysize]=useState("");
const [headquarters,setHeadquarters]=useState("");
const [founded,setFounded]=useState("");
const [specialities,setSpecialities]=useState("");

  return (
    <div>
   
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

<main class="profile-page">
  <section class="relative block h-500-px">
    <div class=" divbg absolute top-0 w-full h-full bg-center bg-cover" >
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section class="relative py-16 bg-blueGray-200">
    <div class="container mx-auto px-4">
      <div class="relative h-96 flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 ml-32 lg:ml-32 max-w-150-px"/>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6 px-3 mt-32 sm:mt-0">
                <button class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Save
                </button>
              
               
                <button class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  home
                </button>
        
              </div>
            </div>
           
          </div>
          <div class="text-center mt-12">
            
                                    
                                    <input  onChange={(e)=>{setCompanyname(e.target.value)}} tabindex="0" type="text" id="username" name="username" placeholder="Company name"  class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"/>
                               
            <input  onChange={(e)=>{setIntroduction(e.target.value)}}tabindex="0" type="text" id="into" name="intro" placeholder="Company introduction"  class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"/>
           
            <div class="mb-2 text-blueGray-600 mt-10">
            <input  onChange={(e)=>{setWebsite(e.target.value)}} tabindex="0" type="text" id="web" name="web" placeholder="Website"  class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"/>
            <input onChange={(e)=>{setIndustry(e.target.value)}} tabindex="0" type="text" id="Industry" name="Industry" placeholder="Industry"  class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"/>
            
            <input onChange={(e)=>{setCompanysize(e.target.value)}}tabindex="0" type="text" id="Company size" name="Company size" placeholder="Company size"  class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"/>
            <input onChange={(e)=>{setHeadquarters(e.target.value)}}tabindex="0" type="text" id="Headquarters" name="Headquarters" placeholder="Headquarters"  class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"/>
            <input onChange={(e)=>{setFounded(e.target.value)}} tabindex="0" type="text" id="Founded" name="Founded" placeholder="Founded"  class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"/>
            <textarea onChange={(e)=>{setSpecialities(e.target.value)}}tabindex="0"  id="Specialties" name="Specialties" placeholder="Specialities"  class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"/>
            
            
            
            
             </div>
        
          </div>
          
        </div>
      </div>
    </div>

  </section>
</main>

    </div>
  )
}

export default UpdateProfile
