import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import Friends from './components/friends/friends';
import useToggle from './modules/toggle';

function App() {
    const routes = <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/projects">
            <Projects />
        </Route>
    </Switch>;

    const {isOn: showFriends, toggle} = useToggle(true);

    return (
        <Router>
            <div className="app">
                <Header showAside={showFriends} onToggleAside={toggle} />

                <main>
                    <section>
                        {routes}
                    </section>
                    <aside className={showFriends ? "show" : "hide"}>
                        <Friends />
                    </aside>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
