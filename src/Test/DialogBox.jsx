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
  /* -----------------------------------------------------------------------------------------
                            Using Dispatch to call the Store             
      -----------------------------------------------------------------------------------------*/
  const dispatch = useDispatch();
  /* -----------------------------------------------------------------------------------------
                            open Error Dialog Box by using Hooks
      -----------------------------------------------------------------------------------------*/
  const openErrorDialogBox = useSelector((state) => state?.error);
  /* -----------------------------------------------------------------------------------------
                            Get  Error Message by using Hooks       
      -----------------------------------------------------------------------------------------*/
  const errorMessage = useSelector((state) => state?.errorMessage);
  /* -----------------------------------------------------------------------------------------
                            Closing Error Dialog Box by using Hooks           
      -----------------------------------------------------------------------------------------*/
  const handleClose = () => {
    dispatch(errorDialogBoxClose(false));
  };

  return (
    <>
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
    </>
  );
};
