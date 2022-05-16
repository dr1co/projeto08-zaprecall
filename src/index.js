import ReactDOM from 'react-dom';
import React from 'react';
import Welcome from './components/welcome.js';
import Recall from './components/recall.js';

import "./assets/css/reset.css";
import "./assets/css/style.css";

function App() {
    const [page, setPage] = React.useState('Welcome')

    function toPage(p){
        setPage(p);
    }

    switch(page){
        case 'Recall':
            return (<>
                <Recall />
            </>)
        default:
            return (<>
                <Welcome toPage={() => toPage('Recall')} />
            </>)
    }
}

ReactDOM.render(<App />, document.querySelector(".root"));