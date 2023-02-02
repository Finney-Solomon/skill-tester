
import { Button, Card, TextareaAutosize } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openTestPage } from "../Redux/action";
import Footer from "./Footer";
import Header from "./Header";
import "./Test.css";
const Test = () => {
  const data = useSelector((state) => state?.testQuestionAndAnswer);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(openTestPage(false));
  };
  return (
    <>
      <>
      <Header/>
      </>
      <>
      <div  className="displayQuestion">
        <div className="displayQuestion">
          <iframe
            src="https://cmtrn-dev11.labsvc.net/programming_interview_question2.c"
            title="Question"
            style={{ minWidth: "102vh",
          height:"82.5vh",marginLeft:"25px"}}
          ></iframe>
        </div>
        <div   className="displayQuestion">
          <TextareaAutosize
            minRows={38}
            aria-label="maximum height"
            placeholder="Start Coding...."
            style={{ minWidth:"102vh",  height:"82vh",marginLeft:"20px", backgroundColor: "#ffffff" }}
          ></TextareaAutosize>
        </div>
      </div>
    </>
    
      <>
      <Footer/>
      </>
    </>
  );
};

export default Test;
