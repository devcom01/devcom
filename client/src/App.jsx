
import Signin from "./vues/sign in/signin";
import Signup from "./vues/sign up/signup";
import Navbar from "./vues/Landingpagecompany/Landingpage";
import Cv from "./vues/Cvgenerator/cv.jsx";
import Dashboard from "./vues/Dashboard/Dashboard.jsx";
import Barchart from "./components/Dashboard/Barchart.jsx";


import Interview from "./vues/interview/interview.jsx";

function App() {
  const logout = () => {
    localStorage.clear();
  };

  return (

    <div>
      {/* <Signin/> */}
      {/* // <button onClick ={logout}>logout </button>  */}
       {/* <Navbar/>  */}
      {/* <Cv /> */}
      {/* <Layout/> */}
     
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
