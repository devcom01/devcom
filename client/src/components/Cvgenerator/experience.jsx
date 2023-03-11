import React, { useState } from "react";

const experience = ({ setexperiences }) => {
  const [job, setjob] = useState("");
  const [about, setabout] = useState("");
  const [dates, setdates] = useState("");
  const [datef, setdatef] = useState("");
  return (
    <div>
      <section class="section dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full form rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Expeience :
              </h1>
              <div className="flex text-white">
                <div>
                 
                  <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="job"
                    required=""
                    onChange={(e) => {
                      setjob(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex text-white">
                <label for="date" class="mb-2 text-sm font-medium text-white dark:text-white">Select a date:</label>
<input id="date" type="date" value={dates} class="border border-gray-400 p-2 rounded-md " 
onChange={(e) => {
  setdates(e.target.value)
}}></input></div>
<div className="flex">
                <label for="date" class="mb-2 text-sm font-medium text-white dark:text-white">Select a date:</label>
<input id="datef" type="datef" value={datef} class="border border-gray-400 p-2 rounded-md " 
onChange={(e) => {
  setdatef(e.target.value)
}}></input></div>

            
              
              <div class="mt-1 flex text-white">
                <textarea
                  onChange={(e) => setabout(e.target.value)}
                  id="about"
                  name="about"
                  value={about}
                  placeholder="Description"
                  rows="3"
                  class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
            </div>
            <button class=" buttonex text-gray-800 font-semibold py-2 px-4 border  rounded shadow"
              style={{ width: "100px" }}
              onClick={(e) => {
                setexperiences((experiences) => [
                  ...experiences,
                  { job, about,dates },
                ]);
                setabout("");
                setjob("");
                setdates("");
              }}
            >
              aaa
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default experience;
