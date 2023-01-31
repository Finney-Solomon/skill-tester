import {
  Button, Dialog, DialogTitle, DialogContent,
  DialogContentText, TextField, DialogActions,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openTestPage } from "../Redux/action";



const WelcomePage = () => {
  const [open, setOpen] = React.useState(false);

  const diapatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    setOpen(false);
    diapatch(openTestPage(true))
  };

  return (
    <div >
      <h1>Welcome to Skill Tester</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Start
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address to start the exam
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            name="email"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Start</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WelcomePage;
