import React from 'react';
import './App.css';
function App() {

    const createDigits = () => {
        const digits = [];
        for (let i = 0; i < 10; i++)
            digits.push(
                <button key={i}>{i}</button>
            )
            return digits;
    }


    return (
        <div className="App">
            <div className='calculator'></div>
            <div className='display'> </div>
            <span> 0</span>0
            <div className='operators'>
                <button>*</button>
                <button>/</button>
                <button>-</button>
                <button>+</button>

                <button> Delete</button>
                <div className='digits'>
                        { createDigits()}
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>

            </div>

        </div>




    )




}

export default App;