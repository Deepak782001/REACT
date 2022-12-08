
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [state, setState] = useState(1000);
  const [state1, setState1] = useState(10);
  const [data, setdata]  = useState([]);

  async function FetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonData = await response.json();
    setdata(jsonData);
  }

  useEffect(() => {
    FetchData();
  }, [state]) // - dependency array 


  return (

    <div>
      <h1>  {state} </h1>
      <br />
      <h2> {state1} </h2>
      <button onClick={() => setState(state + 1)}> Foradd </button>

      <button onClick={() => setState1(state1 - 1)}> For subtract </button>
      <br/> 
        
        {
          data.map((item, index) => {
            console.log(item.id)
              return (
                <h1> name is {item.id} </h1>
              )

          })
        }
      

    </div>
    
  );

}

export default App;
