import React from "react";

function Icon({handledisconnect}) {
  return (
    <svg onClick={()=>handledisconnect()}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      stroke="snow"
      viewBox="0 0 24 24"
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99"></path>
        <g opacity="0.4">
          <path d="M15 12H3.62M5.85 8.65L2.5 12l3.35 3.35"></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
