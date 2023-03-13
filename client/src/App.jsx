
import Signin from "./vues/sign in/signin";
import Signup from "./vues/sign up/signup";

import Cv from "./vues/Cvgenerator/cv.jsx";
import Dashboard from "./vues/Dashboard/Dashboard.jsx";

import Stack from "./components/stackdeveloper/Stack.jsx"
import Company from "./components/Company/Campany";

import Offers from "./components/Company/Offers";
import UpdateProfile from "./components/Company/Profile/UpdateProfile";

function App() {
  const logout = () => {
    localStorage.clear();
  };

  return (

    <div>
      {/* <Signin/> */}
      {/* // <button onClick ={logout}>logout </button>  */}
      
      {/* <Cv /> */}
     
      {/* <Stack/> */}
      {/* <Company/> */}
      {/* <Offers/> */}
     {/* <UpdateProfile/> */}
      {/* <Dashboard/> */}
      {/* <Signup/> */}
    
    </div>

  
      

  );
}

export default App;
