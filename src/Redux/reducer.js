/* -----------------------------------------------------------------------------------------
                     Initial State     
      -----------------------------------------------------------------------------------------*/

const initialState = {
  email: "",
  questionPage: false,
  signUpPage: false,
  timer: false,
  answerSubmit: false,
  error: false,
  errorMessage: "",
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    /* -----------------------------------------------------------------------------------------
                               Open Sign In component        
      -----------------------------------------------------------------------------------------*/
    case "OPEN_SIGN_UP_PAGE": {
      return {
        ...state,
        signUpPage: payload,
        timer: false,
      };
    }
    /* -----------------------------------------------------------------------------------------
                               Open Test Component and storing mail id     
      -----------------------------------------------------------------------------------------*/
    case "OPEN_TEST_PAGE": {
      return {
        ...state,
        questionPage: payload.questionPage,
        email: payload.email,
      };
    }
    /* -----------------------------------------------------------------------------------------
                               Answer Submitted Successfully Dialog Box        
      -----------------------------------------------------------------------------------------*/
    case "OPEN_SUCCESS_DIALOG_BOX": {
      return {
        ...state,
        answerSubmit: payload.answerSubmit,
        errorMessage: payload.msg,
        questionPage: false,
        signUpPage: false,
      };
    }
    /* -----------------------------------------------------------------------------------------
                               Timer if 1hr Exceeded       
      -----------------------------------------------------------------------------------------*/
    case "SET_TIMER": {
      return {
        ...state,
        timer: true,
        signUpPage: false,
      };
    } /* -----------------------------------------------------------------------------------------
                               open Error Dialog Box and storing the message       
      -----------------------------------------------------------------------------------------*/
    case "OPEN_ERROR_DIALOG_BOX": {
      return {
        ...state,
        errorMessage: payload,
        error: true,
      };
    } /* -----------------------------------------------------------------------------------------
                               close error dialog box       
      -----------------------------------------------------------------------------------------*/
    case "CLOSE_ERROR_DIALOG_BOX": {
      return {
        ...state,
        errorMessage: "",
        error: false,
      };
    }
    /* -----------------------------------------------------------------------------------------
                                Returning Initial State        
      -----------------------------------------------------------------------------------------*/
    default: {
      return { ...state };
    }
  }
};
