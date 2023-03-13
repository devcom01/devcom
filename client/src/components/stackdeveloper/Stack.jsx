import React,{useState} from 'react'

const Stack = () => {
    const [stack, setStack] = useState("");
  const [experience,setExperience]=useState("");
  const [stackexperiences,setStackexperiences]=useState("")
  return (
    <div>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full form rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8"></div>
        <form class="space-y-4 md:space-y-6"  action="#">
        <div className='flex'>  
              
                <div>
              
                <input
                    type="text"
                    name="stack"
                    id="stack"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   
                    placeholder="stack"
                    onChange={(e) => {
                        setStack(e.target.value);
                      }}
                  />
                 
                  </div>
                
                  <div className='mx-5'>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    class="bg-white border input border-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="years experience"
                    onChange={(e) => {
                        setExperience(e.target.value);
                      }}
                  /> 
  
                  </div>
                  </div>





















        {stackexperiences && (
                <div className='flex'>  
                {stackexperiences.map((stack) => (
                <div>
              
                <input
                    type="text"
                    name="stack"
                    id="stack"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   
                    placeholder="stack"
                    onChange={(e) => {
                        setStack(e.target.value);
                      }}
                  />
                 
                  </div> ))}
                  {stackexperiences.map((stack) => (
                  <div className='mx-5'>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    class="bg-white border input border-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="years experience"
                    onChange={(e) => {
                        setExperience(e.target.value);
                      }}
                  /> 
  
                  </div>))} 
                  </div>)}
                  
               
                 
                  <div className='flex'>
              
                  
            
                   <button class=" button text-gray-800 font-semibold py-2 px-4 border  rounded shadow"
                        onClick={(e) => {
                            e.preventDefault();
                            setStackexperiences((satckex) => [
                              ...satckex,
                              { stack: stack,
                                experience:experience,
                              },
                            ]);console.log("stack",stackexperiences)
                            // setStack("");
                            // setExperience("");
                            
  
                          }}
                      >
                       Add
                      </button>
                      {/* <button class="  text-gray-800 font-semibold py-9 px-4 border  rounded shadow"
                      
                      >
                       send
                      </button> */}
                  </div>
                
                  </form></div></div>
    </div>
  )
}

export default Stack
