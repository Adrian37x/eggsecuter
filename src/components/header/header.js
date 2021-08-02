import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../logo.svg';

function Header(props) {
    return (
        <header>
            <div className="brand">
                <img id="test" src={logo} className="logo" alt="logo" />

                <div>Eggsecuter</div>
            </div>

            <div className="nav">
                <div className="nav-link">
                    <Link to="/">Home</Link>
                </div>
                <div className="nav-link">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="nav-link float-right">
                    <button onClick={props.onToggleAside}>
                        {
                            props.showAside ?
                            <i className="bi bi-x-lg"></i> :
                            <i className="bi bi-people-fill"></i>
                        }
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;