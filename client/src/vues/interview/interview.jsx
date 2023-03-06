import React, {
  useCallback,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import "./interview.scss";
import Toggle from "react-toggle";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { MdOutlineRunningWithErrors, MdOutlineDraw } from "react-icons/md";
import { GrConnect } from "react-icons/gr";
import { FcPrevious, FcEndCall } from "react-icons/fc";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { BiMicrophoneOff } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import * as Video from "twilio-video";
import axios from "axios";
import Room from "../../components/room/room.jsx";
import Editor from "../../components/codeEditor/Editor";
const interview = () => {
  //  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call , callUser} = useContext(SocketContext);
  const [whichMode,SetWhichMode]=useState(true)
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getTwilioToken = async () => {
      const response = await axios.post("http://127.0.0.1:3001/join-room", {
        roomName: "onevonee",
      });
      setToken(response.data.token);
    };
    getTwilioToken();
  }, []);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);
  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetx+140, e.nativeEvent.offsety+150);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX+140, e.nativeEvent.offsetY+150);

    ctxRef.current.stroke();
  };
  return (
    <div className="interview__continer">
      <div className="interview__mainContainer">
        <div className="interview__mainContainer___first-section">
          <div className="first-section__header">
            <div className="return">
              <FcPrevious />
            </div>
            <h3> Technical interview phase : </h3>
            <div className="text" style={{ display: "flex", gap: "20px" }}>
              <div className="first">
                <h5>
                  <span style={{ marginRight: "7px" }}>
                    <GrConnect />
                  </span>
                  invited people :
                  <span style={{ background: "lightgreen" }}>2</span>
                </h5>
              </div>
              <div className="last">
                <h5
                  style={{ borderLeft: "1px solid grey", paddingLeft: "8px" }}
                >
                  <span style={{ marginRight: "7px" }}>
                    <MdOutlineRunningWithErrors />
                  </span>
                  absent people : <span style={{ background: "pink" }}>0</span>
                </h5>
              </div>
            </div>
            <div className="toogleButton">
              <Toggle
                className="whiteOne"
                onClick={e=>SetWhichMode(e=>!e)}
                icons={{
                  checked: (
                    <BsCodeSlash
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "white",
                      }}
                    />
                  ),
                  unchecked: (
                    <MdOutlineDraw
                      style={{
                        color: "white",
                        fontSize: "12px",
                        textAlign: "center",
                      }}
                    />
                  ),
                }}
              />
              <h5>selected </h5>
            </div>
          </div>
          {whichMode ?
          <div className="interview__container__paint">
            <div className="Menu">
              <label>Brush Color </label>
              <input
                type="color"
                onChange={(e) => {
                  setLineColor(e.target.value);
                }}
              />
              <label>Brush Width </label>
              <input
          
          type="range"
                min="3"
                max="20"
                onChange={(e) => {
                  setLineWidth(e.target.value);
                }}
              />
              <label>Brush Opacity</label>
              <input
                type="range"
                min="1"
                max="100"
                onChange={(e) => {
                  setLineOpacity(e.target.value / 100);
                }}
              />
            </div>

            <canvas
              onMouseDown={startDrawing}
              onMouseUp={endDrawing}
              onMouseMove={draw}
              ref={canvasRef}
              width={`1820px`}
              height={`780px`}
            >
              {" "}
            </canvas>
          </div>
        :
      
        <Editor/> 
      
        
        
        }
        </div>

        <div className="inteview__mainContainer__second-section">
          <div id="video-broadcast">
            {token ? <Room token={token} setToken={setToken} /> : ""}
          </div>
          {token && (
            <div className="interview__call_options">
              <div className="callended">
                <HiOutlinePhoneMissedCall
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                    textAlign: "center",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                  onClick={(e) => setToken(null)}
                />
              </div>
              <div className="micMute">
                <BiMicrophoneOff
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                    textAlign: "center",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                  onClick={(e) => (document.getElementById("mic").mute = true)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default interview;
