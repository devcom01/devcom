import React, { useState, useEffect } from "react";
import { auth, provider, providergit } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../sign in/form.css"
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();


  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  const handleClickg = () => {
    signInWithPopup(auth, providergit).then((data) => {
      setGit(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <section >
        <div class="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        
          <form className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg" action="#">
                <h1 class="text-gray-900 font-bold mx-40 text-3xl">Sign in </h1>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class=" bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your email"
                   
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="mt-7">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="mt-7 bg-indigo-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  class="w-full mt-7 text-white buttonu focus:ring-4 hover:bg-gray-600 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                  dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={signIn}
                >
                  Sign in
                </button>
                
               

                <p class=" mt-7 text-sm font-light text-gray-500 dark:text-gray-400">
                  Dont have an account yet?{" "}
                  <a
                    onClick={() => navigate('/company/signup')}
                    class="font-medium text-red-800 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
        
        
        </div>
      </section>
    </div>
  );
};

export default Form;