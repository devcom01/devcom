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
                    required=""
                    value={Firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                  </div>
                  <div className='mx-5'>
                  
  
                 
                 
                  
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
               
                  <div className='flex'>
                <div>
               
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
                        onClick={
                          (e) => {
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
                        } }
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
