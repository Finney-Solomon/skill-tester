import React from "react";

import "./WelcomePage.css";

import { LoginContainer } from "./LoginContainer";

const WelcomePage = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/HomePage.jpg)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxHeight: "100vh",
        maxWidth: "100%",
      }}
    >
      <div className="LeftDiv">
        <LoginContainer />
      </div>
    </div>
  );
};

export default WelcomePage;
