import React from "react";



const StackDescription = ({ oneStack }) => {
  // console.log(oneStack);
  return (
    <div className="stack_description">
      <div>
        <p>Programming language : {oneStack.name}</p>
        <p>{oneStack.description}</p>
        <div className="img_logo">
          <img src={oneStack.img_url} alt="LogoStack" />

        </div>
      </div>
    </div>
  );
};

export default StackDescription;
