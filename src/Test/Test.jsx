
import { Button, Card, TextareaAutosize } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openTestPage } from "../Redux/action";
import "./Test.css";
const Test = () => {
  const data = useSelector((state) => state?.testQuestionAndAnswer);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(openTestPage(false));
  };
  return (
    <>
      <Card
        variant="outlined"
        color="text.secondary"
        style={{
          height: 73,
          backgroundSize: "cover",
          backgroundColor: "#003060",
        }}
      >
        <h3 className="text">TEST</h3>
      </Card>
      <div>
        <div className="displayQuestion">
          <iframe
            src="https://cmtrn-dev11.labsvc.net/programming_interview_question2.c"
            title="Question"
            style={{ width: "107.4vh",
          height:"85.5vh"}}
          ></iframe>
        </div>
        <div>
          <TextareaAutosize
            className="displayQuestion"
            minRows={42}
            aria-label="maximum height"
            defaultValue="Enter the Answer"
            
            style={{ width: "106.4vh", backgroundColor: "#F6EEE0" }}
          ></TextareaAutosize>
        </div>
      </div>
      {/* 
      <Card
        variant="outlined"
        color="text.secondary"
        style={{
          backgroundColor: "#BFD7ED",
          height: 50,
          backgroundSize: "cover",
          bottom: 0,
        }}
      >
        <Button onClick={handleSubmit}>Submit</Button>
      </Card> */}
    </>
  );
};

export default Test;
