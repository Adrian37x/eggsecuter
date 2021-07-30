import logo from './logo.svg';
import './app.css';
import useCounter from './components/counter';
import Home from './pages/home/home.view';

function App() {
    const {increment, counterVal} = useCounter();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <button onClick={increment}>Increment</button>
                {counterVal}

                <Home />
            </header>
        </div>
    );
}

export default App;
