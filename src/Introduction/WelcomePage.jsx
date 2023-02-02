import React from "react";

import "./WelcomePage.css";

import { LoginContainer } from "./LoginContainer";

const WelcomePage = () => {
  /* -----------------------------------------------------------------------------------------
                                     Background Cover Pic                          
      -----------------------------------------------------------------------------------------*/
  return (
    <div
      style={{
        backgroundImage: "url(/HomePage.jpg)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "round",
        width: "200",
      }}
    >
      <div className="LeftDiv">
     {/* -----------------------------------------------------------------------------------------
                                       Login Container                          
      ----------------------------------------------------------------------------------------- */}
        <LoginContainer />
      </div>
    </div>
  );
};

export default WelcomePage;
