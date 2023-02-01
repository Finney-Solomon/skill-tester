import { Button, TextField, Card, CardContent } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSignUpPage, openTestPage } from "../Redux/action";
import "./WelcomePage.css";
import { Box } from "@mui/system";

const WelcomePage = () => {
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(openSignUpPage(true));
  };

  const handleClose = () => {
    dispatch(openSignUpPage(false));
  };
  const handleSubmit = () => {
    dispatch(openTestPage(true));
  };

  const openEmailBox = useSelector((state) => state?.signUpBox);

  return (
    <div
      style={{
        backgroundImage: "url(/HomePage.jpg)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "-22px",

      }}
    >
      <div>
        <Box
          className="container"
          style={{
            backgroundImage: "url(/HomePage.jpg)",
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: "-22px",
            position: "sticky"
          }}
        >
          <div>
            <h1 className="Heading">Welcome to Skill Tester </h1>

            <div
              style={{
                backgroundImage: "url(/developer.png)",
                minHeight: "50vh",
                backgroundSize: "300px 200px",
                backgroundRepeat: "no-repeat",
                marginLeft: "1100px",
                alignItems: "flex-end",
                display: "flex",
                maxHeight: "50vh",
                position: "sticky"
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
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      name="email"
                      fullWidth
                      variant="filled"
                      required
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
                      <Button variant="contained" onClick={handleSubmit}>
                        Start
                      </Button>
                    </div>
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
          </div>
        </Box>
      </div>
    </div>
  );
};

export default WelcomePage;