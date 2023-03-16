import React, { useState, useEffect } from "react";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase";
import "../sign up/form.css"

import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../Firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../Firebase";
import signup from "../../vues/sign in/signin";

import { usePrevious } from "@material-tailwind/react";

const imagesListRef = ref(storage, "images/");
const form = () => {
  const [pseudo, setPseudo] = useState("");
  const [role, setrole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [cv,setcv]=useState(null)
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  const user = auth.currentUser;
  const navigate = useNavigate();
  console.log(user);




  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
 
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        console.log(url);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(() => [url]);
          setImageUrls([]);
        });
      });
    });
  }, []);

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      email,
      password,
      pseudo,
      role,
      imageUrls,
      cv
    
    ).then(async (result) => {
      console.log("result", result);
      const usersRef = collection(db, "users");
      const docRef = await setDoc(doc(usersRef, result.user.uid), {
        email,
        password,
        pseudo,
        role,
        imageUrls,
        cv,
        userId: `${result.user.uid}`,
      });
      const userDocRef = doc(db, "users", result.user.uid);
      getDoc(userDocRef).then((snap) => {
        alert("wellcome new user create successfully");
        console.log("document written with ID:", snap.data());
        navigate('/developer/signin')
      });
    });

  };
  return (
    <div>
      <section >
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
         
           
              <form className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg" action="#">
              <h1 class="text-gray-900 font-bold mx-40 text-3xl">Sign up </h1>
              <div class="avatrrsignupdev">
             <img class="w-20 h-20 rounded-full" src={imageUrls}  ></img>
           
                  </div>
              <div class="flex">
              <div class="mx-0 mt-6">

                            <div className="flex flex-col items-start">
                            <label
                   
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="First Name"
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div class="mx-12 mt-6">
                        <label
                   
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Last Name
                  </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="Last Name"
                                    placeholder="Last Name"
                                    className="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>   
              </div>
                 <div class="flex">
                 <div class="mx-0 mt-6">
                 <label
                   
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                 >
                   Email
                 </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    class="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                    required=""
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="mx-12 mt-6">
                <label
                   
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                 >
                   Password
                 </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="  Your Password"
                    class="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div></div> 
               <div class="flex">
               <div class="mx-0  mt-6">
               <label
                   
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                 >
                   Pseudo
                 </label>
                  <input
                    type="text"
                    name="pseudo"
                    id="pseudo"
                    placeholder="pseudo"
                    class="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => {
                      setPseudo(e.target.value);
                    }}
                  />
                </div>
               
    
    <div class="mx-12  mt-6">
    <label
                   
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                 >
                   Stack
                 </label>
                  <input
                    type="text"
                    name="Stack"
                    id="Stack"
                    placeholder="Stack"
                    class="bg-indigo-50 -mx-2 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => {
                      setStack(e.target.value);
                    }}
                  />
                </div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                <div class="mx-9 mt-6">
                <label
                   
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Years
                  </label>
                  <input
                    type="text"
                    name="years"
                    id="years"
                    placeholder="years"
                    class="bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => {
                      setyears(e.target.value);
                    }}
                  />
                </div>
     </div>

                <div>
                <label for="dropzone-file" class="mt-6 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input  onChange={(event) => {
                      setImageUpload(event.target.files[0]);
                    }} id="dropzone-file" type="file" class="hidden" />
    </label>
                </div>
               
                <select
                  onChange={(e) => {
                    setrole(e.target.value);
                  }}
                  id="small"
                  class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Role</option>
                  <option value="f">Frontend</option>
                  <option value="b">Backend</option>
                  <option value="fu">Fullstack</option>
                  <option value="m">mobile</option>
                  <option value="ds">Data Science</option>
                  <option value="de">Data Engineering</option>
                  <option value="mu">Machine Learning</option>
                  <option value="ga">Game Developement</option>
                </select>

                <button
                  type="submit"
                  class="w-full text-white buttonu focus:ring-4 hover:bg-gray-600 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={signUp}
                >
                  Create an account
                </button>

       <button onClick={uploadFile}>UPLOAD</button>
                <div className="mt-4 text-grey-600"> 
                        Already have an account?{" "}
                        <span>
                            <a className="text-purple-600 hover:underline" onClick={() => navigate('/developer/signin')}>
                                Log in
                            </a>
                        </span>
                    </div>
              </form>
        
        
        </div>
      </section>

      
    </div>
  );
};

export default form;
