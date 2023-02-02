import axios from "axios";

/* -----------------------------------------------------------------------------------------
                       Test Page Open/Close             
      -----------------------------------------------------------------------------------------*/
export const openTestPage = (payload) => {
  return {
    type: "OPEN_TEST_PAGE",
    payload,
  };
};
/* -----------------------------------------------------------------------------------------
                      Sign IN Component Open/Close             
      -----------------------------------------------------------------------------------------*/
export const openSignUpPage = (payload) => {
  return {
    type: "OPEN_SIGN_UP_PAGE",
    payload,
  };
};
/* -----------------------------------------------------------------------------------------
                      Dialog Box for Saving open/close              
      -----------------------------------------------------------------------------------------*/
export const openSuccessDialogBox = (payload) => {
  return {
    type: "OPEN_SUCCESS_DIALOG_BOX",
    payload,
  };
};

/* -----------------------------------------------------------------------------------------
                      Timer to save the data after exceeded time ( 1hr)             
      -----------------------------------------------------------------------------------------*/
export const timer = (payload) => {
  return {
    type: "SET_TIMER",
    payload,
  };
};
/* -----------------------------------------------------------------------------------------
                      Dialog Box for showing Errors #open         
      -----------------------------------------------------------------------------------------*/

export const errorDialogBox = (payload) => {
  return {
    type: "OPEN_ERROR_DIALOG_BOX",
    payload,
  };
};

/* -----------------------------------------------------------------------------------------
                      Dialog Box for showing Errors #close        
      -----------------------------------------------------------------------------------------*/
export const errorDialogBoxClose = (payload) => {
  return {
    type: "CLOSE_ERROR_DIALOG_BOX",
    payload,
  };
};

/* -----------------------------------------------------------------------------------------
                      checking Entered Mail Id New/Old        
      -----------------------------------------------------------------------------------------*/
export const signIn = (payload) => async (dispatch) => {
  const data = {
    mode: "checkforDetails",
    email: payload,
  };
  try {
    await axios
      .post("http://lisdev.labsvc.me/manu/w_testApp.cgi?", data)
      .then((response) => {
        /* -----------------------------------------------------------------------------------------
                                 If Mail ID is New ->Test Page
      -----------------------------------------------------------------------------------------*/
        if (response?.data?.success) {
          payload = {
            questionPage: true,
            email: payload,
          };
          dispatch(openTestPage(payload));
        } else {
          /* -----------------------------------------------------------------------------------------
                        If Mail ID is Old -> Error Dialog Box 
      -----------------------------------------------------------------------------------------*/
          let error = response?.data?.msg;

          dispatch(errorDialogBox(error));
        }
      });
  } catch (error) {}
};

/* -----------------------------------------------------------------------------------------
                      Submitting the Answer        
      -----------------------------------------------------------------------------------------*/

export const submitAnswer = (answer, emailID) => async (dispatch) => {
  const data = {
    mode: "SubmitTest",
    email: emailID,
    TestData: answer,
  };

  try {
    await axios
      .post("http://lisdev.labsvc.me/manu/w_testApp.cgi?", data)
      .then((response) => {
        let msg = response?.data?.msg;
        /* -----------------------------------------------------------------------------------------
                     if Answers is  Submitted         
      -----------------------------------------------------------------------------------------*/
        if (response?.data?.success) {
          let payload = {
            answerSubmit: true,
            msg: msg,
          };
          dispatch(openSuccessDialogBox(payload));
        } else {
          /* -----------------------------------------------------------------------------------------
                     if  Error in Answers Submission         
      -----------------------------------------------------------------------------------------*/
          let error = response?.data?.msg;

          dispatch(errorDialogBox(error));
        }
      });
  } catch (error) {}
};
