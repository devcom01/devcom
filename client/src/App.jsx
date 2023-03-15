
import Signin from "./vues/sign in/signin";
import Signup from "./vues/sign up/signup";
import Signupcompany from "./vues/signupcompany/signup"
import Signincompany from "./vues/signincompany/Signin"
import Cv from "./vues/Cvgenerator/cv.jsx";
import Dashboard from "./vues/Dashboard/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";

import Companyprofile from "./components/Companyprofile/Campanyprofile"
import Createprofile from "./components/Companyprofile/Createprofile";
function App() {
  const logout = () => {
    localStorage.clear();
  };

  return (

    <div>
      
      {/* // <button onClick ={logout}>logout </button>  */}

    <Routes>
    <Route path="*" element={ <Dashboard/>} />
    <Route path="/company/signup" element={<Signupcompany/>} />
    <Route path="/company/signin" element={<Signincompany/>} />
    <Route path="/developer/signup" element={<Signup/>} />
    <Route path="/developer/signin" element={<Signin/>} />
    <Route path="/developer/cvgenerator" element={<Cv/>} />
    <Route path="/company/profile" element={<Companyprofile/>} />
    <Route path="/company/createprofile" element={<Createprofile/>} />
    
    
    </Routes>
    </div>

  
      

  );
}

export default App;
