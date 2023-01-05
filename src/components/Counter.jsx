import React from 'react'
import { artir, azalt, getCount } from '../features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const hazirkiReqem = useSelector((state) => state.count.value);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{hazirkiReqem}</p>
            <button onClick={() => dispatch(artir())}>Artir+</button>
            <button onClick={() => dispatch(azalt())}>Azalt-</button>
        </div>
    )
}
export default Counter;
