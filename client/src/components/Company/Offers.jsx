import React from 'react'

const Offers = () => {
  return (
    <div>
      <section class=" section  dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full form rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
               Contact :
              </h1>
              <form class="space-y-4 md:space-y-6"  action="#">
                <div className='flex'>
                <div>
                
                  <input
                    type="text"
                    name="Firstname"
                    id="Firstname"
                    class="bg-white border input border-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Fisrt name"
                    
                  />
                  </div>
                  <div className='mx-5'>
                  
  
                 
                 
                  
                  <input
                    type="text"
                    name="Lastname"
                    id="Lastname"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   
                    placeholder="Last name"
                   
                  />
                 
                  </div>
                  </div>
                  <div className='flex'>
                <div>
               
                  <input
                    type="text"
                    name="JobTitle"
                    id="JobTitle"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Job Title"
                    
                  />
                  </div>
                  
                  <div className='mx-5'>
                 
                  <input
                    type="text"
                    name="Adress"
                    id="Adress"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Adress"
                    
                  />
                  </div>
                  </div>
               
                  <div className='flex'>
                <div>
               
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Phone"
                    
                  />
                  
                  </div>
                  <div className='mx-5'>
             
                  <input
                    type="email"
                    name="E-mail"
                    id="E-mail"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="E-mail"
                    
                  />
                  </div>
                  </div>
                  <div className='flex'>
                <div >
                  <div class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white   dark:hover:bg-gray-700">
               
                 </div>
                 
                  <input
                    type="Linkedin"
                    name="Linkedin"
                    id="Linkedin"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Linkedin"
                    
                  />
                  </div>
                  <div className='mx-5'>
                  <div class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white   dark:hover:bg-gray-700">
              
                  </div>
                  <input
                    type="email"
                    name="Github"
                    id="Github"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Github"
                   
                  />
            
                   <button class=" button text-gray-800 font-semibold py-2 px-4 border  rounded shadow"
                  
                      >
                       SEND 
                      </button>
                  </div>
                  </div>
                  </form>
                </div>
                </div>
                </div>
</section>


    </div>
  )
}

export default Offers
