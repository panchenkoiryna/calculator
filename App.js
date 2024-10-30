import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const send_value = (val) => {
    setValue(value + val);
  };

  const calculateResult = () => {
  let result = 0;
  let currentNumber = '';
  let currentOperator = '+';

  for (let i = 0; i < value.length; i++) {
    const char = value[i];

    if (!isNaN(char) || char === '.') {

      currentNumber += char;

    } else {

      if (currentNumber) {

        const number = parseFloat(currentNumber);

        switch (currentOperator) {
          case '+':
            result += number;
            break;
          case '-':
            result -= number;
            break;
          case '*':
            result *= number;
            break;
          case '/':
            result /= number;
            break;
        }
        currentNumber = ''; 
      }
      currentOperator = char;
    }
  }

  if (currentNumber) {
    const number = parseFloat(currentNumber);
    switch (currentOperator) {
      case '+':
        result += number;
        break;
      case '-':
        result -= number;
        break;
      case '*':
        result *= number;
        break;
      case '/':
        result /= number;
        break;
    }
  }

  setValue(result.toString());
};

  const clearValue = () => {
    setValue('');
  };

  return (
    <div className="container">
      <div className="calculator">
        <p2 className="title">Calculate all you need!</p2>
        <form action="">
          <div className='main'>
            <input type="text" value={value} readOnly />
            <input type="button" value="DE" onClick={clearValue} />
          </div>
          <div>
            <input type="button" value="7" onClick={() => send_value('7')} />
            <input type="button" value="8" onClick={() => send_value('8')} />
            <input type="button" value="9" onClick={() => send_value('9')} />
            <input type="button" className="multipl_button" onClick={() => send_value('*')} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => send_value('4')} />
            <input type="button" value="5" onClick={() => send_value('5')} />
            <input type="button" value="6" onClick={() => send_value('6')} />
            <input type="button" className="divis_button" onClick={() => send_value('/')} />
          </div>
          <div>
            <input type="button" value="1" onClick={() => send_value('1')} />
            <input type="button" value="2" onClick={() => send_value('2')} />
            <input type="button" value="3" onClick={() => send_value('3')} />
            <input type="button" className="addit_button" onClick={() => send_value('+')} />
          </div>
          <div>
            <input type="button" value="." onClick={() => send_value('.')} />
            <input type="button" value="0" onClick={() => send_value('0')} />
            <input type="button" value="=" onClick={calculateResult} />
            <input type="button" className="subtract_button" onClick={() => send_value('-')} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

