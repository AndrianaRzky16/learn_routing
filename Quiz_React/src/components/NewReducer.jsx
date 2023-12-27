import { useDispatch, useSelector } from "react-redux";

const NewReduxCounter = () => {
    const count = useSelector((state) => state.count);
    const dispact = useDispatch()

    return(
        <>
            <div> Counter: {count} </div>
            <button onClick={() => dispact({ type : 'DECREMENT'})}>-</button>
            <button onClick={() => dispact({ type : 'INCREMENT'})}>+</button>
        </>
    )
}

export default NewReduxCounter
