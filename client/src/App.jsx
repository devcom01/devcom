import Signin from "./vues/sign in/signin";
import Signup from "./vues/sign up/signup";
import Signupcompany from "./vues/signupcompany/signup"
import Signincompany from "./vues/signincompany/Signin"
import Cv from "./vues/Cvgenerator/cv.jsx";
import Dashboard from "./vues/Dashboard/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";
import Select from "./vues/SelectUserOrCompany/select"
import Interview from "./vues/interview/interview"
import Companyprofile from "./components/Companyprofile/Campanyprofile"
import Createprofile from "./components/Companyprofile/Createprofile";
import LandingPageC from './vues/LandingPageCompanies/LandingPageC' 
import LandingPage from "./vues/LandingPage/LandingPage"
import Devprofile from "./vues/DevProfile/DevProfile"
import Account from "./vues/DevProfile/Myaccount.jsx/account"
import Test from './vues/DeveloperTest/test'
import Error from "./vues/errorPage/error";
import Toyproblem from "./vues/ToyProblems/toyproblems"
import Listing from './vues/listingOffers/listing'
import CompanyProfile from './vues/listingDev/listingdev'
import Contact from "./components/Cvgenerator/contact";
import Cover from "./components/chatRoom/Cover.jsx"
function App() {
  const logout = () => {
    localStorage.clear();
  };

  return (

    <div>
      
      {/* // <button onClick ={logout}>logout </button>  */}

    <Routes>
    <Route path="/" element={ <Select/>} />
    <Route path="/devHome" element={ <LandingPage/>} />
    <Route path="/companyHome" element={ <LandingPageC/>} />
    <Route path="/company/signup" element={<Signupcompany/>} />
    <Route path="/company/signin" element={<Signincompany/>} />
    <Route path="/developer/signup" element={<Signup/>} />
    <Route path="/developer/signin" element={<Signin/>} />
    <Route path="/developer/cvgenerator" element={<Cv/>} />
    <Route path="/company/profile" element={<Companyprofile/>} />
    <Route path="/company/createprofile" element={<Createprofile/>} />
    <Route path="/developerProfile" element={<Devprofile/>} />
    <Route path="/account" element={<Account/>} />
    <Route path="/testdev" element={<Test/>} />
    <Route path="/error" element={<Error/>} />
    <Route path='CompanyProfile' element={< aa/>} />
    <Route path="/toyproblem" element={<Toyproblem/>} />
    <Route path="/listingOffers" element={<Listing/>} />
    <Route path="/listingDev" element={<CompanyProfile/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/interview" element={<Interview/>} />
    <Route path="/chatrooms" element={<Cover/>}/>
    
    </Routes>
    </div>

  
      

  )}

export default App;
