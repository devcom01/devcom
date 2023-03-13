import React from "react";
import Profilecard from "./Profilecardupdate";
import "../../../components/Company/Profile/profile.css";
import Rigthside from "./Rigthsideupdate";
import Postes from "./Postes";
const Profileupdate = () => {
  return (
    <div>
      <div class="profilecard">
        <Profilecard />
      </div>
      <div class="rightside">
        <Rigthside />
      </div>
      <div class="">
        <Postes />
      </div>
    </div>
  );
};

export default Profileupdate;
