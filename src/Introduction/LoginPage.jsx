import { Button, Card, CardContent, TextField } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openSignUpPage, openTestPage } from '../Redux/action';

export const LoginPage = () => {
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
     <div  className='rightDiv'>
            <h1 className="Heading">Welcome to Skill Tester </h1>

            <div
              style={{
                backgroundImage: "url(/developer.png)",
                minHeight: "50vh",
                backgroundSize: "300px 200px",
                backgroundRepeat: "no-repeat",
               
                alignItems: "flex-end",
                display: "flex",
                maxHeight: "50vh",
                position: "absolute"
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
                  <form onSubmit={handleSubmit
}>
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
                      <Button variant="contained" type="submit">
                        Start
                      </Button>
                    </div>
                  </form>
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
  )
}
