import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { errorDialogBoxClose } from "../Redux/action";

export const DialogBox = () => {
  const openErrorDialogBox = useSelector((state) => state?.error);
  const errorMessage = useSelector((state) => state?.errorMessage);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(errorDialogBoxClose(false));
  };

  return (
    <div>
      <Dialog open={openErrorDialogBox} onClose={handleClose}>
        <DialogTitle>{"Message"}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ minWidth: 300 }}>
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ minWidth: 300 }}>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
