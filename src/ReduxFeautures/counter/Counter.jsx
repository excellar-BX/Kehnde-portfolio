import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { BiReset } from 'react-icons/bi'
const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    const[incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () =>{
      dispatch(reset())
      setIncrementAmount(0)
    }  

  return (
    <div className='flex flex-row justify-center'>
    <button onClick={() => dispatch(decrement())} >-</button>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())} >+</button>
        <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        
        <button  onClick={() => dispatch(incrementByAmount(addValue))} >Add Amount</button>
        <button onClick={() => resetAll()} >Reset<BiReset/></button>
    </div>
  )
}

export default Counter