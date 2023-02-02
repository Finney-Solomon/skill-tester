import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import TextareaAutosize from "@mui/material/TextareaAutosize";
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
  const handleSubmit = () => {
    let reduxAnswer = encodeURIComponent(answer);
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
          <TextareaAutosize
            className="displayQuestion"
            onChange={handleChange}
            value={answer}
            aria-label="maximum height"
            placeholder="Start Coding..."
            fullWidth
            style={{
              width: "45.4vw",
              fontSize: "22px",
              overflowY: "auto",
              overflow:"auto",
              // backgroundColor: "#FFFFFFF",
              height: "85.5vh",
            }}
          ></TextareaAutosize>
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
