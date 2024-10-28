import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className="calculator">
        <p2 className="title">Calculate all you need!</p2>
        <form action="">
          <div className='main'>
            <input type="text" value={value} readOnly />
            <input type="button" value="DE" onClick={() => setValue('')} />
          </div>
          <div>
            <input type="button" value="7" onClick={() => setValue(value + '7')} />
            <input type="button" value="8" onClick={() => setValue(value + '8')} />
            <input type="button" value="9" onClick={() => setValue(value + '9')} />
            <input type="button" className="multipl_button" onClick={() => setValue(value + '*')} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => setValue(value + '4')} />
            <input type="button" value="5" onClick={() => setValue(value + '5')} />
            <input type="button" value="6" onClick={() => setValue(value + '6')} />
            <input type="button" className="divis_button" onClick={() => setValue(value + '/')} />
          </div>
          <div>
            <input type="button" value="1" onClick={() => setValue(value + '1')} />
            <input type="button" value="2" onClick={() => setValue(value + '2')} />
            <input type="button" value="3" onClick={() => setValue(value + '3')} />
            <input type="button" className="addit_button" onClick={() => setValue(value + '+')} />
          </div>
          <div>
            <input type="button" value="." onClick={() => setValue(value + '.')} />
            <input type="button" value="0" onClick={() => setValue(value + '0')} />
            <input type="button" value="=" onClick={() => setValue(eval(value))} />
            <input type="button" className="subtract_button" onClick={() => setValue(value + '-')} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
