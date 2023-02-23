import { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WasabiCodeContext from './main';
import SomeChild from './SomeChild';

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const wasabicodeInfo = useContext(WasabiCodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count+1);
  };

  useEffect(() => {
    console.log("Hello Hooks");
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  // useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = useMemo(() => {
    let i = 0;
    while (i < 20000000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  // useCallBack
  const [counter, setCounter] = useState(0);

  const showCount = useCallback(() => {
    alert('This is a heavy transaction');
  }, [counter]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{wasabicodeInfo.name}</p>
      <p>{wasabicodeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type='text' ref={ref} />
      <button onClick={handleRef}>UseRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>count: {state}</p>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>

      <hr />
      <h1>useMemo</h1>
      <div>count1: {count01}</div>
      <div>count2: {count02}</div>
      <div>result: {square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>

      <hr />
      <h1>useCallBack</h1>
      <SomeChild showCount={showCount} />

    </div>
  );
}

export default App;
