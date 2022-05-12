import ReactDOM from 'react-dom';
import Welcome from 'welcome.js';
function App() {
    return (
        <>
            <Welcome />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));