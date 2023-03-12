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
const toyproblems = () => {
  const languageRef = useRef(null);
  const [code,setCode]=useState(null);
  const [defaultvalue, setValue] = useState(code || "");

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
    console.log(code);
  },[code])
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
  const Compile = ()=>{
    const formData = {
      language_id: languageRef.current.options[languageRef.current.selectedIndex].value,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };
  
    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  
  }
  
  return (
    <div className="toyproblems_All">
      <div className="toyproblems__sideBar">
        <div className="toyproblems__sideBar__logo">
          <p style={{ marginRight: "20px" }}>logo</p>

          <div className="toyproblems__sideBar__logoHome">
            <p>Home</p>
            <p>Report Home for your next assignement</p>
          </div>
        </div>

        <div className="toyproblems__sideBar__messages">
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
          <div className="toyproblems__sideBar__logoHome">
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
              <button>Instructions</button>
              <button>Output</button>
            </div>

            <div className="infos__buttons__right">
              <select ref={languageRef} name="languages">
                {languages.map((language) => {
                  if (language.name === "JavaScript (Node.js 12.14.0)") {
                    return (
                      <option value={language.id} selected>
                        {language.name}
                      </option>
                    );
                  } else {
                    return <option value={language.id}>{language.name}</option>;
                  }
                })}
              </select>
              <button id="testit" onClick={(e) => console.log(code)}>
                Compile and Execute{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="toyproblem__mainTwoSections">
          <div className="toyproblem__firstSection">
            <div className="toyproblem_text">
              {"Return the number (count) of vowels in the given string.We will consider a, e, i, o, u as vowels for this Kata (but not y).The input string will only consist of lower case letters and/or spaces."
                .split(".")
                .map((phrase) => phrase.length > 1 && <p>{phrase} .</p>)}
              <div className="styledhr"></div>
            </div>
          </div>
          <div className="toyproblem__secondSection">
            <div className="toyproblem__editor">
              <div className="toyproblem__editorHeader">
                <p>solution</p>
              </div>
              <Editor
              ref={code}
                height="71vh"
                width="96.4%"
                theme="vs-dark"
                language="javascript"
                value={}
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
