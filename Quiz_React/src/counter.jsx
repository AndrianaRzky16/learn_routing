import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './store/actions';

const NewReduxCounter = ({initialValue}) => {
  const count = useSelector((state) => state.counter)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'SET_COUNTER', payload: initialValue || 0})
    dispatch({type: 'SET_USER', payload: { name: 'Rizky'} })
  }, [dispatch, initialValue])

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>-</button>

      <br />

      <div>User: {user ? user.name : null}</div>
    </>
  )
}
}
export default NewReduxCounter

// const Counter = ({ count, increment, decrement }) => {
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   )
// };

// const mapStateToProps = (state) => ({
//   count: state.count
// });

// const mapDispatchToProps = {
//   increment,
//   decrement
// };

export default connect (mapStateToProps, mapDispatchToProps) (Counter);
