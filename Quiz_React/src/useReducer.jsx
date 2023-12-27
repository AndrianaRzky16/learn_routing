export const initialState = {
    currentQuestion: 0,
    answers: [],
  };
  
  const quizReducer = (state, action) => {
    switch (action.type) {
      case 'NEXT_QUESTION':
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          answers: [...state.answers, action.payload],
        };
      case 'RESET_QUIZ':
        return initialState;
      default:
        return state;
    }
  };
  
  export default quizReducer;
  