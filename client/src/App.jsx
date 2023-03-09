// import LandingPage from "./vues/LandingPage/LandingPage";
import Signin from "./vues/sign in/signin";
import Signup from "./vues/sign up/signup";
import Navbar from "./vues/Landingpagecompany/Landingpage";
import Cv from "./vues/Cvgenerator/cv.jsx";
import Dashboard from "./vues/Dashboard/Dashboard.jsx";
import Barchart from "./components/Dashboard/Barchart.jsx";

// import { Route, Routes } from "react-router-dom";

import Interview from "./vues/interview/interview.jsx";
// import LandingPageC from "./vues/LandingPageCompanies/LandingPageC";
function App() {
  const logout = () => {
    localStorage.clear();
  };

  return (

    <div>
      {/* // <button onClick ={logout}>logout </button>  */}
       {/* <Navbar/>  */}
      <Cv />
      {/* <Layout/> */}
      {/* <div class="contact"></div> */}
{/* <Barchart/> */}
      {/* <Dashboard/> */}
      {/* <Signup/> */}
      {/* <LandingPage /> */}
      {/* <LandingPageC/> */}
      {/* <Interview/> */}
    </div>

  
      

  );
}

export default App;
