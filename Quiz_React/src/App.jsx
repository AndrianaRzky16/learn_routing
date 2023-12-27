// App.js
import React from 'react';
import Counter from './counter';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;

// import React from "react";
// import Counter from "./Counter";
// import { Provider } from "react-redux";
// import NewReduxCounter from "./NewReducer";

// function App() {
//   return (
//     <Provider>
//       {/* <Counter initialVal={10} /> */}
//       <NewReduxCounter />
//     </Provider>
//   );
// }




// import React, { useReducer } from 'react';
// import './index.css';

// const initialState = {
//   answer: '',
//   error: null,
//   status: 'typing',
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_ANSWER':
//       return { ...state, answer: action.payload, error: null };
//     case 'SET_STATUS':
//       return { ...state, status: action.payload };
//     case 'SET_ERROR':
//       return { ...state, error: action.payload, status: 'typing' };
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// };

// function submitForm(answer) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldErrors = answer.toLowerCase() !== 'lima';
//       if (shouldErrors) {
//         reject(new Error('Wrong answer'));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// }

// const CityQuiz = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const { answer, error, status } = state;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: 'SET_STATUS', payload: 'submitting' });

//     try {
//       await submitForm(answer);
//       dispatch({ type: 'SET_STATUS', payload: 'success' });
//     } catch (err) {
//       dispatch({ type: 'SET_ERROR', payload: err.message });
//     }
//   };

//   const handleTextAreaChange = (e) => {
//     dispatch({ type: 'SET_ANSWER', payload: e.target.value });
//   };

//   const resetQuiz = () => {
//     dispatch({ type: 'RESET' });
//   };

//   return (
//     <div className="flex items-center justify-center h-screen center">
//       <div className="w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">City Quiz</h2>
//         <p>Guess the capital of a country:</p>
//         <form onSubmit={handleSubmit} className="mt-4">
//           <textarea
//             value={answer}
//             disabled={status === 'submitting'}
//             onChange={handleTextAreaChange}
//             placeholder="Enter city name"
//             className="w-full px-4 py-2 border rounded-md mt-2"
//           />
//           <br />
//           <button
//             disabled={answer.length === 0 || status === 'submitting'}
//             type="submit"
//             className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
//           >
//             Check Answer
//           </button>
//         </form>
//         {error && (
//           <p className="my-4 text-red-500">{error}</p>
//           )}
//           {status !== 'idle' && (
//             <div className="my-8 flex space-x-4">
//               <button onClick={resetQuiz} className="font-semibold text-gray-700 hover:underline">Ask again
//               &nbsp;
//               <span aria-label="Thinking Emoji" role="img">🤔</span>
//               </button>
//               {/* <ProgressBar progress={progress} /> */}
//               </div>
//               )}
//           {status === 'success' && <p className="text-green-500 mt-4">You were right!</p>}
//       </div>
//     </div>
//   );
// };

// export default CityQuiz;
