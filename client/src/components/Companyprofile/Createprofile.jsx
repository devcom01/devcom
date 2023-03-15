import React ,{useState}from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./company.css"

// import campany from "../../assets/imgs/campany.jpeg"
const Createprofile = () => {
const [name,setName]=useState("")
const [slogan,setSlogan]=useState("")
const [website,setWebsite]=useState("")
const [phone,setPhone]=useState("")
const [Email,setEmail]=useState("")
const [adress,setAdress]=useState("")
const [Industry,setIndustry]=useState("")
const [companysize,setCompanysize]=useState("")
const [founded,setFounded]=useState("")
const [About,setAbout]=useState("")
const [Specialities,setSpecialities]=useState("")

const navigate = useNavigate();

const handleSubmit = () => {
  axios
    .post("http://localhost:3000/api/companies/add", {
      name
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
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
      <div class="relative h-full flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
           
            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6 px-3 mt-32 sm:mt-0">
                <button  onClick={() => handleSubmit()} class=" buttonsave inline-block w-96 justify-start rounded-lg hover:bg-gray-500 bg-black px-5 py-3 font-medium text-white sm:w-auto" type="button">
                  Save
                </button>
              
               
                <button onClick={() => navigate('/company/profile')}class="buttonreturn inline-block w-96 justify-start rounded-lg hover:bg-gray-500 bg-black px-5 py-3 font-medium text-white sm:w-auto" type="button">
                  Return
                </button>
        
              </div>
            </div>
           
          </div>
          {/* <div class="text-start mt-12 flex flex-wrap justify-center"> */}
            
          {/* <form >
              <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                      }}
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>


                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Slogan
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => {
                                        setSlogan(e.target.value);
                                      }}
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               Website
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => {
                                        setWebsite(e.target.value);
                                      }}
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               phone
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                      }}
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                      }}
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               Adress
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => {
                                        setAdress(e.target.value);
                                      }}
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Industry
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => {
                                        setIndustry(e.target.value);
                                      }}
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Company size
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => {
                                        setCompanysize(e.target.value);
                                      }}
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Founded
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => {
                                        setFounded(e.target.value);
                                      }}
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                About
                            </label>
                            <div className="flex flex-col items-start">
                            <textarea
                 
                  id="about"
                  name="about"
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                  placeholder="About"
                  rows="3"
                  className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                ></textarea>
                            </div>
                        
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Specialities
                            </label>
                            <div className="flex flex-col items-start">
                            <textarea
                  onChange={(e) => {
                    setSpecialities(e.target.value);
                  }}
                  id=" Specialities"
                  name=" Specialities"
               
                  placeholder=" Specialities"
                  rows="3"
                  className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                ></textarea>
                            </div>
                        
                        </div>
                       
                       
                        </form>                         */}
                                    
                                    

      

      
        <form action="" class="space-y-4">
          <div class="flex">
          <div class="w-80">
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div class="w-80 mx-24">
            <label class="sr-only" for="name">Slogan</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="slogan"
              type="text"
              id="slogan"
              onChange={(e) => {
                setSlogan(e.target.value);
              }}
            />
          </div>
          <div class="w-80 mx-4" >
            <label class="sr-only" for="name">Website</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="website"
              type="text"
              id="website"
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
            />
          </div>
          </div>
          <div class="flex">
          <div class="w-80">
            <label class="sr-only" for="name">Phone</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Phone"
              type="text"
              id="Phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div class="w-80 mx-24">
            <label class="sr-only" for="name">Email</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="email"
              type="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="w-80 mx-4" >
            <label class="sr-only" for="name">Adress</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Adress"
              type="text"
              id="Adress"
              onChange={(e) => {
                setAdress(e.target.value);
              }}
            />
          </div>
          </div>
          <div class="flex">
          <div class="w-80">
            <label class="sr-only" for="name">Industry</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Industry"
              type="text"
              id="Industry"
              onChange={(e) => {
                setIndustry(e.target.value);
              }}
            />
          </div>
          <div class="w-80 mx-24">
            <label class="sr-only" for="name">Company size</label>
           <select id="Company size" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"onChange={(e) => {
                                        setCompanysize(e.target.value);
                                      }}>
  <option selected>Choose a Company size</option>
  <option value="Small">Small</option>
  <option value="Small">Medium</option>
  <option value="Small">Large</option>
  <option value="Small">International</option>
</select>
          </div>
          <div class="w-80 mx-4" >
            <label class="sr-only" for="name">Founded</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Founded"
              type="text"
              id="Founded"
              onChange={(e) => {
                setFounded(e.target.value);
              }}
            />
          </div>
          </div>
          <div class="flex">
          <div class="w-80">
          <div>
            <label class="sr-only" for="message">About</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="About"
              rows="8"
              id="About"
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            ></textarea>
          </div>
          </div>
          <div class="w-80 mx-40">
          <div>
            <label class="sr-only" for="message">Specialities</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Specialities"
              rows="8"
              id="Specialities"
              onChange={(e) => {
                setSpecialities(e.target.value);
              }}
            ></textarea>
          </div>
          </div>
         
          </div>
  </form>
      </div>
    </div>
  </div>
</section>
</main>
    </div>
  )
}

export default Createprofile
