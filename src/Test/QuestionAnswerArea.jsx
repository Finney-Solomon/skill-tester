import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openTestPage, submitAnswer } from "../Redux/action";
import { DialogBox } from "./DialogBox";

export const QuestionAnswerArea = () => {
  const [answer, setAnswer] = useState("");

  const [openDialogBox, setOpenDialogBox] = React.useState(false);

  const [saving, setSaving] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialogBox(true);
    setSaving(true);
  };

  const handleDialogBoxCancelOpen = () => {
    setOpenDialogBox(true);
    setSaving(false);
  };
  const timer = useSelector((state) => state?.timer);

  const handleDialogClose = () => {
    setOpenDialogBox(false);
    dispatch(openTestPage(false));
  };

  useEffect(
    (e) => {
      setSaving(true);
      if (timer) {
        handleSubmit(e);
        dispatch(openTestPage(false));
      }
    },
    [timer]
  );

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  let reduxAnswer = encodeURIComponent(answer);

  const emailID = useSelector((state) => state?.email);

  const handleSubmit = () => {
    if (saving) {
      setSaving(false);
      setOpenDialogBox(false);
      dispatch(submitAnswer(reduxAnswer, emailID, dispatch));
    } else {
      dispatch(openTestPage(false));
    }
  };

  return (
    <>
      <div>
        <div className="displayQuestion">
          <iframe
            style={{
              width: "105.4vh",
              height: "85vh",
            }}
            src="https://cmtrn-dev11.labsvc.net/programming_interview_question2.c"
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </div>
        <div>
          <TextareaAutosize
            className="displayQuestion"
            onChange={handleChange}
            aria-label="maximum height"
            placeHolder="Start Coding..."
            style={{
              width: "105.4vh",
              backgroundColor: "#FFFFFFF",
              height: "84.5vh",
            }}
          ></TextareaAutosize>
        </div>
      </div>
      <div className="footer">
        <div
          style={{
            display: "flex",
            float: "right",
            marginRight: 30,
            marginTop: 6,
          }}
        >
          <Button
            style={{ marginRight: 30 }}
            variant="contained"
            onClick={handleDialogBoxCancelOpen}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleDialogOpen}>
            Submit
          </Button>
        </div>
      </div>
      <Dialog open={openDialogBox} onClose={handleDialogClose}>
        <DialogContent style={{ minWidth: 300 }}>
          <DialogContentText style={{ textAlign: "center" }}>
            {saving
              ? "Saving the Data..."
              : "Are you sure. All the Data will be lost"}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ minWidth: 300 }}>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
