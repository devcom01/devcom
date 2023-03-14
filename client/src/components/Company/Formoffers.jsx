import React from 'react'

const Formoffers = () => {
  return (
    <div>
      <div class="pt-10">
<form class="bg-white shadow rounded-lg mb-6 p-4 ">
    
            <textarea name="message" placeholder="Job description" class=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"></textarea>
            <input placeholder="Technical stack"type="text"class=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" />
            <input placeholder="Minimum experience"type="text"class=" mt-3 focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" />
            <input placeholder="Job offer role"type="text"class=" mt-3 focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" />
            <input placeholder="Job Type"type="text"class="mt-3 focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" />
            <footer class="flex justify-between mt-2">
                
                <button class="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg">Send
                    <svg class="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </footer>
        </form>
</div>
    </div>
  )
}

export default Formoffers
