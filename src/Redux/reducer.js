const initialState = {
  email: "",
  testQuestionAndAnswer: [
    { question: "Program to print a list of species to the standard output", answer: "" },
    { question: "Program to print a list of species to the standard output", answer: "" },
    { question: "Program to print a list of species to the standard output", answer: "" },
    { question: "Program to print a list of species to the standard output", answer: "" },
    { question: "Program to print a list of species to the standard output", answer: "" },
    { question: "Program to print a list of species to the standard output", answer: "" }],
  questionPage: false
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

    default: {
      return { ...state };

    }
  }
};
