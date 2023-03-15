import React,{useState} from 'react'

const Offers = ({setOffers}) => {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
 
  return (
    <div>

<div class="offers">
<form class="bg-white shadow rounded-lg mb-6 p-4 ">
            <input type="text" placeholder="Type title ..." class=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
             onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea name="message" placeholder="Type something..." class=" mt-3 focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
             onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            <footer class="flex justify-between mt-2">
            <div class="flex gap-2">
            <label>
  <input type="file" class="hidden" name="file1"/>
  <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
  </span></label>
  <label>
  <input type="file" class="hidden" name="file1"/>
  <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
  <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M28.186 9.069l-6.855 4.122v-4.655c0-0.883-0.716-1.599-1.599-1.599h-17.060c-0.884 0-1.599 0.716-1.599 1.599v14.928c0 0.883 0.715 1.599 1.599 1.599h17.060c0.883 0 1.599-0.716 1.599-1.599v-4.744l7.006 4.211h2.591v-13.861h-2.742zM20.265 23.464c0 0.294-0.24 0.533-0.533 0.533h-17.060c-0.295 0-0.533-0.239-0.533-0.533v-14.928c0-0.294 0.238-0.533 0.533-0.533h17.060c0.294 0 0.533 0.239 0.533 0.533v14.928zM29.861 21.864h-1.229l-7.301-4.389v-3.039l7.15-4.3h1.38v11.729z" fill="currentColor"> </path> </g></svg></span></label>
 </div>
                
                <button class="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg" onClick={(e)=>{
                  e.preventDefault();
                  setOffers((offers)=>[...offers,
                  {title:title,
                  description:description}])
                }}>Send
                    <svg class="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
               
                </button>
            </footer>
        </form>
</div>

    </div>
  )
}

export default Offers
