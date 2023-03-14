import React from 'react'

import Formoffers from './Formoffers'
const Joboffers = () => {
  return (
    <div>

   
    <div class="fixed coverdivv">
            <form >
                <div class="bg-white dark:bg-gray-800">
                    <div class="container mt-0mx-auto bg-white dark:bg-gray-800 rounded">
                      
                        <div class="mx-auto">
                            <div class="cover mx-auto xl:mx-0">
                                <div class="rounded relative mt-0 h-48">
                                <img class="IMG" alt="..." src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80"/>
                                    <div class="imgopacity absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded"></div>
                                    <div class="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                                       
                                        <div class="ml-2 text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                <line x1="16" y1="5" x2="19" y2="8" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="w-20 profilef h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                                        <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" alt="" class="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />

                                    </div>
                                </div>
                                
                               
                            </div>
                        </div>
                    </div>
</div>
</form>
   </div>        
  <div class="formoffersdiv">
     <Formoffers/>  
     </div>         
         
  
     
    </div>
  )
}

export default Joboffers
