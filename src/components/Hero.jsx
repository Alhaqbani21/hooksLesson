import React, { useState } from 'react';

function Hero() {
  const [operator, setOperator] = useState('?');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = (operation) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    let res;
    if (operation === '+') res = num1 + num2;
    if (operation === '-') res = num1 - num2;
    if (operation === '*') res = num1 * num2;
    if (operation === '/') res = num1 / num2;
    if (operation === '%') res = num1 % num2;

    setOperator(operation);
    setResult(res);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-5xl font-bold">حاسبة</h1>
          <div className="flex gap-10 justify-center items-center">
            <input
              type="text"
              placeholder="Type here"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <h1 className="text-4xl"> {operator} </h1>
            <input
              type="text"
              placeholder="Type here"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <h1 className="text-4xl"> = </h1>
            <h1 className="text-4xl"> {result} </h1>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5">
            <button
              onClick={() => handleCalculate('+')}
              className="btn btn-primary"
            >
              +
            </button>
            <button
              onClick={() => handleCalculate('-')}
              className="btn btn-primary"
            >
              -
            </button>
            <button
              onClick={() => handleCalculate('/')}
              className="btn btn-primary"
            >
              /
            </button>
            <button
              onClick={() => handleCalculate('*')}
              className="btn btn-primary"
            >
              *
            </button>
            <button
              onClick={() => handleCalculate('%')}
              className="btn btn-primary"
            >
              %
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
