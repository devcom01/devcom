import "./companies.scss"
import React from 'react'
import NavBar from "../../components/Layout/NavBar"
import code from "../../assets/imgs/code.png"
import circle from "../../assets/imgs/etape.png"
import interview from "../../assets/imgs/interview.png"
import { CgEditBlackPoint } from "react-icons/cg"
const LandingPageC = () => {
  return (
    <div className="LandingPageCompanies__container">
        <NavBar which="companies"/>
        <div className="LandingPageCompanies__mainsection">
          <div className="LandingPageCompanies__mainsection__left">
            <div className="mainText">
              <p>Hire remotley unicorn devs </p>
            </div>
            <div className="mainparagrpah">
              <p>{"get matched with our elite group of hand-selected & rigorouslly vetted unicorns Devs ,  setTimeInterval (()=> console.log('assigned to you in less than'),interview.time)"}</p>
            </div>
          </div>
          
          <div className="LandingPageCompanies__mainsection__right">
        <div className="firstContainer">
          <div className="firstContainer__styled"></div>
          <div className="firstContainer__main">
          <div className="whole_content">
            <div className="step">
            <img src={circle} alt="first step"/>
            <p>1</p>
            </div>
            <div className="step__hero">
              <h4>Hire</h4>
            </div>
            <div className="step__maintext">
              <p>Hire Talents</p>
            </div>
            <div className="step__text">
              <p>The fastest way to hire great-fit remote developers for your business
</p>
            </div>
          </div></div>
          </div>
      <div className="secondContainer">
      <div className="secondContainer__styled"></div>
          <div className="secondContainer__main">
          <div className="secondContainer_whole_content">
            <div className="secondContainer_step">
            <img src={code} alt="sec step"/>
            </div>
            <div className="secondContainer_step__hero">
              <p>Discover the personal way to hire remote developers without the hassle
</p>
<p id="br"></p>
            </div>
            <div className="secondContainer__step__text">
              <p>It's the time to : </p>
              <p>Skip hiring headaches</p>
              <p>Personally picked profiles</p>
              <p>Hire fast, onboard faster</p>
              <p>Escape hidden costs</p>

            </div>
            
          </div></div>
      </div>
      <div className="thirdContainer">
      <div className="thirdContainer__styled"></div>
          <div className="thirdContainer__main">
          <div className="thirdContainer_whole_content">
            <div className="thirdContainer_step">
            <img src={interview} alt="sec step"/>
            </div>
            <div className="thirdContainer_step__hero">
              <p>steps to your next perfect hire :
</p>
            </div>
            <div className="thirdContainer_step__text">
            <p><span><CgEditBlackPoint style={{margin:"0px",padding:"0px"}}/></span>Tell us about your needs</p>
            <p><span><CgEditBlackPoint style={{margin:"0px",padding:"0px"}}/></span>Get matched to the right developer</p>
            <p><span><CgEditBlackPoint style={{margin:"0px",padding:"0px"}}/></span>interview him/her online</p>
            <p><span><CgEditBlackPoint style={{margin:"0px",padding:"0px"}}/></span>Begin working together , free-risk</p>
            </div>
            
          </div></div>
      </div>
      <div className="fourthContainer">
      <div className="fourthContainer__styled"></div>
          <div className="fourthContainer__main">
</div>
      </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPageC
