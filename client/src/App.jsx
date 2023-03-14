
import Signin from "./vues/sign in/signin";
import Signup from "./vues/sign up/signup";
import Signupp from "./components/sign up/signuppp"
import Cv from "./vues/Cvgenerator/cv.jsx";
import Dashboard from "./vues/Dashboard/Dashboard.jsx";

import Stack from "./components/stackdeveloper/Stack.jsx"
import Company from "./components/Company/Campany";

import Offers from "./components/Company/Offers";
import UpdateProfile from "./components/Company/Profile/UpdateProfile";
import Joboffers from "./components/Company/Joboffers";
import Companyprofile from "./components/Companyprofile/Campanyprofile"
import EditProfile from "./components/Companyprofile/EditProfile"
import Createprofile from "./components/Companyprofile/Createprofile";
function App() {
  const logout = () => {
    localStorage.clear();
  };

  return (

    <div>
      {/* <Signin/> */}
      {/* // <button onClick ={logout}>logout </button>  */}
      
      <Cv />
     
      {/* <Stack/> */}
      {/* <Company/> */}
      {/* <Offers/> */}
     {/* <UpdateProfile/> */}
      {/* <Dashboard/> */}
      {/* <Signupp/> */}
      {/* <Signup/> */}
      {/* <Joboffers/> */}
    {/* <Companyprofile/> */}
    {/* <EditProfile/> */}
    {/* <Createprofile/> */}
    </div>

  
      

  );
}

export default App;
