import React,{useState} from 'react'

const contact = ({ setcontacts}) => {
  
  const [Firstname, setFirstname] = useState("");
  const [Lastname,setLastname]=useState("");
const [JobTitle,setJobTitle]=useState("");
const [Email,setEmail]=useState("");
const [Linkedin,setLinkedin]=useState("")
const [Github,setGithub]=useState("")
const [Phone,setPhone]=useState("");
 const [Adress,setAdress]=useState("");
//  const [PostalCode,setPostalCode]=useState("");
//  const [City,setCity]=useState("");
 
 
 
 

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
                  {/* <label
                    for="Firstname"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    First name :
                  </label> */}
                  <input
                    type="text"
                    name="Firstname"
                    id="Firstname"
                    class="bg-white border input border-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Fisrt name"
                    required=""
                    value={Firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                  </div>
                  <div className='mx-5'>
                  
    





                  {/* <label

                    for="Lastname"
                    class="block mb-2 text-sm font-medium text-white  dark:text-white"
                  >
                   Last name :
                  </label> */}
                 
                 
                  
                  <input
                    type="text"
                    name="Lastname"
                    id="Lastname"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   
                    placeholder="Last name"
                    value={Lastname}
                    required=""
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                 
                  </div>
                  </div>
                  <div className='flex'>
                <div>
                  {/* <label
                    for="JobTitle"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Job Title :
                  </label> */}
                  <input
                    type="text"
                    name="JobTitle"
                    id="JobTitle"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Job Title"
                    value={JobTitle}
                    required=""
                    onChange={(e) => {
                      setJobTitle(e.target.value);
                    }}
                  />
                  </div>
                  
                  <div className='mx-5'>
                  {/* <label
                    for="Adress"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Adress :
                  </label> */}
                  <input
                    type="text"
                    name="Adress"
                    id="Adress"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Adress"
                    value={Adress}
                    required=""
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                  />
                  </div>
                  </div>
                  {/* <div className='flex'> */}
                {/* <div> */}
                  {/* <label
                    for="PostalCode"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Postal Code :
                  </label> */}
                  {/* <input
                    type="text"
                    name="PostalCode"
                    id="PostalCode"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Postal Code"
                    required=""
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                    }}
                  />
                  </div> */}
                  {/* <div className='mx-5'> */}
                  {/* <label
                    for="City"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    City :
                  </label> */}
                  {/* <input
                    type="text"
                    name="city"
                    id="city"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="City"
                    required=""
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  /> */}
                  {/* </div> */}
                  {/* </div> */}
                  <div className='flex'>
                <div>
                  {/* <label
                    for="Phone"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Phone:
                  </label> */}
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Phone"
                    value={Phone}
                    required=""
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  
                  </div>
                  <div className='mx-5'>
                  {/* <label
                    for="E-mail"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    E-mail :
                  </label> */}
                  <input
                    type="email"
                    name="E-mail"
                    id="E-mail"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="E-mail"
                    value={Email}
                    required=""
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  </div>
                  </div>
                  <div className='flex'>
                <div >
                  <div class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white   dark:hover:bg-gray-700">
                  {/* <svg class=" fill-yellow-400 w-6 h-6 mr-2 mb-3 "  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
                   */}
                  {/* <label
                    for="Linkedin"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                   Linkedin :
                  </label> */}
                 </div>
                 
                  <input
                    type="Linkedin"
                    name="Linkedin"
                    id="Linkedin"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Linkedin"
                    required=""
                    value={Linkedin}
                    onChange={(e) => {
                      setLinkedin(e.target.value);
                    }}
                  />
                  </div>
                  <div className='mx-5'>
                  <div class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white   dark:hover:bg-gray-700">
                  {/* <svg class=" fill-yellow-400 w-6 h-6 mr-2 mb-3 " viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.92 12.183c0-1.586-.604-2.864-1.585-3.83.172-.547.398-1.763-.229-3.321 0 0-1.114-.348-3.628 1.315a12.695 12.695 0 0 0-3.081-.366c-1.154 0-2.322.143-3.409.44-2.596-1.747-3.74-1.391-3.74-1.391-.748 1.847-.287 3.215-.145 3.554-.883.936-1.414 2.133-1.414 3.594 0 1.111.128 2.099.44 2.964l.325.732c.879 1.614 2.606 2.655 5.677 2.983-.434.289-.885.779-1.062 1.612-.594.28-2.475.966-3.603-.944 0 0-.633-1.148-1.842-1.235 0 0-1.174-.017-.08.722 0 0 .782.367 1.326 1.738 0 0 .705 2.342 4.114 1.593v2.417s-.076.857-.867 1.143c0 0-.469.312.034.497 0 0 2.205.174 2.205-1.604v-2.643s-.09-1.047.429-1.404v4.332s-.032 1.031-.576 1.421c0 0-.362.646.433.468 0 0 1.517-.211 1.584-1.967l.035-4.383h.363l.033 4.383c.076 1.748 1.59 1.967 1.59 1.967.793.179.429-.468.429-.468-.54-.389-.579-1.421-.579-1.421v-4.297c.52.402.436 1.369.436 1.369v2.643c0 1.777 2.2 1.604 2.2 1.604.505-.186.036-.498.036-.498-.793-.286-.867-1.143-.867-1.143v-3.461c0-1.346-.574-2.056-1.137-2.435 3.277-.318 4.845-1.368 5.572-2.99-.015.027.26-.726.26-.726.25-.859.325-1.855.325-2.963h-.002z"></path></g></svg>
                   */}
                  {/* <label
                    for="Github"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Github :
                  </label> */}
                  </div>
                  <input
                    type="email"
                    name="Github"
                    id="Github"
                    class="bg-white border border-gray-600 input sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Github"
                    value={Github}
                    required=""
                    onChange={(e) => {
                      setGithub(e.target.value);
                    }}
                  />
            
                   <button class=" button text-gray-800 font-semibold py-2 px-4 border  rounded shadow"
                        onClick={(e) => {
                          e.preventDefault();
                          setcontacts((contacts) => [
                            ...contacts,
                            { Firstname:Firstname,
                            Lastname:Lastname,
                            JobTitle:JobTitle,
                            Email:Email,
                            Linkedin:Linkedin,
                          Github:Github,
                          Phone:Phone,
                          Adress:Adress},
                          
                          ]);
                          setFirstname("");
                          setLastname("");
                          setJobTitle("");
                          setEmail("");
                          setLinkedin("");
                          setGithub("");
                          setPhone("");
                          setAdress("")
                        }}
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

export default contact
// import React,{useState} from 'react'

// const contact = ({ setcontacts}) => {
  
//   const [Firstname, setFirstname] = useState("");
//   const [Lastname,setLastname]=useState("");
// const [JobTitle,setJobTitle]=useState("");
// const [Email,setEmail]=useState("");
// const [Linkedin,setLinkedin]=useState("")
// const [Github,setGithub]=useState("")
// const [Phone,setPhone]=useState("");
//  const [Adress,setAdress]=useState("");
//  const [PostalCode,setPostalCode]=useState("");
//  const [City,setCity]=useState("");
 
 
 
 

//   return (
//     <div>
//  <section class="bg-gray-900 dark:bg-gray-900">
//         <div class="  flex flex-col items-center justify-center px-1 py-8 mx-auto md:h-screen lg:py-0">
//           <div class="  w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div class=" p-32 space-y-4 md:space-y-6 sm:p-8">
//               <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
//                Contact :
//               </h1>
//               <form class="space-y-4 md:space-y-6"  action="#">
//                 <div className='flex'>
//                 <div>
//                   <label
//                     for="Firstname"
//                     class="block mb-2 text-sm font-medium text-white dark:text-white"
//                   >
//                     First name :
//                   </label>
//                   <input
//                     type="text"
//                     name="Firstname"
//                     id="Firstname"
//                     class="bg-white border border-white text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     required=""
//                     value={Firstname}
//                     onChange={(e) => {
//                       setFirstname(e.target.value);
//                     }}
//                   />
//                   </div>
//                   <div className='mx-5'>
//                   <label

//                     for="Lastname"
//                     class="block mb-2 text-sm font-medium text-white  dark:text-white"
//                   >
//                    Last name :
//                   </label>
//                   <input
//                     type="text"
//                     name="Lastname"
//                     id="Lastname"
//                     class="bg-white border border-gray-600 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     value={Lastname}
//                     required=""
//                     onChange={(e) => {
//                       setLastname(e.target.value);
//                     }}
//                   />
//                   </div>
//                   </div>
//                   <div className='flex'>
//                 <div>
//                   <label
//                     for="JobTitle"
//                     class="block mb-2 text-sm font-medium text-white dark:text-white"
//                   >
//                     Job Title :
//                   </label>
//                   <input
//                     type="text"
//                     name="JobTitle"
//                     id="JobTitle"
//                     class="bg-white border border-gray-600 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     value={JobTitle}
//                     required=""
//                     onChange={(e) => {
//                       setJobTitle(e.target.value);
//                     }}
//                   />
//                   </div>
                  
//                   <div className='mx-5'>
//                   <label
//                     for="Adress"
//                     class="block mb-2 text-sm font-medium text-white dark:text-white"
//                   >
//                     Adress :
//                   </label>
//                   <input
//                     type="text"
//                     name="Adress"
//                     id="Adress"
//                     class="bg-white border border-gray-600 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     value={Adress}
//                     required=""
//                     onChange={(e) => {
//                       setAdress(e.target.value);
//                     }}
//                   />
//                   </div>
//                   </div>
//                   <div className='flex'>
//                 <div>
//                   <label
//                     for="PostalCode"
//                     class="block mb-2 text-sm font-medium text-white dark:text-white"
//                   >
//                     Postal Code :
//                   </label>
//                   <input
//                     type="text"
//                     name="PostalCode"
//                     id="PostalCode"
//                     class="bg-white border border-gray-600 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     required=""
//                     onChange={(e) => {
//                       setPostalCode(e.target.value);
//                     }}
//                   />
//                   </div>
//                   <div className='mx-5'>
//                   <label
//                     for="City"
//                     class="block mb-2 text-sm font-medium text-white dark:text-white"
//                   >
//                     City :
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     id="city"
//                     class="bg-white border border-gray-600 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     required=""
//                     onChange={(e) => {
//                       setCity(e.target.value);
//                     }}
//                   />
//                   </div>
//                   </div>
//                   <div className='flex'>
//                 <div>
//                   <label
//                     for="Phone"
//                     class="block mb-2 text-sm font-medium text-white dark:text-white"
//                   >
//                     Phone:
//                   </label>
//                   <input
//                     type="text"
//                     name="phone"
//                     id="phone"
//                     class="bg-white border border-gray-600 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     value={Phone}
//                     required=""
//                     onChange={(e) => {
//                       setPhone(e.target.value);
//                     }}
//                   />
                  
//                   </div>
//                   <div className='mx-5'>
//                   <label
//                     for="E-mail"
//                     class="block mb-2 text-sm font-medium text-white dark:text-white"
//                   >
//                     E-mail :
//                   </label>
//                   <input
//                     type="email"
//                     name="E-mail"
//                     id="E-mail"
//                     class="bg-white border border-gray-600 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     value={Email}
//                     required=""
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                     }}
//                   />
//                   </div>
//                   </div>
//                   <div className='flex'>
//                 <div >
//                   <div class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white   dark:hover:bg-gray-700">
//                   <svg class=" fill-yellow-400 w-6 h-6 mr-2 mb-3 "  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
                  
//                   <label
//                     for="Linkedin"
//                     class="block mb-2 text-sm font-medium text-white dark:text-white"
//                   >
//                    Linkedin :
//                   </label>
//                  </div>
                 
//                   <input
//                     type="Linkedin"
//                     name="Linkedin"
//                     id="Linkedin"
//                     class="bg-white border border-gray-600 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     required=""
//                     value={Linkedin}
//                     onChange={(e) => {
//                       setLinkedin(e.target.value);
//                     }}
//                   />
//                   </div>
//                   <div className='mx-5'>
//                   <div class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white   dark:hover:bg-gray-700">
//                   <svg class=" fill-yellow-400 w-6 h-6 mr-2 mb-3 " viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.92 12.183c0-1.586-.604-2.864-1.585-3.83.172-.547.398-1.763-.229-3.321 0 0-1.114-.348-3.628 1.315a12.695 12.695 0 0 0-3.081-.366c-1.154 0-2.322.143-3.409.44-2.596-1.747-3.74-1.391-3.74-1.391-.748 1.847-.287 3.215-.145 3.554-.883.936-1.414 2.133-1.414 3.594 0 1.111.128 2.099.44 2.964l.325.732c.879 1.614 2.606 2.655 5.677 2.983-.434.289-.885.779-1.062 1.612-.594.28-2.475.966-3.603-.944 0 0-.633-1.148-1.842-1.235 0 0-1.174-.017-.08.722 0 0 .782.367 1.326 1.738 0 0 .705 2.342 4.114 1.593v2.417s-.076.857-.867 1.143c0 0-.469.312.034.497 0 0 2.205.174 2.205-1.604v-2.643s-.09-1.047.429-1.404v4.332s-.032 1.031-.576 1.421c0 0-.362.646.433.468 0 0 1.517-.211 1.584-1.967l.035-4.383h.363l.033 4.383c.076 1.748 1.59 1.967 1.59 1.967.793.179.429-.468.429-.468-.54-.389-.579-1.421-.579-1.421v-4.297c.52.402.436 1.369.436 1.369v2.643c0 1.777 2.2 1.604 2.2 1.604.505-.186.036-.498.036-.498-.793-.286-.867-1.143-.867-1.143v-3.461c0-1.346-.574-2.056-1.137-2.435 3.277-.318 4.845-1.368 5.572-2.99-.015.027.26-.726.26-.726.25-.859.325-1.855.325-2.963h-.002z"></path></g></svg>
//                   <label
//                     for="Github"
//                     class="block mb-2 text-sm font-medium text-white dark:text-white"
//                   >
//                     Github :
//                   </label>
//                   </div>
//                   <input
//                     type="email"
//                     name="Github"
//                     id="Github"
//                     class="bg-white border border-gray-600 text-gray-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     // placeholder=""
//                     value={Github}
//                     required=""
//                     onChange={(e) => {
//                       setGithub(e.target.value);
//                     }}
//                   />
//                    <button
//                         onClick={(e) => {
//                           e.preventDefault();
//                           setcontacts((contacts) => [
//                             ...contacts,
//                             { Firstname:Firstname,
//                             Lastname:Lastname,
//                             JobTitle:JobTitle,
//                             Email:Email,
//                             Linkedin:Linkedin,
//                           Github:Github,
//                           Phone:Phone,
//                           Adress:Adress},
                          
//                           ]);
//                           setFirstname("");
//                           setLastname("");
//                           setJobTitle("");
//                           setEmail("");
//                           setLinkedin("");
//                           setGithub("");
//                           setPhone("");
//                           setAdress("")
//                         }}
//                       >
//                         bbb
//                       </button>
//                   </div>
//                   </div>
//                   </form>
//                 </div>
//                 </div>
//                 </div>
// </section>



//     </div>
//   )
// }

// export default contact
