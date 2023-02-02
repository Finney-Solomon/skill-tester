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
        backgroundRepeat: "round",
        width: "200",
        // maxHeight: "100%",
        // Width: "140vh",
      }}
    >
      <div className="LeftDiv">
        <LoginContainer />
      </div>
    </div>
  );
};

export default WelcomePage;
