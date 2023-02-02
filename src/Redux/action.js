import axios from "axios";

export const openTestPage = (payload) => {
  return {
    type: "OPEN_TEST_PAGE",
    payload,
  };
};

export const openSignUpPage = (payload) => {
  return {
    type: "OPEN_SIGN_UP_PAGE",
    payload,
  };
};

export const openSuccessDialogBox = (payload) => {
  return {
    type: "OPEN_SUCCESS_DIALOG_BOX",
    payload,
  };
};

export const timer = (payload) => {
  return {
    type: "SET_TIMER",
    payload,
  };
};
export const errorDialogBox = (payload) => {
  return {
    type: "OPEN_ERROR_DIALOG_BOX",
    payload,
  };
};
export const errorDialogBoxClose = (payload) => {
  return {
    type: "CLOSE_ERROR_DIALOG_BOX",
    payload,
  };
};
export const signIn = (payload) => async (dispatch) => {
  const data = {
    mode: "checkforDetails",
    email: payload,
  };
  try {
    await axios
      .post("http://lisdev.labsvc.me/manu/w_testApp.cgi?", data)
      .then((response) => {
        if (response?.data?.success) {
          payload = {
            questionPage: true,
            email: payload,
          };
          dispatch(openTestPage(payload));
        } else {
          let error = response?.data?.msg;

          dispatch(errorDialogBox(error));
        }
      });
  } catch (error) {}
};

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
        if (response?.data?.success) {
          let payload = {
            answerSubmit: true,
            msg: msg,
          };
          dispatch(openSuccessDialogBox(payload));
        } else {
          let error = response?.data?.msg;

          dispatch(errorDialogBox(error));
        }
      });
  } catch (error) {}
};
