import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSignUpPage, signIn } from "../Redux/action";
import { DialogBox } from "../Test/DialogBox";

export const LoginContainer = () => {
  const [state, setstate] = useState("");

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(openSignUpPage(true));
  };

  const handleClose = () => {
    dispatch(openSignUpPage(false));
  };
  function handleChange(event) {
    setstate(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(state));
  };

  const openEmailBox = useSelector((state) => state?.signUpPage);

  const openErrorDialogBox = useSelector((state) => state?.error);
  
  const openSubmitDialogBox = useSelector((state) => state?.answerSubmit);
  return (
    <div>
      <h1 className="Heading">Welcome to Skill Tester </h1>
      <div
        style={{
          backgroundImage: "url(/developer.png)",
          height: "50vh",
          backgroundSize: "300px 200px",
          backgroundRepeat: "no-repeat",

          alignItems: "flex-end",
          display: "flex",
        }}
      >
        {openEmailBox ? (
          <Card
            sx={{ minWidth: 300, maxHeight: 300 }}
            style={{
              marginLeft: "-4px",
              marginBottom: "1vh",
            }}
            color="primary"
          >
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  fullWidth
                  variant="filled"
                  required
                  onChange={handleChange}
                />
                <div>
                  <p></p>
                </div>
                <div style={{ display: "flex", marginLeft: 100 }}>
                  <Button
                    style={{ marginRight: 10 }}
                    variant="outlined"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button variant="contained" type="submit">
                    Start
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <>
            <Button
              className="StartButton"
              variant="contained"
              onClick={handleClickOpen}
              style={{
                marginLeft: "62px",
                marginBottom: "15vh",
              }}
            >
              Lets get Started
            </Button>
          </>
        )}
      </div>
      {openErrorDialogBox ? <DialogBox /> : <></>}
      {openSubmitDialogBox ? <DialogBox /> : <></>}
    </div>
  );
};
