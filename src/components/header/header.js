import { NavLink } from 'react-router-dom';
import './header.css';
import brandLogo from '../../assets/logo/Logo.svg';
import brandText from '../../assets/logo/Text-Light.svg';

function Header(props) {
    return (
        <header>
            <div className="brand">
                <img src={brandLogo} className="brand-logo" alt="brand-logo" />
                <img src={brandText} className="brand-text" alt="brand-text" />
            </div>

            <div className="nav">
                <div className="nav-link">
                    <NavLink exact={true} activeClassName="active" to="/">Home</NavLink>
                </div>
                <div className="nav-link">
                    <NavLink activeClassName="active" to="/projects">Projects</NavLink>
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