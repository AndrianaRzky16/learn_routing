// // Counter.jsx
// import React, { useReducer } from "react";
// import {
//   ChevronUp,
//   ChevronsUp,
//   ChevronDown,
//   ChevronsDown,
//   RotateCcw,
//   Hash,
// } from "react-feather";
// import counterReducer from "./CounderReducer";

// function Counter({ initialVal = 0 }) {
//   const [count, dispatch] = useReducer(counterReducer, initialVal);

//   return (
//     <div className="wrapper center">
//       <p>
//         <span>Current value:</span>
//         <span className="count">{count}</span>
//       </p>
//       <div className="button-row">
//         <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
//           {/* <ChevronUp /> */}
//         </button>
//         <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
//           {/* <ChevronsUp /> */}
//         </button>
//         <button onClick={() => dispatch({ type: 'reset', payload: initialVal })}>
//           {/* <RotateCcw /> */}
//         </button>
//         {/* <button
//           onClick={() => {
//             const nextCount = Math.ceil(Math.random() * 100);
//             dispatch({ type: 'random', payload: nextCount });
//           }}
//         >
//           <Hash />
//         </button> */}
//         <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
//           {/* <ChevronsDown /> */}
//         </button>
//         <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
//           {/* <ChevronDown /> */}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Counter;
