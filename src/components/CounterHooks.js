import React, {useState, useContext} from 'react'
import {ThemeContext} from '../App'

const CounterHooks = ({initialCount}) => {
    const [count, setCount] = useState(initialCount)
    const theme = useContext(ThemeContext)
    console.log(count);

    return(
        <div>
            <button style={theme} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button style={theme} onClick={() => setCount(prevCount => prevCount + 1) }>+</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default CounterHooks;


