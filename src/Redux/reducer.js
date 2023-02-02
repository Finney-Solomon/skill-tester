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
    case "OPEN_TEST_PAGE": {
      return {
        ...state,
        questionPage: payload.questionPage,
        email: payload.email,
      };
    }
    case "OPEN_SIGN_UP_PAGE": {
      return {
        ...state,
        signUpPage: payload,

        timer: false,
      };
    }
    case "OPEN_SUCCESS_DIALOG_BOX": {
      return {
        ...state,
        answerSubmit: payload.answerSubmit,
        errorMessage: payload.msg,
        questionPage: false,
        signUpPage: false,
      };
    }

    case "SET_TIMER": {
      return {
        ...state,
        timer: true,
        signUpPage: false,
      };
    }
    case "OPEN_ERROR_DIALOG_BOX": {
      return {
        ...state,
        errorMessage: payload,
        error: true,
      };
    }
    case "CLOSE_ERROR_DIALOG_BOX": {
      return {
        ...state,
        errorMessage: "",
        error: false,
      };
    }

    default: {
      return { ...state };
    }
  }
};
