import React from 'react';
import './App.css';

const Counter: React.FC = () => {
  const [num, setNum] = React.useState<number>(0);
  const [numList, setNumList] = React.useState<number[]>([]);

  const clickHandler = (step: number) => {
    const newNum = num + step > 0 ? num + step : 0;
    setNum(newNum);
    setNumList((prevList) => [...prevList, newNum]);
  };
  const maxValue = Math.max(...numList);

  return (
    <>
      <p>
        Counter - {num} | Max - {maxValue}
      </p>
      <p>{numList.join(' ')}</p>
      <button className="btn" type="button" onClick={clickHandler.bind(null, 1)}>
        +1
      </button>
      <button className="btn" type="button" onClick={clickHandler.bind(null, -1)}>
        -1
      </button>
      <button className="btn" type="button" onClick={clickHandler.bind(null, 5)}>
        +5
      </button>
      <button className="btn" type="button" onClick={clickHandler.bind(null, -5)}>
        -5
      </button>
    </>
  );
};

function App() {
  return <Counter />;
}

export default App;
