import React from 'react'
import avatar from '../../../assets/imgs/proxym.jpeg'
const Profilecard = () => {
  return (
    <div>
  
<div class="relative cardprofile max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
                <div class="relative">
                    <img src={avatar} class="avatarr shadow-xl rounded-full align-middle border-none absolute   max-w-[150px]"/>
                </div>
            </div>
            
        </div>
        <div class="text-center mt-14">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Proxym</h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Unleash Your Digital Potential !<br/>
                 Services et conseil informatiques Sousse, Sousse 
            </div>
        </div>

    </div>
</div>



    </div>
  )
}

export default Profilecard