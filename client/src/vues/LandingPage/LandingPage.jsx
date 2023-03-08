import "./landing.scss";
import devImg from "../../Assets/imgs/landingdevskills.png";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import Layout from "../../components/Layout/Layout";
import img from "../../assets/imgs/ring.png"
import NavBar from "../../components/Layout/NavBar";
import { useEffect } from "react";
import gsap, { Expo } from "gsap";
export default function LandingPage() {
 useEffect(()=> {
gsap.to(".loading",4,{
  delay:6.6,
  top:"-110%",
ease:Expo.easeInOut
})
const tl = gsap.timeline();
tl.from(".ringOne",4,{
  delay:0.4 , 
  opacity : 0 ,
  y: 40 , 
  ease :Expo.easeInOut
}).from(".ringTwo",4,{
  delay:0.9  , 
  opacity : 0 ,
  y: 40 , 
  ease :Expo.easeInOut
},"-=5").from("#motto",1.5,{
  delay:0.4 , 
  opacity : 0 ,
  y: 40 , ease :Expo.easeInOut
} , "-=2").to(".ringOne",4,{
  delay:0.4 , 
  x: 400 , 
  ease :Expo.easeInOut
}).to(".ringTwo",4,{
  delay:0.9  , 
  x: 400 , 
  ease :Expo.easeInOut
},"-=5").to("#motto",2,{
  delay:0.4 , 
  opacity:0,
  ease :Expo.easeOut
},"-=3.9")

 },[]) 
  return (
<>
<div className="landingpage__all4">

<div className="loading"></div>
  <div className="loader"> 
    <div className="ringOne ring">
      <img src={img} alt="loading" />
    </div>
    <div className="ringTwo ring">
      <img src={img} alt="loading" />
    </div>
    <h2 id="motto">You've Got Questions. We've Got Developers</h2>
 
</div>
<NavBar which="main"/>


</div>
</>  );
}
