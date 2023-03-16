import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./toyproblems.scss";
import { TbMessages } from "react-icons/tb";
import { SiGooglesearchconsole } from "react-icons/si";
import gsap from "gsap";
import { AiOutlineStar } from "react-icons/ai";
import { FaHourglassStart } from "react-icons/fa";
import { Avatar } from "@mui/material";
import { GiStarMedal } from "react-icons/gi";
import Editor from "@monaco-editor/react";
import { languages } from "./languagesSupported";
import Confetti from 'react-confetti'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const toyproblems = () => {
  const languageRef = useRef(null);
  const [code,setCode]=useState("// TIME TO HACK ! DONT FORGET DO ADD AT THE END OF YOUR CODE A CONSOLE.LOG OF THE FUNCTION ITS SELF");
  const [defaultvalue, setValue] = useState(code || "");
  const [selectedButton,setselectedButton] =useState(1)
  const [time,settime] =useState(null)
  const [status,setstatus] =useState(null)
  const [memory,setmemory] =useState(null)
  const [stop,setstop] = useState(false)
  const [language,setlanguage]=useState("javascript")
  const navigate = useNavigate()

  useEffect(() => {
    let h1 = document.querySelector(".toyproblems__sideBar");

    let animation = gsap.to(".toyproblems__sideBar", 0.3, {
      width: 250,
      alignItems: "start",
    });
    animation.reverse();
    h1.addEventListener("mouseenter", () => {
      animation.play();
    });
    h1.addEventListener("mouseleave", () => {
      animation.reverse();
    });
  });
  useEffect(() => {
    setTimeout(() => {
      setstop(true)
    }, 1000*10)
  },[status])
useEffect(()=>{
  setlanguage(languageRef.current.options[languageRef.current.selectedIndex].id)
  console.log(languageRef.current.options[languageRef.current.selectedIndex].id);
},[languageRef.current?.options[languageRef.current.selectedIndex].id])
   const handleeditor = (value) => {
    handlechange("code", value);
  };
  const handlechange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action,data);
      }
    }
  };
  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: 'https://judge0-ce.p.rapidapi.com/submissions/'+token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "d99009bfd4mshce3689b0f908b24p1fac34jsn19b8bdf15c45",
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      if (statusId === 1 || statusId === 2) {
  
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
       
      } else {
        setselectedButton(2)
        settime(response.data.time)
        setmemory(response.data.memory)
        setstatus(response.data.status.description)
        console.log(response.data)
      
      }
    } catch (err) {
      console.log("err", err);
      
    }
  };
  const Compile = ()=>{
    const formData = {
      language_id: languageRef.current.options[languageRef.current.selectedIndex].value,
     source_code: btoa(code),
      stdin: btoa("aaa"),
      expected_output:btoa("aaa"),

    };
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": "d99009bfd4mshce3689b0f908b24p1fac34jsn19b8bdf15c45",
      },
      data: formData,
    };
  
    axios
      .request(options)
      .then(function (response) {
       
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
                console.log(err);
      });
  
  }
  
  return (
    <div className="toyproblems_All">
      <div className="toyproblems__sideBar">
        <div className="toyproblems__sideBar__logo">
          <p style={{ marginRight: "20px" }} onClick={e=>
          navigate("/developerProfile")}>logo</p>

          <div className="toyproblems__sideBar__logoHome" onClick={e=>
          navigate("/developerProfile")}>
            <p>Home</p>
            <p>Report Home for your next assignement</p>
          </div>
        </div>

        <div className="toyproblems__sideBar__messages" onClick={e=>
          navigate("/chatRooms")}>
          <p>
            <TbMessages style={{ marginRight: "40px" }} />{" "}
          </p>
          <div className="toyproblems__sideBar__logoHome">
            <p>Discussions</p>
            <p>join our server and chat with your fellow code warriors</p>
          </div>
        </div>
        <div className="toyproblems__sideBar__messages">
          <p>
            {" "}
            <SiGooglesearchconsole style={{ marginRight: "40px" }} />{" "}
          </p>
          <div className="toyproblems__sideBar__logoHome" onClick={e=>
          navigate("/listingOffers")}>
            <p>Jobs</p>
            <p>Find a job that suits your needs</p>
          </div>
        </div>
      </div>
      <div className="toyproblems__content">
        <div className="toyproblems__content__header">
          <p>Toy Problem</p>
          <p>
           
            <Avatar sx={{ scale: ".7" }}></Avatar>{" "}
          </p>
        </div>
        <div className="toyproblems__content__infos">
          <h4>Decode the Morse code</h4>
          <div className="infos__details">
            <div className="detailsAndModals">
              <p>
                <AiOutlineStar /> 4702
              </p>
              <p>Total times this Toy Problem has been consulted</p>
            </div>
            <div className="detailsAndModals">
              <p>
                <FaHourglassStart /> 30,302 of 95,242
              </p>
              <p>Average time spent on this toyproblem </p>
            </div>

            <div className="detailsAndModals">
              <p>
                <GiStarMedal /> 30,302 of 95,242
              </p>
              <p>Range of success </p>
            </div>
          </div>
          <div className="infos__buttons">
            <div className="infos__buttons__left">
              <button onClick={e=>{setselectedButton(1)}}>Instructions</button>
              <button  onClick={e=>setselectedButton(2)} >Output</button>
            </div>

            <div className="infos__buttons__right">
              <select ref={languageRef} name="languages">
                {languages.map((language) => {
                  if (language.name === "JavaScript (Node.js 12.14.0)") {
                    return (
                      <option value={language.id} id={language.value} selected>
                        {language.name}
                      </option>
                    );
                  } else {
                    return <option id={language.value} value={language.id}>{language.name}</option>;
                  }
                })}
              </select>
              <button id="testit" onClick={(e) => Compile()}>
                Compile and Execute{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="toyproblem__mainTwoSections">
          <div className="toyproblem__firstSection">
          {selectedButton===1 ?
            <div className="toyproblem_text">
              {"Return the number (count) of vowels in the given string.We will consider a, e, i, o, u as vowels for this Kata (but not y).The input string will only consist of lower case letters and/or spaces."
                .split(".")
                .map((phrase) => phrase.length > 1 && <p>{phrase} .</p>)}
              <div className="styledhr"></div>
            </div>
            :
            <div className="toyproblem_text">
              { status && memory && time ?
              <>
              {status==="Accepted" &&!stop  && <Confetti
      width="500px"
      height="1000px"
      
    />
    }
              <h4>Status : {status}</h4>
              <h4>Memory : {memory} </h4>
              <h4>Time: {time} s</h4>
              
              </>:
              <>
              <h1>Please Champ submit your code ! </h1></>
}
              </div>
            }
          </div>
          <div className="toyproblem__secondSection">
            <div className="toyproblem__editor">
              <div className="toyproblem__editorHeader">
                <p>solution</p>
              </div>
              <Editor
             
                height="71vh"
                width="96.4%"
                theme="vs-dark"
                language={language}
                value={defaultvalue}
                onChange={handleeditor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default toyproblems;
