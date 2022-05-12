import ReactDOM from 'react-dom';
import React from 'react';
import Welcome from './welcome.js';

function App() {
    return (
        <>
            <Welcome />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));