import React, { useState } from "react";
//import bg from "../../assets/imgs/bg.jpg";

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/datepicker.min.js"></script>;
const education = ({ seteducations }) => {
  const [university, setUniversity] = useState("");
  const [diploma,setdiploma]=useState("");
  const [city,setcity]=useState("");
  const [dates,setdates]=useState("")
  const [datef,setdatef]=useState("")
 
  return (
    <div>
      <section class=" section  dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full form rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Education :
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div className="flex text-white">
                  <div>
                  
                    <input
                      type="text"
                      name="University"
                      id="University"
                      class=" bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="university"
                      value={university}
                      required=""
                      onChange={(e) => {
                        setUniversity(e.target.value);
                                              }}
                    />
                  </div>
                  <div className="flex text-white ml-7">
                   
                    <input
                      type="text"
                      name="city"
                      id="city"
                      class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="city"
                      value={city}
                      required=""
                      onChange={(e) => {
                        setcity(e.target.value);
                                              }}
                      
                    />
                  </div>
                </div>
                <div className="flex text-white">
                  <div>
                   
                    <input
                      type="text"
                      name="diploma"
                      id="diploma"
                      class="bg-white border  border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Diploma"
                      value={diploma}
                      required=""
                      onChange={(e) => {
                        setdiploma(e.target.value)
                      }}
                    />
                  </div>
                  
                </div>
                
                <div className="">
                <label for="date" class=" mb-2 text-sm font-medium text-white dark:text-white">Select a date:</label>
<input id="date" type="date" value={dates} class="border border-gray-400  p-2 rounded-md" 
onChange={(e) => {
  setdates(e.target.value)
}}></input>
                   
                    
                </div>
                <div className="flex">
                <label for="date" value={datef} class="mb-2 text-sm font-medium text-white dark:text-white">Select a date:</label>
<input id="date" type="date" class="border border-gray-400 p-2 rounded-md " 
onChange={(e) => {
  setdatef(e.target.value)
}}></input>
                 
               
                       </div>
                       
                       <div className="flex">
                  
                       <button class=" buttone text-gray-800 font-semibold py-2 px-4 border  rounded shadow"
                        onClick={(e) => {
                          e.preventDefault();
                          seteducations((education) => [
                            ...education,
                            { university: university,
                              diploma:diploma,
                            city:city,
                          dates:dates ,
                        datef:datef},
                          ]);
                          setUniversity("");
                          setdiploma("");
                          setcity("");
                          setdates("");
                          setdatef("")

                        }}
                      >
                        Send
                      </button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default education;
