const initialState = {
  email: "",
  testQuestionAndAnswer: [
    { question: "Program to print a list of species to the standard output", answer: "" },
  ],
  questionPage: false,
  signUpBox: false
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_TEST_PAGE": {
      console.log(payload, "payload")
      return {
        ...state,
        questionPage: payload
      }
    }
    case "OPEN_SIGN_UP_PAGE": {
      console.log(payload, "payload");
      return {
        ...state,
        signUpBox: payload,
      };
    }

    default: {
      return { ...state };

    }
  }
};
