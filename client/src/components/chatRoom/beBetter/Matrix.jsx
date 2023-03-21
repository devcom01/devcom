import React from "react";
import "./Matrix.css";
import TextLoop from "react-text-loop";

const Matrix = () => {
  const code = [
    "Be respectful to others in the chat.",
    "No hate speech or discriminatory language is allowed.",
    "Do not spam the chat with unnecessary messages.",
    "Keep the conversation on topic and relevant to the chat room.",
    "Do not share personal information or solicit others for personal information.",
    "Use appropriate language and refrain from using profanity or vulgar language.",
    "Any violations of the chat room rules may result in temporary or permanent ban from the chat."



  ];

  const count = code.length;
  return (
    <div className="wrapper_matrix">
      <div className="text_loop">
        <TextLoop interval={2000} fade={true}>
          {code.map((bin, idx) => {
            return (
              <div style={{ color: "#FF002A", fontSize: "2em" }} key={idx}>
                <p>Rules:// {bin}</p>
              </div>
            );
          })}
        </TextLoop>
      </div>
    </div>
  );
};

export default Matrix;
