import React, {useState} from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSbtr = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(0)
  }

  return (
    <div className="App">
        <h1>Let's create a simple counter with hooks</h1>
        <div>
          <h2>Counter: {counter}</h2>
          <div className="buttons">
            <button onClick={handleAdd}>+ 1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSbtr}>- 1</button>
          </div>
        </div>
    </div>
  );
}

export default App;
