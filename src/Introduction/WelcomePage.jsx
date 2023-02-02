import { Button, TextField, Card, CardContent } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSignUpPage, openTestPage } from "../Redux/action";
import "./WelcomePage.css";
import { Box } from "@mui/system";
import { LoginPage } from "./LoginPage";

const WelcomePage = () => {

  return (
    <div
      style={{
        backgroundImage: "url(/HomePage.jpg)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

      }}
    >
      <><LoginPage /></>

    </div>
  );
};

export default WelcomePage;