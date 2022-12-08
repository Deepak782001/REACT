import {useState} from 'react';
import './App.css';

function App() {
  const[state, setState] = useState('App');

  return (
    <div>
      <p> This is my first react {state} </p>
      <button onClick={() => setState('Application')}> Taphere</button>
    </div>
  );
}

export default App;
