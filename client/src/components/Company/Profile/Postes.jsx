import React from 'react'
import photo from "../../../assets/imgs/1678285885757.jpeg"
const Postes = ({offers}) => {
  return (
    <div>
  
<article class="postes bg-white transition duration-350 ease-in-out shadow-lg rounded-xl">
    <div class="flex flex-shrink-0 p-4 pb-0">
        <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
                <div>
                    <img class="inline-block h-10 w-10 rounded-full" src={photo} alt=""/>
                </div>
                <div class="ml-3">
                    {offers[0] &&(
                    <p class="text-base leading-6 font-medium text-gray-900">
                      {offers[0].title}
                      <br/>
                        <span class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        2001
                        </span>
                    </p>)}
                </div>
            </div>
        </a>
    </div>


    <div class="pl-16">
    {offers[0] &&(
        <p class="text-base width-auto font-medium text-gray-900 flex-shrink">
          {offers[0].description} </p>)}

        <div class="md:flex-shrink pr-6 pt-3">
            <div class="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64">
            <img class=" w-full h-full" src={photo} alt=""/>
        </div>
        </div>


        <div class="flex items-center py-4">
        <div class="flex justify-center space-x-2">
  <button
    type="button"
    class="inline-block rounded bg-primary-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
    Apply
  </button>
</div>
            
          </div>

    </div>
   
</article>

  
    </div>
  )
}

export default Postes
