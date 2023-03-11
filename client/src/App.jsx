
import Signin from "./vues/sign in/signin";
import Signup from "./vues/sign up/signup";
import Navbar from "./vues/Landingpagecompany/Landingpage";
import Cv from "./vues/Cvgenerator/cv.jsx";
import Dashboard from "./vues/Dashboard/Dashboard.jsx";

import Stack from "./components/stackdeveloper/Stack.jsx"
import Companyprofile from "./components/Company/Companyprofile.jsx"

import Offers from "./components/Company/Offers";

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
      {/* <Companyprofile/> */}
      <Offers/>
     
      {/* <Dashboard/> */}
      {/* <Signup/> */}
    
    </div>

  
      

  );
}

export default App;
