import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextareaAutosize,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openTestPage, submitAnswer } from "../Redux/action";
import { DialogBox } from "./DialogBox";

export const QuestionAnswerArea = () => {
  /**
   *@description creating State for answer ,  saving the answer, dialogBox
   */
  const [answer, setAnswer] = useState("");

  const [saving, setSaving] = useState(false);

  const [openDialogBox, setOpenDialogBox] = React.useState(false);

  const dispatch = useDispatch();

  const emailID = useSelector((state) => state?.email);

  /**
   * @description changing answer sequences into UTF-8 encoding  character
   */

  let reduxAnswer = encodeURIComponent(answer);
  /**
   * @description opening dialog box on click save button
   */

  const handleDialogOpen = () => {
    setOpenDialogBox(true);
    setSaving(true);
  };

  /**
   * @description opening dialog box on click cancel button
   */

  const handleDialogBoxCancelOpen = () => {
    setOpenDialogBox(true);
    setSaving(false);
  };

  /**
   * @description closing dialog box on click cancel button in dialog box
   */

  const handleDialogClose = () => {
    setOpenDialogBox(false);
    dispatch(openTestPage(false));
  };

  /**
   * @description when timer is true (# 1hr completed) it will call submit button
   */

  const timer = useSelector((state) => state?.timer);
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

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  /**
   * @description on clicking cancel or submit button in the footer, In Submit Button,
   * if we click OK, then  saving is true then it will dispatch to submitting the answer.
   * In cancel Button if we click OK then  saving is false then it will return to Welcome Page
   */
  console.log(saving, "saving");
  const handleSubmit = () => {
    if (saving) {
      setSaving(false);
      setOpenDialogBox(false);
      dispatch(submitAnswer(reduxAnswer, emailID, dispatch));
    } else {
      dispatch(openTestPage(false));
    }
  };

  /**
   * @description if answer submitted successful open DialogBox
   */
  const openSubmitDialogBox = useSelector((state) => state?.answerSubmit);

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
            placeholder="Start Coding..."
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
      {openSubmitDialogBox ? <DialogBox /> : <></>}
    </>
  );
};
